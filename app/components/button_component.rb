# frozen_string_literal: true

class ButtonComponent < ViewComponent::Base
  def initialize(text:)
    @text = text
  end

  private

  attr_reader :text, :options

  def button_classes
    "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-150"
  end
end
