function question1(){
    var v = parseFloat(document.getElementById("q1.v1").value);
    var t = parseFloat(document.getElementById("q1.v2").value);

    document.getElementById("q1.a").innerHTML = (t * (1e-6)/Math.sqrt(1-(v*v))) + " seconds";
    document.getElementById("q1.b").innerHTML = (t*1e-6*v*299000000)/Math.sqrt(1-(v*v)) + " m";
    document.getElementById("q1.c").innerHTML = t*1e-6*v*299000000 + " m";
}

function question2(){
    var v = parseFloat(document.getElementById("q2.v1").value);
    var L = parseFloat(document.getElementById("q2.v2").value);

    var c=2.99*(Math.pow(10,8));

    document.getElementById("q2.a").innerHTML = (L/Math.sqrt(1-(v*v))) +"";
    document.getElementById("q2.b").innerHTML = (L/(v*c))+"";
    document.getElementById("q2.c").innerHTML = ((L/(v*c))/(Math.sqrt(1-(v*v))))+"";
}

function question3(){
    var distance = parseFloat(document.getElementById("q3.v1").value);
    var speed = parseFloat(document.getElementById("q3.v2").value);

    document.getElementById("q3.a").innerHTML = ((distance*1000)/(speed*3*10**8))*(Math.sqrt(1-(speed)**2)) + " s";
    document.getElementById("q3.b").innerHTML = (distance*1000)*(Math.sqrt(1-(speed)**2))/1000 + " km";
}

function question4(){
    var e = parseFloat(document.getElementById("q4.v1").value);
    var eo = parseFloat(document.getElementById("q4.v2").value);

    document.getElementById("q4.a").innerHTML = Math.sqrt(1-1/Math.pow((e/eo),2)) + "";
}

function question5(){
    var e = parseFloat(document.getElementById("q5.v1").value);
    var lo = parseFloat(document.getElementById("q5.v2").value);

    var g = (e*(Math.pow(10,3))/(0.51));
    var l = (lo/g)*1000

    var to = (l/((3*Math.pow(10,8))*Math.sqrt(1-1/(g*g))));

    document.getElementById("q5.a").innerHTML = (l) + " m";
    document.getElementById("q5.b").innerHTML = (1*Math.pow(10,9))*to + " ns";
    document.getElementById("q5.c").innerHTML = (to*g)*(1*Math.pow(10,6)) + " us";
}

function question6(){
    var to = parseFloat(document.getElementById("q6.v1").value);
    var t = parseFloat(document.getElementById("q6.v2").value);
    var mp = parseFloat(document.getElementById("q6.v3").value);

    var g = t/to;
    var speed = Math.sqrt(1-1/(g*g))*(3*Math.pow(10,8));

    //var ke = mp*((9.11e-31))*Math.pow(3e8,2)*(g-1);

    var ke = 195*g*(9.11e-31)*(3e8)*(3e8)-195*(9.11e-31)*(3e8)*(3e8);

    document.getElementById("q6.a").innerHTML = speed + " m/s";
    //document.getElementById("q6.b").innerHTML = (ke/(1.6e-19))/1000000 + " MeV";
}