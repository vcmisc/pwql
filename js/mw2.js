function question1(){
    var amplitude = parseFloat(document.getElementById("q1.v1").value);
    var k = parseFloat(document.getElementById("q1.v2").value);
    var w = parseFloat(document.getElementById("q1.v3").value);
    var x = parseFloat(document.getElementById("q1.v4").value);
    var time = parseFloat(document.getElementById("q1.v5").value);

    document.getElementById("q1.a").innerHTML = (w / (2*Math.PI)) + " Hz";
    document.getElementById("q1.b").innerHTML = (w/k) + " m/s";
    document.getElementById("q1.c").innerHTML = (amplitude) + " m";
    document.getElementById("q1.d").innerHTML = (amplitude*w*Math.sin(k*x / 100.0 - w*time +0.1)) + " m/s";
    document.getElementById("q1.e").innerHTML = (w*w * amplitude) + " m/s^2";
}

function question2(){
    var lambda = parseFloat(document.getElementById("q2.v1").value);
    var T = parseFloat(document.getElementById("q2.v2").value);
    var A = parseFloat(document.getElementById("q2.v3").value);
    var y = parseFloat(document.getElementById("q2.v4").value);

    document.getElementById("q2.a").innerHTML = "\\(y(x,t) = " + (A) + " sin( " + (200*(Math.PI/lambda)).toFixed(6) + " x+" + (2*(Math.PI/T)).toFixed(6) + " t + " + (Math.asin(y/A)).toFixed(6) + " ) m\\)";
    MathJax.Hub.Queue(["Typeset",MathJax.Hub,"q2.a"]);
}

function question3(){
    var tension = parseFloat(document.getElementById("q3.v1").value);
    var A = parseFloat(document.getElementById("q3.v2").value);
    var k = parseFloat(document.getElementById("q3.v3").value);
    var w = parseFloat(document.getElementById("q3.v4").value);

    document.getElementById("q3.a").innerHTML = (1000*tension*(k*k)/(w*w)) + " g/m";
    document.getElementById("q3.b").innerHTML = (A*w) + " m/s";
}

function question4(){
    var f = parseFloat(document.getElementById("q4.v1").value);
    var v = parseFloat(document.getElementById("q4.v2").value);
    var phase = parseFloat(document.getElementById("q4.v3").value);
    var dt = parseFloat(document.getElementById("q4.v4").value);
    
    document.getElementById("q4.a").innerHTML = ((phase*v)/(2*Math.PI*f)) + " m";
    document.getElementById("q4.b").innerHTML = ((2*Math.PI*((dt/1000)*v))/(v/f)) + " rad";
}

function question5(){
    var a = parseFloat(document.getElementById("q5.v1").value);
    var k = parseFloat(document.getElementById("q5.v2").value);
    var w = parseFloat(document.getElementById("q5.v3").value);
    var x = parseFloat(document.getElementById("q5.v4").value);
    
    document.getElementById("q5.a").innerHTML = "\\(y(x,t) = " + (a*2) + " cos( " + (w) + " t)sin( " + (k) + " x)\\)";
    MathJax.Hub.Queue(["Typeset",MathJax.Hub,"q5.a"]);

    document.getElementById("q5.b").innerHTML = (Math.abs(2*a*Math.sin(k*x))) + " m";
    document.getElementById("q5.c").innerHTML = (Math.PI/(2*k)) + " m";
}

function question6(){
    var v = parseFloat(document.getElementById("q6.v1").value);
    var a = parseFloat(document.getElementById("q6.v2").value);
    var f = parseFloat(document.getElementById("q6.v3").value);
    var distance = parseFloat(document.getElementById("q6.v4").value);

    document.getElementById("q6.a").innerHTML = "\\(y(x,t) = " + (2*a/100) + " cos( " + (2*Math.PI*f) + " x)sin( " + (2*Math.PI*f/v) + " t) m\\)";
    MathJax.Hub.Queue(["Typeset",MathJax.Hub,"q6.a"]);

    document.getElementById("q6.b").innerHTML = (Math.PI/(2*Math.PI*f/v)) + " m";
    document.getElementById("q6.c").innerHTML = (2*a/100*Math.sin(((2*Math.PI*f)/v)*distance)) + " m";
}

function question7(){
    var f = parseFloat(document.getElementById("q7.v1").value);
    var mew = parseFloat(document.getElementById("q7.v2").value);
    var m = parseFloat(document.getElementById("q7.v3").value);
    var n = parseFloat(document.getElementById("q7.v4").value);

    document.getElementById("q7.a").innerHTML = ((Math.sqrt((m*9.8)/(mew)))/(2*f)) + " m";
    document.getElementById("q7.b").innerHTML = (n*(Math.sqrt((m*9.8)/(mew)))/(2*f)) + " m";
}

function question8(){
    var stringlength = parseFloat(document.getElementById("q8.v1").value);
    var stringmass = parseFloat(document.getElementById("q8.v2").value);
    var maxx = parseFloat(document.getElementById("q8.v3").value);
    var speed = parseFloat(document.getElementById("q8.v4").value);

    var ans1 = (2*stringlength/300);
    var ans2 = (300*speed/(2*stringlength));

    document.getElementById("q8.a").innerHTML = "Transverse waves on this string have a wavelength of " + ans1.toFixed(6) + " m and a frequency of " + ans2.toFixed(6) + " Hz";
    document.getElementById("q8.b").innerHTML = "\\(y(x,t) = " + (maxx) + " cos( " + (2*Math.PI*ans2) + " t)sin(" + (2*Math.PI/ans1) + " x) mm\\)";
    document.getElementById("q8.c").innerHTML = "\\(y_{+x}(x, t) = " + (maxx/2) + " sin( " + (2*Math.PI/ans1) + " x- " + (2*Math.PI*ans2) + " t) mm";
    document.getElementById("q8.d").innerHTML = "\\(y_{-x}(x, t) = " + (maxx/2) + " sin( " + (2*Math.PI/ans1) + " x- " + (2*Math.PI*ans2) + " t) mm";
}

function question9(){
    var ffrequency = parseFloat(document.getElementById("q9.v1").value);
    var tension = parseFloat(document.getElementById("q9.v2").value);
    var note = parseFloat(document.getElementById("q9.v3").value);

    document.getElementById("q9.a").innerHTML = (tension/Math.pow(ffrequency/note, 2)) + " N";
}

function question10(){
    var T = parseFloat(document.getElementById("q10.v1").value);
    var mu = parseFloat(document.getElementById("q10.v2").value);
    var lambda = parseFloat(document.getElementById("q10.v3").value);

    document.getElementById("q10.a").innerHTML = (Math.sqrt(T/(mu/100000))) + " m/s";
    document.getElementById("q10.b").innerHTML = (mu/T*Math.pow(lambda/2/Math.PI, 2)*9.8/100) + " mm";
}
