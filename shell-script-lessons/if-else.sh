#!/bin/bash
# [ ] -> square bracket
# ( ) -> parenthesis
if docker -v &> /dev/null; then
    echo "Docker is installed!!!";
    docker --version
else
    echo "Docker is not install!!!";
fi

read -p "Enter your age: " age
if [[ $age -ge 18 ]]; then
    echo "You are an adult!";
else
    echo "You are a minor";
fi

# comparison operator (==, !=, <, >, <=, >=)
if (( $age >= 18 )); then
    echo "You are an adult!";
else
    echo "You are a minor";
fi

# and -a (AND) &&
# or -o (OR) ||
if [[ $age -ge 1 && $age -le 100 ]]; then
    echo "You $age years old.";
else
    echo "You can input between 1-100";
fi