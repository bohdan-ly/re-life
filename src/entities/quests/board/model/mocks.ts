export const QUESTS_MOCK = [
  {
    id: '1',
    title: 'The First Expedition',
    impact: 4,
    difficulty: 1,
    completed: false,
  },
  {
    id: '2',
    title: 'Promises to keep',
    impact: 2,
    difficulty: 1,
    completed: false,
  },
  {
    id: '3',
    title: 'Pieces of the past',
    impact: 1,
    difficulty: 1,
    completed: false,
  },
  {
    id: '4',
    title: 'Tending of flames',
    impact: 3,
    difficulty: 1,
    completed: false,
  },
];

export const QUESTS_DETAILS_MOCK = [
  {
    id: '1',
    title: 'The First Expedition',
    impact: 4,
    difficulty: 5,
    completed: false,
    objectives: [{ id: '1', title: 'Find a way', isDone: false, isOptional: true }],
    description: `After successfully locating the Ragged Flagon, Brynjolf has given me a new assignment. Three business owners in Riften are proving to be a thorn in his side and I'm supposed to teach them the error of their ways. I should speak to Brynjolf about these townspeople in the event that they prove to be as stubborn as I'm expecting them to be.`,
  },
  {
    id: '2',
    title: 'Promises to keep',
    impact: 2,
    difficulty: 4,
    completed: false,
    objectives: [],
    description: `Brynjolf has promised me more work if I'm able to locate him at a tavern called the Ragged Flagon. Judging from the dangerous nature of its location, it seems as though he's having me perform some type of initiation, but I can't be certain.`,
  },
  {
    id: '3',
    title: 'Pieces of the past',
    impact: 1,
    difficulty: 2,
    completed: false,
    objectives: [
      { id: '1', title: 'Test', isDone: false, isOptional: false },
      { id: '2', title: 'Developing', isDone: true, isOptional: false },
      { id: '3', title: 'Creating Mocks', isDone: true, isOptional: true },
    ],
    description: `I've dealt with the three troublesome business owners in Riften as Brynjolf had specified. Perhaps now that I've proven my worth to Brynjolf, I can discover more about this mysterious organization that he represents.`,
  },
  {
    id: '4',
    title: 'Tending of flames',
    impact: 3,
    difficulty: 1,
    completed: false,
    objectives: [{ id: '1', title: 'Find a solution', isDone: false, isOptional: false }],
    description: `Speak with Tonilia in the Ragged Flagon to receive the Thieves Guild Armor.`,
  },
];
