import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ResponseError } from '../../models/http/error.response.model';
import { LoginRequest } from '../../models/http/login.request.model';
import { LoginResponse } from '../../models/http/login.response.model';
import {
  RegisterTotpRequest,
  VerifyTotpRequest,
} from '../../models/http/totp.request.model';
import {
  RegisterTotpResponse,
  VerifyTotpResponse,
} from '../../models/http/totp.response.model';
import { UseMutationProps } from '../../models/react-query.model';
import { UserService } from '../users.service';

export const useLogin = ({
  onSuccess,
  onError,
}: UseMutationProps<
  LoginRequest,
  LoginResponse,
  AxiosError
>): UseMutationResult<LoginResponse, Error, LoginRequest> => {
  return useMutation<
    LoginResponse,
    AxiosError<ResponseError, ResponseError>,
    LoginRequest
  >({
    mutationFn: UserService.loginUser,
    onSuccess: onSuccess,
    onError: onError,
  });
};

export const useRegisterTotp = ({
  onSuccess,
  onError,
}: UseMutationProps<
  RegisterTotpRequest,
  RegisterTotpResponse,
  AxiosError
>): UseMutationResult<RegisterTotpResponse, Error, RegisterTotpRequest> => {
  return useMutation<RegisterTotpResponse, AxiosError, RegisterTotpRequest>({
    mutationFn: UserService.registerTotp,
    onSuccess: onSuccess,
    onError: onError,
  });
};

export const useVerifyTotp = ({
  onSuccess,
  onError,
}: UseMutationProps<
  VerifyTotpRequest,
  VerifyTotpResponse,
  AxiosError
>): UseMutationResult<VerifyTotpResponse, Error, VerifyTotpRequest> => {
  return useMutation<VerifyTotpResponse, AxiosError, VerifyTotpRequest>({
    mutationFn: UserService.verifyTotp,
    onSuccess: onSuccess,
    onError: onError,
  });
};
