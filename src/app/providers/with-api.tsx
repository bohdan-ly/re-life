import React from 'react';
import LoadingBar from 'react-top-loading-bar';
import useEvent from 'react-use-event-hook';

import { useAppDispatch, useAppSelector, useMediaLayout } from 'shared';
import { userModel } from 'shared/model';

import { characterModel } from 'entities/profile/character';
import { questsModel } from 'entities/quests/board';

// import { getUser } from "~selectors/userSelectors";
// import useEventListener from "~shared/hooks/useEvents";
// import { AppActions } from "./actions/appActions";

export const ConnectAPI: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isMobile = useMediaLayout();
  const [progress, _setProgress] = React.useState(0);
  const [networkRequestThread, setNetworkRequestThread] = React.useState<NodeJS.Timeout | string>(
    '',
  );

  // const user = useAppSelector(userModel.selectUser);
  const user = { id: '13' };

  const setProgress = useEvent((val: number) => {
    if (!user.id) _setProgress(0);
    else _setProgress(val);
  });

  const dispatch = useAppDispatch();

  const fetchNecessaryData = useEvent(async () => {
    console.log('Fetching necessary data...');

    await dispatch(userModel.fetchUser());

    setProgress(50);

    await dispatch(characterModel.fetchCharacter());

    setProgress(75);

    await dispatch(questsModel.fetchQuests({ withQuestDetails: !isMobile }));

    setProgress(100);
  });

  React.useEffect(() => {
    console.log('Init api...');

    if (!user.id) {
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
