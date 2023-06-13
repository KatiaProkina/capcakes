import "../Content/Content.css";
const Content = () => {
  return (
    <div className="content-container">
      <img src="./img/content_berry_1.png" alt="" className="content_berry" />
      <img src="./img/content_leaf.png" alt="" className="content_leaf" />
      <div>
        <img src="./img/img_top.png" alt="top" />
      </div>
      <div className="content-item">
        <img src="./img/phone_1.png" alt="" />

        <div className="title-block-content content-item-discription">
          <button className="btn-title-block-content">
            Не нашли то, что нужно?
          </button>
          <h1>Приготовим заказ любой сложности по фото или эскизу</h1>
          <h4>
            Загрузите фотографию или эскиз капкейков, и мы рассчитаем стоимость
            за 30 минут.
          </h4>
          <div className="btn-catalog-block">
            <button className="btn-catalog-title-block-content">
              Зарузите фотографию
            </button>
          </div>
        </div>
      </div>
      <img
        src="./img/img_bottom.png"
        alt="bottom"
        className="content-container-img-bottom"
      />
    </div>
  );
};
export default Content;
