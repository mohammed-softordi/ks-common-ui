try {
    $_documentContainer.setAttribute('style', 'display: none;');
    appenTemplate($_documentContainer);
} catch(err) {
    const $_documentContainer = document.createElement('template');
    $_documentContainer.setAttribute('style', 'display: none;');
    appenTemplate($_documentContainer);
}
function appenTemplate($_documentContainer) {
    $_documentContainer.innerHTML = `
  /* DO NOT REMOVE "style-module", it will be replace by gulp */
  <dom-module id="bootstrap-treeview"><template><style>
  .treeview .list-group-item{cursor:pointer}.treeview span.indent{margin-left:10px;margin-right:10px}.treeview span.icon{width:12px;margin-right:5px}.treeview .node-disabled{color:silver;cursor:not-allowed}
</style></template></dom-module> 
`;
    document.head.appendChild($_documentContainer.content);
}
