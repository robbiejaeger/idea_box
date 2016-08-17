$(document).ready(function() {
  $('#idea-filter').on('keyup', function () {
    var $ideas = $('.idea-box');
    var query = this.value;

    $.each($ideas, function (index, idea) {
      var ideaText = $(idea).children(".idea-box-title").html() +
                ' ' + $(idea).children(".idea-box-body").html();

      if (ideaText.toLowerCase().indexOf(query.toLowerCase()) == -1 ) {
        $(idea).hide();
      } else {
        $(idea).show();
      }
    })
  });
});
