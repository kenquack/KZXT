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
CartItem.destroy_all

demoUser = User.create(email: 'demo@demo.com', password: 'demoPassword')
user = User.create(email: 'test', password: 'password')


#foundation PC

computer1 = Product.create(
    name: 'Foundation PC', 
    description: 'The NZXT Foundation PC has an AMD Ryzen 5 5600G APU to enable solid gaming performance without a discrete graphics card.', 
    category: 'Gaming PC', 
    price: '799.99'
)

# file1 = open("https://kzxt-seed.s3.us-west-1.amazonaws.com/Gaming+PC/foundation-pc.jpg")
# computer1.photo.attach(io:file1, filename:"foundation-pc")

#starter PC

computer2 = Product.create(
    name: 'Starter PC', 
    description: 'The Starter PC Series is built by experts and gives you a competitive advantage. Wifi and Bluetooth ready to connect to anything you need. This series is nimble and has plenty of room to grow with you', 
    category: 'Gaming PC', 
    price: '1099.99'
)

# file2 = open("https://kzxt-seed.s3.us-west-1.amazonaws.com/Gaming+PC/starter-pc.jpg")
# computer2.photo.attach(io:file2, filename:"starter-pc")

#creator PC

computer3 = Product.create(
    name: 'Creator PC', 
    description: 'The NZXT Creator PC is designed to equip users with the tools they need to showcase their talents. Housed in the stylish NZXT H510 Elite chassis, the NZXT Creator PC comes packed with an Intel Core i9 and Nvidia GeForce RTX 30 series, giving users all the horsepower needed to edit photos and videos, stream, and play all the latest video games at optimal settings.', 
    category: 'Gaming PC', 
    price: '3999.99'
)

# file3 = open("https://kzxt-seed.s3.us-west-1.amazonaws.com/Gaming+PC/creator-pc.jpg")
# computer3.photo.attach(io:file3, filename:"creator-pc")

#streamer PC

computer4 = Product.create(
    name: 'Streamer PC', 
    description: 'Alongside the GEFORCE RTX graphics card, all components in the Streaming PC were hand-selected to run the most popular games beautifully while smoothly operating your stream.', 
    category: 'Gaming PC', 
    price: '1799.99'
)

# file4 = open("https://kzxt-seed.s3.us-west-1.amazonaws.com/Gaming+PC/streamer-pc.jpg")
# computer4.photo.attach(io:file4, filename:"streamer-pc")

#krakenz73rgb

component1 = Product.create(
    name: 'Kraken Z73 RGB', 
    description: "This All-in-One (AIO) liquid cooler is designed with the ability to fit comfortably in most cases. Show CPU/GPU temperatures or customize with GIFs with the Kraken Z LCD display.", 
    category: 'Component', 
    price: '304.99'
)

# file5 = open("https://kzxt-seed.s3.us-west-1.amazonaws.com/Components/krakenz73.jpg")
# component1.photo.attach(io:file5, filename:"krakenz73")

#krakenz73norgb

component2 = Product.create(
    name: 'Kraken Z73', 
    description: 'This All-in-One (AIO) liquid cooler delivers the highest cooling potential of any Kraken. Show CPU/GPU temperatures or customize with GIFs with the Kraken Z LCD display.', 
    category: 'Component', 
    price: '284.99'
)

# file6 = open("https://kzxt-seed.s3.us-west-1.amazonaws.com/Components/krakenz73norgb.jpg")
# component2.photo.attach(io:file6, filename:"krakenz73norgb")

#krakenz63

component3 = Product.create(
    name: 'Kraken Z63 RGB', 
    description: 'This All-in-One (AIO) liquid cooler is designed with the ability to fit comfortably in most cases. Show CPU/GPU temperatures or customize with GIFs with the Kraken Z LCD display.', 
    category: 'Component', 
    price: '274.99'
)

# file7 = open("https://kzxt-seed.s3.us-west-1.amazonaws.com/Components/krakenz63.jpg")
# component3.photo.attach(io:file7, filename:"krakenz63")

#krakenz63norgb

component4 = Product.create(
    name: 'Kraken Z63', 
    description: 'his All-in-One (AIO) liquid cooler delivers the highest cooling potential of any Kraken. Show CPU/GPU temperatures or customize with GIFs with the Kraken Z LCD display.', 
    category: 'Component', 
    price: '254.99'
)

# file8 = open("https://kzxt-seed.s3.us-west-1.amazonaws.com/Components/krakenz63norgb.jpg")
# component4.photo.attach(io:file8, filename:"krakenz63norgb")

#capsule

peripheral1 = Product.create(
    name: 'Capsule', 
    description: 'Get single-source audio designed specifically for gaming with a simple, plug-and-play setup.', 
    category: 'Peripheral', 
    price: '129.99'
)

# file9 = open("https://kzxt-seed.s3.us-west-1.amazonaws.com/Peripherals/capsule.jpg")
# peripheral1.photo.attach(io:file9, filename:"capsule")

#boom arm

peripheral2 = Product.create(
    name: 'Boom Arm', 
    description: 'The Boom Arm fits into any setup seamlessly. Smooth moving arms make adjusting simple while hidden cable management neatly organizes USB and XLR cables. Game uninterrupted with hidden springs providing quiet operation.', 
    category: 'Peripheral', 
    price: '99.99'
)

# file10 = open("https://kzxt-seed.s3.us-west-1.amazonaws.com/Peripherals/boomarm.jpg")
# peripheral2.photo.attach(io:file10, filename:"boomarm")
