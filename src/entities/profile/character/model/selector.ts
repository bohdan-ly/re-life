const selectCharacter = (state: RootState) =>
  state.character.character ? { ...state.character.character } : null;

export { selectCharacter };
