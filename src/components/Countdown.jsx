import React, { useEffect, useState } from 'react';
import styles from './Countdown.module.css'

function Countdown({ fecha }) {
    const [tiempoRestante, setTiempoRestante] = useState({});

    useEffect(() => {
        const intervalo = setInterval(() => {
            const ahora = new Date();
            const diferencia = new Date(fecha) - ahora;

            if (diferencia <= 0) {
                clearInterval(intervalo);
                setTiempoRestante({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
                return;
            }

            const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

            setTiempoRestante({ dias, horas, minutos, segundos });
        }, 1000);

        return () => clearInterval(intervalo);
    }, [fecha]);

    return (
        <div>
            <span className={styles['dígito']}>{tiempoRestante.dias}d </span>
            <span className={styles['dos-puntos']}>: </span>
            <span className={styles['dígito']}>{tiempoRestante.horas}h </span>
            <span className={styles['dos-puntos']}>: </span>
            <span className={styles['dígito']}>{tiempoRestante.minutos}m </span>
            <span className={styles['dos-puntos']}>: </span>
            <span className={styles['dígito']}> {tiempoRestante.segundos}s</span>
        </div>
    );
}

export default Countdown;
