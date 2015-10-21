$(function() {
	var compose = $('#template-compose').html();
	var templateCompose = Handlebars.compile(compose);

	var source =$('#template-tweet').html();
	var templateTweet =Handlebars.compile(source);

	var source =$('#template-thread').html();
	var templateThread =Handlebars.compile(source);

	var user = {
	  handle: '@bradwestfall',
	  img: 'images/brad.png'
	}


	$('.compose').on('focusin',function() {
		$(this).addClass('expand');
	});
	$('.compose').on('focusout',function() {
		$(this).addClass('expand');
	});
	// var message = $('header .compose textarea').val();
	// console.log(message);

	$('body').on('click', 'button', function(e){
	 	e.preventDefault();

		if ($(this).parents('header').length) {
	 		var message = $('header .compose textarea').val();
	 		var html = renderThread(user,message);
          	$('.tweets').append(html);

 		 } else {
 		 	var message = $(this).parent().siblings('textarea').val();
 		 	var html = renderTweet(user,message);
 		 	  $(this).parent().append(html);
 		 	 
		}

			$('textarea').val(""); 



    });
	// $('#continuetweet').on('click',function(e){
	//  	e.preventDefault();
	// 	$(this).(renderTweet(user,"hello"));
	//  });
 	// $('.thread').on('click',function() {
		// $(this).toggleClass('expand');
 	// });

 

 	$('body').on('click', '.thread', function(){
 		$(this).toggleClass('expand');
 	});

 	$('.replies').on('click',function(){
 		$(this).parent().toggleClass('expand');
	});


	function renderTweet(user, message){
		var context = {
			title : user.handle,
			img : user.img,
			message : message
		};
		return templateTweet(context);
	};


 // 	var html = template(context);
	// }

	function renderCompose(){
 		return templateCompose();
	};


	function renderThread(user, message){
		var context = {
			tweet:renderTweet(user, message),
			compose:renderCompose()

		};
		return templateThread(context);
	}

 });