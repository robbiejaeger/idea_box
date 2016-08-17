$(document).ready(function() {
  $("#ideas-container").on("click", ".upvote-idea", function(){
    var $ideaDiv = $(this).parent();
    var ideaID = $ideaDiv.data("id");
    var ideaQuality = $ideaDiv.children(".idea-box-quality").data("value");

    if (ideaQuality < (qualities.length - 1)) {
      var newQuality = ideaQuality + 1;
      updateQuality(ideaID, $ideaDiv, newQuality);
    };
  });

  $("#ideas-container").on("click", ".downvote-idea", function(){
    var $ideaDiv = $(this).parent();
    var ideaID = $ideaDiv.data("id");
    var ideaQuality = $ideaDiv.children(".idea-box-quality").data("value");

    if (ideaQuality > 0) {
      var newQuality = ideaQuality - 1;
      updateQuality(ideaID, $ideaDiv, newQuality);
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
