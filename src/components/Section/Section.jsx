import React from 'react'

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

        </div>
    </section>
  )
}

export default Section