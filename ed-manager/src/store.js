import { createStore } from 'redux';

const initialState = {
    jugadores: [
        {
            id:'0',
            foto:'0.jpg',
            nombre:'Pedro 0'
        },
        {
            id:'1',
            foto:'1.jpg',
            nombre:'Pedro 1'
        },
        {
            id:'2',
            foto:'2.jpg',
            nombre:'Pedro 2'
        }
    ],
    titulares: [
        {
            id:'3',
            foto:'3.jpg',
            nombre:'Pedro 3'
        },
        {
            id:'4',
            foto:'4.jpg',
            nombre:'Pedro 4'
        }
    ],
    suplentes: [
        {
            id:'5',
            foto:'5.jpg',
            nombre:'Pedro 5'
        },
        {
            id:'6',
            foto:'6.jpg',
            nombre:'Pedro 6'
        }
    ]
}

const reducerManager = (state = initialState, action) => {
 /*   switch (action.type) {
        case "Agregar_Titular":
            return {
                ...state,
                titulares: state.titulares.concat(action.jugador),
                jugadores: state.jugadores.filter( jugador => jugador.id !== action.jugador.id)
            }
            
            break;
        
        case "Agregar_Titular":
            return {
                ...state,
                titulares: state.titulares.concat(action.jugador),
                jugadores: state.jugadores.filter( jugador => jugador.id !== action.jugador.id)
            }
            break;
        
        default:
            break;
    } */

    if(action.type === "Agregar_Titular"){
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter( jugador => jugador.id !== action.jugador.id)
        }
    }
    if(action.type === "Agregar_Suplente"){
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter( jugador => jugador.id !== action.jugador.id)
        }
    }
    if(action.type === "Eliminar_Suplente"){
        console.log('Elimnar suplente');
        return {
            ...state,
            jugadores: state.jugadores.concat(action.jugador),
            suplentes: state.suplentes.filter( jugador => jugador.id !== action.jugador.id)
        }
    } 
    if(action.type === "Eliminar_Titular"){
        console.log('Elimnar titular');
        return {
            ...state,
            jugadores: state.jugadores.concat(action.jugador),
            titulares: state.titulares.filter( jugador => jugador.id !== action.jugador.id)
        }
    }
    return state 
} 


export default createStore(reducerManager)