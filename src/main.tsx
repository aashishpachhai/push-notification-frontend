
import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './Home.tsx'
import { About } from './About.tsx'
import { User } from './User.tsx'
import { SharedLayout } from './SharedLayout.tsx'


// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/sw.js')
//       .then((registration) => {
//         console.log('ServiceWorker registration successful:', registration);
//       })
//       .catch((error) => {
//         console.log('ServiceWorker registration failed:', error);
//       });
//   });
// }
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
  <Routes>
    <Route path=''element={<SharedLayout/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='/user' element={<User/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
 ,
)
