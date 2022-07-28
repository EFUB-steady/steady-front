import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";

const ErrorFallback = ({ resetErrorBoundary }) => {
  return <div>something wrong....</div>;
};
const GlobalErrorBoundary = ({ children }) => {
  const { reset } = useQueryErrorResetBoundary();
  const myErrorHandler = (error) => {
    console.log(error);
  };
  return (
    <ErrorBoundary
      onReset={reset}
      onError={myErrorHandler}
      FallbackComponent={ErrorFallback}
    >
      {children}
    </ErrorBoundary>
  );
};

export default GlobalErrorBoundary;
//
