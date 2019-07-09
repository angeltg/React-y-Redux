import React from 'react';
import { connect } from 'react-redux';

const Suplentes = ({suplentes, eliminarSuplente}) =>(
    <section>
        <h2>
            Suplentes
        </h2>
        <div className="banco">
            {
                suplentes.map( jugador => (
                    <article className="suplente" key={jugador.id}>
                            <div>
                                <img src={jugador.foto} alt={jugador.nombre}/>
                                <button onClick={()=> eliminarSuplente(jugador) }>X</button>
                            </div>
                            <p>{jugador.nombre}</p>
                    </article>
                ))
            }
        </div>
    </section>
)

//Declaramos las funciones que pasamos a conect
const mapStateToProps = state => ({
    suplentes: state.suplentes
})

const mapDispatchToProps = dispacht => ({
    
    eliminarSuplente (jugador) {
        dispacht({
            type: "Eliminar_Suplente",
            jugador
        })
    }
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);