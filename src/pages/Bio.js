import React from 'react';
import Title from '../components/Title';
import Description from '../components/Description';

const Bio = () => {
    return (
        <section className="main-bio">
            <Title>
                Wassily Kandinsky
            </Title>
            <Description>
                <p>Wassily Kandinksy to urodzony w Moskwie, 4.12.1866r.
                artysta, jeden z najznakomitszych przedstawicieli abstrakcjonizmu. W Europie był pionierem tego
                nurtu w malarstwie – to, co tworzył nie było podobne do jakiegokolwiek realnego przedmiotu czy wytworu
                natury. Jego obrazy stanowią przykład abstrakcjonizmu niegeometrycznego, na który składają się
                kierunki:
                kinetyzm, informel oraz color field painting.</p>

                <div className="img-bio">
                    <img src={require('../img/kandinsky_color.jpg')} alt="foto" />
                </div>
                <p>Z malarstwem na stałe Kandinsky związał się po 30. roku życia. Wcześniej, studiował ekonomię oraz
                prawo na uniwersytecie w Moskwie. Swoją artystyczną edukację rozpoczął w Monachium, gdzie wyjechał w
                1896r. Po roku porzucił rozpoczęte studia. Początek światowej sławy Kandinskiego przypada na 1912r., po
                wielkiej wystawie jego prac. Całkowicie nowy kierunek w sztuce zapoczątkowany przez malarza, czyli
                abstrakcjonizm, kształtował się w latach 1910-1914. Początkowy etap twórczości Kandinskiego pozostawał
                pod wpływem nurtu neoimpresjonizmu oraz ekspresjonizmu. Jego malarstwo to rytm kompozycyjny i kolor.
                Stopniowo malowane przez Kandinskiego obiekty zaczęły tracić swoją przedmiotowość, coraz bardziej
                sylwetowe i wyzbyte detali stawały się formy rzeczy, postaci i elementy krajobrazu,
                nabierając charakteru płaskich plam, obrysowane rozedrganą linią.
                Teoretyczne podstawy swej sztuki przedstawił w rozprawie Über das
                Geistige
                in der Kunst (wydanie 1912), która wpłynęła na rozwój ekspresjonizmu i sztuki abstrakcyjnej.
                Przełom nastąpił w 1910r., kiedy to przyjmuje się rozpoczęcie przez Kandinskiego abstrakcjonizmu.
                Za pierwsze dzieło utrzymane w tej estetyce uważa się „Akwarelę abstrakcyjną”. W obrazach tworzonych w
                latach 1910 - 1920 widzimy charakterystyczny dynamiczny, swobodny układ barwnych plam mieszający się z
                elementami graficznymi.
                Kandinsky nazywał je: Impresjami, Improwizacjami, Kompozycjami, opatrując kolejnymi numerami.</p>

                <p>Artysta zupełnie odchodzi od przedmiotowości. Kompozycja jest uporządkowana, a układ podlega
                geometryzacji; gama kolorystyczna stała się bardziej powściągliwa. Ten okres twórczości nazywany jest
                „dramatycznym”.
                Lata 1920–1925 to faza „architekturalna”, w czasie której artysta pozostaje pod wpływem rosyjskiego
                konstruktywizmu, operując geometrycznymi formami, w których utrzymuje się dynamiczna ekspresja,
                widoczna w takich obrazach np.: Biała kreska 1920, Czerwona plama II, 1921. Główne dzieło tej fazy to
                Kompozycja VIII, 1923. Składa się z systemu dynamicznych linii, różnej wielkości kół i półokręgów,
                trójkątów oraz motywu szachownicy.</p>

                <p>Lata 1926–1928 to „okres kół”. Kompozycje składały się z koncentrycznych lub przenikających się
                kręgów.Dominowały zarazem układy bardziej statyczne np.: Kilka kół 1926, Akcent w różu 1926.
                Ostatni okres to lata 1934–1944, nazywany „okresem paryskim”. To synteza form z poszczególnych
                okresów. Rygor ustąpił poetyckiej fantazji. Znów aluzje figuralne, np.:Trzy różnobarwne postaci 1934,
                Kompozycja IX 1936, Kompozycja X 1939.
                Według Kandinskiego podstawowym celem sztuki jest poszukiwanie i wyzwolenie tkwiących w
                człowieku sił duchowych. Zatem prawdziwa sztuka powstaje dopiero wówczas, gdy twórca działa pod wpływem
                „konieczności wewnętrznej”, kiedy jego malarstwo staje się wyrazem potężnego ładunku emocji i głęboko
                ukrytych sił mistycznych. Aby wkroczyć w świat abstrakcji, musimy wyzbyć się tego, co zewnętrzne, i
                kierować się uczuciem. Przeprowadzając analizę form i barw, Kandinsky stwierdzał, że każda forma jest
                „uzewnętrznieniem treści wewnętrznych”. Tu powołuje do życia elementy abstrakcyjne nawiązujące do
                geometrii: kwadrat, koło, trójkąt, romb, trapez i mnóstwo innych form, coraz bardziej skomplikowanych i
                niemających nazw geometrycznych.
                Kandinsky umiera w Paryżu 13 grudnia 1944 roku. </p>

            </Description>
        </section>
    );
}

export default Bio;