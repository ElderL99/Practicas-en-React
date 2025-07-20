import SideBar from './components/SideBar.jsx'
import RickCard from './pages/rick/page.jsx'
import ListadePokemones from './pages/pokemon/pokelist.jsx'
import {useState } from 'react'


export default function App() {
  const [currentView, setCurrentView] = useState('rick')
  
  const handleClick = (view)=>{setCurrentView(view);};
  return (
    <div className="min-h-screen flex ">
      <div className="sidebar w-[15%]">
        <SideBar  
        onMenuClick={handleClick}
        />
      </div>
      <div className="main flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 p-6 lg:p-10">
        {currentView === 'rick' && <RickCard/>}
        {currentView === 'pokemon' && <ListadePokemones/>}
      </div>

    </div>
  )
}

