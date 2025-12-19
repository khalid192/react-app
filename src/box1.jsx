function Box1(propt) {
  return (
    <div style={{
      margin:'10px',
       border: 'solid 5px lightblue',
        width: '35vw', height: 'auto', 
        display: 'flex', flexDirection: 'column',
         justifyContent: 'center',
          alignItems: 'center' }}>


        <h2 style={{
         
          width:"100%",margin:"0",
          padding:" 10px 0",
          textAlign:"center"}}>{propt.title}</h2>
        <h2 style={{
         
          width:"100%",margin:"0",
          padding:" 2px 0",
          textAlign:"center"}}>{propt.title1}</h2><hr style={{width:'100%'}}></hr>
        <p>{propt.p}</p>
    </div>
  );
}
export default Box1;
