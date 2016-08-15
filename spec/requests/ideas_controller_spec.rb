require 'rails_helper'

describe "Ideas API Controller" do
  it "finds all of the ideas" do
    idea1 = Idea.create(title: "Idea1", body: "Idea1 body.")
    idea2 = Idea.create(title: "Idea2", body: "Idea2 body.")

    get '/ideas'

    parsed_response = JSON.parse(response.body)
    expect(response.status).to eq(200)

    expect(parsed_response["ideas"].length).to eq(2)
    expect(parsed_response["ideas"][0]["title"]).to eq("Idea1")
    expect(parsed_response["ideas"][0]["body"]).to eq("Idea1 body.")

    expect(parsed_response["ideas"][1]["title"]).to eq("Idea2")
    expect(parsed_response["ideas"][1]["body"]).to eq("Idea2 body.")
  end
end