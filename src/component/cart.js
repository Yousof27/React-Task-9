import { useState } from 'react';
import './cart.css'

export default function Cart() {
    const initialData = [
        {
            id: 0,
            name: 'MSI',
            count: 1,
            edit: false,
        },
        {
            id: 1,
            name: 'Dell',
            count: 3,
            edit: false,
        },
        {
            id: 2,
            name: 'Mac',
            count: 2,
            edit: false,
        }
    ];

    const [data, setData] = useState({ products: initialData, newProduct: '', newEdit: '' });

    let productsList = data.products.map(product => {
        return (
            <div className='product' key={product.id}>

                <input onChange={e => setData({ ...data, newEdit: e.target.value })} className={`edit-input ${product.edit}`} placeholder={product.name} />

                <h2>
                    {product.name}
                </h2>

                <div className='quantity'>
                    <span onClick={() => setData({ ...data, products: data.products.map(p => p.id === product.id ? { ...p, count: Math.max(p.count - 1, 1) } : p) })} className='less'>-</span>
                    <span className='count'>{product.count}</span>
                    <span onClick={() => setData({ ...data, products: data.products.map(p => p.id === product.id ? { ...p, count: p.count + 1 } : p) })} className='more'>+</span>
                </div>

                <div className='controls'>
                    <span onClick={() => product.edit ? setData({ ...data, products: data.products.map(p => p.id === product.id ? { ...p, name: data.newEdit.trim() !== '' ? data.newEdit.trim() : product.name, edit: false } : p), newEdit: '' }) : setData({ ...data, products: data.products.map(p => p.id === product.id ? { ...p, edit: p.edit = true } : p) })} className='edit'>{product.edit ? 'save' : 'edit'}</span>
                    <span className={`delete`} onClick={() => setData({ ...data, products: data.products.filter(p => p.id !== product.id) })}>x</span>
                </div>

            </div >
        )
    });

    return (
        <div>
            <form className='add' onClick={(e) => e.preventDefault()}>
                <input placeholder='Enter Product Name:' onChange={e => setData({ ...data, newProduct: e.target.value })} />
                <input type='submit' value='Add' onClick={() => data.newProduct.trim() !== '' && setData({ ...data, products: [...data.products, { id: (data.products[data.products.length - 1]?.id + 1) || 0, name: data.newProduct.trim(), count: 1 }] })} />
            </form>
            <div className='products-con'>{productsList}</div>
        </div>
    );
}



