var baseUrl = "http://pokeapi.co";
var api = "api";
var version = "v2";
var resources = {
	 "image":"image",
    "name":"name",
    "hp":"hp",
    "speed":"speed",
    "attack":"attack",
    "defence":"defence",
};
var id = "1";
var curPokemon = "";

var loading = [];
function main()
{
	 populateSelectorFromApi("/api/v2/pokedex/1/");
}



	function makeUrl(objects)
{
    if (typeof objects !== "object")
    {
        var errorMsg = "makeURL only accepts parameters of type 'object', not '" + typeof objects + "'";
        console.log(errorMsg);
        throw errorMsg;
    }
    for (var i = 0; i < objects.length; i++)
    {
        if (typeof objects[i] === "undefined")
        {
            var errorMsg = "One of array elements makeUrl received was undefined.";
            console.log(errorMsg);
            throw errorMsg;
        }
    }
    
    return objects.join("/");
}

function displayPokemon(pkmn)
{
	$("#name").text(pkmn.name);
	$("#hp").text(pkmn.hp);
	$("#attack").text(pkmn.attack);
    $("#defense").text(pkmn.defense);
    $("#speed").text(pkmn.speed);
}
function displayPokemonFromApi(uri)
{
    startLoading("pokemon");
    $.getJSON(baseUrl + uri, function(data){displayPokemon(data);});
}