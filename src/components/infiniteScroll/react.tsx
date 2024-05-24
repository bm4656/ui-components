import { useState } from 'react';

export default function InfiniteScrollR() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      무한 스크롤 react 테스트
      <button onClick={() => setToggle((p) => !p)}>토글</button>
      <p>{toggle ? '켜짐' : '꺼짐'}</p>
    </div>
  );
}
