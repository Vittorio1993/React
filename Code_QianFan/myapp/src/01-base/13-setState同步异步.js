/*
 * @Author: your name
 * @Date: 2022-03-23 21:54:57
 * @LastEditTime: 2022-03-23 22:19:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myapp\src\01-base\13-setState同步异步.js
 */
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        count: 1
    }
    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={
                    this.handleAdd1
                }>add1</button>
                <button onClick={
                    this.handleAdd2
                }>add2</button>
            </div>
        )
    }

    handleAdd1 = () => {
        this.setState({
            count: this.state.count + 1
        })

        this.setState({
            count: this.state.count + 1
        })

        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log(this.state.count)
        })
        //状态和真实dom更新完
    }

    handleAdd2 = () => {
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            })

            this.setState({
                count: this.state.count + 1
            })

            this.setState({
                count: this.state.count + 1
            })
        }, 0);
    }

    // setState 处在同步逻辑中，异步更新状态，更新真实dom
    // setState 处在异步逻辑中，同步更新状态，更新真实dom
    //setState接受第二个参数，第二个参数是回调函数，状态和dom更新完成后就会被触发
}
