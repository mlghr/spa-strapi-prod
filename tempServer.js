process.env.NODE_ENV = 'production';

const strapi = require('strapi');


function dir(object) {
    stuff = [];
    for (s in object) {
        stuff.push(s);
    }
    stuff.sort();
    return stuff;
}

dir(strapi);


// start strapi application
strapi().start();

