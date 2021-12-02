# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "seeding..."

User.create(username: "Xando", password: "megaman101", password_confirmation: "megaman101", bio: "This is an example.", profile_pic: "https://www.sibberhuuske.nl/wp-content/uploads/2016/10/default-avatar.png")

List.create(user_id: 1, title: "Pending Game List", list_type: "pending")

Medium.create(list_id: 1, title: "Bad Game", studio: "Wasda", medium_type: "Game", image: "https://www.flexx.co/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png")
Medium.create(list_id: 1, title: "Average Game", studio: "1337", medium_type: "Game", image: "https://www.flexx.co/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png")
Medium.create(list_id: 1, title: "Fun Game", studio: "Tryhard Studio", medium_type: "Game", image: "https://www.flexx.co/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png")

puts "seeding complete"