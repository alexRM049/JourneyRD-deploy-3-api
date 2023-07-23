export interface User{
    userName: string;
    firstName: string;
    lastName: string;
    gender: string;
    country: string;
    city: string;
    address: string;
    birthDate: string;
    email: string;
    token: string;
    admin: boolean;
}

export interface UserFormValues{
    userName: string;
    email: string;
    password: string;
}



