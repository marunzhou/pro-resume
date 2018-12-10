"use strict";

const assert = require('assert');
const mm = require('egg-mock');

describe('test/app/service/baseInfo.test.js', () => {
	let app;
	let testData = {
			user_id: 1,
			name: 'test',
			age: 25,
			phone: '13418425407',
			education: '大专',
			experience: '5年',
			introduction: '这是简介测试',
	};

	before(() => {
			app = mm.app();
			return app.ready();
	});
	// 添加用户
	it('test insert', async () => {
			const ctx = app.mockContext();
			const result = await ctx.service.baseInfo.insert(testData);
			assert(result.code === 0);
	})

	// 更新用户
	it('test update', async () => {
			const ctx = app.mockContext();
			const result = await ctx.service.baseInfo.update(testData, { user_id: testData.user_id, name: 'test', });
			assert(result.code === 0);
	})

	// 删除用户
	it('test delete', async () => {
			const ctx = app.mockContext();
			const result = await ctx.service.baseInfo.delete({ user_id: testData.user_id, name: 'test', });
			assert(result.code === 0);
	})
})