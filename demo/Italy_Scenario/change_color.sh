#!/bin/bash
for i in `ls`
do
sed -i -e 's/yellow/yellow/g' $i
done
