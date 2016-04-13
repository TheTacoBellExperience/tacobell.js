/* tacobell.js - Generate Taco Bell items using javascript */

var TacoBell = (function() {
    var counts = [
        'Double',
        'Triple',
        'Quadruple',
    ]

    var adjectives = [
        'Beefy',
        'Cheesy',
        'Spicy',
        'Fiery',
        'Crunchy',
        'Crispy',
        'Loaded',
        'Grilled',
        'Smothered',
        'Stuft',
        'Cantina',
    ]

    var fillers = [
        'Potato',
        'Nacho Cheese',
        'Bean',
        'Black Bean',
        'Rice',
        'Ground Beef',
        'Shredded Chicken',
        'Chicken',
        'Steak',
        'Fajitas',
        'Fritos®',
        'Doritos® Locos',
        'Fiery Doritos® Locos',
        'Cool Ranch® Doritos® Locos',
        'Nacho Cheese Doritos® Locos',
    ]

    var meal_modifiers = [
        'Fiesta',
        'Fresco',
        'Fresco Grilled',
        'Lava',
    ]

    var meals = [
        'Taco',
        'Soft Taco',
        'Double Decker® Taco',
        'Taco Salad',
        'Burrito',
        'Gordita',
        'Chalupa',
        'Crunchwrap',
        'Quesadilla',
        'Griller',
        'Mexican Pizza',
        'Quesarito',
        'Crunchwrap Slider',
        'Tostada',
        'Meximelt®',
        'XXL Grilled Stuft Burrito',
        'Smothered Burrito',
        'Combo Burrito',
        '5-Layer Burrito',
        '7-Layer Burrito',
        'Nachos',
        'Nachos Bellgrande®',
        'Doritos® Locos Taco',
        'Doritos® Locos Gordita',
        'Doritos® Locos Chalupa',
        'Doritos® Locos Nachos',
        'Waffle Taco',
        'Enchirito',
        'Roll-Up',
        'Power Bowl',
    ]

    var modifiers = [
        'Crunch',
        'Supreme®',
        'Party Pack',
    ]

    function get_next_phrase(phrases, randomness, ignore) {
        if (Math.random() < randomness) {
            for (var n in phrases) {
                var pick = ~~(Math.random() * phrases.length);
                var add = phrases[pick];
                if (ignore == undefined) {
                    return add;
                }
                if (ignore.indexOf(add) == -1) {
                    return add;
                }
            }
        }
        return undefined;
    }

    function generate_taco_bell() {
        food = []
        food.push(get_next_phrase(counts, .1))
        food.push(get_next_phrase(adjectives, .85, food))
        food.push(get_next_phrase(fillers, .75, food))
        food.push(get_next_phrase(meal_modifiers, .1, food))
        food.push(get_next_phrase(meals, 1.0, food))
        food.push(get_next_phrase(modifiers, .25, food))
        return food.filter(function(item) { return item != undefined; }).join(' ');
    }
    return {
        'generate': generate_taco_bell,
    };
})();
