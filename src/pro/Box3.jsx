import Box2 from "./pro/Box2"
import img from "./assets/startloop.svg"
import img1 from "./assets/woman.jpg"
import img2 from "./assets/star.svg"
import img3 from "./assets/rose.jpg"
import "./App.css";


function Box3(){
const btn=[
    {id:1,title:"جديدة",img:img},
    {id:2,title:"جديدة",img1:img1},
    {id:3,title:"جديدة", img:img2, img1:img3},]
return(

    <>
    {btn.map((b)=>{return <Box2 title={b.title} img={b.img} img1={b.img1} />})}
    </>
)
}

export default Box3;