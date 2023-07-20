window.SpeechRecognition  = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
//const elementoDito = document.getElementById('valor_dito')
const elementoChute = document.getElementById('chute')

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    valor_dito = e.results[0][0].transcript
    exibeChute(valor_dito)
}
function exibeChute(e){
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${e}</span>
    `
}