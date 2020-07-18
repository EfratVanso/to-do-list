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