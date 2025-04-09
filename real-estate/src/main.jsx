import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Home from './modules/home/Home.jsx';
import About from './modules/about/About.jsx';
import Properties from './modules/properties/Properties.jsx';
import Contact from './modules/conatct/Contact.jsx';
import Form from './components/form/Form.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App />} >
      <Route path='' element = {<Home />} />
      <Route path='about' element = {<About />} />
      <Route path='properties' element = {<Properties />} />
      <Route path='contact' element = {<Contact />} />
      <Route path='register' element = {<Form isLogin = {false} />} />
      <Route path='login' element = {<Form isLogin = {true} />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <RouterProvider router={router} />

  // </Provider>,
)
