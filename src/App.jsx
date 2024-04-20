import { useState } from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar'
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      <div className="w-full flex">
         {/* Side Navigation Bar */}
         <NavigationBar />
        {/* Main component on basis of selected navigation from nav bar */}
        <main className='grow'>
          <Dashboard />
        </main>
      </div>
    </>
  );
}

export default App
