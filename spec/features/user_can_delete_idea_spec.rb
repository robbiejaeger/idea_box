require "rails_helper"

feature 'Home' do
  xit 'should not have JavaScript errors', :js => true do
    idea = Idea.create(title: "Idea", body: "Idea Body")

    visit(root_path)
    wait_for_ajax
    reload_page

    expect(page).to have_content("Idea Body")
  end
end
