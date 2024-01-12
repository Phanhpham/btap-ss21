let number=+prompt("nhap vao số bất kỳ");

if(number%2 === 0 && number>0){
    console.log("đây là số chẵn",number);

}else if(number % 2!==0 && number>0){
    console.log("đây là số lẻ",number);

}else{
    console.log("không hợp lệ");
}