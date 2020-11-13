import { book } from './book';
import { user} from './user';

export class purchase {
    _id?: string;
        
    usuario: user;
    
    itens: book[];

    total: number;
      
}

