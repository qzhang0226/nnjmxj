import React, { useState, useEffect } from 'react';
import {Store} from './Store';
import {fetchDataAction} from './Actions';

const ProductContext = React.createContext();

function ProductProvider(props) {

    const [detailProducts, setDetailProducts] = useState([]);

    const {state, dispatch} = React.useContext(Store);

    useEffect(() => {
        state.products.length === 0 && fetchDataAction(dispatch);
    })

    const getItem = id => {
        const product = state.products.find(item => item.id === id);
        return product;
    }

    const handleDetail = id =>{
        const product = getItem(id);
        setDetailProducts(product);
    }

    return(
        state.products ?
        <ProductContext.Provider value={{
            ...state,
            detailProducts,
            handleDetail: handleDetail,
        }}>
            {props.children}
        </ProductContext.Provider>
        :
        <div></div>       
    );
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
