#!/usr/bin/env node

// Package to run terminal commands and Getting inputs
const { spawn } = require('child_process');
const prompt = require('prompt-sync')({ sigint: true });

// Package for checking os
let os = require('os');

// Getting commit message
let message = prompt('Your Commit message: ');
message = (message === '') ? "Some changes made in this commit" : message;

// Getting pairs username
let inputPairs = prompt('Pairs username seperated by comma: ');
let pairs = [];
inputPairs.split(",").forEach(pair => {
	if (pair.trim() !== '') {
		pairs.push(pair.trim());
	}
});

// Building basic command to be executed
let command = `git commit -m \"${message}\"`;

// If pair is present add the first name
if (pairs.length > 0) {
	command += ` -m \"Co-authored-by: ${pairs[0]} <${pairs[0].toLowerCase()}@users.noreply.github.com>`;
}

// Running command based on OS
if (os.type() === 'Windows_NT') {
	// If more than one user it will add them to command (`n work as new line in powershell)
	if (pairs.length > 1) {
		for (let i = 1; i < pairs.length; i++) {
			command += `\`nCo-authored-by: ${pairs[i]} <${pairs[i].toLowerCase()}@users.noreply.github.com>`;
		}
	}
	// Close " of the command when pair is present
	if (pairs.length > 0) {
		command += "\"";
	}
	// Execute command on powershell
	spawn(command, [], { stdio: 'inherit', 'shell': 'powershell.exe' });
} else {
	// If more than one user it will add them to command (\n work as new line in powershell)
	if (pairs.length > 1) {
		for (let i = 1; i < pairs.length; i++) {
			command += `\nCo-authored-by: ${pairs[i]} <${pairs[i].toLowerCase()}@users.noreply.github.com>`;
		}
	}
	// Close " of the command when pair is present
	if (pairs.length > 0) {
		command += "\"";
	}
	// Execute command on bash
	spawn(command, { stdio: 'inherit', shell: true });
}
