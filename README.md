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
<details><summary>화면 스토리보드</summary>
[View Flow]<br>
    <img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/flow.png"/>
</div>
</details>

<br>

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
  - [x] 요구분석명세서의 id 와 번호는 Auto Increament되어 생성된다.
- [x] 한 번에 여러 요구사항명세서를 추가할 수 있다.
  - [x] json의 []를 이용해 여러 요구사항명세서를 묶어 요청시 한 번에 저장된다.
- [x] 요구분석명세서를 수정할 수 있다.
  - [x] 프로젝트 id와 요구분석명세서 번호를 통해 지정하여 수정한다.
  - [x] 분류, 이름, 내용, 메모 를 수정할 수 있다.
  - [x] 존재하지 않는 요구사항명세서 수정 요청 시 에러가 발생한다.
- [x] 요구분석명세서를 삭제할 수 있다.
  - [x] 프로젝트 id와 요구분석명세서 번호를 통해 지정하여 삭제를 요청한다.
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
<summary>기능 설계서</summary>
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
    <img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/Project_WBS.jpg"/>
    <br><br>
    [테이블 정의서(테이블 목록)]<br>
    (1) 테이블 정의서의 하위 테이블들을 작성할 수 있다.<br>
    (2) 테이블 정의서의 하위 테이블들을 수정할 수 있다.<br>
    (3) 테이블 정의서의 하위 테이블들을 조회할 수 있다.<br>
    (4) 테이블 정의서의 하위 테이블들을 삭제할 수 있다.<br>
    <img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/Project_DefinitionOfTable.jpg"/>
    <br><br>
    [테스트 케이스]<br>
    (1) 프로젝트 진행 중 기능명세에 따른 테스트를 작성할 수 있다.<br>
    (2) 프로젝트 진행 중 기능명세에 따른 테스트를 수정할 수 있다.<br>
    (3) 프로젝트 진행 중 기능명세에 따른 테스트를 조회할 수 있다.<br>
    (4) 프로젝트 진행 중 기능명세에 따른 테스트를 삭제할 수 있다.<br>
    <img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/Project_TestCase.jpg"/>
    <br><br>
    [이슈]<br>
    (1) 이슈들의 진행현황과 목록을 조회할 수 있다.<br>
    (2) 이슈를 등록하는 페이지로 이동할 수 있다.<br>
    (3) 이슈를 클릭하면 이슈 상세 페이지로 이동할 수 있다.<br>
    (4) 이슈를 등록하는 페이지로 이동할 수 있다.<br>
    <img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/Project_Issue.jpg"/>
    <br><br>
    [이슈 등록]<br>
    (1) 이슈에 대한 상세 내용을 확인할 수 있다.<br>
    (2) 이슈의 진행상황을 확인할 수 있다.<br>
    (3) 이슈의 담당자를 확인할 수 있다.<br>
    (4) 이슈의 작성자를 확인할 수 있다.<br>
    <img src="https://github.com/beyond-sw-camp/be04-2nd-if-1OR1-Tempository-Front/blob/main/img/Project_IssueAdd.jpg"/>


</details>

<br>

<details>
<summary>UI TEST</summary>


</details>
