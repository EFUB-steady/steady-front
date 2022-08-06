import styled from "styled-components";
import { gray100, hintColor } from "../../../core/colors";
import icon from "../../../assets/icon_picture_card_mypage.png";
import { Subtitle2 } from "../../../core/texts";
import { useStudyPostInput } from "../../../feature/studies/studyPost/recoil/useStudyPost";

export function StudyModalPic() {
  const { imageUrl, setImageUrl } = useStudyPostInput();

  const encoderFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageUrl(reader.result);
        resolve();
      };
    });
  };
  return (
    <Wrapper>
      <TitleWrapper>
        <TitleIcon src={icon} />
        <Subtitle2>
          <div style={{ marginTop: "11px" }}>사진 인증하기</div>
        </Subtitle2>
      </TitleWrapper>
      <label for="file">
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
      </label>
      <input
        type="file"
        id="file"
        style={{ display: "none" }}
        accept="img/*"
        onChange={(e) => {
          encoderFileToBase64(e.target.files[0]);
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 920px;
  height: 517.5px;
  background-color: ${gray100};
  border: 3px solid #000000;
  margin-top: 40px;
  box-sizing: border-box;
  border-radius: 5px;
`;
const TitleWrapper = styled.div`
  width: 914px;
  height: 8%;
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
  height: 92%;
  flex-direction: column;
`;