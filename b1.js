let year =+prompt("nhap năm sinh của bạn");

let currentYear = "2024";
let age = currentYear - year;

if (year<0 || year>2024){
    console.log("tuoi cua ban khong hop le" );

}else{
    console.log("tuổi cua ban la ",age);
}