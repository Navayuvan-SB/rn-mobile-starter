interface RegisterTotpResponse {
  otpAuthUrl: string;
  totpSecret: string;
}

interface VerifyTotpResponse {
  'auth-token': string;
}

export type { RegisterTotpResponse, VerifyTotpResponse };
