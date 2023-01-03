import React from 'react'
import ReactDOM from "react-dom"

// import {BoaTarde, BoaNoite} from "./components/Multiplos"

import Saudacao from './components/saudacao'

// ReactDOM.render(<div> <BoaTarde nome="Guilherme" /> <BoaNoite nome="Bia" />  </div>, document.getElementById('root'))
ReactDOM.render(<div> <Saudacao tipo="Bom dia" nome="Joao"/>
</div>, document.getElementById('root')) 

//$(<h1>).html('React 2')