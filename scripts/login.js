// /*
// (function ($) {
//     "use strict";

    
//     /*==================================================================
//    [ Validate ]*/
//     var input = $('.validate-input .input100');

//     $('.validate-form').on('submit',function(){
//         var check = true;

//         for(var i=0; i<input.length; i++) {
//             if(validate(input[i]) == false){
//                 showValidate(input[i]);
//                 check=false;
//             }
//         }

//         return check;
//     });
// */

//     $('.validate-form .input100').each(function(){
//         $(this).focus(function(){
//            hideValidate(this);
//         });
//     });



//     function confirmPassword(){
//         var password = document.getElementById("pass");
//         var confirm_password = document.getElementById("repass");
//         console.log(password.value);
//         console.log(confirm_password.value);
//     if(password.value != confirm_password.value) {
//         console.log(false);
//         return false;
//     }
//     else return true;
//     }



//     function validate (input) {
//         if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
//             if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
//                 return false;
//             }
//         }
//         else{
//             if($(input).val().trim() != ''){
//                 if ($(input).attr('name') == "pass" && !confirmPassword()){
//                     return false;
//                 }
//             }  
//             else {
//                 return false;
//             }
//         }

        
//         }


//     function showValidate(input) {
//         var thisAlert = $(input).parent();

//         $(thisAlert).addClass('alert-validate');
//     }

//     function hideValidate(input) {
//         var thisAlert = $(input).parent();

//         $(thisAlert).removeClass('alert-validate');
//     }
    

    

// })(jQuery);