# Tempository-Front
<div align=center>

<img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/header.jpg">

---

</div>

<div align=center>

[😎곽윤경](https://github.com/noctesilente)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[🎸이기연](https://github.com/Leegiyeon)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[🐰이예원](https://github.com/onelee521)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[😺임원재](https://github.com/moomint8)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[🐶정우진](https://github.com/Wrinkk)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

</div>

---

<div align=center>
	<h2>📚 Tech Stack 📚</h2>
</div>
<div align="center">
  <img src="https://img.shields.io/badge/Spring-6DB33F?style=flat&logo=Spring&logoColor=white"/>
	<img src="https://img.shields.io/badge/SpringBoot-6DB33F?style&logo=SpringBoot&logoColor=white"/>
  <img src=" https://img.shields.io/badge/javascript-black?logo=javascript"/>
  <img src="https://img.shields.io/badge/Vue-black?logo=vuedotjs"/>
  <img src="https://img.shields.io/badge/Bootstrap-black?logo=bootstrap"/>
</div>

<br>

<div align=center>
	<h2>🛠 Tools 🛠</h2>
</div>
<div align=center>
	<img src="https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=flat&logo=intellij-idea&logoColor=white" />
  <img src="https://img.shields.io/badge/VS Code-black?style=flat&logo=visualstudiocode" />
	<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white" />
  <img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white" />
  <img src="https://img.shields.io/badge/Figma-black?style=flat&logo=Figma&logoColor=white" />

</div>

<br>


<div align=center>
<h2> 🗓️ WBS </h2>
2024.03.12 ~ 2024.03.29

</div>

<br>
<br>
<div align=left>

---

<details>
<summary>기능 명세서</summary>

#### 유저
- [x] 회원가입을 할 수 있다.
  - [x] 이름, 닉네임, 이메일, 비밀번호를 입력받고 저장한다.
    - [x] 닉네임을 중복 검사를 할 수 있다.
    - [x] 닉네임 중복 시 회원가입이 불가능하다.
    - [x] 이메일 중복 검사를 할 수 있다.
    - [x] 이메일 중복 시 회원가입이 불가능하다.
- [x] 로그인할 수 있다.
  - [x] 이메일, 비밀번호를 입력받아 가입된 회원 정보로 로그인할 수 있다.
    - [x] 이메일, 비밀번호가 일치하지 않으면 알림과 함께 로그인할 수 없다.
  - [x] 로그인 시 해당 정보를 이용해 다른 서비스를 이용할 수 있다.
    - [x] 로그인, 회원가입을 제외한 서비스는 로그인 없이 이용할 수 없다.
- [x] 로그아웃을 할 수 있다.
  - [x] 로그인한 상태에서 로그아웃할 수 있다.
  - [x] 로그인하지 않은 상태에선 로그아웃 요청 시 에러가 발생한다.
- [x] 현재 로그인된 회원 정보를 조회할 수 있다.
- [x] 현재 로그인된 회원의 정보를 수정할 수 있다.
  - [x] 이름, 닉네임, 비밀번호를 변경할 수 있다.
    - [x] 닉네임의 중복 검사가 가능하다.
    - [x] 닉네임 중복 시 변경이 불가능하다.
    - [x] 비밀번호 변경 시 현재 비밀번호를 같이 입력한다.
    - [x] 현재 비밀번호가 일치하지 않은 경우 변경할 수 없다.
- [x] 유저를 검색할 수 있다.
  - [x] id를 이용해 유저를 검색할 수 있다.

---

#### 프로젝트
- [x] 자신이 참여중인 프로젝트들을 조회할 수 있다.
  - [x] 참여중인 프로젝트의 id와 이름이 출력된다.
  - [x] 프로젝트 선택 시 해당 프로젝트에 대한 페이지로 이동한다.
- [x] 프로젝트 id를 이용해 프로젝트에 대한 상세 정보를 조회할 수 있다.
  - [x] 프로젝트의 진행상태, 내용, 참여자를 볼 수 있다.
- [x] 프로젝트를 추가할 수 있다.
  - [x] 프로젝트 id는 Auto Increament 된다.
  - [x] 프로젝트 생성자는 자동으로 참여자에 등록된다.
- [x] 프로젝트를 수정할 수 있다.
  - [x] 프로젝트의 이름, 진행상태, 내용을 수정할 수 있다.
    - [x] 내용을 수정한 부분만 업데이트된다.
    - [x] 존재하지 않는 프로젝트 수정 요청 시 에러가 발생한다.
- [x] 프로젝트를 삭제할 수 있다.
  - [x] 프로젝트 삭제 시 이후 프로젝트들의 번호는 자동으로 업데이트된다.
  - [x] 존재하지 않는 프로젝트 삭제 요청 시 에러가 발생한다.

---

#### 프로젝트 - 테스트케이스
- [x] 프로젝트 id를 이용해 해당 프로젝트의 모든 테스트케이스를 조회할 수 있다.
  - [x] 각 테스트케이스는 번호, 분류, 내용, 기대값, 결과, 메모, 프로젝트 id 를 포함한다.
- [x] 테스트 케이스를 추가할 수 있다.
  - [x] 분류, 내용, 기대값, 메모 를 포함한 테스트 케이스를 생성한다.
  - [x] 테스트케이스의 번호는 자동으로 Auto Increament된다.
  - [x] 결과는 기본적으로 진행전 으로 저장된다.
- [x] 한 번에 여러 테스트케이스를 저장할 수 있다.
  - [x] json의 [] 를 이용해 여러 테스트케이스를 묶어 요청 시 한 번에 저장된다.
- [x] 테스트케이스를 수정할 수 있다.
  - [x] 프로젝트 id와 테스트케이스의 번호를 이용해 지정한 테스트케이스를 수정할 수 있다.
  - [x] 분류와 내용, 기대값과 결과, 메모를 지정하여 변경할 수 있다.
- [x] 테스트케이스를 삭제할 수 있다.
  - [x] 테스트케이스 삭제 시 이후의 테스트케이스 번호가 업데이트된다.
  - [x] 존재하지 않는 테스트케이스 삭제 요청 시 에러가 발생한다.

---

#### 프로젝트 - 이슈
- [x] 프로젝트 id를 이용해 해당 프로젝트의 모든 이슈를 조회할 수 있다.
  - [x] 각 이슈는 번호, 이름, 상태, 내용, 담당자, 작성자 를 포함한다.
- [x] 이슈를 추가할 수 있다.
  - [x] 이름, 진행상태, 내용을 포함한 이슈를 생성한다.
  - [x] 담당자, 작성자는 기본적으로 이슈 생성자로 지정한다.
- [x] 이슈를 수정할 수 있다.
  - [x] 이름, 진행도, 내용, 담당자, 작성자를 수정할 수 있다.
- [x] 이슈를 삭제할 수 있다.
  - [x] 프로젝트 id와 이슈 번호를 통해 지정하여 삭제를 요청한다.
  - [x] 삭제 시 이후 이슈 번호들은 업데이트된다.
  - [x] 존재하지 않는 이슈 삭제 요청 시 에러가 발생한다.

---

#### 프로젝트 - WBS
- [x] 프로젝트 id를 이용해 해당 프로젝트의 모든 WBS를 조회할 수 있다.
  - [x] 각 WBS는 번호, 내용, 진행도, 시작일, 종료일, 담당자 를 포함한다.
- [x] WBS를 추가할 수 있다.
  - [x] 내용, 진행도, 시작일, 종료일, 담당자 를 지정하여 생성한다.
  - [x] 번호는 Auto Increament 되어 생성된다.
- [x] 한 번에 여러 WBS를 한 번에 추가할 수 있다.
  - [x] json의 []를 이용해 여러 WBS를 묶어 요청 시 한 번에 저장된다.
- [x] WBS를 수정할 수 있다.
  - [x] 프로젝트 id와 WBS 번호를 이용해 수정할 수 있다.
  - [x] 내용, 진행도, 시작일, 종료일, 담당자 를 수정할 수 있다.
  - [x] 존재하지 않는 WBS 수정 요청 시 에러가 발생한다.
- [x] WBS 삭제
  - [x] 프로젝트 id와 WBS 번호를 통해 지정하여 삭제를 요청한다.
  - [x] 삭제 시 이후 WBS id 들은 업데이트된다.
  - [x] 존재하지 않는 WBS 삭제 요청 시 에러가 발생한다.

---

#### 프로젝트 - 요구사항명세서
- [x] 프로젝트 id를 이용해 해당 프로젝트의 모든 요구사항명세서를 조회할 수 있다.
  - [x] 각 요구사항명세서는 번호, 분류, 이름, 내용, 메모를 포함한다.
- [x] 요구사항명세서를 추가할 수 있다.
  - [x] 분류, 이름, 내용, 메모 를 포함한다.
  - [x] 요구사항명세서의 id 와 번호는 Auto Increament되어 생성된다.
- [x] 한 번에 여러 요구사항명세서를 추가할 수 있다.
  - [x] json의 []를 이용해 여러 요구사항명세서를 묶어 요청시 한 번에 저장된다.
- [x] 요구사항명세서를 수정할 수 있다.
  - [x] 프로젝트 id와 요구사항명세서 번호를 통해 지정하여 수정한다.
  - [x] 분류, 이름, 내용, 메모 를 수정할 수 있다.
  - [x] 존재하지 않는 요구사항명세서 수정 요청 시 에러가 발생한다.
- [x] 요구사항명세서를 삭제할 수 있다.
  - [x] 프로젝트 id와 요구사항명세서 번호를 통해 지정하여 삭제를 요청한다.
  - [x] 삭제 시 이후 요구사항명세서의 번호들은 업데이트된다.
  - [x] 존재하지 않는 요구사항명세서 삭제 요청 시 에러가 발생한다.

---

#### 프로젝트 - 테이블 정의서
- [x] 프로젝트 id를 이용해 해당 프로젝트의 모든 테이블 정의서를 조회할 수 있다.
  - [x] 테이블 정의서의 id, 이름 을 포함한다.
- [x] 테이블 정의서를 상세조회할 수 있다.
  - [x] 테이블 정의서의 각 컬럼들에 대한 정보를 포함한다.
  - [x] 각 컬럼은 번호, 이름, pk여부, fk 정보, null able 여부, 컬렴명, default값, type 을 포함한다.
- [x] 테이블 정의서에 컬럼을 추가할 수 있다.
  - [x] 이름, pk여부, fk 정보, null able 여부, 컬렴명, default값, type 을 포함해 생성한다.
  - [x] 컬럼의 번호는 Auto Increament 되어 생성된다.
- [x] 한 번에 테이블 정의서에 여러 컬럼을 추가할 수 있다.
  - [x] json의 [] 를 이용해 컬럼을 묶어 요청 시 한 번에 저장된다.
- [x] 테이블 정의서의 컬럼을 수정할 수 있다.
  - [x] 이름, pk여부, fk 정보, null able 여부, 컬렴명, default값, type 을 수정할 수 있다.
  - [x] 존재하지 않는 컬럼 수정 요청 시 에러가 발생한다.
- [x] 테이블 정의서의 컬럼을 삭제할 수 있다.
  - [x] 프로젝트 id와 테이블 번호, 컬럼 번호를 이용해 삭제를 요청한다.
  - [x] 삭제 시 이후 컬럼들의 번호는 업데이트된다.
  - [x] 존재하지 않는 컬럼 삭제 요청 시 에러가 발생한다.
- [x] 해당 테이블에 대한 DDL을 생성할 수 있다.
  - [x] DDL 생성을 요청 시 해당 테이블의 데이터를 기반으로 DDL을 생성한다.

</details>

<br>

<details>
<summary>화면 설계서</summary>
[Home]<br>
    (1) Header에 회원 가입과 로그인 페이지로 이동하는 버튼이 표시된다.<br>
    <img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/Home.jpg"/>
    <br><br>
    [Sing Up]<br>
    (1) 이름, 닉네임, Email, 비밀번호를 입력할 수 있다.(중복되는 경우 예외반환)<br>
    <img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/Sign_up.jpg"/>
    <br><br>
    [Sign In]<br>
    (1) Email과 비밀번호를 통해 로그인할 수 있다.<br>
    <img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/Sign_in.jpg"/>
    <br><br>
    [Project List]<br>
    (1) 로그인한 유저가 참여하는 프로젝트들을 목록으로 보여준다.<br>
    (2) 프로젝트 개별 관리가 가능하다.<br>
    (3) 로그 아웃을 통해 Home화면으로 이동이 가능하다.<br>
    <img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/Projects.jpg"/>
    <br><br>
    [MyPage]<br>
    (1) 유저의 가입정보(닉네임, 이름, Email)를 확인하고 수정할 수 있다.<br>
    <img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/MyPage.jpg"/>
    <br><br>
    [Project]<br>
    (1) 프로젝트에 대한 상세 설명을 확인할 수 있다.<br>
    (2) 프로젝트의 각 하위 서비스로 이동할 수 있다.<br>
    (3) 프로젝트 관리 페이지로 이동할 수 있다.<br>
    <img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/Project.jpg"/>
    <br><br>
    [Project Management(정보)]<br>
    (1) 프로젝트에 대한 상세 설명을 수정할 수 있다.<br>
    <img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/Project_Management_Info.jpg"/>
    <br><br>
    [Project Management(회원)]<br>
    (1) 프로젝트에 참여하는 회원을 조회할 수 있다.<br>
    (2) 프로젝트에 참여하는 각 회원들이 담당하는 이슈들의 현황을 확인할 수 있다.<br>
    <img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/Project_Management_Member.jpg"/>
    <br><br>
    [WBS]<br>
    (1) 프로젝트 시작 시, 필요한 WBS를 작성할 수 있다.<br>
    (2) 프로젝트 시작 시, 필요한 WBS를 수정할 수 있다.<br>
    (3) 프로젝트 시작 시, 필요한 WBS를 조회할 수 있다.<br>
    (4) 프로젝트 시작 시, 필요한 WBS를 삭제할 수 있다.<br>
    <img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/Project_WBS_Read.png"/>
    <img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/Project_WBS_Edit.png"/>
    <br><br>
    [요구사항문서]<br>
    (1) 요구사항 문서를 작성할 수 있다.<br>
    (2) 요구사항 문서를 수정할 수 있다.<br>
    (3) 요구사항 문서를 조회할 수 있다.<br>
    (4) 요구사항 문서를 삭제할 수 있다.<br>
    <img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/Project_Requirement_Read.png"/>
    <img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/Project_Requirement_Edit.png"/>
    <br><br>
    [테이블 정의서(테이블 목록)]<br>
    (1) 테이블 정의서의 하위 테이블들을 작성할 수 있다.<br>
    (2) 테이블 정의서의 하위 테이블들을 수정할 수 있다.<br>
    (3) 테이블 정의서의 하위 테이블들을 조회할 수 있다.<br>
    (4) 테이블 정의서의 하위 테이블들을 삭제할 수 있다.<br>
    <img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/Project_Table.png"/>
    <img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/Project_Table_Add.png"/>
    <br><br>
    [테스트 케이스]<br>
    (1) 프로젝트 진행 중 기능명세에 따른 테스트를 작성할 수 있다.<br>
    (2) 프로젝트 진행 중 기능명세에 따른 테스트를 수정할 수 있다.<br>
    (3) 프로젝트 진행 중 기능명세에 따른 테스트를 조회할 수 있다.<br>
    (4) 프로젝트 진행 중 기능명세에 따른 테스트를 삭제할 수 있다.<br>
    <img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/Project_Testcase_Read.png"/>
    <img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/Project_Testcase_Edit.png"/>
    <br><br>
    [이슈]<br>
    (1) 이슈들의 진행현황과 목록을 조회할 수 있다.<br>
    (2) 이슈를 등록하는 페이지로 이동할 수 있다.<br>
    (3) 이슈를 클릭하면 이슈 상세 페이지로 이동할 수 있다.<br>
    (4) 이슈를 등록하는 페이지로 이동할 수 있다.<br>
    <img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/Project_Issue.png"/>
    <br><br>
    [이슈 등록]<br>
    (1) 이슈에 대한 상세 내용을 확인할 수 있다.<br>
    (2) 이슈의 진행상황을 확인할 수 있다.<br>
    (3) 이슈의 담당자를 확인할 수 있다.<br>
    (4) 이슈의 작성자를 확인할 수 있다.<br>
    <img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/Project_Issue_Add.png"/>
    <img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/Project_Issue_Edit.png"/>


</details>

<br>

<details><summary>스토리보드</summary>
	
[Storyboard](https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/docs/Tempository_storyboard.pdf)
<br><br>
[View Flow]<br>
    <img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/flow.png"/>
</div>
</details>

<br>

<details>
<summary>UI TEST</summary>
<br>

[Test 설계서 및 결과](https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/docs/Testcase.pdf)


</details>
<br>

<details><summary>회고</summary>
<br>
	
😎곽윤경
<br>
프론트엔드 프로젝트를 진행하면서 백엔드에서 구현한 기능들이 실제로 어떻게 동작하는지 직접 눈으로 확인할 수 있었습니다. 프론트엔드 작업을 완료한 후 기존에 만들어둔 백엔드 서버와 연결했을 때, 백엔드에서 최대한의 연산이 이루어지도록 설계하고 코드를 작성했기 때문에 막연하게만 느껴졌던 코드와 기능들이 프론트엔드와 연결되면서 명확하게 이해할 수 있게 되었습니다. 이 과정에서 Vue.js의 다양한 라이브러리를 활용해보았습니다. 특히, props 대신 사용할 수 있는 Vuex 라이브러리를 통해 상태 관리를 효과적으로 할 수 있었고, 이를 통해 컴포넌트 간의 데이터 전달과 상호작용을 보다 쉽게 구현할 수 있었습니다. 또한 백엔드에서 연산이 완료된 데이터를 프론트엔드로 가져올 때, 단어 하나라도 다르면 오류가 발생할 수 있기 때문에 데이터의 형식과 이름을 정확하게 맞춰야 한다는 것을 알게 되었습니다. 이는 프론트엔드와 백엔드 간의 원활한 소통과 협업이 얼마나 중요한지를 보여주는 경험이었습니다.
<br>
더 나아가, 가져온 데이터를 화면에 어떻게 배치하고 표현하는지에 따라 사용자 경험이 크게 달라질 수 있다는 점도 알게 되었습니다. 사용자가 쉽게 접근하고 이해할 수 있는 인터페이스를 설계하는 것이 서비스의 성공에 큰 영향을 미칠 수 있다는 것을 깨달았습니다. 지금은 우선 백엔드에서 구현된 기능을 보여주기 위해 프론트엔드를 보다 단순하게 구성하였는데 앞으로 이 프로젝트를 멈추지 않고 지속적인 리팩토링을 통해서 사용자 중심의 인터페이스 설계와 프론트엔드-백엔드 간의 효과적인 협업에 주력하여 더욱 발전된 서비스를 개발하고자 합니다. 
<br>
<br>
🎸이기연
<br>
과정에서 각 컴포넌트들의 구조와 목적을 분류하고 서비스를 사용할 수 있는 View 페이지에 대해 생각해볼 수 있었다. UX에 따라 더 편한 접근 방식을 생각하면서 화면 흐름을 구상할 수 있었고, 이에 따라 Figma 작업을 진행하였다. Figma를 통해 프로토타입을 생성하여 실제 서비스 뷰를 예상할 수 있었으며, 과정 중에 불필요하거나 추가해야하는 페이지도 생각할 수 있었다.

그리고 프로젝트를 진행하면서 CORS 문제에 대한 경험도 할 수 있었다. 서버측에서 localhost가 아닌 IP대역으로 Proxy설정을 해줌으로써 웹 페이지 접근에 대한 문제들을 해결할 수 있었다.
이후 진행할 프로젝트를 수행하면서 발생될 수 있는 문제들을 사전에 경험함에 따라 앞으로 접하게 될 프로젝트들이 더 기대되는 계기가 된 것 같다.

<br>
<br>
🐰이예원
<br>
이번 프로젝트를 통해 프론트와 백을 따로 생성하여 연결해보는 경험을 할 수 있었다. 처음 조회를 해올 때  백엔드 서버와 연결하지 않아서 목 api 사이트를 이용하여 조회를 해오고 그다음에는 json 파일을 생성하여 조회하였다. 다음 최종적으로는 백엔드 서버와 연결하여 그 안에 있는 값들을 가져올 수 있게 만들면서 프론트로 데이터를 가져오는 방법이 여러가지 있다는 것을 알게 되었다. 프론트에서 작성한 내용을  백 서버에서 저장할 수 있게 만들었는데 짧은 기간동안 구현을 하면서 데이터 하나씩 저장하는 것이 아닌 전체적으로 다시 저장하게 구현 하였는데 이런 부분들은 차후 하나씩 리팩토링 하며 발전시킬 계획이다.
<br>
<br>
😺임원재
<br>
이번 프로젝트를 진행하며 프론트 엔드의 중요성을 느낄 수 있었다. 대학 시절부터 지금까지 항상 백엔드 개발만 해본 경험이 전부였고, REST한 서버를 구축한 뒤 프론트와는 REST API 명세서만을 이야기했었다. 하지만 같은 데이터에 대해서도 어떻게 화면을 구성하냐에 따라 UX가 크게 변화하는 것을 느낄 수 있었다. 디자인적인 요소 또한 중요하지만 얼마나 직관적이냐에 따라 제공하는 기능을 빠르게 파악하고 원하는 기능을 이용할 수 있는지가 다름을 배울 수 있었다. 또한 이전에 진행했던 백엔드 개발은 REST API지만 실제 연결된 프론트는 하나(IOS / WEB)였어서 CORS에 대해 제대로 인지하지도 못했고, 따라서 처리하지도 않았다. 하지만 이번 프로젝트를 통해 CORS를 배우고, 또 처리하는 프론트에서 처리하는 방법 뿐만 아니라 백엔드에서 처리하는 방법에 대해서도 배울 수 있었다. 무엇보다 얕게나마 프론트엔드에 대해 배울 수 있어 추후 프론트엔드 개발자와의 협업에 이점을 가져갈 수 있을 것이다. 그리고 이 경험은 추후 필요하다면 풀스택 개발자가 될 때에도 빠르게 적응할 수 있도록 해주는 밑거름이 될 것이다.
<br>
<br>
🐶정우진
<br>

<br>
</details>
