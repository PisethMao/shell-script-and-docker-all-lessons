#!/bin/bash
username="Piseth.Mao.seth";
name="Piseth/Mao/Piseth";
echo "Normal value is: ${username}";
echo "Upercase value: ${username^^}";
echo "Lowercase value: ${username,,}";
echo "Username length: ${#username}";
substring=${username:3:7}
echo $substring
echo ${username/Piseth/Sophaneth}
echo ${name/name/Sophaneth}
echo ${username#*.}
echo ${username%.*}
echo ${username:5}