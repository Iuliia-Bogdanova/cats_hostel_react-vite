import "./style.scss";

const Contacts = () => {
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
}

export default Contacts;