/* eslint-disable no-undef */
db.recipes.insert(
    [
        {
          itemName: "Krabby Patty",
          ingredients: {
            mainIngredients: ["Buns", "Frozen meatless patty"],
            sauces: ["Ketchup", "Mustard"],
            addOns: ["Cheese", "Pickles", "Lettucce", "Tomatoes", "Onions"],
            secret: "Nothing",
          },
          notes: "The signature item of the Krusty Krab.",
        },
        {
          itemName: "Nasty Patty",
          ingredients: {
            mainIngredients: ["Buns"],
            sauces: ["Toilet water"],
            addOns: ["Seahorse radish", "T'nail clippings", "Gym socks"],
            secret: "Extra nasty",
          },
          notes: "Here's the house special for the fake Health Inspector eating free food.",
        },
        {
          itemName: "Squidward's Patty",
          ingredients: {
            mainIngredients: ["Buns"],
            sauces: ["Toilet water"],
            addOns: ["Nail", "Hair", "Eyeball", "Sock", "wooden plank"],
            secret: "",
          },
          notes: "Patty under Switch-Lives-Just-To-See-What-It's-Like-O-Mogrifier.",
        },
    ]
)