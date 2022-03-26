export interface TableData<T> {
    totalElements?: number;
    totalPages?: number;
    content?: T[];
    size?: number
}