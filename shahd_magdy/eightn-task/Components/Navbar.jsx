import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '1rem',
      color: 'white'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2>My App</h2>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link 
            to="/home" 
            style={{ 
              color: 'white', 
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Home
          </Link>
          
          <Link 
            to="/about" 
            style={{ 
              color: 'white', 
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;