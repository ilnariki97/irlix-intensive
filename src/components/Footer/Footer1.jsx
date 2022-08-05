import React, {useState} from 'react';

function Footer() {

    // const [value, setValue] = useState('');

    // const searchCardName = cards.filter(card => {
    //     // return card.drinkName.toLowerCase().includes(value.toLowerCase())
    //     console.log(card.drinkName)
    //
    // })
    // const searchCards1 = () => {
    //     useState
    // }
    // return card.drinkName.toLowerCase().includes(value.toLowerCase())
    // (setValue)
    // console.log(searchCards)
    return (
        <footer className="footer">
            <div className="footer__container">
                <form>
                    <input className="footer__search" type="text" placeholder="search name"
                           onChange={(event) => {
                               searchCards(event.target.value)
                           }
                           }/>
                </form>
            </div>
        </footer>
    );
}

export default Footer;
