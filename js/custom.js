//serach bar
$('.search-btn').click(function(){
    $('.search-bar').slideDown();
});
$('.search-bar .fa').click(function(){
    $('.search-bar').slideUp();
});

//user profile
$('.profile-user-btn').click(function(){
    $('.user-profile').slideToggle();
    $('.notification-dv').slideUp();
});

//notification
$('.notification-btn').click(function(){
    $('.notification-dv').slideToggle();
    $('.user-profile').slideUp();
});

//mobile sidebar
$('.cls-btn').click(function(){
    $('.sidebar-panel').removeClass('collapsed');
});

//submenu toggle & active
$('.sidebar-inner ul li').click(function(){
    $(this).find('.sub-menu').slideToggle();
    $('.sidebar-inner ul li').removeClass('active');
    $(this).addClass('active');
});

//sidebar collasp
$('.menu-btn').click(function(){
    $('.sidebar-panel').toggleClass('collapsed');
    $('.main-page').toggleClass('full-width');
});

//close notification on click
$(document).mouseup(function (e) {
    var container = $(".notification-dv");
    var container1 = $(".user-profile");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
    }

    if (!container1.is(e.target) && container1.has(e.target).length === 0) {
        container1.hide();
    }
});

//foo table
$('.table-foo tr .fa').click(function(){
    $(this).parent().parent().next('.foo-inner').slideToggle();
});




$("#validation-forms .forms-input").keyup(function (event) {
    if ($(this).val() == '') {
        $(this).css('border','1px solid red');
    }
    else {
        $(this).css('border','1px solid green');
    }

});

//form validation with button

$('#validbtn-forms button').click(function(){
    debugger;
    if ($('#validbtn-forms input').val() == '') {
        $('#valid-btn-forms input').css('border','1px solid red');
    }
    else {
        $('#validbtn-forms input').css('border','1px solid green');
    }
});

// Time Input
$('#time-input').formatter({
    'pattern': '{{99}}:{{99}}:{{99}}',
    'persistent': true
  });

//form validation input value
var inpLenght= $('#validation-forms .forms-input').val().length;

if(inpLenght == 0){
    $('#validation-forms .forms-input').css('border','1px solid red');
}

