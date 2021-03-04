import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

//여기서 컴포넌트 사용은 App(App.js)에서 App을 import 해서
//<App/> 태그를 사용하여 하고 있다. potato도 응용하여 불러오자.
//하지만! ↓

//리액트는 하나의 컴포넌트만 렌더링 하기 때문에 여기서는 App만 렌더링 가능.
//그러면 App으로 가서 Potato 내용을 넣어주자!
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

