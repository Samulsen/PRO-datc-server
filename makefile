# ---------------------- VARS ---------------------
var_env_file_dev=env/.env.development

# ------------------- IMAGES ---------------------

export docker_BASE_node_image=node-base

export docker_DEV_admin_image=admin-dev
export docker_DEV_ui_image=ui-dev
export docker_DEV_server_image=server-dev
export docker_DEV_pg4admin_image=pg4admin-dev

docker-build-base:
	@docker build -f .docker/base -t $(docker_BASE_node_image) .

docker-build-DEV-pg4admin:
	@docker build -f .docker/dev/pg4admin -t $(docker_DEV_pg4admin_image) .

docker-build-DEV-admin:
	@docker build -f .docker/dev/admin -t $(docker_DEV_admin_image) .

docker-build-DEV-ui:
	@docker build -f .docker/dev/ui -t $(docker_DEV_ui_image) .

docker-build-DEV-server:
	@docker build -f .docker/dev/server -t $(docker_DEV_server_image) .

dkB=docker-build
docker-rebuild-DEV-all: $(dkB)-base
	make $(dkB)-DEV-pg4admin
	make $(dkB)-DEV-admin
	make $(dkB)-DEV-ui
	make $(dkB)-DEV-server

# --------------------- DEV ----------------------

dev_compose_base=docker-compose --env-file $(var_env_file_dev) -f .docker/compose/dev.yml

dev:
	@$(dev_compose_base) up

dev-stop:
	@$(dev_compose_base) down

# --------------------- DB ----------------------

dev-db-volume-reset:
	@docker volume rm datc-development_postgres-data
