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


