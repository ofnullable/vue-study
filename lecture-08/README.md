# Lecture-08

* event bus
  * event를 중앙에서 통제한다.
  * `EventBus.js`에서 빈 Vue 객체를 생성 후, 각 component의 event를 빈 Vue 객체에 $emit한다.
  * 원하는 component에 event handler를 작성하고, Vue 객체에서 발생한 이벤트에 대한 처리를 하는 방식.
  * 한곳에서 event를 관리하기 때문에 편리하다.
  * 하지만 event를 관리하는 component의 코드는 복잡하고 보기 어려워진다.
  * event만 처리하는 컴포넌트를 만들면 괜찮을수도... 있나?