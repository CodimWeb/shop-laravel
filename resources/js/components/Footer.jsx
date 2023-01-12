import Logo from '../../img/header/logo.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__info">
                    <a href="/" className="footer__logo">
                        <img src={ Logo } alt="" />
                    </a>
                    <p className="footer__description">
                        Основная цель проекта — обеспечение потенциальных покупателей, на основе свободного доступа,
                        информацией о наличии, цене и качестве различных видов продукции строительной отрасли, с
                        указанием координат потенциальных поставщиков.
                    </p>
                </div>
                <div className="footer__nav">
                    <div className="footer__col">
                        <a href="#" className="footer__link link link-dark">О нас</a>
                        <a href="#" className="footer__link link link-dark">Услуги</a>
                        <a href="#" className="footer__link link link-dark">Реклама</a>
                        <a href="#" className="footer__link link link-dark">Контакты</a>
                        <a href="#" className="footer__link link link-dark">Справочник</a>
                    </div>
                    <div className="footer__col">
                        <a href="#" className="footer__link link link-dark">Тендеры</a>
                        <a href="#" className="footer__link link link-dark">Объявления</a>
                        <a href="#" className="footer__link link link-dark">Цены поставщиков</a>
                        <a href="#" className="footer__link link link-dark">Заявки покупателей</a>
                    </div>
                    <div className="footer__col">
                        <a href="tel:" className="footer__link link link-dark">Отдел Продаж: 8 (499) 270 58 45</a>
                        <a href="tel:" className="footer__link link link-dark">Отдел Рекламы +7 (499) 270-58-45</a>
                        <a href="mailto:" className="footer__link link link-dark">Email: info@stroim100.ru </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
