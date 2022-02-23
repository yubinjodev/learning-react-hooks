import {useEffect,useState} from 'react'

export const Effect = () =>{
  const [resourceType, setResourceType] = useState("posts")
  const [items, setItems] = useState([])
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  const handleResize = () =>{
    setWindowSize(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener("resize", handleResize)
  },[])

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))
  }, [resourceType])
  
console.log(items);

  return(
    <div>
      <div>
      <div>useEffect is like componentDidMount()!</div>
      <div>it runs everytime the function (re)renders.</div>
      <div>whatever is inside the array is what useEffect relies on for rendering!</div>
      <div>mutations, subscription, timers, loggin and other effects can be done here.</div>
      </div>

      <div>
        <h1>window size rendering</h1>
        <h2>window width : {windowSize}</h2>
      </div>
      
      <div>
        <h1>resource type filtering</h1>
        <button onClick={()=>{setResourceType("posts")}}>posts</button>
        <button onClick={()=>{setResourceType("users")}}>users</button>
        <button onClick={()=>{setResourceType("comments")}}>comments</button>
        <h2>filter : {resourceType}</h2>
        {items.map(item=>{
          return <ul>{JSON.stringify(item)}</ul>
        })}
      </div>
    </div>
  )
}