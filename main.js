function main(){
  $(".content").hide();
  $(".content").fadeIn(2500);
  $(".projects").hide();
  $(".projects-button").on('click', function(){
  	$(this).next().slideToggle(400);
	$(this).toggleClass("active");
	});
  }
  $(document).ready(main);