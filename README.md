


# 📖 STEADY DAY <img src="https://user-images.githubusercontent.com/77518932/182035820-37c94eb9-a295-47e8-a5fa-a163175b5ca9.png" align=left />
STEADY DAY와 함께 스터디를 손쉽게 관리해 보세요!<br>
스터디원 초대부터 스터디 인증, 벌금 정산까지 간편하게!

<br>
<br>

---


<br>
<br>

## 🛠 Tech Stack
+ React
<img alt="React" src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">

+ Styled-components
 <img alt="Styled-components" src="https://img.shields.io/badge/Styled-components-DB7093?style=for-the-badge&logo=Styled-components&logoColor=white">

+ Prettier
<img alt="Prettier" src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white">


+ Recoil
<br>
<br>

---


## 💡 컨셉

스터디 인증도, 벌금 정산도 번거로워 고심하는 당신께 -<br>
<br>
<br>
STEADY DAY는 모든 스터디원이 한 공간을 공유하며 서로의 인증과 출석 내역을 확인할 수 있습니다.<br>
각 스터디원은 자신의 컬러를 가지며,<br>
스터디 인증을 완료하면 해당하는 날짜에 자신의 색깔이 채워집니다. <br>
<br>
스터디원들의 진도를 한눈에 확인할 수 있고, <br>
지각과 결석에 따라 벌금을 자동으로 정산해 줍니다. <br>
<br>
STEADY DAY와 함께라면,<br>
더 간편하게, 더 효율적으로 스터디를 관리할 수 있습니다.
<br>
<br>


---


## 🚀 기능 설명
### `1️⃣ 스터디 규칙 보기`
활동하고 있는 스터디 별로, 인증 기한과 간단한 규칙을 한눈에 확인할 수 있습니다.


### `2️⃣ 스터디 인증하기`
오늘도 성실하게 스터디에 참여한 당신!<br>
사진이나 링크를 올려 간편하게 스터디를 인증할 수 있습니다.<br>
인증을 완료하면 새하얀 달력을 자신의 색상으로 채울 수 있습니다.<br>
<br>
인증 기한을 넘겨도 인증을 제출할 수 있으니,<br>
성실하게 출석 도장을 찍어 보아요!

### `3️⃣ 벌금 정산`
스터디 개설 시 방장은 벌금 규칙을 지정해야 합니다.<br>
방장이 지정한대로, 지각 시와 결석 시 벌금이 각기 책정됩니다.<br>
<br>
벌금은 일주일 단위로 리셋되며,<br>
매일매일 체크할 필요 없이, 주에 한 번 정산하여<br>
더 편리하고 정확하게 스터디를 진행할 수 있습니다.

### `4️⃣ 이번 주 랭킹 확인하기`
출석률을 기준으로, 주별 참여율 랭킹을 책정해 줍니다.<br>
메인 페이지에서 확인이 가능하며,<br>
1위를 한 스터디원의 컬러는 달력의 테마 색상으로 지정되어,<br>
다음 주에 달력을 자신의 색으로 물들일 수 있습니다.<br>
<br>
이번 주엔 꼭 1위를 차지해 보세요!
<br>
<br>

---


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
 
 
