#!/bin/bash
username="$1";
gender="$2";
# check it username not provided show msg and exit!!!
if [ -z $username ]; then
    echo "Username should not be empty";
    exit 1;
fi
echo "Script file name is: $0";
echo "Welcome $username to the system!";
echo "The script has $# parameters";
echo "All parameters value: $*";
echo "Script status: $?"; # 0 mean success