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

## Updating theme

In order to use a custom colour palette, we need to build our own mkdocs-material assets. This is based on the instructions listed [here](https://squidfunk.github.io/mkdocs-material/customization/#theme-development) with a few modifications:

```bash
git clone https://github.com/blk-io/mkdocs-material.git
cd mkdocs-material
pipenv --python 3.7
pipenv install -r requirements.txt 
npm install
npm run watch
```

When you have made your modifications, run the following to update the documentation theme:

```bash
npm run build
cp -r material ..<path-to>/epirus-docs/theme
```
