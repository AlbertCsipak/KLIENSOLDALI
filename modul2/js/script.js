let todoList = [];

let mainWrapper = document.querySelector(".todo-wrapper");
let workWrapper = document.querySelector(".work-wrapper");
let schoolWrapper = document.querySelector(".school-wrapper");
let tobuyWrapper = document.querySelector(".to-buy-wrapper");

let sendButton = document.querySelector("#sendButton");
let prioInput = document.querySelector("#prio");
let taskInput = document.querySelector("#task");
let iconInput = document.querySelector("#icon");
let categoryInput = document.querySelector("#category");

sendButton.addEventListener("click", clickHandler);

class todoItem{
    category
    priority
    content
    icon

    constructor(category,priority,content,icon){
        this.category = category;
        this.priority = priority;
        this.content = content;
        this.icon = icon;
    }
};

function addElement(element){
    let item = document.createElement("p");
    
    item.addEventListener("click", function(e){
        item.classList.toggle("active");
    });

    item.innerHTML = element.icon+" "+element.content;

    item.classList.add("itemStyleMain");

    if (element.priority == 1){
        item.classList.add("prio1");
    }
    else if (element.priority == 2){
        item.classList.add("prio2");
    }
    else if (element.priority == 3){
        item.classList.add("prio3");
    }
    else if (element.priority == 4){
        item.classList.add("prio4");
    }

    if (element.category == "to buy"){
        tobuyWrapper.appendChild(item);
    }else if (element.category == "school"){
        schoolWrapper.appendChild(item);
    }else if (element.category == "work"){
        workWrapper.appendChild(item);
    }

}
function clickHandler(event) {
    event.preventDefault();
    let todoTmp = new todoItem(categoryInput.value,prioInput.value,taskInput.value,iconInput.value);
    if (categoryInput.value != "" && taskInput.value != ""){
        todoList.push(todoTmp);
        addElement(todoTmp);
    }
}

let todoItem1 = new todoItem("to buy",1,"tej",'<i class="fa-solid fa-cart-shopping"></i>');
let todoItem2 = new todoItem("work",2,"ásás",'<i class="fa-solid fa-briefcase"></i>');
let todoItem3 = new todoItem("school",3,"tanulás",'<i class="fa-solid fa-school"></i>');
let todoItem4= new todoItem("school",4,"sok tanulás",'<i class="fa-solid fa-school"></i>');

todoList.push(todoItem1);
todoList.push(todoItem2);
todoList.push(todoItem3);
todoList.push(todoItem4);


todoList.forEach(element => {
    addElement(element)
});