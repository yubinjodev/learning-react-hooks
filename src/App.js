import {Link, Routes, Route} from 'react-router-dom'

import {State} from '../src/components/Basic Hooks/State'
import {Effect} from '../src/components/Basic Hooks/Effect'
import {Context} from '../src/components/Basic Hooks/Context'

import {Callback} from '../src/components/Additional Hooks/Callback'
import {DebugValue} from '../src/components/Additional Hooks/DebugValue'
import {ImperativeHandle} from '../src/components/Additional Hooks/ImperativeHandle'
import {LayoutEffect} from '../src/components/Additional Hooks/LayoutEffect'
import {Memo} from '../src/components/Additional Hooks/Memo'
import {Reducer} from '../src/components/Additional Hooks/Reducer'
import {Ref} from '../src/components/Additional Hooks/Ref'

import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';

const AllRoutes=[
  {
    name:"Home",
    path:"/",
    element: <Home/>
  },
  {
    name:"useState",
    path:"basic-hooks/useState",
    element: <State/>
  },
  {
    name:"useEffect",
    path:"basic-hooks/useEffect",
    element: <Effect/>
  },
  {
    name:"useContext",
    path:"basic-hooks/useContext",
    element: <Context/>
  },
  {
    name:"useCallback",
    path:"additional-hooks/Callback",
    element: <Callback/>
  },
  {
    name:"useDebugValue",
    path:"additional-hooks/DebugValue",
    element: <DebugValue/>
  },
  {
    name:"useImperativeHandle",
    path:"additional-hooks/ImperativeHandle",
    element: <ImperativeHandle/>
  },
  {
    name:"useLayoutEffect",
    path:"additional-hooks/LayoutEffect",
    element: <LayoutEffect/>
  },
  {
    name:"useMemo",
    path:"additional-hooks/Memo",
    element: <Memo/>
  },
  {
    name:"useReducer",
    path:"additional-hooks/Reducer",
    element: <Reducer/>
  },
  {
    name:"useRef",
    path:"additional-hooks/Ref",
    element: <Ref/>
  },
]

function App() {
  return (
    <div className="App">
      <Link to="/">
        <div>&lt; Go back home</div>
      </Link>
      
      <Routes>
        {AllRoutes.map((route, index) => {
          return <Route key={index} path={route.path} element={route.element} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
