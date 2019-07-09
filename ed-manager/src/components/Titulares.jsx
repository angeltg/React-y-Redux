import React from 'react';
import { connect } from 'react-redux';

const Titulares = ({titulares, eliminarTitulares}) =>(
    <section>
        <h2>
            Titulares
        </h2>
        <div className="campo">
            {
                titulares.map( jugador => (
                    <article className="titular" key={jugador.id}>
                            <div>
                                <img src={jugador.foto} alt={jugador.nombre}/>
                                <button onClick={() => eliminarTitulares(jugador)}>X</button>
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
    titulares: state.titulares
})

const mapDispatchToProps = dispacht => ({
    eliminarTitulares (jugador) {
        dispacht ({
            type: "Eliminar_Titular",
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);