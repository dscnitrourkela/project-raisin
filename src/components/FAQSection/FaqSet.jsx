import React from 'react';
import { Answer, MinusIcon, PlusIcon, Question } from './styles';

const FaqSet = ({ openState, setOpenState, question, answer, idNum }) => {
  // const [open, setOpen] = useState(false);
  const handleClick = () => (openState === idNum ? setOpenState(-1) : setOpenState(idNum));
  return (
    <>
      <Question>{question}</Question>
      {openState === idNum ? (
        <MinusIcon onClick={handleClick} />
      ) : (
        <PlusIcon onClick={handleClick} />
      )}
      {openState === idNum ? <Answer>{answer}</Answer> : <></>}
    </>
  );
};

export default FaqSet;
