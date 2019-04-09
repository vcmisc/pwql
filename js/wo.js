function question1(){
    var L = parseFloat(document.getElementById("q1.v1").value);
    var lambda = parseFloat(document.getElementById("q1.v2").value);
    var h = parseFloat(document.getElementById("q1.v3").value);

    document.getElementById("q1.a").innerHTML = (0.5*lambda/1000000000)/Math.sin(Math.tan(h/(1000*L))) + " m";
    document.getElementById("q1.b").innerHTML = (lambda/1000000000)/Math.sin(Math.tan(h/(1000*L))) + " m";

}

function question2(){
    var f1 = parseFloat(document.getElementById("q2.v1").value);
    var f2 = parseFloat(document.getElementById("q2.v2").value);

    var ans1 = (343*(1.0 - f1 / f2));

    document.getElementById("q2.a").innerHTML = ans1 + " m/s";
    document.getElementById("q2.b").innerHTML = (343 / (343 + ans1) * f1) + " Hz";
}

function question2(){
    var d = parseFloat(document.getElementById("q2.v1").value);
    var m = parseFloat(document.getElementById("q2.v2").value);
    var theta = parseFloat(document.getElementById("q2.v3").value);

    document.getElementById("q2.a").innerHTML = ((d/(1000*(m+0.5)))*Math.sin(Math.PI*theta/180) * 1e9) + " nm";
}

function question3(){
    var d1 = parseFloat(document.getElementById("q3.v1").value);
    var d2 = parseInt(document.getElementById("q3.v2").value);
    var vs = parseInt(document.getElementById("q3.v3").value);

    document.getElementById("q3.a").innerHTML = vs/(Math.sqrt((d1*d1)+(d2*d2))-d2) + " Hz";
    document.getElementById("q3.b").innerHTML = (vs/(2*(Math.sqrt((d1*d1)+(d2*d2))-d2))) + " Hz";
}

function question4(){
    var lambda = parseFloat(document.getElementById("q4.v1").value);
    var d = parseFloat(document.getElementById("q4.v2").value);
    var L = parseFloat(document.getElementById("q4.v3").value);
    var m1 = parseFloat(document.getElementById("q4.v4").value);
    var m2 = parseFloat(document.getElementById("q4.v5").value);

    document.getElementById("q4.a").innerHTML = (((m2-m1)*1000*L*lambda*1e-9)/d) + " m";
}

function question5(){
    var n = parseFloat(document.getElementById("q5.v1").value);
    var t = parseFloat(document.getElementById("q5.v2").value);

    var d = t*100;

    document.getElementById("q5.a").innerHTML = (n*2*d/3.5) + " nm";
    document.getElementById("q5.b").innerHTML = (n*2*d/4.5) + " nm";
    document.getElementById("q5.c").innerHTML = (n*2*d/5.5) + " nm";
}

function question6(){
    var lambda = parseFloat(document.getElementById("q6.v1").value);
    var d = parseFloat(document.getElementById("q6.v2").value);

    var ans1 = lambda * 1.33 / 1.5 / 2;

    document.getElementById("q6.a").innerHTML = (ans1)+ " nm";
    document.getElementById("q6.b").innerHTML = (ans1/1000000/d) + " rad";
}

function question7(){
    var thickness = parseFloat(document.getElementById("q7.v1").value);

    document.getElementById("q7.a").innerHTML = ((2*thickness)/2*1.22) + " nm";
    document.getElementById("q7.b").innerHTML = ((2*thickness)/2.5*1.22) + " nm";
}

function question8(){
    var fo = parseFloat(document.getElementById("q8.v1").value);
    var v1 = parseFloat(document.getElementById("q8.v2").value);
    var v3 = parseFloat(document.getElementById("q8.v3").value);

    var f1 = ((340)/(340-v1))*fo;
    var f2 = ((340+v1)/(340))*fo;
    var f3 = ((340+v3)/(340-v3))*fo;

    document.getElementById("q8.a").innerHTML = f1 + " Hz    " + (340/f1) + " m";
    document.getElementById("q8.b").innerHTML = f2 + " Hz    " + ((340+v1)/f2) + " m";
    document.getElementById("q8.c").innerHTML = f3 + " Hz    " + ((340+v3)/f3) + " m";
}