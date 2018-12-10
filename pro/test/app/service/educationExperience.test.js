"use strict";

const assert = require('assert');
const mm = require('egg-mock');

describe('test/app/service/educationExperience.test.js', () => {
	let app;
	let testData = {
		base_id: 0,
		school: 'test school',
		specialities: 'test specialities',
		eduction: '大专',
		enrollment_time: '2018-01',
		graduation_time: '2018-12',
	};

	before(() => {
			app = mm.app();
			return app.ready();
	});
	// 添加用户
	it('test insert', async () => {
			const ctx = app.mockContext();
			const result = await ctx.service.educationExperience.insert(testData);
			assert(result.code === 0);
	})

	// 更新用户
	it('test update', async () => {
			const ctx = app.mockContext();
			const result = await ctx.service.educationExperience.update(testData, { base_id: testData.base_id, school: testData.school, });
			assert(result.code === 0);
	})

	// 删除用户
	it('test delete', async () => {
			const ctx = app.mockContext();
			const result = await ctx.service.educationExperience.delete({ base_id: testData.base_id, school: testData.school, });
			assert(result.code === 0);
	})
})