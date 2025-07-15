import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Footer from './components/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <div className='min-h-screen flex flex-col justify-between'>
      <main className='flex-grow'><App /></main>
      <div className='bg-neutral-900 p-6 w-full'><Footer /> </div>
    </div>


  </StrictMode>,
)
