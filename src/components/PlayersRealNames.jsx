import PropTypes from 'prop-types';
import styles from './PlayersRealNames.module.css';

function PlayersRealNames({ team }) {
    return (
        <div className={styles['team']}>
            <p>{team.teamName}</p>
            <p>{team.name1}</p>
            <p>{team.name2}</p>
        </div>
    );
}

PlayersRealNames.propTypes = {
    team: PropTypes.shape({
        teamName: PropTypes.string.isRequired,
        name1: PropTypes.string.isRequired,
        name2: PropTypes.string.isRequired,
    }).isRequired,
};

export default PlayersRealNames;
