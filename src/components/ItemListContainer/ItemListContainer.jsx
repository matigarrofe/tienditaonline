import './style.css'

const ItemListContainer = ({nombre, url}) => {
  return (
    <li className="lista">
        <a href={url}>{nombre}</a>
    </li>
  )
}

export default ItemListContainer
