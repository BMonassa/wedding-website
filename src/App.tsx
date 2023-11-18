import { BrowserRouter } from 'react-router-dom';

import { CartProvider } from "./Context/CartContext/CartContext"

import AppRoutes from './routes';

import './App.css';


function App() {
  return (
    <div>
        <CartProvider>
          <BrowserRouter>
            <AppRoutes/>
          </BrowserRouter>
        </CartProvider>
    </div>
  );
}

export default App;
