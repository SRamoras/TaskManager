build:
	docker build -t task-manager .

run: 
	docker run --rm -it -p 3000:3000 -v "$(PWD)":/app task-manager

stop:
	docker ps -q --filter ancestor=task-manager | xargs -r docker stop

clean:
	docker rmi -f task-manager

bash:
	docker run --rm -it task-manager bash