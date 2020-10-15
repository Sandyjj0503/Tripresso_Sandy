$(function()
{  //------ 點擊跳出視窗 ------
   $(".btnApply01").on("click", OPENOPEN1 );
   $(".btnApply02").on("click", OPENOPEN2 );
   $(".btnApply03").on("click", OPENOPEN3 );
   $(".btnApply04").on("click", OPENOPEN4 );
   $(".btnApply05").on("click", OPENOPEN5 );
   $(".btnApply06").on("click", OPENOPEN6 );
   $(".btnApply07").on("click", OPENOPEN7 );
   $(".btnApply08").on("click", OPENOPEN8 );

   function OPENOPEN1()
   { 
      $("#wrapper01").fadeIn(300);
      $("#XX01").on("click", CLOSECLOSE1 );
   }
   
   function CLOSECLOSE1()
   {
      $("#wrapper01").fadeOut(300);
      $("#XX01").off("click");
   }

   function OPENOPEN2()
   { 
      $("#wrapper02").fadeIn(300);
      $("#XX02").on("click", CLOSECLOSE2 );
   }
   
   function CLOSECLOSE2()
   {
      $("#wrapper02").fadeOut(300);
      $("#XX02").off("click");
   }

   function OPENOPEN3()
   { 
      $("#wrapper03").fadeIn(300);
      $("#XX03").on("click", CLOSECLOSE3 );
   }
   
   function CLOSECLOSE3()
   {  
      $("#wrapper03").fadeOut(300);
      $("#XX03").off("click");
   }

   function OPENOPEN4()
   {  
      $("#wrapper04").fadeIn(300);
      $("#XX04").on("click", CLOSECLOSE4 );
   }
   
   function CLOSECLOSE4()
   {  
      $("#wrapper04").fadeOut(300);
      $("#XX04").off("click");
   }
   
   function OPENOPEN5()
   {  
      $("#wrapper05").fadeIn(300);
      $("#XX05").on("click", CLOSECLOSE5 );
   }
   
   function CLOSECLOSE5()
   {  //alert("CLOSECLOSE");
      $("#wrapper05").fadeOut(300);
      $("#XX05").off("click");
   }
   
   function OPENOPEN6()
   {  
      $("#wrapper06").fadeIn(300);
      $("#XX06").on("click", CLOSECLOSE6 );
   }
   
   function CLOSECLOSE6()
   {  //alert("CLOSECLOSE");
      $("#wrapper06").fadeOut(300);
      $("#XX06").off("click");
   }
   
   function OPENOPEN7()
   {  
      $("#wrapper07").fadeIn(300);
      $("#XX07").on("click", CLOSECLOSE7 );
   }
   
   function CLOSECLOSE7()
   {  //alert("CLOSECLOSE");
      $("#wrapper07").fadeOut(300);
      $("#XX07").off("click");
   }
   
   function OPENOPEN8()
   {  
      $("#wrapper08").fadeIn(300);
      $("#XX08").on("click", CLOSECLOSE8 );
   }
   
   function CLOSECLOSE8()
   {  //alert("CLOSECLOSE");
      $("#wrapper08").fadeOut(300);
      $("#XX08").off("click");
   }

});