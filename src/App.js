import Cart from './component/cart';
import './App.css';

export default function App() {

    return (
        <>
            <div className='container'>
                <h2 className='title'>Ca<span>r</span>t</h2>
                <Cart />
            </div>
        </>
    );
}