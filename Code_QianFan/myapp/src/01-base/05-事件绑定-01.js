/*
 * @Author: your name
 * @Date: 2022-02-25 10:01:35
 * @LastEditTime: 2022-02-25 10:18:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myapp\src\01-base\05-事件绑定-01.js
 */
import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                <input />
                <button onClick={() => {
                    console.log('click1')
                }}>add1</button>

                <button onClick={this.handleClick2}>add2</button>
                <button onClick={this.handleClick3}>add3</button>
                <button onClick={() => {
                    this.handleClick4() //比较推荐
                }}>add4</button>
            </div>

        )
    }

    handleClick2() {
        console.log('click2')
    }

    handleClick3 = () => {
        console.log('click3')
    }
    handleClick4 = () => {
        console.log('click4')
    }
}
