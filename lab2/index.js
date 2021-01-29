import Fetch from './Fetch.js';

const valid = new Fetch("316" , "#90ee90");
valid.fetch();

const invalid = new Fetch("dragon");
invalid.fetch();