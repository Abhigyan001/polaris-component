# frozen_string_literal: true

class TableHeaderComponent < ViewComponent::Base
  def initialize(total_customers:)
    @total_customers = total_customers
  end

  private

  attr_reader :total_customers
end
