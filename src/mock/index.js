import Mock from 'mockjs'
Mock.mock('/api/getData/info', "get", require("./apiMockJson/test.json"))
Mock.mock('/api/getData/query', "get", require("./apiMockJson/test.json"))