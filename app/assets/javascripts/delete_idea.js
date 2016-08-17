$(document).ready(function() {
  $("#ideas-container").on("click", ".delete-idea", function(){
    var $ideaDiv = $(this).parent();
    var ideaID = $ideaDiv.data("id");

    $.ajax({
      url: '/ideas/' + ideaID,
      method: "DELETE",
      dataType: "JSON"
    }).done(function(){
      $ideaDiv.hide();
    });
  });
});
