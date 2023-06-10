
let fistvalue = "";
let lastvalue = "";

document.getElementById("celer").onclick = function () {
    //window.location.reload(true)
    fistvalue = "";
    lastvalue = "";
    document.getElementById("fist").value = "";
    document.getElementById("last").value = "";
    document.getElementById("displayans").value = "";
};

while (fistvalue == "" && lastvalue == "") {
    fistvalue = +prompt(" fist value");
    lastvalue = +prompt(" last value");
}
document.getElementById("fist").value = fistvalue;
document.getElementById("last").value = lastvalue;
if (fistvalue == "") {
    document.getElementById("displayans").value = "enter fist value";
    document.getElementById("fist").value = undefined;
}
if (lastvalue == "") {
    document.getElementById("displayans").value = "enter last valeu";
    document.getElementById("last").value = undefined;
}

document.getElementById("plus").onclick = function () {
    document.getElementById("fist").value = fistvalue;
    document.getElementById("last").value = lastvalue;
    document.getElementById("displayans").value = fistvalue + lastvalue;
};
document.getElementById("mins").onclick = function () {
    document.getElementById("fist").value = fistvalue;
    document.getElementById("last").value = lastvalue;
    document.getElementById("displayans").value = fistvalue - lastvalue;
};
document.getElementById("int").onclick = function () {
    document.getElementById("fist").value = fistvalue;
    document.getElementById("last").value = lastvalue;
    document.getElementById("displayans").value = fistvalue * lastvalue;
};
document.getElementById("divad").onclick = function () {
    document.getElementById("fist").value = fistvalue;
    document.getElementById("last").value = lastvalue;
    document.getElementById("displayans").value = fistvalue / lastvalue;
};

document.getElementById("refresh").onclick =function(){
    window.location.reload();
}



