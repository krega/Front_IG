
function start(a){
    function asyncForEach(items, cb) {
        return items.reduce((p,c) => {
            return p.then(value => cb(c));
        }, Promise.resolve());
    }


    var items =  [a];
    console.log(a);


    function HamtaPokemon(z) {
        console.log(z);
        return Promise.resolve(z);
    }

    function cb(z) {
       return HamtaPokemon(z)
        .then(data => {
            console.dir(data);

           // var pokId = 'pokId' + z;
         //   var pokName = 'pokName' + z;
           //var pokImage = 'pokImage' + z;
           // document.getElementById((pokId).toString()).innerHTML = data.id;

           var tab = [JSON.stringify(data.stats[0].base_stat)];
           console.log(tab);
           document.getElementById("pokSpeed").innerHTML = JSON.stringify(data.stats[0].base_stat)
           document.getElementById("pokAttack").innerHTML = JSON.stringify(data.stats[4].base_stat)
           document.getElementById("pokDefence").innerHTML = JSON.stringify(data.stats[3].base_stat)
          
       return getPokemon(z)
            .then(data2 => {
            console.dir(data2.chain.evolves_to[0].species.name);
             document.getElementById("pokReference").innerHTML = data2.chain.evolves_to[0].species.name;

       });//return getPokemon(z)
           // .then(data2 => {
           // console.dir(data2.chain.evolves_to[0].species.name);
         //    document.getElementById("pokReference").innerHTML = data2.pokemon_species[0].name
        
             });
    }

    asyncForEach(items, cb)
    .then(result => console.log(result));




    function HamtaPokemon(pokeid)
    {
      let adress="http://pokeapi.co/api/v2/"+"pokemon/"+pokeid+"/";
       let input=$.get(adress,(data, status)=>{
          console.dir(data);
          if(status=="success"){
             return data;
         }
         else
             console.log(status);

     },"json");
       return input;
   }


  
    function getPokemon(pokeid)
    {
       let adress="http://pokeapi.co/api/v2/"+"evolution-chain/"+pokeid+"/";
       let input=$.get(adress,(data, status)=>{
          console.dir(data);
          if(status=="success"){
             return data;
         }
         else
             console.log(status);

     },"json");
       return input;
   }

}