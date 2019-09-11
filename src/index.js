const helloMessage = require('./say-hello');

console.log(helloMessage.niceMess);


const $ = require('jquery');

console.log('Hello World');

const x = () => {
    console.log('hi');
};

x();

$('button').click(function () {
    console.log('test')
});

