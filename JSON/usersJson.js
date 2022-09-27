/* eslint-disable no-undef */
db.users.insert(
    [
      {
        name: "SpongeBob SquarePants",
        userName: "sbSquarePants",
        email: "spongebob@krustykrab.po",
        password:"superSecretpassword123",
        address: {
          street: "124 Conch Street",
          city: "Bikini Bottom",
          ocean: "Pacific Ocean",
        },
        businessName: "The Krusty Krab",
        jobTitle: "Fry cook",
        active: true,
      },
      {
        name: "Squidward Tentacles",
        userName: "swTentacles",
        email: "squidward@krustykrab.po",
        password:"iHateSpongeBob",
        address: {
          street: "122 Conch Street",
          city: "Bikini Bottom",
          ocean: "Pacific Ocean",
        },
        businessName:"The Krusty Krab",
        jobTitle:"Cashier",
        active: true,
      },
      {
        name: "Eugene Krabs",
        userName: "mrKrabs",
        email: "mrKrabs@krustykrab.po",
        password:"iWantMoreMoney!",
        address: {
          street: "2219 Anchor Street",
          city: "Bikini Bottom",
          ocean: "Pacific Ocean",
        },
        businessName:"The Krusty Krab",
        jobTitle:"Owner and Manager",
        active: true,
      },
    ]
)