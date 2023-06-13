import '../Gallery/Gallery.css'
const Gallery = ()=>{
    return(
        <div className='gallery-container'>
            <h1 className='gallery-container-title'>Сделали более 3.000 заказов за 2 года</h1>
            <p className='gallery-container-text'>Посмотрите фото реальных заказов из нашего instagram</p>
            <div className='gallery-content'>
                <div><img src="./img/photo_1.png" alt="capcake"/></div>
                <div><img src="./img/photo_2.png" alt="capcake" /></div>
                <div><img src="./img/photo_3.png" alt="capcake" /></div>
                <div><img src="./img/photo_4.png" alt="capcake" /></div>
                <div><img src="./img/photo_5.png" alt="capcake" /></div>
                <div><img src="./img/photo_6.png" alt="capcake" /></div>
                <div><img src="./img/photo_7.png" alt="capcake" /></div>
                <div><img src="./img/photo_8.png" alt="capcake" /></div>
                <div><img src="./img/photo_9.png" alt="capcake" /></div>
            </div>
        </div>
    )
}
export default Gallery