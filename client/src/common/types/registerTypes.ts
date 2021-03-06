export interface RegisterUserInterface {
    node: {
        errors: {
            name?: string;
            email?: string;
            password?: string;
            confirmPassword?: string;
        };
    };
}

export type RegisterUserMutationType = {
    registerUser: RegisterUserInterface;
};

export type RegisterUserType = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};
