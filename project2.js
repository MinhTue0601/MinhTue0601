var input=document.querySelector('.input');
var items=Array.from(document.querySelectorAll('.item'));
//Sử dụng DOM addEventListener để bổ sung hành động khác nhau.
      items.forEach(function (btn) {
      btn.addEventListener('click',function(){
          if(input.innerHTML=='0')
          input.innerHTML='';
          if(btn.innerHTML=='AC')
          input.innerHTML='0';
// Sử dụng else/ if để bổ sung thêm cho chức năng xóa chữ số.
          else if(btn.innerHTML=='DEL'){
             var arrtext=Array.from(input.innerHTML);
             arrtext.splice(arrtext.length-1,1);
             if(arrtext.length!=0)
             input.innerHTML=arrtext.join('');
             else input.innerHTML='0';
          }
          else if(btn.innerHTML=='='){
            input.innerHTML=eval(input.innerHTML);
          }
            else input.innerHTML+=btn.innerHTML;
        })

})
