import {loadSidebar} from './sidebar'
import {loadTaskSection} from './taskContainer'

let createContent = () => {

    let content = createContentContainer()
    loadSidebar(content)
    loadTaskSection(content)
    
}

let createContentContainer = () =>{
    
    /* content */
    let  content = document.createElement('div')
    content.classList.add('content')
    document.body.appendChild(content)

    return content
}

export {
    createContent

}