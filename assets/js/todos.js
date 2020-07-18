//check off specific to do by clicking
$("li").click(function () {
  $(this).toggleClass("completed");
});

//click on X to delete to do li 
$("span").click(function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();// to not call to fathers events
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // grabbing new to do text from input
       var todoText = $(this).val();
       $(this).val("");
       //create a new li and add to ul
       $("ul").append("<li><span>X</span> "+ todoText +"</li>");
    }
});