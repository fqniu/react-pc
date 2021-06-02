import React, { Component } from 'react';
import './index.scss';
import axios from 'axios';

export default class List extends Component {
  getData1 = () => {
    axios.get("/api/getData/info").then(
      response => { console.log('成功1', response.data); }
    ).catch(
      error => { console.log('失败1', error); }
    )
  }
  getData2 = () => {
    axios.get("/api/getData/info").then(
      response => { console.log('成功2', response.data); }
    ).catch(
      error => { console.log('失败2', error); }
    )
  }
  render() {
    return (
      <div className="container"> 
        我是列表区域
        <button onClick={this.getData1}>点我发mock请求数据1</button>
        <button onClick={this.getData2}>点我发mock请求数据2</button>
      </div>
    )
  }
}
