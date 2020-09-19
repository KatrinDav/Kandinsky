import React, { useState } from 'react';
import Title from '../components/Title';
import Item from '../components/Item';
import Modal from '../components/Modal';

const artsTab = [
    { id: 1, src: require('../img/1908.jpg'), title: 'Murnau Street With Women, 1908' },
    { id: 2, src: require('../img/1909.jpg'), title: 'Weilheim - Marienplatz, 1909' },
    { id: 3, src: require('../img/lastSupper.jpg'), title: 'Last Supper, 1909 - 1910' },
    { id: 4, src: require('../img/1910.jpg'), title: 'Untitled First Abstract Watercolor, 1910' },
    { id: 5, src: require('../img/kompozycja_5.jpg'), title: 'Composition V, 1911' },
    { id: 6, src: require('../img/1912.jpg'), title: 'The Last Judgment, 1912' },
    { id: 7, src: require('../img/kwadraty.jpg'), title: 'Squares with Concentric Circles, 1913' },
    { id: 8, src: require('../img/kompozycja_7.jpg'), title: 'Composition VII, 1913' },
    { id: 9, src: require('../img/zolte.jpg'), title: 'Little Painting with Yellow, 1914' },
    { id: 10, src: require('../img/george.jpg'), title: 'Rider St.George, 1915-1916' },
    { id: 11, src: require('../img/watercolor.jpg'), title: 'Watercolor for Poul Bjerre, 1916' },
    { id: 12, src: require('../img/Imatra.jpg'), title: 'Imatra, 1917' },
    { id: 13, src: require('../img/39.jpg'), title: 'In Grey, 1919' },
    { id: 14, src: require('../img/draft.jpg'), title: 'Draft for Mural In The Unjuried Art Show, 1922' },
    { id: 15, src: require('../img/black.jpg'), title: 'Two Movements, 1924' },
    { id: 16, src: require('../img/black-red.jpg'), title: 'Black-Red, 1928' },
    { id: 17, src: require('../img/aglow.jpg'), title: 'Inner Alliance, 1929' },
    { id: 18, src: require('../img/diagonal.jpg'), title: 'Diagonal, 1930' },
    { id: 19, src: require('../img/fun.jpg'), title: 'Serious Fun, 1930' },
    { id: 20, src: require('../img/striped.jpg'), title: 'Striped, 1934' },
    { id: 21, src: require('../img/1.jpg'), title: 'Gravitation, 1935' },
    { id: 22, src: require('../img/muses.jpg'), title: 'Muses' },
    { id: 23, src: require('../img/green.jpg'), title: 'Green Accent, 1935' },
    { id: 24, src: require('../img/fixed.jpg'), title: 'Fixed, 1935' },
    { id: 25, src: require('../img/comp9.jpg'), title: 'Composition IX, 1936' },
    { id: 26, src: require('../img/domin.jpg'), title: 'Dominant Curve, 1936' },
    { id: 27, src: require('../img/thirty.jpg'), title: 'Thirty, 1937' },
    { id: 28, src: require('../img/open.jpg'), title: 'The Opening, 1938' },
    { id: 29, src: require('../img/kompozycja_x.jpg'), title: 'Composition X, 1939' },
    { id: 30, src: require('../img/around.jpg'), title: 'Around the Circle, 1940' },
    { id: 31, src: require('../img/little.jpg'), title: 'Little Accents, 1940' },
    { id: 32, src: require('../img/four.jpg'), title: 'Four Figures on Three Squares, 1943' },
    { id: 33, src: require('../img/last.jpg'), title: 'Last Watercolour, 1944' },

];

const Arts = () => {
    const [data, setData] = useState(artsTab);
    const [isOpen, setModal] = useState(false);
    const [modalData, setModalData] = useState([]);

    const openModal = (item) => {
        setModal(true);
        setModalData(item)
    }

    const closeModal = () => {
        setModal(false)
    }

    return (
        <>
            <Title>Wybrane prace Kandinskiego <br /> z lat 1908 - 1944</Title>
            <div className="wrapper_arts">
                {data.map((item) => <Item key={item.id} src={item.src} title={item.title}
                    openModal={() => openModal(item)}
                />)}
            </div>
            <Modal item={modalData} isOpen={isOpen} closeModal={closeModal} />

        </>
    );
}

export default Arts;