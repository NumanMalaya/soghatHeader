$(document).ready(function () {
    var row = $('.nbar .r1');
    var rowOffset = row.offset().top;
    $(window).on('scroll', function(){
        if($(window).width() <= 576){
            if($(window).scrollTop() > rowOffset){
                row.addClass('fixed-top');
                $('body').css({ 'padding-top': '60px' });
            } 
            else{
                row.removeClass('fixed-top');  
                $('body').css({ 'padding-top': '' });
            }
        }
    });
    let btnStatus = "unclick";
    let currentScroll = 0;
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 30 && $(window).width() >= 576) {
            $('#input-fields').addClass('slideup').removeClass('slidedown');
            $('#nbarr1cl2btns').addClass('slideup').removeClass('slidedown').hide();
            $('#input-fields').addClass('inputChanged');
            $('.searchText').hide();
            $('.nbar').css({'padding-bottom': '13px'});
            if(btnStatus == "clicked"){
                $('#input-fields').css({width: '360', height: '44px'});
            }
            currentScroll = $(window).scrollTop(); 
        } 
        else if ($(window).scrollTop() <= 30 && currentScroll != 0  && $(window).width() >= 576 ) {
            $('#input-fields').removeClass('slideup').addClass('slidedown');
            $('#nbarr1cl2btns').removeClass('slideup').addClass('slidedown').show();
            $('#input-fields').addClass('textAppear').removeClass('inputChanged');
            $('.searchText').show();
            $('.nbar').css({'padding-bottom': ''});
            if(btnStatus == "clicked"){
                if($(window).width() < 992 && $(window).width() >= 768){
                    $('#input-fields').css({height: '59px', width: '730px'});
                }
                else if($(window).width() < 768){
                    $('#input-fields').css({height: '59px', width: '551px'});
                }
                else{
                    $('#input-fields').css({height: '59px', width: '805px'});
                }
                $('#nbarr2cl1text2').hide();
                $('#nbarr2cl1text3').hide();
            }
        }
    });
    function resetFields(inputField, otherInputs) {
        $(inputField).css({ backgroundColor: '', transition: '-1s', width: '' });
        $('#input-fields').css({ backgroundColor: 'white', height: '', width: '', overflow: '' });
        $(otherInputs).css({ backgroundColor: '' });
        $('#searchBtnHeader').css({ width: ''});
        $('#text').addClass('d-none');
        $('#nbarr2cl1text1, #nbarr2cl1text2, #nbarr2cl1text3').show();
        $('.navbar-input').show();
        $('.divider').show();
        $('.searchText').css({ left: '' });
        if($(window).scrollTop() > 30){
            $('.searchText').hide();
        }
        btnStatus = "unclick";
    };
    function handleInputHover(inputField, otherInputs, hideTexts) {
        if($(window).scrollTop() <= 30){
            let windowWidth = $(window).width();
            let width = windowWidth < 768 ? '551px' : (windowWidth < 992 ? '730px' : '805px');
            $('#input-fields').css({ backgroundColor: '#e3e2e2', height: '59px', width: width, overflow: 'hidden' });
        } 
        else{
            $('#input-fields').css({ backgroundColor: '#e3e2e2', height: '44px', width: '360px', overflow: 'hidden' });
            $('.searchText').hide();
        }
        $(inputField).css({ backgroundColor: 'white', transition: '0.9s', width: '100%', height: '100%' });
        $(otherInputs).css('backgroundColor', 'transparent');
        $('#searchBtnHeader').css({ width: '100px'});
        $('#text').removeClass('d-none');
        $(hideTexts).hide();
        $(otherInputs).hide();
        $('.divider').hide();
        $('.searchText').css({ left: '25px' });
        $(document).click(function (event) {
            if (!$(event.target).closest('#input-fields').length && !$(event.target).closest(inputField).length) {
                resetFields(inputField, otherInputs);
            }
        });
        btnStatus = "clicked";
    };
    $('.navbar-input').click(function () {
        let inputField = this;
        let otherInputs = $('.navbar-input').not(this);
        let hideTexts = $('.searchText').not($(this).prev('.searchText'));
    
        handleInputHover(inputField, otherInputs, hideTexts);
    }); 
});
