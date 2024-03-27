<template>
    <div>
        <ProjectTemplateHeader/>
    </div>
    
    <!-- 테스트케이스 -->
    <div id="test" class="test">
        <table id="testcase" class="testcase">
            <thead>
                <tr>
                    <th>No</th>
                    <th>분류</th>
                    <th>테스트 내용</th>
                    <th>기대값</th>
                    <th>결과</th>
                    <th>비고</th>
                </tr>
            </thead>
            <!-- 목 api 사용 -->
            <tbody>                
                <tr v-for="testcase in testcases" :key="testcase.id">
                    <td>{{ testcase.id }}</td>
                    <td>separate</td>
                    <td>{{ testcase.title }}</td>
                    <td>expectedValue</td>
                    <td>{{ testcase.completed }}</td>
                    <td>note</td>
                </tr>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
            </tbody>

            <!-- json 파일 사용 -->
            <!-- <tbody>                
                <tr v-for="testcase in testcases" :key="testcase.no">
                    <td>{{ testcase.no }}</td>
                    <td>{{ testcase.separate }}</td>
                    <td>{{ testcase.content }}</td>
                    <td>{{ testcase.expectedValue }}</td>
                    <td>{{ testcase.result }}</td>
                    <td>{{ testcase.note }}</td>
                </tr>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
            </tbody> -->
        </table>

    </div>

    <!-- 버튼 -->
    <div class="btn">
        <button type="button" class="btn btn-dark">Save</button>
        <button type="button" class="btn btn-dark">Add Column</button>
        <button type="button" class="btn btn-dark">Back to Project List</button>
    </div>
    
</template>

<script setup>
    import ProjectTemplateHeader from './ProjectTemplateHeader.vue';
    // import testcasedummy from '@/testjson/testcasedummy.json';

    import { onMounted, ref } from "vue";

    // 목 api 사용
    const testcases = ref([]);

    onMounted(async () =>{
        const response = fetch("https://jsonplaceholder.typicode.com/users/1/todos")
                        .then(response => response.json());
        testcases.value = await response;
    });

    // json 파일 사용
    // const testcases = testcasedummy;

    
</script>

<style scoped>
    .test {
            display: flex;
            justify-content : center;
            padding: 20px 0;
        }

        .testcase {
            width: 90%;
            border: 1px solid black;
        }

        .testcase tr {            
            display: flex;
            justify-content : center;
        }

        .testcase th {
            width: 100%;
            border: 1px solid black;
            text-align: center;
            align-items : center;
        }


        .testcase td {
            width: 100%;
            border: 1px solid black;
            text-align: center;
            align-items : center;
        }

        .no {
            width: 5%;
        }
        
        .btn {
            display: flex;
            justify-content : right;
        }
</style>