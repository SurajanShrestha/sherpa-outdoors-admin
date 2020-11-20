// light version js
$(document).ready(function(){
    //To switch the dark mode checkbox off everytime this page loads
    $(".custom-switch .lv-btn").prop("checked",false);
    $(".custom-switch .lv-btn").on('change',function() {
        if(this.checked) {
            //$('body').addClass('light_version');
            $('body').removeClass('light_version');
        }else{
            $('body').addClass('light_version');
        }
    });
})
