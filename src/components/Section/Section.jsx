import React from 'react'
import Input from '../Input/Input'
import S from './Section.module.css'

const Section = () => {

    const url = 'https://api.nasa.gov/planetary/apod?api_key=cfc6pA7kyAgQdATFivgeENC3WLslXp04aHxCbCBC&date=${pegarData}'


    const requisicao = async ()=> {
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
        <Input type='date' style={S.input}/>
        </div>
    </section>
  )
}

export default Section