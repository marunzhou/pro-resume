const errorSqlCode = {
  0: '操作成功',
  10000: '操作失败',
  10001: '信息已存在',
  10002: '字段数据为空',
}
module.exports = {
  // 数据库信息报错
  sqlErrorInfo(code) {
    return {
      code,
      msg: errorSqlCode[code]
    }
  }
}