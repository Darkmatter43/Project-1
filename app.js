let userMon = 'charmander'
const generateMon =(data)=>{
    // const $newMon = $()
    const monImg = data.sprites.other['official-artwork'].front_default
    console.log(data.sprites.other['official-artwork'].front_default);

    $('.test').append($('<img>').attr('src',monImg))
}
$(()=>{
    

$.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${userMon.toLowerCase()}`
}).then(
    (data)=>{
        console.log(data);
        generateMon(data)
    },
    ()=>{
        console.log('bad request');
})
})