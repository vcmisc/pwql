function question1(){
    var k = parseFloat(document.getElementById("q1.vk").value);
    var w = parseFloat(document.getElementById("q1.vw").value);
    var a = parseFloat(document.getElementById("q1.va").value);
    var t = parseFloat(document.getElementById("q1.vt").value);

    document.getElementById("q1.a").innerHTML = (k/(w*w)) + " kg";
    document.getElementById("q1.b").innerHTML = (0.5*k*(a*a)) + " J";
    document.getElementById("q1.c").innerHTML = (-Math.acos(Math.sqrt(2/3))+0.8) + " s";
    document.getElementById("q1.d").innerHTML = (-a*(w*w)*Math.cos(w*t-0.8)) + " m/s^2";
}

function question2(){
    var passpoint = parseFloat(document.getElementById("q2.passpoint").value);
    var x = parseFloat(document.getElementById("q2.x").value);
    var cycle = parseFloat(document.getElementById("q2.cycle").value);

    var a = (cycle/4 * 100);
    var b = (2*Math.PI/(2/passpoint));
    var c = (Math.pi-(Math.asin(x/(cycle/4))));

    document.getElementById("q2.a").innerHTML = "x(t) = " + a + " sin( " + b + " t + " + c + " ) cm";
}

function question3(){
    var a = parseFloat(document.getElementById("q3.v1").value) * (Math.PI / 180);
    var w = parseFloat(document.getElementById("q3.v2").value) * (Math.PI / 180);
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

    var ans2 = Math.sqrt((2*9.8*l*(1-Math.cos(theta / 360*2*Math.pi))));

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
    var force = parseFloat(document.getElementById("q6.force").value);
    var angle = parseFloat(document.getElementById("q6.angle").value) * (Math.PI / 180);

    document.getElementById("q6.mass").innerHTML = ((force/Math.sin(angle)) * Math.cos(angle)) / 9.8 + " kg";
    document.getElementById("q6.tension").innerHTML = force/Math.sin(angle) + " N";

}

function question7(){
    var mass1 = parseFloat(document.getElementById("q7.mass1").value);
    var mass2 = parseFloat(document.getElementById("q7.mass2").value);

    document.getElementById("q7.accel").innerHTML = (9.8 * mass1 * Math.sin(30 * (Math.PI / 180)) - 9.8 * mass2 * Math.sin(60 * (Math.PI / 180)))/(mass1 + mass2) + " m/s^2   <- Answer could be the negative/position version of this number.";
    document.getElementById("q7.tension").innerHTML = 9.8 * mass1 * Math.sin(30 * (Math.PI / 180)) - mass1 * (9.8 * mass1 * Math.sin(30 * (Math.PI / 180)) - 9.8 * mass2 * Math.sin(60 * (Math.PI / 180)))/(mass1 + mass2) + " N";
}

function question8(){
    var mass1 = parseFloat(document.getElementById("q8.mass1").value);
    var mass2 = parseFloat(document.getElementById("q8.mass2").value);
    var force = parseFloat(document.getElementById("q8.force").value);
    var ac = (force * Math.cos(20 * (Math.PI / 180)) - 9.8 * mass1 * Math.sin(30 * (Math.PI / 180)))/(mass1 + mass2);
    document.getElementById("q8.accel").innerHTML = ac + " m/s^2  <- Answer could be the negative/position version of this number.";
    document.getElementById("q8.tension").innerHTML = force * Math.cos(20 * (Math.PI / 180)) - 4.0 * ac + " N";
}

function question9(){
    var mass1 = parseFloat(document.getElementById("q9.mass1").value);
    var mass2 = parseFloat(document.getElementById("q9.mass2").value);
    var force = parseFloat(document.getElementById("q9.force").value);

    var ac = (9.8 * mass1 - force * Math.cos(18 * (Math.PI / 180)))/(mass1 + mass2);
    document.getElementById("q9.accel").innerHTML = ac + " m/s^2  <- Answer could be the negative/position version of this number.";
    document.getElementById("q9.tension").innerHTML = mass2 * ac + force * Math.cos(18 * (Math.PI / 180)) + " N";
}

function question9(){
    var mass1 = parseFloat(document.getElementById("q10.mass1").value);
    var mass2 = parseFloat(document.getElementById("q10.mass2").value);
    var force = parseFloat(document.getElementById("q10.force").value);

    var ac = (9.8 * mass1 - force * Math.cos(18 * (Math.PI / 180)))/(mass1 + mass2);
    document.getElementById("q10.accel").innerHTML = ac + " m/s^2  <- Answer could be the negative/position version of this number.";
    document.getElementById("q10.tension").innerHTML = mass2 * ac + force * Math.cos(18 * (Math.PI / 180)) + " N";
}