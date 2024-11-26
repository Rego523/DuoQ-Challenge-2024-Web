import { Link, useLocation } from "react-router-dom";
import styles from './Navbar.module.css';

import lolLogo from '../assets/League-of-Legends-Logo.png';
import duqLogo from '../assets/DuoQChallenge2024-logo.png';
import rankIconBlack from '../assets/rankIconBlack.svg';
import resultadosIconBlack from '../assets/rankIconBlack.svg';
import pricesIconBlack from '../assets/pricesIconBlack.svg';
import rulesIconBlack from '../assets/rulesIconBlack.svg';
import rankIconWhite from '../assets/rankIconWhite.svg';
import resultadosIconWhite from '../assets/rankIconWhite.svg';
import pricesIconWhite from '../assets/pricesIconWhite.svg';
import rulesIconWhite from '../assets/rulesIconWhite.svg';

function Navbar() {
    const location = useLocation();

    return (
        <nav className={styles['nav']}>
            <img src={duqLogo} alt="DuoQchallenge Logo" className={styles['logo']} />

            <div className={styles['buttons-container']}>
                <Link to="/">
                    <button className={`${styles['button']} ${location.pathname === '/' ? styles['active'] : ''}`}>
                        <div>
                            RANKING
                            <img 
                                src={location.pathname === '/' ? rankIconWhite : rankIconBlack} 
                                alt="Ranking" 
                                className={styles['button-image']} 
                            />
                        </div>
                    </button>
                </Link>
                <Link to="/prices">
                    <button className={`${styles['button']} ${location.pathname === '/prices' ? styles['active'] : ''}`}>
                        <div>
                            PREMIOS
                            <img 
                                src={location.pathname === '/prices' ? pricesIconWhite : pricesIconBlack} 
                                alt="Prices" 
                                className={styles['button-image']} 
                            />
                        </div>
                    </button>
                </Link>
                <Link to="/rules">
                    <button className={`${styles['button']} ${location.pathname === '/rules' ? styles['active'] : ''}`}>
                        <div>
                            REGLAS
                            <img 
                                src={location.pathname === '/rules' ? rulesIconWhite : rulesIconBlack} 
                                alt="Rules" 
                                className={styles['button-image']} 
                            />
                        </div>
                    </button>
                </Link>
                <Link to="/resultados">
                    <button className={`${styles['button']} ${location.pathname === '/resultados' ? styles['active'] : ''}`}>
                        <div>
                            Resultados
                            <img 
                                src={location.pathname === '/resultados' ? resultadosIconWhite : resultadosIconBlack} 
                                alt="Resultados" 
                                className={styles['button-image']} 
                            />
                        </div>
                    </button>
                </Link>
            </div>

            <img src={lolLogo} alt="Lol Logo" className={styles['logo']} />
        </nav>
    );
}

export default Navbar;
