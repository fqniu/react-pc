import Mock from 'mockjs'
Mock.mock('/getData/info', "get", require("./apiMockJson/test.json"))
Mock.mock('/getData/query', "get", require("./apiMockJson/test.json"))