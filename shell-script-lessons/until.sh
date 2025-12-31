#!/bin/bash
count=1
until [ $count -gt 3 ];
do
    echo "Count is: $count";
    ((count++))
done