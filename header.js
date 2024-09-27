function inputHover1(input) {
    input.style.backgroundColor = 'white';
    document.getElementById('nbarr2cl1input2').style.backgroundColor = 'transparent';
    document.getElementById('nbarr2cl1input3').style.backgroundColor = 'transparent';
    document.getElementById('input-fields').style.backgroundColor = '#e3e2e2';
    document.getElementById('text').classList.remove('d-none');
    document.getElementById('searchBtn').style.width = "100px";
    document.getElementById('searchBtn').style.height = "75%";
    if (window.scrollY < 30) {
        document.getElementById('input-fields').style.width = '803px';
        document.getElementById('input-fields').style.height = '60px';
        input.style.width = '100%';
        input.style.height = '100%';
    }
    else{
        document.getElementById('input-fields').style.width = '360px';
        document.getElementById('input-fields').style.height = '43px'; 
        input.style.width = '100%';
        input.style.height = '100%';
    }
    input.style.transition = '0.9s';
    document.getElementById('input-fields').style.overflow = 'hidden';
    document.getElementById('nbarr2cl1text2').style.display = "none";
    document.getElementById('nbarr2cl1text3').style.display = "none";
    document.getElementById('nbarr2cl1input2').style.display = "none";
    document.getElementById('nbarr2cl1input3').style.display = "none";

    const parentdiv = document.getElementById('input-fields');
    document.addEventListener('click', (event) => {
        if (!parentdiv.contains(event.target) && event.target !== input) {
            input.style.backgroundColor = '';
            document.getElementById('nbarr2cl1input2').style.backgroundColor = '';
            document.getElementById('nbarr2cl1input3').style.backgroundColor = '';
            document.getElementById('input-fields').style.backgroundColor = 'white';
            document.getElementById('text').classList.add('d-none');
            document.getElementById('searchBtn').style.width = "";
            document.getElementById('searchBtn').style.height = "";

            input.style.transition = '-1s';
            input.style.width = '';
            document.getElementById('input-fields').style.height = '';
            document.getElementById('input-fields').style.overflow = '';
            document.getElementById('input-fields').style.width = '';
            document.getElementById('nbarr2cl1text2').style.display = "";
            document.getElementById('nbarr2cl1text3').style.display = "";
            document.getElementById('nbarr2cl1input2').style.display = "";
            document.getElementById('nbarr2cl1input3').style.display = "";
        }
    });
}
function inputHover2(input) {
    input.style.backgroundColor = 'white';
    document.getElementById('nbarr2cl1input1').style.backgroundColor = 'transparent';
    document.getElementById('nbarr2cl1input3').style.backgroundColor = 'transparent';
    document.getElementById('input-fields').style.backgroundColor = '#e3e2e2';
    document.getElementById('text').classList.remove('d-none');
    document.getElementById('searchBtn').style.width = "100px";
    document.getElementById('searchBtn').style.height = "75%";
    if (window.scrollY < 30) {
        document.getElementById('input-fields').style.width = '803px';
        document.getElementById('input-fields').style.height = '60px';
        input.style.width = '100%';
        input.style.height = '100%';
    }
    else{
        document.getElementById('input-fields').style.width = '360px';
        document.getElementById('input-fields').style.height = '43px'; 
        input.style.width = '100%';
        input.style.height = '100%';
    }
    input.style.transition = '0.9s';
    document.getElementById('input-fields').style.overflow = 'hidden';
    document.getElementById('nbarr2cl1text2').style.left = "25px";
    document.getElementById('nbarr2cl1text1').style.display = "none";
    document.getElementById('nbarr2cl1text3').style.display = "none";
    document.getElementById('nbarr2cl1input1').style.display = 'none';
    document.getElementById('nbarr2cl1input3').style.display = 'none';
    document.getElementById('divider1').style.display = 'none';
    document.getElementById('divider2').style.display = 'none';

    const parentdiv = document.getElementById('input-fields');
    document.addEventListener('click', (event) => {
        if (!parentdiv.contains(event.target) && event.target !== input) {
            input.style.backgroundColor = '';
            document.getElementById('nbarr2cl1input1').style.backgroundColor = '';
            document.getElementById('nbarr2cl1input3').style.backgroundColor = '';
            document.getElementById('input-fields').style.backgroundColor = '';
            document.getElementById('text').classList.add('d-none');
            document.getElementById('searchBtn').style.height = "";
            document.getElementById('searchBtn').style.width = "";

            input.style.transition = '-1s';
            input.style.width = '';
            document.getElementById('input-fields').style.height = '';
            document.getElementById('input-fields').style.overflow = '';
            document.getElementById('input-fields').style.width = '';
            document.getElementById('nbarr2cl1text2').style.left = "";
            document.getElementById('nbarr2cl1text1').style.display = "";
            document.getElementById('nbarr2cl1text3').style.display = "";
            document.getElementById('nbarr2cl1input1').style.display = '';
            document.getElementById('nbarr2cl1input3').style.display = '';
            document.getElementById('divider1').style.display = '';
            document.getElementById('divider2').style.display = '';
        }
    });
}
function inputHover3(input) {
    input.style.backgroundColor = 'white';
    document.getElementById('nbarr2cl1text1').style.display = "none";
    document.getElementById('nbarr2cl1text2').style.display = "none";
    document.getElementById('nbarr2cl1input1').style.display = "none";
    document.getElementById('nbarr2cl1input2').style.display = "none";
    document.getElementById('divider1').style.display = 'none';
    document.getElementById('divider2').style.display = 'none';
    document.getElementById('nbarr2cl1text3').style.left = "25px";
    document.getElementById('nbarr2cl1input1').style.backgroundColor = 'transparent';
    document.getElementById('nbarr2cl1input2').style.backgroundColor = 'transparent';
    document.getElementById('input-fields').style.backgroundColor = '#e3e2e2';
    document.getElementById('text').classList.remove('d-none');
    document.getElementById('searchBtn').style.width = "100px";
    document.getElementById('searchBtn').style.height = "75%";
    if (window.scrollY < 30) {
        document.getElementById('input-fields').style.width = '803px';
        document.getElementById('input-fields').style.height = '60px';
        input.style.width = '100%';
        input.style.height = '100%';
    }
    else{
        document.getElementById('input-fields').style.width = '360px';
        document.getElementById('input-fields').style.height = '43px'; 
        input.style.width = '100%';
        input.style.height = '100%';
    }
    input.style.transition = '0.9s';
    document.getElementById('input-fields').style.overflow = 'hidden';

    const parentdiv = document.getElementById('input-fields');
    document.addEventListener('click', (event) => {
        if (!parentdiv.contains(event.target) && event.target !== input) {
            input.style.backgroundColor = '';
            document.getElementById('nbarr2cl1input1').style.backgroundColor = '';
            document.getElementById('nbarr2cl1input2').style.backgroundColor = '';
            document.getElementById('input-fields').style.backgroundColor = '';
            document.getElementById('text').classList.add('d-none');
            document.getElementById('searchBtn').style.height = "";
            document.getElementById('searchBtn').style.width = "";

            input.style.transition = '-1s';
            input.style.width = '';
            document.getElementById('input-fields').style.height = '';
            document.getElementById('input-fields').style.overflow = '';
            document.getElementById('input-fields').style.width = '';
            document.getElementById('nbarr2cl1text3').style.left = "";
            document.getElementById('nbarr2cl1text2').style.display = "";
            document.getElementById('nbarr2cl1text1').style.display = "";
            document.getElementById('nbarr2cl1input1').style.display = "";
            document.getElementById('nbarr2cl1input2').style.display = "";
            document.getElementById('divider1').style.display = '';
            document.getElementById('divider2').style.display = '';
        }
    });
}

let currentScroll = 0;
window.addEventListener('scroll', function () {
    if (window.scrollY > 30) {
        document.getElementById('input-fields').classList.add('slideup');
        document.getElementById('nbarr1cl2btns').classList.add('slideup');
        document.getElementById('input-fields').classList.remove('slidedown');
        document.getElementById('nbarr1cl2btns').classList.remove('slidedown');
        document.getElementById('nbarr1cl2btns').style.display = "none";
        document.getElementById('input-fields').classList.add('inputChanged');
        currentScroll = window.scrollY;
    }

    else if (window.scrollY <= 30 && currentScroll != 0) {
        document.getElementById('input-fields').classList.remove('slideup');
        document.getElementById('nbarr1cl2btns').classList.remove('slideup');
        document.getElementById('input-fields').classList.add('slidedown');
        document.getElementById('nbarr1cl2btns').classList.add('slidedown');
        document.getElementById('input-fields').classList.add('textAppear');
        document.getElementById('nbarr1cl2btns').style.display = "";
        document.getElementById('input-fields').classList.remove('inputChanged');
    }
});
