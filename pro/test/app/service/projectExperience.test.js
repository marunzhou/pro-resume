"use strict";

const assert = require('assert');
const mm = require('egg-mock');

describe('test/app/service/projectExperience.test.js', () => {
  let app;
	let testData = {
    base_id: '007',
    name: 'test0',
    company: 'test_company',
    description: 'test description',
    start_time: '2018-10',
    end_time: '2018-12',
	};
	
	before(() => {
			app = mm.app();
			return app.ready();
	});
	// 添加用户
	it('test insert', async () => {
			const ctx = app.mockContext();
			const result = await ctx.service.projectExperience.insert(testData);
			assert(result.code === 0);
	})

	// 更新用户
	it('test update', async () => {
			const ctx = app.mockContext();
			const result = await ctx.service.projectExperience.update(testData, { base_id: testData.base_id, name: testData.name });
			assert(result.code === 0);
	})

	// 删除用户
	it('test delete', async () => {
			const ctx = app.mockContext();
			const result = await ctx.service.projectExperience.delete({ base_id: testData.base_id, name: testData.name });
			assert(result.code === 0);
	})
})