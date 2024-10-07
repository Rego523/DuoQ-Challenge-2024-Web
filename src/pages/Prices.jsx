import Price from '../components/Price.jsx'
import styles from './Prices.module.css'

function Prices() {
    return(
        <div className={styles['container']}>
            <h1 className={styles['header']}>Premios</h1>

            <Price title="Pareja Ganadora" text= "• 17€ de recompensa para la pareja ganadora (a repartir como ellos quieran)."/>
            <Price title="Pareja con mas Games" text= "• 5.5€ de recompensa para la pareja con más games jugados (a repartir como ellos quieran)."/>
        </div>
    )
}

export default Prices;