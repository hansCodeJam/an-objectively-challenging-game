function getAttackDamage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const fightButton = document.querySelector('#fight')
fightButton.addEventListener('click', attackRound);
let currentMonster = monster;

//function attackRound
function attackRound() {
    const playerDamage = getAttackDamage(player.attackMin, player.attackMax);
    updatePlayerDamageText(playerDamage)
    currentMonster.hitPoints -= playerDamage;
  
    if (currentMonster.hitPoints <= 0) {
      if (currentMonster === monster) {
        updateResult('You slayed the monster! But here comes the boss...')
        currentMonster = boss;
      } else {
        updateResult('You beat all the monsters! You win!')
      }
    } else {
      const monsterDamage = getAttackDamage(currentMonster.attackMin, currentMonster.attackMax);
      updateMonsterDamageText(monsterDamage)
      player.hitPoints -= monsterDamage;
      if (player.hitPoints <= 0) {
        updateResult('You died! Game over...');
        reset();
      } else {
        updateResult(`You and the monster trade blows!`)
      }
    }
  
    updateHealthBars();
  }
  
  //function updateHealthBars
  function updateHealthBars() {
    
  }
  

  //function updateMonsterDamageText if else
  function updateMonsterDamageText(damage) {
    
  }
  
  //function if else
  function updatePlayerDamageText(damage) {
    
  }
      
  function updateResult(result) {
    document.querySelector('#results').innerText = result;
  }
  
  function reset() {
    
  }
  
  function startOver() {
    
  }
























  //   const fightButton = document.querySelector('#fight')
//   fightButton.addEventListener('click', attackRound);
//   let currentMonster = monster;

// function attackRound() {
//     const playerDamage = getAttackDamage(player.attackMin, player.attackMax);
//     updatePlayerDamageText(playerDamage)
//     currentMonster.hitPoints -= playerDamage;
  
//     if (currentMonster.hitPoints <= 0) {
//       if (currentMonster === monster) {
//         updateResult('You slayed the monster! But here comes the boss...')
//         currentMonster = boss;
//       } else {
//         updateResult('You beat all the monsters! You win!')
//       }
//     } else {
//       const monsterDamage = getAttackDamage(currentMonster.attackMin, currentMonster.attackMax);
//       updateMonsterDamageText(monsterDamage)
//       player.hitPoints -= monsterDamage;
//       if (player.hitPoints <= 0) {
//         updateResult('You died! Game over...');
//         reset();
//       } else {
//         updateResult(`You and the monster trade blows!`)
//       }
//     }
  
//     updateHealthBars();
//   }
  
//   function getAttackDamage(min, max) {
//       return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
//   function updateHealthBars() {
//     const playerHealth = document.querySelector('#player-health');
//     const monsterHealth = document.querySelector('#monster-health');
//     const playerPicture = document.querySelector('#player');
  
//     playerPicture.style.transform = `rotate(${player.hitPoints * 9 / 10 - 90}deg)`
  
//     playerHealth.innerText = `${player.hitPoints}`
//     playerHealth.style.width = `${player.hitPoints * 2}px`;
  
//     monsterHealth.innerText = `${currentMonster.hitPoints}`
//     monsterHealth.style.width = `${currentMonster.hitPoints * 2}px`;
//   }
  
//   function updateMonsterDamageText(damage) {
//     let monsterDamageText = '';
//     if (damage < 1) {
//       monsterDamageText += `The monster barely scratched you with ${damage}.`;
//     } else if (damage < 4) {
//       monsterDamageText += `The monster hit you for ${damage}`;
//     } else {
//       monsterDamageText += `The monster clobbered you with ${damage}.`;
//     }
    
//     document.querySelector('#monster-damage-taken').innerText = monsterDamageText;
//   }
  
//   function updatePlayerDamageText(damage) {
//     let playerDamageText = '';
//     if (damage < 1) {
//       playerDamageText += `The monster barely scratched you with ${damage}.`;
//     } else if (damage < 4) {
//       playerDamageText += `The monster hit you for ${damage}`;
//     } else {
//       playerDamageText += `The monster clobbered you with ${damage}.`;
//     }
    
//     document.querySelector('#player-damage-taken').innerText = playerDamageText;
//   }
      
//   function updateResult(result) {
//     document.querySelector('#results').innerText = result;
//   }
  
//   function reset() {
//     fightButton.innerText = 'Start Over';
//     fightButton.onclick = startOver;
  
//     player.hitPoints = 100;
//     monster.hitPoints = 30;
//     boss.hitPoints = 50;
//     currentMonster = monster;
  
//     updateHealthBars();
//   }
  
//   function startOver() {
//     fightButton.onclick = attackRound;
//     fightButton.innerText = 'Fight'
//   }
