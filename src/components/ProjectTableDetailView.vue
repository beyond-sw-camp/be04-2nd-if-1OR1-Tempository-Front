<template>
  <div class="container">
    <Header :projectName="projectName"></Header>
    <div class="table-header">
      <h3>{{ tableName }}</h3>
    </div>
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>index</th>
            <th>속성 명</th>
            <th>PK</th>
            <th>FK</th>
            <th>Nullable</th>
            <th>컬럼 명</th>
            <th>기본값</th>
            <th>데이터 타입</th>
            <th>비고</th>
            <th v-if="!isReadOnly">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in table.columns" :key="index">
            <td>{{ row.propertyNo }}</td>
            <td>
              <span v-if="row.isReadOnly">{{ row.propertyName }}</span>
              <input
                v-else
                v-model="row.propertyName"
                type="text"
                class="form-control"
                placeholder="속성 명"
              />
            </td>
            <td>
              <span v-if="row.isReadOnly">{{ row.primaryKey ? "O" : "X" }}</span>
              <select v-else v-model="row.primaryKey" class="form-select">
                <option :value="true">O</option>
                <option :value="false">X</option>
              </select>
            </td>
            <td>
              <span v-if="row.isReadOnly">{{ row.foreignKey }}</span>
              <input
                v-else
                v-model="row.foreignKey"
                type="text"
                class="form-control"
                placeholder="FK"
              />
            </td>
            <td>
              <span v-if="row.isReadOnly">{{ row.nullAble ? "O" : "X" }}</span>
              <select v-else v-model="row.nullAble" class="form-select">
                <option :value="true">O</option>
                <option :value="false">X</option>
              </select>
            </td>
            <td>
              <span v-if="row.isReadOnly">{{ row.columnName }}</span>
              <input
                v-else
                v-model="row.columnName"
                type="text"
                class="form-control"
                placeholder="컬럼 명"
              />
            </td>
            <td>
              <span v-if="row.isReadOnly">{{ row.defaultValue }}</span>
              <input
                v-else
                v-model="row.defaultValue"
                type="text"
                class="form-control"
                placeholder="기본값"
              />
            </td>
            <td>
              <span v-if="row.isReadOnly">{{ row.dataType }}</span>
              <select v-else v-model="row.dataType" class="form-select">
                <option value="int">int</option>
                <option value="bigint">bigint</option>
                <option value="smallint">smallint</option>
                <option value="tinyint">tinyint</option>
                <option value="float">float</option>
                <option value="double">double</option>
                <option value="decimal">decimal</option>
                <option value="char">char</option>
                <option value="varchar">varchar</option>
                <option value="text">text</option>
                <option value="date">date</option>
                <option value="datetime">datetime</option>
                <option value="timestamp">timestamp</option>
                <option value="time">time</option>
                <option value="boolean">boolean</option>
              </select>
            </td>
            <td>
              <span v-if="row.isReadOnly">{{ row.note }}</span>
              <input
                v-else
                v-model="row.note"
                type="text"
                class="form-control"
                placeholder="비고"
              />
            </td>
            <td v-if="!isReadOnly">
              <button
                v-if="!row.isReadOnly"
                class="btn btn-dark me-2"
                @click="saveRow(row)"
              >
                SAVE
              </button>
              <button
                v-if="row.isReadOnly"
                class="btn btn-dark me-2"
                @click="toggleRowReadOnly(row)"
              >
                Edit
              </button>
              <button class="btn btn-dark" @click="deleteRow(row.propertyNo)">
                DELETE
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="d-flex justify-content-between mt-3">
      <button class="btn btn-dark" @click="backToTableList">Back</button>
      <div>
        <button v-if="isReadOnly" class="btn btn-dark me-2" @click="createDDL()">Create DDL</button>
        <button v-if="isReadOnly" class="btn btn-dark me-2" @click="toggleReadOnly">
          Edit
        </button>
        <button v-else class="btn btn-dark me-2" @click="toggleReadOnly">
          Done
        </button>
        <button v-if="!isReadOnly" class="btn btn-dark" @click="addRow">
          Add Column
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import Header from "./Header.vue";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const currentRoute = useRoute();
const router = useRouter();

const table = ref({
  tableNo: null,
  columns: [],
});

const tableName = ref("");
const isReadOnly = ref(true);
const projectName = ref("");
let ddlContent = ref("");

// 에러 처리 함수
function handleErrorMessage(error) {
  if (error.response && error.response.status === 400) {
    const errorMessage = error.response.data.message;
    // 에러 메시지를 알림창으로 표시
    alert(errorMessage);
    // 로그인 페이지로 리다이렉트
    router.push('/signin'); // 로그인 페이지 경로로 변경해주세요
  }
}

async function fetchData() {
  try {
    const res = await axios.get('http://localhost:9500/user/who-am-i');
    user.value.name = res.data.name;
    user.value.nickname = res.data.nickname;
    user.value.email = res.data.email;
  } catch (error) {
    handleErrorMessage(error);
  }
}

onMounted(() => {
  // 페이지가 마운트되면 데이터를 가져옵니다.
  fetchData();
});


onMounted(async () => {
  if (currentRoute.params.tableNo === "new") {
    isReadOnly.value = false;
    createNewTable();
  } else {
    await fetchTableDetails();
  }

  try {
    const response = await axios.get(
      `http://localhost:9500/project/${currentRoute.params.projectId}`
    );
    projectName.value = response.data.name;
  } catch (error) {
    console.error("Failed to fetch project name:", error);
  }
});

const fetchTableDetails = async () => {
  try {
    const response = await axios.get(
      `http://localhost:9500/table/${currentRoute.params.projectId}/${currentRoute.params.tableNo}`
    );
    table.value = {
      tableNo: response.data.tableNo,
      columns: response.data.tableDetailVOList.map((column) => ({
        ...column,
        isReadOnly: isReadOnly.value,
      })),
    };
    tableName.value = response.data.tableName;
  } catch (error) {
    console.error("Error fetching table details:", error);
  }
};

const createNewTable = () => {
  table.value.columns = [
    {
      propertyNo: 1,
      propertyName: "",
      primaryKey: false,
      foreignKey: "",
      nullAble: true,
      columnName: "",
      defaultValue: "",
      dataType: "int",
      note: "",
      isReadOnly: false,
    },
  ];
};

const addRow = async () => {
  const newRow = {
    propertyName: "",
    primaryKey: false,
    foreignKey: "",
    nullAble: true,
    columnName: "",
    defaultValue: "",
    dataType: "int",
    note: "",
    isReadOnly: false,
  };
  try {
    const response = await axios.post(
      `http://localhost:9500/table/add/${currentRoute.params.projectId}/${currentRoute.params.tableNo}`,
      newRow
    );
    newRow.propertyNo = response.data.propertyNo;
    table.value.columns.push(newRow);
  } catch (error) {
    console.error("Error adding row:", error);
  }
};

const saveRow = async (row) => {
  const updatedRow = {
    propertyNo: row.propertyNo,
    propertyName: row.propertyName,
    primaryKey: row.primaryKey,
    foreignKey: row.foreignKey,
    nullAble: row.nullAble,
    columnName: row.columnName,
    defaultValue: row.defaultValue,
    dataType: row.dataType,
    note: row.note,
  };
  try {
    await axios.put(
      `http://localhost:9500/table/modify/${currentRoute.params.projectId}/${currentRoute.params.tableNo}`,
      updatedRow
    );
    console.log("Row saved successfully");
    row.isReadOnly = true;
  } catch (error) {
    console.error("Error saving row:", error);
  }
};

const deleteRow = async (propertyNo) => {
  try {
    await axios.delete(
      `http://localhost:9500/table/remove/${currentRoute.params.projectId}/${currentRoute.params.tableNo}`,
      {
        data: { propertyNo },
      }
    );
    await fetchTableDetails();
  } catch (error) {
    console.error("Error deleting row:", error);
  }
};

const toggleReadOnly = () => {
  isReadOnly.value = !isReadOnly.value;
  table.value.columns = table.value.columns.map((column) => ({
    ...column,
    isReadOnly: isReadOnly.value,
  }));
};

const toggleRowReadOnly = (row) => {
  row.isReadOnly = !row.isReadOnly;
};

const backToTableList = () => {
  router.push(`/table/${currentRoute.params.projectId}`);
};


async function createDDL() {
  try {
    const response = await axios.get(`http://localhost:9500/table/create-ddl/${currentRoute.params.projectId}/${currentRoute.params.tableNo}`);
    console.log(response)
    ddlContent = response.data.message;

    const ddlParts = response.data.message.split('\n');
    ddlContent = ddlParts.join('\n');
    alert(ddlContent);
  } catch (error) {
    console.error('Error fetching DDL content:', error);
  }

  return ddlContent;
}
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

.table th:nth-child(2),
.table td:nth-child(2),
.table th:nth-child(3),
.table td:nth-child(3),
.table th:nth-child(4),
.table td:nth-child(4),
.table th:nth-child(5),
.table td:nth-child(5),
.table th:nth-child(6),
.table td:nth-child(6),
.table th:nth-child(7),
.table td:nth-child(7),
.table th:nth-child(8),
.table td:nth-child(8),
.table th:nth-child(9),
.table td:nth-child(9),
.table th:nth-child(10),
.table td:nth-child(10) {
  width: 10%;
}

.table-header {
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 1rem;
}
</style>