let data = {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "batters":
    {
        "batter":
            [
                { "id": "1001", "type": "Rick" },
                { "id": "1002", "type": "Chocolate" },
                { "id": "1003", "type": "Blueberry" },
                { "id": "1004", "type": "Devil's Food" }
            ]
    },
    "topping":
        [
            { "id": "5001", "type": "None" },
            { "id": "5002", "type": "Glazed" },
            { "id": "5005", "type": "Morty" },
            { "id": "5007", "type": "helloWorld" },
            { "id": "5006", "type": "Chocolate with Sprinkles" },
            { "id": "5003", "type": "Chocolate" },
            { "id": "5004", "type": "Maple" }
        ]
}

console.log(data.name);
console.log(data.ppu);
console.log(data.topping);
console.log(data.batters.batter[3].type);
console.log(data.topping[6].type);
console.log(data.topping[0].id);



const concatene = data.batters.batter[0].type.concat(' ' + "est l'id" + ' ' + data.batters.batter[0].id);
console.log(concatene);

const concatene1 = data.name.concat(' ' + "est l'id" + ' ' + data.topping[6].id);
console.log(concatene1)