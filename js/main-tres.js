

function showJson(){
	var endereco = 'http://localhost:3005/db';
	$.ajax({
		url: endereco,
		complete: function(res){
			var meuJSON = JSON.parse(res.responseText);
			var template=document.querySelector("#template").innerHTML;
			t=Mustache.render(template, meuJSON);
			document.querySelector(".shelf-content").innerHTML=t;
			
			slider();		

		}
	});
}

function slider(){
	$('.shelf-content-itens').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});
}


$('.Home--routes >li:nth-child(1)').click(function(){
	
	$('.Main--pages >section:nth-child(2)').css('display', 'block');
	$('.Main--pages >section:nth-child(3)').css('display', 'none');
	$('.Main--pages >section:nth-child(4)').css('display', 'none');
	$('.shelf-content').css('display', 'block');
	$('.Pages--home').css('display', 'none');
	$('.shelf-content').css('display', 'block');

	
});

$('.Home--routes >li:nth-child(2)').click(function(){
	$('.Main--pages >section:nth-child(3)').css('display', 'block');
	$('.Main--pages >section:nth-child(2)').css('display', 'none');
	$('.Main--pages >section:nth-child(4)').css('display', 'none');
	$('.Main--header').css('display', 'nome');
	$('.Pages--home').css('display', 'none');

});
$('.Home--routes >li:nth-child(3)').click(function(){
	$('.Main--pages >section:nth-child(4)').css('display', 'block');
	$('.Main--pages >section:nth-child(3)').css('display', 'none');
	$('.Main--pages >section:nth-child(2)').css('display', 'none');
	$('.Main--header').css('display', 'nome');
	$('.Pages--home').css('display', 'none');
	showJson();

});

$('.btn--back').click(function(){
	$('.Main--pages >section:nth-child(4)').css('display', 'none');
	$('.Main--pages >section:nth-child(3)').css('display', 'none');
	$('.Main--pages >section:nth-child(2)').css('display', 'none');
	$('.Pages--home').css('display', 'block');
	$('.Main--header').css('display', 'block');

});





