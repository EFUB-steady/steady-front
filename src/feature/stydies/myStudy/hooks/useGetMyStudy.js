import { queryKeys } from "../../../../data/react-query/constants";
import { useUser } from "../../../../data/recoil/hooks/useUser";
import { getMyStudy } from "../api/getMyStudy";
import { useQuery } from "@tanstack/react-query";

export const useGetMyStudy = () => {
  const { user } = useUser();
  const {
    data: myStudy,
    isLoading,
    isError,
  } = useQuery(queryKeys.myStudy, () => getMyStudy(user), {
    onError: (err) => {
      console.log(err);
    },
  });

  return { myStudy, isLoading, isError };
};
