// search
function openModal() {
    document.getElementById('overlay').classList.add('overlay--active');
}

function closeModal() {
    document.getElementById('overlay').classList.remove('overlay--active');
}

//burger
function openModalMenu() {
    document.getElementById('overlayMenu').classList.add('overlay--active');
}

function closeModalMenu() {
    document.getElementById('overlayMenu').classList.remove('overlay--active');
}

//swiper
let swiper = new Swiper(".swiperFeedBack", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//tabs
function openTab(event, tabName) {
    let i, tabcontent, tablinks;

    // скрываем все элементы с классом
    tabcontent = document.getElementsByClassName('tab-content');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // удаляем класс active со всех кнопок с классом tab-link
    tablinks = document.getElementsByClassName('projects-tabs__link');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
    }

    // отображаем текущую вкладку и добавляем класс active к соответствующей кнопке
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
}