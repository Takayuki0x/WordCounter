import { useState } from "react";

import DefaultLayout from "../layouts/default";

export default function IndexPage() {
  const [charnum, setCharnum] = useState(0);
  const [wordnum, setWordnum] = useState(0);

  const countWords = (text) => {
    const words = text.match(/\b\S+\b/g);

    return words ? words.length : 0;
  };

  const countChars = (text) => {
    return text.length;
  };

  const handleTextChange = (e) => {
    const text = e.target.value;

    setCharnum(countChars(text));
    setWordnum(countWords(text));
  };

  return (
    <DefaultLayout>
      <div className="h-full">
        <h1 className="text-2xl font-bold">{`${wordnum} Words, ${charnum} Characters`}</h1>
        <br />
        <div className="w-full h-full pb-16">
          <textarea
            className="w-full h-full bg-transparent rounded-lg border-1.5 border-gray-500 hover:border-white px-4 py-2"
            placeholder="Enter your text..."
            onChange={handleTextChange}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}
