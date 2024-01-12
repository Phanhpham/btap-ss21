let month=+prompt("nhap thang trong năm");

let date=+prompt("nhap ngày trong tháng");

if (month==1 || month==3 || month==5 || month==7 || month == 8 || month == 10 || month == 12){
    console.log("tháng đó có 31 ngày",month);

}else if(month==4 || month==6 || month==9 || month==11 ){
    console.log("tháng đó có 30 ngày",month);
}else{
    console.log("tháng đó là tháng 2 có 28 ngày");
}

