$(function(){
	$('.office_plan .nav .item').click(function(){
		var index = $(this).index();
		console.log(index);
		$('.office_plan .nav .item').removeClass('cur');
		$('.office_plan .nav .item').eq(index).addClass('cur');
		$('.office_plan .img_box img').removeClass('cur');
		$('.office_plan .img_box img').eq(index).addClass('cur');
		$('.off_plan .list_img img').removeClass('cur');
		$('.off_plan .list_img img').eq(index).addClass('cur');
	});
});