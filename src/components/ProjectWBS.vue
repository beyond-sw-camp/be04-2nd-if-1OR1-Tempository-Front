<template>
    <div class="container">
        <Header :projectName="projectName"></Header>
        <div class="table-responsive">
            <table class="table table-bordered">
            <thead>
                <tr>
                <th>Index</th>
                <th v-for="field in fields" :key="field.key">{{ field.label }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in tableData" :key="index">
                <td>{{ index + 1 }}</td>
                <td>
                    <input
                    v-if="!isReadOnly"
                    v-model="row.taskItem"
                    type="text"
                    class="form-control"
                    placeholder="업무 항목"
                    />
                    <span v-else>{{ row.taskItem }}</span>
                </td>
                <td>
                    <select v-if="!isReadOnly" v-model="row.status" class="form-select">
                    <option value="진행 중">진행 중</option>
                    <option value="완료">완료</option>
                    </select>
                    <span v-else>{{ row.status }}</span>
                </td>
                <td>
                    <input
                    v-if="!isReadOnly"
                    v-model="row.startDate"
                    type="date"
                    class="form-control"
                    />
                    <span v-else>{{ row.startDate }}</span>
                </td>
                <td>
                    <input
                    v-if="!isReadOnly"
                    v-model="row.endDate"
                    type="date"
                    class="form-control"
                    />
                    <span v-else>{{ row.endDate }}</span>
                </td>
                <td>
                    <input
                    v-if="!isReadOnly"
                    v-model="row.manager"
                    type="text"
                    class="form-control"
                    placeholder="담당자 이름"
                    />
                    <span v-else>{{ row.manager }}</span>
                </td>
                <td v-if="!isReadOnly">
                    <button class="btn btn-dark" @click="deleteRow(index)">DELETE</button>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
        <div class="d-flex justify-content-between mt-3">
            <button class="btn btn-dark" @click="backToProject">Back to Project</button>
            <div>
            <button v-if="!isReadOnly" class="btn btn-dark me-2" @click="isReadOnly = true">Save</button>
            <button v-if="!isReadOnly" class="btn btn-dark" @click="addRow">Add Column</button>
            <button v-else class="btn btn-dark" @click="isReadOnly = false">Modify</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import Header from './ProjectTemplateHeader.vue'
    import { ref } from 'vue'
    
    const tableData = ref([
        { taskItem: '', status: '진행 중', startDate: '', endDate: '', manager: '' },
        { taskItem: '', status: '진행 중', startDate: '', endDate: '', manager: '' },
    ])
    
    const fields = ref([
        { key: 'taskItem', label: '업무 항목' },
        { key: 'status', label: '진행 상태' },
        { key: 'startDate', label: '시작일' },
        { key: 'endDate', label: '종료일' },
        { key: 'manager', label: '담당자 이름' },
    ])
    
    const isReadOnly = ref(false)
    
    const addRow = () => {
        tableData.value.push({ taskItem: '', status: '진행 중', startDate: '', endDate: '', manager: '' })
    }
    
    const deleteRow = (index) => {
        tableData.value.splice(index, 1)
    }
    
    const backToProject = () => {
        // Back to Project 버튼 클릭 시 동작할 내용 작성
        console.log('Back to Project clicked')
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