// require('date-fns');

const ToDoItem = (title,description,dueDate,priority) => {

    // this.title = title;
    // this.description = description;
    // this.dueDate = dueDate;
    // this.priority = priority;

    const getTitle = () => {

        return title;

    }

    const getDescription = () => {

        return description;

    }

    const getDueDate = () => {

        return dueDate;

    }

    const getPriority = () => {

        return priority;

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

}



const Project = (title,description) => {

    var toDoList = [];
    

    const getTitle = () => {

        return title;

    }


    const getDescription = () => {

        return description;

    }

    //TODO: respect to showing completed and non completed
    const getList = () => { 

        return toDoList;

    }

    const addToDo = (projectToDoElement) => {//needs to be validation of the object, within the todo class?

        toDoList.push(projectToDoElement);

    }

    return{addToDo, getList,getDescription, getTitle}

}

const ProjectList = (function() {

    var listOfProjects = []; //stores a list of projects for view


    const addNewProject = (project) => {//creates a new project and adds it to the list

        listOfProjects.push(project);

    }

    const listProjects = () => { //returns a list of all current projects

        return listOfProjects;

    }

    return {listProjects,addNewProject}

}());


const displayController = (function(){

    const displayProjects = () => { //goes through the project list and prints them on screen 

        var container = document.querySelector(".container");

        for(let i=0;i<ProjectList.listProjects().length;i++){ //appends projects to thei main container
            
            var projectDiv = createProjectDiv(ProjectList.listProjects()[i]);
            container.appendChild(projectDiv)

        }

    }

    const createProjectDiv = (project) => { //creates and returns project div with correct title and ID

        var toDoList = project.getList();
        var projectTaskBar = document.createElement("div");
        var projectElement = document.createElement("div");

        projectElement.classList.add("project");
        projectElement.id = project.getTitle();
        
        projectElement.appendChild(createProjectTaskBar(project));


        for(let i=0;i<toDoList.length;i++){ //goes over the toDos in the project
                                            //appending each one to the parent project div
            projectElement.appendChild(createToDoDiv(toDoList[i]));

        }

        return projectElement;

    }

    const createToDoDiv = (toDoElement) => {//returns a to do card with all information to be 
                                            //appended to their project div

        var toDoDiv = document.createElement("div");
        toDoDiv.classList.add("to-do-item");
        
        var description = toDoElement.getDescription();
        var dueDate = toDoElement.getDueDate();
        var priority = toDoElement.getPriority();
        var title = toDoElement.getTitle();

        var titlePara = document.createElement("p");
        titlePara.textContent = `title: ${title}`;
        var descriptionPara = document.createElement("p");
        descriptionPara.textContent = `description: ${description}`;
        var dueDatePara = document.createElement("p");
        dueDatePara.textContent = `due date: ${dueDate}`;
        var priorityPara = document.createElement("p");
        priorityPara.textContent = `priority ${priority}`;

        toDoDiv.appendChild(titlePara);
        toDoDiv.appendChild(descriptionPara);
        toDoDiv.appendChild(dueDatePara);
        toDoDiv.appendChild(priorityPara);

        return toDoDiv;

    }

    const createProjectTaskBar = (project) => {//returns a div with the project task/nav bar

        var projectTaskBarDiv = document.createElement("div");
        projectTaskBarDiv.classList.add("project-task-bar");

        var title = document.createElement("h1");
        title.textContent = `Title: ${project.getTitle()}`;

        var addButton = document.createElement("button");
        addButton.classList.add("add-button");
        addButton.id = project.getTitle();
        addButton.textContent = "add task";

        projectTaskBarDiv.appendChild(title);
        projectTaskBarDiv.appendChild(addButton);

        return projectTaskBarDiv;

    }

    const displayToDoLists = () => {

        console.log("not yet implemented");

    }

    return {displayToDoLists,displayProjects}

})()


// export {Project,ToDoItem,ProjectList,displayController}
export {Project,ToDoItem,ProjectList,displayController}
