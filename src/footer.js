import './style.css';
import milkDesktop from './images/image-gallery-milkbottles.jpg';
import milkMobile from './images/mobile/image-gallery-milkbottles.jpg';
import orangeFooterDesktop from './images/image-gallery-orange.jpg';
import orangeFooterMobile from './images/mobile/image-gallery-orange.jpg';
import cone from './images/image-gallery-cone.jpg';
import coneMobile from './images/mobile/image-gallery-cone.jpg';
import sugarDesktop from './images/image-gallery-sugarcubes.jpg';
import sugarMobile from './images/mobile/image-gallery-sugar-cubes.jpg';



function ImageContainer() {
    return (
        <section className='footer-images'>
            <picture>
                <source media="(max-width:594px)" srcSet={milkMobile} />
                <source media="(min-width:768px)" srcSet={milkDesktop} />
                <img src={milkDesktop} />
            </picture>
            <picture>
                <source media="(max-width:594px)" srcSet={orangeFooterMobile} />
                <source media="(min-width:768px)" srcSet={orangeFooterDesktop} />
                <img src={orangeFooterDesktop} />
            </picture>
            <picture>
                <source media="(max-width:594px)" srcSet={coneMobile} />
                <source media="(min-width:768px)" srcSet={cone} />
                <img src={cone} />
            </picture>
            <picture>
                <source media="(max-width:594px)" srcSet={sugarMobile} />
                <source media="(min-width:768px)" srcSet={sugarDesktop} />
                <img src={sugarDesktop} />
            </picture>
        </section>
    );
}

function FooterInfo() {
    return (
        <section className='footer-info'>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
        </section>
    );
}


function FooterSocials() {
    return (
        <section className='footer-socials'>
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-pinterest"></i>
        </section>
    );
}

function FooterSecondContainer() {
    return (
        <section className='footer-second-container'>
        <h1>sunnyside</h1>
        <FooterInfo />
        <FooterSocials />
        </section>
    );
}

function Footer() {
    return (
        <>
        <ImageContainer />
        <FooterSecondContainer />
        </>
    );
}

export default Footer;