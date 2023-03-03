import { CharacterRes } from './api';
import { CharacterType } from './types';

export const normalizeCharacter = (char: CharacterRes): CharacterType => {
  const normalizedObjective = {
    id: char._id,
    name: char.name,
    class: char.class,
    photo: char.photo,
    createdAt: char.createdAt,
    ownedBy: char.ownedBy,
    stats: char.stats,
    inventory: char.inventory,
  };

  return normalizedObjective;
};
