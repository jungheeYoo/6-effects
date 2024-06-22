// // 이 코드들은 state를 변경할 때마다 모든 코드들은 다시 실행됨
// // 하지만 딱 한번만 실행하고 싶을 때가 있다.
// // 그럴 때 useEffect 사용

// import { useEffect, useState } from 'react';

// function App() {
// // create react app을 사용하기 때문에 React.useState()에서 useState만 써도 됨
//   const [counter, setValue] = useState(0);
//   const onClick = () => setValue((prev) => prev + 1);
//   console.log('call an api');
//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button onClick={onClick}>Click me</button>
//     </div>
//   );
// }
/////////////////////////////////////////////////////////////////
// // ✨ useEffect는 두 개의 argument를 가지는 function
// // 첫 번째 argument는 우리가 딱 한번만 실행하고 싶은 코드

// // 처음 딱 한 번만 실행 되고, 다시는 실행되지 않도록 하고 싶을 때
// // 첫 번째 component render에서만 실행되고 그 뒤로는 실행되지 않게 하고 싶을 때
// // 예를 들면 api 데이터 불러오고 그 다음에 계속 render가 되지 않도록
// // 나중에 state가 변화해도, 그 코드는 다시 실행되지 않게

// import { useEffect, useState } from 'react';

// function App() {
//   const [counter, setValue] = useState(0);
//   const onClick = () => setValue((prev) => prev + 1);
//   console.log('i run all the time'); // 클릭할 때마다(state가 변할 때 마다) 매번 실행
//   // ✅ 코드 한 번만 실행.
//   useEffect(() => {
//     console.log('I run only once');
//   }, []);

//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button onClick={onClick}>Click me</button>
//     </div>
//   );
// }

/////////////////////////////////////////////////////////////////
import { useEffect, useState } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('i run all the time'); // 클릭할 때마다(state가 변할 때 마다) 매번 실행

  // ✅ 한 번만 실행. 아무것도 지켜보지 않음
  useEffect(() => {
    console.log('I run only once');
  }, []);

  // 두 번째 argument : 이제 무언가 변화할 때 특정 코드를 실행할 수 있음
  // keyword가 변화할 때 코드를 실행할 거라고 react.js에게 알려주는 것
  // 특정한 keyword가 update될 때문 코드를 실행
  // ✅ keyword가 변화할 때 실행
  useEffect(() => {
    /* if (keyword !== '' && keyword.length > 5) {
      console.log('SEARCH FOR', keyword);
    } */
    console.log('I run when "keyword" changes.');
  }, [keyword]);
  // ✅ counter가 변화할 때 실행
  useEffect(() => {
    console.log('I run when "counter" changes.');
  }, [counter]);
  // ✅ keyword, counter가 변화할 때 실행
  useEffect(() => {
    console.log('I run when keyword & counter changes.');
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

// ✨ useEffect({argument},[])
// react.js가 동작하는 관점에서 말하자면 방어막 같은 것
// 1. 첫 번째 argument는 우리가 실행시키고 싶은 코드
// 2. 두 번째 argument는 dependencies는 react.js가 지켜봐야하는 것들
// -> 그것들이 변화할 때 react.js가 코드를 실행

// 💡 react.js 는 state를 변화시킬 때 component를 재실행시키는 것!

export default App;

/////////////////////////////////////////////////////////////////
// // ✅ Cleanup function - 자주 사용되는 것은 아님

// function Hello() {
//   // function Hello() {
//     // useEffect(() => {
//     // console.log('created :)');
//     // // component가 destroy될 때 뭔가 할 수 있도록 해주는 것
//     // return () => console.log('destroyed :(');
//     // }, []);
//     // return <h1>Hello</h1>;
//   // }

//   // function Hello() {
//     // function byFn() {
//     //   console.log('bye :(');
//     // }
//     // function hiFn() {
//     //   console.log('created :)');
//     //   return byFn;
//     // }
//     // useEffect(hiFn, []);
//     // return <h1>Hello</h1>;
//   // }

//   // 🔸 위아래 같은 코드
//   // function들을 잘 만들지 않고
//   // 보통 useEffect안에 모든 것을 작성한다

//   // 👍 선호
//   // 함수는 한 번만 불러올 것임
//   useEffect(() => {
//     console.log('hi :)');
//     return () => console.log('bye :(');
//   }, []);

//   // 😂 잘 안씀
//   // useEffect(function () {
//   //   console.log('hi :)');
//   //   return function () {
//   //     console.log('bye :(');
//   //   };
//   // }, []);
//   return <h1>Hello</h1>;
// }

// function App() {
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setShowing((prev) => !prev);
//   return (
//     <div>
//       {showing ? <Hello /> : null}
//       <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
//     </div>
//   );
// }

// export default App;
