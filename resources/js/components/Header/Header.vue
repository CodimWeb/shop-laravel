<template>
    <header class="header">
        <div class="header__top container">
            <a hre="#" class="header__location link link-dark" data-bs-toggle="modal" data-bs-target="#regionChooseModal">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0C4.28608 0 2.07812 2.20795 2.07812 4.92188C2.07812 5.83882 2.33212 6.73367 2.81282 7.51002L6.71984 13.8061C6.79468 13.9267 6.92653 14 7.06833 14C7.06943 14 7.07049 14 7.07159 14C7.21462 13.9989 7.34675 13.9233 7.42022 13.8006L11.2276 7.44352C11.6818 6.68358 11.9219 5.81161 11.9219 4.92188C11.9219 2.20795 9.71392 0 7 0ZM10.5237 7.02237L7.06213 12.802L3.51004 7.07782C3.10991 6.43163 2.89297 5.68613 2.89297 4.92188C2.89297 2.66027 4.7384 0.814844 7 0.814844C9.2616 0.814844 11.1043 2.66027 11.1043 4.92188C11.1043 5.66347 10.9017 6.38991 10.5237 7.02237Z" fill="currentColor"/>
                    <path d="M7 2.46094C5.64304 2.46094 4.53906 3.56491 4.53906 4.92188C4.53906 6.27017 5.62507 7.38281 7 7.38281C8.39188 7.38281 9.46094 6.25535 9.46094 4.92188C9.46094 3.56491 8.35696 2.46094 7 2.46094ZM7 6.56797C6.09063 6.56797 5.35391 5.82879 5.35391 4.92188C5.35391 4.01723 6.09536 3.27578 7 3.27578C7.90464 3.27578 8.64336 4.01723 8.64336 4.92188C8.64336 5.81555 7.92378 6.56797 7 6.56797Z" fill="currentColor"/>
                </svg>

                <span>Новосибирск</span>
            </a>
            <div class="header__links">
                <a href="/about" class="header__link">О нас</a>
                <a href="/black" class="header__link">Черный список</a>
                <a href="tel:" class="header__link">
                    Отдел Продаж:
                    <span class="header__link--accent">8 (499) 270 58 45</span>
                </a>
            </div>
        </div>

        <div class="header__middle container">
            <router-link to="/" class="header__logo">
                <img src="@/img/header/logo.svg" alt="">
            </router-link>
<!--            <a href="/" class="header__logo">-->
<!--                -->
<!--            </a>-->
            <div class="header__right">
                <div class="header__dropdown header__dropdown--catalog dropdown">
                    <a class="btn btn-primary header__btn-dropdown" href="#" role="button" id="catalog-dropdown"
                       data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="false" data-bs-display="static">
                        <button class="burger"></button>
                        <span>Каталог</span>
                    </a>
                    <div class="header__dropdown-menu dropdown-menu" aria-labelledby="catalog-dropdown">
                        <div class="container ">
                            <div class="header__dropdown-menu-inner d-flex align-items-start">
                                <div class="header__navs nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                                     aria-orientation="vertical">
                                    <button class="active header__nav" id="v-1-tab" data-bs-toggle="pill" data-bs-target="#v-1"
                                            type="button" role="tab" aria-controls="v-1" aria-selected="true">
                                        ЖБИ
                                    </button>
                                    <button class=" header__nav" id="v-2-tab" data-bs-toggle="pill" data-bs-target="#v-2"
                                            type="button" role="tab" aria-controls="v-2" aria-selected="false">
                                        Фитинг для труб
                                    </button>
                                    <button class="header__nav" id="v-3-tab" data-bs-toggle="pill" data-bs-target="#v-3"
                                            type="button" role="tab" aria-controls="v-3" aria-selected="false">
                                        Кирпич
                                    </button>
                                    <button class="header__nav" id="v-4-tab" data-bs-toggle="pill" data-bs-target="#v-4"
                                            type="button" role="tab" aria-controls="v-4" aria-selected="false">
                                        Песок
                                    </button>
                                    <button class="header__nav" id="v-5-tab" data-bs-toggle="pill" data-bs-target="#v-5"
                                            type="button" role="tab" aria-controls="v-5" aria-selected="true">
                                        ЖБИ
                                    </button>
                                    <button class=" header__nav" id="v-6-tab" data-bs-toggle="pill" data-bs-target="#v-6"
                                            type="button" role="tab" aria-controls="v-6" aria-selected="false">
                                        Фитинг для труб
                                    </button>
                                    <button class="header__nav" id="v-7-tab" data-bs-toggle="pill" data-bs-target="#v-7"
                                            type="button" role="tab" aria-controls="v-7" aria-selected="false">
                                        Кирпич
                                    </button>
                                    <button class="header__nav" id="v-8-tab" data-bs-toggle="pill" data-bs-target="#v-8"
                                            type="button" role="tab" aria-controls="v-8" aria-selected="false">
                                        Песок
                                    </button>
                                    <button class="header__nav" id="v-9-tab" data-bs-toggle="pill" data-bs-target="#v-9"
                                            type="button" role="tab" aria-controls="v-9" aria-selected="true">
                                        ЖБИ
                                    </button>
                                    <button class=" header__nav" id="v-10-tab" data-bs-toggle="pill" data-bs-target="#v-10"
                                            type="button" role="tab" aria-controls="v-10" aria-selected="false">
                                        Фитинг для труб
                                    </button>
                                    <button class="header__nav" id="v-11-tab" data-bs-toggle="pill" data-bs-target="#v-11"
                                            type="button" role="tab" aria-controls="v-11" aria-selected="false">
                                        Кирпич
                                    </button>
                                    <button class="header__nav" id="v-12-tab" data-bs-toggle="pill" data-bs-target="#v-12"
                                            type="button" role="tab" aria-controls="v-12" aria-selected="false">
                                        Песок
                                    </button>
                                    <button class="header__nav" id="v-13-tab" data-bs-toggle="pill" data-bs-target="#v-13"
                                            type="button" role="tab" aria-controls="v-13" aria-selected="true">
                                        ЖБИ
                                    </button>
                                    <button class=" header__nav" id="v-14-tab" data-bs-toggle="pill" data-bs-target="#v-14"
                                            type="button" role="tab" aria-controls="v-14" aria-selected="false">
                                        Фитинг для труб
                                    </button>
                                </div>
                                <div class="header__tab-content" id="v-pills-tabContent">
                                    <div class="header__tab-pane fade show active" id="v-1" role="tabpanel"
                                         aria-labelledby="v-1-tab">
                                        <div class="header__nav-links">
                                            <a href="" class="header__nav-link link link-dark">Ограждения</a>
                                            <a href="" class="header__nav-link link link-dark">Плиты</a>
                                            <a href="" class="header__nav-link link link-dark">Кабельные каналы</a>
                                            <a href="" class="header__nav-link link link-dark">Блок</a>
                                            <a href="" class="header__nav-link link link-dark">Бортовой камень</a>
                                            <a href="" class="header__nav-link link link-dark">Бордюрный камень</a>
                                            <a href="" class="header__nav-link link link-dark">Заборы</a>
                                            <a href="" class="header__nav-link link link-dark">Ограждения</a>
                                            <a href="" class="header__nav-link link link-dark">Плиты</a>
                                            <a href="" class="header__nav-link link link-dark">Кабельные каналы</a>
                                            <a href="" class="header__nav-link link link-dark">Блок</a>
                                            <a href="" class="header__nav-link link link-dark">Бордюрный камень</a>
                                            <a href="" class="header__nav-link link link-dark">Заборы</a>
                                            <a href="" class="header__nav-link link link-dark">Ограждения</a>
                                            <a href="" class="header__nav-link link link-dark">Плиты</a>
                                            <a href="" class="header__nav-link link link-dark">Кабельные каналы</a>
                                            <a href="" class="header__nav-link link link-dark">Блок</a>
                                        </div>
                                    </div>
                                    <div class="header__tab-pane fade" id="v-2" role="tabpanel" aria-labelledby="v-2-tab">2
                                    </div>
                                    <div class="header__tab-pane fade" id="v-3" role="tabpanel" aria-labelledby="v-3">3</div>
                                    <div class="header__tab-pane fade" id="v-4" role="tabpanel" aria-labelledby="v-4">4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form class="header__search" :class="{'header__search--infocus' : focusSearch}">
                    <div class="header__search-decorator"></div>
                    <input type="text"
                           class="form-control header__search-input base-input"
                           placeholder="Поиск продукции"
                           @focus="focusSearch = true"
                           @blur="focusSearch = false"
                    >
                    <button type="submit" class="btn btn-primary header__btn-search">
                        <img src="@/img/header/loop.svg" alt="">
                    </button>
                    <ul class="header__search-result">
                        <li><a href="#" class="header__search-link">Бетонные блоки</a></li>
                        <li><a href="#" class="header__search-link">Бетонные блоки</a></li>
                        <li><a href="#" class="header__search-link">Бетонные блоки</a></li>
                        <li><a href="#" class="header__search-link">Бетонные блоки</a></li>
                        <li><a href="#" class="header__search-link">Бетонные блоки</a></li>
                        <li><a href="#" class="header__search-link">Бетонные блоки</a></li>
                        <li><a href="#" class="header__search-link">Бетонные блоки</a></li>
                        <li><a href="#" class="header__search-link">Бетонные блоки</a></li>
                    </ul>
                </form>
                <div class="header__dropdown header__dropdown--add dropdown">
                    <a href="#" class="header__btn-add link link-dark" type="button" id="dropdownMenuAdd"
                       data-bs-toggle="dropdown" aria-expanded="false">
                        <span>Добавить</span>
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M0.239442 1.46112L5.46073 6.60281C5.75445 6.89249 6.24479 6.89249 6.53972 6.60281L11.7598 1.46112C12.0801 1.14579 12.0801 0.647988 11.7598 0.332655C11.4208 -0.00092493 10.8563 -0.000924936 10.5168 0.332655L6.14407 4.63897C6.06506 4.71709 5.93418 4.71709 5.85517 4.63897L1.48249 0.332654C1.14353 -0.000925051 0.579004 -0.000925057 0.239442 0.332654C0.0802162 0.490606 7.32753e-08 0.693605 7.08473e-08 0.896604C6.84125e-08 1.10017 0.0802162 1.30317 0.239442 1.46112Z"
                                  fill="currentColor"/>
                        </svg>

                    </a>
                    <ul class="dropdown-menu header__dropdown-content" aria-labelledby="dropdownMenuAdd">
                        <li><a class="dropdown-item dropdown-item__row" href="#">
                            <img src="@/img/header/icon-add.svg" alt="">
                            <span>Добавить объявление</span>
                        </a></li>
                        <li><a class="dropdown-item dropdown-item__row" href="#">
                            <img src="@/img/header/speaker.svg" alt="">
                            <span>Объявить тендер</span>
                        </a></li>
                        <li><a class="dropdown-item dropdown-item__row" href="#">
                            <img src="@/img/header/letter.svg" alt="">
                            <span>Отправить заявку поставщикам</span>
                        </a></li>
                    </ul>
                </div>
                <div class="header__dropdown header__dropdown--auth dropdown">
                    <!--TODO: если НЕ зарегистрирован-->
<!--                    <a href="#" class="header__btn-auth link" type="button" id="dropdownMenuAuth"-->
<!--                    data-bs-toggle="dropdown" aria-expanded="false">-->
<!--                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <g clip-path="url(#clip0)">-->
<!--                                <path d="M4.88916 21C5.03731 18.9259 6.66075 13.8333 12.0004 13.8333C17.34 13.8333 18.8152 18.9259 19.1115 21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                                <circle cx="12.0001" cy="8.38878" r="3.54444" stroke="currentColor" stroke-width="1.8"/>-->
<!--                            </g>-->
<!--                            <circle cx="12" cy="12" r="11.1" stroke="currentColor" stroke-width="1.8"/>-->
<!--                            <defs>-->
<!--                                <clipPath id="clip0">-->
<!--                                    <rect width="16" height="19" fill="white" transform="translate(4 2)"/>-->
<!--                                </clipPath>-->
<!--                            </defs>-->
<!--                        </svg>-->
<!--                        <span>Александр</span>-->
<!--                    </a>-->
<!--                    <ul class="dropdown-menu header__dropdown-container" aria-labelledby="dropdownMenuAuth">-->
<!--                        <li><a class="dropdown-item dropdown-item__row" href="#">-->
<!--                            Личный кабинет-->
<!--                        </a></li>-->
<!--                        <li><a class="dropdown-item dropdown-item__row" href="#">-->
<!--                            Выйти-->
<!--                        </a></li>-->
<!--                    </ul>-->
                    <!--TODO: если зарегистрирован-->

                    <router-link to="/login" class="header__btn-auth link">
                        <span>Вход</span>
                    </router-link>
                    /
                    <router-link to="/register" class="header__btn-auth link">
                        <span>Регистрация</span>
                    </router-link>
<!--                    <a href="" class="header__btn-auth link" data-bs-toggle="modal" data-bs-target="#authModal">-->
<!--                        <span>Регистрация</span>-->
<!--                    </a>-->

                </div>
                <a class="header__basket link link-dark" href="#">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip1)">
                            <path d="M1.00024 1H4.33007C4.83446 1 5.2599 1.37563 5.32237 1.87614L5.8817 6.35714M5.8817 6.35714L6.96029 14.9981C7.02916 15.5498 7.53494 15.9395 8.08603 15.8653L22.1337 13.9738C22.6299 13.907 23.0002 13.4835 23.0002 12.9828V7.35714C23.0002 6.80486 22.5525 6.35714 22.0002 6.35714H5.8817Z"
                                  stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="10.0002" cy="21" r="2.1" stroke="currentColor" stroke-width="1.8"/>
                            <circle cx="19.0002" cy="21" r="2.1" stroke="currentColor" stroke-width="1.8"/>
                        </g>
                        <defs>
                            <clipPath id="clip1">
                                <rect width="24" height="24" fill="white" transform="translate(0.000244141)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <span>Корзина</span>
                </a>
            </div>
        </div>
        <div class="header__bottom">
            <div class="navigation container">
                <ul class="navigation__list">
                    <li class="navigation__item">
                        <a href="#" class="navigation__link link link-dark">Тендеры</a>
                    </li>
                    <li class="navigation__item">
                        <a href="#" class="navigation__link link link-dark">Цены поставщиков</a>
                    </li>
                    <li class="navigation__item">
                        <a href="#" class="navigation__link link link-dark">Заявки покупателей</a>
                    </li>
                    <li class="navigation__item">
                        <a href="#" class="navigation__link link link-dark">Объявления</a>
                    </li>
                    <li class="navigation__item">
                        <a href="#" class="navigation__link link link-dark">Услуги</a>
                    </li>
                    <li class="navigation__item">
                        <a href="#" class="navigation__link link link-dark">Реклама</a>
                    </li>
                    <li class="navigation__item">
                        <a href="#" class="navigation__link link link-dark">Справочник</a>
                    </li>
                    <li class="navigation__item">
                        <a href="#" class="navigation__link link link-dark">Контакты</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
    import { ref } from 'vue'

    export default {
        name: 'Header',
        setup(props) {
            let focusSearch = ref(false)


            return {
                focusSearch
            }
        }
    }
</script>
