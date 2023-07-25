
import { useEffect } from 'react'
import './App.css'
import axios from 'axios'
import GraphTable from './components/GrapghTable/GraphTable'

function App() {
useEffect(() => {

    const data = axios('https://dpg.gg/test/calendar.json')
    .then(({data}) => console.log(data))
    .catch(err => console.log(err))
},[])


  return (
    <GraphTable/>
  )
}

export default App
