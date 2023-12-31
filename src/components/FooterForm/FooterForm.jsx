import "../FooterForm/FooterForm.css";
const FooterForm = () => {
  return (
    <div className="footer-container">
      <img src="./img/footer_berry_1.png" alt="" className="footer_berry_1" />
      <img src="./img/footer_berry_2.png" alt="" className="footer_berry_2" />
      <img src="./img/footer_leaf_1.png" alt="" className="footer_leaf_1" />
      <img src="./img/footer_leaf_2.png" alt="" className="footer_leaf_2" />
      <img src="./img/futer-top.png" alt="" />
      <form action="" className="futer-form">
        <p className="futer-form-title">Чтобы сделать заказ, укажите телефон</p>
        <p className="futer-form-text">
          Мы перезвоним в течение 15 минут, чтобы уточнить ваши пожелания
        </p>
        <div className="futer-input">
          <div className="icon-phone">
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.2744 8.758C11.7684 8.25849 11.1368 8.25849 10.634 8.758C10.2505 9.13828 9.86705 9.51855 9.49 9.90527C9.38687 10.0116 9.29986 10.0342 9.17418 9.96328C8.92603 9.82793 8.66177 9.71836 8.4233 9.57011C7.31148 8.87079 6.38012 7.97167 5.55512 6.95975C5.14584 6.45702 4.78168 5.91883 4.52709 5.31297C4.47553 5.19051 4.4852 5.10994 4.5851 5.01004C4.9686 4.63943 5.34243 4.25916 5.71948 3.87888C6.24477 3.35037 6.24477 2.73161 5.71626 2.19987C5.41655 1.89694 5.11684 1.60046 4.81713 1.29753C4.50776 0.988151 4.2016 0.675553 3.889 0.369399C3.38305 -0.123669 2.7514 -0.123669 2.24867 0.372622C1.86195 0.752897 1.49134 1.14284 1.09818 1.51667C0.734015 1.86149 0.550323 2.28366 0.511651 2.77673C0.45042 3.57918 0.647003 4.3365 0.924152 5.07449C1.49134 6.60204 2.35502 7.95878 3.40238 9.20273C4.81713 10.885 6.50581 12.2159 8.4813 13.1763C9.37076 13.6081 10.2924 13.9401 11.2947 13.9948C11.9843 14.0335 12.5838 13.8595 13.0639 13.3213C13.3926 12.9539 13.7633 12.6188 14.1113 12.2675C14.6269 11.7454 14.6301 11.1138 14.1177 10.5981C13.5054 9.98261 12.8899 9.37031 12.2744 8.758Z"
                fill="#929AA2"
              />
            </svg>
          </div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Номер телефона"
            className="input"
          />
          <button className="futer-btn">Сделать заказ</button>
        </div>
        <div className="futer-checkbox">
          <input type="checkbox" name="" id="futer-checkbox" />
          <label id="futer-checkbox">
            Нажимая кнопку, вы соглашаетесь с условиями обработки персональных
            данных
          </label>
        </div>
      </form>
      <div className="futer-links">
        <a href="">Согласие на обработку данных</a>
        <a href="">Служба поддержки</a>
        <a href="">Политика конфиденциальности</a>
      </div>
      <div className="futer-company-information">
        © nazvaniesaita.ru, 2054 | Название компании или ИП ОГРН 0000000000000
      </div>
    </div>
  );
};
export default FooterForm;
