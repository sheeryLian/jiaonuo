var page = 0;
var timer = null;

function creattime(){
	timer = setInterval(function(){
		page ++;
		if(page > $('#banner .ban').size() - 1){
			page = 0;
		}
		$('#banner .ban').removeClass('cur');
		$('#banner .ban').eq(page).addClass('cur');
	},3000)
}

creattime();

$('#banner .btnl').click(function(){
	clearInterval(timer);
	page --;
	if(page < 0){
		page = 1
	}
	$('#banner .ban').removeClass('cur');
	$('#banner .ban').eq(page).addClass('cur');
	creattime();
});

$('#banner .btnr').click(function(){
	clearInterval(timer);
	page ++;
	if(page > $('#banner .ban').size() - 1){
		page = 0;
	}
	$('#banner .ban').removeClass('cur');
	$('#banner .ban').eq(page).addClass('cur')
	creattime();
});