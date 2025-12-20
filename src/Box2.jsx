
function Box2(prorpt) {
  const icon=<img width={'15px'} src={prorpt.img}/>
   const photo=<img width={'100px'} src={prorpt.img1}/>
   if(prorpt.title==null||prorpt.title==''){return null}
  return (
    <button  style={{margin:"10px",backgroundColor:'green',borderRadius:"5px",cursor:"pointer"}}>
      {prorpt.title}{icon}{icon}{icon} <br /> {photo}</button>
  );
}   
export default Box2;