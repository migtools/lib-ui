(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Checkboxes",(function(){return Checkboxes})),__webpack_require__.d(__webpack_exports__,"ExpandableTable",(function(){return ExpandableTable})),__webpack_require__.d(__webpack_exports__,"ExternalState",(function(){return ExternalState}));__webpack_require__(3),__webpack_require__(10),__webpack_require__(52),__webpack_require__(63),__webpack_require__(16),__webpack_require__(5);var _home_runner_work_lib_ui_lib_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(279),_home_runner_work_lib_ui_lib_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(276),react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(280),_patternfly_react_table__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(207),_patternfly_react_table__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(1993),_patternfly_react_table__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(1992),_useSelectionState__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(150),Checkboxes=function Checkboxes(){var fruits=[{name:"Apple"},{name:"Orange"},{name:"Banana"}],_useSelectionState=Object(_useSelectionState__WEBPACK_IMPORTED_MODULE_13__.a)({items:fruits,isEqual:function isEqual(a,b){return a.name===b.name}}),selectedItems=_useSelectionState.selectedItems,isItemSelected=_useSelectionState.isItemSelected,toggleItemSelected=_useSelectionState.toggleItemSelected,areAllSelected=_useSelectionState.areAllSelected,selectAll=_useSelectionState.selectAll;return react__WEBPACK_IMPORTED_MODULE_8__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_8__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__.a,{id:"select-all",label:"Select all",isChecked:areAllSelected,onChange:function onChange(checked){return selectAll(checked)}}),react__WEBPACK_IMPORTED_MODULE_8__.createElement("br",null),fruits.map((function(fruit){return react__WEBPACK_IMPORTED_MODULE_8__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__.a,{key:fruit.name,id:"".concat(fruit.name,"-checkbox"),label:fruit.name,isChecked:isItemSelected(fruit),onChange:function onChange(){return toggleItemSelected(fruit)}})})),selectedItems.length>0?react__WEBPACK_IMPORTED_MODULE_8__.createElement(react__WEBPACK_IMPORTED_MODULE_8__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_8__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_8__.createElement("p",null,"Do something with these! ",selectedItems.map((function(fruit){return fruit.name})).join(", "))):null)},ExpandableTable=function ExpandableTable(){var fruits=[{name:"Apple",price:"$0.83",description:"Red delicious!"},{name:"Orange",price:"$0.74",description:"Fresh and juicy!"},{name:"Banana",price:"$0.45",description:"On sale this week!"}],_useSelectionState2=Object(_useSelectionState__WEBPACK_IMPORTED_MODULE_13__.a)({items:fruits,isEqual:function isEqual(a,b){return a.name===b.name}}),isItemExpanded=_useSelectionState2.isItemSelected,toggleItemExpanded=_useSelectionState2.toggleItemSelected,rows=[];return fruits.forEach((function(fruit){var isExpanded=isItemExpanded(fruit);rows.push({meta:{fruit:fruit},isOpen:isExpanded,cells:[fruit.name,fruit.price]}),isExpanded&&rows.push({parent:rows.length-1,fullWidth:!0,cells:[fruit.description]})})),react__WEBPACK_IMPORTED_MODULE_8__.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_10__.a,{variant:"compact","aria-label":"Fruits table",onCollapse:function onCollapse(_event,_rowIndex,_isOpen,rowData){return toggleItemExpanded(rowData.meta.fruit)},cells:[{title:"Name"},{title:"Price"}],rows:rows},react__WEBPACK_IMPORTED_MODULE_8__.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_11__.a,null),react__WEBPACK_IMPORTED_MODULE_8__.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_12__.a,null))},ExternalState=function ExternalState(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_8__.useState([]),_React$useState2=Object(_home_runner_work_lib_ui_lib_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__.a)(_React$useState,2),selectedFruits=_React$useState2[0],setSelectedFruits=_React$useState2[1],fruits=[{name:"Apple"},{name:"Orange"},{name:"Banana"}],_useSelectionState3=Object(_useSelectionState__WEBPACK_IMPORTED_MODULE_13__.a)({items:fruits,isEqual:function isEqual(a,b){return a.name===b.name},externalState:[selectedFruits,setSelectedFruits]}),selectedItems=_useSelectionState3.selectedItems,isItemSelected=_useSelectionState3.isItemSelected,toggleItemSelected=_useSelectionState3.toggleItemSelected,areAllSelected=_useSelectionState3.areAllSelected,selectAll=_useSelectionState3.selectAll;return react__WEBPACK_IMPORTED_MODULE_8__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_8__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__.a,{id:"select-all",label:"Select all",isChecked:areAllSelected,onChange:function onChange(checked){return selectAll(checked)}}),react__WEBPACK_IMPORTED_MODULE_8__.createElement("br",null),fruits.map((function(fruit){return react__WEBPACK_IMPORTED_MODULE_8__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__.a,{key:fruit.name,id:"".concat(fruit.name,"-checkbox"),label:fruit.name,isChecked:isItemSelected(fruit),onChange:function onChange(){return toggleItemSelected(fruit)}})})),selectedItems.length>0?react__WEBPACK_IMPORTED_MODULE_8__.createElement(react__WEBPACK_IMPORTED_MODULE_8__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_8__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_8__.createElement("p",null,"Do something with these! ",selectedItems.map((function(fruit){return fruit.name})).join(", "))):null)};Checkboxes.parameters=Object(_home_runner_work_lib_ui_lib_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__.a)({storySource:{source:"() => {\n  interface IFruit {\n    name: string;\n  }\n\n  const fruits: IFruit[] = [{ name: 'Apple' }, { name: 'Orange' }, { name: 'Banana' }];\n\n  const {\n    selectedItems,\n    isItemSelected,\n    toggleItemSelected,\n    areAllSelected,\n    selectAll,\n  } = useSelectionState<IFruit>({\n    items: fruits,\n    isEqual: (a, b) => a.name === b.name,\n  });\n\n  return (\n    <div>\n      <Checkbox\n        id=\"select-all\"\n        label=\"Select all\"\n        isChecked={areAllSelected}\n        onChange={(checked) => selectAll(checked)}\n      />\n      <br />\n      {fruits.map((fruit) => (\n        <Checkbox\n          key={fruit.name}\n          id={`${fruit.name}-checkbox`}\n          label={fruit.name}\n          isChecked={isItemSelected(fruit)}\n          onChange={() => toggleItemSelected(fruit)}\n        />\n      ))}\n      {selectedItems.length > 0 ? (\n        <>\n          <br />\n          <p>Do something with these! {selectedItems.map((fruit) => fruit.name).join(', ')}</p>\n        </>\n      ) : null}\n    </div>\n  );\n}"}},Checkboxes.parameters),ExpandableTable.parameters=Object(_home_runner_work_lib_ui_lib_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__.a)({storySource:{source:"() => {\n  interface IFruit {\n    name: string;\n    price: string;\n    description: string;\n  }\n\n  const fruits: IFruit[] = [\n    { name: 'Apple', price: '$0.83', description: 'Red delicious!' },\n    { name: 'Orange', price: '$0.74', description: 'Fresh and juicy!' },\n    { name: 'Banana', price: '$0.45', description: 'On sale this week!' },\n  ];\n\n  const {\n    isItemSelected: isItemExpanded,\n    toggleItemSelected: toggleItemExpanded,\n  } = useSelectionState<IFruit>({\n    items: fruits,\n    isEqual: (a, b) => a.name === b.name,\n  });\n\n  const columns: ICell[] = [{ title: 'Name' }, { title: 'Price' }];\n  const rows: IRow[] = [];\n  fruits.forEach((fruit) => {\n    const isExpanded = isItemExpanded(fruit);\n    rows.push({\n      meta: { fruit },\n      isOpen: isExpanded,\n      cells: [fruit.name, fruit.price],\n    });\n    if (isExpanded) {\n      rows.push({\n        parent: rows.length - 1,\n        fullWidth: true,\n        cells: [fruit.description],\n      });\n    }\n  });\n\n  return (\n    <Table\n      variant=\"compact\"\n      aria-label=\"Fruits table\"\n      onCollapse={(_event, _rowIndex, _isOpen, rowData) => toggleItemExpanded(rowData.meta.fruit)}\n      cells={columns}\n      rows={rows}\n    >\n      <TableHeader />\n      <TableBody />\n    </Table>\n  );\n}"}},ExpandableTable.parameters),ExternalState.parameters=Object(_home_runner_work_lib_ui_lib_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__.a)({storySource:{source:"() => {\n  interface IFruit {\n    name: string;\n  }\n\n  const [selectedFruits, setSelectedFruits] = React.useState<IFruit[]>([]);\n\n  const fruits: IFruit[] = [{ name: 'Apple' }, { name: 'Orange' }, { name: 'Banana' }];\n\n  const {\n    selectedItems,\n    isItemSelected,\n    toggleItemSelected,\n    areAllSelected,\n    selectAll,\n  } = useSelectionState<IFruit>({\n    items: fruits,\n    isEqual: (a, b) => a.name === b.name,\n    externalState: [selectedFruits, setSelectedFruits],\n  });\n\n  return (\n    <div>\n      <Checkbox\n        id=\"select-all\"\n        label=\"Select all\"\n        isChecked={areAllSelected}\n        onChange={(checked) => selectAll(checked)}\n      />\n      <br />\n      {fruits.map((fruit) => (\n        <Checkbox\n          key={fruit.name}\n          id={`${fruit.name}-checkbox`}\n          label={fruit.name}\n          isChecked={isItemSelected(fruit)}\n          onChange={() => toggleItemSelected(fruit)}\n        />\n      ))}\n      {selectedItems.length > 0 ? (\n        <>\n          <br />\n          <p>Do something with these! {selectedItems.map((fruit) => fruit.name).join(', ')}</p>\n        </>\n      ) : null}\n    </div>\n  );\n}"}},ExternalState.parameters);try{Checkboxes.displayName="Checkboxes",Checkboxes.__docgenInfo={description:"",displayName:"Checkboxes",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/useSelectionState/useSelectionState.stories.tsx#Checkboxes"]={docgenInfo:Checkboxes.__docgenInfo,name:"Checkboxes",path:"src/hooks/useSelectionState/useSelectionState.stories.tsx#Checkboxes"})}catch(__react_docgen_typescript_loader_error){}try{ExpandableTable.displayName="ExpandableTable",ExpandableTable.__docgenInfo={description:"",displayName:"ExpandableTable",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/useSelectionState/useSelectionState.stories.tsx#ExpandableTable"]={docgenInfo:ExpandableTable.__docgenInfo,name:"ExpandableTable",path:"src/hooks/useSelectionState/useSelectionState.stories.tsx#ExpandableTable"})}catch(__react_docgen_typescript_loader_error){}try{ExternalState.displayName="ExternalState",ExternalState.__docgenInfo={description:"",displayName:"ExternalState",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/useSelectionState/useSelectionState.stories.tsx#ExternalState"]={docgenInfo:ExternalState.__docgenInfo,name:"ExternalState",path:"src/hooks/useSelectionState/useSelectionState.stories.tsx#ExternalState"})}catch(__react_docgen_typescript_loader_error){}},150:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useSelectionState}));__webpack_require__(23),__webpack_require__(49),__webpack_require__(624);var _home_runner_work_lib_ui_lib_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(673),_home_runner_work_lib_ui_lib_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(276),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),useSelectionState=function useSelectionState(_ref){var items=_ref.items,_ref$initialSelected=_ref.initialSelected,initialSelected=void 0===_ref$initialSelected?[]:_ref$initialSelected,_ref$isEqual=_ref.isEqual,isEqual=void 0===_ref$isEqual?function(a,b){return a===b}:_ref$isEqual,externalState=_ref.externalState,internalState=react__WEBPACK_IMPORTED_MODULE_5__.useState(initialSelected),_ref2=externalState||internalState,_ref3=Object(_home_runner_work_lib_ui_lib_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.a)(_ref2,2),selectedItems=_ref3[0],setSelectedItems=_ref3[1],isItemSelected=function isItemSelected(item){return selectedItems.some((function(i){return isEqual(item,i)}))},areAllSelected=selectedItems.length===items.length,selectedItemsInOrder=[];return areAllSelected?selectedItemsInOrder=items:selectedItems.length>0&&(selectedItemsInOrder=items.filter(isItemSelected)),{selectedItems:selectedItemsInOrder,isItemSelected:isItemSelected,toggleItemSelected:function toggleItemSelected(item){var isSelecting=arguments.length>1&&void 0!==arguments[1]?arguments[1]:!isItemSelected(item);setSelectedItems(isSelecting?[].concat(Object(_home_runner_work_lib_ui_lib_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.a)(selectedItems),[item]):selectedItems.filter((function(i){return!isEqual(i,item)})))},areAllSelected:areAllSelected,selectAll:function selectAll(){var isSelecting=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return setSelectedItems(isSelecting?items:[])},setSelectedItems:setSelectedItems}}},1810:function(module,exports,__webpack_require__){"use strict";__webpack_require__(3),__webpack_require__(49),__webpack_require__(52),__webpack_require__(56),__webpack_require__(47),__webpack_require__(1811),__webpack_require__(1812),__webpack_require__(8),__webpack_require__(57);var _clientApi=__webpack_require__(120),_clientLogger=__webpack_require__(58),_configFilename=__webpack_require__(1813);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1813:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(1814)},1912:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(474).configure)([__webpack_require__(1913)],module,!1)}).call(this,__webpack_require__(76)(module))},1913:function(module,exports,__webpack_require__){var map={"./components/StatusIcon/StatusIcon.stories.mdx":1989,"./hooks/useSelectionState/useSelectionState.stories.mdx":1916,"./hooks/useSelectionState/useSelectionState.stories.tsx":130};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1913},1916:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_Checkboxes_",(function(){return _Checkboxes_})),__webpack_require__.d(__webpack_exports__,"_ExpandableTable_",(function(){return _ExpandableTable_})),__webpack_require__.d(__webpack_exports__,"_ExternalState_",(function(){return _ExternalState_}));__webpack_require__(3),__webpack_require__(13),__webpack_require__(4),__webpack_require__(8),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(42),_useSelectionState__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(150),_useSelectionState_stories_tsx__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(130),_storybook_helpers_GithubLink__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(272);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.Meta,{title:"Hooks/useSelectionState",component:_useSelectionState__WEBPACK_IMPORTED_MODULE_7__.a,mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("h1",{id:"useselectionstate"},"useSelectionState"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("p",null,"A custom hook for managing a subset of an array which represents the user's current selection of items in that array.\nCan be used for a set of selected checkboxes, a set of expanded rows in an expandable table, and more."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("p",null,"Supports passing a TypeScript type for the array items using ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",_extends({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/generics.html",target:"_blank",rel:"nofollow noopener noreferrer"}),"generics"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("code",_extends({parentName:"pre"},{className:"language-ts"}),"// Syntax:\nconst selectionState = useSelectionState<T>(args: ISelectionStateArgs<T>);\n\n// Arguments:\ninterface ISelectionStateArgs<T> {\n  items: T[];\n  initialSelected?: T[]; // Defaults to []\n  isEqual?: (a: T, b: T) => boolean; // Defaults to (a, b) => a === b\n  externalState?: [T[], React.Dispatch<React.SetStateAction<T[]>>];\n}\n\n// Return value:\ninterface ISelectionState<T> {\n  selectedItems: T[];\n  isItemSelected: (item: T) => boolean;\n  toggleItemSelected: (item: T, isSelecting?: boolean) => void;\n  areAllSelected: boolean;\n  selectAll: (isSelecting?: boolean) => void;\n  setSelectedItems: (items: T[]) => void;\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("p",null,"The hook keeps references to your actual item objects instead of an id or key in its state, so that the\nresulting ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"p"},"selectedItems")," array contains all relevant context for use in e.g. form submission.\nIt returns state and functions you can use to inspect and update the selections."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("h2",{id:"rendering-the-selected-state"},"Rendering the selected state"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("p",null,"In your component, you can use ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"p"},"isItemSelected(item)")," when rendering the selected state of an item.\n",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"p"},"isItemSelected")," uses the hook's ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"p"},"isEqual")," argument to compare the given item with the selected items.\nBy default, this uses referential equality (",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"p"},"==="),"), which works great if you're working with immutable data."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("p",null,"However, ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",{parentName:"p"},"if your item objects can change between renders, you need to specify an alternate implementation of the ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"strong"},"isEqual")," argument."),"\nFor example, if your items have ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"p"},"id")," properties, you can use ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"p"},"isEqual: (a, b) => a.id === b.id"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("h2",{id:"lifting-state-to-an-external-scope"},"Lifting state to an external scope"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("p",null,"If necessary, you can pass the optional ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"p"},"externalState")," prop in order to manage the actual selections array itself from outside the hook.\nThis may be useful if you need to manage the state as part of a centralized form, but you still want the logic from these methods.\nThe type of ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"p"},"externalState")," is the same as the array returned from ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"p"},"React.useState")," (a tuple of ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"p"},"value")," and ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"p"},"setValue"),".)"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("h2",{id:"examples"},"Examples"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("h3",{id:"checkboxes"},"Checkboxes"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.Canvas,{mdxType:"Canvas"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.Story,{story:_useSelectionState_stories_tsx__WEBPACK_IMPORTED_MODULE_8__.Checkboxes,name:"_Checkboxes_",mdxType:"Story"})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("h3",{id:"expandable-table"},"Expandable table"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.Canvas,{mdxType:"Canvas"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.Story,{story:_useSelectionState_stories_tsx__WEBPACK_IMPORTED_MODULE_8__.ExpandableTable,name:"_ExpandableTable_",mdxType:"Story"})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("h3",{id:"checkboxes-with-external-state"},"Checkboxes with external state"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.Canvas,{mdxType:"Canvas"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.Story,{story:_useSelectionState_stories_tsx__WEBPACK_IMPORTED_MODULE_8__.ExternalState,name:"_ExternalState_",mdxType:"Story"})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_helpers_GithubLink__WEBPACK_IMPORTED_MODULE_9__.a,{path:"src/hooks/useSelectionState/useSelectionState.ts",mdxType:"GithubLink"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var _Checkboxes_=_useSelectionState_stories_tsx__WEBPACK_IMPORTED_MODULE_8__.Checkboxes,_ExpandableTable_=_useSelectionState_stories_tsx__WEBPACK_IMPORTED_MODULE_8__.ExpandableTable,_ExternalState_=_useSelectionState_stories_tsx__WEBPACK_IMPORTED_MODULE_8__.ExternalState,componentMeta={title:"Hooks/useSelectionState",component:_useSelectionState__WEBPACK_IMPORTED_MODULE_7__.a,includeStories:["_Checkboxes_","_ExpandableTable_","_ExternalState_"]},mdxStoryNameToKey={_Checkboxes_:"_Checkboxes_",_ExpandableTable_:"_ExpandableTable_",_ExternalState_:"_ExternalState_"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},1989:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"basic",(function(){return StatusIcon_stories_basic})),__webpack_require__.d(__webpack_exports__,"disabled",(function(){return StatusIcon_stories_disabled})),__webpack_require__.d(__webpack_exports__,"withLabel",(function(){return StatusIcon_stories_withLabel}));__webpack_require__(3),__webpack_require__(13),__webpack_require__(4),__webpack_require__(8);var StatusType,react=__webpack_require__(0),react_default=__webpack_require__.n(react),esm=__webpack_require__(2),blocks=__webpack_require__(42),Flex=__webpack_require__(2005),FlexItem=__webpack_require__(2006),check_circle_icon=__webpack_require__(1998),warning_triangle_icon=__webpack_require__(2001),exclamation_circle_icon=__webpack_require__(2003),global_disabled_color_200=__webpack_require__(1999),global_success_color_100=__webpack_require__(2e3),global_warning_color_100=__webpack_require__(2002),global_danger_color_100=__webpack_require__(2004);!function(StatusType){StatusType.Ok="Ok",StatusType.Warning="Warning",StatusType.Error="Error"}(StatusType||(StatusType={}));var StatusIcon_StatusIcon=function StatusIcon(_ref){var status=_ref.status,label=_ref.label,_ref$isDisabled=_ref.isDisabled,isDisabled=void 0!==_ref$isDisabled&&_ref$isDisabled,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,icon=null;return status===StatusType.Ok&&(icon=react.createElement(check_circle_icon.a,{className:className,color:isDisabled?global_disabled_color_200.a.value:global_success_color_100.a.value})),status===StatusType.Warning&&(icon=react.createElement(warning_triangle_icon.a,{className:className,color:isDisabled?global_disabled_color_200.a.value:global_warning_color_100.a.value})),status===StatusType.Error&&(icon=react.createElement(exclamation_circle_icon.a,{className:className,color:isDisabled?global_disabled_color_200.a.value:global_danger_color_100.a.value})),label?react.createElement(Flex.a,{spaceItems:{default:"spaceItemsSm"},alignItems:{default:"alignItemsCenter"},flexWrap:{default:"nowrap"},style:{whiteSpace:"nowrap"},className:className},react.createElement(FlexItem.a,null,icon),react.createElement(FlexItem.a,null,label)):icon};try{StatusIcon_StatusIcon.displayName="StatusIcon",StatusIcon_StatusIcon.__docgenInfo={description:"",displayName:"StatusIcon",props:{status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"Ok"'},{value:'"Warning"'},{value:'"Error"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:{value:!1},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/StatusIcon/StatusIcon.tsx#StatusIcon"]={docgenInfo:StatusIcon_StatusIcon.__docgenInfo,name:"StatusIcon",path:"src/components/StatusIcon/StatusIcon.tsx#StatusIcon"})}catch(__react_docgen_typescript_loader_error){}var GithubLink=__webpack_require__(272);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(esm.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.mdx)(blocks.Meta,{title:"Components/StatusIcon",component:StatusIcon_StatusIcon,mdxType:"Meta"}),Object(esm.mdx)("h1",{id:"statusicon"},"StatusIcon"),Object(esm.mdx)("p",null,"A small wrapper for PatternFly's CheckCircleIcon,\nWarningTriangleIcon and ExclamationCircleIcon that automatically sets the right color."),Object(esm.mdx)("h2",{id:"examples"},"Examples"),Object(esm.mdx)("h3",{id:"basic"},"Basic"),Object(esm.mdx)(blocks.Canvas,{mdxType:"Canvas"},Object(esm.mdx)(blocks.Story,{name:"Basic",mdxType:"Story"},Object(esm.mdx)(StatusIcon_StatusIcon,{status:StatusType.Ok,mdxType:"StatusIcon"}),Object(esm.mdx)("br",null),Object(esm.mdx)(StatusIcon_StatusIcon,{status:StatusType.Warning,mdxType:"StatusIcon"}),Object(esm.mdx)("br",null),Object(esm.mdx)(StatusIcon_StatusIcon,{status:StatusType.Error,mdxType:"StatusIcon"}))),Object(esm.mdx)("h3",{id:"disabled"},"Disabled"),Object(esm.mdx)(blocks.Canvas,{mdxType:"Canvas"},Object(esm.mdx)(blocks.Story,{name:"Disabled",mdxType:"Story"},Object(esm.mdx)(StatusIcon_StatusIcon,{status:StatusType.Ok,isDisabled:!0,mdxType:"StatusIcon"}),Object(esm.mdx)("br",null),Object(esm.mdx)(StatusIcon_StatusIcon,{status:StatusType.Warning,isDisabled:!0,mdxType:"StatusIcon"}),Object(esm.mdx)("br",null),Object(esm.mdx)(StatusIcon_StatusIcon,{status:StatusType.Error,isDisabled:!0,mdxType:"StatusIcon"}))),Object(esm.mdx)("h3",{id:"with-label"},"With label"),Object(esm.mdx)(blocks.Canvas,{mdxType:"Canvas"},Object(esm.mdx)(blocks.Story,{name:"With label",mdxType:"Story"},Object(esm.mdx)(StatusIcon_StatusIcon,{status:StatusType.Ok,label:"Ready",mdxType:"StatusIcon"}),Object(esm.mdx)(StatusIcon_StatusIcon,{status:StatusType.Warning,label:"Warning",mdxType:"StatusIcon"}),Object(esm.mdx)(StatusIcon_StatusIcon,{status:StatusType.Error,label:"Error",mdxType:"StatusIcon"}))),Object(esm.mdx)("h2",{id:"props"},"Props"),Object(esm.mdx)(blocks.ArgsTable,{of:StatusIcon_StatusIcon,mdxType:"ArgsTable"}),Object(esm.mdx)(GithubLink.a,{path:"src/components/StatusIcon/StatusIcon.tsx",mdxType:"GithubLink"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var StatusIcon_stories_basic=function basic(){return Object(esm.mdx)(react_default.a.Fragment,null,Object(esm.mdx)(StatusIcon_StatusIcon,{status:StatusType.Ok}),Object(esm.mdx)("br",null),Object(esm.mdx)(StatusIcon_StatusIcon,{status:StatusType.Warning}),Object(esm.mdx)("br",null),Object(esm.mdx)(StatusIcon_StatusIcon,{status:StatusType.Error}))};StatusIcon_stories_basic.storyName="Basic",StatusIcon_stories_basic.parameters={storySource:{source:"<StatusIcon status={StatusType.Ok} />\n<br />\n<StatusIcon status={StatusType.Warning} />\n<br />\n<StatusIcon status={StatusType.Error} />"}};var StatusIcon_stories_disabled=function disabled(){return Object(esm.mdx)(react_default.a.Fragment,null,Object(esm.mdx)(StatusIcon_StatusIcon,{status:StatusType.Ok,isDisabled:!0}),Object(esm.mdx)("br",null),Object(esm.mdx)(StatusIcon_StatusIcon,{status:StatusType.Warning,isDisabled:!0}),Object(esm.mdx)("br",null),Object(esm.mdx)(StatusIcon_StatusIcon,{status:StatusType.Error,isDisabled:!0}))};StatusIcon_stories_disabled.storyName="Disabled",StatusIcon_stories_disabled.parameters={storySource:{source:"<StatusIcon status={StatusType.Ok} isDisabled />\n<br />\n<StatusIcon status={StatusType.Warning} isDisabled />\n<br />\n<StatusIcon status={StatusType.Error} isDisabled />"}};var StatusIcon_stories_withLabel=function withLabel(){return Object(esm.mdx)(react_default.a.Fragment,null,Object(esm.mdx)(StatusIcon_StatusIcon,{status:StatusType.Ok,label:"Ready"}),Object(esm.mdx)(StatusIcon_StatusIcon,{status:StatusType.Warning,label:"Warning"}),Object(esm.mdx)(StatusIcon_StatusIcon,{status:StatusType.Error,label:"Error"}))};StatusIcon_stories_withLabel.storyName="With label",StatusIcon_stories_withLabel.parameters={storySource:{source:'<StatusIcon status={StatusType.Ok} label="Ready" />\n<StatusIcon status={StatusType.Warning} label="Warning" />\n<StatusIcon status={StatusType.Error} label="Error" />'}};var componentMeta={title:"Components/StatusIcon",component:StatusIcon_StatusIcon,includeStories:["basic","disabled","withLabel"]},mdxStoryNameToKey={Basic:"basic",Disabled:"disabled","With label":"withLabel"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.mdx)(blocks.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(esm.mdx)(MDXContent,null))}});__webpack_exports__.default=componentMeta},272:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1991);__webpack_exports__.a=function GithubLink(_ref){var path=_ref.path;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"https://github.com/konveyor/lib-ui/blob/master/".concat(path)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__.a,null)," View Source on GitHub")}},682:function(module,exports,__webpack_require__){__webpack_require__(683),__webpack_require__(829),__webpack_require__(830),__webpack_require__(991),__webpack_require__(1778),__webpack_require__(1810),module.exports=__webpack_require__(1912)},747:function(module,exports){},830:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(474)}},[[682,1,2]]]);
//# sourceMappingURL=main.f8d2d558bef18292efe2.bundle.js.map