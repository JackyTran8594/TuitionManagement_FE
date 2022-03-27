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