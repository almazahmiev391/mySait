//You have to add jQuery.
//Function.
function lateral(button, classShow, classHide, menu){
   var laBarra = document.querySelectorAll('.barra');
   $(button).click(function(){
      $(menu).toggleClass(classShow);
      $(menu).toggleClass(classHide);

      for(i = 0;i < laBarra.length; ++i){
         if ($(laBarra[i]).hasClass('barra'+(i+1)+'on')) {
            $(laBarra[i]).removeClass('barra'+(i+1)+'on');
            $(laBarra[i]).addClass('barra'+(i+1)+'off');
         }else{
            $(laBarra[i]).removeClass('barra'+(i+1)+'off');
            $(laBarra[i]).addClass('barra'+(i+1)+'on');
         }
      }
   });
}
//Call function.
lateral('.header_btm_menu','latAparece','latDesaparece','aside');

//Explanation the call.
//lateral('button-class-or-id','class--makes-appear','class-make-disappear','the-element-that-contain-the-menu');
