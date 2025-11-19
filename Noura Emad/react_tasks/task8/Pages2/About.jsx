function About() {
  return (
    <div>
      <h1>ℹ️ App information</h1>
      <p>هذه الصفحة تحتوي على معلومات عن التطبيق</p>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <h3>About us</h3>
        <ul>
          <li > My App: shosho</li>
          <li>الإصدار: 1.0.0</li>
          <li>التقنيات: React, React Router</li>
        </ul>
      </div>
    </div>
  );
}

export default About;