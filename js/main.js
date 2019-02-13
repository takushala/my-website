function main() {
    createFooter();
}

function createFooter() {
    var d = new Date();
    var text = document.createTextNode("Hùn\'s website - " + d.getFullYear().toString());
    var footer = document.getElementById("footer");
    footer.appendChild(text);
    console.log("footer created");
}

function closeForm() {
    document.getElementById("popup-form").style.display = "none";
}

function openForm(pos) {
    var popup = document.getElementById("popup-form");
    popup.style.display = "flex";
    popup.style.right = window.innerWidth - pos.right + "px";
    popup.style.top = pos.top + "px";
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        right: rect.right,
        top: rect.bottom
    };
}

function getPost(editible) {
    var xmlhttp = new XMLHttpRequest();
    var url = "http://localhost:8080/php/getpost.php";
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            console.log(JSON.parse(this.responseText));
            contentGen(JSON.parse(this.responseText), editible);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send();
}

function contentGen(data, editible) {
    var blogsection = document.getElementById("blog-section");
    for (i = data.length - 1; i >= 0; i--) {
        var container = document.createElement("form");
        var title = document.createElement("p");
        var date = document.createElement("p");
        var content = document.createElement("p");

        container.setAttribute("class", "blog-container");
        container.setAttribute("id", "blog-" + data[i].id);
        container.setAttribute("method", "post");
        container.setAttribute("action", "../php/update.php");
        title.setAttribute("class", "blog-title");
        date.setAttribute("class", "blog-time");
        content.setAttribute("class", "blog-content");

        var titleText = document.createTextNode(data[i].title);
        var dateText = document.createTextNode(data[i].date);
        var contentText = document.createTextNode(data[i].content);

        title.appendChild(titleText);
        date.appendChild(dateText);
        content.appendChild(contentText);

        container.appendChild(title);
        container.appendChild(date);
        container.appendChild(content);
        if (editible) {
            var editBtn = document.createElement("button");
            var editBtnText = document.createTextNode("Edit post");
            var editArea = document.createElement("textarea");
            var confirmBtn = document.createElement("button");
            var cancelBtn = document.createElement("button");
            var cancelBtnText = document.createTextNode("Cancel");
            var confirmBtnText = document.createTextNode("Confirm");
            var text = document.createTextNode(data[i].content);
            var postId = document.createElement("input");

            postId.setAttribute("type", "hidden");
            postId.setAttribute("name", "post-id");
            postId.setAttribute("value", data[i].id);
            editArea.setAttribute("class", "edit-area");
            editArea.setAttribute("name", "new-content");
            editArea.setAttribute("onkeydown", "autoGrow(this);")
            editArea.setAttribute("onkeyup", "autoGrow(this);")
            editBtn.setAttribute("class", "edit-btn");
            editBtn.setAttribute("onclick", "setPostEdit(" + data[i].id + ")");
            editBtn.setAttribute("type", "button");
            confirmBtn.setAttribute("class", "confirm-btn");
            cancelBtn.setAttribute("type", "button");
            cancelBtn.setAttribute("class", "cancel-btn");
            cancelBtn.setAttribute("onclick", "unSetPostEdit(" + data[i].id + ")")
            editArea.appendChild(text);

            cancelBtn.appendChild(cancelBtnText);
            editBtn.appendChild(editBtnText);
            confirmBtn.appendChild(confirmBtnText)
            container.appendChild(editBtn);
            container.appendChild(editArea);
            container.appendChild(confirmBtn);
            container.appendChild(cancelBtn);
            container.appendChild(postId);
        }
        blogsection.appendChild(container);
    }
}

function makeEditible() {
    var editBtn = document.createElement("button");
    var containers = document.getElementsByClassName("blog-container");
    var btnText = document.createTextNode("Edit post");
    editBtn.appendChild(btnText);
    for (i = 0; i < containers.length; i++) {
        editBtn.setAttribute("id", containers[i].getAttribute("id"));
        containers[i].appendChild(editBtn);
    }
}

function setPostEdit(id) {
    var blogId = "blog-" + id;
    var container = document.getElementById(blogId);
    var nodelist = container.childNodes;
    for (i = 0; i < nodelist.length; i++) {
        nodeClass = nodelist[i].getAttribute("class");
        if (nodeClass == "blog-content")
            nodelist[i].style.display = "none";
        else if (nodeClass == "edit-area")
            nodelist[i].style.display = "block";
        else if (nodeClass == "edit-btn")
            nodelist[i].style.display = "none";
        else if (nodeClass == "confirm-btn")
            nodelist[i].style.display = "block";
        else if (nodeClass == "cancel-btn")
            nodelist[i].style.display = "block";
    }
}

function unSetPostEdit(id) {
    var blogId = "blog-" + id;
    var container = document.getElementById(blogId);
    var nodelist = container.childNodes;
    for (i = 0; i < nodelist.length; i++) {
        nodeClass = nodelist[i].getAttribute("class");
        if (nodeClass == "blog-content")
            nodelist[i].style.display = "block";
        else if (nodeClass == "edit-area")
            nodelist[i].style.display = "none";
        else if (nodeClass == "edit-btn")
            nodelist[i].style.display = "block";
        else if (nodeClass == "confirm-btn")
            nodelist[i].style.display = "none";
        else if (nodeClass == "cancel-btn")
            nodelist[i].style.display = "none";
    }
}

function autoGrow(oField) {
    oField.style.height = 'auto';
    if (oField.scrollHeight > oField.clientHeight) {
        oField.style.height = oField.scrollHeight + "px";
    }
}
//main(