/*
 * @Author: your name
 * @Date: 2022-02-24 18:33:27
 * @LastEditTime: 2022-02-24 22:44:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myapp\src\01-base\03-组件的嵌套.js
 */
import React, { Component } from 'react'

class Navibar extends Component {
    render() {
        return (
            <div>Navibar</div>
        )
    }
}

function Swaper() {
    return <div>swiper</div>

}


const Tabbar = () => <div>tabbar</div>

export default class App extends Component {
    render() {
        return (
            <div>
                <Navibar></Navibar>
                <Swaper></Swaper>
                <Tabbar></Tabbar>
            </div>
        )
    }
}

