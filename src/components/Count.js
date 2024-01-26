import { useState } from 'react';
import CLOSED_MOUTH from '../pics/default.jpg';
import OPEN_MOUTH from '../pics/open_mouth.jpg';

function Count() {

  const [score, setScore] = useState(0);                  // 스코어 상태
  const [isOpen, setIsOpen] = useState(false);            // 고양이의 입 상태
  const [imageURL, setImageURL] = useState(CLOSED_MOUTH); // 이미지 주소 상태

  function clickHandle() {
    if (isOpen) {
      // 고양이가 입을 열고있을때
      setImageURL(CLOSED_MOUTH);
      setIsOpen(false);
      setScore(score + 1);
    } else {
      // 고양이가 입을 닫고있을때
      setImageURL(OPEN_MOUTH);
      setIsOpen(true);
    }
  }

  return (
    <div>
      <h2>{score}</h2>
      <img src={imageURL} onClick={clickHandle} />
    </div>
  );
}

export default Count;
