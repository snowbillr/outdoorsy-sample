# Outdoor.sy

## Dependencies

This project uses the following tool verisons:

- Ruby: 3.1.2
- Rails: 7.0.4
- Node: 18.9.0
- Yarn: 1.22.19

Please ensure they are installed on your system and available on the command line for this repository. I've used a combination of `homebrew` and the `asdf` version manager to set this up, however, there are a variety of ways to install different versions of these tools.

> Note: It is both possible and likely that this project will run on other versions of these tools, but that has not been tested.

## Setup

1. `$> bundle install`
2. `$> yarn install`

## Running the app

1. `$> bin/dev`
2. Visit http://localhost:3000 in the browser.

## Features

### Development

- JS linting and prettier formatting
- CSS modules
- Custom ESBuild script

### Product

- (Multiple) File drag and drop
- Sorting by any column

## Limitations

- No auto prefixing
- Icon and font loading via CDN (FOUC)
