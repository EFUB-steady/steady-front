import { QueryClient } from "@tanstack/react-query";

function generateQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {},
      mutations: {
        onSuccess(data) {
          console.log("success");
        },
        onError(error) {
          if (error instanceof Error) {
            console.error(error.message);
          }
        },
      },
    },
  });
}

export const queryClient = generateQueryClient();
