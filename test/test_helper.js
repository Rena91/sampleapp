const  mongoose = require('mongoose')

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: true, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };

mongoose.connect('mongodb://localhost:27017/myapp',options)
.then((v) => console.log('connection is good.....'+'\n',)
,err => console.log(err)
)
// mongoose.connection
// .once('open',() => console.log('good to go'))
// .on('error',(error) => {console.warn('err',error);
// })


beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    done()
  })
   
})
