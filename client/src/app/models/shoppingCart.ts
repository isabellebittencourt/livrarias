import { book } from './book';
import { user} from './user';

export class shoppingCart{
    _id?: string;
    quantidade:number;

    precoTotal:number;
        
    usuario: user;
    
    livros: book[];
      
}

