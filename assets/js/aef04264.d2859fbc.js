(self.webpackChunksm_platform_docs=self.webpackChunksm_platform_docs||[]).push([[546],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return l},kt:function(){return d}});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(o),d=n,u=m["".concat(c,".").concat(d)]||m[d]||h[d]||r;return o?a.createElement(u,s(s({ref:t},l),{},{components:o})):a.createElement(u,s({ref:t},l))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<r;p++)s[p]=o[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7251:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c},default:function(){return l}});var a=o(2122),n=o(9756),r=(o(7294),o(3905)),s={id:"overview",title:"Spacemesh Protocol Documentation",sidebar_label:"Overview"},i={unversionedId:"protocol/overview",id:"protocol/overview",isDocsHomePage:!1,title:"Spacemesh Protocol Documentation",description:"Introduction",source:"@site/docs/protocol/overview.md",sourceDirName:"protocol",slug:"/protocol/overview",permalink:"/docs/next/protocol/overview",editUrl:"https://github.com/spacemeshos/platform-docs/blob/main/docs/protocol/overview.md",version:"current",lastUpdatedBy:"Aviv Eyal",lastUpdatedAt:1615308507,formattedLastUpdatedAt:"3/9/2021",sidebar_label:"Overview",frontMatter:{id:"overview",title:"Spacemesh Protocol Documentation",sidebar_label:"Overview"},sidebar:"someSidebar",previous:{title:"Spacemesh Platform Documentation",permalink:"/docs/next/"},next:{title:"Peer-to-Peer Networking",permalink:"/docs/next/protocol/p2p/overview"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Intended audience",id:"intended-audience",children:[]},{value:"Repository Contents",id:"repository-contents",children:[{value:"Hare Protocol",id:"hare-protocol",children:[]}]},{value:"What is Spacemesh?",id:"what-is-spacemesh",children:[{value:"Spacemesh basics",id:"spacemesh-basics",children:[]},{value:"Why race-free?",id:"why-race-free",children:[]}]},{value:"Core Infrastructure",id:"core-infrastructure",children:[{value:"Go-spacemesh",id:"go-spacemesh",children:[]},{value:"PoET server",id:"poet-server",children:[]},{value:"Spacemesh App",id:"spacemesh-app",children:[]},{value:"Testing",id:"testing",children:[]},{value:"DevOps",id:"devops",children:[]},{value:"SVM",id:"svm",children:[]}]},{value:"Mining",id:"mining",children:[{value:"Producing blocks",id:"producing-blocks",children:[]}]},{value:"Consensus",id:"consensus",children:[{value:"Tortoise and Hare",id:"tortoise-and-hare",children:[]}]},{value:"Networking",id:"networking",children:[]},{value:"Data Structures",id:"data-structures",children:[]},{value:"Learn More",id:"learn-more",children:[]},{value:"Contribute",id:"contribute",children:[]}],p={toc:c};function l(e){var t=e.components,o=(0,n.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This document and the documents it links to collectively present an overview of the Spacemesh protocol in its entirety, and its constituent components."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"#what-is-spacemesh"},"What is Spacemesh?"),", below, for more information on the project."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"#learn-more"},"Learn More"),", below, for links to many other resources on Spacemesh, both technical and non-technical."),(0,r.kt)("h2",{id:"intended-audience"},"Intended audience"),(0,r.kt)("p",null,"These documents are intended for a developer audience, with an eye towards making the protocol and client architecture accessible to those who wish to read, use, and contribute to the development of the Spacemesh protocol via its various client implementations. Where necessary, technical details of the protocol have been simplified or omitted entirely in favor of readability and legibility to a developer audience (where this has happened, there is typically a note with a link for further reading)."),(0,r.kt)("p",null,"Those looking for a more formal, research-oriented presentation of the Spacemesh protocol, including formal security proofs, should refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://spacemesh.io/spacemesh-protocol-v1-0/"},"Protocol whitepaper"),"."),(0,r.kt)("h2",{id:"repository-contents"},"Repository Contents"),(0,r.kt)("p",null,"The remainder of this document contains a high-level overview of the Spacemesh protocol, and how all of the pieces fit together. You may also wish to dive deeper into the various components of the protocol:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/protocol/mining/overview"},"Mining"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/protocol/mining/post"},"Proof of Space-time (PoST)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/protocol/mining/poet"},"Proof of Elapsed Time (PoET)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/protocol/mining/nipost"},"Non-interactive Proof of Space-time (NIPoST)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/protocol/mining/activations"},"Activation Transactions (ATX)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/protocol/consensus/overview"},"Consensus"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/protocol/consensus/overview#tortoise"},"Tortoise")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/protocol/consensus/overview#hare"},"Hare")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/protocol/consensus/deepdive"},"In context")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/protocol/transactions/overview"},"Transactions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/protocol/sync/overview"},"Sync")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/protocol/p2p/overview"},"P2P Networking")),(0,r.kt)("li",{parentName:"ul"},"Data structures (coming soon)")),(0,r.kt)("h3",{id:"hare-protocol"},"Hare Protocol"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/protocol/hare/overview"},"Spec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/spacemeshos/go-spacemesh/wiki/Hare-Protocol-Implementation"},"go-spacemesh implementation"))),(0,r.kt)("h2",{id:"what-is-spacemesh"},"What is Spacemesh?"),(0,r.kt)("p",null,"Spacemesh is a fair, race-free, permissionless blockchain protocol currently implemented in the open source ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh"},"go-spacemesh codebase"),". The protocol implements a decentralized ledger (a DAG structure, known as the ",(0,r.kt)("em",{parentName:"p"},"mesh"),") with a native cryptocurrency (Smesh, also known as SMH) that anyone is free to mine and transact. What\u2019s more, the protocol is designed in such a way that anyone with free hard drive space and a stable Internet connection can mine from home (by running the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/smapp"},"Spacemesh App"),") and earn guaranteed rewards in the form of SMH coin, a process known as Smeshing in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/testnet-guide/blob/master/dict.md"},"Spacemesh terminology"),"."),(0,r.kt)("p",null,"Spacemesh research and development is led by a team of full-time contributors employed by the ",(0,r.kt)("a",{parentName:"p",href:"https://spacemesh.io/faq/#governance"},"Spacemesh development company"),". However, Spacemesh is also an active open source project and a community of dedicated researchers, developers, and other contributors around the world. Learn more about the Spacemesh protocol at the ",(0,r.kt)("a",{parentName:"p",href:"https://spacemesh.io/"},"project homepage"),", and about the project and its goals in the ",(0,r.kt)("a",{parentName:"p",href:"https://spacemesh.io/spacemesh-manifesto/"},"manifesto"),"."),(0,r.kt)("h3",{id:"spacemesh-basics"},"Spacemesh basics"),(0,r.kt)("p",null,"In Spacemesh, we divide time into fixed-length units we call ",(0,r.kt)("em",{parentName:"p"},"layers,")," which are further grouped together into longer intervals called ",(0,r.kt)("em",{parentName:"p"},"epochs.")," Layers are similar to Bitcoin's average ten minute block time, with a couple of important differences. For one thing, unlike in Proof of Work-based blockchains like Bitcoin and Ethereum where block time is the product of a Poisson process and thus random, layers in Spacemesh occur at precisely fixed intervals of time. This is due to the deterministic nature of the Spacemesh protocol. For another thing, in Spacemesh, many blocks are produced in each layer rather than only a single block. (Formally, a layer in Spacemesh is defined as a set of blocks produced during a fixed time interval, i.e., the layer is the blocks, not the time interval.)"),(0,r.kt)("p",null,"Read on to learn more about the details of the Spacemesh protocol. You may also find this high-level ",(0,r.kt)("a",{parentName:"p",href:"https://spacemesh.io/protocol/"},"protocol overview")," helpful."),(0,r.kt)("h3",{id:"why-race-free"},"Why race-free?"),(0,r.kt)("p",null,"The Spacemesh protocol guarantees that each Smesher that follows the rules of the protocol is eligible to produce multiple blocks during each epoch. Note also that Smeshing is entirely permissionless: in other words, ",(0,r.kt)("em",{parentName:"p"},"anyone who runs the Spacemesh software and follows the rules of the protocol is guaranteed to be rewarded with Smesh coins at each epoch.")," This is in contrast to both Proof of Work-based protocols, such as Bitcoin, where rewards are probabilistic and only professional miners and mining pools stand a realistic chance of earning them; as well as to Proof of Stake-based protocols, where one must hold a substantial amount of the token before they are eligible to participate and earn rewards."),(0,r.kt)("p",null,"Spacemesh is able to achieve this nice property due to certain unique characteristics of its ",(0,r.kt)("a",{parentName:"p",href:"https://spacemesh.io/protocol/"},"consensus mechanism")," (see also ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/protocol/consensus/overview"},"Consensus"),"): in particular, the fact that it\u2019s race-free, i.e., it does not require Smeshers to compete to produce blocks in a given layer, but rather allows many blocks to be produced at each layer. This results in a DAG data structure rather than a chain. See ",(0,r.kt)("a",{parentName:"p",href:"https://spacemesh.io/race-freeness/"},"The race to race-free (or why we chose mesh over chain)")," for more information on this design choice."),(0,r.kt)("h2",{id:"core-infrastructure"},"Core Infrastructure"),(0,r.kt)("p",null,"Spacemesh infrastructure consists of several distinct core components. These components are built and maintained separately, but work in concert to enable the broader Spacemesh network and ecosystem."),(0,r.kt)("h3",{id:"go-spacemesh"},"Go-spacemesh"),(0,r.kt)("p",null,"The largest and most complex component of the network infrastructure is the go-spacemesh full node implementation. This codebase implements the bulk of the Spacemesh core protocol and can be used to run a protocol-compatible full node on a variety of different systems and architectures, including a trustless ",(0,r.kt)("em",{parentName:"p"},"full node")," that independently verifies each transaction, and a mining (Smeshing, in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/testnet-guide/blob/master/dict.md"},"Spacemesh terminology"),") node that additionally participates in consensus, produces blocks and collects rewards."),(0,r.kt)("p",null,"As the name implies, go-spacemesh is written in the Go programming language, and consists of a number of different modules that implement core components of the protocol such as mining, consensus, networking, P2P sync, and state. See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh"},"go-spacemesh")," for more, in particular ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh#go-spacemesh-architecture"},"Go-spacemesh Architecture"),"."),(0,r.kt)("p",null,"Note that, unlike full node implementations for certain other blockchain protocols, go-spacemesh does not include wallet functionality."),(0,r.kt)("h3",{id:"poet-server"},"PoET server"),(0,r.kt)("p",null,"PoET stands for \u201cProof of Elapsed Time.\u201d It\u2019s a core part of the Spacemesh ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/protocol/consensus/overview"},"consensus protocol"),", where it\u2019s used to prove that a miner has allocated a chunk of hard drive space to the protocol ",(0,r.kt)("em",{parentName:"p"},"for some period of time.")," PoST, ",(0,r.kt)("a",{parentName:"p",href:"#post"},"described below"),", is used to prove that ",(0,r.kt)("em",{parentName:"p"},"space")," has been allocated; PoET is responsible for the ",(0,r.kt)("em",{parentName:"p"},"time")," component of space-time."),(0,r.kt)("p",null,"PoET is implemented as a web service, separate from go-spacemesh, that anyone can run and offer as a service to Smeshers. Many Smeshers can share a single PoET server, and one Smesher may opt to utilize multiple PoET servers for redundancy. Go-spacemesh ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh/blob/develop/activation/poet.go"},"includes code")," to communicate with a PoET server."),(0,r.kt)("p",null,"For more information see ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/protocol/mining/poet"},"PoET")," and the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/poet"},"PoET codebase"),"."),(0,r.kt)("h3",{id:"spacemesh-app"},"Spacemesh App"),(0,r.kt)("p",null,"The Spacemesh App is a GUI-based desktop application built for Windows, Mac, and Linux that has two main functions: it acts as a wallet, allowing a user to hold and transact ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/testnet-guide/blob/master/dict.md#smesh-smh"},"Smesh coin"),", and it allows a user to mine (known as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/testnet-guide/blob/master/dict.md#smesher"},"Smeshing"),") by allocating a certain amount of hard drive space, constructing and submitting eligibility proofs, producing blocks, and collecting rewards."),(0,r.kt)("p",null,"The App runs an instance of the go-spacemesh full node under the hood. For more information see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/smapp"},"Spacemesh App codebase"),"."),(0,r.kt)("h3",{id:"testing"},"Testing"),(0,r.kt)("p",null,"Testing is a critical part of the software development workflow across all of the independent components of the Spacemesh network. There is no single, universal test suite; rather, each component implements its own unit and integration tests. For instance, you can find the go-spacemesh tests inside the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh/tree/develop/tests"},(0,r.kt)("inlineCode",{parentName:"a"},"tests/")," folder")," of the repository."),(0,r.kt)("h3",{id:"devops"},"DevOps"),(0,r.kt)("p",null,"The only piece of infrastructure that\u2019s strictly required to join the Spacemesh network is a copy of the go-spacemesh client (along with the Spacemesh App if Smeshing). However, running multiple clients (such as setting up a local network, or a dev testnet), and/or ensuring redundancy among these nodes, requires additional tooling. There is tooling to run a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/local-testnet"},"local testnet"),", to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/smops"},"operate multiple nodes"),", and to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/collector"},"collect events")," and store them in a database."),(0,r.kt)("h3",{id:"svm"},"SVM"),(0,r.kt)("p",null,"SVM is the Spacemesh Virtual Machine, a WebAssembly-compatible smart contract engine. This project is experimental and aims to add smart contract functionality to a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/product/blob/master/product_plan.md"},"future protocol release"),". Note that, since it is not part of the testnet, SVM ",(0,r.kt)("em",{parentName:"p"},"is not covered further")," in the rest of these documents at present. See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/svm"},"the repository")," and ",(0,r.kt)("a",{parentName:"p",href:"https://spacemesh.io/svm/"},"this blog post")," for more information about SVM."),(0,r.kt)("h2",{id:"mining"},"Mining"),(0,r.kt)("a",{name:"post"}),"### Proof of Space-time",(0,r.kt)("p",null,"In Spacemesh, a miner establishes eligibility to produce blocks and participate in ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/protocol/consensus/overview"},"consensus")," by publishing an ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/protocol/mining/activations"},"Activation Transaction (ATX)"),", which contains (among other things) a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/protocol/mining/post"},"Proof of Space-time"),"."),(0,r.kt)("p",null,"These proofs have two phases. In the initial phase, known as the ",(0,r.kt)("em",{parentName:"p"},"initialization phase,")," a miner allocates a chunk of hard drive space to the protocol, and commits to the contents of that space. The space is filled with cryptographic junk such that for the duration that this space is committed to Spacemesh it cannot be used for any other purpose. This hard drive space is the ",(0,r.kt)("em",{parentName:"p"},"space")," component of the ",(0,r.kt)("em",{parentName:"p"},"space-time")," resource that underlies a Proof of Space-time."),(0,r.kt)("p",null,"In the ongoing phase, known as the ",(0,r.kt)("em",{parentName:"p"},"execution phase,")," the miner must submit a new ATX containing a proof of ongoing eligibility each epoch."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/protocol/mining/overview"},"Mining")," for more information on how these proofs are generated and utilized."),(0,r.kt)("h3",{id:"producing-blocks"},"Producing blocks"),(0,r.kt)("p",null,"Once a miner has successfully generated and submitted an eligibility proof, the process of actually producing blocks is relatively straightforward. The miner can calculate which layers in a given epoch they are eligible to produce blocks. (The number of layers during which they are eligible, and thus, the number of blocks they produce in each epoch, will vary depending upon the total number of miners, but the epoch size is set sufficiently large that, unless the number of miners becomes enormous, each miner will be eligible to produce multiple blocks per epoch.)"),(0,r.kt)("p",null,"Miners collect transactions into a local transaction pool, and once per eligible layer they assemble them into blocks and broadcast those blocks to the network. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/protocol/mining/overview"},"Mining")," for more information on this process."),(0,r.kt)("h2",{id:"consensus"},"Consensus"),(0,r.kt)("p",null,"Consensus in the Spacemesh protocol consists of several independent components that work together to allow each network node to independently arrive at the same canonical view of blocks and transactions in a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Byzantine_fault"},"Byzantine Fault Tolerant-fashion"),", i.e., even if those nodes haven't seen precisely the same information at precisely the same time. What follows is a very brief overview; see ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/protocol/consensus/overview"},"Consensus")," for more information."),(0,r.kt)("h3",{id:"tortoise-and-hare"},"Tortoise and Hare"),(0,r.kt)("p",null,"Once many miners have produced candidate blocks for a given layer, how does the network achieve consensus on the canonical set of blocks and transactions that form the layer? In other words, how does a transaction become finalized?"),(0,r.kt)("p",null,"Spacemesh employs a two-step process to achieve finality. The first step is the Hare protocol, which each node runs at the end of every layer. It\u2019s a Byzantine agreement protocol that allows the network to quickly achieve consensus on a canonical set of blocks. The output of the Hare allows bootstrapping of the consensus of the Tortoise, which is a slower, vote-based protocol that methodically counts the votes for and against each block, leading to eventual, final consistency. Each node uses the output of the Hare protocol to decide which previous blocks its newly-produced blocks should vote for. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/protocol/consensus/overview"},"Consensus")," for more information on these protocols."),(0,r.kt)("h2",{id:"networking"},"Networking"),(0,r.kt)("p",null,"The Spacemesh network consists of a peer-to-peer network of independent nodes, each running go-spacemesh (or another Spacemesh protocol client). Messages, which may consist of new transactions, old or new blocks, votes on consensus, etc., transit the network in one of only two fashions: a message may be transmitted from one node directly to a recipient node (e.g., in response to a request for a particular piece of data, such as a block), or a message may be gossiped across the entire network (e.g., a new transaction or block)."),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/protocol/p2p/overview"},"P2P Networking"),"."),(0,r.kt)("h2",{id:"data-structures"},"Data Structures"),(0,r.kt)("p",null,"The basic building blocks of the Spacemesh protocol, and the overall, canonical mesh data structure, are transactions and blocks. Transactions are account-based, and contain a sender, a recipient, an amount, a signature, and a few other pieces of data. Blocks collate zero or more transactions into a discrete set, and contain a block height (layer number), a signature of the miner, a proof of eligibility, and a few other pieces of data. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/protocol/mining/overview"},"Mining")," for more information."),(0,r.kt)("p",null,"Other relevant data structures include the various types of proof produced and submitted by miners and other services (",(0,r.kt)("a",{parentName:"p",href:"/docs/next/protocol/mining/poet"},"PoET"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/protocol/mining/activations"},"ATX"),"), and vote messages exchanged as part of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/protocol/consensus/overview#hare"},"Hare protocol"),"."),(0,r.kt)("h2",{id:"learn-more"},"Learn More"),(0,r.kt)("p",null,"The documents contained in this repository are intended to provide a high-level, developer-centric overview of the Spacemesh protocol and the various infrastructure that implements the protocol. For additional resources, see the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://spacemesh.io/spacemesh-protocol-v1-0/"},"Protocol whitepaper"),", which contains a complete description of the entire protocol with accompanying proofs of correctness"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://spacemesh.io/whitepaper1/"},"Technical whitepaper"),", which precedes the protocol whitepaper, and is less rigorous"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/spacemeshos/protocol"},"Protocol specifications repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://spacemesh.io/overview/"},"Spacemesh protocol overview"),", an even more high-level overview of the protocol intended for a general audience"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://spacemesh.io/protocol/"},"The Spacemesh Consensus Protocol"),", a three-part blog post intended for a technical audience that details many of the design decisions behind the protocol"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/jvtHFOlA1GI"},"Proof of Space-Time (PoST) with a mesh-based permissionless consensus protocol"),", a talk by Tal Moran, Spacemesh Chief Scientist, at CESC 2018, introducing the protocol")),(0,r.kt)("h2",{id:"contribute"},"Contribute"),(0,r.kt)("p",null,"All of the core components of the Spacemesh network and protocol, including everything described above, is open source and permissively-licensed, and we welcome contributions from all community members. We have a set of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh/labels/funded%20%3Amoneybag%3A"},"open bounties"),", and we are in the process of launching a grants program where you can apply for funding to work on a project of your choice that you feel will add value to the Spacemesh network and ecosystem. Watch ",(0,r.kt)("a",{parentName:"p",href:"https://spacemesh.io/"},"the Spacemesh homepage")," for an announcement."),(0,r.kt)("p",null,"In addition to reading these docs, familiarizing yourself with the code, and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh#getting"},"running your own node"),", the best way to get started is to work on a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh/labels/good%20first%20issue"},"good-first-issue in a codebase such as go-spacemesh"),". You can chat with other Spacemesh core developers and app developers ",(0,r.kt)("a",{parentName:"p",href:"https://gitter.im/spacemesh-os/"},"on Gitter"),", or join a regular core devs call (participation information will be shared soon)."))}l.isMDXComponent=!0}}]);