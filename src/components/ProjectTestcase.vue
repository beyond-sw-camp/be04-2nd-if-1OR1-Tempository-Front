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
                <tr v-for="(row, index) in tableData" :key="row.no">
                <td> {{ row.no }} </td>
                <td>
                    <input
                    v-if="!isReadOnly"
                    v-model="row.separate"
                    type="text"
                    class="form-control"
                    placeholder="분류"
                    />
                    <span v-else>{{ row.separate }}</span>
                </td>
                <td>
                    <input
                    v-if="!isReadOnly"
                    v-model="row.content"
                    type="text"
                    class="form-control"
                    placeholder="테스트 내용"
                    />
                    <span v-else>{{ row.content }}</span>
                </td>
                <td>
                    <input
                    v-if="!isReadOnly"
                    v-model="row.expectedValue"
                    type="text"
                    class="form-control"
                    placeholder="기대값"
                    />
                    <span v-else>{{ row.expectedValue }}</span>
                </td>
                <td>
                    <select v-if="!isReadOnly" v-model="row.result" class="form-select">
                        <option value="진행전">진행 전</option>
                        <option value="진행중">진행 중</option>
                        <option value="실패">실패</option>
                        <option value="성공">성공</option>
                    </select>
                    <span v-else>{{ row.result }}</span>
                </td>
                <td>
                    <input
                    v-if="!isReadOnly"
                    v-model="row.note"
                    type="text"
                    class="form-control"
                    placeholder="비고"
                    />
                    <span v-else>{{ row.note }}</span>
                </td>
                <td v-if="!isReadOnly">
                    <button class="btn btn-dark" @click="deleteRow(index)">DELETE</button>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
        <div class="d-flex justify-content-between mt-3">
            <button class="btn btn-dark" @click="backToProject()">Back to Project</button>
            <div>
            <button v-if="!isReadOnly" class="btn btn-dark me-2" @click="saveData()">Save</button>
            <button v-if="!isReadOnly" class="btn btn-dark" @click="addRow()">Add Column</button>
            <button v-else class="btn btn-dark" @click="isReadOnly = false">Modify</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import Header from './ProjectTemplateHeader.vue'
    import axios from 'axios'
    import { onMounted, ref } from 'vue'
    import { useRoute, useRouter  } from 'vue-router'


    const currentRoute = useRoute();
    const router = useRouter();
    const tableData = ref([]);

    const projectName = currentRoute.query.projectName;

    // axios를 이용하여 서버와 연결
    onMounted(async () =>{
        try {
            const response = await axios.get(`http://localhost:9500/testcase/${currentRoute.params.id}`);
            const data = response.data;
            tableData.value = data.projectTestcases;

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });

    const fields = ref([
        { key: 'no', label: 'No'},
        { key: 'separate', label: '분류' },
        { key: 'content', label: '테스트 내용' },
        { key: 'expectedValue', label: '기대값' },
        { key: 'result', label: '결과' },
        { key: 'note', label: '비고' },
    ])
    
    // 페이지에 들어왔을 때 modify 버튼 활성화
    const isReadOnly = ref(true)
    
    const emptyCheck = ref(false);
    const addRow = () => {
        const lastItem = tableData.value[tableData.value.length - 1];
        
        // 빈 행이 이미 있는 경우 행 추가x
        const attributesToCheck = ['separate', 'content', 'expectedValue', 'note'];
        let emptyCheck = false;

        for (const attribute of attributesToCheck) {
            if (lastItem[attribute] !== '') {
                emptyCheck = true;
                break;
            }
        }
        
        if (emptyCheck) {
            const index = tableData.value.length;
            tableData.value.push({ no: index+1, separate: '', content: '', expectedValue: '', result: '진행전', note: '' })
        }
    }

    async function saveData() {
        const sendData = { target: tableData.value };

        await axios.post(
            `http://localhost:9500/testcase/save/${currentRoute.params.id}`, 
            sendData
        );
        
        this.isReadOnly = true;
    }
    
    const deleteRow = (index) => {
        tableData.value.splice(index, 1);

        // 삭제 후 인덱스 값 업데이트(서버랑 연결되면 변경될 수 있음)
        for (let i = index; i < tableData.value.length; i++) {
            tableData.value[i].no = i+1;
        }
    }
    
    function backToProject() {

        router.push(`/project/${currentRoute.params.id}`);
    }

    
</script>

<style scoped>

    .table-responsive {
        overflow-x: auto; /* 가로 스크롤을 필요로 하는 경우 */
        overflow-y: auto; /* 세로 스크롤을 필요로 하는 경우 */
        max-height: 1000px; /* 원하는 높이로 설정 */
    }
    .table {
        width: 100%;
    }
    
    .table th,
    .table td {
        padding: 0.5rem;
        text-align: center;
    }
    
    
    .table th:nth-child(5),
    .table td:nth-child(5)
    {
        min-width: 120px;
        width: 20%;
    }
    
    
    .table th:nth-child(3),
    .table td:nth-child(3),
    .table th:nth-child(4),
    .table td:nth-child(4),
    .table th:nth-child(6),
    .table td:nth-child(6)
    {
        min-width: 200px;
        width: 40%;
    }

    .table th:nth-child(2),
    .table td:nth-child(2)
    {
        min-width: 150px;
        width: 30%;
    }
</style>