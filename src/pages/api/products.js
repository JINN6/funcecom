export default function handler(req, res) {
    const products = [
        {
            id: 1,
            name: "Margherita Pizza",
            price: 400,
            image: "https://cdn.pixabay.com/photo/2024/04/18/10/41/ai-generated-8704060_640.jpg"
        },
        {
            id: 2,
            name: "Cheese Lovers Pizza",
            price: 450,
            image: "https://t4.ftcdn.net/jpg/06/92/98/33/360_F_692983380_ymrKHnlEebU7fk3onOlAtYw9nkigotLR.jpg"
        },
        {
            id: 3,
            name: "Pepperoni Pizza",
            price: 500,
            image: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU="
        },
        {
            id: 4,
            name: "Supreme Pizza",
            price: 550,
            image: "https://media.istockphoto.com/id/153784617/photo/supreme-pizza-slice-lift.jpg?s=612x612&w=0&k=20&c=Et5uDUJYv3sqDitb1jnUbnGrxhn015foBX_BS-1NFxs="
        },
        {
            id: 5,
            name: "Classic Veggie Pizza",
            price: 400,
            image: "https://media-cdn.tripadvisor.com/media/photo-s/0a/c0/7c/98/best-pizza-in-lahore.jpg"
        },
        {
            id: 6,
            name: "Meat Lovers Pizza",
            price: 600,
            image: "https://plus.unsplash.com/premium_photo-1661762555601-47d088a26b50?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8fDA%3D"
        },
        {
            id: 7,
            name: "BBQ Chicken Pizza",
            price: 550,
            image: "https://www.allrecipes.com/thmb/4t7D0E5SHXEv-CaX1sM5DT0KbCc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ar-tavern-the-real-chicago-pizza-DDMFS-4x3-178-d3f97ec78a0e4ff98902ddc0c669a599.jpg"
        },
        {
            id: 8,
            name: "Tavern Style Pizza",
            price: 500,
            image: "https://www.larrealasvegas.com/wp-content/uploads/2024/08/Tavern-Style-Sausage-and-Giardiniera-Pizza-FT-RECIPE0623-72ff6a590db4472bb9c01b4c928acb9f.jpg"
        },
        {
            id: 9,
            name: "Spicy Jalapeno Pizza",
            price: 480,
            image: "https://restaurantclicks.com/wp-content/uploads/2021/11/tavern-style-pizza.jpg"
        },
        {
            id: 10,
            name: "Four Cheese Pizza",
            price: 600,
            image: "https://media.istockphoto.com/id/521403691/photo/hot-homemade-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=PaISuuHcJWTEVoDKNnxaHy7L2BTUkyYZ06hYgzXmTbo="
        },
        {
            id: 11,
            name: "Classic Cheeseburger",
            price: 350,
            image: "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg"
        },
        {
            id: 12,
            name: "Stovetop Burger",
            price: 380,
            image: "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg"
        },
        {
            id: 13,
            name: "Smashburger",
            price: 400,
            image: "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg"
        },
        {
            id: 14,
            name: "Insanity Burger",
            price: 450,
            image: "https://www.seriouseats.com/thmb/e16lLOoVEix_JZTv7iNyAuWkPn8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-f7d9042bdc2a468fbbd50b10d467dafd.jpg"
        },
        {
            id: 15,
            name: "MSG Smashburger",
            price: 420,
            image: "https://www.foodandwine.com/thmb/XE8ubzwObCIgMw7qJ9CsqUZocNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg"
        },
        {
            id: 16,
            name: "Original Smash Burger",
            price: 400,
            image: "https://131292260.cdn6.editmysite.com/uploads/1/3/1/2/131292260/s884536111700141163_p795_i1_w5734.jpeg?width=2560"
        },
        {
            id: 17,
            name: "Jalapeno Smashburger",
            price: 440,
            image: "https://www.foodandwine.com/thmb/AewT8EvoPa-jAxAM2nl6pNgp2RA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Jalapeno-Onion-Smash-Burgers-FT-MAG-RECIPE-0624-d2d1d3d3853c4828a7244b2987ea9af3.jpg"
        },
        {
            id: 18,
            name: "Veggie Smash Burger",
            price: 380,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OC8zB1cS8W58061b5Ly6GAs8WR2PfzFfRg&s"
        },
        {
            id: 19,
            name: "Ultimate Veggie Burger",
            price: 420,
            image: "https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg"
        },
        {
            id: 20,
            name: "Deluxe Cheeseburger",
            price: 500,
            image: "https://www.southernliving.com/thmb/H04pCVJ5bLAnwPs2hFCmpNs5Uec=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ultimate-southern-burger_batch64_beauty01-86-b9c26e256dd34e39b6c0cfb0c02a9fef.jpg"
        }
    ];
    res.status(200).json(products);
}
