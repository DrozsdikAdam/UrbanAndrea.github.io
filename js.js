    var showed = false;
    
    function Show() {
        showed = !showed;
        console.log(showed);
        if (showed === true) {
            var count = 1;
            if(count<6)
            setInterval(()=>{
                document.getElementById("p"+count).classList = "d-sm-block d-block";
                count++;
            },500);
            
            document.getElementById("button").innerHTML = "Rövidebben";
        } 
        else {
            var count = 5;
            if(count>0)
            setInterval(()=>{
                document.getElementById("p"+count).classList = "d-sm-block d-none";
                count--;
            },500);
            
            document.getElementById("button").innerHTML = "Bővebben";
        }
    }

