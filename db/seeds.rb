# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
List.destroy_all
Podcast.destroy_all
Friendship.destroy_all

user1 = User.create(first_name: "Rowan", last_name: "Mackenzie", email: "row.row@gmail.com", password: "123123", avatar: "bingbong")

user2 = User.create(first_name: "Liz", last_name: "Fosdick", email: "lf@gmail.com", password: "123123", avatar: "bingbong")

user3 = User.create(first_name: "Kate", last_name: "Booton", email: "kb@gmail.com", password: "123123", avatar: "bingbong")

rowlist = List.create(user_id: 1, name: "favs", description: "beepboop", series: true)

podcast1 = Podcast.create(list_id: 1, title: "Pod Save America", description: "Four former aides to President Obama—Jon Favreau, Jon Lovett, Dan Pfeiffer and Tommy Vietor—are joined by journalists, politicians, activists, and more for a no-b******t conversation about politics. They cut through the noise to break down the week’s news, and help people figure out what matters and how they can help. You can listen to new episodes twice a week on Tuesdays and Thursdays.", pod_uuid: "0dd477b0-976e-4f37-98ac-28367a6f4b88", image: "https://image.simplecastcdn.com/images/9aa1e238-cbed-4305-9808-c9228fc6dd4f/eb7dddd4-ecb0-444c-b379-f75d7dc6c22b/3000x3000/uploads-2f1595947484360-nc4atf9w7ur-dbbaa7ee07a1ee325ec48d2e666ac261-2fpodsave100daysfinal1800.jpg?aid=rss_feed")

Friendship.create(user_id: 1, friend_id: 2)