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
