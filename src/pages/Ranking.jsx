import React, { useEffect, useState } from 'react';
import Team from '../components/Team.jsx';
import Countdown from '../components/Countdown.jsx';
import styles from './Ranking.module.css';

const fechaFin = '2024-10-27T23:59:59';
const BACKEND_URL = 'https://duo-q-challenge-2024-backend.vercel.app/players';

function Ranking() {
    const [teamsData, setTeamsData] = useState([]);

    useEffect(() => {
        async function fetchTeamsData() {
            try {
                const response = await fetch(BACKEND_URL); // Llama a tu servidor para obtener el JSON
                const data = await response.json();
                setTeamsData(data); // Actualiza el estado con los datos obtenidos del servidor
            } catch (error) {
                console.error('Error fetching teams data:', error);
            }
        }

        fetchTeamsData(); // Llama a la función para obtener los datos al montar el componente
    }, []); // Solo se ejecuta una vez cuando el componente se monta

    return (
        <div className={styles['container']}>
            <h1 className={styles['header']}>Ranking</h1>
            <Countdown fecha={fechaFin} />

            {/* Agrega la cabecera */}
            <div className={styles['team-header']}>
                <p>PUESTO</p>
                <p>NOMBRE DEL EQUIPO</p>
                <p>JUGADOR 1</p>
                <p>JUGADOR 2</p>
                <p>WINS</p>
                <p>LOSSES</p>
                <p>WINRATE</p>
                <p>ELO</p>
                <p>LPs</p>
            </div>

            {teamsData.length > 0 ? (
                teamsData.map((team, index) => (
                    <Team
                        key={index}
                        rank={index + 1}
                        team={team}
                    />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Ranking;
