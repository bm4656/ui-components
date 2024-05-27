import { useState } from 'react';
import cx from './cx';
import data from './data';

const AccordionItem = ({
  id,
  title,
  description,
  current,
  toggle,
}: {
  id: string;
  title: string;
  description: string;
  current: boolean;
  toggle: () => void;
}) => (
  <li className={cx('item', { current })} key={id}>
    <div className={cx('tab')} onClick={toggle}>
      {title}
    </div>
    {current ? <div className={cx('description')}>{description}</div> : null}
  </li>
);

const Accordion1 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);

  // 클로저로 만들어서 상위에서 함수 호출까지 하고 전달해줌
  const toggleItem = (id: string) => () => {
    setCurrentId((prev) => (prev == id ? null : id));
  };

  return (
    <>
      <h3>#1. React</h3>
      <ul className={cx('container')}>
        {data.map((d) => (
          <AccordionItem
            {...d}
            key={d.id}
            current={currentId === d.id}
            toggle={toggleItem(d.id)}
          />
        ))}
      </ul>
    </>
  );
};
export default Accordion1;
