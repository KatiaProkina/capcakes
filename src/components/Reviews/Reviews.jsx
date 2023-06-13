import "../Reviews/Reviews.css";
const Reviews = () => {
  return (
    <div className="reviews-container">
      <img src="./img/reviews_berry.png" alt="" className="reviews_berry" />
      <img src="./img/reviews_leaf.png" alt="" className="reviews_leaf" />
      <img src="./img/review-top.png" alt="" />
      <div className="reviews-content">
        <h1 className="reviews-content-title">
          Почитайте отзывы довольных клиентов
        </h1>
        <div className="review">
          <div className="review-text-area">
            <svg
              width="40"
              height="28"
              viewBox="0 0 40 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.78049 9.99024C13.6083 9.99024 17.522 13.904 17.522 18.7317C17.522 23.5594 13.6083 27.4732 8.78049 27.4732C3.9527 27.4732 0.0390244 23.5594 0.0390244 18.7317L0 17.4829C0 7.82736 7.82736 0 17.4829 0V4.99512C14.1474 4.99512 11.0114 6.29409 8.65272 8.65272C8.19871 9.10681 7.78435 9.58993 7.41058 10.0974C7.85694 10.0272 8.31438 9.99024 8.78049 9.99024ZM31.2585 9.99024C36.0862 9.99024 40 13.904 40 18.7317C40 23.5594 36.0862 27.4732 31.2585 27.4732C26.4308 27.4732 22.5171 23.5594 22.5171 18.7317L22.478 17.4829C22.478 7.82736 30.3053 0 39.961 0V4.99512C36.6255 4.99512 33.4893 6.29409 31.1308 8.65272C30.6767 9.10681 30.2623 9.58993 29.8885 10.0974C30.3349 10.0272 30.7924 9.99024 31.2585 9.99024Z"
                fill="#5D6AFB"
              />
            </svg>
            <h2 className="review-text-title">
              Результат дико порадовал, друзья были в восторге
            </h2>
            <p className="review-text">
              Заказал капкейки, как подарок на новый год. Делать заказ было
              легко и приятно, ну а результат дико порадовал, друзья были в
              восторге. И оформление, и по вкусу капкейки были просто
              великолепны. Обязательно буду заказывать еще. Уже строю планы ,
              чтобы попробовать все начинки. Они замечательные! Даже есть было
              жалко, такая красота!
            </p>
            <a href="" className="review-link">
              Читать отзыв полностью
            </a>
          </div>
          <div className="comentator-icon">
            <img src="./img/review-icon.png" alt="" />
            <div className="review-author-name">
              <div>Даня Коновалов</div>
              <div> Студент ПМ</div>
            </div>
          </div>
        </div>
        <div className="reviews-btns">
          <button className="review-btn">
            <svg
              width="17"
              height="26"
              viewBox="0 0 17 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.106 2.70618L3.74011 13.072L14.106 23.4379"
                stroke="#2E363E"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <button className="review-btn">
            <svg
              width="16"
              height="26"
              viewBox="0 0 16 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.19567 2.70618L12.5615 13.072L2.19567 23.4379"
                stroke="#2E363E"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <img src="./img/review-bottom.png" alt="" className="review-bottom" />
    </div>
  );
};
export default Reviews;
