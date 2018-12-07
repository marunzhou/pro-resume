/**
 * Created by Administrator on 2018/12/7.
 */
const Controller = require('egg').Controller;
module.exports = app =>{
    return class UserController extends app.Controller {
        async formTest() {
            const { ctx } = this;
            await ctx.render('formTest/index.js');
        }
        async addUser() {
            const { ctx } = this;
            const {username,password,email} = ctx.query;
            const formData = {
                username,
                password,
                email
            }
            const userInfo = await ctx.service.user.insert(formData);
            ctx.body = '1232';
        }
    }
}

// module.exports = UserController;