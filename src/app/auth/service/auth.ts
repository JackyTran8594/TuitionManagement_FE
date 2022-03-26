import { NbAuthSimpleToken } from "@nebular/auth";

export interface IAccessToken {
    id_token?: string;
    accounts?: IAccount[];
}

export interface IAccount {
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

export interface IUser {
    username?: string;
    password?: string;
    rememberMe?: boolean;
}

export class AuthToken extends NbAuthSimpleToken {
    static NAME = 'auth:token';
    private parsedToken: IAccessToken;


    getValue(): string {
        return this.parsePayload().token;
    }
}


