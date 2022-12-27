declare global {

    //拓展Math
    interface Math {
        easeInOutQuad(t: number, b: number, c: number, d: number): number;
    }

    interface Window {
        webkitRequestAnimationFrame: boolean,
        mozRequestAnimationFrame: boolean
    }
    
    interface parentNode {
        scrollTop: number
    }

    //接口响应
    interface IResponse<T = any> {
        code: number;
        msg: string;
        data: T;
    }

    interface ITableRender<T = any> {
        loading: boolean
        data: Array<T>
        selection?:Array<T> //选中数据
        total: number
        page: number
        limit: number
    }
    
    interface IErrorCodeStatus {
        401: string;
        403: string;
        404: string;
        405: string;
        500: string;
        501: string;
        502: string;
        504: string;
    }

}
export { };