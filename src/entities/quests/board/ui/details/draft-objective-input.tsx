import React from 'react';

import { RLInput } from 'shared/ui/components';
import { CheckIcon, CloseIcon } from 'shared/ui/icons';

export const DraftObjectiveInput: React.FC<{
  initText: string;
  onSave: (text: string) => void;
}> = ({ initText, onSave }) => {
  const [text, setText] = React.useState(initText);

  const handleTextChange = (str: string) => {
    setText(str);
  };

  return (
    <div className="flex border-b border-gold py-2 relative">
      <label
        htmlFor="search-dropdown"
        className="mb-2 text-sm font-medium text-primaryColor hidden"
      >
        Your objective
      </label>

      <div className="relative w-full">
        <RLInput
          type="text"
          value={text}
          withAutoFocus
          onChange={handleTextChange}
          placeholder="Objective description..."
          className="appearance-none bg-transparent border-none w-full focus:outline-none text-sm"
        />
      </div>
      <CheckIcon className="w-8 h-8 cursor-pointer hover:fill-gold" onClick={() => onSave(text)} />
    </div>
  );
};
