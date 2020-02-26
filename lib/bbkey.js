const bbkey = (x) => {
  const keys = ['upper', 'lower', 'numeral'];
  let str = '';
  const chars = {
    upper() {
      return Math.floor(Math.random() * 26) + 65;
    },
    lower() { 
      return Math.floor(Math.random() * 26) + 97;
    },
    numeral() {
      return Math.floor(Math.random() * 10) + 48;
    }
  }
  for (let i = 0; i < x; i++) {
    let rand = Math.floor(Math.random()* Math.floor(3));
    str += String.fromCharCode(chars[keys[rand]]());
  }
  return str;
};
export default bbkey;