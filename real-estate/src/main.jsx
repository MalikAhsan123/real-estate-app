import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< Updated upstream
import Home from './modules/home/Home.jsx';
import About from './modules/about/About.jsx';
import Properties from './modules/properties/Properties.jsx';
import Contact from './modules/conatct/Contact.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App />} >
      <Route path='' element = {<Home />} />
      <Route path='about' element = {<About />} />
      <Route path='properties' element = {<Properties />} />
      <Route path='contact' element = {<Contact />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
=======
import About from './modules/about/About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <About />
>>>>>>> Stashed changes
  </StrictMode>,
)
