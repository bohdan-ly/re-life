import React from 'react';
import LoadingBar from 'react-top-loading-bar';
import useEvent from 'react-use-event-hook';

import { useAppDispatch } from 'shared';

import { questsModel } from 'entities/quests/board';

// import { getUser } from "~selectors/userSelectors";
// import useEventListener from "~shared/hooks/useEvents";
// import { AppActions } from "./actions/appActions";

export const ConnectAPI: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, _setProgress] = React.useState(0);
  const [networkRequestThread, setNetworkRequestThread] = React.useState<NodeJS.Timeout | string>(
    '',
  );

  // const user = useSelector((state) => getUser(state));
  const user = { token: '123', isLoggedIn: true };

  const setProgress = useEvent((val: number) => {
    if (!user) _setProgress(0);
    else _setProgress(val);
  });

  const dispatch = useAppDispatch();

  // const { syncKanbanBoardsData } = AppActions(dispatch);

  // useEventListener("user.logout", () => {
  //   window.clearTimeout(networkRequestThread);
  // });

  const fetchNecessaryData = useEvent(async () => {
    console.log('Fetching necessary data...');

    await dispatch(questsModel.fetchQuests());

    setProgress(100);
  });

  React.useEffect(() => {
    console.log('Init api...');

    if (!user || !user.token || !user.isLoggedIn) {
      setProgress(0);
      window.clearTimeout(networkRequestThread);
      return;
    }

    const _networkRequestThread = setTimeout(() => {
      fetchNecessaryData().catch((e) => console.error(e));
    }, 10);
    setNetworkRequestThread(_networkRequestThread);

    return () => {
      window.clearTimeout(networkRequestThread);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <LoadingBar
        progress={progress}
        height={progress === 0 ? 0 : 3}
        color="#FE753F"
        onLoaderFinished={() => {
          setProgress(0);
        }}
      />
      {children}
    </>
  );
};
