import React from 'react';
import ProductQuantity from './ProductQuantity';
// import { products } from '../data/products';

// const productList = products;
function ProductRow({ item }) {
    return (
        <div>
        <tr>
            <td>{item.product} from {item.company}</td>
            <td>{item.price.toLocaleString('en-US', {     
            style: 'currency',     
            currency: 'USD',     
            currencyDisplay: 'symbol'
            })}</td>
            <td><ProductQuantity /></td>
        </tr>
        </div>
    )
}
export default ProductRow;

