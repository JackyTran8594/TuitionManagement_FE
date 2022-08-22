export interface MessageResponse<T> {
    status: number,
    errorCode?: string,
    message: string,
    listData: T[],
    data: T;
}