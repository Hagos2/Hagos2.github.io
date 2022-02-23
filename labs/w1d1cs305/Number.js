/*
4. Write code to print the number patterns on the console
12345
12345
12345
12345
12345
// second pattern
1
22
333
4444
55555
//second pattern
55555
4444
333
22
1
*/
for(let i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=5;j++){
     row=row+i;
    }
    console.log(row);
}
//
for(let i=1;i<=5;i++){
    let row= "";
    for(let j=1;j<=i;j++){
     row=row+i;
    }
    console.log(row);
}
//
for(let i=5;i>0;i--){
    let row="";
    for(let j=1;j<=i;j++){
     row=row+i;
    }
    console.log(row);
}