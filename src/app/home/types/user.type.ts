export interface user {
    username: string;
    email: string;
    password: string;
}

export interface userLogin {
    email: string;
    password: string;
}

export interface forgetPassword {
    email: string;
    recoveryKey: string;
    newPassword: string;
}