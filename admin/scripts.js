import CMS from "netlify-cms-app";
import cloudinary from "netlify-cms-media-library-cloudinary";
// Initialize the CMS object
CMS.init();
// Now the registry is available via the CMS object.
CMS.registerPreviewTemplate("my-template", MyTemplate);
CMS.registerMediaLibrary(cloudinary);
