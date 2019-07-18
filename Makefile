# Makefile
# provides helper targets to run docker-compose commands

# all targets are phony
# https://www.gnu.org/software/make/manual/html_node/Phony-Targets.html
.PHONY: rm rmi rmv clean build up logs

# default 'make' command uses docker-compose.yaml to build and up
.DEFAULT_GOAL := up

rm:
	docker ps -aq | xargs docker rm -f

rmi:
	docker images -q | xargs docker rmi -f

rmv:
	docker volume ls -q | xargs docker volume rm -f

clean: rm rmi rmv

down:
	docker-compose down -v

build:
	docker-compose build

up: 
	docker-compose up -d

logs: up
	docker-compose logs -f

test: up
	docker-compose exec node npm run test-watch