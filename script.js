async function getPokemon() {
    const randomId = Math.floor(Math.random() * 1025) + 1;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const data = await res.json();
    console.log(data);
    const nombre = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    document.getElementById('nombre').textContent = "¡Es un " + nombre + "!";
    document.getElementById('nombre').style.visibility = "hidden";
    document.getElementById('imagen').src = data.sprites.front_default;
    document.getElementById('imagen').style.filter = "brightness(0)";
    function revelar() {
        document.getElementById('nombre').style.visibility= "visible"
        document.getElementById("imagen").style.filter = "none"
    }
    
document.getElementById('revelar').addEventListener('click', revelar);

}
document.getElementById('pokemon').addEventListener('click', getPokemon);
getPokemon();
