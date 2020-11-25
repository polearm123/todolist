// require('date-fns');

const ToDoItem = (title,description,dueDate,priority) => {


    const getTitle = () => {

        return this.title;

    }

    const getDescription = () => {

        return this.description;

    }

    const getDueDate = () => {

        return this.dueDate;

    }

    const getPriority = () => {

        return this.priority;

    }

    const setPriority = (newPriority) => {

        this.priority = newPriority;

    }

    const setDueDate = (newDueDate) => {

        this.dueDate = newDueDate;

    }

    const setDescription = (newDescription) => {

        this.description = newDescription;

    }

    const setTitle = (newTitle) => {

        this.title = newTitle;

    }


    return {getDescription,getDueDate,getPriority,getTitle,setPriority,setDueDate,setDescription,setTitle}

};



const Project = (title,description) => {

    this.toDoList = [];


    const getTitle = () => {

        return this.title;

    }


    const getDescription = () => {

        return this.description;

    }

    //TODO: respect to showing completed and non completed
    const getList = () => { 

        return this.toDoList;

    }

    const addToDo = (projectToDoElement) => {//needs to be validation of the object, within the todo class?

        this.toDoList.push(projectToDoElement);

    }

    return{addToDo, getList,getDescription, getTitle}

}

const ProjectList = (function() {

    let projectList = []; //stores a list of projects for view


    const addNewProject = (project) => {//creates a new project and adds it to the list

        projectList.push(project);

    }

    const listProjects = () => { //returns a list of all current projects

        return projectList;

    }

    return {listProjects,addNewProject}

    

}());


const displayController = (function(){

    const displayProjects = () => {

        console.log("not implemented yet");

    }

    const displayToDoLists = () => {

        console.log("not yet implemented");

    }

    return {displayToDoLists,displayProjects}

})();


// export {Project,ToDoItem,ProjectList,displayController}





const project1 = new Project("hello", "hello");

console.log(project1);