import React from 'react';
import { NavLink } from 'react-router-dom';

const Themes = () => {
    return (
        <section className="container">

            <div className="row-item about">
                <h2>
                    abstrakcjonizm <br />
                    w sztuce
                </h2>
                <NavLink to="/about">
                    <div className="image">
                        <img src={require('../img/abstrakcja-2.jpg')} alt="foto" />
                    </div>
                </NavLink>
            </div>


            <div className="row-item bio">
                <h2>
                    Kandinsky <br />
                    <span>&#8210;</span>krótkie bio
                </h2>
                <NavLink to="/bio">
                    <div className="image">
                        <img src={require('../img/kandinsky.jpg')} alt="foto" />
                    </div>
                </NavLink>
            </div>



            <div className="row-item art">
                <h2>
                    Kandinsky <br />
                    <span>&#8210;</span>malarstwo
                </h2>
                <NavLink to="/arts">
                    <div className="image">
                        <img src={require('../img/kwadraty.jpg')} alt="foto" />
                    </div>
                </NavLink>
            </div>

        </section>
    );
}

export default Themes;