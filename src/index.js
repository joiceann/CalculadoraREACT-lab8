import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import operaciones from './operaciones'

const baraja =['7', '8', '9','+', '4', '5', '6', '-', '1', '2', '3', '*', '0', 'c', '=', '/'];
var operar = false;
var operador='';
var num=0;
var resultado=0;
var desplegado=false;

class App extends React.Component{
	constructor(props){
		super(props);
		this.state={
			expression:'',
			baraja:baraja,
		}
		this.apachar=this.apachar.bind(this)

	}

	apachar(caracter){
		console.log(this.state)
		console.log(this.state.expression.length)
		if(this.state.expression.length<9){
			console.log('inicio')
			if (caracter==='c'){
				console.log('apacha c')
				this.setState({expression:''})
			}
			else if (caracter==='='){
				console.log('apacha =')
				this.setState({
					expression:resultado.toString()
				})
				operar=false
				resultado=0
				num=0;

			}
			else if (caracter==='+'){
				console.log('apacha +')

				if (resultado===0){
					console.log('suma')
					num=this.state.expression
					operar=true
					operador='+'
					this.setState((prev)=>({
						expression: prev.expression
					}))
				}
				else{
					console.log('suma')
					num=resultado
					operar=true
					operador='+'
					this.setState((prev)=>({
						expression: prev.expression
				}))
				}

			}
			else if (caracter==='/'){
				console.log('apacha /')
				if (resultado===0){
					console.log('div')
					num=this.state.expression
					operar=true
					operador='/'
					this.setState((prev)=>({
						expression: prev.expression
					}))
				}
				else{
					console.log('div')
					num=resultado
					operar=true
					operador='/'
					this.setState((prev)=>({
						expression: prev.expression
					}))
				}
			}
			else if (caracter==='-'){
				console.log('apacha -')

				if (resultado===0){
					console.log('resta')
					num=this.state.expression
					operar=true
					operador='-'
					this.setState((prev)=>({
						expression: prev.expression
					}))
				}
				else{
					console.log('resta')
					num=resultado
					operar=true
					operador='-'
					this.setState((prev)=>({
						expression: prev.expression
				}))
				}
			}

			else if (caracter==='*'){
				console.log('apacha *')

				if (resultado===0){
					console.log('mult')
					num=this.state.expression
					operar=true
					operador='*'
					this.setState((prev)=>({
						expression: prev.expression
					}))
				}
				else{
					console.log('mult')
					num=resultado
					operar=true
					operador='*'
					this.setState((prev)=>({
						expression: prev.expression
				}))
				}
			}
			else{
				console.log('apacha caracter')
				if (operar){
					this.setState({
						expression:caracter
					})
					console.log('operar')
					if(operador==='+'){
						console.log(num)
						console.log(operador)
						console.log(caracter)
						resultado=operaciones.suma(num,caracter);
						console.log(resultado)
					}
					else if(operador==='/'){
						console.log(num)
						console.log(operador)
						console.log(caracter)
						resultado= operaciones.div(num,caracter);
						console.log(resultado)
					}
					else if(operador==='-'){
						console.log(num)
						console.log(operador)
						console.log(caracter)
						resultado= operaciones.resta(num,caracter);
						console.log(resultado)
					}
					else if(operador==='*'){
						console.log(num)
						console.log(operador)
						console.log(caracter)
						resultado= operaciones.mult(num,caracter);
						console.log(resultado)
					}
					
				}
				else{
					console.log('previa')
					this.setState((prev)=>({
						expression: prev.expression+caracter
					}))
				}
			}
		}
		else{
			console.log('ERROR')
			this.setState({expression:'ERROR'})
		}
	}

	

	render(){
		return(
			<div>
				<Header/>
				<br></br>
				<div className='App'>
					<Pantalla expression={this.state.expression}/>
					<div className='tablero'>
						{
							this.state.baraja
							.map((carta, index)=> {
								return<Boton className='boton' caracter={carta} apachar={this.apachar}/>
							})
						}
					</div>
				</div>
			</div>
		);
	}

}

class Header extends React.Component{
    render(){
		return(
			<div>
				<header>
				<div className='titulo'>
					Calculadora REACT
				</div>
			</header>
			</div>
		);
	}
}

class Pantalla extends React.Component{
	render(){
		return (
			<input className='pantalla'  disabled={true} type="text" value={this.props.expression}></input>
		)
	}
}
 
class Boton extends React.Component{
	constructor(){
		super();

		this.state={caracter: 0}
		this.apachar= this.apachar.bind(this);
	}
	apachar(){
		this.props.apachar(this.props.caracter)
	}
	render(){
		if (this.props.caracter==='+'){
			return(
				<button className='botonOp' onClick={this.apachar}> {this.props.caracter} </button>
			)
		}
		else if (this.props.caracter==='-'){
			return(
				<button className='botonOp' onClick={this.apachar}> {this.props.caracter} </button>
			)
		}
		else if (this.props.caracter==='*'){
			return(
				<button className='botonOp' onClick={this.apachar}> {this.props.caracter} </button>
			)
		}
		else if (this.props.caracter==='/'){
			return(
				<button className='botonOp' onClick={this.apachar}> {this.props.caracter} </button>
			)
		}
		else if (this.props.caracter==='='){
			return(
				<button className='botonOpVerde' onClick={this.apachar}> {this.props.caracter} </button>
			)
		}
		else if (this.props.caracter==='c'){
			return(
				<button className='botonOpAmarillo' onClick={this.apachar}> {this.props.caracter} </button>
			)
		}
		else{
			return(
			
				<button className='boton' onClick={this.apachar}> {this.props.caracter} </button>
			)
		}
	}
}
  ReactDOM.render( <App/>, document.getElementById('index'))