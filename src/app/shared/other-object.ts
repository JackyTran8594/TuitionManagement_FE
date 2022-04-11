export interface Status {
    id?: number;
    name?: string;
}

export const StatusList: Status[] = [
    {
        id: 0,
        name: "---Lựa chọn trạng thái---"
    },
    {
        id: 1,
        name: "ACTIVE"
    },
    {
        id: 2,
        name: "INACTIVE"
    }

]


export interface UserType {
    id?: number;
    name?: string;
}

export const UserTypes: UserType[] = [
    {
        id: 0,
        name: "Thiết bị"
    },
    {
        id: 1,
        name: "Công ty BHQ"
    },
    {
        id: 2,
        name: "Đại lý"
    },
    {
        id: 3,
        name: "Cơ sở đào tạo"
    },
    {
        id: 5,
        name: "---Lựa chọn loại người dùng---"
    }
]


export interface MenuRoleTree {
    id?: number;
    unitCode?: string;
    parentCode?: string;
    description?: string;
    target?: string;
    ofTw?: boolean;
    ofProvince?: boolean;
    ofDistrict?: boolean;
    children?: MenuRoleTree[];

}