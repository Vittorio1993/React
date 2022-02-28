/*
 * @Author: your name
 * @Date: 2022-02-28 22:45:51
 * @LastEditTime: 2022-02-28 23:04:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myapp\src\01-base\09-循环渲染.js
 */
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        list: ['111', '222', '333']
    }
    render() {
        let newlist = this.state.list.map(item =>
            <li key={item}>{item}</li>)
        return (
            <div>
                <ui></ui>
                {
                    newlist
                }
            </ui>
            </div >
        )
    }
}

/*
原生js-map
*/

let list = ['aa', 'bb', 'cc']
let newlist = list.map(item => `<li>${item}</li>`)
console.log(newlist.join(''))//'字符串模板'
console.log(`ins
tagram`)
