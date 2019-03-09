function question1(){
    var f = parseFloat(document.getElementById("q1.v1").value);
    var v = parseFloat(document.getElementById("q1.v2").value);

    document.getElementById("q1.a").innerHTML = (f*(343/(343-(v/3.6)))-f*(343/(343+(v/3.6)))) + " Hz";
    document.getElementById("q1.b").innerHTML = 0 + " Hz";

}

function question2(){
    var f1 = parseFloat(document.getElementById("q2.v1").value);
    var f2 = parseFloat(document.getElementById("q2.v2").value);

    var ans1 = (343*(1.0 - f1 / f2));

    document.getElementById("q2.a").innerHTML = ans1 + " m/s";
    document.getElementById("q2.b").innerHTML = (343 / (343 + ans1) * f1) + " Hz";
}

function question3(){
    var v = parseFloat(document.getElementById("q3.v1").value);
    var f = parseFloat(document.getElementById("q3.v2").value);

    document.getElementById("q3.a").innerHTML = ((340+v)/(340-v)*f) + " Hz";
}

function question4(){
    var vs = parseFloat(document.getElementById("q4.v1").value);
    var vo = parseInt(document.getElementById("q4.v2").value);
    var fo = parseInt(document.getElementById("q4.v3").value);

    document.getElementById("q4.a").innerHTML = ((((340-vo)/(340-vs))-((340+vo)/(340+vs)))*fo) + " Hz";
}

function question5(){
    var f = parseFloat(document.getElementById("q5.v1").value);
    var T = parseFloat(document.getElementById("q5.v2").value);
    var dif = parseFloat(document.getElementById("q5.v3").value);

    document.getElementById("q5.a").innerHTML = (T * ( f*f / ( Math.pow((f - dif),2) ))) + " N";
}

function question6(){
    var f = parseFloat(document.getElementById("q6.v1").value);

    document.getElementById("q6.a").innerHTML = ((1/4)*(340/f))+ " m";
    document.getElementById("q6.b").innerHTML = ((3/4)*(340/f)) + " m";
}

function question7(){
    var slen = parseFloat(document.getElementById("q7.v1").value)/100;
    var mew = parseFloat(document.getElementById("q7.v2").value)/1000;
    var plen = parseFloat(document.getElementById("q7.v3").value);

    var f = 340/(4*plen/9);

    document.getElementById("q7.a").innerHTML = (mew*Math.pow(slen*f,2)) + " N";
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
    document.getElementById("q8.c").innerHTML = f3 + " Hz    " + ((340+v2)/f3) + " m";
}

function question9(){
    var f1 = parseFloat(document.getElementById("q9.v1").value);
    var f2 = parseFloat(document.getElementById("q9.v2").value);

    var speed = (340*(f1-f2)/(f1+f2));

    document.getElementById("q9.a").innerHTML = speed + " m/s";
    document.getElementById("q9.b").innerHTML = (f1 * (340-speed)/340) + " Hz";
}