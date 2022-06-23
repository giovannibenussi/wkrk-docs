"use strict";(self.webpackChunkwkrk_docs=self.webpackChunkwkrk_docs||[]).push([[580],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return y}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=l(t),y=o,d=f["".concat(s,".").concat(y)]||f[y]||c[y]||a;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7039:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],p={sidebar_position:2},s="TypeScript",l={unversionedId:"learning/typescript",id:"learning/typescript",title:"TypeScript",description:"wkrk offers first-class TypeScript support.",source:"@site/docs/learning/typescript.md",sourceDirName:"learning",slug:"/learning/typescript",permalink:"/wkrk-docs/docs/learning/typescript",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/learning/typescript.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create a Document",permalink:"/wkrk-docs/docs/learning/create-a-document"},next:{title:"Markdown Features",permalink:"/wkrk-docs/docs/learning/markdown-features"}},u={},c=[{value:"Type Safety for Route Files",id:"type-safety-for-route-files",level:2},{value:"Provide Type Definitions for Environment Variables",id:"provide-type-definitions-for-environment-variables",level:2}],f={toc:c};function y(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"typescript"},"TypeScript"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"wkrk")," offers first-class ",(0,a.kt)("inlineCode",{parentName:"p"},"TypeScript")," support."),(0,a.kt)("h2",{id:"type-safety-for-route-files"},"Type Safety for Route Files"),(0,a.kt)("p",null,"If you want type safety for routes, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"WKRKRoute")," type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const route: WKRKRoute = {\n  get({ res }) {\n    return res.json({ name: "Hello World" });\n  }\n};\n')),(0,a.kt)("p",null,"You can also provide a type for the ",(0,a.kt)("inlineCode",{parentName:"p"},"env")," object to ",(0,a.kt)("inlineCode",{parentName:"p"},"WKRKRoute"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"type EnvType = {\n  TEST_VARIABLE: string;\n};\n\nconst route: WKRKRoute<EnvType> = {\n  get({ res, env }) {\n    return res.json({ name: `Environment variable value: ${env.TEST_VARIABLE}` });\n  }\n};\n")),(0,a.kt)("h2",{id:"provide-type-definitions-for-environment-variables"},"Provide Type Definitions for Environment Variables"),(0,a.kt)("p",null,"If you want, you can provide type safety for the envionment variables used in your projects by providing a type variable to the ",(0,a.kt)("inlineCode",{parentName:"p"},"wkrk")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"type EnvType = {\n  TEST_VARIABLE: string;\n};\n\nconst routes = wkrk<EnvType>({\n  \"/test\": {\n    get({ res, env }) {\n      // \u2705\n      return res.json({ name: `Environment variable value: ${env.TEST_VARIABLE}` });\n      // \ud83d\udeab Property 'EST_VARIABLE' does not exist on type 'EnvType'. Did you mean 'TEST_VARIABLE'?\n      return res.json({ name: `Environment variable value: ${env.EST_VARIABLE}` });\n    }\n  }\n});\n")),(0,a.kt)("p",null,"In the previous example, we specified that the ",(0,a.kt)("inlineCode",{parentName:"p"},"env")," variable has the shape of the ",(0,a.kt)("inlineCode",{parentName:"p"},"EnvType")," type."),(0,a.kt)("p",null,"You can also provide type definitions on a per-route basis. In this case, we\nprovide the ",(0,a.kt)("inlineCode",{parentName:"p"},"WKRKRoute")," type. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const route: WKRKRoute<EnvType> = {\n  get({ res, env }) {\n    return res.json({ name: `Environment variable value: ${env.TEST_VARIABLE}` });\n  }\n};\n")),(0,a.kt)("p",null,"By default, and to provide some flexibility, the type of the ",(0,a.kt)("inlineCode",{parentName:"p"},"env")," object is ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"."))}y.isMDXComponent=!0}}]);