import { BrowserRouter, Routes, Route, BrowserRouterProps } from 'react-router-dom'
import Login from './Login'

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes;
