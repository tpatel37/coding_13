"use strict";(self.webpackChunkmy_component_library=self.webpackChunkmy_component_library||[]).push([[513],{"./src/components/Card/Card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Clickable:()=>Clickable,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Card_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledCard=styled_components_browser_esm.Ay.div`
  width: ${props=>props.width||"300px"};
  height: ${props=>props.height||"auto"};
  min-height: 150px; // Prevent collapse if no image
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: #fff;
  text-align: center;
  cursor: ${props=>props.onClick?"pointer":"default"};
`,CardImage=styled_components_browser_esm.Ay.img`
  width: 100%;
  height: 180px; // Set a default height
  object-fit: cover; // Maintain aspect ratio
`,CardContent=styled_components_browser_esm.Ay.div`
  padding: 16px;
`,CardTitle=styled_components_browser_esm.Ay.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`,CardDescription=styled_components_browser_esm.Ay.p`
  font-size: 1rem;
  color: #666;
`,Card_Card=_ref=>{let{title,description,imageSrc,width,height,onClick}=_ref;return(0,jsx_runtime.jsxs)(StyledCard,{width,height,onClick,children:[imageSrc&&(0,jsx_runtime.jsx)(CardImage,{src:imageSrc,alt:title}),(0,jsx_runtime.jsxs)(CardContent,{children:[(0,jsx_runtime.jsx)(CardTitle,{children:title}),(0,jsx_runtime.jsx)(CardDescription,{children:description})]})]})},Card_stories={title:"Components/Card",component:Card_Card,tags:["autodocs"]},Default={render:args=>(0,jsx_runtime.jsx)(Card_Card,{...args}),args:{title:"Sample Card",description:"This is a sample card component.",imageSrc:"https://via.placeholder.com/300",width:"300px"}},Clickable={render:args=>(0,jsx_runtime.jsx)(Card_Card,{...args}),args:{title:"Clickable Card",description:"Clicking this card triggers an alert!",imageSrc:"https://via.placeholder.com/300",width:"300px",onClick:()=>alert("Card Clicked!")}},__namedExportsOrder=["Default","Clickable"]}}]);
//# sourceMappingURL=components-Card-Card-stories.12c139e0.iframe.bundle.js.map