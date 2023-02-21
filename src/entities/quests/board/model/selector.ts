const selectQuests = (state: RootState) => [...state.quests.quests];

const selectQuestDetails = (state: RootState) => state.quests.selectedQuest;
const selectQuestDetailsId = (state: RootState) => state.quests.selectedQuest?.id;

export { selectQuests, selectQuestDetails, selectQuestDetailsId };
