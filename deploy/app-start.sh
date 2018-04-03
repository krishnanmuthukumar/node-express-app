#!/bin/sh
cd /home/ec2-user/node-express-app
nohup node server.js >/tmp/null 2>&1 &