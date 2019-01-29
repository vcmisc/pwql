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
    var angle2 = parseFloat(document.getElementById("q3.angle1").value) * (Math.PI / 180);
    var angle1 = parseFloat(document.getElementById("q3.angle2").value) * (Math.PI / 180);
    var mass = parseFloat(document.getElementById("q3.mass").value);

    var t1 = (mass * 9.8)/(Math.sin(angle1) + (Math.cos(angle1)/Math.cos(angle2)) * Math.sin(angle2));

    document.getElementById("q3.tension").innerHTML = ((t1 * Math.cos(angle1))/Math.cos(angle2)).toString() + " N";
}

function question4(){
    var tmass = parseFloat(document.getElementById("q4.tmass").value);
    var daccel = parseFloat(document.getElementById("q4.daccel").value);
    var uaccel = parseFloat(document.getElementById("q4.uaccel").value);

    var uplift = tmass * 9.8 - tmass * daccel;
    var n = 9.8 + uaccel;

    document.getElementById("q4.mass").innerHTML = (-(uplift - tmass * n)/ (n)).toString() + " kg";
}

function question5(){
    var mass = parseFloat(document.getElementById("q5.mass").value);
    var force = parseFloat(document.getElementById("q5.force").value);
    var angle = parseFloat(document.getElementById("q5.angle").value) * (Math.PI / 180);
    var time = parseFloat(document.getElementById("q5.time").value);

    document.getElementById("q5.speed").innerHTML = (force * Math.cos(angle)/mass) * time + " m/s";
    document.getElementById("q5.magnitude").innerHTML = mass * 9.8 - force * Math.sin(angle) + " N";
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