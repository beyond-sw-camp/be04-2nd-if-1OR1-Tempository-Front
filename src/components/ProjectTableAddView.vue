<template>
    <div class="container">
      <Header :projectName="projectName"></Header>
      <div class="table-header">
        <input
          v-model="tableName"
          type="text"
          class="form-control"
          placeholder="테이블 명"
          :readonly="isTableNameReadOnly"
        />
        <button
          v-if="!isTableNameReadOnly"
          class="btn btn-dark ms-2"
          @click="saveTableName"
        >
          Save Table Name
        </button>
        <button
          v-if="isTableNameReadOnly"
          class="btn btn-dark ms-2"
          @click="toggleTableNameReadOnly"
        >
          Edit
        </button>
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
            <tr v-for="(row, index) in columns" :key="index">
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
                <span v-if="row.isReadOnly">{{ row.primaryKey ? 'O' : 'X' }}</span>
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
                <span v-if="row.isReadOnly">{{ row.nullAble ? 'O' : 'X' }}</span>
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
                  Save
                </button>
                <button
                  v-if="row.isReadOnly"
                  class="btn btn-dark me-2"
                  @click="toggleRowReadOnly(row)"
                >
                  Edit
                </button>
                <button class="btn btn-dark" @click="deleteRow(row.propertyNo)">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-flex justify-content-between mt-3">
        <button class="btn btn-dark" @click="backToTableList">Back</button>
        <div>
          <button v-if="isReadOnly" class="btn btn-dark me-2" @click="toggleReadOnly">
            Modify
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
  import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import Header from './Header.vue';

const currentRoute = useRoute();
const router = useRouter();
const tableName = ref('');
const projectName = ref('');

  const columns = ref([
    {
      propertyNo: 1,
      propertyName: '',
      primaryKey: false,
      foreignKey: '',
      nullAble: true,
      columnName: '',
      defaultValue: '',
      dataType: 'int',
      note: '',
      isReadOnly: false,
    },
  ]);
  const isReadOnly = ref(false);
  const isTableNameReadOnly = ref(false);
  
  // 새로운 행 추가
  const addRow = () => {
    const newRow = {
      propertyNo: columns.value.length + 1,
      propertyName: '',
      primaryKey: false,
      foreignKey: '',
      nullAble: true,
      columnName: '',
      defaultValue: '',
      dataType: 'int',
      note: '',
      isReadOnly: false,
    };
    columns.value.push(newRow);
  };
  
  // 행 삭제
  const deleteRow = (index) => {
    columns.value.splice(index - 1, 1);
    columns.value = columns.value.map((column, idx) => ({
      ...column,
      propertyNo: idx + 1,
    }));
  };
  
  // 행 저장
  const saveRow = (row) => {
    row.isReadOnly = true;
  };
  
  // 행 수정 모드 전환
  const toggleRowReadOnly = (row) => {
    row.isReadOnly = !row.isReadOnly;
  };
  
  // 테이블 수정 모드 전환
  const toggleReadOnly = () => {
    isReadOnly.value = !isReadOnly.value;
    isTableNameReadOnly.value = isReadOnly.value;
    columns.value = columns.value.map(column => ({ ...column, isReadOnly: isReadOnly.value }));
  };
  
  // 테이블명 수정 가능 상태 전환
  const toggleTableNameReadOnly = () => {
    isTableNameReadOnly.value = !isTableNameReadOnly.value;
  };
  
  // 테이블명 저장
  const saveTableName = () => {
    isTableNameReadOnly.value = true;
  };
  
  // 테이블 리스트로 돌아가기
  const backToTableList = () => {
    router.push(`/table/${currentRoute.params.projectId}`);
  };

  onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:9500/project/${currentRoute.params.projectId}`);
    projectName.value = response.data.name;
  } catch (error) {
    console.error('Failed to fetch project name:', error);
  }
});
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
  