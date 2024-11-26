import React, { useState, useEffect } from 'react';
import Team from '../components/Team.jsx';
import styles from './Resultados.module.css';

function Resultados() {
    const data = [
        {
          "teamName": "Team Dif",
          "name1": "The Notorius",
          "id1": "3Q-9VezmszEEtjJYFbCDQOSeQ-6oo93oxNKdWJj7EOxWOCwptmfUdTCKOw",
          "link1": "https://www.op.gg/summoners/euw/The%20Notorius-Conor",
          "name2": "Vennolyesil",
          "id2": "n9jbAKUO6d_hgaRHkgOw26iFQ7KmXNXRO0IhBOnuWGqHmSpu44oYrbAVuA",
          "link2": "https://www.op.gg/summoners/euw/Vennolyesil-4185",
          "linkduo": "https://www.op.gg/multisearch/euw?summoners=The+Notorius%23Conor%2CVennolyesil%234185",
          "winGames": 46,
          "lostGames": 37,
          "winrate": 55,
          "elo": "EMERALD III",
          "lps": 84,
          "totalLps": 2184
        },
        {
          "teamName": "Team Leo",
          "name1": "Jesleali",
          "id1": "1cyGxB_m44dsu8pXl1hoO4JIKj7Gr8tiFxV1biUFHtbxSnOudTOAwc-LbA",
          "link1": "https://www.op.gg/summoners/euw/Jesleali-0125",
          "name2": "Hilmontai",
          "id2": "jHcVVnRludziZnuMTaeR7xL76Jd6gK4LSopGHU0TOMixYqPA_OAWQgy1fw",
          "link2": "https://www.op.gg/summoners/euw/Hilmontai-5321",
          "linkduo": "https://www.op.gg/multisearch/euw?summoners=Jesleali%230125%2CHilmontai%235321",
          "winGames": 33,
          "lostGames": 32,
          "winrate": 50,
          "elo": "PLATINUM I",
          "lps": 4,
          "totalLps": 1904
        },
        {
          "teamName": "Mental Buda",
          "name1": "Ndeariggyphy",
          "id1": "jTtN6rR7WfxgByb6QiU7c9nAxFAdPv0QSVoGDP4Ti9VeSXUZ4fvzs2SY9g",
          "link1": "https://www.op.gg/summoners/euw/Ndeariggyphy-2405",
          "name2": "Ragabodnerzs",
          "id2": "imylQJwUFqakpPaUz3TLtW7J299g3oEN9237gLZ-xS-HaqkUFqPkWqTwzw",
          "link2": "https://www.op.gg/summoners/euw/Ragabodnerzs-4844",
          "linkduo": "https://www.op.gg/multisearch/euw?summoners=Ndeariggyphy%232405%2CRagabodnerzs%234844",
          "winGames": 16,
          "lostGames": 14,
          "winrate": 53,
          "elo": "PLATINUM IV",
          "lps": 0,
          "totalLps": 1600
        },
        {
          "teamName": "Diamante en flex btw",
          "name1": "Cacahuetes",
          "id1": "ipxvnNSDhlaHbvH888_U042xudGWN_FZdy-4TYalsItcaGuI8p0duX4Bjw",
          "link1": "https://www.op.gg/summoners/euw/Derxelleo-9328",
          "name2": "Chaqueta",
          "id2": "MGjnre82gLzWiytM5obhHWD-3WkEdOqhjwSyqQcc3YyeKg3htq6KDQtlYg",
          "link2": "https://www.op.gg/summoners/euw/Chaqueta-PERI",
          "linkduo": "https://www.op.gg/multisearch/euw?summoners=Chaqueta%23PERI%2CDerxelleo%239328",
          "winGames": 17,
          "lostGames": 13,
          "winrate": 56,
          "elo": "PLATINUM IV",
          "lps": 0,
          "totalLps": 1600
        },
        {
          "teamName": "Team Tumbadioses",
          "name1": "Hellontacqua",
          "id1": "qkplQaOExGbNmO4gpGxWQcpJvmPVw3dBq7eRyLG4rRNkabCAT-tRLYuxkQ",
          "link1": "https://www.op.gg/summoners/euw/Hellontacqua-1512",
          "name2": "Dierilianati",
          "id2": "lheNotBjWHqPHJNyEhATr4Tjf8iLazxbPbdSc-FWVxVXmOBK9k-tkdF76A",
          "link2": "https://www.op.gg/summoners/euw/Dierilianati-6528",
          "linkduo": "https://www.op.gg/multisearch/euw?summoners=Hellontacqua%231512%2CDierilianati%236528",
          "winGames": 12,
          "lostGames": 10,
          "winrate": 54,
          "elo": "GOLD II",
          "lps": 15,
          "totalLps": 1415
        },
        {
          "teamName": "Team Xurxo",
          "name1": "07mon",
          "id1": "kZ0eo4y_sMxD_1BzvI8JXL7T9Sy42OvfJcq1II8n9wNFiOhwGR2eWqi1ww",
          "link1": "https://www.op.gg/summoners/euw/07mon-MONO",
          "name2": "icius07",
          "id2": "EBFfa4YTk7FaY_5WmG_Z8wPFCFtM2Cq0TmTCeM5Z7m8rhZWR39Uq_OGouQ",
          "link2": "https://www.op.gg/summoners/euw/icius07-MONO",
          "linkduo": "https://www.op.gg/multisearch/euw?summoners=07mon%23MONO%2Cicius07%23MONO",
          "winGames": 9,
          "lostGames": 7,
          "winrate": 56,
          "elo": "GOLD III",
          "lps": 43,
          "totalLps": 1343
        },
        {
          "teamName": "Commit and Push",
          "name1": "Palaterna",
          "id1": "gpsRxqxnKCsE8ZbrY9eP4quva6qmOOMhuuJ7JUaMrrypOxXPH3oL2_D2oQ",
          "link1": "https://www.op.gg/summoners/euw/Palaterna-8194",
          "name2": "Landemariana",
          "id2": "hHPiwWuTRuHef3dBeXUgHeIClh8PdbU_z73iD8Fi3BRPq5oPe8rA03TOvQ",
          "link2": "https://www.op.gg/summoners/euw/Landemariana-7143",
          "linkduo": "https://www.op.gg/multisearch/euw?summoners=Landemariana%237143%2CPalaterna%238194",
          "winGames": 4,
          "lostGames": 6,
          "winrate": 40,
          "elo": "GOLD IV",
          "lps": 0,
          "totalLps": 1200
        },
        {
          "teamName": "LSI Enjoyer",
          "name1": "Ctarlizzahky",
          "id1": "0LoHdyjS3ckpxKtCXLkjD0ifaEKMgyGnCWS6dElORrWrwSidCTzSW7codg",
          "link1": "https://www.op.gg/summoners/euw/Ctarlizzahky-9107",
          "name2": "Ctarlizzahky",
          "id2": "0LoHdyjS3ckpxKtCXLkjD0ifaEKMgyGnCWS6dElORrWrwSidCTzSW7codg",
          "link2": "https://www.op.gg/summoners/euw/Ctarlizzahky-9107",
          "linkduo": "https://www.op.gg/summoners/euw/Ctarlizzahky-9107",
          "winGames": 3,
          "lostGames": 2,
          "winrate": 60,
          "elo": "SILVER I",
          "lps": 85,
          "totalLps": 1185
        }
      ];

    const [teamsData, setTeamsData] = useState([]);

    useEffect(() => {
        setTeamsData(data);
    }, []); // Solo se ejecuta una vez cuando el componente se monta

    return (
        <div className={styles['container']}>
            <h1 className={styles['header']}>Resultados</h1>

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

export default Resultados;
