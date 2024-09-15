# ------------------- DOCKER ---------------------

docker-build-base-image:
	@docker build -f .docker/base -t node-base-image .

# --------------------- DEV ----------------------

dev:
	@docker-compose -f .docker/compose/dev.yml up
dev-stop:
	@docker-compose -f .docker/compose/dev.yml down

dev-reset-db:
	@docker volume rm datc_development_postgres-data
# --------------------- PROD ----------------------