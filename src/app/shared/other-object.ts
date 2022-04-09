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
    value?: string;
}

export const UserTypes: UserType[] = [
    {
        id: 0,
        value: "Thiết bị"
    },
    {
        id: 1,
        value: "Công ty BHQ"
    },
    {
        id: 2,
        value: "Đại lý"
    },
    {
        id: 3,
        value: "Cơ sở đào tạo"
    },
    {
        id: 5,
        value: "---Lựa chọn loại người dùng---"
    }
]