const moment = require('moment');
const Service = require('egg').Service;

class UserService extends Service {
    // 查询帐户信息
    async find(options) {
        const user = await this.app.mysql.get('user', options);
        return { user };
    }

    // 添加帐户
    async insert(o) {
        const row = {
            username: '',
            password: '',
            email: '',
            create_time:  moment().format('YYYY-MM-DD hh:mm:ss')
        }
        Object.assign(row, o);
        const isExist = await this.find({ username: row.username });
        if(isExist.user) {
            return this.ctx.helper.sqlErrorInfo(10001);
        }
        const result = await this.app.mysql.insert('user', row);

        return this.ctx.helper.sqlErrorInfo(0);
    }

    // 更新用户信息
    async update(o, option) {
        const row = {
            username: '',
            password: '',
            email: '',
        };
        const options = {
            where: option
        }

        Object.assign(row, o);
        const result = await this.app.mysql.update('user', row, options);

        if(result.affectedRows === 0) {
            return this.ctx.helper.sqlErrorInfo(10000);
        }
        return this.ctx.helper.sqlErrorInfo(0);
    }

    // 删除用户信息
    async delete(options) {
        const result = await this.app.mysql.delete('user', options);
        if(result.affectedRows === 0) {
            return this.ctx.helper.sqlErrorInfo(10000);
        }
        return this.ctx.helper.sqlErrorInfo(0);
    }
}

module.exports = UserService;