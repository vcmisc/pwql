function question1(){
    var f = parseFloat(document.getElementById("q1.v1").value);
    var m = parseFloat(document.getElementById("q1.v2").value);

    document.getElementById("q1.a").innerHTML = (f * (1.0 + 1.0 / m)) + " m";
    document.getElementById("q1.b").innerHTML = (f * (1.0 - 1.0 / m)) + " m";
}

function question2(){
    var f = parseFloat(document.getElementById("q2.v1").value);
    var m1 = parseFloat(document.getElementById("q2.v2").value);

    document.getElementById("q2.a").innerHTML = (-(f/((m1/100)))+f) + " cm";
}

function question3(){
    var d1 = parseFloat(document.getElementById("q3.v1").value);
    var f1 = parseFloat(document.getElementById("q3.v2").value);
    var f2 = parseFloat(document.getElementById("q3.v3").value);
    var d2 = parseFloat(document.getElementById("q3.v4").value);

    var id = 1.0 / ((1.0 / f1) - (1.0 / d1));
    var od2 = d2 - id;

    var ans1 = 1.0 / ((1.0 / f2) - (1.0 / od2));

    document.getElementById("q3.a").innerHTML = (ans1) + " cm";
    document.getElementById("q3.b").innerHTML = ((-id/d1)*(-ans1/od2));
}

function question4(){
    var do1 = parseFloat(document.getElementById("q4.v1").value);
    var f1 = parseFloat(document.getElementById("q4.v2").value);
    var f2 = parseFloat(document.getElementById("q4.v3").value);
    var d = parseFloat(document.getElementById("q4.v4").value);

    var di1 = 1/((1/f1)-(1/do1));
    var do2 = d-di1;
    var di2 = 1/((1/f2)-(1/do2));

    document.getElementById("q4.a").innerHTML = (1/((1/f2)-(1/do2))) + " cm";
    document.getElementById("q4.b").innerHTML = ((-di1/do1)*(-di2/do2));
}

function question5(){
    var d = parseFloat(document.getElementById("q5.v1").value);
    var p1 = parseFloat(document.getElementById("q5.v2").value);

    var q1 = Math.pow((1/10 - 1/p1), -1);
    var p2 = d - q1;
    var q2 = Math.pow((1/(-15) - 1/p2),-1);

    document.getElementById("q5.a").innerHTML = (q2) + " cm";
    document.getElementById("q5.b").innerHTML = ((-q2/p2)*(-q1/p1)) + " x";
}