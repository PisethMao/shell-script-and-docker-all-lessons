#!/bin/bash
cat << EOF > myconfig.conf
    This is the first line of config.
    This is the second line of config.
EOF

echo "
Config file 'myconfig.conf' created with the following content:
$(cat myconfig.conf)
" | tee -a config_creation.conf

tee third-party.conf > /dev/null << EOL
# This is a third-party configuration file.
# It contains multiple lines of settings.
setting1=value1
setting2=value2
setting3=value3
EOL

cat << END_MESSAGE > nginx_message.conf
    server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://backend_server_ip:8080;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
END_MESSAGE