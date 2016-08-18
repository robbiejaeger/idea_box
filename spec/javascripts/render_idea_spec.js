//= require helper_functions

describe('can render an idea', function () {

  xit('should be a div with title and body', function () {
    var ideasContainer = document.createElement('div');
    ideasContainer.setAttribute("id", "idea-box");

    renderIdea("2", "New Idea", "Body", 0);

    $ideas = $(".idea-box");

    assert.equal($ideas.children("h3").html(),"New Idea");
  });

});
