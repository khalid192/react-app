
  import './index.css'
  import VariantButtonGroup from './button.jsx'
  import ListI from './List.jsx'
  import ButtonAdd from './buttonAdd'

export default function Box() {
  return <div className="box">
    <h1>مهامي</h1>
    <VariantButtonGroup />
    <ListI />
    <ButtonAdd /> 
  </div>
}