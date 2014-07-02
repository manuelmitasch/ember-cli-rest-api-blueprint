Warning: currently only works with ember-cli master until it's version is > 0.0.37


Ember CLI Addon: REST API (compatible with DS.RESTAdapter)
==================================================

This [Ember CLI](https://github.com/stefanpenner/ember-cli) addon provies a `rest-api` blueprint that is compatible with the Ember Data DS.RESTAdapter.

It creates express routes in 'server/routes/' that are then automatically served through the `ember serve` command.


Install
-------

```
npm install ember-cli-rest-api-blueprint --save-dev
```


Dependencies
------------

The generated REST API depends on

* [nedb](https://github.com/louischatriot/nedb): a very simple database
* [ember-inflector-node-shim](https://github.com/manuelmitasch/ember-inflector-node-shim): a shim to use ember-inflector (to pluralize the modelname)

Thus, you need to add these dependencies to your project with:

```
npm install nedb --save-dev
npm install git://github.com/manuelmitasch/ember-inflector-node-shim --save-dev
```


Usage
-------

To create a REST API for a model called `post` type:

```
ember generate rest-api post
```

The REST API is namespaced with `/api` to avoid route collisions with the routes defined in your Ember app. Thus, it can be accessed through:

```
0.0.0.0:4200/api/posts
```


How to persist database records?
--------------------------------

By default the generated REST route uses [nedb](https://github.com/louischatriot/nedb) as a in-memory store. Thus, all changes are lost after you restart the server.

To persist the data you can specify a filename when creating the `db` object:

```
db = new Datastore({ filename: 'path/to/datafile', autoload: true });
```



Roadmap
-------

[] Add a post-install script that adds the dependencies to the ember app.