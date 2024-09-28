import PropTypes from 'prop-types'
import styles from './Price.module.css'


function Price(props) {
    return(
        <div className={styles['card']}>
            <div className={styles['title-1']}>Premio a la {props.title}:</div>
            <div className={styles['content']} dangerouslySetInnerHTML={{ __html: props.text }}></div>
            <div className={styles['bar']}>
                <div className={styles['emptybar']}></div>
                <div className={styles['filledbar']}></div>
            </div>
        </div>
    )
}
Price.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string
}

export default Price;