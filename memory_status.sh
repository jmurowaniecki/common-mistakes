#!/bin/bash

val=` free -m | grep 'Mem:' | awk '{print(int($4 * 100 / $2))}'`

if [ ${val} -lt 10 ]
then
	val="\e[31m${val}\e[0m"
else
	val="\e[32m${val}\e[0m"
fi

echo -en "${val}%"
