/*
 * @Author: your name
 * @Date: 2022-02-25 10:01:35
 * @LastEditTime: 2022-02-26 22:11:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myapp\src\01-base\05-事件绑定-01.js
 */
import React, { Component } from 'react'

export default class App extends Component {
    a = 100
    myref = React.createRef();
    render() {
        return (
            <div>
                <input ref={this.myref} />
                <button onClick={() => {
                    console.log('click1', this.myref.current.value)
                }}>add1</button>
            </div >


        )
    }
}
