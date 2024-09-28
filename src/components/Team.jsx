import PropTypes from 'prop-types';
import styles from './Team.module.css';

// Importar las imágenes
import unranked from '../assets/Ranks/unranked.png'
import ironLogo from '../assets/Ranks/iron.png';
import bronzeLogo from '../assets/Ranks/bronze.png';
import silverLogo from '../assets/Ranks/silver.png';
import goldLogo from '../assets/Ranks/gold.png';
import platinumLogo from '../assets/Ranks/platinum.png';
import emeraldLogo from '../assets/Ranks/emerald.png';
import diamondLogo from '../assets/Ranks/diamond.png';
import masterLogo from '../assets/Ranks/master.png';

// Mapear los tiers a sus imágenes
const tierImages = {
    'UNRANKED': unranked,
    'IRON': ironLogo,
    'BRONZE': bronzeLogo,
    'SILVER': silverLogo,
    'GOLD': goldLogo,
    'PLATINUM': platinumLogo,
    'EMERALD': emeraldLogo,
    'DIAMOND': diamondLogo,
    'MASTER': masterLogo,
};

function Team({rank, team}) {
    const [tier] = team.elo.split(' '); // Extraer el tier del elo

    return (
        <div className={styles['team']}>
            <p>{rank}</p>
            <p className={styles['link-box']}>
                <a href={team.linkduo} target="_blank" rel="noopener noreferrer">{team.teamName}</a>
            </p>
            <p className={styles['link-box']}>
                <a href={team.link1} target="_blank" rel="noopener noreferrer">{team.name1}</a>
            </p>
            <p className={styles['link-box']}>
                <a href={team.link2} target="_blank" rel="noopener noreferrer">{team.name2}</a>
            </p>
            <p className={styles['win']}>{team.winGames}</p>
            <p className={styles['lost']}>{team.lostGames}</p>
            <p>{team.winrate}%</p>
            <p>
                <img 
                    src={tierImages[tier]} 
                    alt={tier} 
                    className={styles['tier-icon']}
                />
                <span className={styles['elo-text']}>{team.elo}</span>
            </p>
            <p>{team.lps} LPs</p>
        </div>
    );
}

Team.propTypes = {
    rank: PropTypes.number.isRequired,
    team: PropTypes.shape({
        teamName: PropTypes.string.isRequired,
        linkduo: PropTypes.string.isRequired,
        name1: PropTypes.string.isRequired,
        link1: PropTypes.string.isRequired,
        name2: PropTypes.string.isRequired,
        link2: PropTypes.string.isRequired,
        winGames: PropTypes.number.isRequired,
        lostGames: PropTypes.number.isRequired,
        winrate: PropTypes.number.isRequired,
        elo: PropTypes.string.isRequired,
        lps: PropTypes.number.isRequired,
    }).isRequired,
};

export default Team;
