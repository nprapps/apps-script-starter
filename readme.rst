Apps Script Starter Kit
=======================

Basic toolkit for building projects using Google Apps Script.

Usage
-----

Before starting a project, make sure that you've installed `Google's Clasp utility <https://github.com/google/clasp>`_ for working with Apps Script files. Our best practice should be that code for GAS projects should be checked into source control, either in its own repo or with the related interactive code.

This scaffolding isn't anything fancy. For now, working with it is pretty simple:

1. Copy the contents of this folder to a new directory.
2. Run `clasp create` to generate a new project. If this is going to be paired with a Drive document, use `--type t` where t is `docs` or `sheets`, depending.
3. Run `clasp push` to sync your files up to to the remote.

A few things to note about how Apps Script handles files:

* .js files will become .gs on upload. Name local files as .js to make syntax highlighting easier.
* Scripts and styles for panels or dialogs have to be uploaded as HTML, and wrapped in `<script>` or <style>` tags, respectively. Use the `include()` function in the `ui/templateHelpers.js` file to pull them into your UI.
* Folders don't technically exist in the Apps Script editor, which means that as this repo gets bigger, it also potentially becomes more difficult to manage in the web UI. You may consider deleting folders that don't need to exist depending on the project type (for example, on a Sheets bound app, you probably don't need the `docs` folder).



