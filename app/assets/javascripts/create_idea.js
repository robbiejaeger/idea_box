$(document).ready(function() {
  $("#create-idea").on("click", function(){
    var ideaTitle = $("#idea-title").val();
    var ideaBody = $("#idea-body").val();

    $.ajax({
      url: '/ideas',
      method: "POST",
      dataType: "JSON",
      data: {idea: {title: ideaTitle, body: ideaBody}}
    }).done(function(){
      var trimmedBody = trimTextToWord(ideaBody);

      renderIdea(ideaTitle, trimmedBody, 'swill');
    });
  });
});
