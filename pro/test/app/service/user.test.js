"use strict";

const assert = require('assert');
const mm = require('egg-mock');

describe("test/app/service/user.test.js", () => {
    let app;
    let testData = {
        username: 'test',
        password: 'test',
        email: 'test@qq.com'
    };
    
    before(() => {
        app = mm.app();
        return app.ready();
    });
    // 添加用户
    it('test insert', async () => {
        const ctx = app.mockContext();
        const result = await ctx.service.user.insert(testData);
        assert(result);
    })

    // 添加用户
    it('test update', async () => {
        const ctx = app.mockContext();
        const result = await ctx.service.user.update(testData, { username: testData.username });
        assert(result);
    })

    // 删除用户
    it('test delete', async () => {
        const ctx = app.mockContext();
        const result = await ctx.service.user.delete({ username: testData.username });
        assert(result);
    })
})