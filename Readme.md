# nodejs Growl notifications for Windows

Growl support for Nodejs on Windows. Forked, modified for Windows and extended, with much appreciation, from TJ Holowaychuk's (tj@vision-media.ca) [node-growl library](https://github.com/visionmedia/node-growl).

## Pre-requisites

	* [Growl for Windows](http://www.growlforwindows.com/gfw/default.aspx)
	* growlnotify command-line utility should be in your PATH

## Installation

  Install [npm](http://npmjs.org/) and run:
  
      $ npm -g install wingrr

## Examples

Callback functions are optional

    var wingrr = require('wingrr')
    wingrr.notify('You have mail!')
    wingrr.notify('5 new messages', { sticky: true })
    wingrr.notify('5 new emails', { title: 'Email Client', image: './email.png', sticky: true })
    wingrr.notify('Show image', { image: 'path/to/my.image.png' })
    wingrr.notify('Show image', { image: 'path/to/my.image.png' }, function(){
      // ... notified
    })

## Options

  - title
    - notification title
  - name
    - application name
  - sticky
    - weather or not the notification should remainin until closed
  - callback
  	- a callback url to activate when the user clicks on the message 
  - image  
  	- Url or path to an image file (relative to growlnotify if path)

Register a new appliation with growlnotify
	
	wingrr.registerApplication 'My CoolApp', 'appimg.png'
	wingrr.notify('You have a message', { name: 'My CoolApp' })

Display raw growlnotify commands on the console
	wingrr.debug = true
      
Fetch the current version of 'growlnotify':

    wingrr.binVersion(function(err, version){ ... })
    // => 'n.n.n'

## License 

(The MIT License)

Copyright (c) 2011 Brandon Satrom <bsatrom@gmail.com>, Carrot Pants Studios

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.