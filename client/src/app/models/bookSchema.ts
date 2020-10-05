import { categorieSchema } from './categorieSchema';

export class bookSchema{
    _id?: string;

    titulo: string;      
   
    autor: string;
       
    editora: string;
       
    edicao: string;
    
    anoPublicacao: Date;
        
    preco: number;

    quantidade: number;
    
    categoria: [categorieSchema];
};