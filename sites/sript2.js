
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
           
            var pokId = 'pokId' + z;
            var pokName = 'pokName' + z;
            var pokImage = 'pokImage' + z;
            document.getElementById((pokId).toString()).innerHTML = data.id;
            
            var tab[]=data.stats.base_stat;
            console.log(tab);
          //  document.getElementById((pokName).toString()).innerHTML = data.stats.base_stat;
            document.getElementById((pokImage).toString()).innerHTML = '<img src=http://img.pokemondb.net/artwork/' + data.name + '.jpg>';
       
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
}