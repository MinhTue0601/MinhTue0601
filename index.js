
var BMI1;
var BMI2;

function check(){
// Lấy giá trị từ ID và tính toán theo công thức BMI
var height1 = document.getElementById("height1").value;
var weight1 = document.getElementById("weight1").value;
var height2 = document.getElementById("height2").value;
var weight2 = document.getElementById("weight2").value;

BMI1 = weight1/(height1*height1/10000);
BMI1 = BMI1.toFixed(2);
BMI2 = weight2/(height2*height2/10000);
BMI2 = BMI2.toFixed(2);
// In kết quả ra console
console.log("Chỉ Số BMI của Minh là: " + BMI1);
console.log("Chỉ Số BMI của Toàn là: " + BMI2);
// so sánh kết quả của Minh và Toàn ra console
if(BMI1>BMI2){
console.log("BMI của Minh lớn hơn BMI của Toàn");
} else if (BMI1<BMI2){
console.log("BMI của Toàn lớn hơn BMI của Minh");
} else {
console.log("BMI của Minh bằng với BMI của Toàn");
}

if(BMI1>BMI2){
alert("Chỉ Số BMI của Minh: "+ BMI1 +"\n" + "Chỉ Số BMI của Toàn: "+ BMI2)
} else if (BMI1<BMI2){
alert("Chỉ Số BMI của Minh: "+ BMI1 +"\n" + "Chỉ Số BMI của Toàn: "+ BMI2)
} else {
alert("Chỉ Số BMI của Minh: "+ BMI1 +"\n" + "Chỉ Số BMI của Toàn: "+ BMI2)
}
};
