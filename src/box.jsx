
  import './index.css'
  import VariantButtonGroup from './button.jsx'
  import ListI from './List.jsx'
  import ButtonAdd from './buttonAdd'
  import PageEdiit from './pageEdiit.jsx'
  import Caluct from './caluct.jsx'

export default function Box() {
  return<>
   <PageEdiit />

  
     <div className="box">
    {/* <h1>مهامي</h1>
    <VariantButtonGroup />
    <ListI />
    <ButtonAdd />  */}
    <Caluct />
  </div>
  </>
}