/* Creates the side bar*/
let loadSidebar= (content) => {
    createSidebarContainer(content)
}

let createSidebarContainer = (content) => {
    let sidebarContainer = document.createElement('div')
    sidebarContainer.classList.add('sidebarContainer')
    sidebarContainer.textContent = 'sadasd'

    content.appendChild(sidebarContainer)
}

export{
    loadSidebar
}

