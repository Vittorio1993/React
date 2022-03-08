/*
 * @Author: your name
 * @Date: 2022-02-28 22:45:51
 * @LastEditTime: 2022-03-08 09:30:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myapp\src\01-base\09-循环渲染.js
 */
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        list: [{
            id: 1,
            text: '111'
        },
        {
            id: 2,
            text: '222'
        },
        {
            id: 3,
            text: '222'
        }]
    }
    render() {
        let newlist = this.state.list.map((item, index) =>
            <li key={item.id}>{item.text}--{index}</li>)
        return (
            <div>
                <ui>
                    {
                        newlist
                    }
                </ui>
            </div >
        )
    }
}
// 为了列表的复用和重排，设置key值，提高性能
// 不涉及到列表的增加删除，重排，设置成索引值没有问题

/*
原生js-map
*/

let list = ['aa', 'bb', 'cc']
let newlist = list.map(item => `<li>${item}</li>`)
console.log(newlist.join(''))//'字符串模板'
console.log(`ins
tagram`)
