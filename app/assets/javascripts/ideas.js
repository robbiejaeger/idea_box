$(document).ready(function() {
  $.ajax({
      url: '/ideas',
      method: "GET",
      dataType: "JSON"
  }).done(function(allIdeas){
    $.each(allIdeas.ideas, function(i, idea) {
      var body = idea.body;
      if (body.length > 100){
        var maxLength = 100;

        var trimmedBody = body.substr(0, maxLength);
        trimmedBody = trimmedBody.substr(0, Math.min(trimmedBody.length, trimmedBody.lastIndexOf(" ")));
      } else {
        var trimmedBody = body;
      }

      $('#ideas-table').append('<tr>' +
                        '<td>' + idea.title + '</td>' +
                        '<td>' + trimmedBody + '</td>' +
                        '<td>' + idea.quality + '</td>' +
                        '</tr>');
    });
  });
});
