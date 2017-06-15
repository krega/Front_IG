//$(document).ready(function() {
	//$("#knapp").click(function(){
		let pokeid=$("#pokeid").val();
		console.log(pokeid);
		HamtaPokemon(2).then((data)=>{
			console.dir(data);
			$("h1").text(data.name);
			console.log(data.moves[0].move.name);
		var x = 	$("#pokemonbild").attr('src','http://img.pokemondb.net/artwork/'+data.name+'.jpg' )
			$("#spritesfornt").attr('src',data.sprites.front_shiny);
			
			$("#spritesback").attr('src',data.sprites.back_shiny);
			
			document.getElementById('pokId').innerHTML = data.id;
			document.getElementById('pokName').innerHTML = data.name;
			document.getElementById("pokImage").innerHTML= '<img src=http://img.pokemondb.net/artwork/'+data.name+'.jpg>';
			console.log(x);

			$("h4").text(data.id);
			/*let listan = data.moves;
			
			listan.forEach((enskilda)=>{
				$("ol").append("<li>"+enskilda.move.name+"</li>");
			})*/
			
		});

//	})
//});

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
