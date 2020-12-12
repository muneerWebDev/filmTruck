(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./node_modules/raw-loader/index.js!./row/cssMixins/columnGap.pcss":function(e,n){e.exports=".vce-row--col-gap-$gap {\n\n  @if $gap != false {\n    > .vce-row-content {\n      > .vce-col {\n        margin-right: $(gap)px;\n      }\n\n      > .vce-column-resizer .vce-column-resizer-handler {\n        width: $(gap)px;\n      }\n    }\n  }\n}\n\n.rtl .vce-row--col-gap-$gap,\n.rtl.vce-row--col-gap-$gap {\n  @if $gap != false {\n    > .vce-row-content {\n      > .vce-col {\n        margin-left: $(gap)px;\n        margin-right: 0;\n      }\n    }\n  }\n}"},"./node_modules/raw-loader/index.js!./row/styles.css":function(e,n){e.exports='/* ----------------------------------------------\n * Row\n * ---------------------------------------------- */\n.vce {\n  margin-bottom: 30px;\n}\n.vce-row-container {\n  width: 100%;\n}\n.vce-row {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  margin-left: 0;\n  margin-right: 0;\n}\n.vce-row-content > .vce-col:last-child {\n  margin-right: 0;\n}\n.vce-row-full-height {\n  min-height: 100vh;\n}\n.vce-row-content {\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n  -ms-flex-align: start;\n      align-items: flex-start;\n  min-height: 1em;\n  position: relative;\n}\n.vce-row-wrap--reverse > .vce-row-content {\n  -ms-flex-wrap: wrap-reverse;\n      flex-wrap: wrap-reverse;\n  -ms-flex-line-pack: end;\n      align-content: flex-end;\n  -ms-flex-align: end;\n      align-items: flex-end;\n}\n.vce-row-columns--top > .vce-row-content {\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n}\n.vce-row-columns--top.vce-row-wrap--reverse > .vce-row-content {\n  -ms-flex-line-pack: end;\n      align-content: flex-end;\n}\n.vce-row-columns--middle > .vce-row-content {\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n.vce-row-columns--bottom > .vce-row-content {\n  -ms-flex-line-pack: end;\n      align-content: flex-end;\n}\n.vce-row-columns--bottom.vce-row-wrap--reverse > .vce-row-content {\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n}\n.vce-row-columns--top > .vce-row-content:after,\n.vce-row-columns--middle > .vce-row-content:after,\n.vce-row-columns--bottom > .vce-row-content:after {\n  content: "";\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n  display: block;\n}\n.vce-row-content--middle > .vce-row-content > .vce-col > .vce-col-inner {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n.vce-row-content--bottom > .vce-row-content > .vce-col > .vce-col-inner {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n.vce-row-equal-height > .vce-row-content {\n  -ms-flex-align: stretch;\n      align-items: stretch;\n}\n.vce-row-columns--stretch > .vce-row-content {\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -ms-flex-align: stretch;\n      align-items: stretch;\n}\n.vce-row[data-vce-full-width="true"] {\n  position: relative;\n  box-sizing: border-box;\n}\n.vce-row[data-vce-stretch-content="true"] {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n.vce-row[data-vce-stretch-content="true"].vce-row-no-paddings {\n  padding-left: 0;\n  padding-right: 0;\n}\n.vce-row.vce-element--has-background {\n  padding-left: 30px;\n  padding-right: 30px;\n  padding-top: 30px;\n}\n.vce-row.vce-element--has-background[data-vce-full-width="true"]:not([data-vce-stretch-content="true"]) {\n  padding-left: 0;\n  padding-right: 0;\n}\n.vce-row.vce-element--has-background.vce-row--has-col-background {\n  padding-bottom: 30px;\n}\n.vce-row > .vce-row-content > .vce-col.vce-col--all-last {\n  margin-right: 0;\n}\n.rtl .vce-row > .vce-row-content > .vce-col.vce-col--all-last,\n.rtl.vce-row > .vce-row-content > .vce-col.vce-col--all-last {\n  margin-left: 0;\n}\n@media (min-width: 0) and (max-width: 543px) {\n  .vce-row.vce-element--xs--has-background {\n    padding-left: 30px;\n    padding-right: 30px;\n    padding-top: 30px;\n  }\n  .vce-row.vce-element--xs--has-background[data-vce-full-width="true"]:not([data-vce-stretch-content="true"]) {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .vce-row.vce-element--xs--has-background.vce-row--xs--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row.vce-element--xs--has-background.vce-row--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row.vce-element--has-background.vce-row--xs--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row > .vce-row-content > .vce-col.vce-col--xs-last {\n    margin-right: 0;\n  }\n  .rtl .vce-row > .vce-row-content > .vce-col.vce-col--xs-last,\n  .rtl.vce-row > .vce-row-content > .vce-col.vce-col--xs-last {\n    margin-left: 0;\n  }\n}\n/* styles for mobile-landscape */\n@media (min-width: 544px) and (max-width: 767px) {\n  .vce-row.vce-element--sm--has-background {\n    padding-left: 30px;\n    padding-right: 30px;\n    padding-top: 30px;\n  }\n  .vce-row.vce-element--sm--has-background[data-vce-full-width="true"]:not([data-vce-stretch-content="true"]) {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .vce-row.vce-element--sm--has-background.vce-row--sm--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row.vce-element--sm--has-background.vce-row--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row.vce-element--has-background.vce-row--sm--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row > .vce-row-content > .vce-col.vce-col--sm-last {\n    margin-right: 0;\n  }\n  .rtl .vce-row > .vce-row-content > .vce-col.vce-col--sm-last,\n  .rtl.vce-row > .vce-row-content > .vce-col.vce-col--sm-last {\n    margin-left: 0;\n  }\n}\n/* styles for mobile-landscape */\n@media (min-width: 768px) and (max-width: 991px) {\n  .vce-row.vce-element--md--has-background {\n    padding-left: 30px;\n    padding-right: 30px;\n    padding-top: 30px;\n  }\n  .vce-row.vce-element--md--has-background[data-vce-full-width="true"]:not([data-vce-stretch-content="true"]) {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .vce-row.vce-element--md--has-background.vce-row--md--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row.vce-element--md--has-background.vce-row--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row.vce-element--has-background.vce-row--md--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row > .vce-row-content > .vce-col.vce-col--md-last {\n    margin-right: 0;\n  }\n  .rtl .vce-row > .vce-row-content > .vce-col.vce-col--md-last,\n  .rtl.vce-row > .vce-row-content > .vce-col.vce-col--md-last {\n    margin-left: 0;\n  }\n}\n/* styles for mobile-landscape */\n@media (min-width: 992px) and (max-width: 1199px) {\n  .vce-row.vce-element--lg--has-background {\n    padding-left: 30px;\n    padding-right: 30px;\n    padding-top: 30px;\n  }\n  .vce-row.vce-element--lg--has-background[data-vce-full-width="true"]:not([data-vce-stretch-content="true"]) {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .vce-row.vce-element--lg--has-background.vce-row--lg--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row.vce-element--lg--has-background.vce-row--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row.vce-element--has-background.vce-row--lg--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row > .vce-row-content > .vce-col.vce-col--lg-last {\n    margin-right: 0;\n  }\n  .rtl .vce-row > .vce-row-content > .vce-col.vce-col--lg-last,\n  .rtl.vce-row > .vce-row-content > .vce-col.vce-col--lg-last {\n    margin-left: 0;\n  }\n}\n/* styles for mobile-landscape */\n@media (min-width: 1200px) {\n  .vce-row.vce-element--xl--has-background {\n    padding-left: 30px;\n    padding-right: 30px;\n    padding-top: 30px;\n  }\n  .vce-row.vce-element--xl--has-background[data-vce-full-width="true"]:not([data-vce-stretch-content="true"]) {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .vce-row.vce-element--xl--has-background.vce-row--xl--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row.vce-element--xl--has-background.vce-row--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row.vce-element--has-background.vce-row--xl--has-col-background {\n    padding-bottom: 30px;\n  }\n  .vce-row > .vce-row-content > .vce-col.vce-col--xl-last {\n    margin-right: 0;\n  }\n  .rtl .vce-row > .vce-row-content > .vce-col.vce-col--xl-last,\n  .rtl.vce-row > .vce-row-content > .vce-col.vce-col--xl-last {\n    margin-left: 0;\n  }\n}\n'},"./row/index.js":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/vc-cake/index.js"),a=t.n(o),c=t("./node_modules/@babel/runtime/helpers/extends.js"),l=t.n(c),i=t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),r=t.n(i),s=t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),d=t.n(s),u=t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),v=t.n(u),p=t("./node_modules/@babel/runtime/helpers/createClass.js"),g=t.n(p),m=t("./node_modules/@babel/runtime/helpers/inherits.js"),h=t.n(m),w=t("./node_modules/react/index.js"),f=t.n(w),b=t("./node_modules/lodash/lodash.js"),x=t.n(b),y=a.a.getService("api"),k=a.a.getService("document"),C=a.a.getStorage("assets"),S=["all","defaultSize","xs","sm","md","lg","xl"],z=function(e){function n(e){var t;return r()(this,n),(t=d()(this,v()(n).call(this,e))).state={layout:{}},t}return h()(n,e),g()(n,null,[{key:"getRowData",value:function(e){for(var n=[],t=0,o=0,a=[],c=!0,l=e.slice();l.lastIndexOf("hide")===l.length-1&&l.length;)c=!1,l.splice(l.lastIndexOf("hide"),1);l.forEach(function(e,i){var r=0;if("hide"===e)c=!1;else if("auto"===e||""===e)r=.01,a.push("auto"),o++;else{if(e.indexOf("%")>-1)r=parseFloat(e.replace("%","").replace(",","."))/100;else{var s=e.split("/");r=s[0]/s[1]}a.push(r)}var d=Math.floor(1e3*(t+r))/1e3;(d>1||1===d&&"hide"===e)&&(c=!1,n.push(i-1),t=0),void 0===l[i+1]&&n.push(i),t+=r});var i=0,r=(1-(t-.01*o))/o;return a.forEach(function(e,n){"auto"===e?(a[n]=r,i+=r):i+=e}),a.forEach(function(e){a[0]!==e&&1!==e&&(c=!1)}),{lastColumnIndex:n,isColumnsEqual:c,rowValue:i}}},{key:"resetRowLayout",value:function(e){var n=k.get(e);n.layout.layoutData=null,k.update(e,n)}},{key:"getDefaultLayout",value:function(e,n){var t=[];n&&n.hasOwnProperty("all")?t=n.all.slice():k.children(e).forEach(function(e){e.size.hasOwnProperty("defaultSize")&&t.push(e.size.defaultSize)});return t}},{key:"setColumns",value:function(e,t,o){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=k.children(e),l=[],i=[],r={tag:"column",parent:e,designOptionsAdvanced:{},customClass:"",customHeaderTitle:"",metaCustomId:"",dividers:{},sticky:{},lastInRow:{},firstInRow:{},size:{}},s=null;Object.keys(t).forEach(function(e){var d=t[e],u=o&&o[e];if(u&&u.length)if(d.length>u.length){var v=n.getRowData(u);if(Math.round(100*v.rowValue)/100<1){var p=1-v.rowValue;(d=u).push("".concat(100*p,"%"))}else if(v.isColumnsEqual){var g=d.length,m="".concat(Math.floor(100/g*100)/100,"%");d=[];for(var h=0;h<g;h++)d.push(m)}}else if(d.length<u.length){var w=n.getRowData(u);if(Math.round(100*w.rowValue)/100==1&&w.isColumnsEqual){var f=d.length,b="".concat(Math.floor(100/f*100)/100,"%");d=[];for(var y=0;y<f;y++)d.push(b)}}var k=n.getRowData(d).lastColumnIndex,C=0;d.forEach(function(n,t){var o=k.indexOf(t)>-1,d=0===t||k.indexOf(t-1)>-1;if(void 0!==c[t]){(s=c[t]).size[e]=n,"defaultSize"!==e&&(s.lastInRow[e]=o,s.firstInRow[e]=d),s.disableStacking=a;var u=!1;l.forEach(function(e,n){s.id===e.id&&(l[n]=s,u=!0)}),u||l.push(s)}else{if(i[C]){var v=i[C];v.size[e]=n,"defaultSize"!==e&&(v.lastInRow[e]=o,v.firstInRow[e]=d),v.disableStacking=a}else{var p=x.a.defaultsDeep({},r);p.size[e]=n,"defaultSize"!==e&&(p.lastInRow[e]=o,p.firstInRow[e]=d),p.disableStacking=a,i.push(p)}C+=1}})}),l.forEach(function(e){t.hasOwnProperty("all")?(delete e.size.xs,delete e.size.sm,delete e.size.md,delete e.size.lg,delete e.size.xl):delete e.size.all,k.update(e.id,e)}),i.forEach(function(e){k.create(e)});var d=t.all||t.xs;if(d&&c.length>d.length){var u=c.slice(d.length);u.forEach(function(e){k.children(e.id).forEach(function(e){e.parent=s.id,k.update(e.id,e)}),k.delete(e.id)})}}},{key:"getLayout",value:function(e){var n={},t=k.children(e),o=!1;return t.forEach(function(e){e.size.hasOwnProperty("xs")&&(o=!0)}),t.forEach(function(e){!o&&e.size.all&&(n.hasOwnProperty("all")||(n.all=[]),n.all.push(e.size.all)),e.size.defaultSize&&(n.hasOwnProperty("defaultSize")||(n.defaultSize=[]),n.defaultSize.push(e.size.defaultSize))}),n.hasOwnProperty("all")||S.forEach(function(e){"defaultSize"!==e&&"all"!==e&&t.forEach(function(t){t.size[e]&&(n.hasOwnProperty(e)||(n[e]=[]),n[e].push(t.size[e])),o&&t.size.hasOwnProperty("all")&&(n.hasOwnProperty(e)||(n[e]=[]),"xs"===e||"sm"===e?n[e].push("100%"):n[e].push(t.size.all))})}),n}},{key:"getDerivedStateFromProps",value:function(e,t){if(!a.a.env("VCV_JS_FT_ROW_COLUMN_LOGIC_REFACTOR"))return null;var o=e.atts,c=e.id,l=o.layout&&o.layout.layoutData?o.layout.layoutData:n.getLayout(c),i=o.layout&&o.layout.layoutData;if(JSON.stringify(l)!==JSON.stringify(t.layout)){if(i)return n.setColumns(c,i,null,o.layout.disableStacking),n.resetRowLayout(c),setTimeout(function(){C.trigger("updateElement",c)},10),{layout:i};var r=n.getLayout(c);return n.setColumns(c,r,t.layout,o.layout.disableStacking),setTimeout(function(){C.trigger("updateElement",c)},10),{layout:r}}return null}}]),g()(n,[{key:"render",value:function(){var e=t("./node_modules/classnames/index.js"),n=this.props,o=n.id,a=n.atts,c=n.editor,i=n.isBackend,r=a.customClass,s=a.rowWidth,d=a.removeSpaces,u=a.columnGap,v=a.fullHeight,p=a.metaCustomId,g=a.equalHeight,m=a.columnPosition,h=a.contentPosition,w=a.designOptionsAdvanced,b=a.layout,x=a.columnBackground,y=a.hidden,k=a.sticky,C=a.boxShadow,S=this.props.children,z=window.VCV_EDITOR_TYPE?window.VCV_EDITOR_TYPE():"default",R=e({"vce-row-container":!0,"vce-wpbackend-element-hidden":y&&i}),E=["vce-row"];if(x)if(x.all)E.push("vce-row--has-col-background");else for(var O in x)x[O]&&E.push("vce-row--".concat(O,"--has-col-background"));E.push(this.getBackgroundClass(w)),E.push("vce-row--col-gap-".concat(u?parseInt(u):0)),b&&b.reverseColumn&&!b.disableStacking&&E.push("vce-row-wrap--reverse");var _={style:{}},I={style:{}},j={};"string"==typeof r&&r&&E.push(r),"stretchedRow"===s||"stretchedRowAndColumn"===s?I["data-vce-full-width"]=!0:(I.style.width="",I.style.left="",I.style.right="",_.style.paddingLeft="",_.style.paddingRight=""),"stretchedRowAndColumn"!==s&&"sidebar"!==z||(I["data-vce-stretch-content"]=!0);var D={};k&&k.device&&(D=this.getStickyAttributes(k)),"sidebar"!==z&&"stretchedRowAndColumn"!==s||!d||E.push("vce-row-no-paddings"),v?E.push("vce-row-full-height"):I.style.minHeight="",g&&"stretch"!==m&&E.push("vce-row-equal-height"),m&&E.push("vce-row-columns--".concat(m)),h&&E.push("vce-row-content--".concat(h));var P={};C&&C.device&&(P=this.getBoxShadowAttributes(C,o));var A=e(E);p&&(j.id=p),j["data-vce-delete-attr"]="style",I["data-vce-delete-attr"]="style",_["data-vce-element-content"]=!0;var T=this.applyDO("all");return f.a.createElement("div",l()({className:R},j),f.a.createElement("div",l()({className:A},I,D,P,c,{id:"el-"+o},T),this.getBackgroundTypeContent(),this.getContainerDivider(),f.a.createElement("div",l()({className:"vce-row-content"},_),S)))}}]),n}(y.elementComponent);(0,a.a.getService("cook").add)(t("./row/settings.json"),function(e){e.add(z)},{css:t("./node_modules/raw-loader/index.js!./row/styles.css"),editorCss:!1,mixins:{columnGap:{mixin:t("./node_modules/raw-loader/index.js!./row/cssMixins/columnGap.pcss")}}},"")},"./row/settings.json":function(e){e.exports={customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},layout:{type:"rowLayout",access:"public",value:{},options:{label:"Row Layout"}},dividers:{type:"divider",access:"public",value:{},options:{label:"Dividers"}},sticky:{type:"sticky",access:"public",value:{},options:{label:"Sticky"}},boxShadow:{type:"boxShadow",access:"public",value:{},options:{label:"Box Shadow"}},designOptionsAdvanced:{type:"designOptionsAdvanced",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["rowWidth","removeSpaces","columnGap","fullHeight","columnPosition","equalHeight","contentPosition","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","layout","designOptionsAdvanced","boxShadow","dividers","sticky"]},relatedTo:{type:"group",access:"protected",value:["General","RootElements","Row"]},containerFor:{type:"group",access:"protected",value:["Column"]},parentWrapper:{type:"string",access:"protected",value:""},metaOrder:{type:"number",access:"protected",value:2},rowWidth:{type:"buttonGroup",access:"public",value:"boxed",options:{label:"Row width",values:[{label:"Boxed",value:"boxed",icon:"vcv-ui-icon-attribute-row-width-boxed"},{label:"Stretched Row",value:"stretchedRow",icon:"vcv-ui-icon-attribute-row-width-stretched"},{label:"Stretched Row and Column",value:"stretchedRowAndColumn",icon:"vcv-ui-icon-attribute-row-width-stretched-content"}],containerDependency:{sidebar:"hide"}}},removeSpaces:{type:"toggle",access:"public",value:!1,options:{label:"Remove spaces",description:"Remove row spaces from left and right.",onChange:{rules:{rowWidth:{rule:"value",options:{value:"stretchedRowAndColumn"}}},actions:[{action:"toggleVisibility"}]},containerDependency:{sidebar:"removeDependencies"}}},columnGap:{type:"number",access:"public",value:"30",options:{label:"Column gap",description:"Enter gap between columns in pixels (Example: 5).",min:"0",cssMixin:{mixin:"columnGap",property:"gap",namePattern:"[\\da-f]+"}}},fullHeight:{type:"toggle",access:"public",value:!1,options:{label:"Full height",description:"Set row to be full screen height."}},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only)."}},equalHeight:{type:"toggle",access:"public",value:!1,options:{label:"Column equal height"}},columnPosition:{type:"buttonGroup",access:"public",value:"top",options:{label:"Column position",values:[{label:"Top",value:"top",icon:"vcv-ui-icon-attribute-vertical-alignment-top"},{label:"Middle",value:"middle",icon:"vcv-ui-icon-attribute-vertical-alignment-middle"},{label:"Bottom",value:"bottom",icon:"vcv-ui-icon-attribute-vertical-alignment-bottom"},{label:"Full Height",value:"stretch",icon:"vcv-ui-icon-attribute-vertical-alignment-full-height"}],onChange:{rules:{fullHeight:{rule:"toggle"}},actions:[{action:"toggleVisibility"}]}}},contentPosition:{type:"buttonGroup",access:"public",value:"top",options:{label:"Content position",values:[{label:"Top",value:"top",icon:"vcv-ui-icon-attribute-vertical-alignment-top"},{label:"Middle",value:"middle",icon:"vcv-ui-icon-attribute-vertical-alignment-middle"},{label:"Bottom",value:"bottom",icon:"vcv-ui-icon-attribute-vertical-alignment-bottom"}]}},size:{type:"string",access:"public",value:"auto"},hidden:{type:"string",access:"public",value:!1},columnBackground:{type:"string",access:"public",value:""},tag:{access:"protected",type:"string",value:"row"},sharedAssetsLibrary:{access:"protected",type:"string",value:{libraries:[{rules:{rowWidth:{rule:"!value",options:{value:"boxed"}}},libsNames:["fullWidth"]},{rules:{fullHeight:{rule:"toggle"}},libsNames:["fullHeight"]}]}},initChildren:{access:"protected",type:"object",value:[{tag:"column"}]}}}},[["./row/index.js"]]]);