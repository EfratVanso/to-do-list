//check off specific to do by clicking
//using 'on' method instead 'click', 
    //to make this work also to the elements that added dynamically 
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//click on X to delete to do li 
$("ul").on("click", "span",function (event) {
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
       $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText +"</li>");
    }
});

