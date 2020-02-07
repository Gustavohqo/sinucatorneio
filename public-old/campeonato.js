


function getPlayerOrder(order,group) {
    return 'player' + order + group;
}
function getBattleOrder(order,group) {
    return 'battle' + order + group;
}


function organizaTorneio() {
    fetch('https://us-central1-sinucatorneioapp.cloudfunctions.net/api/duo')
        .then(response => {
            return response.json()
        })
        .then(data => {
            let players = data;
            return players.map(function(players, index) {
                // document.getElementById(getBattleOrder(1,index+1)).innerHTML = players.playerOne.name;
                // document.getElementById(getBattleOrder(2,index+1)).innerHTML = players.playerTwo.name;
                document.getElementById(getPlayerOrder(1,index+1)).innerHTML = players.playerOne.name;
                document.getElementById(getPlayerOrder(2,index+1)).innerHTML = players.playerTwo.name;
            })
        })
        .catch(err => {
            console.log(err)
        })
}
organizaTorneio();

let battle = document.getElementsByClassName('battle');

function exibeConfrontos() {
    document.getElementById('brackets').style.display = 'none';
    document.getElementById('battles').style.display = 'block'; 
    let time = 0;
    for (let i = 0; i < battle.length; i++) {
        setTimeout(() => {
            battle[i].classList.add('active');
            battle[i - 1].classList.remove('active');
        }, 2000 + time);
        time += 7000;
    }
    setTimeout(() => {
        last = document.getElementsByClassName('battle active')
        last[0].classList.remove('active');
        document.getElementById('brackets').style.display = 'flex';
        document.getElementById('battles').style.display = 'none';
    }, 30000);
}

//exibeConfrontos()