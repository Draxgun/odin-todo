import {createHeader}  from './header'
import { createContent } from './content';
/* HTML Structure */

let loadPageStucture = () => {

    /*Creates the header*/
    createHeader()

    /* Creates the content side */
    createContent()
    

}

export{
    loadPageStucture
}




