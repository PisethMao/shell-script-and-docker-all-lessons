#!/bin/bash
function greeting(){
    local username="$1";
    echo "Welcome to function in shell script! 😀";
    echo "System Username: ${username^^}";
    echo "Thank You!!!";
}
check_service(){
    local service_name="$1";
    if systemctl is-active --quiet "$service_name"; then
        echo "Service ${service_name} running!!! ✅";
    else
        echo "Service ${service_name} is not running!!! ❌";
    fi
}