#!/bin/sh
kill -9 $(ps | grep "node" | grep -v grep | awk '{ print $1 }')