const {request, response} = require('express')

function registrarJugador(peticion = request, respuesta = response){
    respuesta.json(
        {
            estado:true,
            mensaje:"estoy registrando un jugador.."
        }
    )
}

function buscarJugadores(peticion = request, respuesta = response){
    respuesta.json(
        {
            estado:true,
            mensaje:"estoy buscando los jugador.."
        }
    )
}

function buscarJugador(peticion = request, respuesta = response){
    respuesta.json(
        {
            estado:true,
            mensaje:"estoy buscando un jugador.."
        }
    )
}

function editarJugadores(peticion = request, respuesta = response){
    respuesta.json(
        {
            estado:true,
            mensaje:"estoy editando un jugador.."
        }
    )
}

function eliminarJugadores(peticion = request, respuesta = response){
    respuesta.json(
        {
            estado:true,
            mensaje:"estoy eliminando un jugador.."
        }
    )
}



module.exports={registrarJugador, buscarJugadores, buscarJugador, editarJugadores, eliminarJugadores}