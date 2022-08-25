import style from  './BannerTop.module.scss';

function BannerTop (){
    return (
        <div className={style['banner-top']}>
            <h3>Use o cupom <span>DESCONTO10</span></h3>
            <p>Ganhe 10% de desconto em suas compras.</p>
        </div>
    )
}

export default BannerTop;