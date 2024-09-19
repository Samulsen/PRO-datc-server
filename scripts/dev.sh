#!/bin/bash

# Create a new tmux session
tmux new-session -d -s my_docker_logs

# Split the tmux session into multiple panes
tmux split-window -h
tmux split-window -v
tmux select-pane -t 0
tmux split-window -v
tmux select-pane -t 2
tmux split-window -v

# Start the admin service and redirect logs to the first pane
tmux send-keys -t my_docker_logs:0.0 "docker-compose --env-file $var_env_file_dev -f .docker/compose/dev.yml up admin" C-m

# Start the ui service and redirect logs to the second pane
tmux send-keys -t my_docker_logs:0.1 "docker-compose --env-file $var_env_file_dev -f .docker/compose/dev.yml up ui" C-m

# Start the db service and redirect logs to the third pane
tmux send-keys -t my_docker_logs:0.2 "docker-compose --env-file $var_env_file_dev -f .docker/compose/dev.yml up db" C-m

# Start the server service and redirect logs to the fourth pane
tmux send-keys -t my_docker_logs:0.3 "docker-compose --env-file $var_env_file_dev -f .docker/compose/dev.yml up server" C-m

# Start the pg4admin service and redirect logs to the fifth pane
tmux send-keys -t my_docker_logs:0.4 "docker-compose --env-file $var_env_file_dev -f .docker/compose/dev.yml up pg4admin" C-m

# Attach to the tmux session
tmux attach-session -t my_docker_logs