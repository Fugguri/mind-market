update:
	git add .
	git commit -m "update"
	git push

push:
	git push

dev:
	git pull
	npm run dev



build:
	npm run build 
	npm run start 

upgrade:
	git pull
	npm run build 
	clear
	npm run start 