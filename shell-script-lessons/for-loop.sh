#!/bin/bash
echo "1. Using For Loop";
for item in 1 2 3 4 5
do
    echo "Item: ${item}"
done

for item in {1..5}
do
    echo "Item: ${item}"
done
echo "2. Using For Loop With C Programming Language Style";
for(( i = 1; i <= 5; i++))
do
    if (( $i == 3 )); then
        continue
    fi
    echo "${i}. C-Style Hello, World!!!"
done