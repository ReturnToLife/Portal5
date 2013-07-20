return (to_life); /* Portal5 */
===============================

The Epitech Communication Portal, again.

This is our 5th attempt on coding this awesome Portal and we know this
one will be the best of all. If you want to join us in this exciting
adventure, you can contact us [on this page](https://return.epitech.eu/dev/?p=src).

##### Full documentation

The full dev documentation of the project is available on its specific
website: [return.epitech.eu/dev](https://return.epitech.eu/dev/), as
well as the documentation of the API web-service that the website is using.

##### We love contributions!

Feel free to contribute by forking these projects on GitHub and make pull requests.
You can also help us by creating issues for features requests and bugs reports, on GitHub too.

## Requirements

### Server

Our website is fully dynamic on client-side, which means we don't need an extremly
complicated server. A verry simple web server that can handle URL-rewriting and
deliver simple web pages is just what we need.

We recommend you to install `Apache`, since we provided the `.htaccess` configuration
file for it. If you decide to install it on another web server, we'd love to add
your configuration on the repository.

### External dependencies

We provided an "installation" script that will download for you the external requirements
you need to run the website.

```shell
./install.sh
```

### Is the web service ready to use?

Our website does not handle any database management. This is the role of the web service.
The web service is based on [this API](https://return.epitech.eu/dev/?p=api).

You will need to have it launched somewhere to use this website. Its sources and documentations
are available on [its repository](https://github.com/ReturnToLife/Portal4_API).

### Let's use it!

The API is used on client side only, using [JQuery](http://jquery.com/) and
[Ajax](http://api.jquery.com/jQuery.ajax/).

The main file is `js/api/api.js`. It's handling the calls to the API. You're never
supposed to call one of its function directly: we use wrappers, also on the `js/api/` folder.
One file in this folder corresponds to one set of API methods according to
[the documentation](https://return.epitech.eu/dev/?p=api).

### Pretty pages: HTML5 / JQuery / LESS CSS

##### Our webpages are rendered on client-side.

The main HTML5 objects are sent by the server.
Those pages are on the `html/` folder.

##### Using [JQuery](http://jquery.com/), we transform the static pages into a nice, dynamic website.

Those files are on the `js/pages/` folder.

##### To make them shiny, we use, of course, CSS3.
The CSS files are compiled from [LESS CSS](http://lesscss.org).

By default, the CSS are dynamically compiled on client-side. This is good for development only,
since it's slow as hell.
If you don't need to edit the CSS or if you are in production mode, you will need your web server
to deliver the compiled and compressed CSS files.

To compile them, type:
```shell
./install.sh -prod
```
Then edit a few lines in the HTML pages so they don't deliver the `less.js` compiler and deliver
the `css` files instead of the `less` files.

Copyright/License
=================

     Copyright 2013 Barbara Lepage
  
     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at
  
         http://www.apache.org/licenses/LICENSE-2.0
  
     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.


### Author

* Main maintainer and contributor: __db0__
* Website: http://db0.fr/
* Contact: db0company@gmail.com


### Up to date

Latest version of this project is on GitHub:
* https://github.com/ReturnToLife/Portal5
