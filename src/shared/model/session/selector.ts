import { User } from './types';

const selectUser = (state: RootState) => ({ ...state.user.user } as User);
const selectUserStatus = (state: RootState) => state.user.status;

export { selectUser, selectUserStatus };
