function clock(){
    let date=new Date();
    let year=date.getFullYear();
    let month = date.getMonth();
    let dayNumber =date.getUTCDate();
    let day =date.getUTCDay();
    let hours =date.getHours();
    let minutes =date.getMinutes();
    let seconds =date.getSeconds();


//Two-Digits Time Format
if (hours<=9) {
    document.getElementById("hours").innerHTML="0"+hours + " :";
}
else{
    document.getElementById("hours").innerHTML=hours + " :";
}
if (minutes<=9) {
    document.getElementById("minutes").innerHTML="0"+minutes + " :";}
else{
    document.getElementById("minutes").innerHTML=minutes + " :";}
if (seconds<=9) {
    document.getElementById("seconds").innerHTML="0"+seconds;
}
else{
    document.getElementById("seconds").innerHTML=seconds;
}



//Month Name
if (month==0) {
    var displayedMonth="January"
} if (month==1) {
    var displayedMonth="Febuary"

} if (month==2) {
    var displayedMonth="March"

} if (month==3) {
    var displayedMonth="April"

} if (month==4) {
    var displayedMonth="May"

} if (month==5) {
    var displayedMonth="June"

} if (month==6) {
    var displayedMonth="July"

} if (month==7) {
    var displayedMonth="August"

} if (month==8) {
    var displayedMonth="September"

} if (month==9) {
    var displayedMonth="October"

} if (month==10) {
    var displayedMonth="November"

} if (month==11) {
    var displayedMonth="December"

} 
  

//Day Name
if (day==1) {
    var displayedDay="Monday"
}if (day==2) {
    var displayedDay="Tuesday"
}if (day==3) {
    var displayedDay="Wednesday"
}if (day==4) {
    var displayedDay="Thursday"
}if (day==5) {
    var displayedDay="Friday"
}if (day==6) {
    var displayedDay="Saturday"
}if (day==7) {
    var displayedDay="Sunday"
}


//Date Suufix
let dateSuffix=dayNumber%10;
if (dateSuffix==1) {
    var dateSuffixText='st';
    
}
if (dateSuffix==2) {
    var dateSuffixText='nd';

}
if (dateSuffix==3) {
    var dateSuffixText='rd';
    
}
if (dateSuffix>=4) {
    var dateSuffixText='th';
    
}
if (dateSuffix==0) {
    var dateSuffixText='th';
   
}

//Final Date Result
document.getElementById("date").innerHTML="Today is "+displayedDay+", "+displayedMonth+" "+dayNumber+dateSuffixText+", "+year+".";
};
clock();
setInterval(clock,1000);