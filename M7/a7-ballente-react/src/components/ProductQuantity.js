import React, { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

function ProductQuantity() {
    const [quantity, setQuantity] = useState(0);
    const quantityUp = () => 
        setQuantity(quantity === 10 ? quantity : quantity + 1);
    
    const quantityDown = () => 
        setQuantity(quantity === 0 ? quantity : quantity - 1);
    
    return (
    <>
    <AiOutlineCaretUp onClick={quantityUp} />
    <span>{quantity}</span>
    <AiOutlineCaretDown onClick={quantityDown} />
    </>
    );
}

export default ProductQuantity;