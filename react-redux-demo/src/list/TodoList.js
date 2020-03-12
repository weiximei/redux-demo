import React, { Component } from 'react'
import { Input, Button, List } from 'antd';
import { connect } from 'react-redux'
import { addList } from '../redux/action/list'

/**
 * TodoList 一个列表
 */
class TodoList extends Component {

    constructor(props) {
        super(props)
        
        this.inpVal = React.createRef();

        this.state = {
            // data: [
            //     "这是第一行",
            //     "这是第二行",
            //     "这是第三行"
            // ],
            data: []
        }

    }

    componentDidMount() {
        this.setState({ data: this.props.list.data || [] })
    }

    componentDidUpdate(prevProps) {
        // 典型用法（不要忘记比较 props）
        if (this.props.list.data !== prevProps.list.data) {
            this.setState({ data: this.props.list.data || [] })
        }
    }

    addData() {
        const { dispatch } = this.props
        const inputValue = this.inpVal.current.state.value
        console.log('当前值:', inputValue)
        if (inputValue === undefined) {
            return
        }
        // this.setState({ data: this.state.data.concat(inputValue) })
        // 更新store
        dispatch(addList(inputValue))
        this.inpVal.current.state.value = undefined
    }

    render() {
        // console.log('this.props: ', this.props)
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

/**
 * 把 store 里面 state 状态，附加到 props 上
 * 这里的两个参数，connect(..) 会自动赋值
 * 
 * @param {*} state store的全局状态, connect(..) 会自动赋值
 * @param {*} ownProps 组件本身自己带的props, connect(..) 会自动赋值
 */
const mapStateToProps = (state, ownProps) => {

    /**
     * 这里可以只拿取你需要的 state 里面的数据，这样可以节省性能开销
     * 比如我这里只要 state 里面的 list
     * 然后组件里面可以通过 props 获取 list 的值
     */

    return { list: state.list }
}

/**
 * connect 是一个容器
 * 把 原有的组件进行装饰一下(装饰者模式)
 */
export default connect(mapStateToProps)(TodoList)

