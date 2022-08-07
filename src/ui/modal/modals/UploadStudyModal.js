import React from "react";
import styled from "styled-components";
import { Dialog, DialogContent } from "@mui/material";
import StudyModalTitle from "../components/StudyModalTitle";
import { StudyModalUrl } from "../components/StudyModalUrl";
import { useStudyPostInput } from "../../../feature/studies/studyPost/recoil/useStudyPost";
import { Subtitle2 } from "../../../core/texts";
import { gray100, gray300, hintColor } from "../../../core/colors";
import icon from "../../../assets/icon_picture_card_mypage.png";
import axios from "axios";
import { useSelectedStudyId } from "../../../feature/studies/studySelect/recoil/useSelectedStudy";

export default function UploadStudyModal({ isOpen, setIsOpen }) {
  const { setLink, setImageUrl, studyPostInputReset } = useStudyPostInput();
  const { selectedStudyId } = useSelectedStudyId();

  const closeHandler = () => {
    setIsOpen(false);
    setLink("");
    setImageUrl("");
  };

  // const encoderFileToBase64 = (e) => {
  //   const reader = new FileReader();
  //   console.log("yeah");
  //   reader.readAsDataURL(e.target.profile_files.files[0]);
  //   return new Promise((resolve) => {
  //     reader.onload = () => {
  //       console.log("hey");
  //       setImageUrl(reader.result);
  //       resolve();
  //     };
  //   });
  // };

  const onSubmit = (e) => {
    const data = JSON.stringify({
      studyId: selectedStudyId,
      link: "www.notion.so",
    });

    e.preventDefault();
    e.persist();

    const formdata = new FormData();
    formdata.append("imgUrl", e.target.profile_files.files[0]);

    const blob = new Blob([data], {
      type: "application/json",
    });

    formdata.append("content", blob);

    axios({
      method: "POST",
      url: "https://steadyday.shop/studyPosts",
      headers: {
        "Content-Type": "multipart/form-data",
        "X-AUTH-TOKEN": localStorage.getItem("accessToken"),
      },

      data: formdata,
    }).then((res) => {
      studyPostInputReset();
      console.log("res:", res);
    });
  };
  return (
    <Dialog
      open={isOpen}
      onClose={() => closeHandler()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="false"
      sx={{ whiteSpace: "break-spaces" }}
    >
      <ContentWrapper>
        <DialogContent>
          <StudyModalTitle
            date={new Date()}
            titleText={"스터디 인증하기"}
            buttonText=""
          />
          <PictureWrapper>
            <TitleWrapper>
              <TitleIcon src={icon} />
              <Subtitle2>
                <div style={{ marginTop: "11px" }}>사진 인증하기</div>
              </Subtitle2>
            </TitleWrapper>
            <PicWrapper>
              {/* <label for="file" onSubmit={(e) => onSubmit(e)}>
              <PicWrapper>
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="preivew-img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <>
                    <Subtitle2>+</Subtitle2>
                    <div style={{ marginTop: "77px" }}>
                      <Subtitle2>사진을 첨부해주세요</Subtitle2>
                    </div>
                  </>
                )}
              </PicWrapper>
            </label> */}
              <form onSubmit={(e) => onSubmit(e)}>
                <input
                  type="file"
                  id="file"
                  name="profile_files"
                  accept="img/*"
                />
                <Button type="submit" id="file" onClick={() => closeHandler()}>
                  <ButtonText>저장하기</ButtonText>
                </Button>
              </form>
            </PicWrapper>
          </PictureWrapper>
          <StudyModalUrl />
        </DialogContent>
      </ContentWrapper>
    </Dialog>
  );
}

const ContentWrapper = styled.div`
  margin: 80px 90px;
`;
const PictureWrapper = styled.div`
  width: 920px;
  height: 150px;
  background-color: ${gray100};
  border: 3px solid #000000;
  margin-top: 40px;
  box-sizing: border-box;
  border-radius: 5px;
`;
const TitleWrapper = styled.div`
  width: 914px;
  height: 45px;
  background-color: #ffffff;
  border-bottom: 3px solid #000000;
  display: flex;
  box-sizing: border-box;
`;
const TitleIcon = styled.img`
  width: 22px;
  height: 22px;
  margin-left: 17px;
  margin-right: 9px;
  margin-top: 9px;
`;

const PicWrapper = styled.div`
  color: ${hintColor};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  flex-direction: column;
`;
const Button = styled.button`
  position: absolute;
  right: 0;
  top: 13%;
  margin-right: 90px;
  background-color: ${gray300};
  border-radius: 5px;
  width: 81px;
  height: 40px;
`;
const ButtonText = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  text-align: center;
`;
