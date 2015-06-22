$(document).ready(function(){

    $('.grid').on('contextmenu', 'img', function(e){
        var imgLoc = $(this).attr('src');
        var imgSrc = imgLoc.substring(0, (imgLoc.length- 7)) + '.jpg';
        var offset = $(this).offset();
        var relativeX = (e.pageX - offset.left) ;
        var relativeY = (e.pageY - offset.top) ;

        $(this).parent().append("<div class='preview'><img src='" + imgSrc + "'></div>");
       $("li div.preview").css({
           'left': relativeX + 5 + 'px',
           'top': relativeY + 5 + 'px'
       });
         e.preventDefault();
       
    

  $('.grid').on('mousemove', 'img', function(f){
         var offset = $(this).offset();
        var relativeX = (f.pageX - offset.left) ;
        var relativeY = (f.pageY - offset.top) ;
        $(' li div.preview').css({
            'left': relativeX + 5 + 'px',
            'top': relativeY + 5 + 'px'
        });
        //console.log('X = ' + cssLeft  + ' and Y = ' + cssTop);
    });  //mousemove  

$('.grid').on('mouseleave', 'li', function(){
          $(this).parent().find('div.preview').remove();   
   });//mouseout

    });// mouseOver



});//document ready  