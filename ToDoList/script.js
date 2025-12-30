let inp = document.querySelector('input')
let btn = document.querySelector('#AddTask')
let ul = document.querySelector("ul");

btn.addEventListener('click' , function() {
    let task = inp.value
    addTasktoList(task);
});

inp.addEventListener('keydown' , function(event) {
    let task = inp.value;
    if(event.key == "Enter") {
        addTasktoList(task);
    }
})

function addTasktoList(task) {
    if(task != "") {
        inp.value = ""

        let li = document.createElement('li')
        li.innerText = task

        let delBtn = document.createElement('button')
        delBtn.innerText = "Delete-Task"
        delBtn.classList.add("delete")

        li.appendChild(delBtn)
        document.querySelector('ul').appendChild(li)
    }
}

ul.addEventListener("click" , function (event) { // ul clicked ::> li or delBtn is clicked ;; use this :>
    //event.target :: which element is pressed
    //.nodeName :: name of that element :: BUTTON here

    //we want to delete only when the delete-task button is click , not when the li-text is clicked

    if(event.target.nodeName == "BUTTON") { // then only delete that li;
        let li = event.target.parentElement;
        console.log("Deleted");
        li.remove();
    }

});


//these does not applies to new buttons :: since we've learnt clicking 
//child also clicks the parent *** use this
// let delBtns = document.querySelectorAll(".delete")
// for(eachBtn of delBtns) {
//     eachBtn.addEventListener("click" , function () {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }