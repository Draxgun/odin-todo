import {capitalizeFirstLetter} from './capitalize'

let createDOMContainer = (name,classlist) =>{

    let element = document.createElement('div')
    element.setAttribute('id',`${name}`)
    element.classList.add(`${classlist}`)
    
    return element
    
    
  
}

let createDomElement = (type,name,classlist,textContent) =>{
    
    if(type === 'button' || type === 'input'){
        let element = document.createElement(`${type}`)
        element.textContent = capitalizeFirstLetter(textContent)
        element.setAttribute('id',`${name}${capitalizeFirstLetter(type)}`)
        element.classList.add(`${classlist}`)

        return element
    }else{
        let element = document.createElement(`${type}`)
        element.textContent = capitalizeFirstLetter(textContent)
        element.setAttribute('id',`${name}`)
        element.classList.add(`${classlist}`)

        return element
    }
    
    
}

export{
    createDOMContainer,
    createDomElement
}