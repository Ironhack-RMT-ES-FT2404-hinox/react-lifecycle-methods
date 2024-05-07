import { useEffect, useState } from 'react'

function Timer(props) {

  // creamos estados por 3 razones:
  //1. Por interacciones del usuario que hacen que algo cambien en el componente
  //2. Por ejecuciones automatizadas algo cambia en el componente
  //3. Cuando recibimos data externa de una API
  const [ timerValue, setTimerValue ] = useState(10)

  useEffect(() => {

    // componentDidMount => ejecuto codigo al momento que el componente es creado
    console.log("componentDidMount")
    let intervalId = setInterval(() => {
      // console.log("intervalo ejecutandose") // timerValue es una impresion del valor del estado al momento de iniciar el intervalo
      // setTimerValue()
      // setTimerValue( timerValue - 1 )
      setTimerValue((valorActualDelEstado) => {
        return valorActualDelEstado - 1 // retornamos el nuevo valor
      })
    }, 1000)

    return () => {
      // componentWillUnmount => ejecuto codigo al momento que el componente es destruido. Se usa como sección de limpieza del componente.
      console.log("componentWillUnmount")
      clearInterval(intervalId)
    }

  }, []) //! SIEMPRE DEBEMOS PASARLE UN ARRAY


  useEffect(() => {
    // componenteDidUpdate => ejecuto codigo al momento que el un valor especifico del componente cambio. El valor lo agregamos a las dependencias.
    console.log("componenteDidUpdate", "en timerValue")
    if (timerValue === 0) {
      props.setIsTimerShowing(false)
    }

  }, [timerValue])
  // el array indica las dependencias de el useEffect. Que va a cambiar en el componente para que se ejecute el codigo dentro del useEffect.


  return (
    <div>
      
      <p>Tiempo andandando</p>

      <h3>{timerValue}</h3>

    </div>
  )
}

export default Timer