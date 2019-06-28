# Epirus documentation portal

## Project setup

Make sure you have [Pipenv](https://docs.pipenv.org/en/latest/) installed.

Then run the following to get up and running:

```bash
git clone https://github.com/blk-io/epirus.github.io.git epirus-docs
cd epirus-docs
pipenv install
pipenv shell
```

## Build instructions

Run locally using:

```bash
mkdocs serve
```

To build and push to docs.epirus.io:

```bash
mkdocs gh-deploy
```

