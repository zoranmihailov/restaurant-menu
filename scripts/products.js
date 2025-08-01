const products = {
    "Breakfast 🍳":{
        containerClass: "pojadok-container",
        categoryID: "pojadok",
        items: [
            {
                name: "Continental",
                image:"images/pojadok/continental.jpg",
                sostojki:"Toast, butter, jam, honey",
                cena: "170 mkd",
                vege:true
            },
            {
                name: "Mediterranean",
                image:"images/pojadok/Mediterranean.jpg",
                sostojki:"Eggs, mozzarella, tomato, roasted crostini",
                cena: "230 mkd",
                vege:true
            },
            {
                name: "English Breakfast",
                image:"images/pojadok/English%20breakfast.jpg",
                sostojki:"Eggs, crispy bacon, chicken hot dogs (fried), french fries, spicy black beans",
                cena: "250 mkd",
                vege:false
            },
            {
                name: "Omelette classic",
                image:"images/pojadok/Omelette%20classics.jpg",
                sostojki:"Eggs, ham, cheese, roasted crostini",
                cena: "220 mkd",
                vege:false
            },
            {
                name: "Primavera omelette",
                image:"images/pojadok/Primavera omelette.jpg",
                sostojki:"Eggs, zucchini, peppers, mushrooms, dried tomatoes, olives, chard, roasted crostini",
                cena: "230 mkd",
                vege:true
            },
            {
                name: "Omelette Feta",
                image:"images/pojadok/Omelette Feta.jpg",
                sostojki:"Eggs, feta cheese, sour cream, tomato, olive, toasted crusts",
                cena: "220 mkd",
                vege:true
            },
            {
                name: "Toast classic",
                image:"images/pojadok/Toast classic.jpg",
                sostojki:"Chicken ham, milky cheese, milk spread",
                cena: "200 mkd",
                vege:false
            },
            {
                name: "Mortadella toast",
                image:"images/pojadok/Mortadella toast.jpg",
                sostojki:"Mortadella, mozzarella, milk spread, cheese, tomato",
                cena: "240 mkd",
                vege:false
            },
            {
                name: "Toast with bacon",
                image:"images/pojadok/Toast%20with%20bacon.jpg",
                sostojki:"Bacon, milk cheese, milk spread, pickles",
                cena: "230 mkd",
                vege:false
            },
            {
                name: "French toast",
                image:"images/pojadok/French%20toast.jpg",
                sostojki:"Fried buns, chicken ham, milk cheese, milk spread",
                cena: "220 mkd",
                vege:false
            }
        ]
    },
    "Salads 🥗":{
        containerClass: "salati-container",
        categoryID: "salati",
        items: [
            {
                name: "Chef Salad",
                image: "images/salati/Chef%20Salad.jpg",
                sostojki:"Rocket, lettuce, radish, cucumber, mozzarella, dried tomatoes, boiled chicken, boiled egg, corn, crostini",
                cena: "290 mkd",
                vege:false
            },
            {
                name: "Nest salad",
                image: "images/salati/Nest%20salad.jpg",
                sostojki:"Rocket,lettuce, radish, cucumber, sherry tomato, boiled chicken, corn, seeds, crostini",
                cena: "290 mkd",
                vege:false
            },
            {
                name: "Palermo salad",
                image: "images/salati/Palermo%20salad.jpg",
                sostojki:"Rocket, lettuce, radish, boiled potatoes, chopped dill, tuna, black beans",
                cena: "280 mkd",
                vege:false
            },
            {
                name: "Classic salad",
                image: "images/salati/Classic%20salad.jpg",
                sostojki:"Rocket, lettuce, radish, sherry tomato, cucumber, parmesan, roasted crostini",
                cena: "270 mkd",
                vege:true
            },
            {
                name: "Caprese mozzarella",
                image: "images/salati/Caprese%20mozzarella%20on%20rocket%20base.jpg",
                sostojki:"Tomato, mozzarella, basil, oregano, topped with olive oil",
                cena: "250 mkd",
                vege:true
            },
            {
                name: "Macedonian salad",
                image: "images/salati/Macedonian%20salad.jpg",
                sostojki:"Cucumber, fresh tomato, sweet pepper, onion, parsley",
                cena: "260 mkd",
                vege: true
            },
            {
                name: "Shopska salad",
                image: "images/salati/Shopska%20salad.jpg",
                sostojki:"Cucumber, fresh tomatoes, peppers, grated cheese",
                cena: "260 mkd",
                vege:true
            }
        ]
    },

    "Appetizers 🧀":{
        containerClass: "predjadenje-container",
        categoryID:"predjadenje",
        items: [
            {
                name: "Mixed cheese",
                image: "images/predjadenje/Mixed%20cheese.jpg",
                sostojki:"Sheep cheese, mixed cheese, whipped cheese, white feta cheese, brie, gorgonzola, parmesan",
                cena: "450 mkd",
                vege:true
            },
            {
                name: "Mixed delicatesen",
                image: "images/predjadenje/Mixed%20delicatesen.jpg",
                sostojki:"Pork prosciutto, veal prosciutto, italian mortadella, veal kulen, smoked chicken fillet, pepperoni",
                cena: "450 mkd",
                vege:false
            },
            {
                name: "Bruschettas - spicy",
                image: "images/predjadenje/Bruschettas%20-%20spicy.jpg",
                sostojki:"Toasted breads topped with tomato sauce, mozzarella, basil, oregano",
                cena: "200 mkd",
                vege:true
            },
            {
                name: "Mixed mushrooms (champignon, oyster mushrooms)",
                image: "images/predjadenje/Mixed%20mushrooms%20(boletus,%20shiitake).jpg",
                sostojki:"Prepared in olive oil -  (champignon, oyster mushrooms)",
                cena: "300 mkd",
                vege: true
            },
            {
                name: "Mixed mushrooms (boletus, shiitake)",
                image: "images/predjadenje/Mixed%20mushrooms%20(boletus,%20shiitake).jpg",
                sostojki:"Prepared in butter seasoned with garlic, parsley, salt and pepper -  (boletus, shiitake)",
                cena: "410 mkd",
                vege:true
            },
            {
                name: "Stuffed peppers with sour cream",
                image: "images/predjadenje/Stuffed%20peppers%20with%20sour%20cream.jpg",
                sostojki:"",
                cena: "160 mkd",
                vege:true
            },
            {
                name: "Pinjur",
                image: "images/predjadenje/Pinjur.jpg",
                sostojki:"",
                cena: "150 mkd",
                vege: true
            },
            {
                name: "Ajvar",
                image: "images/predjadenje/Ajvar.jpg",
                sostojki:"",
                cena: "150 mkd",
                vege: true
            },
            {
                name: "Malijano",
                image: "images/predjadenje/Malijano.jpg",
                sostojki:"",
                cena: "150 mkd",
                vege:true
            },
            {
                name: "Basket with pie",
                image: "images/predjadenje/Basket%20with%20pie.jpg",
                sostojki:"",
                cena: "150 mkd",
                vege:true
            },
            {
                name: "Roasted cheese",
                image: "images/predjadenje/Roasted%20cheese.jpg",
                sostojki:"",
                cena: "340 mkd",
                vege:true
            }
        ]
    },

    "Pasta 🍝":{
        containerClass: "testenini-container",
        categoryID:"testenini",
        items: [
            {
                name: "Bolognese",
                image: "images/testenini/Bolognese.jpg",
                sostojki:"Tomato sauce, minced meat",
                cena: "400 mkd",
                vege:false
            },
            {
                name: "Pomodoro misti",
                image: "images/testenini/Pomodoro%20misti.jpg",
                sostojki:"Blue tomato, dried tomato, fresh tomato, basil, sherry tomato, garlic, salt, pepper",
                cena: "360 mkd",
                vege: true
            },
            {
                name: "Forest - Boscaiola",
                image: "images/testenini/Forest%20-%20Boscaiola.jpg",
                sostojki:"Mixed mushrooms, bacon, fresh tomatoes, parsley, salt, pepper",
                cena: "380 mkd",
                vege:false
            },
            {
                name: "Arabiata",
                image: "images/testenini/Arabiata.jpg",
                sostojki:"Garlic, parsley, pepperoni, tomato sauce",
                cena: "350 mkd",
                vege: true
            },
            {
                name: "Quatro Formaggi",
                image: "images/testenini/Quatro%20Formaggi.jpg",
                sostojki:"White sauce, brie, parmesan, gorgonzola, edamer",
                cena: "450 mkd",
                vege:true
            },
            {
                name: "Alio Olio",
                image: "images/testenini/Alio%20Olio.jpg",
                sostojki:"Pepperoncino, garlic, parsley, salt, pepper, olive oil",
                cena: "310 mkd",
                vege: true
            },
            {
                name: "Chicken spinach",
                image: "images/testenini/Chicken%20spinach.jpg",
                sostojki:"White sauce, zucchini, chicken, bacon, chard",
                cena: "300 mkd",
                vege:false
            },
            {
                name: "Truffle pasta",
                image: "images/testenini/Truffle%20pasta.jpg",
                sostojki:"Olive oil, parsley, truffle mixture",
                cena: "450 mkd",
                vege: true
            }
        ]
    },

    "Main Dishes 🍖":{
        containerClass: "glavni-container",
        categoryID:"glavni-jadenja",
        items: [
            {
                name: "Saltinboca",
                image: "images/glavni/Saltinboca.jpg",
                sostojki:"Pork medallions with veal prosciutto and mozzarella in white sauce, garnish mixed vegetables",
                cena: "530 mkd",
                vege:false
            },
            {
                name: "Pork Mediterranean",
                image: "images/glavni/Pork%20Mediterranean.jpg",
                sostojki:"Pork medallions in spicy herb sauce (basil, dill, parsley, oregano, pumpkin seeds, sunflower), mixed garnish",
                cena: "520 mkd",
                vege:false
            },
            {
                name: "Veal medallions with mushrooms",
                image: "images/glavni/Veal%20medallions%20with%20mushrooms.jpg",
                sostojki:"Medallions in mixed mushroom sauce, garnish mixed stew",
                cena: "550 mkd",
                vege:false
            },
            {
                name: "Veal steak",
                image: "images/glavni/Veal%20steak.jpg",
                sostojki:"Schnitzel in sherry tomato sauce, pesto sauce, rocket and parmesan, garnish mixed stew",
                cena: "600 mkd",
                vege:false
            },
            {
                name: "Chicken Asparagus",
                image: "images/glavni/chicken%20asparagus.jpg",
                sostojki:"Asparagus, bacon, white sauce, garnish mixed vegetables",
                cena: "500 mkd",
                vege:false
            },
            {
                name: "American chicken",
                image: "images/glavni/American%20chicken.jpg",
                sostojki:"Chicken in sweet red hot sauce, french fries garnis",
                cena: "520 mkd",
                vege:false
            },
            {
                name: "Salmon",
                image: "images/glavni/Salmon.jpg",
                sostojki:"Baked salmon, garnish mixed stew are topped with olive oil",
                cena: "900 mkd",
                vege:false
            },
            {
                name: "Calf muscle in Parma sauce",
                image: "images/glavni/Calf%20muscle%20in%20Parma%20sauce.jpg",
                sostojki:"Veal muscle, mushrooms, baked potatoes",
                cena: "700 mkd",
                vege:false
            },
            {
                name: "Selsko meso",
                image: "images/glavni/Selsko%20meso.jpg",
                sostojki:"Chicken, pork, minced meat, mushrooms, baked potatoes",
                cena: "630 mkd",
                vege:false
            }
        ]
    },

    "Sandwiches 🥪":{
        containerClass: "sendvichi-container",
        categoryID: "sendvichi",
        items: [
            {
                name: "Club sandwich",
                image: "images/sendvichi/Club%20sandwich.jpg",
                sostojki:"Chicken ham, milk cheese, fresh tomatoes, lettuce, french fries, ketchup, mayonnaise",
                cena: "300 mkd",
                vege:false
            }
        ]
    },

    "Burger 🍔":{
        containerClass: "burger-container",
        categoryID: "burger",
        items: [
            {
                name: "Burger Classic",
                image: "images/burgeri/Burger%20Classic.jpg",
                sostojki:"Baked veal burgers, milk cheese, caramelized onion, fresh tomato, pickles, lettuce, french fries, side dish: ketchup, mayonnaise",
                cena: "370 mkd",
                vege:false
            }
        ]
    },

    "Desserts 🍩":{
        containerClass: "deserti-container",
        categoryID: "deserti",
        items: [
            {
                name: "Chocolate cake",
                image: "images/deserti/Chocolate%20cake.jpg",
                sostojki:"",
                cena: "250 mkd",
                vege:true
            },
            {
                name: "Tiramisu",
                image: "images/deserti/Tiramisu.jpg",
                sostojki:"",
                cena: "250 mkd",
                vege:true
            },
            {
                name: "Cheesecake with seasonal fruits",
                image: "images/deserti/Cheesecake%20with%20seasonal%20fruits.jpg",
                sostojki:"",
                cena: "300 mkd",
                vege:true
            },
            {
                name: "Pancakes with nutella, banana and walnuts",
                image: "images/deserti/Pancakes%20with%20nutella,%20banana%20and%20walnuts.jpg",
                sostojki:"",
                cena: "260 mkd",
                vege:true
            },
            {
                name: "Pancake with honey and nuts",
                image: "images/deserti/Pancake%20with%20honey%20and%20nuts.jpg",
                sostojki:"",
                cena: "220 mkd",
                vege:true
            },
            {
                name: "Pancake with jam",
                image: "images/deserti/Pancake%20with%20jam.jpg",
                sostojki:"",
                cena: "220 mkd",
                vege:true
            },
            {
                name: "Fruit salad",
                image: "images/deserti/Fruit%20salad.jpg",
                sostojki:"",
                cena: "250 mkd",
                vege:true
            }
        ]
    },

    "Drinks 🍷": {
        categoryID: "pijaloci",
        containerClass: "pijaloci-container",
        items: [
            //Кафе
            {
                name: "Espresso",
                image: "images/pijaloci/espresso.jpg",
                sostojki: "",
                cena: "110 mkd",
                vege: true,
                podkategorija: "Coffee"
            },
            {
                name: "Macchiato",
                image: "images/pijaloci/macchiato.jpg",
                sostojki: "",
                cena: "130 mkd",
                vege: true,
                podkategorija: "Coffee"
            },
            {
                name: "Cappuccino",
                image: "images/pijaloci/capuccino.avif",
                sostojki: "",
                cena: "140 mkd",
                vege: true,
                podkategorija: "Coffee"
            },
            {
                name: "Turkish Coffee",
                image: "images/pijaloci/turkish.jpg",
                sostojki: "",
                cena: "110 mkd",
                vege: true,
                podkategorija: "Coffee"
            },
            {
                name: "Fredo Espresso",
                image: "images/pijaloci/fredo-espresso.webp",
                sostojki: "",
                cena: "140 mkd",
                vege: true,
                podkategorija: "Coffee"
            },
            {
                name: "Fredo Cappuccino",
                image: "images/pijaloci/fredo-cappuccino.jpg",
                sostojki: "",
                cena: "160 mkd",
                vege: true,
                podkategorija: "Coffee"
            },
            {
                name: "Nescafe",
                image: "images/pijaloci/nescafe.jpg",
                sostojki: "",
                cena: "150 mkd",
                vege: true,
                podkategorija: "Coffee"
            },
            //Алкохол
            {
                name: "Beer",
                image: "images/pijaloci/beer.jpeg",
                sostojki: "",
                cena: "150 mkd",
                vege: true,
                podkategorija: "Alcoholic"
            },
            {
                name: "White Wine",
                image: "images/pijaloci/white-wine.webp",
                sostojki: "",
                cena: "200 mkd",
                vege: true,
                podkategorija: "Alcoholic"
            },
            {
                name: "Red Wine",
                image: "images/pijaloci/red-wine.webp",
                sostojki: "",
                cena: "200 mkd",
                vege: true,
                podkategorija: "Alcoholic"
            },
            {
                name: "Rakija",
                image: "images/pijaloci/rakija.jpg",
                sostojki: "",
                cena: "110 mkd",
                vege: true,
                podkategorija: "Alcoholic"
            },
            {
                name: "Whiskey",
                image: "images/pijaloci/whiskey.webp",
                sostojki: "",
                cena: "250 mkd",
                vege: true,
                podkategorija: "Alcoholic"
            },
            {
                name: "Vodka",
                image: "images/pijaloci/vodka.webp",
                sostojki: "",
                cena: "240 mkd",
                vege: true,
                podkategorija: "Alcoholic"
            },
            {
                name: "Cognac",
                image: "images/pijaloci/cognac.png",
                sostojki: "",
                cena: "300 mkd",
                vege: true,
                podkategorija: "Alcoholic"
            },
            {
                name: "Gin",
                image: "images/pijaloci/gin.jpg",
                sostojki: "",
                cena: "350 mkd",
                vege: true,
                podkategorija: "Alcoholic"
            },
            {
                name: "Mojito",
                image: "images/pijaloci/mojito.webp",
                sostojki: "",
                cena: "340 mkd",
                vege: true,
                podkategorija: "Alcoholic"
            },
            {
                name: "Pina Colada",
                image: "images/pijaloci/pinacolada.jpg",
                sostojki: "",
                cena: "340 mkd",
                vege: true,
                podkategorija: "Alcoholic"
            },
            {
                name: "Cosmopolitan",
                image: "images/pijaloci/cosmopolitan.PNG",
                sostojki: "",
                cena: "340 mkd",
                vege: true,
                podkategorija: "Alcoholic"
            },
            {
                name: "Aperol Spritz",
                image: "images/pijaloci/aperol-spritz.JPG",
                sostojki: "",
                cena: "320 mkd",
                vege: true,
                podkategorija: "Alcoholic"
            },
            {
                name: "Gin Tonic",
                image: "images/pijaloci/gin-tonic.webp",
                sostojki: "",
                cena: "220 mkd",
                vege: true,
                podkategorija: "Alcoholic"
            },
            {
                name: "Campari Juice",
                image: "images/pijaloci/campari-juice.jpg",
                sostojki: "",
                cena: "230 mkd",
                vege: true,
                podkategorija: "Alcoholic"
            },
            {
                name: "Sex on the Beach",
                image: "images/pijaloci/sex-on-the-beach.webp",
                sostojki: "",
                cena: "210 mkd",
                vege: true,
                podkategorija: "Alcoholic"
            },
            {
                name: "Margarita",
                image: "images/pijaloci/margarita.JPG",
                sostojki: "",
                cena: "300 mkd",
                vege: true,
                podkategorija: "Alcoholic"
            },
            {
                name: "Espresso Martini",
                image: "images/pijaloci/espresso-martini.webp",
                sostojki: "",
                cena: "400 mkd",
                vege: true,
                podkategorija: "Alcoholic"
            },
            {
                name: "Negroni",
                image: "images/pijaloci/negroni.jpg",
                sostojki: "",
                cena: "300 mkd",
                vege: true,
                podkategorija: "Alcoholic"
            },
            //Безалкохолни
            {
                name: "Coca Cola",
                image: "images/pijaloci/coca-cola.webp",
                sostojki: "",
                cena: "150 mkd",
                vege: true,
                podkategorija: "Non-Alcoholic"
            },
            {
                name: "Coca Cola Zero",
                image: "images/pijaloci/coca-cola-zero.webp",
                sostojki: "",
                cena: "150 mkd",
                vege: true,
                podkategorija: "Non-Alcoholic"
            },
            {
                name: "Fanta",
                image: "images/pijaloci/fanta.webp",
                sostojki: "",
                cena: "150 mkd",
                vege: true,
                podkategorija: "Non-Alcoholic"
            },
            {
                name: "Schweppes",
                image: "images/pijaloci/schweppes.webp",
                sostojki: "",
                cena: "150 mkd",
                vege: true,
                podkategorija: "Non-Alcoholic"
            },
            {
                name: "Tonic",
                image: "images/pijaloci/tonic.webp",
                sostojki: "",
                cena: "150 mkd",
                vege: true,
                podkategorija: "Non-Alcoholic"
            },
            {
                name: "Sprite",
                image: "images/pijaloci/sprite.webp",
                sostojki: "",
                cena: "150 mkd",
                vege: true,
                podkategorija: "Non-Alcoholic"
            },
            {
                name: "Ice Tea",
                image: "images/pijaloci/ice-tea.webp",
                sostojki: "",
                cena: "130 mkd",
                vege: true,
                podkategorija: "Non-Alcoholic"
            },
            {
                name: "Fresh Orange Juice",
                image: "images/pijaloci/orange-juice.webp",
                sostojki: "",
                cena: "220 mkd",
                vege: true,
                podkategorija: "Non-Alcoholic"
            },
            {
                name: "Lemonade",
                image: "images/pijaloci/lemonade.webp",
                sostojki: "",
                cena: "150 mkd",
                vege: true,
                podkategorija: "Non-Alcoholic"
            },
            {
                name: "Red Bull",
                image: "images/pijaloci/red-bull.webp",
                sostojki: "",
                cena: "300 mkd",
                vege: true,
                podkategorija: "Non-Alcoholic"
            }
        ]
    }
};



