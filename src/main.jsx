import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Footer from './components/footer.jsx'
import SideBar from './components/SideBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className=''>
      <div className="min-h-screen flex">

        <main className="w-full">
          <App />
        </main>

      </div>
      <div className="footer">
        <footer className="bg-neutral-900 p-6 w-full">
          <Footer />
        </footer>
      </div>
    </div>

  </StrictMode>,
);
