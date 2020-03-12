/**
 * Reducer 数据处理
 */
import { combineReducers } from 'redux'
import list from './list'

/**
 * 把多个 reducer 进行合并成一个
 */
export default combineReducers({

    /**
     * 写入一系列的 reducer
     */

    list
})