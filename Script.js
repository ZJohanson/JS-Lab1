let randomDamage = () => {
    let randNum = Math.floor(Math.random() * 11);
    return randNum > 0 ? randNum : 1;
}
let chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 2);
    return randNum == 0 ? opt1 : opt2;
}
let attackPlayer = (health) => {
    return health - randomDamage();
}
let logHealth = (player, health) => {
    console.log(player + ' health :' + health);
}

let logDeath = (winner, loser) => {
    console.log(winner + ' defeated  ' + loser);
}
let isDead = (health) => {
    return health <= 0 ? true : false
}
let fight = (player1, player2, player1Health, player2Health) => {
    do {
        let attacker = chooseOption(player1, player2);
        if (attacker == player1) {
            player2Health = attackPlayer(player2Health)
            logHealth(player2, player2Health)
            if (isDead(player2Health)) {
                logDeath(player1, player2)
                break;
            }
        } else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health)
            if (isDead(player1Health)) {
                logDeath(player2, player1);
                break;
            }
        }
    } while (true)
}

fight('Joe', 'Aaron', 100, 100)