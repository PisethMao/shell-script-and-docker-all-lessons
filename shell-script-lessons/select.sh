#!/bin/bash
select lang in "C Programming" "C++ Programming";
do
    case $lang in "C Programming")
        echo "You have been select: $lang";
        break;;
    esac
done