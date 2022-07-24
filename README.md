# STEADY DAY
## 💾Directory Structure
```
📦src
 ┣ 📂core
 ┃ ┣ 📂font
 ┃ ┃ ┣ 📜BAUHS93.ttf
 ┃ ┃ ┗ 📜Pretendard-Regular.ttf
 ┃ ┣ 📜colors.js
 ┃ ┣ 📜reset.css 
 ┃ ┗ 📜texts.js
 ┣ 📂routes
 ┃ ┗ 📜routes.js
 ┣ 📂ui
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂buttons
 ┃ ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┃ ┣ 📜GoBackBtn.js
 ┃ ┃ ┃ ┃ ┣ 📜IndexFindId.js
 ┃ ┃ ┃ ┃ ┣ 📜IndexFindPw.js
 ┃ ┃ ┃ ┃ ┣ 📜IndexMainPage.js
 ┃ ┃ ┃ ┃ ┗ 📜IndexMyPage.js
 ┃ ┃ ┃ ┣ 📂study
 ┃ ┃ ┃ ┃ ┣ 📜AuthAdditionalBtn.js
 ┃ ┃ ┃ ┃ ┣ 📜AuthBtn.js
 ┃ ┃ ┃ ┃ ┣ 📜AuthCancelBtn.js
 ┃ ┃ ┃ ┃ ┣ 📜CopyInviteLinkBtn.js
 ┃ ┃ ┃ ┃ ┣ 📜CopyLinkBtn.js
 ┃ ┃ ┃ ┃ ┣ 📜GoToStudyBtn.js
 ┃ ┃ ┃ ┃ ┣ 📜MakeNewStudyBtn.js
 ┃ ┃ ┃ ┃ ┣ 📜ReportBtn.js
 ┃ ┃ ┃ ┃ ┣ 📜SaveBtn.js
 ┃ ┃ ┃ ┃ ┗ 📜UploadBtn.js
 ┃ ┃ ┃ ┗ 📂user
 ┃ ┃ ┃ ┃ ┣ 📜BackToLogin.js
 ┃ ┃ ┃ ┃ ┣ 📜LoginBtn.js
 ┃ ┃ ┃ ┃ ┣ 📜LogoutBtn.js
 ┃ ┃ ┃ ┃ ┣ 📜ModifyInfoBtn.js
 ┃ ┃ ┃ ┃ ┣ 📜UserCheckBtn.js
 ┃ ┃ ┃ ┃ ┣ 📜UserJoinBtn.js
 ┃ ┃ ┃ ┃ ┗ 📜UserLeaveBtn.js
 ┃ ┃ ┣ 📂commons
 ┃ ┃ ┃ ┣ 📜CustomLink.js
 ┃ ┃ ┃ ┗ 📜Row.js
 ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┗ 📜Header.js
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┣ 📜ExplanationPic.js
 ┃ ┃ ┃ ┣ 📜FindBox.js
 ┃ ┃ ┃ ┣ 📜InputArea.js
 ┃ ┃ ┃ ┣ 📜Login.js
 ┃ ┃ ┃ ┗ 📜SignInfo.js
 ┃ ┃ ┣ 📂main
 ┃ ┃ ┃ ┣ 📂calendar
 ┃ ┃ ┃ ┃ ┗ 📜Mcalendar.js
 ┃ ┃ ┃ ┣ 📂notice
 ┃ ┃ ┃ ┃ ┣ 📜Notice.js
 ┃ ┃ ┃ ┃ ┣ 📜NoticeItem.js
 ┃ ┃ ┃ ┃ ┣ 📜NoticeList.js
 ┃ ┃ ┃ ┃ ┗ 📜NoticeView.js
 ┃ ┃ ┃ ┣ 📂ranking
 ┃ ┃ ┃ ┃ ┣ 📜LowerRank.js
 ┃ ┃ ┃ ┃ ┣ 📜LowRankItem.js
 ┃ ┃ ┃ ┃ ┣ 📜Ranking.js
 ┃ ┃ ┃ ┃ ┣ 📜RankingList.js
 ┃ ┃ ┃ ┃ ┣ 📜UpperRank.js
 ┃ ┃ ┃ ┃ ┗ 📜UpperRankItem.js
 ┃ ┃ ┃ ┣ 📂rule
 ┃ ┃ ┃ ┃ ┣ 📜Account.js
 ┃ ┃ ┃ ┃ ┣ 📜PaneltyMoney.js
 ┃ ┃ ┃ ┃ ┣ 📜Rule.js
 ┃ ┃ ┃ ┃ ┣ 📜RuleAuthDay.js
 ┃ ┃ ┃ ┃ ┣ 📜RuleItem.js
 ┃ ┃ ┃ ┃ ┗ 📜RuleMoney.js
 ┃ ┃ ┃ ┣ 📂study-info
 ┃ ┃ ┃ ┃ ┣ 📜StudyInfo.js
 ┃ ┃ ┃ ┃ ┗ 📜StudyInfoTitle.js
 ┃ ┃ ┃ ┗ 📜MainSubTitle.js
 ┃ ┃ ┣ 📂MakeNew
 ┃ ┃ ┃ ┣ 📜DaysSelect.js
 ┃ ┃ ┃ ┣ 📜DaysSelectItem.js
 ┃ ┃ ┃ ┣ 📜Members.js
 ┃ ┃ ┃ ┣ 📜NoticeInput.js
 ┃ ┃ ┃ ┗ 📜StudyInfoInput.js
 ┃ ┃ ┣ 📂mypage
 ┃ ┃ ┃ ┣ 📜Listbar.js
 ┃ ┃ ┃ ┣ 📜MyAuthList.js
 ┃ ┃ ┃ ┣ 📜MyInfo.js
 ┃ ┃ ┃ ┗ 📜ToDo.js
 ┃ ┃ ┗ 📂sidebar
 ┃ ┃ ┃ ┣ 📜Penalty.js
 ┃ ┃ ┃ ┣ 📜PenaltyAmount.js
 ┃ ┃ ┃ ┣ 📜SideBar.js
 ┃ ┃ ┃ ┣ 📜SideBarStudyItem.js
 ┃ ┃ ┃ ┣ 📜SideBarStudyList.js
 ┃ ┃ ┃ ┗ 📜SideLogoBox.js
 ┃ ┣ 📂modal
 ┃ ┃ ┣ 📂recoil
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┗ 📜StudyModalTitle.js
 ┃ ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┃ ┃ ┗ 📜useModals.js
 ┃ ┃ ┃ ┣ 📂states
 ┃ ┃ ┃ ┃ ┗ 📜modalStates.js
 ┃ ┃ ┃ ┗ 📜ModalWrapper.js
 ┃ ┃ ┗ 📜UploadStudyModal.js
 ┃ ┗ 📂pages
 ┃ ┃ ┣ 📜FindIdPage.js
 ┃ ┃ ┣ 📜FindPwPage.js
 ┃ ┃ ┣ 📜JoinPage.js
 ┃ ┃ ┣ 📜LoginPage.js
 ┃ ┃ ┣ 📜MainPage.js
 ┃ ┃ ┣ 📜MakeNewPage.js
 ┃ ┃ ┗ 📜MyPagePage.js
 ┣ 📜App.js
 ┣ 📜index.css
 ┗ 📜index.js
 ```
 
 ---
## 🛠Tech Stack
+ React
<img alt="React" src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">

+ Styled-components
 <img alt="Styled-components" src="https://img.shields.io/badge/Styled-components-DB7093?style=for-the-badge&logo=Styled-components&logoColor=white">

+ Prettier
<img alt="Prettier" src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white">


+ Recoil

