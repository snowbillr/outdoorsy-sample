# Outdoor.sy

This project implements the required functionality for the Outdoor.sy sample project. It runs on the latest version of Ruby on Rails with a React front-end. No server-side features are implemented however, aside from very basic routing. I had grand ambitions of storing the data in a SQLite database, but that would have ended up requiring a greater time investment than I thought was appropriate.

## Dependencies

This project uses the following tool verisons:

- Ruby: 3.1.2
- Rails: 7.0.4
- Node: 18.9.0
- Yarn: 1.22.19

Please ensure they are installed on your system and available on the command line in the project directory. I've used a combination of `homebrew` and the `asdf` version manager to set this up, however, there are a variety of ways to install different versions of these tools.

> Note: It is both possible and likely that this project will run on other versions of these tools, but that has not been tested.

## Setup

Run the following commands from within the project directory:

1. `$> bundle install`
2. `$> yarn install`

## Running the app

Follow the steps below to run the application:

1. `$> bin/dev`
2. Visit http://localhost:3000 in the browser.

## Features

### Development

- JS linting and prettier formatting
- CSS modules
- Custom ESBuild script

### Product

- File upload via file selection dialog
- Customer data display
- Sorting by Vehicle Type and Full name
- Bonus: (Multiple) File drag and drop to upload
- Bonus: Sorting by any column
- Bonus: Fun logo

## Limitations

### No CSS auto prefixing

I did not take the time to enable auto prefixing for the compiled CSS files. As a result, this project will stop working correctly on older browser versions. I've tested it on the latest Chrome and Firefox versions and everything works correctly there.

### Icon and font loading via CDN (FOUC)

The icons and fonts are loaded from Google's CDN, which results in a brief Flash of Unstyled Content (FOUC) when the page loads. In a production environment, this would be mitigated by hosting our own font assets rather than relying on a 3rd party.

### No uploaded record manipulation

This would have been the next feature I'd add in given more time. In-place editing of fields and the ability to remove records from the table. This would have been done by generating a UUID for each record at upload time and using that to identify the records being edited and removed.
