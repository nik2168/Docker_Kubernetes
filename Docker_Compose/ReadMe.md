
# YAML

YAML (YAML Ain't Markup Language) is a human-readable serialization format commonly used for configuration files and in applications where data is being stored or transmitted.

Used by Docker-Compose & kubernetes

In YAML, indentation is used to denote nesting, and colons are used to separate keys from values. YAML also supports various data types such as strings, numbers, booleans, lists, and dictionaries.

Here is an example of a YAML file:
```
name: John Smith
age: 20
hobbies:
  - reading
  - writing
  - coding
address:
  street: 123 Main Street
  city: Anytown
  state: CA
  zip: 12345

# Docker Compose
Docker Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application's services. Then, with a single command, you create and start all the services from your configuration.

Using single YAML files, you can define the configuration for your entire application, including services, networks, volumes, secrets, and configurations.

Compose is great for development, testing, and staging environments, as well as CI workflows. You define a service for each component of your application (like a web server, database, or message queue) in the docker-compose.yml file, and then Compose starts each service inside its own container.

# Docker Compose v1 vs v2

Compose v1 and v2 have some differences:

* v1 uses docker-compose.yml file
* v2 uses docker-compose.yaml file
* v2 supports new features like profiles, depends_on, rollback, and service names with dots
* v2 is integrated with Docker Desktop and can use Docker context to switch between environments
* v2 uses the same command-line syntax as v1, but with some changes, like the --compatibility flag to emulate v1 behavior

Docker Compose - Use Cases
• Workloads that don't require a full orchestrator
• Development and tests
• Use of a service that can run Docker Compose files
 • Azure App Service
 • AWS ECS
 • Virtual machines

Docker Compose Cheat Sheet
===========================
| Command | Use |
|---------|-----|
| docker compose build | Build the images |
| docker compose start | Start the containers |
| docker compose stop | Stop the containers |
| docker compose up -d | Build and start |
| docker compose ps | List what's running |
| docker compose rm | Remove from memory |
| docker compose down | Stop and remove |
| docker compose logs | Get the logs |
| docker compose exec [container] bash | Run a command in a container |


Docker Compose v2 - New Commands
===============================
| Command | Use |
|---------|-----|
| docker compose --project-name test1 up -d | Run an instance as a project |
| docker compose -p test2 up -d | Shortcut |
| docker compose ls | List running projects |
| docker compose cp [containerID]: [SRC_PATH] [DEST_PATH] | Copy files from the container |
| docker compose cp [SRC_PATH] [containerID] : [DEST_PATH] | Copy files to the container |
