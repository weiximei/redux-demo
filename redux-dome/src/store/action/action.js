// action.js 组件的动作

// 定义动作类型(action_type)
export const ADD_TYPE = "ADD_TYPE"

/**
 * 组件内的动作
 * 
 *    也就是我这个组件要发起一个什么样的动作
 *    比如我这里是发起的一个添加内容的操作
 * @param text 内容
 * @return 返回我这个动作的类型以及需要传递的内容
 */
function addText(text) {
    return {
        type: ADD_TYPE,
        text
    }
}

export { addText }