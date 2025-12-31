import { useState } from 'react'
import './App.css'
import css from './App.module.css'
import CafeInfo from './components/CafeInfo/CafeInfo'
import VoteOptions from './components/VoteOptions/VoteOptions'
import VoteStats from './components/VoteStats/VoteStats'
import Notification from './components/Notification/Notification'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={css.app}>
          <CafeInfo />
          <VoteOptions />
          <VoteStats />
          <Notification />
      </div>
     
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
