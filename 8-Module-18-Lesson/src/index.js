/**
 * Make registration
 * Make authorization
 * Build result in one ES5 bundle
 */
import 'bootstrap/dist/css/bootstrap.min.css';

import './public/index.css';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'bootstrap';

import regHandler from './registration-submit-handler';
import $ from 'jquery';
import authHandler from './authHandler';

authHandler();
regHandler();

$('.toast').toast({
  delay: 5000,
});
