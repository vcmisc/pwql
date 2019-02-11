function question1(){
    var k = parseFloat(document.getElementById("q1.vk").value);
    var w = parseFloat(document.getElementById("q1.vw").value);
    var a = parseFloat(document.getElementById("q1.va").value);
    var t = parseFloat(document.getElementById("q1.vt").value);

    document.getElementById("q1.a").innerHTML = (k/(w*w)) + " kg";
    document.getElementById("q1.b").innerHTML = (0.5*k*(a*a)) + " J";
    document.getElementById("q1.c").innerHTML = ((-Math.acos(Math.sqrt(2/3))+0.8)/w) + " s";
    document.getElementById("q1.d").innerHTML = (-a*(w*w)*Math.cos(w*t-0.8)) + " m/s^2";
}

function question2(){
    var passpoint = parseFloat(document.getElementById("q2.passpoint").value);
    var x = parseFloat(document.getElementById("q2.x").value);
    var cycle = parseFloat(document.getElementById("q2.cycle").value);

    var a = (cycle/4 * 100);
    var b = (2*Math.PI/(2/passpoint));
    var c = (Math.PI-(Math.asin(x/(cycle/4))));

    document.getElementById("q2.a").innerHTML = "x(t) = " + a + " sin( " + b + " t + " + c + " ) cm";
}

function question3(){
    var a = parseFloat(document.getElementById("q3.v1").value);
    var w = parseFloat(document.getElementById("q3.v2").value);
    var phi = parseFloat(document.getElementById("q3.v3").value);
    var x2 = parseFloat(document.getElementById("q3.v4").value);
    var x1 = parseFloat(document.getElementById("q3.v5").value);

    document.getElementById("q3.a").innerHTML = ((Math.asin(x2/a) + phi)/w) + " s";
    document.getElementById("q3.b").innerHTML = (-(w*w) * (x1)) + " m/s^2";
}

function question4(){
    var l = parseFloat(document.getElementById("q4.v1").value);
    var theta = parseInt(document.getElementById("q4.v2").value);
    var mass = parseInt(document.getElementById("q4.v3").value);

    var ans2 = Math.sqrt((2*9.8*l*(1-Math.cos(theta / 360*2*Math.PI))));

    document.getElementById("q4.a").innerHTML = (2*Math.PI/(Math.sqrt(9.8/l))) + " s";
    document.getElementById("q4.b").innerHTML = ans2 + " m/s";
    document.getElementById("q4.c").innerHTML = (.5*mass/1000*ans2*ans2) + " J";
}

function question5(){
    var T = parseFloat(document.getElementById("q5.v1").value);

    document.getElementById("q5.a").innerHTML = (T*T*9.81/(4*3.14*3.14)) + " m";
    document.getElementById("q5.b").innerHTML = (T * (Math.sqrt(6))) + " s";
}

function question6(){
    var A = parseFloat(document.getElementById("q6.v1").value);
    var T = parseFloat(document.getElementById("q6.v2").value);

    document.getElementById("q6.a").innerHTML = 
    "First position: " + (Math.sqrt(3)*A/2) + " m         First time: " + T/12 + " s </br>" + 
    "Second position: " + (-Math.sqrt(3)*A/2) + " m         Second time: " + 5*T/12 + " s </br>" + 
    "Third position: " + (-Math.sqrt(3)*A/2) + " m         Third time: " + 7*T/12 + " s </br>" +
    "Fourth position: " + (Math.sqrt(3)*A/2) + " m         Fourth time: " + 11*T/12 + " s </br>";

    document.getElementById("q6.b").innerHTML =
    "First position: " + (A/2) + " m         First time: " + T/6 + " s </br>" + 
    "Second position: " + (-A/2) + " m         Second time: " + T/3 + " s </br>" + 
    "Third position: " + (-A/2) + " m         Third time: " + 2*T/3 + " s </br>" +
    "Fourth position: " + (A/2) + " m         Fourth time: " + 5*T/6 + " s </br>";
}

function question7(){
    var m = parseFloat(document.getElementById("q7.v1").value)/1000;
    var k = parseFloat(document.getElementById("q7.v2").value);

    document.getElementById("q7.a").innerHTML = (19.6*(m)/k) + " m";
    document.getElementById("q7.b").innerHTML = (Math.PI*Math.sqrt(m/k)) + " s";
}

function question8(){
    var m = parseFloat(document.getElementById("q8.v1").value)/1000;
    var x = parseFloat(document.getElementById("q8.v2").value)/100;
    var v = parseFloat(document.getElementById("q8.v3").value)/100;

    var w = 3.14159 * v/x;

    document.getElementById("q8.a").innerHTML = w + " s^-1";
    document.getElementById("q8.b").innerHTML = w*w*x*m/2 + " N";
    document.getElementById("q8.c").innerHTML = w*x/2 + " m/s";
}

function question9(){
    var m = parseFloat(document.getElementById("q9.v1").value)/1000;
    var k = parseFloat(document.getElementById("q9.v2").value);
    var A = parseFloat(document.getElementById("q9.v3").value);

    var w = Math.sqrt(k/m);
    var T = 2*Math.PI/w;
    var t = Math.asin(Math.sqrt(2/3))/w;

    var ans = A*Math.sin(w*t)/100
    
    document.getElementById("q9.a").innerHTML = ans + "m " + t + "s ";
    document.getElementById("q9.b").innerHTML = ans + "m " + (T/2 - t) + "s ";
    document.getElementById("q9.c").innerHTML = (-ans) + "m " + (T/2 + t) + "s ";
    document.getElementById("q9.d").innerHTML = (-ans) + "m " + (T - t) + "s ";

}

function question10(){
    var f1 = parseFloat(document.getElementById("q10.v1").value);
    var m2 = parseFloat(document.getElementById("q10.v2").value)/1000;
    var f2 = parseFloat(document.getElementById("q10.v3").value);

    var m1 = f2*f2*m2/(f1*f1-f2*f2);

    document.getElementById("q10.a").innerHTML = m1 + " kg";
    document.getElementById("q10.b").innerHTML = (4*3.14*3.14*f1*f1*m1) + " N/m";
}