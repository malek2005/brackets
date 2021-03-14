module.exports = function check(str, bracketsConfig) 
{
  for (let j = 0; j < bracketsConfig.length; j++) {
      let item = bracketsConfig[j];
      let open = item[0];
      let close = item[1];
      for (let i = 0; i < str.length; i++) {
          if (str[i] == open && str[i + 1] == close) {
              str = str.substr(0, i) + str.substr(i + 2);
              i = -1;
              j = -1;
              continue;
          }
      }
  }
  return str.length === 0;
}
