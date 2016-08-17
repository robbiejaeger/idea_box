function trimTextToWord(text){
  var maxLength = 100;

  if (text.length > maxLength){
    var trimmedBody = text.substr(0, maxLength);
    return trimmedBody.substr(0, Math.min(trimmedBody.length, trimmedBody.lastIndexOf(" "))) + '...';
  } else {
    return text;
  }
};

function renderIdea(title, body, quality){
  $('#ideas-container').prepend('<div class="idea-box">' +
                    '<h3>' + title + '</h3>' +
                    '<p>' + body + '</p>' +
                    '<p>' + quality + '</p>' +
                    '</div>');
};
