/*
 * @Author: your name
 * @Date: 2022-03-10 23:07:32
 * @LastEditTime: 2022-03-21 18:59:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myapp\src\01-base\10-todolist.js
 */
import React, { Component } from 'react'

export default class App extends Component {
    a = 100
    myref = React.createRef();

    state = {
        list: [{
            id: 1,
            mytext: 'aa'
        },
        {
            id: 2,
            mytext: 'bb'
        },
        {
            id: 3,
            mytext: 'cc'
        }]
    }
    render() {
        return (
            <div>
                <input ref={this.myref} />
                <button onClick={this.handleClick2}>add2</button>
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id}>
                                {item.mytext}
                                {/* <button onClick={this.handleClick.bind(this, index)}>del</button> */}
                                <button onClick={() => {
                                    this.handleClick(index)
                                }}>del</button>
                            </li>)
                    }
                </ul>
                {/* {!this.state.list.length ? <div>暂无待办事项</div> : null} */}

                {!this.state.list.length && <div>暂无待办事项</div>}
            </div >


        )
    }

    handleClick2 = () => {
        console.log('click2', this.myref.current.value);
        //不要直接修改状态。可能会造成不可预期的问题
        //this.state.list.push(this.myref.current.value)

        let newlist = [...this.state.list]
        newlist.push({
            id: Math.random() * 100000,
            mytext: this.myref.current.value
        })
        this.setState({
            list: newlist
        })

        //清空输入框
        this.myref.current.value = '';
    }

    handleClick = (index) => {
        console.log('del-click', index)
        //不要直接修改状态。可能会造成不可预期的问题
        let newlist = this.state.list.slice();
        newlist.splice(index, 1)
        this.setState({
            list: newlist
        })
    }
}

