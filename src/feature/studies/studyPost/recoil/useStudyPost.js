import { useRecoilState } from "recoil";
import { studyPostInputState, studyPostState } from "./studyPostState";

export const useStudyPost = () => {
  const [studyPost, setStudyPost] = useRecoilState(studyPostState);

  return {
    studyPost,
    setStudyPost,
  };
};

export const useStudyPostInput = () => {
  const [studyPostInput, setStudyPostInput] =
    useRecoilState(studyPostInputState);

  const setLink = (link) => {
    setStudyPostInput((input) => ({
      ...input,
      link: link,
    }));
  };

  const setImageUrl = (imageUrl) => {
    setStudyPostInput((input) => ({
      ...input,
      imageUrl: imageUrl,
    }));
  };

  const studyPostInputReset = () => {
    setStudyPostInput({
      link: "",
      imageUrl: "",
    });
  };

  return {
    link: studyPostInput.link,
    imageUrl: studyPostInput.imageUrl,
    setLink,
    setImageUrl,
    studyPostInputReset,
  };
};
