(self.webpackChunksm_platform_docs=self.webpackChunksm_platform_docs||[]).push([[236],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return p},kt:function(){return u}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(o),u=a,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||i;return o?n.createElement(m,r(r({ref:t},p),{},{components:o})):n.createElement(m,r({ref:t},p))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},4060:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var n=o(2122),a=o(9756),i=(o(7294),o(3905)),r={id:"overview",title:"Mining Overview",sidebar_label:"Overview"},s={unversionedId:"protocol/mining/overview",id:"protocol/mining/overview",isDocsHomePage:!1,title:"Mining Overview",description:"Mining, which is known as Smeshing in Spacemesh parlance, is the process by which nodes in the network create new blocks. In general, It has two distinct purposes:",source:"@site/docs/protocol/mining/01-overview.md",sourceDirName:"protocol/mining",slug:"/protocol/mining/overview",permalink:"/docs/next/protocol/mining/overview",editUrl:"https://github.com/spacemeshos/platform-docs/blob/main/docs/protocol/mining/01-overview.md",version:"current",lastUpdatedBy:"Aviv Eyal",lastUpdatedAt:1615307334,formattedLastUpdatedAt:"3/9/2021",sidebar_label:"Overview",sidebarPosition:1,frontMatter:{id:"overview",title:"Mining Overview",sidebar_label:"Overview"},sidebar:"someSidebar",previous:{title:"Hare Protocol FAQ",permalink:"/docs/next/protocol/hare/faq"},next:{title:"Mining - Proof of Space-time",permalink:"/docs/next/protocol/mining/post"}},l=[{value:"Proof of Work",id:"proof-of-work",children:[]},{value:"Proof of Stake",id:"proof-of-stake",children:[]},{value:"Proof of Space-time",id:"proof-of-space-time",children:[]},{value:"Towards Proof of Space-time",id:"towards-proof-of-space-time",children:[]}],c={toc:l};function p(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Mining, which is known as Smeshing in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/testnet-guide/blob/master/dict.md"},"Spacemesh parlance"),", is the process by which nodes in the network create new blocks. In general, It has two distinct purposes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"To maintain the canonical list of transactions"),(0,i.kt)("li",{parentName:"ol"},"To mint and distribute new tokens")),(0,i.kt)("p",null,"From the canonical list of transactions one can compute the state of the system (now or at any point in the past). Due to the lack of a trusted central authority, one must rely on an honest majority to know the canonical list of transactions. But the notion of majority is problematic in a permissionless setting, due to the lack of identity verification: it may be relatively easy for an adversary to create many fake identities (known as \u201cSybils\u201d)."),(0,i.kt)("p",null,"Several strategies have been suggested for defending against such an attack (often referred to as \u201cSybil attack\u201d), typically by making it costly to create and maintain an identity. For instance, one of the most popular strategies is to force users of the system to spend scarce resources in order to participate in mining. Creating multiple identities would require an attacker to spend a large amount of resources, approximately linear in the number of identities. If that resource is limited and costly, an attacker cannot spend it indefinitely. So by binding the notion of identity to a resource, we can create the notion of a Sybil-resistant majority, not strictly of actors but rather of resources."),(0,i.kt)("p",null,"Any bounded resource can be used as a \u201cpayment\u201d for the eligibility to mine. This \u201cpayment\u201d isn\u2019t paid to anyone, it is simply wasted or \u201cburnt.\u201d Its purpose is to prevent Sybil attacks, and thus to make the honest majority security assumption viable. That majority can be used by nodes on the network to reach consensus regarding the canonical list of transactions. It thus",(0,i.kt)("a",{parentName:"p",href:"https://satoshi.nakamotoinstitute.org/emails/cryptography/11/#selection-47.45-47.72"}," solves")," a classic problem in distributed computing called the ",(0,i.kt)("a",{parentName:"p",href:"https://people.eecs.berkeley.edu/~luca/cs174/byzantine.pdf"},"Byzantine Generals Problem"),", even among a permissionless, changing set of actors, and was first introduced by Satoshi Nakamoto with the inception of Bitcoin."),(0,i.kt)("p",null,"In order to incentivize miners to spend that resource, essential to the security of the network, miners are rewarded with newly minted tokens. This kills two birds with one stone: the initial distribution of tokens into circulation, and the incentive for nodes to support the security of the network."),(0,i.kt)("h2",{id:"proof-of-work"},"Proof of Work"),(0,i.kt)("p",null,"The earliest, most popular, and most battle-tested form of resource payment is to commit computing power. It does not require any specialized infrastructure. In order to ensure that users actually do spend the appropriate resource payment, users employ a \u201cProof of Work\u201d (PoW)."),(0,i.kt)("p",null,"The most widely used implementation of PoW is the Hash-Preimage PoW (also known as ",(0,i.kt)("a",{parentName:"p",href:"http://hashcash.org/papers/announce.txt"},"Hashcash"),"). It has useful properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It\u2019s relatively simple"),(0,i.kt)("li",{parentName:"ul"},"The work is easy to verify, hard to fake"),(0,i.kt)("li",{parentName:"ul"},"It is non-interactive (anyone can pick their own challenge and present the proof)")),(0,i.kt)("p",null,"While effective, it also has some significant drawbacks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It incentivizes the use of dedicated hardware (e.g., an ASIC), making mining impossible using consumer-grade hardware such as a home PC"),(0,i.kt)("li",{parentName:"ul"},"It incentivizes individual miners to combine resources into a small number of centralized pools"),(0,i.kt)("li",{parentName:"ul"},"It leads to high cost of entry for mining, which sets a lower bound for the mining reward (since rational parties would only participate in mining if their reward exceeds their cost)"),(0,i.kt)("li",{parentName:"ul"},"It is environmentally wasteful and harmful (requiring dedicated hardware and high ongoing electricity consumption)"),(0,i.kt)("li",{parentName:"ul"},"It creates a lottery-based consensus protocol, and so a race among miners. This creates high competitive cost for large blocks, a harmful incentive to withhold blocks, unfair reward distribution due to head start, lower overall transaction throughput, etc.")),(0,i.kt)("h2",{id:"proof-of-stake"},"Proof of Stake"),(0,i.kt)("p",null,"The most popular alternative to Proof of Work is called Proof of Stake, an approach to decentralized consensus that replaces computing power, the scarce resource committed by miners in Proof of Work as described above, with a bonded stake, typically denominated in the native token of the network in question. If an actor participating in securing the network, typically referred to in PoS systems as a validator, misbehaves, they may risk losing part or all of this stake (whereas in the case of PoW they would instead forfeit the cost of the electricity and computation expended to produce the invalid block). PoS has the benefit of being much more environmentally friendly than PoW since it totally obviates the need to perform wasteful computation, but it\u2019s subject to its own set of deficiencies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A relatively high barrier to entry for participation in consensus, as a validator typically needs USD $1,000 or more worth of a token to begin validating."),(0,i.kt)("li",{parentName:"ul"},"Strong assumptions are required to prevent long-range attacks. Whereas PoW only requires that the hash function used in the PoW algorithm be trusted, by contrast, PoS requires additional assumptions, such as checkpointing or secure erasures, to protect against long-range attacks where validators collude to cheaply produce many blocks until they overtake the current longest chain."),(0,i.kt)("li",{parentName:"ul"},"A token distribution problem. In PoW (and ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/protocol/mining/post"},"PoST"),"), tokens can be handed directly and exclusively to miners, such that PoW can be used to bootstrap a relatively fair initial token distribution. PoS, by contrast, requires that there be an initial set of validators who already hold, and stake, tokens. It therefore cannot be used to bootstrap initial token distribution."),(0,i.kt)("li",{parentName:"ul"},"In the strictest sense, and in contrast to PoW and PoST, PoS is not permissionless since a new validator needs to convince an existing token holder to sell or lend them tokens for staking."),(0,i.kt)("li",{parentName:"ul"},"While formal permissionlessness may be primarily of academic interest, for these reasons, PoS networks are in practice subject to capture by cartels of large token holders. The cost of such an attack, where a cartel may gain control of the majority of a network\u2019s tokens and thus validation slots, is relatively low early in the life of a network, but it can lead to problems down the road. One example is cartel censorship, whereby a majority cartel prevents other parties from participating in consensus and may engage in subtle attacks such as prioritizing transactions in exchange for extra-protocol bribes."),(0,i.kt)("li",{parentName:"ul"},"In practice many token holders opt to store their tokens on large, centralized exchanges, temporarily or over the long-term, giving such exchanges disproportional power to participate in consensus and collect rewards.")),(0,i.kt)("h2",{id:"proof-of-space-time"},"Proof of Space-time"),(0,i.kt)("p",null,"Spacemesh replaces Proof of Work (PoW) with a novel consensus mechanism called Proof of Space-time (",(0,i.kt)("a",{parentName:"p",href:"/docs/next/protocol/mining/post"},"PoST"),") that shares many of the benefits of PoW but is nearly as energy efficient as PoS. In a nutshell, PoST allows miners to use disk space rather than computation as the scarce resource for preventing Sybil attacks. After a one-time computationally-intensive initialization phase, the miner earns rewards by creating blocks with a computer that is almost completely at rest, for as long as they keep storing this data."),(0,i.kt)("p",null,"Storage equipment is a general-purpose item that can be readily obtained by individual consumers. It is also common that storage devices are underutilized, e.g., it is not unusual for a hard drive in a new computer to be half empty. Since many home users are able to participate and earn rewards without purchasing any mining resource in advance (in other words, at zero marginal cost), PoST could lead to much greater decentralization (i.e., more participants in consensus) than is possible under PoW or PoS."),(0,i.kt)("p",null,"PoST replaces the random sampling of PoW with deterministic eligibility criteria: every miner that expends a sufficient space-time resource will be eligible to generate a block. Since eligibility isn\u2019t randomized, PoST is much less vulnerable to \u201cgrinding\u201d attacks (where the adversary attempts to perform extra work\u2014that is not specified by the honest protocol\u2014in order to increase their probability of being selected in the lottery). This property, and the fact that multiple blocks are produced at each block height (known as a \u201clayer\u201d in Spacemesh), leading to a DAG data structure rather than a chain, mean that PoST enables a blockchain like Spacemesh to be ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/protocol/overview#why-race-free"},"race free"),"."),(0,i.kt)("p",null,"PoST has many nice properties, but it also has some drawbacks that make it significantly harder to use for consensus. For instance, PoST allows a miner to prove that they generated the data required to submit an initialization proof, but not that they kept that data over a longer period of time (they may have regenerated it). As another example, PoST doesn\u2019t in and of itself generate randomness the way PoW does, so for security we need another source of randomness to make it difficult to predict who will be eligible to generate a block, when. These and other challenges and workarounds will be discussed in later sections."),(0,i.kt)("h2",{id:"towards-proof-of-space-time"},"Towards Proof of Space-time"),(0,i.kt)("p",null,"The remainder of the articles in this section of the documentation will explain the various components of the mining protocol as implemented in Spacemesh: ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/protocol/mining/post"},"Proof of Space-time (PoST)"),", used to attest that a miner generated and stored a specific amount of data for a specific length of time; ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/protocol/mining/poet"},"Proof of Elapsed Time (PoET)"),", used to attest that a specific amount of objective, clock time has passed since a proof was generated; ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/protocol/mining/nipost"},"Non-interactive Proof of Space-time (NIPoST)"),", which ties together the previous two types of proof; and, finally, ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/protocol/mining/activations"},"activation transactions (ATX)"),", used by miners to attest to their eligibility in the Spacemesh protocol by submitting such a proof construct to the network."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/protocol/mining/post"},"Read on")," to learn more about the protocol and how its various pieces fit together."))}p.isMDXComponent=!0}}]);