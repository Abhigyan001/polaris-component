# app/controllers/customers_controller.rb
class CustomersController < ApplicationController
  def index
    @customers = Customer.all
  end

  def show
    @customer = Customer.find(params[:id])
  end

  def new
    @customer = Customer.new
  end

  def create
    @customer = Customer.new(customer_params)
    
    if @customer.save
      redirect_to customers_path, notice: 'Customer was successfully created.'
    else
      render :new
    end
  end

  def edit
    @customer = Customer.find(params[:id])
  end

  def update
    @customer = Customer.find(params[:id])
    
    if @customer.update(customer_params)
      redirect_to customers_path, notice: 'Customer was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @customer = Customer.find(params[:id])
    @customer.destroy
    redirect_to customers_path, notice: 'Customer was successfully deleted.'
  end

  private

  def customer_params
    params.require(:customer).permit(:name, :location)
  end
end
