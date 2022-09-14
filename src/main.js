import './style.css';
import orangeDesktop from './images/image-transform.jpg';
import orangeMobile from './images/mobile/image-transform.jpg';
import pinkCupDesktop from './images/image-stand-out.jpg';
import pinkCupMobile from './images/mobile/image-stand-out.jpg'
import Emily from './images/image-emily.jpg';
import Thomas from './images/image-thomas.jpg';
import Jennie from './images/image-jennie.jpg';


function FirstSquareContianer() {
    return (
        <section className="first-square-container">
            <h1>Transform your brand</h1>
            <p>We are a full-service creative agency specializing in helping brands grow fast.
                Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <a href="#">LEARN MORE</a>
        </section>
    );
}


function FirstSquare() {
    return (
        <section className="first-square">
            <FirstSquareContianer />
        </section>
    );
}

function SecondSquare() {
    return (
        <section className="second-square">
            <picture>
                <source media="(max-width:594px)" srcSet={orangeMobile} />
                <source media="(min-width:768px)" srcSet={orangeDesktop} />
                <img src={orangeDesktop} />
            </picture>
        </section>
    );
}

function ThirdSquare() {
    return (
        <section className='third-square'>
            <picture>
                <source media="(max-width:594px)" srcSet={pinkCupMobile} />
                <source media="(min-width:768px)" srcSet={pinkCupDesktop} />
                <img src={pinkCupDesktop} />
            </picture>
        </section>
    );
}

function FourthSquareContianer() {
    return (
        <section className="fourth-square-container">
            <h1>Stand out to the right audience</h1>
            <p>Using a collaborative formula of
                designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </p>
            <a href="#">LEARN MORE</a>
        </section>
    );
}

function FourthSquare() {
    return (
        <section className='fourth-square'>
            <FourthSquareContianer />
        </section>
    );
}

function FifthSquareContainer() {
    return (
        <section className='fifth-square-container'>
            <h1>Graphic Design</h1>
            <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention.</p>
        </section>
    );
}

function FifthSquare() {
    return (
        <section className='fifth-square'>
            <FifthSquareContainer />
        </section>
    );
}

function SixthSquareContainer() {
    return (
        <section className='sixth-square-container'>
            <h1>Photography</h1>
            <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </section>
    );
}

function SixthSquare() {
    return (
        <section className='sixth-square'>
            <SixthSquareContainer />
        </section>
    );
}

function FirstNamePosition() {
    return (
        <section className='first-name-position'>
            <h2>Emily R.</h2>
            <h3>Marketing Director</h3>
        </section>
    );
}

function SecondNamePosition() {
    return (
        <section className='second-name-position'>
            <h2>Thomas S.</h2>
            <h3>Chief Operating Officer</h3>
        </section>
    );
}

function ThirdNamePosition() {
    return (
        <section className='third-name-position'>
            <h2>Jennie F.</h2>
            <h3>Business Owner</h3>
        </section>
    );
}

function FirstTestimonial() {
    return (
        <section className='first-testimonial'>
            <img src={Emily} />
            <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
            <FirstNamePosition/>
        </section>
    );
}

function SecondTestimonial() {
    return (
        <section className='second-testimonial'>
            <img src={Thomas}/>
            <p>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
            <SecondNamePosition />
        </section>
    );
}

function ThirdTestimonial() {
    return (
        <section className='third-testimonial'>
            <img src={Jennie}/>
            <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
            <ThirdNamePosition/>
        </section>
    );
}


function TestimonialContainer() {
    return (
        <section className='testimonial-container'>
            <FirstTestimonial />
            <SecondTestimonial/>
            <ThirdTestimonial/>
        </section>
    );
}

function SeventhSquare() {
    return (
        <section class='seventh-square'>
            <h1>CLIENT TESTIMONIALS</h1>
            <TestimonialContainer />
        </section>
    );
}

function Main() {
    return (
        <>
            <FirstSquare />
            <SecondSquare />
            <ThirdSquare />
            <FourthSquare />
            <FifthSquare />
            <SixthSquare />
            <SeventhSquare />
        </>
    );
}

export default Main;