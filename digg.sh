#!/bin/sh
if [ $# -eq 1 ] ; then
	headarg=$(( $1 * 2 )) # $(( )) specifies that you’re using an equation
else
	headarg=”-20″ # default is four headlines
fi

curl –silent “http://digg.com/rss/index.xml” | grep -E ‘(title>)’ | \
	sed -n ’4,$p’ | \
	sed -e ‘s/<title>//’ -e ‘s/<\/title>//’|\
	head $headarg
