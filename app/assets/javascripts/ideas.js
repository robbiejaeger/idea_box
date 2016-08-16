$(document).ready(function() {
  $.ajax({
      url: '/ideas',
      method: "GET",
      dataType: "JSON"
  }).done(function(allIdeas){
    $.each(allIdeas.ideas, function(i, idea) {
      $('#ideas-table').append('<tr>' +
                        '<td>' + idea.title + '</td>' +
                        '<td>' + idea.body + '</td>' +
                        '<td>' + idea.quality + '</td>' +
                        '</tr>');
    });
  });
});
