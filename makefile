# ---------------------- VARS ---------------------
var_env_file_dev=env/.env.development

# ------------------- IMAGES ---------------------

docker_base_image_name=node-base-image
docker_custom_pg4admin_image_name=pg4admin-custom-image

docker-build-base:
	@docker build -f .docker/base -t $(docker_base_image_name) .

docker-build-pg4admin:
	@docker build -f .docker/pg4admin -t $(docker_custom_pg4admin_image_name) .

# --------------------- DEV ----------------------

dev_compose_base=docker-compose --env-file $(var_env_file_dev) -f .docker/compose/dev.yml

dev:
	@$(dev_compose_base) up

dev-stop:
	@$(dev_compose_base) down

# --------------------- DB ----------------------

dev-db-volume-reset:
	@docker volume rm datc-development_postgres-data