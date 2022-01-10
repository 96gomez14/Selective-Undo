#!/bin/bash

for i in `ls *.htm`
do
sed -i '/<link rel="stylesheet" type="text\/css" href="region_styles.css">/a <script type="text\/javascript" src="https:\/\code.jquery.com\/jquery-3.1.1.min.js"><\/script>' $i

sed -i '/<script type="text\/javascript" src="https:\/\code.jquery.com\/jquery-3.1.1.min.js"><\/script>/a <script type="text\/javascript" src="events.js"><\/script>' $i

sed -i '/<script type="text\/javascript" src="events.js"><\/script>/a <script type="text\/javascript" src="debugout.js"><\/script>' $i
done
