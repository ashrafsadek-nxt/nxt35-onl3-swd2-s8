
import { useState } from 'react';

function SimpleAttendance() {
  const [attendance, setAttendance] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>نظام الحضور</h2>
      
      <div style={{ 
        fontSize: '100px', 
        margin: '40px 0', 
        color: '#27ae60',
        fontWeight: 'bold'
      }}>
        {attendance}
      </div>
      
      <p style={{ fontSize: '20px', marginBottom: '30px' }}>عدد الحاضرين</p>

      <div>
        <button 
          onClick={() => setAttendance(prev => prev + 1)}
          style={{
            padding: '15px 30px',
            fontSize: '18px',
            margin: '0 10px',
            backgroundColor: '#27ae60',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          دخول +
        </button>
        
        <button 
          onClick={() => attendance > 0 && setAttendance(prev => prev - 1)}
          style={{
            padding: '15px 30px',
            fontSize: '18px',
            margin: '0 10px',
            backgroundColor: attendance === 0 ? '#bdc3c7' : '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: attendance === 0 ? 'not-allowed' : 'pointer'
          }}
        >
          خروج -
        </button>
      </div>
    </div>
  );
}

export default SimpleAttendance;