#!/bin/bash
# create a shell script to be a calculator
read -p "Enter number one: " num1
read -p "Enter number two: " num2
echo "Number one is = $num1";
echo "Number two is = $num2";
# case operator (switch case in programming)
read -p "Plese chose your operator (+, -, *, /, %): " opt
case "$opt" in
    +)
        echo "Addition Operation";
        # result=$(( num1 + num2 ))
        result=$(echo "$num1 + $num2" | bc)
        # echo "Result is = $result";
        ;;
    -)
        echo "Substraction Operation";
        # result=$(( num1 - num2 ))
        result=$(echo "$num1 - $num2" | bc)
        # echo "Result is = $result";
        ;;
    \*)
        echo "Multiplicaton Operation";
        # result=$(( num1 * num2 ))
        result=$(echo "$num1 * $num2" | bc)
        # echo "Result is = $result";
        ;;
    /)
        echo "Devide Operation";
        # result=$(( num1 / num2 ))
        if [[ $num2 -eq 0 ]]; then
            echo "Number cannot be devide by 0!";
            exit 1
        fi
        result=$(echo "$num1 / $num2" | bc)
        # echo "Result is = $result";
        ;;
    %)
        echo "Modolus Operation";
        # result=$(( num1 % num2 ))
        result=$(echo "$num1 % $num2" | bc)
        # echo "Result is = $result";
        ;;
    *)
        echo "Invalid Operator!!!";
        # exit 1
        result=0
        ;;
esac
echo "Result is = $result";