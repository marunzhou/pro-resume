"use strict";

const assert = require('assert');
const mm = require('egg-mock');

describe("test/app/service/user.test.js", () => {
    let app;
    before(() => {
        app = mm.app();
        return app.ready();
    });
    // 添加新用户
    it('test service', async () => {
        const ctx = app.mockContext();
        const result = await
        ctx.service.user.insert({
            username: 'test',
            password: 'test',
            email: 'test@qq.com'
        });
        assert(result);
    })

    // 更新用户信息
})