//移动端的触摸
//封装一个单击事件
function tap(element,fn,offestX,offestY,maxTime){
  //默认位移偏差50，如需更改需传参数
  offestX = offestX || 50;
  offestY = offestY || 50;
  //默认单击时间不超过150，如需更改需传参数
  maxTime = maxTime || 150;
  let startTime = 0;  
  let starX,starY;  
  element.addEventListener('touchstart',function(e){
    if(e.changedTouches.length !== 1){
      console.log('不是单指操作！');
      return;
    }
    //记录触摸开始的时间
    startTime = Date.now();   
    //记录触摸开始的位置
    starX = e.changedTouches[0].pageX;  
    starY = e.changedTouches[0].pageY;
  })
  element.addEventListener('touchend',function(e){
    //记录触摸结束的时间
    let endTime = Date.now(); 
    //如果时间差超过200ms，则退出
    if(endTime - startTime > 150){
      console.log('点击时间过长！');
      return;
    }
    //记录触摸结束的位置
    let endX = e.changedTouches[0].pageX; 
    let endY = e.changedTouches[0].pageY;
    //如果位移差太大，则退出
    if(Math.abs(endX - starX) > offestX || Math.abs(endY - starY) > offestY){
      console.log('移动位置太大！');
      return;
    }
    console.log('这是一个单击事件！');
    //短路运算，如果给了回调函数就执行，没有则不执行
    fn && fn();
  })
}


//左滑动
function swipeLeft(element,fn,offestX,offestY,minTime){
  offestX = offestX || 50;
  offestY = offestY || 25;
  minTime = minTime || 150;
  element.addEventListener('touchstart',function(e){
    if(e.touches.length !== 1){
      console.log('不是单指操作！')
      return;
    }
    startTime = Date.now();
    starX = e.touches[0].pageX;
    starY = e.touches[0].pageY;
  })
  element.addEventListener('touchend',function(e){
    let endX = e.changedTouches[0].pageX;
    let endY = e.changedTouches[0].pageY;
    if(endX - starX >= -offestX || Math.abs(endY - starY) > offestY){
      console.log('不是有效滑动');
      return;
    }
    let endTime = Date.now();
    if(endTime - startTime < minTime){
      console.log('触摸时间太短');
      return;
    }
    console.log('这是左滑动');
    fn && fn();
  })
}


//右滑动
function swipeRight(element,fn,offestX,offestY,minTime){
  offestX = offestX || 50;
  offestY = offestY || 25;
  minTime = minTime || 150;
  element.addEventListener('touchstart',function(e){
    if(e.touches.length !== 1){
      console.log('不是单指操作！')
      return;
    }
    startTime = Date.now();
    starX = e.touches[0].pageX;
    starY = e.touches[0].pageY;
  })
  element.addEventListener('touchend',function(e){
    let endX = e.changedTouches[0].pageX;
    let endY = e.changedTouches[0].pageY;
    if(endX - starX <= offestX || Math.abs(endY - starY) > offestY){
      console.log('不是有效滑动');
      return;
    }
    let endTime = Date.now();
    if(endTime - startTime < minTime){
      console.log('触摸时间太短');
      return;
    }
    console.log('这是右滑动');
    fn && fn();
  })
}