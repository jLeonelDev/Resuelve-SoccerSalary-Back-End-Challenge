/* eslint-disable no-undef */
import { expect } from 'chai';

describe('test.js', () => {
  it('isTestEnviroment', () => {
    expect(process.env.NODE_ENV).to.eql('test');
  });
});
