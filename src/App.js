import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import CartWidget from './components/CartWidget/CartWidget';

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
    </div>
  );
}

export default App;
