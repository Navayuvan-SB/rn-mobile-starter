interface LoginResponse {
  userId: string;
  challenge: string;
  isTOTPRegistered: boolean;
}

export type { LoginResponse };
