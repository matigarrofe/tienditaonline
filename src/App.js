import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import CartWidget from './components/CartWidget/CartWidget';
import ItemCount from './components/ItemCount/ItemCount'
function App() {
  return (
    <div>
        <NavBar />
        <CartWidget />
        <ul>  {/*Lista con props */}
          <ItemListContainer nombre='Productos mas relevantes' url={'/'} />
          <ItemListContainer nombre='Productos mas vendidos' url={'/'} />
          <ItemListContainer nombre='Productos de outlet' url={'/'} />
          <ItemListContainer nombre='Promociones' url={'/'} />
        </ul>
        <ItemCount />
        
    </div>
  );
}

export default App;
