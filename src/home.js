import {createHeader}  from './header'
/* HTML Structure */

let loadPageStucture = () => {

    /*Creates the header*/
    createHeader()
    
    /* Content */
    let content = document.createElement('div')
    content.classList.add('content')
    document.body.appendChild(content)

}

export{
    loadPageStucture
}




