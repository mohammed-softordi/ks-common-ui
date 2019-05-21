export {}; // ensure this file can only be parsed as a module.

// Give the user the choice to opt out of vendors loading.
var vendorsCssUrls = [
  'https://static.scania.com/resources/logotype/scania/logotype-stylesheet/scania-logotype.css',
  'https://static.scania.com/resources/fonts/scania-sans/scania-fonts.css',
  'https://static.scania.com/resources/fonts/font-awesome/font-awesome.css',
  'https://static.scania.com/resources/icons/scania/icons.css',
  'https://static.scania.com/resources/icons/font-awesome/5.3.1/css/all.min.css',
  'https://static.scania.com/resources/icons/font-awesome/5.3.1/css/v4-shims.min.css',
  'https://static.scania.com/vendors/components/jQuery/select2/3.5.2/css/select2.css'
];
var headLinks = document.querySelectorAll('head link');

if (!window.corporateUiSkipLoadingVendorsCss) {
    vendorsCssUrls.forEach(function (u) {
        // Check if the link doesn't not exist in document before
        var exists = false;
        headLinks.forEach(function (l) {
            if (l.href === u ) {
                exists = true;
            }
        });
        if (!exists) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.crossOrigin = 'anonymous';
            link.href = u;
            document.head.appendChild(link);
        }
    });
}