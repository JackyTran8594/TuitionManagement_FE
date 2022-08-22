export interface MessageResponse<T> {
    status: number,
    result?: string,
    message: string,
    listData: T[],
    data: T;
}