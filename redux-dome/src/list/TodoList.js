import React, { Component } from 'react'
import { Input, Button, List } from 'antd';

// store 相关 start
import store from '../store/index'
import { addText } from '../store/action/action'
// store 相关 end

/**
 * TodoList 一个列表
 */
class TodoList extends Component {
    constructor(props) {
        super(props)

        // 打印所有的 store
        // console.log(store.getState())
        
        this.inpVal = React.createRef();

        this.state = {
            // data: [
            //     "这是第一行",
            //     "这是第二行",
            //     "这是第三行"
            // ],
            data: store.getState().add.data || []
        }

    }

    componentDidMount() {
        // 每次 state 更新时，打印日志
        // 注意 subscribe() 返回一个函数用来注销监听器
        this.unsubscribe = store.subscribe(() =>
            this.setState({ data: store.getState().add.data }),
            console.log('监听：', store.getState())
        )
    }

    componentWillUnmount(){
        // 停止监听
        this.unsubscribe()
    }

    addData() {
        const inputValue = this.inpVal.current.state.value
        console.log('当前值:', inputValue)
        if (inputValue === undefined) {
            return
        }
        // this.setState({ data: this.state.data.concat(inputValue) })
        store.dispatch(addText(inputValue))
        this.inpVal.current.state.value = undefined
    }

    render() {
        return (
            <>
                <div style={{ margin: '10px' }}>
                    <div>
                        <Input ref={ this.inpVal } placeholder="请输入内容" style={{ width: '200px' }}/>
                        <Button type="primary" style={{ marginLeft: '10px' }} onClick={this.addData.bind(this)}>确认</Button>
                        <List
                            style={{ marginTop: '10px', width: '200px' }}
                            bordered
                            dataSource={this.state.data}
                            renderItem={(item, index) => (
                                <List.Item key={index}>
                                    {item}
                                </List.Item>
                            )}
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default TodoList

