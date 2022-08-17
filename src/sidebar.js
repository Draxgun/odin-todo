/* Creates the side bar*/
let loadSidebar= (content) => {
    let sidebarContainer = createSidebarContainer(content)
    createSidebar(sidebarContainer)
}

let createSidebarContainer = (content) => {
    let sidebarContainer = document.createElement('div')
    sidebarContainer.classList.add('sidebarContainer')

    content.appendChild(sidebarContainer)

    return sidebarContainer
}

let createSidebar = (container) => {
    
    let itemNames = ['home','today','week','month','projects']

    itemNames.forEach(item => {
        createSidebarItem(item,container)
    });


}


let createSidebarItem = (name,container) =>{
    
    let button = document.createElement('button')
    button.textContent = capitalizeFirstLetter(name)
    button.setAttribute('id',`${name}Button`)
    button.classList.add(`sidebarButton`)

    container.appendChild(button)

}



function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export{
    loadSidebar
}

