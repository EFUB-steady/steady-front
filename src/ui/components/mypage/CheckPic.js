import styled from "styled-components";
import { Title3 } from "../../../core/texts";
import { useStudyPostInput } from "../../../feature/studies/studyPost/recoil/useStudyPost";

function CheckPic() {
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
    <>
      <Title3>사진 인증하기</Title3>
      <Box>
        <AuthBox>
          <Box2>
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
              <></>
            )}
          </Box2>
          <label for="file">
            <UploadBtn>
              <div>사진 첨부</div>
            </UploadBtn>
          </label>
        </AuthBox>
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          accept="img/* "
          onChange={(e) => {
            encoderFileToBase64(e.target.files[0]);
          }}
        />
      </Box>
    </>
  );
}
export default CheckPic;

const Box = styled.div`
  width: 400px;
  height: 270px;
  line-height: 35px;
  margin-left: 5px;
  box-sizing: border-box;
  background: #f5f5f5;
  border: 3px solid #000000;
  border-radius: 5px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box2 = styled.div`
  width: 300px;
  height: 150px;
  line-height: 35px;
  margin-left: 5px;
  box-sizing: border-box;
  background: #dadddf;
  border: 3px solid #000000;
  border-radius: 5px;
`;

const AuthBox = styled.div`
  width: 380px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const UploadBtn = styled.div`
  width: 108px;
  height: 40px;
  background: black;
  border-radius: 5px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  margin-top: 15px;
  border-radius: 5px;
  border: 3px solid black;
  &:hover {
    background: white;
    color: black;
  }
  &:active {
    background: white;
    color: black;
  }
`;
