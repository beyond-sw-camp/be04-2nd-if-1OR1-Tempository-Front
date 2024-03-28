<template>
  <div class="container">
    <Header :projectName="projectName"></Header>
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th v-for="field in fields" :key="field.key">{{ field.label }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in tableData" :key="index">
            <td>{{ row.no }}</td>
            <td>
              <span v-if="isReadOnly">{{ row.content }}</span>
              <input
                v-else
                v-model="row.content"
                type="text"
                class="form-control"
                placeholder="업무 항목"
              />
            </td>
            <td>
              <span v-if="isReadOnly">{{ row.status }}</span>
              <select
                v-else
                v-model="row.status"
                class="form-select"
              >
                <option value="진행예정">진행 예정</option>
                <option value="진행중">진행 중</option>
                <option value="진행완료">완료</option>
              </select>
            </td>
            <td>
              <span v-if="isReadOnly">{{ row.startDate }}</span>
              <input
                v-else
                v-model="row.startDate"
                type="date"
                class="form-control"
              />
            </td>
            <td>
              <span v-if="isReadOnly">{{ row.endDate }}</span>
              <input
                v-else
                v-model="row.endDate"
                type="date"
                class="form-control"
              />
            </td>
            <td>
              <!-- v-model 통일 필요 -->
              <span v-if="isReadOnly">{{ row.manager.name }}</span>
              <select v-else v-model="row.manager.name" @change="updateManagerId(row, $event.target.value)" class="form-select">
                <option v-for="member in members" :key="member.id" :value="member.name">{{ member.name }}</option>
              </select>
            </td>
            <td v-if="!isReadOnly">
              <button class="btn btn-dark" @click="deleteRow(index)">
                DELETE
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="d-flex justify-content-between mt-3">
      <button class="btn btn-dark" @click="backToProject">
        Back to Project
      </button>
      <div>
        <button
          v-if="isReadOnly"
          class="btn btn-dark me-2"
          @click="isReadOnly = false"
        >
          Modify
        </button>
        <button v-if="!isReadOnly" class="btn btn-dark me-2" @click="saveData()">
          Save
        </button>
        <button v-if="!isReadOnly" class="btn btn-dark" @click="addRow()">
          Add Column
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Header from "./ProjectTemplateHeader.vue";
  import { onMounted, ref, watch } from "vue";
  import axios from "axios";
  import { useRoute, useRouter  } from 'vue-router'

  const currentRoute = useRoute();
  const router = useRouter();

  const tableData = ref([]);

  const projectName = currentRoute.query.projectName;

  const selectedMember = ref(null);

  const fields = ref([
    { key: "no", label: "No" },
    { key: "content", label: "업무 항목" },
    { key: "status", label: "진행 상태" },
    { key: "startDate", label: "시작일" },
    { key: "endDate", label: "종료일" },
    { key: "manager", label: "담당자" }, 
  ]);

  const isReadOnly = ref(true);

  // axios를 이용하여 서버와 연결
  onMounted(async () =>{
        try {
            const response = await axios.get(`http://localhost:9500/wbs/${currentRoute.params.id}`);
            const data = response.data;
            tableData.value = data.responseWBSVOList;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });

  // 프로젝트 멤버 통신
  const projectMember = ref([]);
  const members = ref([]);

  onMounted(async () => {

    try {
      const response = await axios.get(`http://localhost:9500/project/${currentRoute.params.id}`)

      projectMember.value = response.data.members;

      
    } catch (error) {
      console.error('데이터를 받아오는 중 에러 발생:', error);
    }
  });

  // 멤버 리스트 생성
  for (let i = 0; i < projectMember.value.length; i++) {
        members.value.push({ 
          id: projectMember.value[i].id, 
          name: projectMember.value[i].name });
  }

  // 멤버리스트 변경 시 반영
  watch(projectMember, (newVal, oldVal) => {
    members.value = newVal.map(member => ({ id: member.id, name: member.name }));
  });

  const updateManagerId = (row, selectedName) => {
  const selectedMember = members.value.find(member => member.name === selectedName);
  if (selectedMember) {
    row.manager.id = selectedMember.id;
  } else {
    // 선택된 멤버를 찾을 수 없을 경우 일단 첫번째 멤버로
    row.manager.id = members.value[0].id;
  }
};

  const addRow = () => {
    const lastRow = tableData.value[tableData.value.length - 1];;
        
    // 빈 행이 이미 있는 경우 행 추가x
    const attributesToCheck = ['content', 'startDate', 'endDate'];
    let emptyCheck = false;

    for (const attribute of attributesToCheck) {
        if (lastRow[attribute] !== '') {
            emptyCheck = true;
            break;
        }
    }
    
    if (emptyCheck) {
      const index = tableData.value.length;
      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0]; // 오늘 날짜를 YYYY-MM-DD 형식으로 변환
      tableData.value.push({ 
        no: index+1,
        content: "항목 작성",
        status: "진행예정",
        startDate: formattedDate, // 오늘 날짜 디폴트
        endDate: formattedDate,   // 오늘 날짜 디폴트
        manager: { id: null, name: "미정" },    // 선택필수
      });
    } 


  };
  
async function saveData() {
  const sendData = {
    target: tableData.value.map(row => ({
      content: row.content,
      status: row.status,
      startDate: row.startDate,
      endDate: row.endDate,
      managerId: row.manager.id // managerId를 직접 manager 객체의 id 속성으로 설정
    }))
  };

  console.log(sendData);

  try {
    await axios.post(
      `http://localhost:9500/wbs/save/${currentRoute.params.id}`, 
      sendData
    );
    console.log(sendData);
    isReadOnly.value = true; // isReadOnly를 ref 객체로 변경하여 값 변경
  } catch (error) {
    console.error('Error saving data:', error);
  }
}

  const deleteRow = (index) => {
    tableData.value.splice(index, 1);
  };

  const backToProject = () => {
    router.push(`/project/${currentRoute.params.id}`);
  };
</script>

<style scoped>
  .table {
    width: 100%;
  }

  .table th,
  .table td {
    padding: 0.5rem;
    text-align: center;
  }

  .table th:nth-child(3),
  .table td:nth-child(3),
  .table th:nth-child(4),
  .table td:nth-child(4),
  .table th:nth-child(5),
  .table td:nth-child(5) {
    width: 10%;
  }

  .table th:nth-child(2),
  .table td:nth-child(2) {
    width: 40%;
  }
</style>
