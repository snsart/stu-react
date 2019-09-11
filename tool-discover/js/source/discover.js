import React from 'react';
import ReactDOM from 'react-dom';

import Logo from './components/Logo';
import Button from './components/Button';
import Suggest from './components/Suggest';

ReactDOM.render(
	<div style={{padding:'20px'}}>
		<h1>Component discoverer</h1>
		
		<h2>Logo</h2>
		
		<div style={{display:'inline-block',background:'purple'}}>
			<Logo/>		
		</div>
		
		<h2>Buttons</h2>
		<div>
			Button with onClick:
			<Button onClick={()=>{alert('ouch')}}>Click me </Button>		
		</div>
		
		<div>
			A link:
			<Button href="http://reactjs.com">Follow me </Button>
		</div>
		
		<div>
			Custom class name:
			<Button className="custom">I do nothing</Button>	
		</div>
		
		<h2>Suggest</h2>
		<div>
			<Suggest options={['eenie','meenie','miney','mo']} />		
		</div>
		
	</div>,
	document.getElementById("pad")
);