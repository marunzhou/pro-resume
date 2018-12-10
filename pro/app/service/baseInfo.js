const moment = require('moment');
const Service = require('egg').Service;
/**
 * 基本信息
 */
class BaseInfoService extends Service {
  constructor(ctx) {
    super(ctx);
    this.table = 'base_info';
  }

  async find(options) {
    Object.assign(options, {
      status: 1
    })
    const result = await this.app.mysql.get(this.table, options);
    return result;
  }

  async insert(o) {
    const row = {
      user_id: 0,
      name: '',
      age: '',
      phone: '',
      education: '',
      experience: '',
      introduction: '',
      status: 1,
      create_time: moment().format('YYYY-MM-DD hh:mm:ss')
    }
    Object.assign(row, o);
    const result = await this.app.mysql.insert(this.table, row);
    if(result.affectedRows === 0) {
      return this.ctx.helper.sqlErrorInfo(10000);
    }

    return this.ctx.helper.sqlErrorInfo(0);
  }

  async update(row, option) {
    const options = {
      where: option
    }
    const result = await this.app.mysql.update(this.table, row, options);
    if(result.affectedRows === 0) {
      return this.ctx.helper.sqlErrorInfo(10000);
    }

    return this.ctx.helper.sqlErrorInfo(0);
  }

  async delete(option) {
    const options = {
      where: option
    }
    const result = await this.app.mysql.update(this.table, { status: 0 }, options);
    if(result.affectedRows === 0) {
      return this.ctx.helper.sqlErrorInfo(10000);
    }

    return this.ctx.helper.sqlErrorInfo(0);
  }
}

module.exports = BaseInfoService;