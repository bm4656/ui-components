import cx from './cx';
import data from './data';
import VanillaWrapper from '../VanillaWrapper';

const itemBuilder = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) => {
  const $li = document.createElement('li');
  $li.classList.add(cx('item'), cx('item3'));
  $li.setAttribute('data-id', id);

  const $tab = document.createElement('div');
  $tab.classList.add(cx('tab'));
  $tab.textContent = title;

  const $description = document.createElement('div');
  $description.classList.add(cx('description'));
  $description.textContent = description;

  $li.append($tab, $description);
  return $li;
};

const initiator = (wrapper: HTMLDivElement) => {
  let currentId: string | null = null;

  // $:제이쿼리에서 쓰던 방식 -> html DOM 표시하는 방법 ulElem써도 상관 없음
  const $ul = document.createElement('ul');
  $ul.classList.add(cx('container'));

  const handleClickTab = (e: Event) => {
    const $el = e.target as HTMLElement;
    if (!$el.classList.contains(cx('tab'))) return;

    const targetId = $el.parentElement!.dataset.id;
    if (!targetId) return;

    currentId = targetId === currentId ? null : targetId;

    $items.forEach(($item) => {
      // classList.toggle(클래스, boolean?)
      // 옵션X: 있으면 제거 없으면 추가헤줘
      // true면 무조건 추가 false면 무조건 제거
      $item.classList.toggle(cx('current'), currentId === $item.dataset.id);
    });
  };
  $ul.addEventListener('click', handleClickTab);

  const $items = data.map(itemBuilder);
  $ul.append(...$items);

  wrapper.append($ul);
  ($items[0].children[0] as HTMLElement).click();
};

const Accordion4V = () => <VanillaWrapper title='#4' initiator={initiator} />;
export default Accordion4V;
