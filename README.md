[![Flmngr file manager logo](https://flmngr.com/img/favicons/favicon-64x64.png)](https://flmngr.com)

# TinyMCE + Flmngr file manager bundling sample

> How to build TinyMCE with built-in [file manager plugin](https://flmngr.com) using Webpack.

How to run it:

1. Fork this sample
2. Run `npm i` to install dependencies
3. Run `npm run build` to build 
4. Open `dist/index.html` file with browser check a live demo

The sample just follows the official TinyMCE [manual](https://www.tiny.cloud/docs/tinymce/6/webpack-es6-npm/) of building it into a bundle respecting some moments of Flmngr.

See:
- `src/editor.js` to see how to include the plugin into the build:
  - plugin and API key in imports
  - `plugins` section of TinyMCE config
  - commented `Flmngr` section of TinyMCE config
- `src/flmngr-api-key.js` - the correct place to specify your API key
- `src/plugins/file-manager/plugin.js` TinyMCE file manager plugin (just downloaded from its website)

## About Flmngr

[![Flmngr file manager screenshot](https://flmngr.com/img/browsing.jpg)](https://flmngr.com)

[Flmngr file manager](https://flmngr.com) is used to upload and manage files and images. Can be a standalone file manager (React/Angular/etc. or custom JavaScript or TypeScript integrations) or work together with [TinyMCE](https://flmngr.com/doc/install-tinymce-plugin), [CKEditor&nbsp;4](https://flmngr.com/doc/install-ckeditor-plugin), [CKEditor&nbsp;5](https://flmngr.com/doc/install-ckeditor-5-plugin), [N1ED](https://n1ed.com), or any other JS components.


## License of the example

GNU Lesser General Public License v3; see LICENSE