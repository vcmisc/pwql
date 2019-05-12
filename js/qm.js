function question1(){
    var kw = parseFloat(document.getElementById("q1.v1").value);
    var mhz = parseFloat(document.getElementById("q1.v2").value);

    document.getElementById("q1.a").innerHTML = "("+kw+"*1E3/"+mhz+"*1E6)/(6.63E-34) photons/second";
}

function question2(){
    var f = parseFloat(document.getElementById("q2.v1").value);

    document.getElementById("q2.a").innerHTML = "(3E8/"+f+"*1E6)) m";
    document.getElementById("q2.b").innerHTML = "(6.63E-34)*("+ f + "E6) Joules";
    document.getElementById("q2.c").innerHTML = "(6.63E-34)*("+ f + "E6)*(6.242E18) eV";
}

function question3(){
    var times = parseFloat(document.getElementById("q3.v1").value);

    document.getElementById("q3.a").innerHTML = "((" + times + "*(0.51E6)/(6.24E18))/(6.63E-34))/1E6 MHz";
    document.getElementById("q3.b").innerHTML = "("+times+"*0.51E6*1.6E-19)/(3E8)^2*3E8 kgm/s";
}

function question4(){
    var z = parseFloat(document.getElementById("q4.v1").value);

    document.getElementById("q4.a").innerHTML =  "-" + z + "^2*13.6 eV";
    document.getElementById("q4.b").innerHTML =  "-" + z + "^2*13.6/2^2 eV";
    document.getElementById("q4.c").innerHTML =  "-" + z + "^2*13.6/3^2 eV";
    document.getElementById("q4.d").innerHTML =  "-" + z + "^2*13.6/4^2 eV";
    document.getElementById("q4.e").innerHTML =  z + "^2*13.6 eV";
    document.getElementById("q4.f").innerHTML = 1E9*(3E8 * 6.626E-34)/(1.6E-19*(13.6*z*z-13.6*z*z/(4*4))) + " nm";
    document.getElementById("q4.g").innerHTML = 1E9*(3E8 * 6.626E-34)/(1.6E-19*(13.6*z*z-13.6*z*z/(3*3))) + " nm";
    document.getElementById("q4.h").innerHTML = 1E9*(3E8 * 6.626E-34)/(1.6E-19*(13.6*z*z-13.6*z*z/(2*2))) + " nm";


}

function question5(){
    var lambda = parseFloat(document.getElementById("q5.v1").value);
    var ke = parseFloat(document.getElementById("q5.v2").value);
    var lambda2 = parseFloat(document.getElementById("q5.v3").value);
    var m1 = document.getElementById("q5.v4").value.toLowerCase();
    var ke2 = parseFloat(document.getElementById("q5.v5").value);
    var m2 = document.getElementById("q5.v6").value.toLowerCase();

    var allwork = [2.14, 2.30, 2.75, 2.90, 2.87, 4.65, 4.26, 5.65];
    var names = ["caesium", "potassium", "sodium", "lithium", "calcium", "copper", "silver", "platinum"];
    var work = (((6.626E-34 * 3E8)/(lambda*1E-9))/(1.6E-19))-ke;

    var cw = allwork.reduce(function(prev, curr) {
        return (Math.abs(curr - work) < Math.abs(prev - work) ? curr : prev);
    });

    var work2 = (((6.626E-34 * 3E8)/(lambda2*1E-9))/(1.6E-19));
    var count = 0;
    allwork.forEach(element => {
        if(element < work2) count++;
    });

    var i1 = names.indexOf(m1);
    var i2 = names.indexOf(m2);

    document.getElementById("q5.a").innerHTML = (allwork.indexOf(cw)+1) + "";
    document.getElementById("q5.b").innerHTML = count + " metals";
    
    if(i1==-1 || i2==-1) document.getElementById("q5.c").innerHTML =  "Invalid metal name.";
    else document.getElementById("q5.c").innerHTML = ke2+allwork[i1]-allwork[i2] + " eV";
}

function question6(){
    var workfunc = parseFloat(document.getElementById("q6.v4").value);
    var lambda = parseFloat(document.getElementById("q6.v1").value);
    var w = parseFloat(document.getElementById("q6.v2").value);
    var eff = parseFloat(document.getElementById("q6.v3").value);

    var energy = ((6.626E-34 * 3E8)/(lambda*1E-9))/1.6E-19;
    var curr = ((((w*1E-3 * lambda*1E-9)/(6.626E-34 * 3E8))*(eff/100))*(1.6E-19)*1E9);

    document.getElementById("q6.a").innerHTML = ((w*1E-3 * lambda*1E-9)/(6.626E-34 * 3E8)) + " photons/s";
    document.getElementById("q6.b").innerHTML = (workfunc > energy) ? 0 : curr + " nA";
}

function question7(){
    var sp1 = parseFloat(document.getElementById("q7.v1").value);
    var wl1 = parseFloat(document.getElementById("q7.v2").value);

    document.getElementById("q7.a").innerHTML = "6.626 x10^-34 Js";
    document.getElementById("q7.b").innerHTML = ((6.626E-34 * 3E8)/(wl1*1E-9))/1.6E-19-sp1 + " eV";
    document.getElementById("q7.c").innerHTML = 1E9*(6.626E-34 * 3E8)/((((6.626E-34 * 3E8)/(wl1*1E-9))/1.6E-19-sp1)*1.6E-19) + " nm";

}
