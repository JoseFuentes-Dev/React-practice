import { useState, useEffect, useRef } from "react";

export function Writing() {
    const [write, setWrite] = useState('');
    const [isWriting, setIsWriting] = useState(false);
    const [dots, setDots] = useState('...');
    const typingTimeoutRef = useRef(null);
    const dotIntervalRef = useRef(null);

    useEffect(() => {
        if (isWriting) {
            let dotCount = 3; // Comenzamos con 3 puntos
            const dotArray = ['.', '..', '...'];

            dotIntervalRef.current = setInterval(() => {
                if (dotCount > 0) {
                    dotCount--;
                    setDots(dotArray[dotCount]);
                } else {
                    dotCount = 3;
                    setDots(dotArray[dotCount - 1]);
                }
            }, 400); // Cambia los puntos cada 500 ms

            return () => {
                if (dotIntervalRef.current) {
                    clearInterval(dotIntervalRef.current);
                }
            };
        } else {
            // Limpiar el intervalo si no se está escribiendo
            if (dotIntervalRef.current) {
                clearInterval(dotIntervalRef.current);
            }
        }
    }, [isWriting]);

    function handleChange(event) {
        const value = event.target.value;
        setWrite(value);
        setIsWriting(true);

        // Limpiar el temporizador anterior si ya existe
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        // Establecer un nuevo temporizador para ocultar el mensaje después de un período de inactividad
        typingTimeoutRef.current = setTimeout(() => {
            setIsWriting(false);
        }, 400); // 1000 ms = 1 segundo
    }

    useEffect(() => {
        // Limpiar el temporizador cuando el componente se desmonte
        return () => {
            if (typingTimeoutRef.current) {
                clearTimeout(typingTimeoutRef.current);
            }
            if (dotIntervalRef.current) {
                clearInterval(dotIntervalRef.current);
            }
        };
    }, []);

    return (
        <>
            <input 
                className="input-write"
                type="text"
                value={write}
                onChange={handleChange}
            />
            <span className="write">
                {isWriting ? `Escribiendo${dots}` : ''}
            </span>
        </>
    );
}
