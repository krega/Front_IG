function asyncForEach(items, cb) {
    return items.reduce((p,c) => {
        return p.then(value => cb(c));
    }, Promise.resolve());
}

var items = [1,2,3,4,5,6,7,8,9,10];

function getPokemon(z) {
    console.log(z);
    return Promise.resolve(z);
}

function cb(z) {
    return getPokemon(z)
        .then(data => {
            console.dir(data);
           
            var pokId = 'pokId' + z;
            var pokName = 'pokName' + z;
            var pokImage = 'pokImage' + z;
            var pokHP = 'HP' + z;
            document.getElementById((pokId).toString()).innerHTML = data.id;
            console.log(pokId);
            document.getElementById((pokName).toString()).innerHTML = data.name;
            document.getElementById((pokImage).toString()).innerHTML = '<img src=http://img.pokemondb.net/artwork/' + data.name + '.jpg>';
            document.getElementById((pokHP).toString()).innerHTML  = JSON.stringify(data.stats[5].base_stat)

        });
        
}

asyncForEach(items, cb)
    .then(result => console.log(result));




function getPokemon(pokeid)
{
	let adress="http://pokeapi.co/api/v2/"+"pokemon/"+pokeid+"/";
	var input=$.get(adress,(data, status)=>{
		console.dir(data);
		if(status=="success"){
			return data;
		}
		else
			console.log(status);

	},"json");
	return input;
}