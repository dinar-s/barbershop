    // Слайдер "Фотогалерея"

$('.owl-carousel').owlCarousel({
    margin:10,
    loop: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
var owl=$(".owl-carousel");
owl.owlCarousel();
$(".next").click(function(){
    owl.trigger("next.owl.carousel");
});
$(".prev").click(function(){
    owl.trigger("prev.owl.carousel");
});

    // Карта на главной

function mapOpen(){
    document.getElementById('main-map').style.display = "block";
};
function mapClose(){
    document.getElementById('main-map').style.display = "none";
};

    // Обратная связь на главной

function feedbackOpen(){
    document.getElementById('main-feedback').style.display = "block";
};
function feedbackClose(){
    document.getElementById('main-feedback').style.display = "none";
};


    // Проверка инпута записи на главной

function formMessage(){
    var inp = document.getElementById('main-form');

    if (inp.value == ""){
        document.getElementById('formMessageFalse').style.display = "block";
        document.getElementById('formMessage').style.display = "none";
    }else{
        document.getElementById('formMessage').style.display = "block";
        document.getElementById('formMessageFalse').style.display = "none";
    }
};

    // Вход на главной

function loginOpen(){
    var login = document.getElementById('form-ligin');
    login.style.display = "block";
    login.style.top = 170 + 'px';
    login.style.transition = '.2s';
};
function loginClose(){
    document.getElementById('form-ligin').style.display = "none";
};
function formLogin(){
    document.getElementById('formLogin').style.display = 'block';
}

    // Проверка обратной связи

function feedbackMessage(){
    var inpName = document.getElementById('form-name');
    var inpEmail = document.getElementById('form-mail');

    if (inpName.value == "" || inpEmail.value == ""){
        document.getElementById('feedbackMessageError').style.display = "block";
        document.getElementById('feedbackMessage').style.display = "none";
    }else{
        document.getElementById('feedbackMessage').style.display = "block";
        document.getElementById('feedbackMessageError').style.display = "none";
    }
};

    // Фильтр для мобилки


function closeFiltr(){
    document.getElementById('shop-filtr').style.display = "none";
};
function openFiltr(){
    var filtrBlock = document.getElementById('shop-filtr');
    filtrBlock.style.left = 0;
    filtrBlock.style.display = "block";
}

        // Меню для мобилки

function openMobMenu(){
    document.getElementById('mob-menu').style.display = "block";
};
function closeMobMenu(){
    document.getElementById('mob-menu').style.display = "none";
};