import PropTypes from 'prop-types'
import styles from './Rule.module.css'


function Rule(props) {
    return(
        <div className={styles['card']}>
            <div className={styles['title-1']}>Regla Nº{props.number}:</div>
            <div className={styles['content']} dangerouslySetInnerHTML={{ __html: props.text }}></div>
            <div className={styles['bar']}>
                <div className={styles['emptybar']}></div>
                <div className={styles['filledbar']}></div>
            </div>
        </div>
    )
}
Rule.propTypes = {
	number: PropTypes.number,
	text: PropTypes.string
}

export default Rule;