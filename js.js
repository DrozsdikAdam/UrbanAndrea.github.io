//var showed = false;
//var div = document.getElementById("container");
//function Show()
//    {
//        showed = !showed;
//        console.log(showed);
//        if(showed===true) div.classList.value = "text-center btn btn-primary px-3 d-block"
//        else div.classList.value = "text-center btn btn-primary d-sm-none px-3 d-block"
//    }

    var showed = false;
    
    function Show() {
        showed = !showed;
        console.log(showed);
        if (showed === true) {
            var count = 1;
            if(count<7)
            setInterval(()=>{
                document.getElementById("p"+count).classList = "d-sm-block d-block";
                count++;
            },500);
            
            document.getElementById("button").innerHTML = "Rövidebben";
        } 
        else {
            var count = 6;
            if(count>0)
            setInterval(()=>{
                document.getElementById("p"+count).classList = "d-sm-block d-none";
                count--;
            },500);
            
            document.getElementById("button").innerHTML = "Bővebben";
        }
    }

    //abony cegléd martfű kecskemét nagykőrős szolnok törökszentmiklós
