<template>
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
</template>

<script setup>
import { ref, onMounted } from 'vue'

    const fields = ref([
        { key: 'no', label: 'No'},
        { key: 'separate', label: '분류' },
        { key: 'content', label: '테스트 내용' },
        { key: 'expectedValue', label: '기대값' },
        { key: 'result', label: '결과' },
        { key: 'note', label: '비고' },
    ])

</script>