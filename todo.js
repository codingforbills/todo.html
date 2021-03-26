var add = document.getElementById('add-button');
var del = document.getElementById('delete');
var task_container = document.getElementById('.tasks-container');
var task_input = document.getElementById('new-task');
var complete = document.getElementById('check-all-button');
var clear = document.getElementById('clearComplete');
var showAll = document.getElementById('showAll');
var showComplete = document.getElementById('showComplete');
var showInprogress = document.getElementById('showInprogress');
var showNotStarted = document.getElementById('showNotStarted');
var showState = 'showAll';
showAll.style.color = "Black";

var task_card_string = "<div class=\"status-icon\"></div><p class=\"task-text\"><p class=\"task-status color-red\">Not-Started</p><ion-icon class=\"delete fs-large mg-10\" name=\"close-circle-outline\"></ion-icon>"
var task_count = 5;
updateTaskCount();
eventSetter();

function updateTaskCount() {
  document.getElementById('task-left-count').innerHTML = task_count;
}

function eventSetter() {
  var del_buttons = document.getElementsByClassName('delete');
  for (del of del_buttons) {
    del.addEventListener('click', removeCard);
  }

  var progress_buttons = document.getElementsByClassName('status-icon');
  {
    for (p of progress_buttons) {
      p.addEventListener('click', changeProgress);

    }
  }
  var cards = document.getElementsByClassName('task-card');
  console.log(cards);
  for (let i = 0; i < cards.length; i++) {
    console.log(cards[i]);
    cards[i].addEventListener('mouseover', function () {
      console.log(cards[i]);
      cards[i].children[3].style.visibility = "initial";
    })
    cards[i].addEventListener('mouseleave', function () {
      console.log(cards[i].children[3].style.visibility);
      cards[i].children[3].style.visibility = "hidden";
    })
  }

}

function reassignIDs() {
  var cards = document.getElementsByClassName('task-card');
  var count = 1;
  for (card of cards) {
    card.setAttribute("id", "t" + (count++));
    card.eve
  }
}

function resetColor() {
  var allButtons = document.getElementsByClassName('filter-button');
  for (button of allButtons) {
    button.style.color = "gray";
  }

  add.addEventListener('click', function () {
    var task_card = document.createElement('div');
    task_card.setAttribute("class", "task-card not started");
    task_card.setAttribute("class", "task-card not started");
    task_container.appendChild("task_card");
    let card_text.innerHTML = task_input.value;
    task_input.value = "";

    updateTaskCount();
    eventSetter();
  })

  document.addEventListener("keydown", function (event) {
    var keyValue = event.key;
    if (keyValue == "Enter") {
      var task_card = document.createElement('div');
      task_card.setAttribute("class", "task-card not-started");
      task_card.setAttrubute("id", "t" + (++task_count));
      task_container.appendChild(task_card);
      let card_text = document.querySelector('#t' + task_count + "p");
      card_text.innerHTML = task_input.value;

      task_input.value = "";

      updateTaskCount();
      eventSetter();
    }
  });
}