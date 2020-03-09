import { createStore } from 'redux'
import reducers from './dispatch/reducer'

// 创建 store
const store = createStore(reducers)
export default store