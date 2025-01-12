# Docker, Containers and Images

Docker is a containerization platform which allows you to package, ship and run applications in containers. Containers are lightweight and portable, and they provide a consistent and reliable way to deploy applications across different environments.

A Docker image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, libraries, dependencies, and settings. Containers are created from images, and they provide an isolated environment for the application to run in.

Docker provides a simple way to deploy applications on any system that supports Docker, without worrying about compatibility issues. Docker also provides a way to manage the lifecycle of containers, including starting, stopping, and deleting them.

## Basic Docker Commands

* `docker version` - show the Docker version
* `docker info` - show system-wide information
* `docker ps` - list all running containers
* `docker ps -a` - list all containers (running and stopped)
* `docker run <image>` - run a container from the given image
* `docker stop <container>` - stop a running container
* `docker rm <container>` - remove a stopped container
* `docker images` - list all available images
* `docker pull <image>` - download the given image from Docker Hub
* `docker rmi <image>` - remove the given image

* `docker run --name some-nginx -p 8080:80 -d nginx` - map port 8080 on the host machine to port 80 in the container and run nginx
* `docker stop some-nginx` - stop the container named some-nginx
* `docker stop -f some-nginx` - force stop the container named some-nginx

* `ufw allow 8080/tcp` - allow incoming traffic on port 8080

* `docker exec -it <container> bash` - run bash on the running container

* `docker cp <container1>:/file/path <container2>:/file/path` - copy a file from one container to another
* `docker cp <container1>:/file/path /file/path` - copy a file from one container to current folder
* `docker cp /file/path <container1>:/file/path ` - copy a file from current folder to one container

* `docker commit <container> <new-image-name>:tag` - create a new image from changes made to a container 

* `docker create <image>` - create a new container from the given image, with same data as image already have after commit
