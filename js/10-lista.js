var itemInput = document.getElementById("itemInput");
var btnAdd = document.getElementById("btnAdd");
var lista = document.getElementById("lista");

itemInput.addEventListener("keyup", function(event) {
	if(event.keyCode == 13) {
		event.preventDefault();
		btnAdd.click();
	}
})
btnAdd.addEventListener("click", agregar);

function agregar() {
	if(itemInput.value != "") {
		var span = document.createElement("span");
		span.setAttribute("aria-hidden", "true");
		span.innerHTML = "&times;";

		var btnEliminar = document.createElement("button");
		btnEliminar.type = "button";
		btnEliminar.setAttribute("data-dismiss", "alert");
		btnEliminar.setAttribute("aria-label", "Close");
		btnEliminar.classList.add("close");
		btnEliminar.appendChild(span);
		
		var li = document.createElement("li");
		li.classList.add("list-group-item");
		li.classList.add("alert");
		li.classList.add("fade");
		li.classList.add("show");
		li.appendChild(document.createTextNode(itemInput.value));
		li.appendChild(btnEliminar);

		lista.appendChild(li);
		itemInput.value = "";
	}
}