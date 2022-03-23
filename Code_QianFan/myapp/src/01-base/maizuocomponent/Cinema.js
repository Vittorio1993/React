/*
 * @Author: your name
 * @Date: 2022-03-21 20:02:42
 * @LastEditTime: 2022-03-23 09:51:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myapp\src\01-base\maizuocomponent\Cinema.js
 */
import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {

    constructor() {
        super()
        this.state = {
            cinemaList: [],
            backCinemaList: []
        }
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
            console.log(res.data.data.cinemas)
            this.setState({
                cinemaList: res.data.data.cinemas,
                backCinemaList: res.data.data.cinemas
            })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <input onInput={this.handleInput} />
                {
                    this.state.cinemaList.map(item =>
                        <dl key={item.cinemaId}>
                            <dt>
                                {item.name}
                            </dt>
                            <dd>
                                {item.address}
                            </dd>
                        </dl>)
                }
            </div>
        )
    }

    handleInput = (event) => {
        console.log('input', event.target.value)
        // filter 不会影响原数组
        let newList = this.state.backCinemaList.filter(item => item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
            item.address.toUpperCase().includes(event.target.value.toUpperCase()))
        this.setState({
            cinemaList: newList
        })
    }
}


// filter

