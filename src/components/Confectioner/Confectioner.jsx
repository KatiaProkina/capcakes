import "../Confectioner/Confectioner.css";
const Confectioner = () => {
  return (
    <div className="confectioner-container">
      <img src="./img/conditer_berry.png" alt="" className="conditer_berry" />
      <img src="./img/conditer_leaf.png" alt="" className="conditer_leaf_1" />
      <img src="./img/conditer_leaf.png" alt="" className="conditer_leaf_2" />
      <img src="./img/conditer_leaf.png" alt="" className="conditer_leaf_3" />
      <div className="confectioner-block">
        <div className="confectioner-information">
          <button className="confectioner-information-btn-one">
            Кто готовит
          </button>
          <h1 className="confectioner-information-title">
            Лично приготовлю и все красиво упакую для вашего события
          </h1>
          <ul className="confectioner-information-list">
            <li className="confectioner-information-list-item">
              Проконсультирую по выбору капкейков и придумаю нестандартную идею
            </li>
            <li className="confectioner-information-list-item">
              Приготовлю капкейки для вашего события, которые обязательно всем
              понравятся
            </li>
            <li className="confectioner-information-list-item">
              Аккуратно и красиво все упаковаю, если вы хотите сделать приятный
              подарок
            </li>
          </ul>
          <button className="confectioner-information-btn-two">
            Задать вопрос Хабарову
          </button>
        </div>
        <div className="confectioner-icon">
          <img src="./img/confectioner.png" alt="" />
          <div className="confectioner-name-presentation">
            <img src="./img/name.png" alt="" />
            <img src="./img/name_1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Confectioner;
