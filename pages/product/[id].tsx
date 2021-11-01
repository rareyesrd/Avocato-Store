import { useRouter } from 'next/dist/client/router';
import React from 'react';

const ProdcutItem = () => {
    const { query: { id } } = useRouter();
    return (
        <div>
            Esta es la pagina del producto { id }
        </div>
    )
}
 
export default ProdcutItem;
