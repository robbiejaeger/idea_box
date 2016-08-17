$(document).ready(function() {
  $('#idea-filter').on('keyup', function () {
    var $ideas = $('.idea-box');
    var query = this.value;

    $.each($ideas, function (index, idea) {
      var ideaText = idea.querySelector(".idea-box-title").innerHTML +
                ' ' + idea.querySelector(".idea-box-body").innerHTML;

      if (ideaText.toLowerCase().indexOf(query.toLowerCase()) == -1 ) {
        $(idea).hide();
      } else {
        $(idea).show();
      }
    })
  });
});
