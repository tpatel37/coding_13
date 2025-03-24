"use strict";(self.webpackChunkmy_component_library=self.webpackChunkmy_component_library||[]).push([[407],{"./src/components/HeroImage/HeroImage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoText:()=>NoText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>HeroImage_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const HeroContainer=styled_components_browser_esm.Ay.div`
  position: relative;
  width: 100%;
  height: ${props=>props.$height||"300px"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`,StyledImage=styled_components_browser_esm.Ay.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`,OverlayText=styled_components_browser_esm.Ay.div`
  position: relative;
  z-index: 1;
`,HeroImage_HeroImage=_ref=>{let{src,alt,height,overlayText}=_ref;return(0,jsx_runtime.jsxs)(HeroContainer,{$height:height,role:"img","aria-label":alt,children:[(0,jsx_runtime.jsx)(StyledImage,{src,alt}),overlayText&&(0,jsx_runtime.jsx)(OverlayText,{children:overlayText})]})},HeroImage_stories={title:"Components/HeroImage",component:HeroImage_HeroImage,tags:["autodocs"]},Default={render:args=>(0,jsx_runtime.jsx)(HeroImage_HeroImage,{...args}),args:{src:"https://via.placeholder.com/1200x400",alt:"Hero Image",height:"400px",overlayText:"Welcome to Our Website"}},NoText={render:args=>(0,jsx_runtime.jsx)(HeroImage_HeroImage,{...args}),args:{src:"https://via.placeholder.com/1200x400",alt:"Hero Image Without Text",height:"400px",overlayText:""}},__namedExportsOrder=["Default","NoText"]}}]);
//# sourceMappingURL=components-HeroImage-HeroImage-stories.f9f3f03f.iframe.bundle.js.map