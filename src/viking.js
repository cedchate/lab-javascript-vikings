// Soldier
class Soldier {
    constructor(health, strength){
        this.health=health;
        this.strength=strength;
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health-= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name=name;
    }

    receiveDamage(damage){
        this.health-= damage;
        if(this.health<=0){
            return `${this.name} has died in act of combat`;
        }else {
            return `${this.name} has received ${damage} points of damage`;
        }
    }

    battleCry(){
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health-= damage;
        if(this.health<=0){
            return `A Saxon has died in combat`;
        }else {
            return `A Saxon has received ${damage} points of damage`;

        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy= [];
        this.saxonArmy= [];
    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        let indexS= Math.floor(Math.random()*this.saxonArmy.length);
        let indexV= Math.floor(Math.random()*this.vikingArmy.length);
        let result= this.saxonArmy[indexS].receiveDamage(this.vikingArmy[indexV].strength);
        if(result===`A Saxon has died in combat`){
            this.saxonArmy.splice(indexS, 1);
        }
        return result;
    }

    saxonAttack(){
        let indexS= Math.floor(Math.random()*this.saxonArmy.length);
        let indexV= Math.floor(Math.random()*this.vikingArmy.length);
        let result= this.vikingArmy[indexV].receiveDamage(this.saxonArmy[indexS].strength);
        if(result===`${this.vikingArmy[indexV].name} has died in act of combat`){
            this.vikingArmy.splice(indexV, 1);
        }
        return result;
    }

    showStatus(){
        if(this.saxonArmy.length===0){
            return "Vikings have won the war of the century!";
        }else if(this.vikingArmy.length===0){
            return "Saxons have fought for their lives and survived another day...";
        }else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}


