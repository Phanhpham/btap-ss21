let a=+prompt("nhap so a");

let b=+prompt("nhap so b");

let c=+prompt("nhap so c");

if (a>b){
    let temp=a;
    a=b;
    b=temp;
}

if (b>c){
    let temp=b;
    b=c;
    c=temp;
    if (a>b){
        let temp=a;
        a=b;
        b=temp;
    }
}

console.log("ba số theo thứ tự tăng dần là",+a,+b,+c);