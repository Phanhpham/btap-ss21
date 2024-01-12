let weight =+prompt("nhap so can nang");

let height =+prompt("nhap chiều cao ");

let BMI = +propmpt("bmi = weight / ( height ^ 2 )");

if(BMI<18,5){
    console.log("cân nặng thấp");
}else if(BMI <=18,5 &&  BMI>=24,9){
    console.log("bình thường");
}else if ( BMI>=25){
    console.log("tiền béo phì");
}else if (BMI <=25 &&  BMI>=29,9){
    console.log("tiền béo phi");
}else if (BMI <=30 &&  BMI>=34,9){
    console.log("béo phì độ 1");
}else if (BMI <=35 &&  BMI>=39,9){
    console.log("béo phì độ 2");
}else{
    console.log("béo phì độ 3");
}