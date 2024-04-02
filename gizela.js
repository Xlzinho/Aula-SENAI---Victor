lugarDeBotarONome = document.getElementById("nomeDoSujeito");
lugarDeBotarONome.innerHTML = userData.name;

lugarDeBotarOlugar = document.getElementById("nomeDoLugar");
lugarDeBotarOlugar.innerHTML = userData.location;

lugarDeBotarOaniversario = document.getElementById("dataDoAniversario");
lugarDeBotarOaniversario.innerHTML = userData.birthday;

lugarDeBotarabio = document.getElementById("Bio");
lugarDeBotarabio.innerHTML = userData.bio;

lugarDeBotarOSexo = document.getElementById("Sexo");
lugarDeBotarOSexo.innerHTML = userData.sexo;

lugarDeBotarOSite = document.getElementById("Site");
lugarDeBotarOSite.innerHTML = userData.site;

lugarDeBotarAcor = document.getElementById("Cor");
lugarDeBotarAcor.innerHTML = userData.corfav;

lugarDeBotarFrase = document.getElementById("Frasefav");
lugarDeBotarFrase.innerHTML = userData.frasefav;

lugarDeBotarMusica = document.getElementById("Musica");
lugarDeBotarMusica.innerHTML = userData.Musica;

lugarDeBotarComida = document.getElementById("Comida");
lugarDeBotarComida.innerHTML = userData.Comida;

lugarDeBotarFoto = document.getElementById("fotodeperfil");
lugarDeBotarFoto.src= userData.profilePicture; 

lugarDeBotarPost = document.getElementById("postagens");
lugarDeBotarPost.src= userData.profilePicture; 
   

const url = "https://dog.ceo/api/breeds/image/random";
const quantidade = 10;
for (let i = 0; i < quantidade; i++)
{
    fetch(url)
    .then(response => response.json())
    .then((data)=>{
        console.log(data);
        if(data.status == "success")
        {
            container = document.getElementById("meusCachorros");
            let red = Math.random() * 128;
            let green = Math.random() * 255;
            let blue = Math.random() * 128;
            let style = `border-color: rgb(${red}, ${green}, ${blue})`;
            container.innerHTML += `<img src="${data.message}" style= "${style}" class="dogImg">`;
        }
    });
}