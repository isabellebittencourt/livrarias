import { categoria } from './categoria';
export class book{
    _id?: string;

    titulo: string;      
   
    autor: string;
       
    editora: string;
    
    edicao: string;
    
    anoPublicacao: Date;
        
    preco: number;

    quantidade: number;

    categoria: categoria;

};