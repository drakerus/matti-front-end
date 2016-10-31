$(document).ready(function(){
	$(".reg_bl .sbm_link").click(function(){
		$(".reveal-modal").css("top", "200px");
		$(".reveal-modal").css("visibility", "hidden");
	});

	$("div.m_nav_pos").prepend("<i class='t_l'></i><i class='t_r'></i>");
	$("div.block").prepend("<i class='t_l'></i><i class='t_r'></i>");
	$("div.block").prepend("<i class='b_l'></i><i class='b_r'></i>");
	$("div.block_pos").prepend("<i class='t_line'></i><i class='b_line'></i>");
	$("div.block_pos").prepend("<i class='l_line'></i><i class='r_line'></i>");
	$("div.block").prepend("<i class='l_shadow'></i><i class='r_shadow'></i>");

	$(".comments_bl").prepend("<i class='c_line'></i>");

	$(".news_line li").eq(0).addClass("small_news");

	$(".news_line li a").hover(function(){
		$(".news_line li").removeClass("small_news");
		$(this).parent().addClass("small_news");

		return false;
	});

	$(".m_nav_bl td div b a").hover(
		function(){
			$(".m_nav_bl td div").removeClass("active");
			$(this).parent().parent().addClass("active");
		}
	);
	$(".m_nav_bl").hover(
		function(){

		},
		function(){
			$(".m_nav_bl td div").removeClass("active");
		}
	);

	var slidesLiSize = $(".news_line ul li").length;
	for(var i=0; i<slidesLiSize; i++)
	{
		var slidesLiVal = $(".news_line ul li").eq(i).find("a").html();
		$("#slides .pagination li").eq(i).find("a").html(slidesLiVal);
	}

	$(".content form").jqTransform({imgPath:"img/"});
	$(".reveal-modal form").jqTransform({imgPath:"img/"});

	function inputChange(inputId){
		var inputTxtBg = $(inputId).parent().parent().find("span");
		$(inputTxtBg).html("");
		$(inputTxtBg).css("opacity", "0");
		if($(inputId).attr("value") == "" || $(inputId).attr("value") == $(inputTxtBg).attr("value"))
		{
			$(inputTxtBg).html($(inputTxtBg).attr("value"));
			$(inputTxtBg).animate({
				opacity: 1
			}, 250);
			$(inputId).attr("value", "");
		}	
	}

	var jqtFormSize = $(".jqtransformdone").length;
	for(var i=0; i<jqtFormSize; i++)
	{
		$(".jqtransformdone").find(".jqTransformReset").attr("title", i);
	}

	$(".jqTransformReset").click(function(){
		var jqfFormNum = $(this).attr("title");
		var inputTextSize = $(".jqtransformdone").eq(jqfFormNum).find(".jqTransformInputWrapper").length;
		for(var i=0; i<inputTextSize; i++)
		{
			$(".jqtransformdone").eq(jqfFormNum).find(".jqTransformInputWrapper").eq(i).find("input").attr("value", "");
			var inputId = $(".jqtransformdone").eq(jqfFormNum).find(".jqTransformInputWrapper").eq(i).find("input");
			inputChange(inputId);
		}
	});
	$(".jqTransformInputWrapper input").focus(function(){
		var inputTxtBg = $(this).parent().parent().find("span");
		$(inputTxtBg).html("");
		$(inputTxtBg).css("opacity", "0");
	});
	$(".jqTransformInputWrapper input").blur(function(){
		var inputId = $(this);
		inputChange(inputId);
	});


	var newsOne = 1;
	var newsMax = $(".news_day_one .jcarousel-skin-tango li").length;
	$(".news_day .m_img").removeClass("m_img_on");
	$(".news_day .m_img").eq(newsOne-1).addClass("m_img_on");

	$(".news_day_one .jcarousel-skin-tango .jcarousel-next-horizontal").click(function(){
		newsOne++;
		if(newsOne > newsMax)
		{newsOne = 1;}

		$(".news_day .m_img").removeClass("m_img_on");
		$(".news_day .m_img").eq(newsOne-1).addClass("m_img_on");
	});
	$(".news_day_one .jcarousel-skin-tango .jcarousel-prev-horizontal").click(function(){
		newsOne--;
		if(newsOne < 1)
		{newsOne = newsMax;}

		$(".news_day .m_img").removeClass("m_img_on");
		$(".news_day .m_img").eq(newsOne-1).addClass("m_img_on");
	});

	var newBl = $(".w_nav a.active").attr("href");
	$(newBl).show();

	$(".w_nav a").click(function(){
		if($(this).attr("class") != "active")
		{
			$(".w_nav a").removeClass("active");
			$(".w_nav_bl_pos").hide();

			$(this).addClass("active");

			var newBl = $(".w_nav a.active").attr("href");
			$(newBl).show();	
		}
		return false;
	});

	$(".w_nav_all").click(function(){
		$(".w_nav a").removeClass("active");
		$(".w_nav_bl_pos").show();

		return false;
	});

	/* new_scripts */
	$(".w_nav").prepend("<i class='w_line'></i>");
	var wNavSize = $(".w_nav li").length;
	var wNavWidth = $(".w_nav").width();
	var wLiWidth = 0;
	for(var i=wNavSize; i>=0; i--)
	{
		var liWidth = $(".w_nav li").eq(i).width();
		wLiWidth = wLiWidth + liWidth;

		if((wLiWidth+ $(".w_nav li").eq(i-1).width()) > wNavWidth)
		{
			$(".w_nav li").eq(i).addClass("enline");
			wLiWidth = 0;
		}
	}
});