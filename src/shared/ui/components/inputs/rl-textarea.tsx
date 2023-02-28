import React from 'react';

type RLTextarea = {
  value: string;
  onSave: (e: string) => void;
};

export const RLTextarea: React.FC<RLTextarea> = ({ value = '', onSave = (e: string) => {} }) => {
  const [draft, setDraft] = React.useState(value);

  React.useEffect(() => {
    setDraft(value);
  }, [value]);

  return (
    <textarea
      rows={2}
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={() => onSave(draft)}
      className="font-mono block p-2.5 w-full min-h-[2.5rem] text-sm bg-transparent placeholder-primaryColorSemiTransparent rounded-lg border border-transparent focus-visible:bg-primaryColorSemiTransparent focus-visible:border-borderFocus focus-visible:ring-borderFocus focus:ring-borderFocus focus:border-borderFocus dark:placeholder-gray-400"
      placeholder="Write your own story here..."
    ></textarea>
  );
};
