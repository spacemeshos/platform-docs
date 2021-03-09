(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(7),r=(n(0),n(95)),i={id:"faq",title:"Hare Protocol FAQ",sidebar_label:"FAQ"},s={unversionedId:"protocol/hare/faq",id:"protocol/hare/faq",isDocsHomePage:!1,title:"Hare Protocol FAQ",description:"Q: Do all online full nodes on the network participate in the consensus of every layer?",source:"@site/docs/protocol/hare/FAQ.md",slug:"/protocol/hare/faq",permalink:"/platform-docs/docs/next/protocol/hare/faq",editUrl:"https://github.com/spacemeshos/platform-docs/docs/protocol/hare/FAQ.md",version:"current",lastUpdatedBy:"Aviv Eyal",lastUpdatedAt:1615307334,sidebar_label:"FAQ",sidebar:"someSidebar",previous:{title:"The Hare Protocol",permalink:"/platform-docs/docs/next/protocol/hare/overview"},next:{title:"Mining Overview",permalink:"/platform-docs/docs/next/protocol/mining/overview"}},l=[],c={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Q: Do all online full nodes on the network participate in the consensus of every layer?"),Object(r.b)("p",null,"A: They all listen to protocol messages sent over the gossip network but they are not allowed to send messages."),Object(r.b)("hr",null),Object(r.b)("p",null,"Q: Does a different active set and leader being set each and every round?"),Object(r.b)("p",null,"A: In every round a committee of (about) N (probably 800) nodes is being elected randomly. This committee is the only one who can send messages during the relevant rounds (status, commit, notify or pre-round). In the case of a leader, it is the same idea, we set the params such that on average we will have 1 leader in the proposal round. So we do not set actual roles but instead for each round we make a query to the oracle with the expected members in the committee, this way we can check if a sender is eligible or not relatively to the current round."),Object(r.b)("p",null,"In order to to terminate, an honest node must see f+1 notification messages on the same set (which will be the output set), once he sees them he can be sure that all other honest will see it in the following round (thanks to the gossip propagation property) and hence, can terminate."),Object(r.b)("hr",null),Object(r.b)("p",null,"Q: When saying the pre-round is only executed once. Do you mean once in a layer until consensus is reached? So we have this sequence: ","[pre-round]","{","[0,1,2,3]","...} - meaning pre-round and then 1 or more iterations of the 4 rounds until consensus is reached?"),Object(r.b)("p",null,"A: Exactly. That is because the pre-round round is only used to take care of validity 2. Once we filtered our set from unprovable values we can be sure that the consensus will be only over values that are validity2-valid."),Object(r.b)("hr",null),Object(r.b)("p",null,"Q: So, the pre-round is used to filter blocks that we didn\u2019t get from at least f+1 active participants?"),Object(r.b)("p",null,"A: Yes, because that will mean that every value (block id) that is not filtered after the pre-round had f+1 witnesses, meaning it was seen by at least one honest, meaning validity 2 is satisfied."),Object(r.b)("hr",null),Object(r.b)("p",null,"Q: What are ",Object(r.b)("inlineCode",{parentName:"p"},"k")," and ",Object(r.b)("inlineCode",{parentName:"p"},"ki")," discussed round 0 - they are not previously defined? Do you mean ROLES by \u2018current status\u2019? Not clear... So S is a set of blocks. Please define k, ki and status..."),Object(r.b)("p",null,"A: In the protocol, k is used to describe the current iteration. ki is used to describe the last iteration for which we have a certificate. The idea with ki is to always track the max iteration for which we accepted a proposal (see round 4) and to allow to accept only newer certificates as the protocol goes on."),Object(r.b)("p",null,"Q:  Round 2: is the ",Object(r.b)("inlineCode",{parentName:"p"},"notify message")," sent to the whole network via gossip?"),Object(r.b)("hr",null),Object(r.b)("p",null,"Q: Round 2: what is ",Object(r.b)("inlineCode",{parentName:"p"},"equivocation")," - it is not previously defined. Please define.. what does it mean to detect and equivocation?"),Object(r.b)("p",null,"A: Equivocation, generally means that someone tried to present more than one truth. Specifically itis used to describe a malicious leader that sends more than one proposal to the network - that is called leader equivocation or proposal equivocation. This behavior can be broaden to other message types, for example pre-round messages."),Object(r.b)("hr",null),Object(r.b)("p",null,"Q: Round 3: what internal state is updated? what notion, set, data, etc..."),Object(r.b)("p",null,"A: Ti is a temporal set. Si is the set in our state (at the beginning it is the initial set). When we do Si=Ti we simply update our set. In round 3 we also update the tracked certificate (since we have just created a new one)."),Object(r.b)("hr",null),Object(r.b)("p",null,"Q: Termination: can it happen before round 3 or only after round 3? meaning, can the protocol ever terminate after round 2 or does each party always run 4 rounds?"),Object(r.b)("p",null,"A: It doesn't need 4 rounds but it can't terminate in the proposal round. But, after the proposal, at the end of round 3/sometime in round 4, we can terminate if we received enough notification messages (depends on the network propagation).\n2. You are right, I will rephrase. This committee is the only one who can speak in this round. We pick a committee of size N for each round except for the proposal round for which we pick a committee of size 1."),Object(r.b)("p",null,"Let's mark them Pre-Round and Round1 to Round4. In that case, the protocol can terminate at the end of round 3 (assuming zero propagation). If not we continue to round 4 as usual and after that back to round 1 (which is considered to be the next iteration)"),Object(r.b)("hr",null),Object(r.b)("p",null,"Q: As long as less than 1/3 + are dishonest - does hare always eventually terminates with a consensus on a set even if more than 1 4-rounds iteration is needed?"),Object(r.b)("p",null,"A: Regarding the termination it is a bit delicate. When we talk about termination we actually relate to termination under the assumptions of our system which is 1. 2/3 honest majority. 2. Intersection of honest sets is not empty. The former implies that with extremely high probability we have a 1/2(+1) honest majority. The latter means the pre-round will never (actually, very high probability = 2^-40) end with empty set. Put these two together and it means that on expectation the consensus will terminate in two iterations (because the protocol ensures that once an honest is picked as leader - the consensus will terminate in that same iteration). Putting that aside, there is about 2^-40 probability that the protocol will never terminate."),Object(r.b)("hr",null),Object(r.b)("p",null,"Q: what happens when 1/3 +1 are dishonest? Does hare terminate w/o a set or does it never terminates? e.g. can the dishonest parties cause hare to never terminate?"),Object(r.b)("p",null,"A: Well the question is not well defined. Please check my answer to Q11. Generally, as long as dishonest leader is picked to lead - he can stall the consensus by one iteration. Since we assume half are honest we expect two iterations as I explained. On the other hand, if we tolerate f dishonest and there are f+1 or more (no matter if f is 1/3, 1/4 or 1/2 etc) then the assumptions are broken, nothing is guaranteed and you can end up with non consistent sets on termination or not terminate at all."))}u.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),p=o,b=h["".concat(i,".").concat(p)]||h[p]||d[p]||r;return n?a.a.createElement(b,s(s({ref:t},c),{},{components:n})):a.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);