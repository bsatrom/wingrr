
// wingrr - Copyright Brandon Satrom <bsatrom@gmail.com> (MIT Licensed)

/**
 * Module dependencies.
 */

var exec = require('child_process').exec
  , path = require('path');

/**
 * version, default title and debug properties.
 */

exports.version = '0.9'
exports.title = "wingrr notify";
exports.debug = false;  
  
/**
 * Fetch the binary version when available.
 *
 * @param  {function} fn
 * @api public
 */
exports.binVersion = function(fn) {
  exec('growlnotify /silent:true', function(err, stdout){
    if (err) return fn(err);    
    var version = /(\d+\.\d+(?:\.\d+)?)/.exec(stdout) ? /(\d+\.\d+(?:\.\d+)?)/.exec(stdout)[1] : 1.0;
    fn(null, parseFloat(version));
  });
};

/**
 * Register a new application with growlnotify, with optional icon image
 *
 * @param {string} name - Appliation Name
 * @param {string} img - Url/Path to Image (relative to location of growlnotify, if path)
 * @api public
 */
exports.registerApplication = function(name, img) {
  if (!name)
    return;
  
  var command = 'growlnotify /a:"' + name + '"';
  if (img)
    command += ' /ai:"' + img + '"';
  
  if (exports.debug) console.log(command);
  exec(command);
}

/**
 * Send growl notification _msg_ with _options_.
 *
 * Options:
 *
 *  - title    Notification title
 *  - sticky   Make the notification stick (defaults to false)
 *  - name     Application name (defaults to wingrr notify)
 *  - callback A callback url to activate when the user clicks on the message 
 *  - image    Url or path to an image file (relative to growlnotify if path)
 *
 * Examples:
 *
 *   growl.notify('New alert')
 *   growl.notify('5 new alerts', { title: 'Todoly' })
 *   growl.notify('Email sent', function(){
 *     // ... notification sent
 *   })
 *
 * @param {string} msg
 * @param {object} options
 * @param {function} fn
 * @api public
 */
 exports.notify = function(msg, options, fn) {
  var image
    , args = ['growlnotify', '"' + msg + '"']
    , options = options || {}
    , fn = fn || function(){};
  exports.binVersion(function(err, version){
    if (err) return fn(err);
    if (options.image) args.push('/i:', '"' + options.image + '"');
    if (options.sticky) args.push('/s:', options.sticky);
    if (options.name) args.push('/a:', '"' + options.name + '"');
    if (options.title) args.push('/t:', '"' + options.title + '"');
    if (options.callback) args.push('/cu:', '"' + options.callback + '"');
    
    var notify = args.join(' ').replace(/: /g, ':');
    if (options.debug || exports.debug) console.log(notify);
    exec(notify, fn);
  });
};
