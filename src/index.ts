import { Component } from '@serverless-devs/s-core';

export default class MyComponent extends Component {
  async test(inputs) {
    // 返回结果
    return {
      Result: 'hello world',
      Args: inputs,
    };
  }
}
