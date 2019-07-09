import React from 'react';
import { connect } from 'react-redux';


const Jugadores = ({jugadores, agregrarTitular, agregarSuplente}) => (
    
        <section>      
            <h2>Jugadores</h2>    
            <div className="contenedor-jugadores">
            {
            jugadores.map( jugador => (
                <article className="jugador" key={jugador.id}>
                    <img src={jugador.foto} alt={jugador.nombre} />
                    <h3>{jugador.nombre}</h3>
                    <div>
                        <button onClick={() => agregrarTitular(jugador)}>Titular</button>
                        <button onClick={() => agregarSuplente(jugador)}>Suplente</button>
                    </div>
                </article>
                ))
            }
            </div>    
        </section>

)

//Declaramos las funciones que pasamos a conect
const mapStateToProps = state => ({
    jugadores: state.jugadores
})

const mapDispatchToProps = dispacht => ({
    agregrarTitular(jugador){
        dispacht(
            {
                type: "Agregar_Titular",
                jugador
            }
        )
    },
    agregarSuplente(jugador){
        dispacht({
            type: "Agregar_Suplente",
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores)