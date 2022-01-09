# Get code

```
git clone --recursive https://github.com/fcwu/docker-ubuntu-vnc-desktop
```

or, if you have already cloned it, get submodules contents :
```
git submodule init; git submodule update
```

# Test local code

## Test-run in container rebuilt from local repo

You may edit the code in your local copy of the repo, rebuild the
container, and test the changes:

```
make clean
IMAGE=ubuntu:18.04 make build
make run
```

## develop backend

You may wish to work on the backend app. As the "make run" makes sure
to mount the current dir contents under /src in the container, you can
proceed as such (no compilation of the Python code):
```
make shell
supervisorctl -c /etc/supervisor/supervisord.conf stop web
cd /src/image/usr/local/lib/web/backend
./run.py --debug
```

## develop frontend

```
cd web/vuensee
yarn
BACKEND=http://127.0.0.1:6080 npm run dev
```


## Guide to Setup Dependencies from 3rd-party Git Repo

This section shows some ideas (using `git subtree`) about managing 3rd-party Git repo dependencies
with local modifications. [#1](#References)


1. Add the sub project as a remote

    ```bash
    git remote add -f vuensee https://github.com/andersevenrud/vuensee.git
    ```

2. Add the folder as git-subtree

    ```bash
    git subtree add --prefix web/vuensee vuensee main --squash
    ```
   
3. To update the sub-project:
    
    ```bash
    git fetch vuensee main
    git subtree pull --prefix web/vuensee vuensee main --squash
    ```
   
**References**

[1] [Git-Subtree](https://www.atlassian.com/git/tutorials/git-subtree), Atlassian
