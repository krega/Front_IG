
function start(a){
	cb(a);
	return 1;
}

function getPokemon(z) {
	console.log(z);
	return Promise.resolve(z);
}

function cb(z) {
	return getPokemon(z)
	.then(data => {
		console.dir(data);
		var tab = [JSON.stringify(data.stats[0].base_stat)];
		console.log(tab);
		print(data);
		
		
	});
}
function print(data)
{
	document.getElementById("pokSpeed").innerHTML = JSON.stringify(data.stats[0].base_stat)
	document.getElementById("pokAttack").innerHTML = JSON.stringify(data.stats[4].base_stat)
	document.getElementById("pokDefence").innerHTML = JSON.stringify(data.stats[3].base_stat)

	
}
function getPokemon(pokeid)
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




