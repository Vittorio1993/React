/*
 * @Author: your name
 * @Date: 2022-04-24 21:32:27
 * @LastEditTime: 2022-04-24 21:58:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myapp\src\01-base\14-betterScroll.js
 */
import React, { Component } from 'react'
import BetterScroll from 'better-scroll'

export default class App extends Component {
    state = {
        list: []
    }
    render() {
        return (
            <div>
                <button onClick={() => this.getData()}>click</button>
                <div className="wrapper" style={{ height: '200px', background: 'yellow', overflow: 'hidden' }} >
                    <ul className="content">
                        {
                            this.state.list.map(item =>
                                <li key={item}>{item}</li>
                            )
                        }
                    </ul>
                </div>
            </div >
        )
    }

    getData() {
        let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        // this.setState({
        //     list: list
        // }, () => {
        //     new BetterScroll('.wrapper')
        // })
        setTimeout(() => {
            this.setState({
                list: list
            })
            new BetterScroll('.wrapper')
        }, 0)
    }
}
