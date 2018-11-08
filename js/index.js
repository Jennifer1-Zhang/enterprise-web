$(function(){
	$('.ig').eq(0).show().siblings('.ig').hide();
	circleTime();
	$('.banner_left').click(function(){
		clearInterval(timer);
		i--;
		if(i==-1){
			i=3;
		}
		showCircle();/*再次调用为了更快显示*/
		circleTime();/*调用恢复定时器功能*/
	})
	$('.banner_right').click(function(){
		clearInterval(timer);
		i++;
		if(i==4){
			i=0;
		}
		showCircle();
		circleTime();
	})
})
/*每张图片显示和消失函数8*/
var i=0;
function showCircle(){
	$('.ig').eq(i).fadeIn(300).siblings('.ig').fadeOut(300);
}
/*设定每张图片显示的间隔时间8*/
var timer;
function circleTime(){
	timer=setInterval(function(){
		showCircle();
		i++;
		if(i==4){
			i=0;
		}
	},2500)
	
}