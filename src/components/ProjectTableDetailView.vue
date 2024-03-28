<template>
    <div class="container">
      <div class="table-header">
        <input
          v-model="table.tableName"
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
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        table: {
          tableNo: null,
          tableName: '',
          columns: [],
        },
        isReadOnly: true,
        isTableNameReadOnly: true,
      };
    },
    mounted() {
      if (this.$route.params.tableNo === 'new') {
        this.isReadOnly = false;
        this.isTableNameReadOnly = false;
        this.createNewTable();
      } else {
        this.fetchTableDetails();
      }
    },
    methods: {
        fetchTableDetails() {
  axios
    .get(`http://localhost:9500/table/${this.$route.params.projectId}/${this.$route.params.tableNo}`)
    .then((response) => {
      this.table = {
        tableNo: response.data.tableNo,
        tableName: response.data.tableName, // 데이터베이스에서 가져온 테이블 이름
        columns: response.data.tableDetailVOList.map(column => ({
          ...column,
          isReadOnly: this.isReadOnly,
        })),
      };
    })
    .catch((error) => {
      console.error('Error fetching table details:', error);
    });
},
      createNewTable() {
        this.table.columns = [
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
        ];
      },
      addRow() {
        const newRow = {
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
        axios
          .post(`http://localhost:9500/table/add/${this.$route.params.projectId}/${this.$route.params.tableNo}`, newRow)
          .then((response) => {
            newRow.propertyNo = response.data.propertyNo;
            this.table.columns.push(newRow);
          })
          .catch((error) => {
            console.error('Error adding row:', error);
          });
      },
      saveRow(row) {
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
        axios
          .put(`http://localhost:9500/table/modify/${this.$route.params.projectId}/${this.$route.params.tableNo}`, updatedRow)
          .then(() => {
            console.log('Row saved successfully');
            row.isReadOnly = true;
          })
          .catch((error) => {
            console.error('Error saving row:', error);
          });
      },
      deleteRow(propertyNo) {
        axios
          .delete(`http://localhost:9500/table/remove/${this.$route.params.projectId}/${this.$route.params.tableNo}`, {
            data: { propertyNo },
          })
          .then(() => {
            this.fetchTableDetails();
          })
          .catch((error) => {
            console.error('Error deleting row:', error);
          });
      },
      toggleReadOnly() {
        this.isReadOnly = !this.isReadOnly;
        this.isTableNameReadOnly = this.isReadOnly;
        this.table.columns = this.table.columns.map(column => ({
          ...column,
          isReadOnly: this.isReadOnly,
        }));
      },
      toggleRowReadOnly(row) {
        row.isReadOnly = !row.isReadOnly;
      },
      toggleTableNameReadOnly() {
        this.isTableNameReadOnly = !this.isTableNameReadOnly;
      },
      saveTableName() {
        axios
          .put(`http://localhost:9500/table/modify/${this.$route.params.projectId}/${this.$route.params.tableNo}`, {
            tableName: this.table.tableName,
          })
          .then(() => {
            console.log('Table name saved successfully');
            this.isTableNameReadOnly = true;
            this.fetchTableDetails();
          })
          .catch((error) => {
            console.error('Error saving table name:', error);
          });
      },
      backToTableList() {
        this.$router.push(`/table/${this.$route.params.projectId}`);
      },
    },
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