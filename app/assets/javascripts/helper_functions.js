var qualities = ["swill", "plausible", "genius"];

var deleteButton = "<button name='button-delete' class='delete-idea'>Delete Idea</button>"

function trimTextToWord(text){
  var maxLength = 100;

  if (text.length > maxLength){
    var trimmedBody = text.substr(0, maxLength);
    return trimmedBody.substr(0, Math.min(trimmedBody.length, trimmedBody.lastIndexOf(" "))) + '...';
  } else {
    return text;
  }
};

function renderIdea(id, title, body, quality){
  $('#ideas-container').prepend("<div class='idea-box'" +
                    "data-id='" + id + "'>" +
                    "<h3 class='idea-box-title editable' contenteditable='true'>" + title + "</h3>" +
                    "<p class='idea-box-body editable' contenteditable='true'>" + body + "</p>" +
                    "<p>" + qualities[quality] + "</p>" +
                    deleteButton +
                    "</div>");
};
