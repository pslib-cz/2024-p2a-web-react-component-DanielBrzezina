import {FC} from  "react"
import style from "./PercentView.module.css"
type PercentViewType = {
    vlaue: number 
    max: number
    makeColor: (percent: number) => string
}

const PercentView: FC<PercentViewType> = ({vlaue,max, makeColor}) => {

    return(
        <div className={style.percentview} style={ {backgroundColor:makeColor(vlaue/max)} }>
            <p>{vlaue / max *100}%</p>
            <div className={style.bar} style={{ width:max}}>
                <div className={style.barcolor} style={{ width:`${vlaue/max * 100}%`}}>

                </div>

            </div>
        </div>
    )
}
export default PercentView