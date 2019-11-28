'use strict';

const core = require('./core-201c9db6.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
