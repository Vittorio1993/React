/*
 * @Author: your name
 * @Date: 2022-02-24 22:49:05
 * @LastEditTime: 2022-02-25 09:59:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myapp\src\01-base\04-组件的样式.js
 */
import React, { Component } from 'react'
import './css/01-index.css';

export default class App extends Component {
    render() {
        let obj = {
            backgroundColor: 'yellow',
            fontSize: '30px'
        }

        return (
            <div>
                <div style={obj}>1111</div>
                <div style={{ background: 'red' }}>2222</div>
                {
                    //React 推荐使用行内样式，因为每个组件都是独立的个体。
                    // 注释快捷键crtl+/
                }

                <div className='active'>3333333</div>

                <label htmlFor='username'>
                    用户名:
                </label>
                <input tupe='text' id='username'></input>
            </div >
        )
    }
}
