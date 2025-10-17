import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside style={{
      width: '250px',
      backgroundColor: '#34495e',
      color: 'white',
      padding: '20px',
      height: '100%'
    }}>
      <h3 style={{ 
        marginBottom: '20px', 
        borderBottom: '1px solid #4a6572',
        paddingBottom: '10px'
      }}>
        sidebar
      </h3>
      
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '15px' }}>
            <Link 
              to="/link1" 
              style={{ 
                color: 'white', 
                textDecoration: 'none',
                display: 'block',
                padding: '10px 15px',
                borderRadius: '4px',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#4a6572'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              🔗 link1
            </Link>
          </li>
          
          <li style={{ marginBottom: '15px' }}>
            <Link 
              to="/link2" 
              style={{ 
                color: 'white', 
                textDecoration: 'none',
                display: 'block',
                padding: '10px 15px',
                borderRadius: '4px',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#4a6572'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              🔗 link2
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;