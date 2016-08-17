var deleteButton = '<button name="button-delete" class="delete-idea">Delete Idea</button>'

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
  $('#ideas-container').prepend('<div class="idea-box" data-id=' + id + '>' +
                    '<h3>' + title + '</h3>' +
                    '<p>' + body + '</p>' +
                    '<p>' + quality + '</p>' +
                    deleteButton +
                    '</div>');
};
