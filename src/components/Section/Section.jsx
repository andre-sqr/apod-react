import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import S from './Section.module.css'

const Section = () => {

    const [data, setData] = useState()

    const handleChange = (e, data) => {
        setData(e.target.value)
    }

    const handleClick = ()=> {

    }

    const url = `https://api.nasa.gov/planetary/apod?api_key=cfc6pA7kyAgQdATFivgeENC3WLslXp04aHxCbCBC&date=${data}`


    const handleReq = async ()=> {
        let response = await fetch(url)
        .then(response => {
            // lida com a resposta
        })
        .catch(response => {
            // lida com o erro
        })
    } 

  return (
    <section>
        <div>
        <Input type='date' style={S.input} onChange={(e)=>{handleChange(e, 'data')}}/>
        <Button style={S.button} onClick={handleClick} text={'Enviar'}/> 
        </div>
    </section>
  )
}

export default Section