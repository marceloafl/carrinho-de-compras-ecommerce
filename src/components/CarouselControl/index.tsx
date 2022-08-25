import {FaChevronRight} from 'react-icons/fa';
import {FaChevronLeft} from 'react-icons/fa';
import style from './CarouselControl.module.scss';

interface Props{
    goToNextIndex: () => void,
    goToPreviousIndex: () => void,
}

function CarouselControl({goToNextIndex, goToPreviousIndex}: Props){
    return(
        <div className={style['carousel-control']}>
            <FaChevronLeft
                onClick={goToPreviousIndex}
            />
            <FaChevronRight
                onClick={goToNextIndex}
            />
        </div>
    )
}

export default CarouselControl;