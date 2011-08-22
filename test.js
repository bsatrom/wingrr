
var wingrr = require('./lib/wingrr')

wingrr.binVersion(function(err, version){
  console.log(version);
})

wingrr.notify('You have mail!')
wingrr.notify('5 new messages', { sticky: true })
wingrr.notify('5 new emails', { title: 'Email Client', image: './email.png', sticky: true })
wingrr.notify('Show image', { image: 'path/to/my.image.png' })
wingrr.notify('Show image', { image: 'path/to/my.image.png' }, function(){
  require('sys').p('callback')
})

wingrr.registerApplication 'My CoolApp', 'appimg.png'
wingrr.notify('You have a message', { name: 'My CoolApp' })

wingrr.debug = true