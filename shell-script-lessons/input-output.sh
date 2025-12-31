#!/bin/bash
echo -n "Please enter your name: ";
read name; # store the input inside variable `name`
echo "<<Output Result>>";
echo "Hello, Welcome $name";
echo "$(whoami) is the one that run script!";
echo "Running script on $(hostname) at date: $(date)";