import { data } from '../data/index';
import { Category } from '../types/category';

export const getCategoryById = (id: number) =>{
    return data.categories.find(category => category.id === id);
}

export const getCategories = () =>{
    return data.categories as Category[];
}