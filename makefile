update:
	git add .
	git commit -m "update"
	git push

push:
	git push


build:
	npm run build 
	npm run start 

upgrade:
	git pull
	npm run build 
	npm run start 