import React from 'react';
import ProductQuantity from './ProductQuantity';
// import { products } from '../data/products';

// const productList = products;
function ProductRow({ item }) {
    return (
        <div className="product-row">
        <tr>
            <td className="product-data-1">{item.product} from {item.company}</td>
            <td className="product-data-2">{item.price.toLocaleString('en-US', {     
            style: 'currency',     
            currency: 'USD',     
            currencyDisplay: 'symbol'
            })}</td>
            <td className="product-data-3"><ProductQuantity /></td>
        </tr>
        </div>
    )
}
export default ProductRow;

