export interface TableData<T> {
    totalElements?: number;
    totalPages?: number;
    content?: T[];
    size?: number;
    numberOfElements?: number;
    number?: number;
    empty?: boolean;
    pageable?: any;
    sort?: any;
}