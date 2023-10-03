
import {Routes, Route, Navigate} from 'react-router-dom'

export const AppRouter = () => {
  return (
    <Routes>

      <Route path='/new-account' element={<h1>Hello World</h1>}/>

      <Route path='/list-accouts' element={<h1>Hello World 2</h1>}/>

      <Route path='/get-data' element={<h1>Hello World 3</h1>}/>

      <Route path='/do-entry' element={<h1>Hello World 4</h1>}/>

      <Route path='/drop-cash' element={<h1>Hello World 5</h1>}/>

      <Route path='/check-balance' element={<h1>Hello World 6</h1>}/>

      <Route path='/*' element={<Navigate to='/new'/>} />

    </Routes>
  )
}
