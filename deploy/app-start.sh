#!/bin/sh
cd /home/ec2-user/node-express-app
nohup node server.js > /tmp/out.txt &