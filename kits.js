let kits = {};


//数字小于10时，在前方补一个0
kits.bl = function (num) {
  if (num < 10) {
    num = '0' + num;
  }
  return num;
}


//获取时间
kits.formatDate = function () {
  let sj = new Date();
  let year = this.bl(sj.getFullYear());
  let month = this.bl(sj.getMonth() + 1);
  let data = this.bl(sj.getDate());
  let hour = this.bl(sj.getHours());
  let minute = this.bl(sj.getMinutes());
  let second = this.bl(sj.getSeconds());
  return year + '-' + month + '-' + data + ' ' + ' ' + hour + ':' + minute + '：' + second ;
}
//获取毫秒数
kits.time = function () {
  let sj = new Date();
  let time = sj.getTime();
  return time;
}

//获取一个从n到m的随机浮点数
kits.randomFloat = function (n, m) {
  let sjs = Math.random() * (m - n + 1) + n;
  return sjs;
}

//获取一个从n到m的随机整数
kits.randomInt = function (n, m) {
  let sjs = Math.floor(Math.random() * (m - n + 1) + n);
  return sjs;
}

//获取随机十六进制的颜色
kits.randomHexColor = function () {
  let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  let randomHexColor = '#';
  for (let i = 0; i < 6; i++) {
    let temp = Math.floor(Math.random() * arr.length);
    randomHexColor += arr[temp];
  }
  return randomHexColor;
}

//获取随机rgb颜色
kits. randomRGBColor = function(){
  let arr = [];
  for (let i = 0; i < 3; i++){
    let temp = Math.floor(Math.random() * 256);
    arr.push(temp);
  }
  let str = arr.join(',');
  let randomRGBColor = 'rgb('+str+')';
  return randomRGBColor;
}