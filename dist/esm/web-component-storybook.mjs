import { p as patchBrowser, b as bootstrapLazy } from './core-aa15061b.js';

patchBrowser().then(options => {
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
