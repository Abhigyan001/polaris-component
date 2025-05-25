# frozen_string_literal: true

class CustomerItemComponent < ViewComponent::Base
  def initialize(customer:, selected: false)
    @customer = customer
    @selected = selected
  end

  private

  attr_reader :customer, :selected

  def checkbox_id
    "customer_#{customer.id}"
  end

  def customer_name
    customer.name
  end

  def customer_location
    customer.location
  end
end
