/**
 * @description 常量定义
 */

/* 正则常量 */
const ID_CARD_RULE = /[1-9]\d{5}[1-2]\d{3}[0-1][0-9][0-3]\d{4}([0-9]|X)$/   // 身份证正则 

const TRIM_RULE = /(^\s+)|(\s+$)/g  // 去掉字符串首尾空格

const PASSWORD_RULE = /^[1-9a-zA-Z]{8,12}$/ // 匹配密码（只能8-12位数字和字母）

export default{
    ID_CARD_RULE,
    TRIM_RULE,
    PASSWORD_RULE,
}