import {createDOMContainer,createDomElement} from './domCreators'
import {Project,Task,mainDatabase} from './mainObjects'
import {format} from 'date-fns'


let createProjectContentStructure = (project) => {

    /* Creates the main container */
    let mainContainer = createDOMContainer('','mainContentContainer');

    /*Creates the head of the container*/
    let header = createDOMContainer('','contentHeader');
    header.style.backgroundColor = project.color

    /*Creates the title of the header*/
    let headerTitle = createDomElement('div','','contentHeaderTitle',project.title)
    header.appendChild(headerTitle)

    /*Get todays current date*/
    let headerDate = createDOMContainer('div','','contentHeaderDate',format(new Date(),'P'))
    header.append(headerDate)
}
