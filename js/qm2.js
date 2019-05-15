function question1(){
    var v = parseFloat(document.getElementById("q1.v1").value);

    document.getElementById("q1.a").innerHTML = "((6.626E-34)/sqrt(2*9.11E-31*(" + v + "*1.6E-19)))*1E9 nm";
}

function question2(){
    var m = parseFloat(document.getElementById("q2.v1").value);
    var speed = parseFloat(document.getElementById("q2.v1").value);
    var angle = parseFloat(document.getElementById("q2.v1").value);

    document.getElementById("q2.a").innerHTML = "((6.626E-34)/(" + m + "/1000*" + speed +"))/sin(" + angle + "pi/180) m";
    document.getElementById("q2.b").innerHTML = "no";
}

function question3(){
    var lambda = parseFloat(document.getElementById("q3.v1").value);

    document.getElementById("q3.a").innerHTML = "(6.626E-34)/(" + lambda + "E-9*9.11E-31) m/s";
}

function question4(){
    var ke = parseFloat(document.getElementById("q4.v1").value);

    document.getElementById("q4.a").innerHTML =  "1E9*(6.626E-34)/sqrt(2*1.6601E-27*" + ke + "*1.6E-19) nm";

}

function question5(){
    var lambda = parseFloat(document.getElementById("q5.v1").value);
    document.getElementById("q5.a").innerHTML =  "(6.626E-34)^2/(2*1.67E-27*1.6E-19*(" + lambda + "E-12)^2) V";
}

function question6(){
    var ex = Math.abs(parseFloat(document.getElementById("q6.v1").value));

    document.getElementById("q6.a").innerHTML = "(6.626E-34)/1E-" + ex + " j";
    document.getElementById("q6.b").innerHTML = "1/1E-" + ex + " Hz";
}

function question7(){
    var ev = parseFloat(document.getElementById("q7.v1").value);
    var s = parseFloat(document.getElementById("q7.v2").value);

    document.getElementById("q7.a").innerHTML = "(" + ev + "*1.6E-19)/(6.626E-34) Hz";
    document.getElementById("q7.b").innerHTML = "1/(" + s + "E-6) Hz";

}