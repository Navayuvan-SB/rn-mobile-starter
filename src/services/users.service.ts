import { AxiosResponse } from 'axios';
import { Urls } from '../configs/urls';
import { GetHttpClient } from '../configs/http-client';
import { LoginRequest } from '../models/http/login.request.model';
import { LoginResponse } from '../models/http/login.response.model';
import { RegisterUserRequest } from '../models/http/register-user.request.model';
import { RegisterUserResponse } from '../models/http/register-user.response.model';
import {
  RegisterTotpRequest,
  VerifyTotpRequest,
} from '../models/http/totp.request.model';
import {
  RegisterTotpResponse,
  VerifyTotpResponse,
} from '../models/http/totp.response.model';

class UserService {
  static async loginUser(body: LoginRequest): Promise<LoginResponse> {
    const response = await GetHttpClient().post<
      LoginRequest,
      AxiosResponse<LoginResponse>
    >('', body);
    return response.data;
  }

  static async registerUser(
    body: RegisterUserRequest,
  ): Promise<AxiosResponse<RegisterUserResponse>> {
    const response = await GetHttpClient().post<
      RegisterUserRequest,
      AxiosResponse<RegisterUserResponse>
    >('', body);
    return response;
  }
  static async registerTotp(
    body: RegisterTotpRequest,
  ): Promise<RegisterTotpResponse> {
    const response = await GetHttpClient().post<
      RegisterTotpRequest,
      AxiosResponse<RegisterTotpResponse>
    >('', body);
    return response.data;
  }

  static async verifyTotp(
    body: VerifyTotpRequest,
  ): Promise<VerifyTotpResponse> {
    const response = await GetHttpClient().post<
      VerifyTotpRequest,
      AxiosResponse<VerifyTotpResponse>
    >('', body);
    return response.data;
  }
}

export { UserService };
