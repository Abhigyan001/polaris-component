Customer.destroy_all

customers = [
  { name: "Mae Jemison", location: "Decatur, USA" },
  { name: "Ellen Ochoa", location: "Los Angeles, USA" }
]

customers.each do |customer_data|
  Customer.create!(customer_data)
end

puts "Created #{Customer.count} customers"
