let parent = document.getElementById("parent");
let list = document.getElementById("list");

class Task {
	constructor(title, text, status) {
		this.title = title;
		this.text = text;
		this.status = status;
		this.createDisplay();
	}
	applyStyles() {
		this.div.style = "margin-top: 5px; position: relative;padding-left: 7px; font-family: Arial; background-color: #e8e8e8; border: 3px solid #dbdbdb; border-radius: 10px; width: 500px; height: 200px;"
	}
	createDisplay() {
		this.div = parent.cloneNode(true);
		this.div.id = "";
		this.div.className = 'task';
		list.appendChild(this.div);
		this.displayTitle = this.div.querySelector('.title');
		this.displayText = this.div.querySelector('.text');
		this.displayStatus = this.div.querySelector('.status');
		this.statusCheckbox = this.displayStatus.querySelector('.checkbox');
		this.statusText = this.displayStatus.querySelector('.text');
		this.displayTitle.textContent = this.title;
		this.displayText.textContent = this.text;
		this.statusCheckbox.checked = this.status;
		let object = this;
		statusUpdate(this);
		this.statusCheckbox.onchange = function () { statusUpdate(object) };
		this.div.ondblclick = function () { editTask(object) };
		this.applyStyles();
		console.log(this);
	}
	Update() {
		this.displayTitle.textContent = this.title;
		this.displayText.textContent = this.text;
	}
}

function statusUpdate(task) {
	console.log(task);
	task.status = task.statusCheckbox.checked;
	if (task.status) {
		task.displayStatus.style.backgroundColor = "blue";
		task.statusText.style.color = "white";
		task.statusText.textContent = " Done";
	}
	else {
		task.displayStatus.style.backgroundColor = "orange";
		task.statusText.style.color = "black";
		task.statusText.textContent = "To do";
	}
}

function editTask(task) {
	document.getElementById("add").style.display = "none";
	let editForm = document.getElementById("edit");
	editForm.style.display = "flex";
	editForm.title.value = task.title;
	editForm.description.value = task.text;
	editForm.button.onclick = function () {
		task.title = editForm.title.value;
		task.text = editForm.description.value;
		task.Update();
		document.getElementById("add").style.display = "flex";
		document.getElementById("edit").style.display = "none";
	}
}

let tasks = [];
tasks.push(new Task("TaskName", "TaskDescription", true));
console.log(tasks[0]);