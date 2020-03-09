// reducer.js 发出相应的动作

import { ADD_TYPE } from '../action/action'
import { combineReducers } from 'redux'

// 数据仓库
const defalutState = {
    data: [
        "这是第一行",
        "这是第二行",
        "这是第三行"
    ]
}


/**
 * 发出相应的动作
 *      这里的动作是直接针对 store 的操作
 * @param {*} state 
 * @param {*} action 
 */
function add(state = defalutState, action) {
    // 判断一下 action 是什么操作类型
    switch (action.type) {
        case ADD_TYPE:

            /**
             * 处理完一些逻辑后，需要把这个state返回出去，最好返回一个新的 state
             */
            console.log('action的add函数--text：', action.text)
            return {
                ...state,
                data: state.data.concat(action.text)
            }
        default:
    }

     // 不管何时，这个 state 都是返回的出去的
     return state
}

/**
 * combineReducers(...) 函数，是用来生成调用你的一系列 reducer
 * 每个 reducer 根据它们的 key 来筛选出 state 中的一部分数据并处理
 */
const apps = combineReducers({

    /**
     * 把你的定义的一些列相应动作都写入
     */

    add
})

export default apps