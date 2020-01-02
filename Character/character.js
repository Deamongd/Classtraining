"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var types_1 = require("../types/types");
var items_1 = require("../Items/items");
var Character = /** @class */ (function () {
    function Character(name, age, sex, attributes) {
        this.raceAbilities = [];
        this.classAbilities = [];
        this.inventory = [];
        this.Health = 100;
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
    Character.prototype.additem = function (Additem) {
        this.inventory.push(Additem);
    };
    Character.prototype.calcHealth = function (HealthBonus) {
        this.Health += (this.attributes.CON - 10) * 10 + HealthBonus;
    };
    Character.prototype.allpyBonuses = function (bonusAtt) {
        this.attributes.STR += bonusAtt.STR;
        this.attributes.DEX += bonusAtt.DEX;
        this.attributes.CON += bonusAtt.CON;
        this.attributes.WILL += bonusAtt.WILL;
        this.attributes.INT += bonusAtt.INT;
        this.attributes.MAGIC += bonusAtt.MAGIC;
    };
    ;
    Character.prototype.addRaceAbillity = function (raceAbi) {
        this.raceAbilities.push(raceAbi);
    };
    ;
    Character.prototype.addClassAbility = function (classAbi) {
        this.classAbilities.push(classAbi);
    };
    ;
    return Character;
}());
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human(name, age, sex, attributes) {
        var _this = _super.call(this, name, age, sex, attributes) || this;
        _this.bonusAtrributes = {
            STR: 0,
            DEX: 0,
            CON: 0,
            WILL: 2,
            INT: 0,
            MAGIC: 0
        };
        _this.HealthBonus = 0;
        _super.prototype.allpyBonuses.call(_this, _this.bonusAtrributes);
        _super.prototype.addRaceAbillity.call(_this, "Human Trash");
        _super.prototype.calcHealth.call(_this, _this.HealthBonus);
        return _this;
    }
    ;
    return Human;
}(Character));
var HumanMage = /** @class */ (function (_super) {
    __extends(HumanMage, _super);
    function HumanMage(name, age, sex, attributes) {
        var _this = _super.call(this, name, age, sex, attributes) || this;
        _this.bonusAtrributes = {
            STR: -1,
            DEX: -1,
            CON: 0,
            WILL: 2,
            INT: 3,
            MAGIC: 10
        };
        _this.HealthBonus = -20;
        _super.prototype.allpyBonuses.call(_this, _this.bonusAtrributes);
        _super.prototype.addClassAbility.call(_this, "Restore Mana");
        _super.prototype.additem.call(_this, items_1.axe);
        _super.prototype.calcHealth.call(_this, _this.HealthBonus);
        return _this;
    }
    return HumanMage;
}(Human));
var Orc = /** @class */ (function (_super) {
    __extends(Orc, _super);
    function Orc(name, age, sex, attributes) {
        var _this = _super.call(this, name, age, sex, attributes) || this;
        _this.bonusAtrributes = {
            STR: 3,
            DEX: 0,
            CON: 2,
            WILL: -1,
            INT: -2,
            MAGIC: 0
        };
        _this.HealthBonus = 0;
        _super.prototype.allpyBonuses.call(_this, _this.bonusAtrributes);
        _super.prototype.addRaceAbillity.call(_this, "Orc Rage");
        _super.prototype.calcHealth.call(_this, _this.HealthBonus);
        return _this;
    }
    ;
    return Orc;
}(Character));
var OrcWarrior = /** @class */ (function (_super) {
    __extends(OrcWarrior, _super);
    function OrcWarrior(name, age, sex, attributes) {
        var _this = _super.call(this, name, age, sex, attributes) || this;
        _this.bonusAtrributes = {
            STR: 0,
            DEX: 0,
            CON: 2,
            WILL: 0,
            INT: 0,
            MAGIC: 0
        };
        _this.HealthBonus = 20;
        _super.prototype.allpyBonuses.call(_this, _this.bonusAtrributes);
        _super.prototype.addClassAbility.call(_this, "ShieldWall");
        _super.prototype.additem.call(_this, items_1.axe);
        _super.prototype.calcHealth.call(_this, _this.HealthBonus);
        return _this;
    }
    return OrcWarrior;
}(Orc));
var NewHuman = new HumanMage('Povylas', 16, types_1.SEX.Male);
var NewOrcWarrior = new OrcWarrior('Antanas', 20, 'Male');
console.log(NewHuman);
console.log(NewOrcWarrior);
