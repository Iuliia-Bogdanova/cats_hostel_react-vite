import Slider from "../../components/Slider/Slider";
// import sliderData from "../../sliderData.json";
import "./style.scss";

import photo_1 from "../../assets/photo/photo_1.jpg";
import photo_2 from "../../assets/photo/photo_2.jpg";
import photo_3 from "../../assets/photo/photo_3.jpg";
import photo_4 from "../../assets/photo/photo_4.jpg";
import photo_5 from "../../assets/photo/photo_5.jpg";
import photo_6 from "../../assets/photo/photo_6.jpg";
import photo_7 from "../../assets/photo/photo_7.jpg";
import photo_8 from "../../assets/photo/photo_8.jpg";
import photo_9 from "../../assets/photo/photo_9.jpg";
import photo_10 from "../../assets/photo/photo_10.jpg";

const sliderData = [
  {
    name: "нюша",
    text: "хожу где вздумается и гуляю сама по себе",
    img: photo_1
  },
  {
    name: "пуся",
    text: "меня гладят и дают мягкие подушечки",
    img: photo_2
  },
  {
    name: "гранпи",
    text: "кормят великолепно",
    img: photo_3,
  },
  {
    name: "мистер кот денис",
    text: "мой карась!",
    img: photo_4
  },
  {
    name: "лотя и люся",
    text: "мы прекрасны и ухожены",
    img: photo_5
  },
  {
    name: "суслик",
    text: "у меня огромная кровать и много игрушек",
    img: photo_6
  },
  {
    name: "люся и веня",
    text: "нет ничего лучше крепкого здорового сна",
    img: photo_7
  },
  {
    name: "мисс бибабель",
    text: "я очень творческая натура",
    img: photo_8
  },
  {
    name: "мистер кот денис",
    text: "люблю гулять. попробуй найди",
    img: photo_9
  },
  {
    name: "суслик",
    text: "самый прекрасный в мире котинька",
    img: photo_10
  }
];


const Gallery = () => {
    return (
      <main className="main-gallery">
        <div className="container">
          <div className="button-box">
            <div className="title">
              <h1 className="logo logo-title">
                отзывы питомцев
                <br />
                <span className="logo">Happy Cats</span>
              </h1>
            </div>
          </div>

          <Slider data={sliderData} />

        </div>
      </main>
    );
}

export default Gallery;