import Box2 from "./Box2"
import img from "./assets/startloop.svg"
import img1 from "./assets/woman.jpg"
import img2 from "./assets/star.svg"
import img3 from "./assets/rose.jpg"
import "./App.css";


function Box3(){
return(
    <>
        <Box2 title="جديدة" img={img}/>
        <Box2 title='الاكتر قراءة' img1={img1} />
        <Box2 title='مقالات مميزة' img={img2} img1={img3}/>
    </>
)
}

export default Box3;