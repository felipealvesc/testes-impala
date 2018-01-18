

showJsonProducts();

function showJsonProducts(){
	var endereco = 'http://localhost:3005/db';
	$.ajax({
		url: endereco,
		complete: function(res){
			var meuJSON = JSON.parse(res.responseText);
			var template=document.querySelector('#template-produtos').innerHTML;
			t=Mustache.render(template, meuJSON);
			document.querySelector('.shelf-content').innerHTML=t;

			slider();		

		}
	});

	function slider(){
		$('.shelf-content-itens').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3
	});
}
}



$('.btn--facebook').click(function(){
	
	event.target.parentNode.classList.add("fadeOut");
	$('.Recomendacao--products').css('display', 'none');
	$('.shelf-content').css('display', 'none');
	$('.Recomendacao--header').css('display', 'none');
	$('.Recomendacao--footer').css('display', 'none');

	showJsonFacebook();
});

function showJsonFacebook(){
	var endereco = 'http://localhost:3004/db';
	$.ajax({
		url: endereco,
		complete: function(res){
			var meuJSON = JSON.parse(res.responseText);
			var template=document.querySelector("#template-facebook").innerHTML;
			t=Mustache.render(template, meuJSON);
			document.querySelector(".agradedecimento").innerHTML=t;
		}
	});
}


	