interface RegisterTotpRequest {
  challenge: string;
  userId: string;
}

interface VerifyTotpRequest extends RegisterTotpRequest {
  totp: string;
}

export type { RegisterTotpRequest, VerifyTotpRequest };
