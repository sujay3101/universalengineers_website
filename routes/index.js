
/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title: 'Express', year: new Date().getFullYear() });
};

exports.about = function (req, res) {
    res.render('about', { title: 'About title', year: new Date().getFullYear(), message: 'Your application description page' });
};

//exports.contact = function (req, res) {
//    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page' });
//};

//exports.customers = function (req, res) {
//    res.render('Customers', { title: 'Customers title', year: new Date().getFullYear(), message: 'Your customer description page' });
//};


//var express = require('express');
//var router = express.router();

////Get home (index) page

//router.get('/', function (req, res, next) {
//    res.render('index', {title: 'Express'});

//});

//module.exports = router;

