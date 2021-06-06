// my varibles for the DOM
let PlayerID = 0;
let num;
let scoore = 0;
let HoldScoore = [0, 0];
let RoundsWon = [0, 0];
let StartBtn = document.querySelector('.btn-Start');
let HoldBtn = document.querySelector('.btn-Hold');
let PlayerScoore;
let PlayerHoldScoore;
let PlayerTableGrid;
let PlayerRoundWon;
let Rounds = 10;
let Round = 1;



StartBtn.addEventListener('click', StartGame);
function StartGame() {
    let RoundNum = document.querySelector('.round-number');
    RoundNum.textContent = `Rounds Number ${Rounds}`;
    num = Math.floor(Math.random() * 6) + 1;
    let dice = document.querySelector('img');
    dice.src = `./img/dice-${num}.png`;
    scoore += num;
    PlayerScoore = document.querySelector(`.player-${PlayerID}-scoore`);
    /////////

    if (num !== 1) {
        PlayerScoore.textContent = scoore;
        HoldBtn.addEventListener('click', HScoore);
        for (let i = 0; i < HoldScoore.length; i++) {
            if (HoldScoore[i] >= 20) {
                Rounds--;
                PlayerRoundWon = document.querySelector(`.player-${i}-Won-round`);
                PlayerTableGrid = document.querySelector(`.player-${i}-grid`);
                PlayerTableGrid.innerHTML += `<li class="won">Player ${i} you won the Round ${Round} With the Scoore ${HoldScoore[i]}</li>`;
                RoundsWon[i] = PlayerTableGrid.childElementCount - 1;
                PlayerRoundWon.textContent = RoundsWon[i];
                Round++;
                HoldScoore = [0, 0]
            }
            if (Rounds < 1) {
                StartBtn.removeEventListener('click', StartGame);
                HoldBtn.removeEventListener('click', HScoore);
                alert('Game Over')
            }
        }
    }
    else {
        changePlayer();
    }
}

function HScoore() {
    PlayerHoldScoore = document.querySelector(`.player-${PlayerID}-holding-scoore`);
    HoldScoore[PlayerID] += scoore;
    PlayerHoldScoore.textContent = HoldScoore[PlayerID];
    changePlayer()
}




function changePlayer() {
    scoore = 0;
    PlayerScoore.textContent = 0;
    PlayerID === 0 ? PlayerID = 1 : PlayerID = 0;
}