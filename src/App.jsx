import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'
import './styles.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  let featuredPup = puppies.find((pup)=> pup.id === featPupId)

  function handleClick(puppy) {
     setFeatPupId(puppy.id)
  }
  return (
    <>
      <div>
        {
          puppies.map((puppy) => 
          {
            return <p onClick={()=>handleClick(puppy)} 
              key={puppy.id}>{puppy.name}</p>
          })
        }
        {featPupId && 
          (<div>                                                          
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>)}
      </div>
    </>
  )
}

export default App