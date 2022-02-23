import {Link} from 'react-router-dom'

export const Home = () =>{
  return(
    <div>
      <h1>Navigation Menu</h1>
      
      <h2>Basic Hooks</h2>
      <div>
        <Link to="basic-hooks/useState">
          <ul>useState</ul>
        </Link>
        <Link to="basic-hooks/useEffect">
          <ul>useEffect</ul>
        </Link>
        <Link to="basic-hooks/useContext">
          <ul>useContext</ul>
        </Link>
      </div>

      <h2>Additional Hooks</h2>
      <div>
        <Link to="additional-hooks/Callback">
          <ul>useCallback</ul>    
        </Link>
        <Link to="additional-hooks/DebugValue">
          <ul>useDebugValue</ul>    
        </Link>
        <Link to="additional-hooks/ImperativeHandle">
          <ul>useImperativeHandle</ul>    
        </Link>
        <Link to="additional-hooks/LayoutEffect">
          <ul>useLayoutEffect</ul>    
        </Link>
        <Link to="additional-hooks/Memo">
          <ul>useMemo</ul>    
        </Link>
        <Link to="additional-hooks/Reducer">
          <ul>useReducer</ul>    
        </Link>
        <Link to="additional-hooks/Ref">
          <ul>useRef</ul>
        </Link>
      </div>
    </div>
  )
}