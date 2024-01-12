// câu điêu kiện if-else

//1. đanh giá 1 điều kiện và đưa ra lựa chọn thực thi 1 khối lẹnh dựa trên điều kien đó
//2. nếu điều kiẹn ấy đúng(true) thì khối lẹnh ấy dc thực thi
//3. nếu điều kiện ấy sai (false) thì khối lẹnh ấy dc thực thi trong else

//vd:
let a=+prompt("nhập số a");

if (a%2==0 && a>0){
    console.log("đó là số chẵn");
}else{
    console.log("đó la so lẻ");
}

// câu lệnh switch- case
// 1. là 1 cấu trúc điều kiện cho phép lựa chọn thực thi các khói lệnh khác nhau dựa trên kết quả của việc so sánh
//2. so sánh giá trị của 1 biến với lần lượt từng giá trị 1 , nếu có gtri phù hợp với biến thì khối lệnh tương úng 
//3. kh thể thay thế if-else trong mọi TH

//vd:

let number = +prompt("nhap so từ 2 đến 8");

switch(number){
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
}