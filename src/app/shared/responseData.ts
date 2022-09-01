export interface ResponseData<T> {
    listData: T[],
    data: T,
    result: string,
    msg: string,
    des: string,
    errors: any,
}