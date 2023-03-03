import { Api } from 'shared/model';

import { normalizeCharacter } from './helpers';
import { CharacterType } from './types';

export type CharacterRes = CharacterType & {
  _id: string;
};

export const getCharacter = async (): Promise<CharacterType> => {
  const { data } = await Api.fetch({
    url: `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/character`,
    withCredentials: true,
  });

  const charRes = (data?.data || { _id: null }) as CharacterRes;

  if (!charRes._id) throw new Error('Character not found');

  return normalizeCharacter(charRes);
};

// export const patchCharacter = async (
//   quest: QuestDetails,
// ): Promise<{ newQuest: QuestDetails | null }> => {
//   if (!quest.id) return { newQuest: null };

//   const { data } = await Api.fetch({
//     method: 'PATCH',
//     url: `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/quests/${quest.id}`,
//     data: {
//       quest: quest.title,
//       description: quest.description,
//       impact: quest.impact,
//       difficulty: quest.difficulty,
//       completed: quest.completed,
//       active: quest.active,
//       updatedAt: new Date(),
//       imageCover: '',
//       objectives: quest.objectives.map((o) => ({ _id: o.id })),
//     },
//     withCredentials: true,
//   });

//   const { data: questData } = data as any;

//   if (!questData || !questData.id) throw new Error('Failed to fetch quest details');

//   const newQuest = normalizeQuest(questData);

//   return { newQuest };
// };
