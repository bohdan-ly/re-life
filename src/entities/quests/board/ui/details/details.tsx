import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import React from 'react';

import { useAppDispatch, useAppSelector } from 'shared';
import { ChapterTitle, GradientButton, RLTextarea } from 'shared/ui/components';
import { CheckIcon, CloseIcon, Hades, MoebiusStar, Rank } from 'shared/ui/icons';

import * as model from '../../model';
import { useQuestDetailsActions, ObjectiveType } from '../../model';

import styles from './details.module.scss';
import { Objectives } from './objectives';
import { QuestRank } from './quest-rank';

export const QuestDetails: React.FC<{ className: string }> = ({ className }) => {
  const { t } = useTranslation('character');
  const dispatch = useAppDispatch();
  const quest = useAppSelector(model.selectQuestDetails);
  const { saveObjectives, saveDescription, saveRank, completeQuest } =
    useQuestDetailsActions(quest);

  const [descriptionActive, setDescriptionActive] = React.useState(false);

  const handleObjectiveDone = (objId: string) => {
    // if (quest) {
    //   quest.objectives[0].isDone = !quest.objectives[0].isDone;
    //   setReRender((count) => count + 1);
    // }
  };

  const handleEditRank = async (r: number) => {
    await saveRank(r);
  };

  const handleEditDescription = async (str: string) => {
    await saveDescription(str);
    setDescriptionActive(false);
  };

  const handleEditObjectives = async (objectives: ObjectiveType[]) => {
    await saveObjectives(objectives);
  };

  const handleCompleteQuest = async () => {
    await completeQuest();
  };

  const handleCloseQuest = () => {
    dispatch(model.selectQuest(null));
  };

  return (
    <article
      className={`flex flex-col pb-6 px-6 mt-16 md:mt-8 md:px-12 gap-6 ${styles.details} ${className}`}
    >
      <div className={styles.triangle} />
      <CheckIcon
        width={36}
        height={36}
        className="absolute top-5 left-5 md:hidden focus:opacity-40 active:opacity-40"
        onClick={handleCompleteQuest}
      />
      <CloseIcon
        width={36}
        height={36}
        className="absolute top-5 right-5 md:hidden focus:opacity-40 active:opacity-40"
        onClick={handleCloseQuest}
      />
      {quest && (
        <>
          <ChapterTitle
            title={quest.title}
            className="bg-[#252525] relative md:sticky top-0"
            icon={<Hades className="h-8 w-8 min-w-[2rem]" />}
          />
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
              className="font-mono whitespace-pre-wrap cursor-text break-words"
            >
              {quest.description}
            </p>
          )}

          <ChapterTitle
            title={t('character:objectives')}
            icon={<MoebiusStar />}
            className="uppercase"
          />
          <Objectives objectives={quest.objectives} onSave={handleEditObjectives} />
          <div className="flex flex-col">
            <div className="flex items-end">
              <span className="text-2xl mr-2 uppercase">{t('character:rewards')}:</span>
              <p className="mb-1">
                50XP, <span className="text-gold ml-1">10 gold</span>
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
      <GradientButton
        title="Complete"
        onClick={handleCompleteQuest}
        className="mt-auto min-h-[2.5rem] relative md:sticky bottom-0"
      />
    </article>
  );
};
