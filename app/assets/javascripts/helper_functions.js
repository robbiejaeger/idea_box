var deleteButton = "<button name='button-delete' class='delete-idea'>Delete Idea</button>"

var updateButton = "<button name='button-update' class='update-idea'>Update Idea</button>"

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
                    "<h3 class='idea-box-title' contenteditable='true'>" + title + "</h3>" +
                    "<p class='idea-box-body' contenteditable='true'>" + body + "</p>" +
                    "<p>" + quality + "</p>" +
                    deleteButton +
                    updateButton +
                    "</div>");
};
