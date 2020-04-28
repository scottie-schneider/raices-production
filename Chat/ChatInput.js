import React, { useState, useEffect } from "react";

const ChatInput = ({ value, handleChangeValue, createMessage }) => {
  const [minRows, setMinRows] = useState(1);
  const [maxRows, setMaxRows] = useState(5);
  const [rows, setRows] = useState(1);

  const updateRows = () => {
    if (value !== "") {
      const textareaLineHeight = 24;
      const previousRows = event.target.rows;
      event.target.rows = minRows; // reset number or rows in text area
      const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
      if (currentRows === previousRows) {
        event.target.rows = currentRows;
      }
      if (currentRows >= maxRows) {
        event.target.rows = maxRows;
        event.target.scrollTop = event.target.scrollHeight;
      }
      setRows((p) => (currentRows < maxRows ? currentRows : maxRows));
    } else {
      setRows((p) => 1);
    }
  };

  useEffect(updateRows, [value]);
  return (
    <div className="pb-6 px-4 flex-none max-w-6xl">
      <div className="flex rounded-lg border-2 border-gray-200 overflow-hidden">
        <textarea
          type="textarea"
          id="about"
          onChange={handleChangeValue}
          value={value}
          rows={rows}
          className="w-full px-4 resize-none appearance-none py-2"
        />
        {/* Send Icon */}
        <span
          onClick={createMessage}
          className="flex flex-col justify-center text-3xl text-gray-400 border-l-2 border-gray p-2"
        >
          <svg
            className="h-5 w-5 fill-current text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M0 0l20 10L0 20V0zm0 8v4l10-2L0 8z" />
          </svg>
        </span>
      </div>
    </div>
  );
};
export default ChatInput;
