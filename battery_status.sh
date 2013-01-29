#!/bin/bash

val=`upower -i /org/freedesktop/UPower/devices/battery_BAT0 | grep -E "percentage" | awk '{print(int($2))}'`

if [ ${val} -lt 10 ]
then
	val="\e[31m${val}\e[0m"
else
	val="\e[32m${val}\e[0m"
fi

echo -en "${val}%"
