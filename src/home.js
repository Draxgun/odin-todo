import {createHeader}  from './header'
import { createContent } from './content';
import {createModal} from './modal'

/* HTML Structure */

let loadPageStucture = () => {

   

    /*Creates the header*/
    createHeader()

     /* Creates the modal stucutre */
     createModal()

    /* Creates the content side */
    createContent()
    
   
    
}

export{
    loadPageStucture
}




