const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_PLAYER_VALUE = 20;
const NORMAL_ATTACK = 'ATTACK';
const STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const enteredValue = prompt('Enter max life value for you and the monster', '100');

let chosenMaxLife = parseInt(enteredValue);
const battleLog = [];

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

// eslint-disable-next-line prettier/prettier
function writeToLog(event, value, monsterHealth, playerHealth) {
  const logEntry = {
    event: event,
    value: value,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth
  };
  if (event === LOG_EVENT_PLAYER_ATTACK || event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    logEntry.target = 'MONSTER';
  } else if (event === LOG_EVENT_MONSTER_ATTACK || event === LOG_EVENT_PLAYER_HEAL) {
    logEntry.target = 'PLAYER';
  } else {
    logEntry.target = LOG_EVENT_GAME_OVER;
  }
  battleLog.push(logEntry);
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth);

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('You would be dead, but the bonus life saved you.');
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You Win!');
    writeToLog(LOG_EVENT_GAME_OVER, 'PLAYER_WON', currentMonsterHealth, currentPlayerHealth);
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You Lose!');
    writeToLog(LOG_EVENT_GAME_OVER, 'PLAYER_LOST', currentMonsterHealth, currentPlayerHealth);
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('Draw!');
    writeToLog(LOG_EVENT_GAME_OVER, 'DRAW', currentMonsterHealth, currentPlayerHealth);
  }
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function attackMonster(attackType) {
  const maxDamage = attackType === NORMAL_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  const logEvent = attackType === NORMAL_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;

  // if (attackType === NORMAL_ATTACK) {
  //   maxDamage = ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_ATTACK;
  // } else if (attackType === STRONG_ATTACK) {
  //   maxDamage = STRONG_ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  // }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
  endRound();
}

function attackMonsterHandler() {
  attackMonster(NORMAL_ATTACK);
}

function strongAttackHandler() {
  attackMonster(STRONG_ATTACK);
}

function healPlayer() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_PLAYER_VALUE) {
    alert("can't heal above 100%");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_PLAYER_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  writeToLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth);
  endRound();
}

function printLogHandler() {
  // for loop:
  // for (let i = 0; i < battleLog.length; i++)
  // {
  //   console.log(battleLog[i]);
  // }
  // for-of loop:
  // for (const logEntry of battleLog)
  // {
  //   console.log(logEntry);
  // }
  // for-in loop:
  for (const logEntry of battleLog)
  {
    console.log(`#${i}`);
    for (const key in logEntry)
    {
      console.log(`${key} => ${logEntry[key]}'); // property name
    }
    i++;
  }
  // while loop:
  while (j < battleLog.length){
    console.log(battleLog[j]);
    j++
  }

}

attackBtn.addEventListener('click', attackMonsterHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayer);
logBtn.addEventListener('click', printLogHandler);
