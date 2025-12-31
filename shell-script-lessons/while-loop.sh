#!/bin/bash
echo "Using While Loop";
counter=1
while [ $counter -le 5 ]
do
    echo "${counter}. Hello, World!!!";
    ((counter++))
done

echo "2. Using Infinite Loop";
while [ true ]
do
    read -p "Please chose 1 to quite: " quite
    if [ $quite -eq 1 ]; then
        break
    fi
done