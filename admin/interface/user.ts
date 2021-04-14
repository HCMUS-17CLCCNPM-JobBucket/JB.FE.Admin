export interface User{
    accountType : number;
    id: string;
    email: string ;
    userName: string;
    phoneNumber: string;
    phoneNumberConfirmedL: string;
    birthDate : any;
    createdDate: any;
    addressLine: Array<string>;
    city : string;
    country: string;
    avatarUrl: string;
    lockoutEnabled: boolean;
    fullName: string;
    lockoutEnd: any;
}