(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{109:function(e,t,o){"use strict";o.d(t,"a",(function(){return l})),o.d(t,"b",(function(){return m}));var n=o(0),i=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var p=i.a.createContext({}),h=function(e){var t=i.a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=h(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=h(o),d=n,m=l["".concat(r,".").concat(d)]||l[d]||u[d]||a;return o?i.a.createElement(m,s(s({ref:t},p),{},{components:o})):i.a.createElement(m,s({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,r=new Array(a);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var p=2;p<a;p++)r[p]=o[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},153:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/nipost-99667c65796bd9eade4d7f691d48bf04.png"},89:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return h}));var n=o(3),i=o(7),a=(o(0),o(109)),r={id:"nipost",title:"Mining - Non-interactive Proof of Space-time",sidebar_label:"NIPoST"},s={unversionedId:"protocol/mining/nipost",id:"protocol/mining/nipost",isDocsHomePage:!1,title:"Mining - Non-interactive Proof of Space-time",description:"Non-interactive Proof of Space-time (NIPoST) is an algorithm that can be used to construct a self-contained Proof of Space-time (PoST) that is fully deterministic, non-interactive, and publicly-verifiable. In essence, it involves chaining together a series of Proofs of Space-time (PoST) and Proofs of Elapsed Time (PoET) in such a fashion that a verifier can independently verify that the prover had access to a certain dataset for an arbitrarily long period of time (subject to the rationality argument presented in PoST, i.e., that in theory the prover could\u2019ve chosen instead to regenerate the dataset every time a proof was generated, but that to do so would be expensive and would not afford any advantage). In this respect NIPoST may be thought of as the glue that chains multiple, sequential proofs together, or alternatively as a second order or meta-proof which wraps or contains, as constituent parts, a Proof of Elapsed Time and multiple Proofs of Space-time.",source:"@site/docs/protocol/mining/04-nipost.md",slug:"/protocol/mining/nipost",permalink:"/docs/next/protocol/mining/nipost",editUrl:"https://github.com/spacemeshos/platform-docs/docs/protocol/mining/04-nipost.md",version:"current",lastUpdatedBy:"Aviv Eyal",lastUpdatedAt:1615307334,sidebar_label:"NIPoST"},c=[{value:"Construction",id:"construction",children:[]},{value:"Chaining",id:"chaining",children:[]},{value:"Proof",id:"proof",children:[]},{value:"Publishing",id:"publishing",children:[]}],p={toc:c};function h(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Non-interactive Proof of Space-time (NIPoST) is an algorithm that can be used to construct a self-contained ",Object(a.b)("a",{parentName:"p",href:"/docs/next/protocol/mining/post"},"Proof of Space-time (PoST)")," that is fully deterministic, non-interactive, and publicly-verifiable. In essence, it involves chaining together a series of Proofs of Space-time (PoST) and Proofs of Elapsed Time (PoET) in such a fashion that a verifier can independently verify that the prover had access to a certain dataset for an arbitrarily long period of time (subject to the rationality argument presented in ",Object(a.b)("a",{parentName:"p",href:"/docs/next/protocol/mining/post"},"PoST"),", i.e., that in theory the prover could\u2019ve chosen instead to regenerate the dataset every time a proof was generated, but that to do so would be expensive and would not afford any advantage). In this respect NIPoST may be thought of as the ",Object(a.b)("em",{parentName:"p"},"glue")," that chains multiple, sequential proofs together, or alternatively as a ",Object(a.b)("em",{parentName:"p"},"second order")," or ",Object(a.b)("em",{parentName:"p"},"meta-proof")," which wraps or contains, as constituent parts, a Proof of Elapsed Time and multiple Proofs of Space-time."),Object(a.b)("p",null,"In the context of Spacemesh, NIPoST proofs are generated and submitted by miners to the network as part of an ",Object(a.b)("a",{parentName:"p",href:"/docs/next/protocol/mining/activations"},"ATX")," to assert their eligibility to mine in the following epoch."),Object(a.b)("h2",{id:"construction"},"Construction"),Object(a.b)("p",null,"Although the proving protocol in ",Object(a.b)("a",{parentName:"p",href:"/docs/next/protocol/mining/post"},"PoST")," can be made non-interactive using the ",Object(a.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fiat%E2%80%93Shamir_heuristic"},"Fiat-Shamir heuristic")," (replacing the verifier\u2019s response to the commitment, the challenge, with a hash of the commitment), the execution phase still requires interaction: the proof must be generated as a response to an unpredictable challenge. In addition, the ",Object(a.b)("em",{parentName:"p"},"time")," component of the space-time resource is not publicly-verifiable, and depends on the verifier\u2019s measurement of the elapsed time between phases."),Object(a.b)("p",null,"However, by creating a dependency between PoST and PoET, we can create a single, self-contained proof that is entirely non-interactive and publicly-verifiable. The key insight is to use the output of the initialization phase (or the previous execution phase if we\u2019re running multiple times, as in the Spacemesh protocol) as the challenge to PoET, and then use the output of PoET as the challenge to the execution phase. (Note that we may choose to hash these challenges first to reduce them to a fixed size, which has no negative implications on security.) This construction creates a non-interactive proof-of-space-time (NIPoST) that convinces a verifier that the prover committed sufficient space-time resources (i.e., a proven amount of space for at least a proven length of time)."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Visualization of the NIPoST Construction",src:o(153).default})),Object(a.b)("p",null,"The prover cannot guess the PoST commitment value without first generating the PoST data, and cannot guess the PoET outcome before waiting the specified duration after learning the PoST commitment. This creates a coupling between PoST and PoET which enables a non-interactive proving process, i.e., one in which the verifier does not take part."),Object(a.b)("h2",{id:"chaining"},"Chaining"),Object(a.b)("p",null,"The NIPoST is intended to be chained: the initial NIPoST starts with the initialization phase, which generates data with respect to a specific ID, and ends with an execution phase to prove that the data are still stored (see ",Object(a.b)("a",{parentName:"p",href:"/docs/next/protocol/mining/post#phases"},"more on these phases"),"). Each subsequent NIPoST starts with the output of the previous NIPoST execution phase as its input. As described in ",Object(a.b)("a",{parentName:"p",href:"/docs/next/protocol/mining/post#proving"},"PoST"),", this is not unlike the way in which each Bitcoin block refers to the previous block, with a genesis block upfront (analogous to the initial, commitment phase proof, in our case)."),Object(a.b)("p",null,"A single PoST output isn\u2019t intended to be directly and exclusively used as the PoET statement (i.e., the piece of data that PoET asserts knowledge of for some period of time). As explained in the ",Object(a.b)("a",{parentName:"p",href:"/docs/next/protocol/mining/poet"},"PoET section"),", individual miners aren\u2019t expected to perform the Proof of Sequential Work (PoSW) required to produce a PoET themselves, which would be extremely computationally expensive. Instead, they submit their challenges to a public PoET service, which aggregates them into a Merkle tree to produce one shared PoET statement."),Object(a.b)("h2",{id:"proof"},"Proof"),Object(a.b)("p",null,"Unlike PoST and PoET, construction of NIPoST does not require commitment of any additional resources or any additional, complex computation. Instead, it just requires input in the form of the PoST and PoET proofs themselves (which, in turn, attest to the committed resources). The full NIPoST consists of the following components, each of which is verified independently:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The PoST initialization phase proof, or, in the execution phase, the previous execution phase proof"),Object(a.b)("li",{parentName:"ol"},"A Merkle path that proves the inclusion of a challenge based on this proof in the aggregate graph that serves as the PoET statement. The challenge is the PoST initialization phase commitment (or a hash of the previous execution phase proof, in the execution phase)."),Object(a.b)("li",{parentName:"ol"},"A PoET whose input is the root of this Merkle tree"),Object(a.b)("li",{parentName:"ol"},"The PoST of the following execution phase whose challenge is a hash of the output of this round\u2019s PoET output")),Object(a.b)("p",null,"While each PoST contains the publicly-verifiable ",Object(a.b)("em",{parentName:"p"},"space")," component, the PoET is used to prove in a publicly-verifiable way the duration between adjacent PoST proofs, i.e., the ",Object(a.b)("em",{parentName:"p"},"time")," component. The combination of these two components proves commitment of the ",Object(a.b)("em",{parentName:"p"},"space-time resource"),", i.e., a proven amount of space committed for (at least) a proven amount of time."),Object(a.b)("p",null,"The duration component of a NIPoST cannot be directly measured in clock time (which cannot be proven in a publicly-verifiable way). Instead, the NIPoST uses ",Object(a.b)("a",{parentName:"p",href:"/docs/next/protocol/mining/poet"},Object(a.b)("em",{parentName:"a"},"sequential work"))," as a proxy for time. That is, the duration is measured as a number of sequential CPU operations, e.g., hash invocations."),Object(a.b)("h2",{id:"publishing"},"Publishing"),Object(a.b)("p",null,"In Spacemesh, in order to publish a NIPoST to the network and assert a miner\u2019s eligibility to produce blocks in the following epoch, the NIPoST is embedded in a special type of transaction called an ",Object(a.b)("em",{parentName:"p"},"Activation Transaction")," (known as an ATX). This leads to a slightly different mechanism than the one described above, where in fact it is not the NIPoSTs which are being chained, but rather the ATXs. To allow that, the challenge to PoET contains, in addition to what was described above, some additional fields from the ATX which embeds the NIPoST. Read on to the ",Object(a.b)("a",{parentName:"p",href:"/docs/next/protocol/mining/activations"},"next section")," to learn more."))}h.isMDXComponent=!0}}]);