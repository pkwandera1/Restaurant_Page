import breakfast from './breakfast.png';
import drinks from './drinks2.jpeg';
import lunch from './lunch.jpg';

function menu() {
    const menuButton = document.getElementById('menu');
    const titleDiv = document.getElementById('content');
    menuButton.addEventListener('click', () => {
        titleDiv.innerHTML = '';
        titleDiv.innerHTML = `
        <div class="menupage">
            <h1><span>EXPLORE</span> OUR MENU</h1>
        </div>

        <div id="menuitems" class="menuitems">
            <div id="item1" class="item">
                <div id="table1">
                    <table>
                        <caption>BREAKFAST</caption>
                        <thead>
                            <tr>
                                <td>Item</td>
                                <td>Price</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>House Coffee</td>
                                <td>ksh 220</td>
                            </tr>
                            <tr>
                                <td>Espresso</td>
                                <td>ksh 200</td>
                            </tr>
                            <tr>
                                <td>Americano</td>
                                <td>ksh 200</td>
                            </tr>
                            <tr>
                                <td>Classic Pancakes</td>
                                <td>ksh 660</td>
                            </tr>
                            <tr>
                                <td>Two eggs with toast </td>
                                <td>ksh 420</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="breakfastimage"></div>
            </div>
            <div id="item2" class="item">
                <div id="lunchimage"></div>
                <div id="table2">
                    <table>
                        <caption>LUNCH & DINNER</caption>
                        <thead>
                            <tr>
                                <td>Item</td>
                                <td>Price</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Fruit Salad♥</td>
                                <td>ksh 390</td>
                            </tr>
                            <tr>
                                <td>Grilled Chicken Strip </td>
                                <td>ksh 830</td>
                            </tr>
                            <tr>
                                <td>Spicy Thai beef</td>
                                <td>ksh 830</td>
                            </tr>
                            <tr>
                                <td>Chips </td>
                                <td>ksh 290</td>
                            </tr>
                            <tr>
                                <td>Mushroom Chips</td>
                                <td>ksh 500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="item3" class="item">
                <div id="table3">
                    <table>
                    <caption>DRINKS</caption>
                        <thead>
                            <tr>
                                <td>Item</td>
                                <td>Price</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Classic Lemonade</td>
                                <td>ksh 270</td>
                            </tr>
                            <tr>
                                <td>Strawberry Lemonade  </td>
                                <td>ksh 280</td>
                            </tr>
                            <tr>
                                <td>Mango Mania </td>
                                <td>ksh 460</td>
                            </tr>
                            <tr>
                                <td>Tropical Mix </td>
                                <td>ksh 460</td>
                            </tr>
                            <tr>
                                <td>Soda</td>
                                <td>ksh 160</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="drinksimage"></div>
            </div>
        </div>`;

        // Append images after elements are created
        const breakfastImage = new Image();
        breakfastImage.src = breakfast;
        breakfastImage.classList.add('menu-image', 'breakfast-image');
        const breakfastDiv = document.getElementById('breakfastimage');
        breakfastDiv.appendChild(breakfastImage);

        const drinksImage = new Image();
        drinksImage.src = drinks;
        drinksImage.classList.add('menu-image', 'drinks-image');
        const drinksDiv = document.getElementById('drinksimage');
        drinksDiv.appendChild(drinksImage);

        const lunchImage = new Image();
        lunchImage.src = lunch;
        lunchImage.classList.add('menu-image', 'lunch-image');
        const lunchDiv = document.getElementById('lunchimage');
        lunchDiv.appendChild(lunchImage);
    });
}

menu();
