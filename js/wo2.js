function question1(){
    var y = parseFloat(document.getElementById("q1.v1").value);
    var L = parseFloat(document.getElementById("q1.v2").value);
    var lambda = parseFloat(document.getElementById("q1.v3").value);

    document.getElementById("q1.a").innerHTML = ((lambda*L)/(y) * 1e-4) + " nm";
}

function question2(){
    var d = parseFloat(document.getElementById("q2.v1").value);
    var a = parseFloat(document.getElementById("q2.v2").value);

    document.getElementById("q2.a").innerHTML = (d/a) +"";
    document.getElementById("q2.b").innerHTML = (2*((d/a)-1)+1)+"";
}

function question3(){
    var wavelength = parseFloat(document.getElementById("q3.v1").value);
    var angle = parseFloat(document.getElementById("q3.v2").value);
    var wavelength2 = parseFloat(document.getElementById("q3.v3").value);

    document.getElementById("q3.a").innerHTML = (Math.asin(((2*wavelength2)*(Math.sin(Math.PI * angle / 180)))/(wavelength)) * 180 / Math.PI) + " degress";
}

function question4(){
    var width = parseFloat(document.getElementById("q4.v1").value);
    var wavelength = parseFloat(document.getElementById("q4.v2").value);
    var angle = parseFloat(document.getElementById("q4.v3").value);
    var m = parseFloat(document.getElementById("q4.v4").value);

    document.getElementById("q4.a").innerHTML = ((10000000)*width*Math.sin((Math.PI*angle)/180))/(m*wavelength) + " lines";
}

function question5(){
    var d = parseFloat(document.getElementById("q5.v1").value);
    var diam = parseFloat(document.getElementById("q5.v2").value)/1000;
    var wavelength = parseFloat(document.getElementById("q5.v3").value)*1E-9;

    document.getElementById("q5.a").innerHTML = ((1.22*wavelength/diam)*d) + " cm";
}

function question6(){
    var diam = parseFloat(document.getElementById("q6.v1").value)/100;
    var d = parseFloat(document.getElementById("q6.v2").value);
    var wavelength = parseFloat(document.getElementById("q6.v3").value)/1000000000;

    var theta = 1.22*wavelength/diam;

    document.getElementById("q6.a").innerHTML = ((d/2)/Math.tan(theta/2))+ " m";
}

function question7(){
    var lambda1 = parseFloat(document.getElementById("q7.v1").value);
    var lambda2 = parseFloat(document.getElementById("q7.v2").value);
    var lines = parseFloat(document.getElementById("q7.v3").value);

    var m = parseInt(lambda1/(lambda2-lambda1))+1;
    var d = (1E-3)/lines;
    var mblue = parseInt(d/(lambda1*1E-9));
    var mred = parseInt(d/(lambda2*1E-9));

    document.getElementById("q7.a").innerHTML = "\\([\\theta_{" + lambda1 + " nm}]_{higher\\ order}<[\\theta _{" + lambda2 + " nm}]_{lower\\ order}\\)";
    document.getElementById("q7.b").innerHTML = m + "";
    document.getElementById("q7.c").innerHTML = mred + "";
    document.getElementById("q7.d").innerHTML = (Math.asin(lambda1*1E-9*mblue/d)*180/Math.PI) + "";

    MathJax.Hub.Queue(["Typeset",MathJax.Hub,"q7.a"]);
}