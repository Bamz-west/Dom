// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("mouseleave", function() {
// 	console.log("CLICK!!!");
// })

const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createElementList() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.classList.add('list-group-item')
	ul.appendChild(li);

	li.addEventListener("click", function() {
		var finished = this.classList.toggle("done");

		var removeButton = document.createElement("button");

		removeButton.classList.add("btn");

		if(finished) {
			removeButton.appendChild(document.createTextNode("Delete!"));
			removeButton.classList = "btn";
			li.appendChild(removeButton);

			removeButton.addEventListener("click", function() {
				this.parentElement.remove();
			});
		} else {
			this.getElementsByClassName("btn")[0].remove();
		}
	})

	input.value = "";

	// var button = document.createElement("button");
	// button.appendChild(document.createTextNode("Delete!"));
	// button.classList.add('btn');
	// li.appendChild(button);

	// button.onclick = removeParent;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createElementList();
	}
}

// function removeParent(evt) {
// 	evt.target.parentNode.remove();
// }

const strikeList = (strike) => {
	if (strike.target.tagName === "LI") {
		strike.target.classList.toggle("done");
	}
}

const clearList = (clear) => {
	if (clear.target.tagName === "BUTTON") {
		clear.target.parentNode.remove();
	}
}

// event.keyCode === event.while    -they both work
// keyCode 13 is the code for the enter key on the keyboard, every key has its own keyCode

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createElementList();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// ul.addEventListener("click", strikeList);

ul.addEventListener("click", clearList);