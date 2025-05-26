# frozen_string_literal: true

class DropdownMenuComponent < ViewComponent::Base
  def initialize(items: [])
    @items = items
  end

  private

  attr_reader :items
end
