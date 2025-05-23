Customer.destroy_all

customers = [
  { name: "Mae Jemison", location: "Decatur, USA" },
  { name: "Ellen Ochoa", location: "Los Angeles, USA" },
  { name: "Sally Ride", location: "San Diego, USA" },
  { name: "Kalpana Chawla", location: "Houston, USA" },
  { name: "Valentina Tereshkova", location: "Moscow, Russia" }
]

customers.each do |customer_data|
  Customer.create!(customer_data)
end

puts "Created #{Customer.count} customers"
