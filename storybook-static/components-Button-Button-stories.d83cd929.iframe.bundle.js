"use strict";(self.webpackChunkmy_component_library=self.webpackChunkmy_component_library||[]).push([[721],{"./src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledButton=styled_components_browser_esm.Ay.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: ${_ref=>{let{disabled}=_ref;return disabled?"not-allowed":"pointer"}};
  background: ${_ref2=>{let{disabled}=_ref2;return disabled?"#ccc":"#007BFF"}};
  color: white;
  border-radius: 5px;
`,Button_stories={title:"Components/Button",component:_ref3=>{let{label,disabled=!1,onClick}=_ref3;return(0,jsx_runtime.jsx)(StyledButton,{disabled,onClick,children:label})},argTypes:{label:{control:"text"},disabled:{control:"boolean"}}},Default={args:{label:"Click Me"}},Disabled={args:{label:"Disabled",disabled:!0}},__namedExportsOrder=["Default","Disabled"]}}]);
//# sourceMappingURL=components-Button-Button-stories.d83cd929.iframe.bundle.js.map