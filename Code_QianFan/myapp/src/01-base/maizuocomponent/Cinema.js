/*
 * @Author: your name
 * @Date: 2022-03-21 20:02:42
 * @LastEditTime: 2022-03-22 09:55:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myapp\src\01-base\maizuocomponent\Cinema.js
 */
import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {

    constructor() {
        super()
        //axios 第三方用于数据请求的库
        // axios.get().then(res=>{}).catch(err=>{console.log(err)})
        // axios.get('https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=9247391').then(res => {
        //     console.log(res)
        // }).catch(err => { console.log(err); })

        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=9247391',
            method: 'get',
            headers: {
                'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.2.0", "e": "16479370501352523856216065", "bc": "110100" }',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            console.log(res);
        })
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
