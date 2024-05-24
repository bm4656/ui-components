import VanillaWrapper from '../VanillaWrapper';

const initiator = (wrapper: HTMLDivElement) => {
  let state = false;

  const pElem = document.createElement('p');

  const btnElem = document.createElement('button');
  btnElem.textContent = '토글';
  btnElem.addEventListener('click', () => {
    state = !state;
    pElem.textContent = state ? '켜짐' : '꺼짐';
  });

  const divElem = document.createElement('div');
  divElem.textContent = '테스트 - 바닐라';
  divElem.append(btnElem, pElem);

  wrapper.insertAdjacentElement('beforeend', divElem);
  // 순수 JS로 가능한 방법 여러가지 있지만
  // innerHtml -> 성능면, 보안면에서 좋지 않음
  // insertAdjacentHtml -> string으로 elem도 다 쓸 수 있음,
  // 하지만 그 경우엔 버튼이나 p태그가 wrapper가 만들어진 이후에 접근이 가능함
  // 접근한 다음에 이벤트 리스너를 걸고 p의 켜짐 꺼짐 바꿔줌
  // 따라서 작은 것부터 먼저 그리고 최종적으로 wrapper에 그려라(렌더링)고 하는게 사용성 좋을 듯
};

const InfiniteScrollV = () => <VanillaWrapper initiator={initiator} />;
export default InfiniteScrollV;
