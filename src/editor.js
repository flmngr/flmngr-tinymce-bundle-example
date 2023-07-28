/* Import TinyMCE */
import tinymce from 'tinymce';

/* Default icons are required. After that, import custom icons if applicable */
import 'tinymce/icons/default';

/* Required TinyMCE components */
import 'tinymce/themes/silver';
import 'tinymce/models/dom';

/* Import a skin (can be a custom skin instead of the default) */
import 'tinymce/skins/ui/oxide/skin.css';

/* Import plugins */
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/code';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/emoticons/js/emojis';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/table';

/* Set Flmngr API key and then import the plugin */
import './flmngr-api-key'
import './plugins/file-manager/plugin';

/* content UI CSS is required */
import contentUiSkinCss from 'tinymce/skins/ui/oxide/content.css';

/* The default content CSS can be changed or replaced with appropriate CSS for the editor content. */
import contentCss from 'tinymce/skins/content/default/content.css';

/* Initialize TinyMCE */
export function render () {
    tinymce.init({
        selector: 'textarea#editor',

        plugins: 'image advlist code emoticons link lists table file-manager',
        // Link Flmngr with your server
        /*Flmngr: {

            urlFileManager: "...",
            urlFiles: "...",

            // DO NOT set API key here
            // When bundling the plugin this is not a correct place to do it
            // Specify your own API key in `src/flmngr-api-key.js` file
            // apiKey: DO NOT SET HERE,

        },*/

        toolbar: 'bold italic | bullist numlist | link emoticons',
        skin: false,
        content_css: false,
        content_style: contentUiSkinCss.toString() + '\n' + contentCss.toString(),
    });
};