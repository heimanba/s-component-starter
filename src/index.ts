import { Component } from '@serverless-devs/s-core';

export default () => {
  // eslint-disable-next-line no-new
  new Component('123');
  const a = true;
  console.log(a / 0);
  return a;
};
