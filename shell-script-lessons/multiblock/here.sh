#!/bin/bash
echo "1. Writing docker-compose.yaml config.";
cat << EOF > docker-compose.yaml
services:
    nginx-service:
        container_name: nginx-cont
EOF
echo "Successfully write the file";