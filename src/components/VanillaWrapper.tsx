import { useEffect, useRef } from 'react';

// JS 구문 함수를 전달 받아서 함수를 컴포넌트 렌더링 된 다음 한번 실행해주는 목적의 react 컴포넌트
const VanillaWrapper = ({
  title = '',
  subTitle = '',
  initiator,
}: {
  title?: string;
  subTitle?: string;
  initiator: (wrapper: HTMLDivElement) => void;
}) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const isInit = useRef(false);

  useEffect(() => {
    if (!isInit.current && !!wrapper.current) {
      initiator(wrapper.current);
      isInit.current = true;
    }
  }, [initiator]);

  return (
    <>
      {title && (
        <h3>
          {title}. Vanilla {subTitle && <sub>{subTitle}</sub>}
        </h3>
      )}
      <div ref={wrapper} />
    </>
  );
};

export default VanillaWrapper;
