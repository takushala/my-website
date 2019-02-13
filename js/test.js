var xmlhttp = new XMLHttpRequest();
var url = "../php/server.php";
var para = "taku";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this.responseText);
    }
}

xmlhttp.open("GET", url, true);
http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xmlhttp.send(para);

function myFunction(response) {
    var arr = JSON.parse(response);
    var i;
    var out = "<table>";

    for (i = 0; i < arr.length; i++) {
        out += "<tr><td>" +
            arr[i];
    }
    out += "</table>";
    document.getElementById("id01").innerHTML = out;
}