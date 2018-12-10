const Service = require('egg').Service;
const moment = require('moment');

/**
 * 能力标签经历
 */
class ComprehensiveCapacityService extends Service {
  constructor(ctx) {
    super(ctx);
    this.table = 'comprehensive_capacity';
  }
  
  async find(options) {
    const result = await this.app.mysql.get(this.table, options);
    return result;
  }

  async insert(o) {
    if(!o && !o.base_id && !o.tag_id) {
      return this.ctx.helper.sqlErrorInfo(10002);
    }
    const row = {
      base_id: '',
      tag_id: '',
      create_time: moment().format('YYYY-MM-DD hh:mm:ss')
    }
    Object.assign(row, o);
    const isExist = await this.find({ base_id: row.base_id, tag_id: row.tag_id });
    if(isExist) {
        return this.ctx.helper.sqlErrorInfo(10001);
    }
    const result = await this.app.mysql.insert(this.table, row);
    if(result.affectedRows === 0) {
        return this.ctx.helper.sqlErrorInfo(10000);
    }

    return this.ctx.helper.sqlErrorInfo(0);
  }

  // update(o, option) {
  // }

  async delete(options) {
    const result = await this.app.mysql.delete(this.table, options);
    if(result.affectedRows === 0) {
        return this.ctx.helper.sqlErrorInfo(10000);
    }
    return this.ctx.helper.sqlErrorInfo(0);
  }
}

module.exports = ComprehensiveCapacityService;