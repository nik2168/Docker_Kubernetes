## Containers are ephemerous and stateless
-> You usually don't store data in containers
-> Non-persistent data
    Locally on a writable layer
    It's the default, just write to the filesystem
    When containers are destroyed, so the data inside them

 -> Persistent data
    Stored outside the container in a volume
    A volume is mapped to a logical folder

### Volumes in Docker

-> A volume is a directory that lives outside of any container
-> Containers can mount volumes to persist data
-> Volumes are decoupled from containers, so even if a container is deleted, the volume (and data) will remain


### Docker volume cheat sheet

-> Create a volume
    docker volume create [volume name]

-> List all volumes
    docker volume ls

-> Delete a volume
    docker volume rm [volume name]

-> Inspect a volume
    docker volume inspect [volume name]

-> Delete all unused volumes
    docker volume prune   

-> Run a container with a volume
    docker run -d --name [container name] -v [volume name]:/app  [image name]:latest

    -> docker exec -it [container name] bash // attach bash cli to the container

    // we can create a volume inside that bash point to a folder where if the container deleted the data statys in the volumen safe