$(document).ready(function() {
  $.ajax({
    url: '/ideas',
    method: "GET",
    dataType: "JSON"
  }).done(function(allIdeas){
    $.each(allIdeas.ideas, function(i, idea) {
      // var trimmedBody = trimTextToWord(idea.body);

      renderIdea(idea.id, idea.title, idea.body, idea.quality);
    });
  });
});
