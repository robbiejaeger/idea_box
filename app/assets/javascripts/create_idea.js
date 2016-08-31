$(document).ready(function() {
  $("#create-idea").on("click", function(){
    var $ideaTitle = $("#idea-title");
    var title = $ideaTitle.val();
    var $ideaBody = $("#idea-body");
    var body = $ideaBody.val();

    $.ajax({
      url: '/ideas',
      method: "POST",
      dataType: "JSON",
      data: {idea: {title: title, body: body}}
    }).done(function(idea){
      renderIdea(idea.id, idea.title, idea.body, idea.quality);

      $ideaTitle.val("");
      $ideaBody.val("");
    });
  });
});
