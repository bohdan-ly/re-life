import React from 'react';

import { RLInput } from 'shared/ui/components';

export const DraftObjectiveInput: React.FC<{
  initText: string;
  onSave: (text: string) => void;
}> = ({ initText, onSave }) => {
  const [text, setText] = React.useState(initText);

  const handleTextChange = (str: string) => {
    setText(str);
  };

  return (
    <form>
      <div className="flex border-b border-gold py-2">
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
            onBlur={() => onSave(text)}
            placeholder="Objective description..."
            className="appearance-none bg-transparent border-none w-full focus:outline-none"
          />
        </div>
      </div>
    </form>
  );
};
