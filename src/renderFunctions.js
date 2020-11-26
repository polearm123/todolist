import {ToDoItem,Project,ProjectList,displayController} from './toDoItem.js';
import './styles.css';


const renderScreen = () => { //render the projects and the main web surroundings

    displayController.displayProjects();
    
}

export {renderScreen}



