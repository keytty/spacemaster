install:
	@yarn install

lint: install
	yarn lint

test: lint
	yarn test

example: install
	node examples/example.js
