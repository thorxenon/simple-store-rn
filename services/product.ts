import { data } from '../data/index';

export const getProducts = () =>{
    return data.products;
}

export const getProductById = (id: number) =>{
    return data.products.find(product => product.id === id);
}


export const getProductsByCategory = (idCategory: number) =>{
    return data.products.filter(products => products.idCategory === idCategory);
}