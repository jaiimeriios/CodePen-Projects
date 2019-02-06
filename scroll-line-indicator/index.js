
//capture scroll percentage

$(window).scroll(function(){
    
    var windowTop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
     
    var scrolled = (windowTop/(docheight-winheight))*100;
  
  	$('.scroll-line').css('width', (scrolled + '%'));
});