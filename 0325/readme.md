
# Element
React에서 Element는 UI의 가장 작은 단위이며, 화면에 표시될 내용을 담고 있는 JavaScript 객체입니다.
Element는 HTML의 요소와 비슷하지만, 실제 DOM 요소가 아닌 가상 DOM(Virtual DOM)에 존재하는 객체입니다.

---

React Element는 가상 DOM에서 존재하고, 실제 DOM에 적용될 때 변환된다.

html에서 Element : <> ~ </>

- React Element 생성하는 방법
- : const element = <div>Hello, world!</div>;

- 함수를 사용하여 Element 생성
- : const element = React.createElement('div', null, 'Hello, world!');

---

# Component
- Element를 생성하고 관리하는 함수 또는 클래스
- Component는 재사용 가능하며 독립적인 기능을 수행하는 UI의 특정부분을 나타냄
ㄴ 클래스형 컴포넌트 (클래스를 이용해 element를 만듦)
ㄴ 함수형 컴포넌트 (함수를 이용해 element를 만듦)

---

## block element

## inline element
