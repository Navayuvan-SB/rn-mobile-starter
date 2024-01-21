interface UseMutationProps<TRequest, TResponse, TError> {
  onSuccess?: (
    data: TResponse,
    variables: TRequest,
    context: any,
  ) => Promise<unknown> | unknown;
  onError?: (
    error: TError,
    variables: TRequest,
    context: any,
  ) => Promise<unknown> | unknown;
}

interface UseQueryProps<TRequest, TResponse, TError>
  extends UseMutationProps<TRequest, TResponse, TError> {}

export { UseMutationProps, UseQueryProps };
