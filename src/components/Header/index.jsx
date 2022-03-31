import React, { Component } from 'react'
import './index.scss'

export default class Header extends Component {
  render() {
    let list = [{
      objectID: '111',
      url: '123',
      title: 'nnn',
      author: 'fqniu',
      points: 1
    }, {
      objectID: '222',
      url: '123',
      title: 'nnn',
      author: 'niuniu',
      points: 2
    }, {
      objectID: '333',
      url: '123',
      title: 'nnn',
      author: 'niuer',
      points: 3
    }]
    return (
      <div className="header">
        <p>我是头部区域</p>
        <div>
          {list.map(function (item) {
            return (
              <div key={item.objectID}>
                <span>
                  <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}——</span>
                <span>{item.points}</span>
              </div>
            );
          })}
        </div>
      </div>
    )
  }
}
