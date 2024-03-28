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
              <span v-if="isReadOnly">{{ row.tableName }}</span>
              <input
                v-else
                v-model="row.tableName"
                type="text"
                class="form-control"
                placeholder="테이블 명"
                @change="saveRow(row)"
              />
            </td>
            <td>
              <span v-if="isReadOnly">{{ row.attributeName }}</span>
              <input
                v-else
                v-model="row.attributeName"
                type="text"
                class="form-control"
                placeholder="속성 명"
                @change="saveRow(row)"
              />
            </td>
            <td>
              <span v-if="isReadOnly">{{ row.primaryKey }}</span>
              <input
                v-else
                v-model="row.primaryKey"
                type="text"
                class="form-control"
                placeholder="PK"
                @change="saveRow(row)"
              />
            </td>
            <td>
              <span v-if="isReadOnly">{{ row.foreignKey }}</span>
              <input
                v-else
                v-model="row.foreignKey"
                type="text"
                class="form-control"
                placeholder="FK"
                @change="saveRow(row)"
              />
            </td>
            <td>
              <span v-if="isReadOnly">{{ row.isNullable ? "O" : "X" }}</span>
              <select v-else v-model="row.isNullable" class="form-select" @change="saveRow(row)">
                <option value="true">O</option>
                <option value="false">X</option>
              </select>
            </td>
            <td>
              <span v-if="isReadOnly">{{ row.columnName }}</span>
              <input
                v-else
                v-model="row.columnName"
                type="text"
                class="form-control"
                placeholder="컬럼 명"
                @change="saveRow(row)"
              />
            </td>
            <td>
              <span v-if="isReadOnly">{{ row.defaultValue }}</span>
              <input
                v-else
                v-model="row.defaultValue"
                type="text"
                class="form-control"
                placeholder="기본값"
                @change="saveRow(row)"
              />
            </td>
            <td>
              <span v-if="isReadOnly">{{ row.dataType }}</span>
              <select v-else v-model="row.dataType" class="form-select" @change="saveRow(row)">
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
              <span v-if="isReadOnly">{{ row.note }}</span>
              <input
                v-else
                v-model="row.note"
                type="text"
                class="form-control"
                placeholder="비고"
                @change="saveRow(row)"
              />
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
        <button v-else class="btn btn-dark me-2" @click="saveAllRows">
          Save
        </button>
        <button v-if="!isReadOnly" class="btn btn-dark" @click="addRow">
          Add Column
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "./ProjectTemplateHeader.vue";
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

const isReadOnly = ref(true);

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

const saveRow = async (row) => {
  try {
    await axios.post('/api/row', row);
    console.log('Row data saved successfully');
  } catch (error) {
    console.error('Error saving row data:', error);
  }
};


const saveAllRows = async () => {
  try {
    for (const row of tableData.value) {
      await saveRow(row);
    }
    console.log('All rows saved successfully');
    isReadOnly.value = true;
  } catch (error) {
    console.error('Error saving rows:', error);
  }
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