import Rule from '../components/Rule.jsx'
import styles from './Rules.module.css'

function Rules() {
    return(
        <div className={styles['container']}>
        <h1 className={styles['header']}>Reglas</h1>

        <Rule number={1} text="• No se puede jugar ninguna clasificatoria antes del 27 de Septiembre a las 12:00:00.<br /><br />• El DuoQ Challenge comienza la misma semana que el Split 3 de la Temporada 2024.<br />• El Split 2 finaliza el 24 de Septiembre de 2024 a las 23:59:59, y el Split 3 inicia el 25 de Septiembre de 2024 a las 12:00:00.<br />• Por lo tanto, decidimos empezar el primer fin de semana que cubre el Split 3.<br /><br />• El DuoQ Challenge termina el 28 de Octubre a las 00:00. Es decir, el domingo 27 de Octubre es el último día." />

        <Rule number={2} text="• El 28 de Octubre:<br /><br />• Si estás en cola a las 00:00, tu siguiente partida no cuenta.<br />• Si estás en Selección de Campeón a las 00:00, tu partida sí cuenta.<br />• Si estás en partida a las 00:00, tu partida sí cuenta.<br />• Si alguien del lobby se sale (dodge) estando en Selección de Campeón a las 00:00, estarás en cola nuevamente y, por lo tanto, tu DuoQ Challenge habrá terminado.<br />• Si hacen Remake estando en partida a las 00:00, tu DuoQ Challenge habrá terminado." />

        <Rule number={3} text="• Todas las partidas Clasificatorias DuoQ deben ser jugadas con tu compañero/a.<br /><br />• Si juegas una Clasificatoria DuoQ solo o con alguien que no sea tu compañero, serás descalificado/a." />

        <Rule number={4} text="• Cualquier baneo o suspensión de 14 días será responsabilidad de la pareja.<br /><br />• Si te suspenden por 14 días, tu compañero tampoco podrá jugar durante ese periodo.<br /><br />• Si te penalizan con 15 minutos de espera antes de cada partida, ambos tendrán que esperar.<br /><br />• Si uno o ambos reciben un baneo permanente, serán descalificados." />

        <Rule number={5} text="• La puntuación de la pareja será el promedio de los LP de ambos jugadores.<br /><br />• La pareja con la puntuación más alta será la ganadora." />
        </div>
    )
}

export default Rules;