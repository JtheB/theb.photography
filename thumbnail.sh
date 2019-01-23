#!/bin/bash
for file in ./images/fulls/*.jpg; do
	printf 'Created a thumbnail for %s\n' "$file"
	convert -thumbnail 400 $file ./images/thumbs/${_##*/}
done
