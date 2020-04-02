import React, { Fragment, useState } from 'react';
import Error from './Error';

const Pregunta = ({ setPresupuesto, setRestante }) => {
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    // Definir presupuesto

    const agregarPresupuesto = e => {
        e.preventDefault();
        
        // Validación
        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true);
            return;
        }

        // Después de la validación
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
    };

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            { error ? <Error mensaje="El presupuesto es incorrecto" /> : null}

            <form onSubmit={agregarPresupuesto}>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={e => setCantidad(parseInt(e.target.value))}
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
}
 
export default Pregunta;