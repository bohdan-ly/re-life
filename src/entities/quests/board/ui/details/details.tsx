import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import React from 'react';

import { useAppDispatch, useAppSelector, useMediaLayout } from 'shared';
import { ChapterTitle, BorderedButton, RLTextarea, GradientButton } from 'shared/ui/components';
import { RLDropdown } from 'shared/ui/components';
import {
  CheckIcon,
  CloseIcon,
  Hades,
  MoebiusStar,
  Quill,
  Rank,
  SettingsIcon,
} from 'shared/ui/icons';

import * as model from '../../model';
import { useQuestDetailsActions, ObjectiveType } from '../../model';

import styles from './details.module.scss';
import { Objectives } from './objectives';
import { QuestRank } from './quest-rank';

export const QuestDetails: React.FC<{ className: string }> = ({ className }) => {
  const { t } = useTranslation('character');
  const isMobile = useMediaLayout();
  const dispatch = useAppDispatch();
  const quest = useAppSelector(model.selectQuestDetails);
  const {
    saveTitle,
    saveObjective,
    saveDescription,
    saveRank,
    completeQuest,
    toggleActivateQuest,
    deleteQuest,
  } = useQuestDetailsActions(quest);

  const [titleActive, seTitleActive] = React.useState(false);
  const [descriptionActive, setDescriptionActive] = React.useState(false);

  const handleObjectiveDone = (objId: string) => {
    // if (quest) {
    //   quest.objectives[0].isDone = !quest.objectives[0].isDone;
    //   setReRender((count) => count + 1);
    // }
  };

  const handleEditTitle = async (str: string) => {
    await saveTitle(str);
    seTitleActive(false);
  };

  const handleEditRank = async (r: number) => {
    await saveRank(r);
  };

  const handleEditDescription = async (str: string) => {
    await saveDescription(str);
    setDescriptionActive(false);
  };

  const handleEditObjectives = async (objective: ObjectiveType) => {
    await saveObjective(objective);
  };

  const handleCompleteQuest = async () => {
    await completeQuest();
  };

  const handleActivateQuest = async () => {
    if (quest) {
      await toggleActivateQuest(!quest.active);
    }
  };

  const handleDeleteQuest = async () => {
    await deleteQuest();
  };

  const handleCloseQuest = () => {
    dispatch(model.selectQuest(null));
  };

  const dropdownOptions = [
    {
      title: 'Set time',
      action: () => {},
    },
    {
      title: 'Delete',
      action: () => handleDeleteQuest(),
    },
  ];

  return (
    <article
      className={classNames(
        `flex flex-col pb-24 md:pb-6 px-6 mt-16 md:mt-8 md:px-12 gap-6`,
        styles.details,
        className,
      )}
    >
      <div className={styles.triangle} />
      {/* <CheckIcon
        width={36}
        height={36}
        className="absolute top-5 left-5 md:hidden focus:opacity-40 active:opacity-40"
        onClick={handleCompleteQuest}
      /> */}

      <RLDropdown
        placement="bottom"
        className="flex absolute top-5 left-5 md:hidden"
        triggerElement={<SettingsIcon width={36} height={36} />}
        options={dropdownOptions}
        onSelect={() => {
          handleDeleteQuest().catch((e) => console.error(e));
        }}
      />

      <CloseIcon
        width={36}
        height={36}
        className="absolute top-5 right-5 md:hidden focus:opacity-40 active:opacity-40"
        onClick={handleCloseQuest}
      />
      {quest && (
        <>
          <div className="relative top-0 w-full items-center md:px-12">
            <RLDropdown
              placement="bottom"
              className="absolute top-1.5 left-0 z-10 hidden md:flex"
              triggerElement={<SettingsIcon width={36} height={36} />}
              options={dropdownOptions}
              onSelect={() => {
                handleDeleteQuest().catch((e) => console.error(e));
              }}
            />
            <ChapterTitle
              title={quest.title}
              icon={<Hades className="h-8 w-8 min-w-[2rem]" />}
              editMode={titleActive}
              onSave={handleEditTitle}
              setEditMode={(active) => seTitleActive(active)}
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="m-auto uppercase">{t('character:rank')}</p>
            <QuestRank difficulty={quest.difficulty} onSelect={handleEditRank} />
          </div>

          {descriptionActive ? (
            <RLTextarea
              withAutoFocus
              value={quest.description}
              onSave={(value) => handleEditDescription(value)}
            />
          ) : (
            <p
              onClick={() => setDescriptionActive(true)}
              className={classNames('font-mono whitespace-pre-wrap cursor-text break-words', {
                'min-h-[1rem]': !quest.description,
              })}
            >
              {!quest.description && <Quill className="m-auto" />}
              {quest.description}
            </p>
          )}

          <ChapterTitle
            title={t('character:objectives')}
            icon={<MoebiusStar />}
            className="uppercase"
          />
          <Objectives
            questId={quest.id}
            objectives={quest.objectives}
            onSave={handleEditObjectives}
          />
          <div className="flex flex-col">
            <div className="flex items-end">
              <span className="text-2xl mr-2 uppercase">{t('character:rewards')}:</span>
              <p className="text-xl">
                <span className="text-xp">{quest.rewards.xp}XP</span>,
                <span className="text-gold ml-1">{quest.rewards.gold} gold</span>
              </p>
            </div>
            <div className="flex items-end">
              <span className="text-2xl mr-2 uppercase">{t('character:buffs')}:</span>
              <p className="mb-1">None</p>
            </div>
            <div className="flex items-end">
              <span className="text-2xl mr-2 uppercase">{t('character:debuffs')}:</span>
              <p className="mb-1">None</p>
            </div>
            <div className="w-full p-[1px] bg-borderPrimary m-auto mt-2" />
          </div>
        </>
      )}
      <div className="left-0 bottom-36 fixed px-8 md:px-0 md:bottom-0 md:sticky w-full flex items-center gap-6 mt-2">
        {!quest?.completed && (
          <>
            <BorderedButton
              title={quest?.active ? 'Pause' : 'Activate'}
              onClick={handleActivateQuest}
              className={classNames('mt-auto max-h-[2.5rem] relative w-full', {
                'from-zinc-400': quest?.active,
                'to-gray-300': quest?.active,
              })}
            />
            <BorderedButton
              title="Complete"
              onClick={handleCompleteQuest}
              className="mt-auto max-h-[2.5rem] relative w-full from-sta/70 to-sta/30 group-hover:from-secondary group-hover:to-additional"
            />
          </>
        )}
        {quest?.completed && (
          <BorderedButton
            title="Retry Quest"
            onClick={() => {}}
            className="mt-auto max-h-[2.5rem] relative w-full from-gold/75 to-gold/30 group-hover:from-gold group-hover:to-gold/30"
          />
        )}
      </div>
    </article>
  );
};
