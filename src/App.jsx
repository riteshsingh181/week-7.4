import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { allNotificationsAtom, jobsAtom, messagingAtom, networkAtom, notificationsAtom } from './store/atoms/topbar'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'

function App() {
  return(
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  )
}

function MainApp(){
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  const notificationsCount = useRecoilValue(notificationsAtom);
  const allNotificationsCount = useRecoilValue(allNotificationsAtom);

  return (
    <>
      <button>Home</button>
      
      <button>My Network ({networkCount > 100 ? "99+" : networkCount})</button>
      <button>Jobs ({jobsCount})</button>
      <button>Messaging ({messagingCount})</button>
      <button>Notifications ({notificationsCount})</button>
    
      <button>Me ({allNotificationsCount})</button>
    </>
  )
}

export default App
