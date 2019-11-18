function getAttackDamage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let attackDamage = getAttackDamage()

function currentHitPoints () {
    return 100 - attackDamage
}

currentHit


let currentlyAttackingMonster = boss

document.getElementById("fight").addEventListener('click', getAttackDamage());
