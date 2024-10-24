import { useState } from 'react';

function ReadMore({ text, charLimit = 120 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const renderText = () => {
    if (text.length <= charLimit) {
      return text;
    }

    if (isExpanded) {
      return (
        <>
          {text}...
          <spa onClick={toggleReadMore} className='text-[#23757e] cursor-pointer'>
            Show Less
          </spa>
        </>
      );
    } else {
      return (
        <>
          {text.slice(0, charLimit)}...
          <span onClick={toggleReadMore} className='text-[#23757e] cursor-pointer'>
            Read More
          </span>
        </>
      );
    }
  };

  return <>{renderText()}</>;
}

export default ReadMore;
