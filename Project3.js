// Tạo biến cho để gắn các điều kiện.
// Sử dụng Attribute Tag Name để hỗ trợ
function send() {
  var arr = document.getElementsByTagName('input');
  var Họ = arr[0].value;
  var Tên = arr[1].value;
  var Email = arr[2].value;
  var Password = arr[3].value;
  var RePassword = arr[4].value;
  var Gender =''.value;
// Sử dụng Attribute Id để hỗ trợ
  var arrr = document.getElementById('City');
  var City = arrr.value;

  var arrrr = document.getElementById('Bod');
  var Bod = arrrr.value;
// Tạo email text
  var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
// Tạo mảng đánh dấu Nam và Nữ
        if (arr[5,6].checked){
              Gender = "Nữ";
            }else {
              Gender = "Nam";
            }
// Tạo Điều Kiện nếu để trống thì báo lỗi trên alert
        if (Họ == ""){
          alert('Vui lòng điền lại Họ');
          return;
        } else {
          true;
        }
        if (Tên == ""){
          alert('Vui lòng điền lại Tên');
          return;
        } else {
          true;
        }
        if (Password == ""){
          alert('Vui lòng điền lại Mật Khẩu');
          return;
        } else {
          true;
        }
        if (RePassword == ""){
          alert('Vui lòng điền lại Mật Khẩu');
          return;
        } else {
          true;
        }
        if(Password != RePassword){
          alert('Mật Khẩu KHÔNG Trùng Khớp');
             return false;
          }else {
            true;
          }
// Tạo Điều kiện báo lỗi Mail nếu không nhập
        if (arr[2].value.match(mailformat)){
          } else {
            alert('invalid mail address');
            return;
        }
// Tạo xác nhận hoàn thành sau khi thỏa mãn tất cả điều kiện của Form đăng Ký
      confirm(' Đã xác nhận thông tin\n'+Họ+"\n"+Tên+"\n"+Email+"\n"+Password+"\n"+RePassword+"\n"+Gender+"\n"+Bod+"\n"+City)
        alert('Chúc Mừng Bạn Đã Đăng Ký Thành Công');
      }
