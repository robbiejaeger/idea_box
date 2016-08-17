$(document).ready(function() {
  $("#ideas-container").on("click", ".update-idea", function(){
    var $ideaDiv = $(this).parent();
    var ideaID = $ideaDiv.data("id");
    var ideaTitle = $ideaDiv.children(".idea-box-title").html();
    var ideaBody = $ideaDiv.children(".idea-box-body").html();

    $.ajax({
      url: '/ideas/' + ideaID,
      method: "PATCH",
      dataType: "JSON",
      data: {idea: {title: ideaTitle, body: ideaBody}}
    })
  });
});
