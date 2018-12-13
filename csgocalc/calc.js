mid = 0;
high = 0;
low = 0;
first = true;
function update(){
    document.getElementById("highsens").innerHTML = "Higher Sensitivity: " + high;
    document.getElementById("lowsens").innerHTML = "Lower Sensitivity: " + low;
}

function getstart(){
    mid = window.prompt("Enter your 360 sens", "2");
    high = mid * 1.5;
    low = mid / 2;
    update();
}

function increase(){

    if(first == true){
        low = mid;
        mid = high;           
        high *= 1.5;
        first = false;
        update();
    }
    else
    {
        low = mid;  
        mid = (parseFloat(high) + parseFloat(mid)) / 2;                          
        update();
    }
   
}

function lower(){

    if(first == true)
    {
        high = mid;
        mid = low;
        low /= 2;
        first = false;
        update();
    }
    else
    {
        high = mid;
        mid = (parseFloat(low) + parseFloat(mid)) / 2;                                
        update();
    }              
}