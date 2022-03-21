/*
 * @Author: your name
 * @Date: 2022-03-21 19:22:16
 * @LastEditTime: 2022-03-21 20:09:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myapp\src\01-base\12-卖座选项卡.js
 */
import React, { Component } from 'react'
import './css/02-maizuo.css'
import Film from './maizuocomponent/Film'
import Center from './maizuocomponent/Center'
import Cinema from './maizuocomponent/Cinema'
export default class App extends Component {
    state = {
        lsit: [
            {
                id: 1,
                text: 'Fim'
            }, {
                id: 2,
                text: 'Cinema'
            }, {
                id: 3,
                text: 'My'
            }
        ],
        current: 0

    }
    which() {
        switch (this.state.current) {
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Center></Center>
            default:
                return null
        }

    }
    render() {
        return (
            <div>
                {/* {this.state.current === 0 && <Film></Film>}
                {this.state.current === 1 && <Cinema></Cinema>}
                {this.state.current === 2 && <Center></Center>} */}

                {
                    this.which()
                }
                <ul>
                    {
                        this.state.lsit.map((item, index) =>
                            <li key={item.id} className={this.state.current === index ? 'active' : ''} onClick={() => this.handleClick(index)}>
                                {item.text}
                            </li>
                        )
                    }
                </ul>
            </div >
        )
    }
    handleClick(index) {
        console.log(index)
        this.setState({
            current: index
        })
    }
}

