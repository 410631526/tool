/**
 * 統一回應格式
 */
export interface resp<E> {
    code: number;
    message: string;
    body: E;
}
