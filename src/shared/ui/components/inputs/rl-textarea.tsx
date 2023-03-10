import React from 'react';

import { CheckIcon, CloseIcon } from 'shared/ui/icons';

type RLTextarea = {
  value: string;
  withAutoFocus?: boolean;
  onSave: (e: string) => void;
};

export const RLTextarea: React.FC<RLTextarea> = ({
  value = '',
  withAutoFocus = false,
  onSave = (e: string) => {},
}) => {
  const areaRef = React.useRef<HTMLTextAreaElement | null>(null);
  const [draft, setDraft] = React.useState(value);

  React.useEffect(() => {
    if (withAutoFocus && areaRef.current) {
      areaRef.current.focus();
    }
  }, [withAutoFocus]);

  React.useEffect(() => {
    setDraft(value);
  }, [value]);

  return (
    <div className="relative pb-8">
      <textarea
        ref={areaRef}
        rows={4}
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={() => onSave(draft)}
        className="font-mono resize-none block p-5 pr-8 w-full min-h-[6rem] text-base bg-transparent placeholder-primaryColorSemiTransparent rounded-lg border border-transparent focus-visible:bg-primaryColorSemiTransparent focus-visible:border-borderFocus focus-visible:ring-borderFocus focus:ring-borderFocus focus:border-borderFocus dark:placeholder-gray-400"
        placeholder="Write your own story here..."
      />
      <div className="absolute right-0 bottom-0 flex items-center w-full justify-between">
        <CloseIcon className="w-8 h-8 cursor-pointer hover:fill-gold" onClick={() => onSave('')} />
        <CheckIcon
          className="w-8 h-8 cursor-pointer hover:fill-gold"
          onClick={() => onSave(draft)}
        />
      </div>
    </div>
  );
};
