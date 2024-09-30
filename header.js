$(document).ready(function () {
    let btnStatus = 0;
    let currentScroll = 0;
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 30 && $(window).width() >= 576) {
            $('#input-fields').addClass('slideup').removeClass('slidedown');
            $('#nbarr1cl2btns').addClass('slideup').removeClass('slidedown').hide();
            $('#input-fields').addClass('inputChanged');
            $('#nbarr2cl1text1').hide();
            $('#nbarr2cl1text2').hide();
            $('#nbarr2cl1text3').hide();
            if(btnStatus == 1){
                $('#input-fields').css({width: '360', height: '44px'});
            }
            currentScroll = $(window).scrollTop(); 
        } 
        else if ($(window).scrollTop() <= 30 && currentScroll != 0  && $(window).width() >= 576 ) {
            $('#input-fields').removeClass('slideup').addClass('slidedown');
            $('#nbarr1cl2btns').removeClass('slideup').addClass('slidedown').show();
            $('#input-fields').addClass('textAppear').removeClass('inputChanged');
            $('#nbarr2cl1text1').show();
            $('#nbarr2cl1text2').show();
            $('#nbarr2cl1text3').show();
            if(btnStatus == 1){
                if($(window).width() < 992 && $(window).width() >= 768){
                    $('#input-fields').css({height: '59px', width: '730px'});
                }
                else if($(window).width() < 768){
                    $('#input-fields').css({height: '59px', width: '551px'});
                }
                else{
                    $('#input-fields').css({width: '805px', height: '59px'});
                }
                $('#nbarr2cl1text2').hide();
                $('#nbarr2cl1text3').hide();
            }
        }
    });
    function resetFields(inputField, otherInput1, otherInput2) {
        $(inputField).css({ backgroundColor: '', transition: '-1s', width: '' });
        $('#input-fields').css({ backgroundColor: 'white', height: '', width: '', overflow: '' });
        $(otherInput1).css({ backgroundColor: '' });
        $(otherInput2).css({ backgroundColor: '' });
        $('#searchBtnHeader').css({ width: '', height: '' });
        $('#text').addClass('d-none');
        $('#nbarr2cl1text1, #nbarr2cl1text2, #nbarr2cl1text3').show();
        $('#nbarr2cl1input1, #nbarr2cl1input2, #nbarr2cl1input3').show();
        $('#divider1').show();
        $('#divider2').show();
        if(inputField=='#nbarr2cl1input2'){
            $('#nbarr2cl1text2').css({ left: '' });
        }
        else if(inputField=='#nbarr2cl1input3'){
            $('#nbarr2cl1text3').css({ left: '' });
        }
        if($(window).scrollTop() > 30){
            $('#nbarr2cl1text1').hide();
            $('#nbarr2cl1text2').hide();
            $('#nbarr2cl1text3').hide();
        }
        btnStatus = 0;
    };
    function handleInputHover(inputField, otherInput1, otherInput2, hideText1, hideText2) {
        if($(window).scrollTop() <= 30){
            if($(window).width() < 992 && $(window).width() >= 768){
                $('#input-fields').css({ backgroundColor: '#e3e2e2', height: '59px', width: '730px', overflow: 'hidden' });
            }
            else if($(window).width() < 768){
                $('#input-fields').css({ backgroundColor: '#e3e2e2', height: '59px', width: '551px', overflow: 'hidden' });
            }
            else{
                $('#input-fields').css({ backgroundColor: '#e3e2e2', height: '59px', width: '805px', overflow: 'hidden' });
            }
            $(inputField).css({ backgroundColor: 'white', transition: '0.9s', width: '100%', height: '100%' });
        } 
        else{
            $('#input-fields').css({ backgroundColor: '#e3e2e2', height: '44px', width: '360px', overflow: 'hidden' });
            $(inputField).css({ backgroundColor: 'white', transition: '0.9s', width: '100%', height: '100%' });
            $('#nbarr2cl1text1').hide();
            $('#nbarr2cl1text2').hide();
            $('#nbarr2cl1text3').hide();
        }
        $(otherInput1).css('backgroundColor', 'transparent');
        $(otherInput2).css('backgroundColor', 'transparent');
        $('#searchBtnHeader').css({ width: '100px', height: '70%' });
        $('#text').removeClass('d-none');
        $(hideText1).hide();
        $(hideText2).hide();
        $(otherInput1).hide();
        $(otherInput2).hide();
        $('#divider1').hide();
        $('#divider2').hide();
        $(document).click(function (event) {
            if (!$(event.target).closest('#input-fields, ' + inputField).length) {
                resetFields(inputField, otherInput1, otherInput2);
            }
        });
        btnStatus = 1;
    };
    $('#nbarr2cl1input1').click(function () {
        handleInputHover('#nbarr2cl1input1', '#nbarr2cl1input2', '#nbarr2cl1input3', '#nbarr2cl1text2', '#nbarr2cl1text3');
    });
    $('#nbarr2cl1input2').click(function () {
        handleInputHover('#nbarr2cl1input2', '#nbarr2cl1input1', '#nbarr2cl1input3', '#nbarr2cl1text1', '#nbarr2cl1text3');
        $('#nbarr2cl1text2').css({ left: '25px' });
    });
    $('#nbarr2cl1input3').click(function () {
        handleInputHover('#nbarr2cl1input3', '#nbarr2cl1input2', '#nbarr2cl1input1', '#nbarr2cl1text2', '#nbarr2cl1text1');
        $('#nbarr2cl1text3').css({ left: '25px' });
    });
});
