import React from 'react';
import ProductRow from '../components/ProductRow';
import products from '../data/products';

function OrderPage({ products }) {
    return (
        <>
        <h2>Order Products</h2>
        <article className="order-table-top">
            <h3>Choose a product and a quantity (10 max)</h3>
            <table id="productTable" className="productTable">
                <caption>Available Products</caption>
                <thead>
                    <tr>
                        <th>Item/Company</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((aProduct, index) =>
                    <ProductRow item={aProduct} key={index} />
                
                    )};
                </tbody>
                <tfoot>

                </tfoot>
            </table>
        </article>
        </>
    );
}

export default OrderPage;
