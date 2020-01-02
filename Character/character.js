"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types/types");
const items_1 = require("../Items/items");
class Character {
    constructor(name, age, sex, attributes) {
        this.raceAbilities = [];
        this.classAbilities = [];
        this.inventory = [];
        this.health = 100;
        this.damageDone = 0;
        this.minDamageDone = 0;
        this.maxDamageDone = 0;
        this.attributes = {
            STR: 10,
            DEX: 10,
            CON: 10,
            WILL: 10,
            INT: 10,
            MAGIC: 0.
        };
        this.name = name,
            this.age = age,
            this.sex = sex;
        if (attributes) {
            this.attributes = attributes;
        }
    }
    ;
    charDamageMin(damageMin) {
        this.minDamageDone += damageMin;
    }
    charDamageMax(damageMax) {
        this.maxDamageDone += damageMax;
    }
    charDamage() {
        return this.damageDone += (this.attributes.STR - 10 + Math.round(Math.random() * (this.maxDamageDone - this.minDamageDone) + this.minDamageDone) + Math.round(this.attributes.MAGIC / 3));
    }
    attack(victim) {
        victim.takeHit(this.charDamage());
    }
    takeHit(damage) {
        this.health -= damage;
        console.log(this.name + ' has hp ' + this.health + ' left');
        if (this.health <= 0) {
            console.log(this.name + ' dead...');
        }
    }
    additem(Additem) {
        this.inventory.push(Additem);
    }
    calcHealth(HealthBonus) {
        this.health += (this.attributes.CON - 10) * 10 + HealthBonus;
    }
    allpyBonuses(bonusAtt) {
        this.attributes.STR += bonusAtt.STR;
        this.attributes.DEX += bonusAtt.DEX;
        this.attributes.CON += bonusAtt.CON;
        this.attributes.WILL += bonusAtt.WILL;
        this.attributes.INT += bonusAtt.INT;
        this.attributes.MAGIC += bonusAtt.MAGIC;
    }
    ;
    addRaceAbillity(raceAbi) {
        this.raceAbilities.push(raceAbi);
    }
    ;
    addClassAbility(classAbi) {
        this.classAbilities.push(classAbi);
    }
    ;
}
class Human extends Character {
    constructor(name, age, sex, attributes) {
        super(name, age, sex, attributes);
        this.bonusAtrributes = {
            STR: 0,
            DEX: 0,
            CON: 0,
            WILL: 2,
            INT: 0,
            MAGIC: 0,
        };
        this.HealthBonus = 0;
        super.allpyBonuses(this.bonusAtrributes);
        super.addRaceAbillity("Human Trash");
        super.calcHealth(this.HealthBonus);
    }
    ;
}
class HumanMage extends Human {
    constructor(name, age, sex, attributes) {
        super(name, age, sex, attributes);
        this.bonusAtrributes = {
            STR: -1,
            DEX: -1,
            CON: 0,
            WILL: 2,
            INT: 3,
            MAGIC: 10,
        };
        this.HealthBonus = -20;
        super.allpyBonuses(this.bonusAtrributes);
        super.addClassAbility("Restore Mana");
        super.additem(items_1.axe);
        super.calcHealth(this.HealthBonus);
        super.charDamage(items_1.axe.damage.min, items_1.axe.damage.max);
    }
}
class Orc extends Character {
    constructor(name, age, sex, attributes) {
        super(name, age, sex, attributes);
        this.bonusAtrributes = {
            STR: 3,
            DEX: 0,
            CON: 2,
            WILL: -1,
            INT: -2,
            MAGIC: 0,
        };
        this.HealthBonus = 0;
        super.allpyBonuses(this.bonusAtrributes);
        super.addRaceAbillity("Orc Rage");
        super.calcHealth(this.HealthBonus);
    }
    ;
}
class OrcWarrior extends Orc {
    constructor(name, age, sex, attributes) {
        super(name, age, sex, attributes);
        this.bonusAtrributes = {
            STR: 0,
            DEX: 0,
            CON: 2,
            WILL: 0,
            INT: 0,
            MAGIC: 0,
        };
        this.HealthBonus = 20;
        super.allpyBonuses(this.bonusAtrributes);
        super.addClassAbility("ShieldWall");
        super.additem(items_1.sword);
        super.calcHealth(this.HealthBonus);
        super.charDamageMin(items_1.sword.damage.min);
        super.charDamageMax(items_1.sword.damage.max);
    }
}
const NewHuman = new HumanMage('Povylas', 16, types_1.SEX.Male);
const NewOrcWarrior = new OrcWarrior('Antanas', 20, 'Male');
for (let i = 1; i < 5; i++) {
    console.log('Attack #' + i);
    NewHuman.attack(NewOrcWarrior);
    NewOrcWarrior.attack(NewHuman);
}
