import { useEffect } from "react";
import "./style.scss";

const Contacts = () => {
    useEffect(() => {
        ymaps.ready(init);

        function init() {
            var myMap = new ymaps.Map("map", {
                center: [56.86519426, 53.11315898],
                zoom: 14,
            });

            var myPlacemark = new ymaps.Placemark(
                [56.86519426, 53.11315898],
                {},
                {
                    preset: "islands#grayDotIcon",
                }
            );
            
            myMap.controls.remove("geolocationControl");
            myMap.controls.remove("searchControl");
            myMap.controls.remove("trafficControl");
            myMap.behaviors.disable(["scrollZoom"]);

            myMap.geoObjects.add(myPlacemark);
        }
    }, []);

    return (
        <main className="main">
            <article className="contacts">
                <div className="container">
                    <h1 className="logo logo-title">
                        где найти хостел
                        <br />
                        <span className="logo">Happy Cats</span>
                    </h1>

                    <section className="contacts-list">
                        <div className="grid-item">
                            <h3 className="contacts-list__subtitle">
                                звоните:
                            </h3>
                        </div>
                        <div className="grid-item">
                            <p className="contacts-list__text">
                                +7 (3412) 78-78-78
                            </p>
                        </div>
                        <div className="grid-item">
                            <h3 className="contacts-list__subtitle">пишите:</h3>
                        </div>
                        <div className="grid-item">
                            <p className="contacts-list__text">
                                happy.cats@gmail.com
                            </p>
                        </div>
                        <div className="grid-item">
                            <h3 className="contacts-list__subtitle">
                                приезжайте:
                            </h3>
                        </div>
                        <div className="grid-item">
                            <p className="contacts-list__text">
                                Удмуртия
                                <br />
                                Ижевск
                                <br />
                                Липовая Роща
                            </p>
                        </div>
                        <div className="grid-item">
                            <div className="map" id="map"></div>
                        </div>
                        <div className="grid-item">
                            <p className="contacts-list__text">
                                будем рады волонтерам и волонтеркам, которые
                                любят котиков и с удовольствием ухаживают за
                                ними.
                                <br />
                                ну и конечно же носят на ручках, ласкают, играют
                                и гуляют
                            </p>
                        </div>
                    </section>
                </div>
            </article>
        </main>
    );
};

export default Contacts;
