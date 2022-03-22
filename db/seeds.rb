# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Product.destroy_all

demoUser = User.create(email: 'demo@demo.com', password: 'demoPassword')
user = User.create(email: 'test', password: 'password')


#foundation PC

computer1 = Product.create(
    name: 'Foundation PC', 
    description: 'The NZXT Foundation PC has an AMD Ryzen 5 5600G APU to enable solid gaming performance without a discrete graphics card.', 
    category: 'Gaming PC', 
    price: '799.99'
)

file1 = open("https://kzxt-seed.s3.us-west-1.amazonaws.com/Gaming+PC/foundation-pc.jpg")
computer1.photo.attach(io:file1, filename:"foundation-pc")

#starter PC

computer2 = Product.create(
    name: 'Starter PC', 
    description: 'The Starter PC Series is built by experts and gives you a competitive advantage. Wifi and Bluetooth ready to connect to anything you need. This series is nimble and has plenty of room to grow with you', 
    category: 'Gaming PC', 
    price: '1099.99'
)

file2 = open("https://kzxt-seed.s3.us-west-1.amazonaws.com/Gaming+PC/starter-pc.jpg")
computer2.photo.attach(io:file2, filename:"starter-pc")

#creator PC

computer3 = Product.create(
    name: 'Creator PC', 
    description: 'The NZXT Creator PC is designed to equip users with the tools they need to showcase their talents. Housed in the stylish NZXT H510 Elite chassis, the NZXT Creator PC comes packed with an Intel Core i9 and Nvidia GeForce RTX 30 series, giving users all the horsepower needed to edit photos and videos, stream, and play all the latest video games at optimal settings.', 
    category: 'Gaming PC', 
    price: '3999.99'
)

file3 = open("https://kzxt-seed.s3.us-west-1.amazonaws.com/Gaming+PC/creator-pc.jpg")
computer3.photo.attach(io:file3, filename:"creator-pc")

#streamer PC

computer4 = Product.create(
    name: 'Streamer PC', 
    description: 'Alongside the GEFORCE RTX graphics card, all components in the Streaming PC were hand-selected to run the most popular games beautifully while smoothly operating your stream.', 
    category: 'Gaming PC', 
    price: '1799.99'
)

file4 = open("https://kzxt-seed.s3.us-west-1.amazonaws.com/Gaming+PC/streamer-pc.jpg")
computer4.photo.attach(io:file4, filename:"streamer-pc")

#H1

component1 = Product.create(
    name: 'H1', 
    description: 'The H1 allows you to get the most out of a small package. Pre-routed cables, a 750W PSU, support for the latest GPUs, and PCIe Gen 4 make the build powerful and simple.', 
    category: 'Component', 
    price: '399.99'
)

file5 = open("https://kzxt-seed.s3.us-west-1.amazonaws.com/Components/H1.jpg")
component1.photo.attach(io:file5, filename:"H1")

#Kraken

component2 = Product.create(
    name: 'Kraken X73 RGB', 
    description: 'This All-in-One (AIO) liquid cooler is designed for full and mid-tower cases with support for 360mm radiator mounting and includes three 120mm Aer RGB fans.', 
    category: 'Component', 
    price: '224.99'
)

file6 = open("https://kzxt-seed.s3.us-west-1.amazonaws.com/Components/kraken.jpg")
component2.photo.attach(io:file6, filename:"kraken")

#N7 Z590

component3 = Product.create(
    name: 'N7 Z590', 
    description: 'This motherboard enables a visually seamless backdrop for any build with all the features of the new Intel Z590 chipset.', 
    category: 'Component', 
    price: '279.99'
)

file7 = open("https://kzxt-seed.s3.us-west-1.amazonaws.com/Components/mobo.jpg")
component3.photo.attach(io:file7, filename:"mobo")

#function

peripheral1 = Product.create(
    name: 'Function', 
    description: 'For those who desire a full-size keyboard without a large footprint, the NZXT Function Full Keyboard packs 104 keys into the sleekest form possible.', 
    category: 'Peripheral', 
    price: '149.99'
)

file8 = open("https://kzxt-seed.s3.us-west-1.amazonaws.com/Peripherals/function.jpg")
peripheral1.photo.attach(io:file8, filename:"function")

#lift

peripheral2 = Product.create(
    name: 'Lift', 
    description: 'Lightweight design and low-drag cable enable quick movement, while high-end optical sensor gives you accurate in-game performance.', 
    category: 'Peripheral', 
    price: '59.99'
)

file9 = open("https://kzxt-seed.s3.us-west-1.amazonaws.com/Peripherals/lift.jpg")
peripheral2.photo.attach(io:file9, filename:"lift")

#capsule

peripheral3 = Product.create(
    name: 'Capsule', 
    description: 'Get single-source audio designed specifically for gaming with a simple, plug-and-play setup.', 
    category: 'Peripheral', 
    price: '129.99'
)

file10 = open("https://kzxt-seed.s3.us-west-1.amazonaws.com/Peripherals/capsule.jpg")
peripheral3.photo.attach(io:file10, filename:"capsule")




