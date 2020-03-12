
import { type } from '../../action/list'

 // 数据仓库
 const initialState = {
    data: [
        "这是第一行",
        "这是第二行",
        "这是第三行"
    ],
 }

 /**
  *  list 数据处理
  * @param {*} state 
  * @param {*} action 
  */
export default function list(state = initialState, action) {
    switch (action.type) {
        case type.ADD_LIST:

            /**
             * 处理完一些里操作后，返回一个新的 state
             */

            // 把新的值，添加进 state
            const newData = state.data.concat(action.data)

            return {
                ...state,
                data: newData
            }
        default:
            return { ...state }
    }
}
