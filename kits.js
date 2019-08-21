let kits = {};


//数字小于10时，在前方补一个0
kits.bl = function (num) {
  if (num < 10) {
    num = '0' + num;
  }
  return num;
}


//获取时间
kits.times = function () {
  let sj = new Date();
  let year = this.bl(sj.getFullYear());
  let month = this.bl(sj.getMonth() + 1);
  let data = this.bl(sj.getDate());
  let hour = this.bl(sj.getHours());
  let minute = this.bl(sj.getMinutes());
  let second = this.bl(sj.getSeconds());
  return year + '年' + month + '月' + data + '日' + ' ' + hour + '时' + minute + '分' + second + '秒';
}
//获取毫秒数
kits.time = function () {
  let sj = new Date();
  let time = sj.getTime();
  return time;
}

//获取一个从n到m的随机浮点数
kits.sjsFloat = function (n, m) {
  let sjs = Math.random() * (m - n + 1) + n;
  return sjs;
}

//获取一个从n到m的随机整数
kits.sjsInt = function (n, m) {
  let sjs = Math.floor(Math.random() * (m - n + 1) + n);
  return sjs;
}

//获取随机十六进制的数
kits.random16 = function () {
  let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  let random16 = '';
  for (let i = 0; i < 6; i++) {
    let temp = Math.floor(Math.random() * arr.length);
    random16 += arr[temp];
  }
  return random16;
}