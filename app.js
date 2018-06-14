const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.status(200).json({
		success: true, 
		message: 'hello!'
	});
});

app.get('/goodbye', (req, res) => {
	res.status(200).json({
		success: true, 
		message: 'Goodbye!'
	});
});

app.get('/greeting/:name', (req, res) => {
	res.status(200).json({
		success: true, 
		message: `Hello ${req.params.name}!`
	});
});

app.get('/reverse/:name', (req, res) => {
	const name = req.params.name;
	const reversed = name.split('').reverse().join('');
	res.status(200).json({
		success: true, 
		message: reversed
	});
});

app.get('/*', (req, res) => {
	res.status(404).json({
		success: true, 
		message: '404 Not Found'
	});
});

app.listen(8080);

console.log('Server is listening on port 8080');