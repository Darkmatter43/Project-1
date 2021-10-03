let userMon = 'charmander'
//function that creates a card of the image of the pokemon as well as the small info panel below it\
const generateMon =(data)=>{
    // const $newMon = $()
    const monImg = data.sprites.other['official-artwork'].front_default

    const $newCard = ($('<div>')).attr('class','card').append($('<img>').attr('src',monImg))
    
    $('.pokemon').append($newCard)

    const $infoDiv = $('<div>').attr('class','info').appendTo($newCard)

    $('<h1>').text(data.id+': ').appendTo($infoDiv)
    $('<h1>').text(data.name).appendTo($infoDiv)

    
}
$(()=>{
    //event listener set up on load for submit form - user input pokemon listener
    $('form').on('submit',(e)=>{
        e.preventDefault()
        userMon = $('input[type="text"]').val()

        //pass user input through tot he API to pull out the pokemon requested
        $.ajax({
            //pokemon direct link
            url: `https://pokeapi.co/api/v2/pokemon/${userMon.toLowerCase()}`
            //limit set to all available pokemon
            // url: `https://pokeapi.co/api/v2/pokemon/?limit=897`
            //testing with different pokedexes - useless for my application?
            // url: `https://pokeapi.co/api/v2/pokedex/2`
        }).then(
            (data)=>{
                generateMon(data)
                console.log(data);
            },
            ()=>{
                console.log('bad request');
        })
    })

// $.ajax({
    
//     url: `https://pokeapi.co/api/v2/pokemon/${userMon.toLowerCase()}`
//     // url: `https://pokeapi.co/api/v2/pokemon/?limit=897`
//     // url: `https://pokeapi.co/api/v2/pokedex/2`
// }).then(
//     (data)=>{
//         // console.log(data.pokemon_entries[5].pokemon_species.name);
//         // generateMon(data)
//         console.log(data);
//     },
//     ()=>{
//         console.log('bad request');
// })
})