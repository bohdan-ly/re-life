const selectQuests = (state: RootState) => [...state.quests.quests];
const selectSortedQuests = (state: RootState) => {
  const uncompletedQuests = [...state.quests.quests].filter((q) => !q.completed);
  const completedQuests = [...state.quests.quests].filter((q) => q.completed);

  uncompletedQuests.sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
  );

  return [...uncompletedQuests, ...completedQuests];
};

const selectQuestDetails = (state: RootState) => state.quests.selectedQuest;
const selectQuestDetailsId = (state: RootState) => state.quests.selectedQuest?.id;

export { selectQuests, selectSortedQuests, selectQuestDetails, selectQuestDetailsId };
