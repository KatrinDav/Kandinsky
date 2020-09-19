import React from 'react';
import Title from '../components/Title';
import Description from '../components/Description'



const About = () => {

    return (
        <section className="wrapper">
            <Title>
                Kilka słów o abstrakcjonizmie
            </Title>
            <Description>

                <p>Malarstwo abstrakcjonistyczne narodziło się Rosji na początku dwudziestego wieku. Prekursorem abstrakcjonizmu w malarstwie był Wassily Kandinsky, jednak samo pojęcie abstrakcji w sztuce i nie tylko towarzyszyło ludziom od zawsze.</p>

                <p>Sztuka abstrakcyjna to wykluczenie wszelkiego rodzaju form – ram mających na celu określanie przedmiotów, perspektyw i skal. Malarze i inni artyści tego okresu odrzucili właśnie od lat przyjęte nazwy do określonych kształtów i np. linię zastąpili plamą lub pion-poziomem. Abstrakcjonizm narodził się z kilku znanych już kierunków sztuki: kubizmu, futuryzmu i impresjonizmu, czyli nurtów bardzo do siebie podobnych. Także najwięksi przedstawiciele abstrakcjonizmu zaczynali, jako twórcy tych trzech kierunków.</p>
                <div className="img-about">
                    <img src={require('../img/abstrakcja-2.jpg')} alt="foto" />
                </div>

                <p>Pierwszy obraz abstrakcjonistyczny to dzieło Kandinskiego pt. „Akwarela abstrakcyjna”, a najbardziej znany twórca tego nurtu to Edvard Munch (znany głównie jako twórca ekspresjonistyczny słynnego obrazu „Krzyk”), przedstawiciel tzw. abstrakcjonizmu niegeometrycznego, a dokładniej ekspresjonizmu abstrakcyjnego. Do abstrakcjonizmu niegeometrycznego zalicza się też: kinetyzm, malarstwo barwnych płaszczyzn. Do abstrakcjonizmu geometrycznego zaliczamy suprematyzm, De Stijl, minimal art, optical art, konstruktywizm, neoplastycyzm i szkołę Bauhaus. Poszczególne te nurty związane są z różnego rodzaju narodowościami i ugrupowaniami malarzy, jakie zawiązywały się w poszczególnych krajach europejskich. Neoplastycyzm popularny był w Holandii, a w Rosji konstruktywizm.</p>

                <p>Inni znani przedstawiciele malarstwa abstrakcyjnego to: Jackson Pollock, Sam Francis, Kazimierz Malewicz, Piet Mondrian.</p>


            </Description>
        </section>
    );
}

export default About;