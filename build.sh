#!/bin/sh

if [[ -f fb-jump-case.zip ]];
then
    rm "fb-jump-case.zip"
fi
cd ..
zip -r fb-case-jump.zip fb-case-jump -x "*.git*"
