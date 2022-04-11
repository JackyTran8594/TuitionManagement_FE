import { NbAuthSimpleToken } from "@nebular/auth";

export interface AccessToken {
    id_token?: string;
    accounts?: Account[];
}

export interface Account {
    id?: number;
    unitCode?: string;
    parentCode?: string;
    departmentCode?: string;
    maximumDevices?: number;
    displayName?: string
    active?: boolean;
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


