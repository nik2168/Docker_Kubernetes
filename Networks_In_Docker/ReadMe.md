# Networks in Docker

Docker provides a high-level networking abstraction that allows containers to communicate with each other and the host machine. Docker networks are isolated from each other, and each container is connected to a network.

## Useful Commands

### Create a network

    docker network create <network-name>

### List all networks

    docker network ls

### Inspect a network

    docker network inspect <network-name>

### Connect a container to a network

    docker network connect <network-name> <container-name>

### Disconnect a container from a network

    docker network disconnect <network-name> <container-name>

### Remove a network

    docker network rm <network-name>

### Check if a network exists

    docker network exists <network-name>

### List all containers connected to a network

    docker network inspect --format='{{range $p, $c := .Containers}}{{$c.Names}}{{end}}' <network-name>

### Check if a container is connected to a network

    docker network inspect --format='{{if eq .Containers "<container-name>" "true"}}true{{else}}false{{end}}' <network-name>

### Get the IP address of a container in a network

    docker network inspect --format='{{range $p, $c := .Containers}}{{$c.IPV4Address}}{{end}}' <network-name>

# --net flag connects the container to the network


### demo - Make container of app's server & database in same network

1-> docker network create customnet

# Explain
    # This command creates a new network named customnet.
    # The network is isolated from other networks and containers.
    # Containers connected to this network can communicate with each other.
    # The network is not bridged to the host machine.

2-> docker run -d -p 27071:27017 --net customnet -e MONGO_INITDB_ROOT_USERNAME=nik21 -e MONGO_INITDB_ROOT_PASSWORD=Nik@1234 --name mongodockerwala mongo

# Explanation
    # -d flag means to run the container in detached mode
    # -p 27071:27017 flag maps port 27071 of host machine to port 27017 of the container
    # --net customnet flag connects the container to the network named customnet
    # -e MONGO_INITDB_ROOT_USERNAME=nik21 flag sets the environment variable MONGO_INITDB_ROOT_USERNAME to nik21
    # -e MONGO_INITDB_ROOT_PASSWORD=Nik@1234 flag sets the environment variable MONGO_INITDB_ROOT_PASSWORD to Nik@1234
    # --name mongodockerwala flag names the container as mongodockerwala
    # mongo is the image name

3-> docker build -t [img name] .

# Explanation
    # . is the current working directory
    # -t flag gives the name to the image
    # expressdockerwala is the name given to the image

4-> docker run -d -p 3000:3000 -e MONGO_URL=mongodb://[change_localhost -> mongodockerwala]:27017 --net customnet --name expressdockerwala expressdockerwala

# Explanation
    # -d flag means to run the container in detached mode
    # -p 3000:3000 flag maps port 3000 of host machine to port 3000 of the container
    # --net customnet flag connects the container to the network named customnet
    # -e MONGO_URL=mongodb://[change_localhost -> mongodockerwala]:27017 sets the environment variable MONGO_URL to the given value
    # --name expressdockerwala flag names the container as expressdockerwala
    # expressdockerwala is the image name


# logs of any container cmd : docker container logs -f <container_name || container_id>

# Inspect customnet
docker network inspect customnet 
# Explanation - prints the customnet named network details with all the connected containers
