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

//获取id，id组成是当前毫秒数+100000~999999随机数
kits.idTimeRandonInt = function(){
  let idTimeRandonInt = kits.time() + '' + kits.randomInt(100000,999999);
  return idTimeRandonInt;
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

//getLocalDataArray(key)从localStorage里面根据指定的键(key)获取一个数组
kits.getLocalDataArray = function(key){
  let data = localStorage.getItem(key);
  let arr = JSON.parse(data);
  arr = arr || [];
  return arr;
}

//saveLocalDataArray(key,arr)将一个数组(arr)以指定的键(key)存储到localStorage里面
kits.saveLocalDataArray = function(key,arr){
  let json = JSON.stringify(arr);
  localStorage.setItem(key,json);
}

//appendDataIntoArray(key,data)向localStorage里面指定键(key)的数组数据追加一个数据对象（data）
kits.appendDataIntoArray = function(key,data){
  kits.getLocalDataArray(key);
  arr.push(data);
  kits.saveLocalDataArray(key,arr);
}

//deleteLocalDataById(key,id)根据对应的id从localStorage中指定键(key)的数组中删除一条数据
kits.deleteLocalDataById = function(key,id){
  kits.getLocalDataArray(key);
  arr.forEach((e,i) => {
    if(e.id == id){
      arr.splice(i,1);
    }
  })
  kits.saveLocalDataArray(key,arr);
}

//modifyLocalDataById(key,id,data)根据id修改localStorage里面的指定键(key)的数组数据
kits.modifyLocalDataById = function(key,id,data){
  kits.getLocalDataArray(key);
  arr.forEach((e,i) => {
    if(e.id == id){
      arr.splice(i,1,data);
    }
  })
  kits.saveLocalDataArray(key,arr);
}