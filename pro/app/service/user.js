const moment = require('moment');
const Service = require('egg').Service;

class UserService extends Service {
    // 查询帐户信息
    async find(id) {
        const user = await this.app.mysql.get('user', { id });
        return { user };
    }

    // 添加帐户
    async insert(obj) {
        const values = {
            username: '',
            password: '',
            email: '',
            create_time:  moment().format('YYYY-MM-DD hh:mm:ss')
        }
        Object.assign(values, obj);
        const result = await this.app.mysql.insert('user', values);
        return result.affectedRows === 1;
    }

    // 更新用户信息

}

module.exports = UserService;