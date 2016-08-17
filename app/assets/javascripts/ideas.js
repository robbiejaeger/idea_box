$(document).ready(function() {
  $.ajax({
    url: '/ideas',
    method: "GET",
    dataType: "JSON"
  }).done(function(allIdeas){
    $.each(allIdeas.ideas, function(i, idea) {
      renderIdea(idea.id, idea.title, idea.body, idea.quality);
    });
  });
});
