const selectUser = (state: RootState) => ({ ...state.user.user });
const selectUserStatus = (state: RootState) => state.user.status;

export { selectUser, selectUserStatus };
