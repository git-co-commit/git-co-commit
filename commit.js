#!/usr/bin/env node

// Package to run terminal commands and Getting inputs
const { exec } = require('child_process');
const prompt = require('prompt-sync')({sigint: true});

// Package for checking os
let os = require('os');

// Function for printing output of commands
let log = (err, stdout, stderr) => console.log(stdout);

// Getting commit message
let message = prompt('Your Commit message: ');
message = (message==='') ? "Some changes maded in this commit" : message;

// Getting pairs username
let inputPairs = prompt('Pairs username seperated by comma: ');
let pairs = [];
inputPairs.split(",").forEach(pair => {
	if(pair.trim() !== ''){
		pairs.push(pair.trim());
	}
});

// Command to be executed
let command = `git commit -m \"${message}\"`;
if(pairs.length > 0){
	command += ` -m \"Co-authored-by: ${pairs[0]} <${pairs[0].toLowerCase()}@users.noreply.github.com>`;
}

// Running command based on OS
if(os.type() === 'Windows_NT'){
	if(pairs.length > 1){
		for(var i = 1; i < pairs.length; i++){
			command += `\`nCo-authored-by: ${pairs[i]} <${pairs[i].toLowerCase()}@users.noreply.github.com>`;
		}
	}
	if(pairs.length > 0){
		command += "\"";
	}
	exec(command, {'shell': 'powershell.exe'}, log);
} else {
	if(pairs.length > 1){
		for(var i = 1; i < pairs.length; i++){
			command += `\nCo-authored-by: ${pairs[i]} <${pairs[i].toLowerCase()}@users.noreply.github.com>`;
		}
	}
	if(pairs.length > 0){
		command += "\"";
	}
	exec(command, log);
}

