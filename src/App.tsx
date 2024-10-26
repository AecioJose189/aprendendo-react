import { Routes, Route} from 'react-router-dom'
import HomePage from './screens/Home';
import RoomPage from './screens/Room';


function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/room/' element={<RoomPage/>}/>
    </Routes>
  )
}

export default App
