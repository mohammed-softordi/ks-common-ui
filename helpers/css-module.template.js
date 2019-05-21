try {
    $_documentContainer.setAttribute('style', 'display: none;');
    appenTemplate($_documentContainer);
} catch(err) {
    const $_documentContainer = document.createElement('template');
    $_documentContainer.setAttribute('style', 'display: none;');
    appenTemplate($_documentContainer);
}
function appenTemplate($_documentContainer) {
  // $_documentContainer.innerHTML = `<dom-module id="corporate-ui"><template><style>
  // /* DO NOT REMOVE "corporate-ui.css", it will be replace by gulp */
  // {%corporate-ui.css%}
  // </style></template></dom-module>`;

  $_documentContainer.innerHTML = `
  /* DO NOT REMOVE "style-module", it will be replace by gulp */
  {%style-module%}
  `;
  document.head.appendChild($_documentContainer.content);
}
