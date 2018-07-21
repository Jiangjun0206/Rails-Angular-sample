require "rails_helper.rb"
describe "testing that rspec is configured" do
	it "should pass" do
		expect(true).to eq(true)
	end
	it "can fail" do
		expect(false).to eq(true)
	end
end