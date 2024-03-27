<template>
  <div class="container">
    <Header :projectName="projectName"></Header>
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>index</th>
            <th>테이블 명</th>
            <th>속성 명</th>
            <th>PK</th>
            <th>FK</th>
            <th>Nullable</th>
            <th>컬럼 명</th>
            <th>기본값</th>
            <th>데이터 타입</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in tableData" :key="index">
            <td>{{ index + 1 }}</td>
            <td>
              <input
                v-if="!isReadOnly"
                v-model="row.tableName"
                type="text"
                class="form-control"
                placeholder="테이블 명"
              />
              <span v-else>{{ row.tableName }}</span>
            </td>
            <td>
              <input
                v-if="!isReadOnly"
                v-model="row.attributeName"
                type="text"
                class="form-control"
                placeholder="속성 명"
              />
              <span v-else>{{ row.attributeName }}</span>
            </td>
            <td>
              <input
                v-if="!isReadOnly"
                v-model="row.primaryKey"
                type="text"
                class="form-control"
                placeholder="PK"
              />
              <span v-else>{{ row.primaryKey }}</span>
            </td>
            <td>
              <input
                v-if="!isReadOnly"
                v-model="row.foreignKey"
                type="text"
                class="form-control"
                placeholder="FK"
              />
              <span v-else>{{ row.foreignKey }}</span>
            </td>
            <td>
              <select
                v-if="!isReadOnly"
                v-model="row.isNullable"
                class="form-select"
              >
                <option value="true">O</option>
                <option value="false">X</option>
              </select>
              <span v-else>{{ row.isNullable ? "O" : "X" }}</span>
            </td>
            <td>
              <input
                v-if="!isReadOnly"
                v-model="row.columnName"
                type="text"
                class="form-control"
                placeholder="컬럼 명"
              />
              <span v-else>{{ row.columnName }}</span>
            </td>
            <td>
              <input
                v-if="!isReadOnly"
                v-model="row.defaultValue"
                type="text"
                class="form-control"
                placeholder="기본값"
              />
              <span v-else>{{ row.defaultValue }}</span>
            </td>
            <td>
              <select
                v-if="!isReadOnly"
                v-model="row.dataType"
                class="form-select"
              >
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
              <span v-else>{{ row.dataType }}</span>
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
          v-if="!isReadOnly"
          class="btn btn-dark me-2"
          @click="isReadOnly = true"
        >
          Save
        </button>
        <button v-if="!isReadOnly" class="btn btn-dark" @click="addRow">
          Add Column
        </button>
        <button v-else class="btn btn-dark" @click="isReadOnly = false">
          Modify
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from './ProjectTemplateHeader.vue';
import { ref } from "vue";

const tableData = ref([
  {
    tableName: "",
    attributeName: "",
    primaryKey: "",
    foreignKey: "",
    isNullable: true,
    columnName: "",
    dataType: "int",
    defaultValue: "",
    note: "",
  },
  {
    tableName: "",
    attributeName: "",
    primaryKey: "",
    foreignKey: "",
    isNullable: true,
    columnName: "",
    dataType: "int",
    defaultValue: "",
    note: "",
  },
]);

const isReadOnly = ref(false);

const addRow = () => {
  tableData.value.push({
    tableName: "",
    attributeName: "",
    primaryKey: "",
    foreignKey: "",
    isNullable: true,
    columnName: "",
    dataType: "int",
    defaultValue: "",
    note: "",
  });
};

const deleteRow = (index) => {
  tableData.value.splice(index, 1);
};

const backToProject = () => {
  // Back to Project 버튼 클릭 시 동작할 내용 작성
  console.log("Back to Project clicked");
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

.table th:nth-child(2),
.table td:nth-child(2) {
  width: 20%;
}
</style>
