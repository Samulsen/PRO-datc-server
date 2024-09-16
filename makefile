# ---------------------- VARS ---------------------
var_env_file_dev=env/.env.development

# ------------------- IMAGES ---------------------

docker_base_image_name=node-base-image

docker-setup:
	@docker build -f .docker/base -t $(docker_base_image_name) .

# --------------------- DEV ----------------------

dev_compose_base=docker-compose --env-file $(var_env_file_dev) -f .docker/compose/dev.yml

dev:
	@$(dev_compose_base) up

dev-stop:
	@$(dev_compose_base) down

# --------------------- DB ----------------------

dev-db-volume-reset:
	@docker volume rm datc-development_postgres-data