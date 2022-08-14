import { NbAuthSimpleToken } from "@nebular/auth";

export interface AccessToken {
    accessToken: string;
    permissions: string[];
    role: [];
    success: boolean
    tokenResponse?: string;
    tokenType: string;
    username: string;
}

export interface Account {
    id?: number;
    unitCode?: string;
    parentCode?: string;
    departmentCode?: string;
    maximumDevices?: number;
    displayName?: string
    isActive?: boolean;
    creationTime?: number;
    lastUpdateTime?: number;
}

export interface User {
    username?: string;
    password?: string;
    rememberMe?: boolean;
}

export class AuthToken extends NbAuthSimpleToken {
    static NAME = 'auth:token';
    private parsedToken: AccessToken;


    getValue(): string {
        return this.parsePayload().token;
    }
}


