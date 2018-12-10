"use strict";

const assert = require('assert');
const mm = require('egg-mock');

describe('test/app/service/comprehensiveCapacity.test.js', () => {
  let app;
  let testData = {
    base_id: 0,
    tag_id: 0,
  };

  before(() => {
      app = mm.app();
      return app.ready();
  });
  // 添加用户
  it('test insert', async () => {
      const ctx = app.mockContext();
      const result = await ctx.service.comprehensiveCapacity.insert(testData);
      assert(result.code === 0);
  })

  // 删除用户
  it('test delete', async () => {
      const ctx = app.mockContext();
      const result = await ctx.service.comprehensiveCapacity.delete({ base_id: testData.base_id, tag_id: testData.tag_id, });
      assert(result.code === 0);
  })
})