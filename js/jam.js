tday  =new Array("Minggu","Senin","Selasa","Rab","Kamis","Jumat","Sabtu");
tmonth=new Array("Januari","Febuari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember");
function GetClock(){
d = new Date();
nday   = d.getDay();
ndate  = d.getDate();
nmonth = d.getMonth();
nyear = d.getYear();
nhour  = d.getHours();
nmin   = d.getMinutes();
nsec   = d.getSeconds();
if(nyear<1000) nyear=nyear+1900;
if(nhour ==  0) {ap = " AM";nhour = 12;}
else if(nhour <= 11) {ap = " AM";}
else if(nhour == 12) {ap = " PM";}
else if(nhour >= 13) {ap = " PM";
nhour -= 12;}
if(nmin <= 9) {nmin = "0" +nmin;}
if(nsec <= 9) {nsec = "0" +nsec;}
document.getElementById('clockbox').innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+" "+nhour+":"+nmin+":"+nsec+ap+"";
setTimeout("GetClock()", 1000);}
window.onload=GetClock;
