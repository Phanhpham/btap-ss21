let toan=+prompt("nhap môn toán");

let van=+prompt("nhap môn văn");

let anh=+prompt("nhap môn anh");

let average=(toan+van+anh)/3;

if(8.0<= average <= 10){
    console.log("xếp loại Giỏi");
}else if(6.5 <= average <= 7.9){
    console.log("xep loại Khá");
}else if(5.0 <= average <= 6.4){
    console.log("xep loại Trung Bình");
}else{
    console.log("xếp loại Yếu");
}