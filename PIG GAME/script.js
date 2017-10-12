var scores, roundscores, activePlayer, gameplaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gameplaying) {
        
        var dice = Math.floor(Math.random() * 6) + 1;
    
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    
    if (dice !== 1)
        {
          roundscore += dice;
          document.querySelector('#current-' + activePlayer).textContent = roundscore;
        }
    else
        {
           nextPlayer();
        }
    }
    
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    
    if(gameplaying)
        {
        scores[activePlayer] += roundscore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; 
            
     if ( scores[activePlayer] >= 100)
            {
                document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); 
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner'); 
                gameplaying = false;
            }
        else
        {
            nextPlayer(); 
        } 
        
    }
});

function nextPlayer()
{
     activePlayer === 0 ? activePlayer = 1 : activepPlayer = 0;
            roundscore = 0;
            
            document.getElementById('current-0').textContent = 0;
            document.getElementById('current-1').textContent = 0;
            
            document.querySelector('.player-0-panel').classList.toggle('active');
             document.querySelector('.player-1-panel').classList.toggle('active');
            
            document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init()
{
    scores = [0, 0];
    roundscore = 0;
    activePlayer = 0;
    gameplaying = true;
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1' ).textContent = '0';
    document.getElementById('current-0' ).textContent = '0';
    document.getElementById('current-1' ).textContent = '0';

    document.querySelector('#name-0').textContent = 'Player-1';
    document.querySelector('#name-1').textContent = 'Player-2';
    
    document.querySelector('.player-0-panel').classList.remove('winner'); 
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active'); 
    
}