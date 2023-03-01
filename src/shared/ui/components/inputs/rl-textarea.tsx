import React from 'react';

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
  }, []);

  React.useEffect(() => {
    setDraft(value);
  }, [value]);

  return (
    <textarea
      ref={areaRef}
      rows={4}
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={() => onSave(draft)}
      className="font-mono block p-2.5 w-full min-h-[2.5rem] text-sm bg-transparent placeholder-primaryColorSemiTransparent rounded-lg border border-transparent focus-visible:bg-primaryColorSemiTransparent focus-visible:border-borderFocus focus-visible:ring-borderFocus focus:ring-borderFocus focus:border-borderFocus dark:placeholder-gray-400"
      placeholder="Write your own story here..."
    ></textarea>
  );
};
