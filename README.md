20240110 react-markdown을 react-remark로 변경.
 - 사유 : react-markdown에서 react.strictMode와 무관계하게 렌더링이 두 번 발생.(useEffect나 다른 hook으로 싱크 불가능)
   해당 페이지에서 markdown의 heading부분을 렌더링하는 시점과 document.querySelectorAll로 가져오는 시점이 다름.
   따라서 페이지에서 사라진 엘리먼트를 받게되는 IntersectionObserver에서 관측(observe)이 불가능한 이슈 발생.

- React-remark의 RemarkSync를 사용하여 동기화하고, RemarkSync에서 마크다운을 리액트 컴포넌트로 변환시 h1, h2태그에 Id를 넣는 방법을 찾지 못하였으므로,
  기존 코드를 Id를 이용하는 방법에서 Element를 이용하는 방법으로 바꾸었다.

- h1, h2 태그에 id를 넣는 방법을 찾음. https://velog.io/@ssoon-m/블로그-목차TOC-만들기-with-contentlayer-rehype

- 상위 컴포넌트는 서버 컴포넌트로 유지하고, 가급적 말단에 위치한 컴포넌트를 클라이언트로 사용할 것.