const moment = require('moment');
const Service = require('egg').Service;
/**
 * 教育经历
 */
class EducationExperienceService extends Service {
  constructor(ctx) {
    super(ctx);
    this.table = 'education_experience';
  }

  async find(options) {
    const result = await this.app.mysql.get(this.table, options);
    return result;
  }

  async insert(o) {
    const row = {
      base_id: '',
      school: '',
      specialities: '',
      eduction: '',
      enrollment_time: '',
      graduation_time: '',
      create_time: moment().format('YYYY-MM-DD hh:mm:ss')
    }
    Object.assign(row, o);
    const result = await this.app.mysql.insert(this.table, row);
    if(result.affectedRows === 0) {
        return this.ctx.helper.sqlErrorInfo(10000);
    }

    return this.ctx.helper.sqlErrorInfo(0);
  }

  // 更新用户信息
  async update(o, option) {
    const options = {
      where: option
    }
    const result = await this.app.mysql.update(this.table, o, options);
    if(result.affectedRows === 0) {
        return this.ctx.helper.sqlErrorInfo(10000);
    }
    return this.ctx.helper.sqlErrorInfo(0);
  }

  async delete(options) {
    const result = await this.app.mysql.delete(this.table, options);
    if(result.affectedRows === 0) {
        return this.ctx.helper.sqlErrorInfo(10000);
    }
    return this.ctx.helper.sqlErrorInfo(0);
  }
}

module.exports = EducationExperienceService;