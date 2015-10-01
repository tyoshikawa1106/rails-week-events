require 'rails_helper'

describe "Static pages" do

  describe "Indexページのテスト" do

    it "should have the content 'Sample App'" do
      visit '/static_pages/index'
      expect(page).to have_content('Sample App')
    end
  end
end