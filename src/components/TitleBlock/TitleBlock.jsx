
import Header from "../Header/Header"
import "../TitleBlock/TitleBlock.css"

const TitleBlock = ()=>{
    return (
        <div className="title-block">
            <Header/>
            <div className="berry"><img src="/img/berry.png" alt="" /></div>
            <div className="berry_1"><img src="/img/berry_1.png" alt="" /></div>
            <div className="berry_2"><img src="/img/berry_2.png" alt="" /></div>
            <div className="leaf"><img src="/img/leaf.png" alt="" /></div>
            <div className="title-block-information">
            <div className="title-block-content">
                <button className="btn-title-block-content">
                Очень вкусные
                </button>
                 <h1>
                 Пирожные и капкейки от 175 руб/шт. с доставкой по Москве
                 </h1>
                 <h4>
                 Приготовим за 3 часа в день заказа.
                 Доставка на авто в холодильнике.
                 </h4>
                 <div className="btn-catalog-block">
                    <button className="btn-catalog-title-block-content">
                        Перейти в каталог
                    </button>
                    <p className="catalog-description-title-block-content">
                    9 разных видов на выбор
                    </p>
                 </div>
            </div>
            </div>
        </div>
        
    )
}
export default TitleBlock