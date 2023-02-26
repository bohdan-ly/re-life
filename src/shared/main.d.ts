type GUID = string;
type SelectItem = { id: string; title: string };
type DateRange = {
  startDate: Date;
  endDate: Date;
};

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

enum ResponseStatus {
  SUCCESS = 'success',
  ERROR = 'error',
  FAIL = 'fail',
}

type NumericRange<
  START extends number,
  END extends number,
  ARR extends unknown[] = [],
  ACC extends number = never,
> = ARR['length'] extends END
  ? ACC | START | END
  : NumericRange<START, END, [...ARR, 1], ARR[START] extends undefined ? ACC : ACC | ARR['length']>;

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof import('../app/model/store').store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof import('../app/model/store').store.dispatch;
