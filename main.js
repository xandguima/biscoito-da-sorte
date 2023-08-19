const main1=document.querySelector(".main1")
const main2=document.querySelector(".main2")
const main2P=document.querySelector(".main2 p")

const btnOpen=document.querySelector("#btnOpen")
const btnBack=document.querySelector("#btnBack")

const phases=["Sorte é estar pronto quando a oportunidade vem.",
"Sorte na vida é sentir a felicidade de viver cada momento.",
"Sorte é reconhecer as boas oportunidades e saber aproveitá-las",
"A sorte me acompanha, tenho corpo fechado à inveja, a intriga não me amarra os pés, sou imune ao mau-olhado",
"Sorte é isto. Merecer e ter",
"Minha sorte é ter o teu abraço como recompensa para toda espera.",
"A perseverança é a mãe da boa sorte.",
" Boa sorte! ⭐",
"Seja merecedor da sorte e ela virá até você!",
"Às vezes não conseguir o que você quer é uma tremenda sorte.",
"Eu quero a sorte de um amor tranquilo."]

let randomNumber=Math.round(Math.random()*10)



function toggleMain(){
  main1.classList.toggle("hide")
  main2.classList.toggle("hide")
}

function handleOpenClick(event){
  toggleMain()
  main2P.innerText=phases[randomNumber]
  randomNumber=Math.round(Math.random()*10)
  console.log(randomNumber)


}
function handleBackClick(){
  toggleMain()

}

btnOpen.addEventListener('click',handleOpenClick)
btnBack.addEventListener('click',handleBackClick)
