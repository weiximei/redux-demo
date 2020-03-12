/**
 * 创建数据源  store
 */
import { createStore } from 'redux'
import reducer from '../reducer'
import { composeWithDevTools }  from 'redux-devtools-extension'

console.log('reducer: ', typeof reducer)
console.log('composeWithDevTools: ', typeof composeWithDevTools)
// 创建 store
// reducer 返回一定要是一个函数
// composeWithDevTools() 一定要写成这样，不能写成 composeWithDevTools
const store = createStore(reducer, composeWithDevTools())
export default store
