docker-build-base-image:
	@docker build -f .docker/base -t node-base-image .

docker-run-base-interactive:
	@docker run -it node-base-image /bin/bash