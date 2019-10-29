


function getPlayerOrder(order,group) {
    return 'player' + order + group;
}
function getBattleOrder(order,group) {
    return 'battle' + order + group;
}


function organizaTorneio(showBattle) {
    fetch('./api.json')
        .then(response => {
            return response.json()
        })
        .then(data => {
            let players = data;
            return players.map(function(players, index) {
                if (showBattle) {
                    document.getElementById(getBattleOrder(1,index+1)).innerHTML = players.playerOne.name;
                    document.getElementById(getBattleOrder(2,index+1)).innerHTML = players.playerTwo.name;
                }
                document.getElementById(getPlayerOrder(1,index+1)).innerHTML = players.playerOne.name;
                document.getElementById(getPlayerOrder(2,index+1)).innerHTML = players.playerTwo.name;
            })
        })
        .catch(err => {
            console.log(err)
        })
}
organizaTorneio(true)