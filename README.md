## Try-Pods

A Podcast application that allows you to discover, listen to, and share lists of your favorite podcasts. 

## Preview

!["Home navigation gif"](https://github.com/programmingpals/try-pods-app/blob/master/client/src/assets/screenshots/try-pods-home.gif?raw=true)

!["Profile Top 8 gif"](https://github.com/programmingpals/try-pods-app/blob/master/client/src/assets/screenshots/try-pods-top-8.gif?raw=true)

!["Friends gif"](https://github.com/programmingpals/try-pods-app/blob/master/client/src/assets/screenshots/try-pods-friends-list.gif?raw=true)

!["Try-Pods Logo gif"](https://github.com/programmingpals/try-pods-app/blob/master/client/src/assets/screenshots/Try%20Pods.gif?raw=true)


The main important bit is that the React project has `proxy` set to `localhost:3001` in the `package.json` file. Take a look!

## Using the boilerplate

First, fork this boilerplate so you get your own copy of it. Once you have done that, you can clone your new repo to your machine, and get started.

You need **TWO** terminals for this.

In one terminal, run `bundle` to install the dependencies. Run `bin/rake db:setup` to create the databases (called rails_project_development by default). Run `bin/rails s` to run the server.

In the other terminal, `cd` into `client`. Run `npm install`. Rename the `.env.example` file to be called `.env`. Then run `npm start` and go to `localhost:3000` in your browser.

In the browser, you can click on the button and see the data get loaded.

If this doesn't work, please message me!

## Next steps

From here, you can start working on your project!

On the Rails side, you may make new `resources` routes in your `routes.rb` file, e.g. :

```rb
namespace :api do
  resources :dogs # to generate GET /api/dogs, POST /api/dogs, etc...
end
```

Then you can make your various controllers, models, migrations, etc. as you need! The one funky thing is that instead of rendering an HTML view you'll be rendering JSON. [You can return anything from a Rails controller as JSON like this.](https://guides.rubyonrails.org/v5.2/layouts_and_rendering.html#rendering-json) See the example in my "tests_controller".

On the React side, the important bit is that you make you make your AJAXy HTTP requests using something like `axios` or `superagent`. I've set this up to use `axios` already. Check the React code to see an example request being made on-click to the Rails server! You can make your HTTP requests to `/api/anything/you/want`, as long as the route exists on your Rails app.

**NOTE:** I recommend that you namespace all your routes under `api` on the Rails side! Look at how I've done that in the `routes.rb` file, and also how the `tests_controller` is written as:

```rb
class Api::TestsController < ApplicationController
```

and it lives in the `api` folder! Put all your controllers in there!

