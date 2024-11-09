
const MapEmbed = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      
      {/* Hidden text */}
      <div style={{ position: 'absolute', opacity: 0, fontSize: '32px', fontWeight: 'bold' }}>
        Hidden Title
      </div>

      {/* Visible Title */}
      <h1 style={{ fontSize: '40px',  margin: 0, color : '#0000099' }}>
        The Best Map
      </h1>

      <iframe
        src="https://www.google.com/maps/d/u/1/embed?mid=1IsWap7cdSFfVWwcH166SUQ_RCFH-rxc&ll=45.754790646448846%2C21.227350473202392&z=16"
        width="1400"
        height="750"
        frameBorder="0"
        title="Timișoara Tour Map"
        style={{ borderRadius: '8px', marginTop: '20px' }}
      />

      <p style={{ fontSize: '24px', color :'#0000099', marginTop: '20px' }}>
        To Visit TM
      </p>
    </div>
  );
};

export default MapEmbed;
