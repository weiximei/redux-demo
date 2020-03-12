import { createStore } from 'redux'
import reducers from './dispatch/reducer'

// 创建 store
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // 开发者工具视图
    )
export default store