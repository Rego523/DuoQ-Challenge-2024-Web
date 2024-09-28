import Price from '../components/Price.jsx'
import styles from './Prices.module.css'

function Prices() {
    return(
        <div className={styles['container']}>
            <h1 className={styles['header']}>Premios</h1>

            <Price title="Pareja Ganadora" text= "• XX€ de recompensa para la pareja ganadora (a repartir como ellos quieran)."/>
        </div>
    )
}

export default Prices;