import "./style.scss";

const Home = () => {
    return (
        <main className="main">
            <article className="about">
                <div className="container">
                    <h1 className="logo logo-title">
                    хостел для котиков
                    <br />
                    <span className="logo">Happy Cats</span>
                    </h1>
                    <div className="about-text">
                    <p>
                        В этом хостеле заботятся о котиках, человеки-родители которых в
                        отъезде.
                    </p>
                    <p>
                        Внимательные хосты и заботливые волонтеры ухаживают за питомцами
                        и играют с ними.
                    </p>
                    <p>
                        Котики из разных семей живут в отдельных комнатах, у них есть
                        свои мягкие кроватки и личные горшочки, игрушки и корм,
                        подобранный специально для каждого из них.
                    </p>
                    <p>Любители прогулок могут гулять в просторном дворе.</p>
                    <p>
                        В доме есть специальная комната для игр, где общительные
                        котики могут встречаться с друзьями и играть все вместе.
                    </p>
                    <p>Девиз хостела - забота и свобода.</p>
                    <p>Счастливые и здоровые котики - гордость Happy Cats!</p>
                    </div>
                </div>
            </article>
        </main>
    );
}

export default Home;