
/**
 * Action 类型
 *      事件类型
 */
export const type = {
    ADD_LIST: 'ADD_LIST'
}

/**
 * 添加 List
 * @description 也就是获取添加 List 操作类型, 以及携带的数据
 * @param {*} data 携带的数据
 */
export function addList(data) {
    return {
        type: type.ADD_LIST,
        data
    }
}