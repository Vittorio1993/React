/*
 * @Author: your name
 * @Date: 2022-02-25 10:01:35
 * @LastEditTime: 2022-02-25 23:16:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myapp\src\01-base\05-事件绑定-01.js
 */
import React, { Component } from 'react'

export default class App extends Component {
    a = 100
    render() {
        return (
            <div>
                <input />
                <button onClick={() => {
                    console.log('click1')//如果处理逻辑过多，不推荐
                }}>add1</button>

                <button onClick={
                    //不推荐
                    this.handleClick2.bind(this)
                }>add2</button>
                <button onClick={this.handleClick3
                    // 推荐
                }>add3</button>
                <button onClick={() => {
                    this.handleClick4() //比较推荐;传参数方便
                }}>add4</button>
            </div >

        )
    }

    handleClick2() {
        console.log('click2', this.a)
    }

    handleClick3 = (evt) => {
        console.log('click3', this.a, evt.target) //箭头函数永远指向外部函数，不存在this问题
    }
    handleClick4 = () => {
        console.log('click4', this.a)
    }


    //call: 改变this指向并执行函数
    //apply:改变this指向并执行函数
    //bind: 改变this指向，手动执行函数


    // React并不会真正的绑定事件到每一个具体<< >> 的元素上，而是采用事件代理的模式:

}
