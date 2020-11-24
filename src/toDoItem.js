// require('date-fns');

const ToDoItem = (title,description,dueDate,priority) => {

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

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

    this.title = title;
    this.description = description;
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


export {Project,ToDoItem}

