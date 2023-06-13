import "../Catalog/Catalog.css";

const Catalog = () => {
  return (
    <div className="catalog-container">
      <img src="./img/catalog_berry_1.png" alt="" className="catalog_berry" />
      <img src="./img/catalog_leaf_1.png" alt="" className="catalog_leaf_1" />
      <img src="./img/catalog_leaf_2.png" alt="" className="catalog_leaf_2" />
      <div className="catalog-block">
        <h2>Для любых событий и дорогих вам людей</h2>
        <div className="catalog-block-content">
          <div className="catalog-block-content-item 1">
            <div>
              <img src="./img/img_1.png" alt="capcake" />
            </div>
            <div className="catalog-block-content-item-description">
              <h4>Кремовый замок</h4>
              <p>Нежный крем любого цвета по выбору, вафельная основа.</p>
              <span>150 р/шт</span>
              <button className="catalog-block-content-item-btn">
                Заказать
              </button>
            </div>
          </div>
          <div className="catalog-block-content-item 2">
            <div>
              <img src="./img/img_2.png" alt="capcake" />
            </div>
            <div className="catalog-block-content-item-description">
              <h4>Малиновый рай</h4>
              <p>Воздушный крем, темная основа и ягода малины</p>
              <span>160 р/шт</span>
              <button className="catalog-block-content-item-btn">
                Заказать
              </button>
            </div>
          </div>
          <div className="catalog-block-content-item 3">
            <div>
              <img src="./img/img_3.png" alt="capcake" />
            </div>
            <div className="catalog-block-content-item-description">
              <h4>Феерверк</h4>
              <p>Разноцветный крем, с бисквитной основой</p>
              <span>150 р/шт</span>
              <button className="catalog-block-content-item-btn">
                Заказать
              </button>
            </div>
          </div>
          <div className="catalog-block-content-item 4">
            <div>
              <img src="./img/img_4.png" alt="capcake" />
            </div>
            <div className="catalog-block-content-item-description">
              <h4>Шоколадный мир</h4>
              <p>Ореховая стружка, нежный крем и шоколадная основа</p>
              <span>170 р/шт</span>
              <button className="catalog-block-content-item-btn">
                Заказать
              </button>
            </div>
          </div>
          <div className="catalog-block-content-item 5">
            <div>
              <img src="./img/img_5.png" alt="capcake" />
            </div>
            <div className="catalog-block-content-item-description">
              <h4>Слезы дракона</h4>
              <p>Нежный крем любого цвета по выбору, вафельная основа</p>
              <span>165 р/шт</span>
              <button className="catalog-block-content-item-btn">
                Заказать
              </button>
            </div>
          </div>
          <div className="catalog-block-content-item 6">
            <div>
              <img src="./img/img_6.png" alt="capcake" />
            </div>
            <div className="catalog-block-content-item-description">
              <h4>Летняя фантазия</h4>
              <p>Украшения в форме сердец для любимого человека</p>
              <span>155 р/шт</span>
              <button className="catalog-block-content-item-btn">
                Заказать
              </button>
            </div>
          </div>
          <div className="catalog-block-content-item 7">
            <div>
              <img src="./img/img_7.png" alt="capcake" />
            </div>
            <div className="catalog-block-content-item-description">
              <h4>Мыс безумия</h4>
              <p>Разноцветная основа, стружка и нежный крем</p>
              <span>200 р/шт</span>
              <button className="catalog-block-content-item-btn">
                Заказать
              </button>
            </div>
          </div>
          <div className="catalog-block-content-item 8">
            <div>
              <img src="./img/img_8.png" alt="capcake" />
            </div>
            <div className="catalog-block-content-item-description">
              <h4>Облачная сказка</h4>
              <p>Светлое основание, нежный крем со стружкой сверху</p>
              <span>140 р/шт</span>
              <button className="catalog-block-content-item-btn">
                Заказать
              </button>
            </div>
          </div>
          <div className="catalog-block-content-item 9">
            <div>
              <img src="./img/img_9.png" alt="capcake" />
            </div>
            <div className="catalog-block-content-item-description">
              <h4>Темный рыцарь</h4>
              <p>Темная основа, нежный крем и вкусные шарики</p>
              <span>170 р/шт</span>
              <button className="catalog-block-content-item-btn">
                Заказать
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Catalog;
