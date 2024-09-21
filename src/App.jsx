import Index from './pages/Index'
import { Routes ,Route } from 'react-router-dom'
import ProfileDetail from './pages/ProfileDetail'
const App = () => {
  return (
    <div>
      <Routes>
        <Route  path='/' element={<Index/>}/>
        <Route  path='/home' element={<Index/>}/>
        <Route  path='/detail/:id' element={<ProfileDetail/>}/>
        <Route path='*' element={Error}/>
      </Routes>  
    </div>
  )
}

export default App
