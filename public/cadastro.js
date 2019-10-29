
const playersList = document.getElementById('playersList');
const cadastroTorneio = document.getElementById('cadastroTorneio');
const totalParticipantes = document.getElementById('totalParticipantes');


function exibeParticipantes() {
    playersList.innerHTML = '';
    fetch('https://us-central1-sinucatorneioapp.cloudfunctions.net/api/player')
        .then(response => {
            return response.json()
        })
        .then(data => {
            let players = data;
            totalParticipantes.innerHTML = '('+players.length+')';
            return players.map(function(players) {
                let li = document.createElement('li');
                li.innerHTML = players.name;
                playersList.appendChild(li);
            })
        })
        .catch(err => {
            console.log(err)
        })
}
exibeParticipantes()


cadastroTorneio.onsubmit = async(e) => {
    e.preventDefault();
    const params = new URLSearchParams([...new FormData(e.target).entries()]);
    fetch('https://us-central1-sinucatorneioapp.cloudfunctions.net/api/player', {method:"POST", body:params})
    .then( () => { playersList.innerHTML = ''; exibeParticipantes()} )
}


