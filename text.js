

var birthday;
var commingDay;
var start2;
function start1(){

    var month = document.getElementById('Month').value;
    var date = document.getElementById('Date').value;
    var year = document.getElementById('Year').value;
    birthday = (month + " " + date + ", "+ year + " 00:00:00");
    commingDay = new Date(birthday).getTime();
    ready();
}
function ready(){
    start2 = setInterval(countDown, 1000);
}

function countDown(){

   
    let now = new Date().getTime();

    let remainingDay = commingDay - now;
     console.log(now);
     console.log(remainingDay);
     console.log(commingDay);
     
    if(remainingDay > 0){

        let days = Math.floor(remainingDay / (1000 * 60 * 60 * 24));
        if(days < 10){
            days = "0"+days;
        }

        let hours = Math.floor((remainingDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if(hours < 10){
            hours = "0"+hours;
        }

        let minutes = Math.floor((remainingDay % (1000 * 60 * 60)) / (1000 * 60));
        if(minutes < 10){
            minutes = "0"+minutes;
        }

        let seconds = Math.floor((remainingDay % (1000 * 60)) / 1000);
        if(seconds < 10){
            seconds = "0"+seconds;
        }

        let time = days + " : " + hours + " : " + minutes + " : " + seconds;
        

        document.getElementById('countDown').innerHTML = time;
    }
}

