import { Routes, Route } from 'react-router-dom'
import { Login, DashBoard, PageNotFound } from './pages'
import { ProjectDetail } from './pages/ProjectDetail'

export function AppRouter () {
  return (
    <main>
      <Routes>
        <Route
          path='/Login'
          element={<Login />}
        />
        <Route
          path='/Dashboard'
          element={<DashBoard />}
        />
        <Route
          path='Dashboard/Pokemon_detail/:title'
          element={<ProjectDetail />}
        />
        <Route
          path='/*'
          element={<PageNotFound />}
        />
      </Routes>
    </main>
  )
}
