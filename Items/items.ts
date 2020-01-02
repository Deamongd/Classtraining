import { IItem } from "../types/types"

export const axe: IItem = {
    name: 'Axe',
    damage: {
      min: 2,
      max: 6
    },
    weight: 4,
    durability: 100,
}

export const sword: IItem = {
    name: 'Sword',
    damage: {
        min: 3,
        max: 4,
    },
    weight: 3,
    durability: 100,
}