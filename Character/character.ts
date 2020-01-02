import { IAttributes, SEX, IItem } from "../types/types";
import { axe, sword } from "../Items/items";


  class Character {
    protected name : string;
    protected age : number;
    protected sex : string;
    protected raceAbilities: string[] = [];
    protected classAbilities:string[] = [];
    protected inventory: IItem[] = [];
    protected health: number = 100;
    protected damageDone: number = 0;
    protected minDamageDone: number = 0;
    protected maxDamageDone: number = 0;
    protected attributes: IAttributes = {
      STR: 10,
      DEX: 10,
      CON: 10,
      WILL: 10,
      INT: 10,
      MAGIC: 0.
    };
 
    constructor (name:string, age:number, sex:string, attributes?: IAttributes,) {
        this.name = name,
        this.age = age,
        this.sex = sex;
        if (attributes) {
          this.attributes = attributes;
        }
    };
git
    charDamageMin(damageMin: number) {
      this.minDamageDone += damageMin
    }

    charDamageMax(damageMax: number) {
      this.maxDamageDone += damageMax

    }
    
    charDamage() {
     return this.damageDone += (this.attributes.STR-10 + Math.round(Math.random()*(this.maxDamageDone - this.minDamageDone) + this.minDamageDone)  + Math.round(this.attributes.MAGIC/3))
    } 

    attack(victim: Character) {
      victim.takeHit(this.charDamage());
  }

    takeHit(damage: number) {
      this.health -= damage;
      console.log(this.name + ' has hp ' + this.health + ' left');
      if (this.health <= 0) {
          console.log(this.name + ' dead...');
      }
  }

    additem(Additem: IItem) {
      this.inventory.push(Additem) 
    }
    calcHealth(HealthBonus: number) {
      this.health += (this.attributes.CON-10)*10 + HealthBonus}
   
    allpyBonuses(bonusAtt: IAttributes) {
      this.attributes.STR += bonusAtt.STR;
      this.attributes.DEX += bonusAtt.DEX;
      this.attributes.CON += bonusAtt.CON;
      this.attributes.WILL += bonusAtt.WILL;
      this.attributes.INT += bonusAtt.INT;
      this.attributes.MAGIC += bonusAtt.MAGIC
    };
  
    addRaceAbillity(raceAbi: string) {
      this.raceAbilities.push(raceAbi);
    };
    
    addClassAbility(classAbi: string) {
        this.classAbilities.push(classAbi)
    };

  }

  class Human extends Character {
    protected bonusAtrributes: IAttributes = {
      STR: 0,
      DEX: 0,
      CON: 0,
      WILL: 2,
      INT: 0,
      MAGIC: 0,
  };
  protected HealthBonus: number = 0;

  constructor(name:string, age:number, sex:string, attributes?: IAttributes) {
    super(name, age, sex, attributes);
    super.allpyBonuses(this.bonusAtrributes);
    super.addRaceAbillity("Human Trash");
    super.calcHealth(this.HealthBonus)
  };

}

  class HumanMage extends Human {
    protected bonusAtrributes: IAttributes = {
      STR: -1,
      DEX: -1,
      CON: 0,
      WILL: 2,
      INT: 3,
      MAGIC: 10,
    }; 
    protected HealthBonus: number = -20;

      constructor(name:string, age:number, sex:string, attributes?: IAttributes) {
      super(name, age, sex, attributes);
      super.allpyBonuses(this.bonusAtrributes);
      super.addClassAbility("Restore Mana");
      super.additem(axe);
      super.calcHealth(this.HealthBonus)
      super.charDamageMin(axe.damage.min);
      super.charDamageMax(axe.damage.max);
    }
  
  }

  class Orc extends Character {
    protected bonusAtrributes: IAttributes = {
      STR: 3,
      DEX: 0,
      CON: 2,
      WILL: -1,
      INT: -2,
      MAGIC: 0,
    }
    protected HealthBonus: number = 0;

    constructor(name:string, age:number, sex:string, attributes?: IAttributes) {
      super(name, age, sex, attributes);
      super.allpyBonuses(this.bonusAtrributes);
      super.addRaceAbillity("Orc Rage");
      super.calcHealth(this.HealthBonus)
    };
  }
  
  class OrcWarrior extends Orc {
    protected bonusAtrributes: IAttributes = {
      STR: 0,
      DEX: 0,
      CON: 2,
      WILL: 0,
      INT: 0,
      MAGIC: 0,
    }
    protected HealthBonus: number = 20;

    constructor(name:string, age:number, sex:string, attributes?: IAttributes) {
      super(name, age, sex, attributes);
      super.allpyBonuses(this.bonusAtrributes);
      super.addClassAbility("ShieldWall");
      super.additem(sword);
      super.calcHealth(this.HealthBonus);
      super.charDamageMin(sword.damage.min);
      super.charDamageMax(sword.damage.max);
    }
  }
  const NewHuman = new HumanMage('Povylas', 16, SEX.Male)
  const NewOrcWarrior = new OrcWarrior('Antanas', 20, 'Male')

  
  for (let i = 1; i < 5; i++) {
    console.log('Attack #' + i);
    NewHuman.attack(NewOrcWarrior);
    NewOrcWarrior.attack(NewHuman);
} 
