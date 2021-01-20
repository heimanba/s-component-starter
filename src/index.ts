import { Component } from '@serverless-devs/s-core';

export default class ComponentStarter extends Component {
  async test(inputs) {
    // 返回结果
    return {
      Result: 'hello world',
      Args: inputs,
    };
  }
}
