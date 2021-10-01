$(()=>{


$.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/'
}).then(
    (data)=>{
        console.log(data);
})

})