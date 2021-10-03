let userMon = 'charmander'
//function that creates a card of the image of the pokemon as well as the small info panel below it - data is the pokemon object
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

    $('input[value="Gen I"').on('click',(e)=>{
        $('.pokemon').empty()
        //tried making a for loop that pulls a single mon from the API every iteration, but they don't show up in order. Not sure why. Conisdering other options...
        for (i=1;i<=151;i++){
            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon/${i}`
            }).then(
                (data)=>{
                    generateMon(data)
                    // console.log(Object.keys(data));
                    // generateMon(data.results[0].url)
                },
                ()=>{
                    console.log('bad request');
            })
        }
    })
    $('input[value="Gen II"').on('click',(e)=>{
        $('.pokemon').empty()
        //tried making a for loop that pulls a single mon from the API every iteration, but they don't show up in order. Not sure why. Conisdering other options...
        for (i=152;i<=251;i++){
            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon/${i}`
            }).then(
                (data)=>{
                    generateMon(data)
                    // console.log(Object.keys(data));
                    // generateMon(data.results[0].url)
                },
                ()=>{
                    console.log('bad request');
            })
        }
    })
    $('input[value="Gen III"').on('click',(e)=>{
        $('.pokemon').empty()
        //tried making a for loop that pulls a single mon from the API every iteration, but they don't show up in order. Not sure why. Conisdering other options...
        for (i=252;i<=386;i++){
            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon/${i}`
            }).then(
                (data)=>{
                    generateMon(data)
                    // console.log(Object.keys(data));
                    // generateMon(data.results[0].url)
                },
                ()=>{
                    console.log('bad request');
            })
        }
    })
    $('input[value="Gen IV"').on('click',(e)=>{
        $('.pokemon').empty()
        //tried making a for loop that pulls a single mon from the API every iteration, but they don't show up in order. Not sure why. Conisdering other options...
        for (i=387;i<=494;i++){
            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon/${i}`
            }).then(
                (data)=>{
                    generateMon(data)
                    // console.log(Object.keys(data));
                    // generateMon(data.results[0].url)
                },
                ()=>{
                    console.log('bad request');
            })
        }
    })
    $('input[value="Gen V"').on('click',(e)=>{
        $('.pokemon').empty()
        //tried making a for loop that pulls a single mon from the API every iteration, but they don't show up in order. Not sure why. Conisdering other options...
        for (i=495;i<=649;i++){
            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon/${i}`
            }).then(
                (data)=>{
                    generateMon(data)
                    // console.log(Object.keys(data));
                    // generateMon(data.results[0].url)
                },
                ()=>{
                    console.log('bad request');
            })
        }
    })
    $('input[value="Gen VI"').on('click',(e)=>{
        $('.pokemon').empty()
        //tried making a for loop that pulls a single mon from the API every iteration, but they don't show up in order. Not sure why. Conisdering other options...
        for (i=650;i<=721;i++){
            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon/${i}`
            }).then(
                (data)=>{
                    generateMon(data)
                    // console.log(Object.keys(data));
                    // generateMon(data.results[0].url)
                },
                ()=>{
                    console.log('bad request');
            })
        }
    })
    $('input[value="Gen VII"').on('click',(e)=>{
        $('.pokemon').empty()
        //tried making a for loop that pulls a single mon from the API every iteration, but they don't show up in order. Not sure why. Conisdering other options...
        for (i=722;i<=809;i++){
            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon/${i}`
            }).then(
                (data)=>{
                    generateMon(data)
                    // console.log(Object.keys(data));
                    // generateMon(data.results[0].url)
                },
                ()=>{
                    console.log('bad request');
            })
        }
    })
    $('input[value="Gen VIII"').on('click',(e)=>{
        $('.pokemon').empty()
        //tried making a for loop that pulls a single mon from the API every iteration, but they don't show up in order. Not sure why. Conisdering other options...
        for (i=810;i<=898;i++){
            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon/${i}`
            }).then(
                (data)=>{
                    generateMon(data)
                    // console.log(Object.keys(data));
                    // generateMon(data.results[0].url)
                },
                ()=>{
                    console.log('bad request');
            })
        }
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