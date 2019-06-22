# riff Sample: Node Square

A sample JavaScript function that multiplies a number by itself, returning the squared value.

## Deployment

This assumes that the default namespace was initialized with credentials for your `DOCKER_ID` on [Docker Hub](https://docs.docker.com/docker-hub/).

```bash
pfs function create square \
--git-repo https://github.com/projectriff-samples/node-square  \
--artifact square.js \
--verbose
```

## Invoke the function.

Invoke via `pfs` cli:

```bash
> pfs service invoke square --json -- -w '\n' -d 7
```

Invoke via direct URL

```txt
> curl http://square.default.example.com' -H 'Content-Type: application/json' -w '\n' -d 7
```

Change the number 7 to another number to see its square.
