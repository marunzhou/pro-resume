const moment = require('moment');
const Service = require('egg').Service;

class UserService extends Service {
    // ��ѯ�ʻ���Ϣ
    async find(id) {
        const user = await this.app.mysql.get('user', { id });
        return { user };
    }

    // ����ʻ�
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

    // �����û���Ϣ

}

module.exports = UserService;