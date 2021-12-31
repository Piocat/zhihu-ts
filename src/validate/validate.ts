export interface validateDataType {
  value: string;
  rules: string;
  name: string;
}

export function validator(validateData: validateDataType): string[] {
  const emailPattern = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; // 邮箱的正则规则
  const returnArr: string[] = [];

  // 判断规则是否不为空
  if (validateData.rules) {
    // 验证输入内容是否为空
    if (!validateData.value) {
      returnArr.push(`${validateData.name}不能为空`);
      console.log();
      return returnArr;
    }

    // 验证邮件格式
    if (validateData.rules.includes('email') && !validateData.value.match(emailPattern)) {
      returnArr.push('邮件格式不正确');
      return returnArr;
    }
  }
  return returnArr;
}
