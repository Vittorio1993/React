/*
 * @Author: your name
 * @Date: 2022-02-26 22:11:39
 * @LastEditTime: 2022-02-26 22:22:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myapp\src\01-base\08-state.js
 */
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        text: '收藏',
        show: true
    }
    render() {
        return (
            <div>
                <h1>欢迎来到React开发</h1>
                <button onClick={() => {
                    this.setState({
                        show: !this.state.show
                    })//间接修改状态
                }}>{this.state.show ? '收藏' : '取消收藏'}</button>
            </div>
        )
    }
}
