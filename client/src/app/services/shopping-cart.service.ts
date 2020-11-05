import { book } from './../models/book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }
  items: book[] = []
  
  /**Push adc no array items os livros que o usuário deseja inserir */
  /**O session Storage  permite que quando a página seja recarregada não apague do html as informações do 
 * carrinho, ele guarda a informação, só apagua quando se fecha a aba do navegador
 */

  addItem(item:book){   
      this.items.push(item)
      sessionStorage.setItem("cart",JSON.stringify(this.items))  
    }

  removeBook(item:book){
      this.items.splice(this.items.indexOf(item), 1)
      sessionStorage.setItem("cart",JSON.stringify(this.items))   
      window.location.reload();
  }
  

}
