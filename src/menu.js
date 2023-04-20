import tamago from './img/tamago-sushi.png';
import sabaTeriyaki from './img/saba-teriyaki-sushi.png';
import masago from './img/masago-sushi.png';
import nigiri from './img/nigiri-sushi.png';
import toro from './img/toro-sushi.png';
import ikura from './img/ikura-sushi.png';
import unagi from './img/unagi-sushi.png';
import philadelphia from './img/philadelphia-sushi.png'
import sakeHandRoll from './img/sake-hand-roll-sushi.png'
import tekkamaki from './img/tekkamaki-sushi.png'


function createContent() {
    const contentDiv = document.createElement('div');
    contentDiv.classList.add("content");

    contentDiv.innerHTML = 
    `
    <div class="container">
        <div class="sushi-card">
            <img src=${tamago} />
            <div class="sushi-info">
                <p class="sushi-name">Tamago</p>
                <p class="sushi-price">$2.50</p>
                <p class="sushi-description">Tamago sushi is a delicate Japanese sushi made with seasoned egg, rice, and love</p>
            </div>
        </div>

        <div class="sushi-card">
            <img src=${tekkamaki} />
            <div class="sushi-info">
                <p class="sushi-name">Tekkamaki</p>
                <p class="sushi-price">$3.00</p>
                <p class="sushi-description">Tekkamaki sushi is a classic sushi roll filled with fresh tuna and wrapped in seaweed</p>
            </div>
        </div>

        <div class="sushi-card">
            <img src=${sabaTeriyaki} />
            <div class="sushi-info">
                <p class="sushi-name">Saba Teriyaki</p>
                <p class="sushi-price">$4.50</p>
                <p class="sushi-description">Saba teriyaki sushi features grilled mackerel with a sweet and savory teriyaki sauce</p>
            </div>
        </div>

        <div class="sushi-card">
            <img src=${masago} />
            <div class="sushi-info">
                <p class="sushi-name">Masago</p>
                <p class="sushi-price">$4.50</p>
                <p class="sushi-description">Masago sushi is a sushi roll filled with crunchy, colourful capelin roe, delivering a burst of flavour</p>
            </div>
        </div>

        <div class="sushi-card">
            <img src=${nigiri} />
            <div class="sushi-info">
                <p class="sushi-name">Nigiri</p>
                <p class="sushi-price">$5.00</p>
                <p class="sushi-description">Nigiri sushi is a simple and elegant sushi that consists of a small ball of rice topped with fresh fish</p>
            </div>
        </div>

        <div class="sushi-card">
            <img src=${toro} />
            <div class="sushi-info">
                <p class="sushi-name">Toro</p>
                <p class="sushi-price">$4.00</p>
                <p class="sushi-description">Toro sushi is a prized delicacy made from the buttery, fatty belly of tuna</p>
            </div>
        </div>

        <div class="sushi-card">
            <img src=${ikura} />
            <div class="sushi-info">
                <p class="sushi-name">Ikura</p>
                <p class="sushi-price">$4.00</p>
                <p class="sushi-description">Ikura sushi features bright, plump salmon roe that pops with a satisfying burst of briny flavour</p>
            </div>
        </div>

        <div class="sushi-card">
            <img src=${unagi} />
            <div class="sushi-info">
                <p class="sushi-name">Unagi</p>
                <p class="sushi-price">$5.00</p>
                <p class="sushi-description">Unagi sushi showcases savoury, grilled freshwater eel with a touch of sweet sauce</p>
            </div>
        </div>

        <div class="sushi-card">
            <img src=${philadelphia} />
            <div class="sushi-info">
                <p class="sushi-name">Philadelphia</p>
                <p class="sushi-price">$3.50</p>
                <p class="sushi-description">Philadelphia sushi is a popular sushi roll that combines creamy cheese, smoked salmon and avocado</p>
            </div>
        </div>

        <div class="sushi-card">
            <img src=${sakeHandRoll} />
            <div class="sushi-info">
                <p class="sushi-name">Sake Handroll</p>
                <p class="sushi-price">$3.50</p>
                <p class="sushi-description">Sake handroll is a hand-rolled sushi filled with fresh salmon and other ingredients</p>
            </div>
        </div>
    </div>
    `
    return contentDiv;
}

export default createContent;