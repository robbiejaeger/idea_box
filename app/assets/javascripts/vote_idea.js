$(document).ready(function() {
  $("#ideas-container").on("mousedown", ".vote-idea", function(){
    var $ideaDiv = $(this).parent();
    $ideaDiv.children(".idea-box-quality").css('color', 'black');
  });

  $("#ideas-container").on("mouseup", ".vote-idea", function(){
    var $ideaDiv = $(this).parent();
    var ideaID = $ideaDiv.data("id");
    var ideaQuality = $ideaDiv.children(".idea-box-quality").data("value");
    $ideaDiv.children(".idea-box-quality").css('color', '#777');

    if ($(this).hasClass("up")) {
      if (ideaQuality < (qualities.length - 1)) {
        var newQuality = ideaQuality + 1;
        updateQuality(ideaID, $ideaDiv, newQuality);
      };
    } else {
      if (ideaQuality > 0) {
        var newQuality = ideaQuality - 1;
        updateQuality(ideaID, $ideaDiv, newQuality);
      };
    };
  });
});

function updateQuality(ideaID, ideaDiv, newQuality){
  $.ajax({
    url: '/ideas/' + ideaID,
    method: "PATCH",
    dataType: "JSON",
    data: {idea: {quality: newQuality}}
  }).done(function(){
    ideaDiv.children(".idea-box-quality").html(qualities[newQuality]);
    ideaDiv.children(".idea-box-quality").data("value", newQuality);
  });
};
