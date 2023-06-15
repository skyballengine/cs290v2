import React, { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

function ProductQuantity() {
    const [quantity, setQuantity] = useState(0);
    const quantityUp = () => 
        setQuantity(quantity === 10 ? quantity : quantity + 1);
    
    const quantityDown = () => 
        setQuantity(quantity === 0 ? quantity : quantity - 1);
    
    return (
    <div className="product-quantity">
    <AiOutlineCaretUp onClick={quantityUp} />
    <span>{quantity}</span>
    <AiOutlineCaretDown onClick={quantityDown} />
    </div>
    );
}

export default ProductQuantity;