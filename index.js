let tasks = [] //initially no task

      //getting element based on the ID
      let btn = document.getElementById('add_task_button')

      //check in function which btnid is clicked
      let delete_task = function (event) {
        let id = event.target.id
       

        let element_id = `li_${id}`
       
        let elem = document.getElementById(element_id)

        console.log(elem)

        elem.remove()

        //since id = btn_i
        let arr = id.split('_')
        let index = arr[1]
        //0'th element is btn
        //1'st element is arr[1]

        console.log('index ', index)

        //splice - now were going to be removing this element from a specific position in the tasks[] array

        tasks.splice(index, 1)
        //splice(index, how many elements must be deleted)
      }

      let edit_task = function (event) {
        // id = btn_i
        let id = event.target.id

        //splits into
        //btn - 0th index
        //i   - 1st index
        let index = id.split('_')[1]
        //were fetching the index to edit on based on the i'th value

        let edit_task = prompt('enter updated task')
        //taking input through prompt

        tasks[index] = edit_task
        //edit task on the i'th value

        display()
         //let single_task = tasks[i];
      }

      //loop on the list and create elements
      //and push to tasks[] array
      let display = function () {
        let ul = document.getElementById('task_list')
        //returns list of elements which have the same idname

        ul.innerText = ''

        for (let i = 0; i < tasks.length; i++) {
          let single_task = tasks[i]

          //create element li inside the document
          // document.createElement('li');

          //store it in a reference
          let new_elem = document.createElement('li')

          new_elem.innerText = single_task
         
          //created a ❌ button
          let btn = document.createElement('button')
          btn.innerText = '❌'
          //creating an element button and placing it besides new_elem

          //adding event listener
          btn.addEventListener('click', delete_task)

          let edit_btn = document.createElement('button')
          //✅create an element button

          edit_btn.innerText = '📓'
          //✅add this emoji inside it

          edit_btn.addEventListener('click', edit_task)
          //✅add event listener, such that when we click it it executes this function

          edit_btn.id = `edit_${i}`
          //✅adding an id to differentiate which button of which task is clicked on
          btn.id = `btn_${i}`
          //it will generate a new id for every task

          new_elem.id = `li_btn_${i}`
          //this button helps in referencing the li which needs to be deleted

          new_elem.appendChild(btn)
          //append button on the new_elem
          //new_elem ❌

          new_elem.appendChild(edit_btn)
          //✅this code appends the emoji in front of elem

          ul.appendChild(new_elem)
        }
      }

      let fn = function () {
        //when we click on a button it should add a new task

        //1. fetch what value you want to add
        let input = document.getElementsByName('task')[0].value

        tasks.push(input)

        display()
        //calling the display function from here, because we want to enter the values in console to the viewport
      }

      //attach an event listener
      btn.addEventListener('click', fn)
      //when button is clicked fn function is called
