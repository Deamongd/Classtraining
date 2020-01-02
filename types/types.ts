export enum SEX {
    Male = 'DUDE',
    Female = 'CHICK',
};

export interface IAttributes {
    STR: number;
    DEX: number;
    CON: number;
    WILL: number;
    INT: number;
    MAGIC?: number;
    /* ? - is optional */
  }

  export interface IItem {
    name: string,
    damage: {
        min:number,
        max:number
    }
    weight: number,
    durability: number,
  } 