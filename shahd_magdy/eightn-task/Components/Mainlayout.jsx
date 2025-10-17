import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function MainLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      
      <Navbar />
      
      <div style={{ display: 'flex', flex: 1 }}>
        
        <Sidebar />
        
        
        <main style={{ 
          flex: 1, 
          padding: '20px',
          backgroundColor: '#f5f5f5'
        }}>
          <Outlet /> 
        </main>
      </div>
    </div>
  );
}

export default MainLayout;