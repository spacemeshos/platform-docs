(self.webpackChunksm_platform_docs=self.webpackChunksm_platform_docs||[]).push([[357],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return h},kt:function(){return u}});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),p=c(o),u=n,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return o?a.createElement(m,s(s({ref:t},h),{},{components:o})):a.createElement(m,s({ref:t},h))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,s=new Array(i);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,s[1]=r;for(var c=2;c<i;c++)s[c]=o[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},6838:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return s},metadata:function(){return r},toc:function(){return l},default:function(){return h}});var a=o(2122),n=o(9756),i=(o(7294),o(3905)),s={id:"overview",title:"Consensus in Spacemesh",sidebar_label:"Overview"},r={unversionedId:"protocol/consensus/overview",id:"version-0.1.0/protocol/consensus/overview",isDocsHomePage:!1,title:"Consensus in Spacemesh",description:"Consensus is an essential part of every blockchain platform. In many ways, a decentralized consensus engine is what makes a blockchain a blockchain (rather than, say, a centralized database). The choice of consensus mechanism has ramifications that echo up and down the blockchain stack, from the basic architecture of the full node to aspects of user experience (UX) such as wallet design and time to finality. For this reason, the choice of consensus engine is one of the most important design decisions we can make when building a blockchain platform.",source:"@site/versioned_docs/version-0.1.0/protocol/consensus/01-overview.md",sourceDirName:"protocol/consensus",slug:"/protocol/consensus/overview",permalink:"/docs/protocol/consensus/overview",editUrl:"https://github.com/spacemeshos/platform-docs/blob/main/versioned_docs/version-0.1.0/protocol/consensus/01-overview.md",version:"0.1.0",lastUpdatedBy:"Aviv Eyal",lastUpdatedAt:1615316854,formattedLastUpdatedAt:"3/9/2021",sidebar_label:"Overview",sidebarPosition:1,frontMatter:{id:"overview",title:"Consensus in Spacemesh",sidebar_label:"Overview"}},l=[{value:"Phases",id:"phases",children:[]},{value:"Proof-of-Work-based protocols",id:"proof-of-work-based-protocols",children:[]},{value:"Proof of Space-time",id:"proof-of-space-time",children:[]},{value:"The Tortoise and the Hare",id:"the-tortoise-and-the-hare",children:[]},{value:"Mesh Structure",id:"mesh-structure",children:[]},{value:"Tortoise",id:"tortoise",children:[{value:"Overview",id:"overview",children:[]},{value:"Voting",id:"voting",children:[]},{value:"Tallying votes",id:"tallying-votes",children:[]},{value:"Self-healing",id:"self-healing",children:[]},{value:"Details",id:"details",children:[]}]},{value:"Hare",id:"hare",children:[{value:"Overview",id:"overview-1",children:[]},{value:"Roles",id:"roles",children:[]},{value:"Rounds",id:"rounds",children:[]},{value:"Validity rules",id:"validity-rules",children:[]},{value:"Details",id:"details-1",children:[]}]}],c={toc:l};function h(e){var t=e.components,o=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Consensus is an essential part of every blockchain platform. In many ways, a decentralized consensus engine is what makes a blockchain a blockchain (rather than, say, a centralized database). The choice of consensus mechanism has ramifications that echo up and down the blockchain stack, from the basic architecture of the full node to aspects of user experience (UX) such as wallet design and time to finality. For this reason, the choice of consensus engine is one of the most important design decisions we can make when building a blockchain platform."),(0,i.kt)("p",null,"With respect to the rest of the blockchain client architecture, consensus can be thought of as a background process: the consensus engine waits for new information to arrive, in the form of new blocks, then kicks into action every so often and identifies a set of blocks that are deemed canonical given all of the information available to the node at that point in time."),(0,i.kt)("p",null,"The consensus mechanism is one of the primary differences between Spacemesh and other contemporary blockchain platforms. Unlike most other blockchains, Spacemesh employs two distinct consensus mechanisms, which work in concert to achieve final consensus on the canonical structure of the mesh. It is the way these mechanisms work that give Spacemesh its eponymous mesh-like data structure."),(0,i.kt)("p",null,"Note that it\u2019s important not to conflate consensus with mining. Indeed, there is some conceptual overlap between the two so the distinction can be a bit blurry. Mining is ",(0,i.kt)("em",{parentName:"p"},"the process by which a node establishes eligibility to produce blocks, and subsequently produces blocks deemed valid by the network.")," (Secondarily, it is also the mechanism by which the network\u2019s native token is distributed.) Consensus, by contrast, is ",(0,i.kt)("em",{parentName:"p"},"the process by which")," all nodes ",(0,i.kt)("em",{parentName:"p"},"come to consensus on the canonical set of blocks and transactions that form the ledger.")),(0,i.kt)("p",null,"There is a circular dependency between consensus and mining. Through mining, nodes create and submit proofs that they are eligible to propose blocks and participate in mining (in Spacemesh terminology, this is called an ",(0,i.kt)("a",{parentName:"p",href:"/docs/protocol/mining/activations"},"Activation Transaction (ATX)"),"). These are an input to the consensus engine: only blocks produced by an eligible miner, in an eligible slot, are syntactically valid and may be deemed canonical."),(0,i.kt)("p",null,"The output of the consensus engine is also an input to the mining process. The consensus engine tells a node which blocks it should vote for in a newly proposed block: i.e., only those blocks that are visible and valid as of the time when it creates the block."),(0,i.kt)("p",null,"You can read much more about the mining process ",(0,i.kt)("a",{parentName:"p",href:"/docs/protocol/mining/overview"},"here"),"."),(0,i.kt)("a",{name:"validity"}),"### Block Validity in Spacemesh",(0,i.kt)("p",null,"There are two sets of validity rules for a proposed block: ",(0,i.kt)("em",{parentName:"p"},"syntactic validity")," and ",(0,i.kt)("em",{parentName:"p"},"contextual validity"),". A block is syntactically valid if it follows the rules of the protocol, is correctly constructed, and contains no invalid transactions. A syntactically valid block is also said to be contextually valid once the Tortoise declares it as such. This happens while the block receives enough votes in favor (in fact, when the difference between votes for and against passes the ",(0,i.kt)("em",{parentName:"p"},"irreversibility threshold).")),(0,i.kt)("p",null,"Why is there a need for two types of validity? Why not, for instance, allow all syntactically valid blocks to be contextually valid? The answer is that, due to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/protocol/overview#why-race-free"},"race free nature")," of the Spacemesh protocol, a miner may choose to publish a block later than they should (e.g., they were eligible to produce a block in layer 200, but they decide to actually publish the block in, say, layer 205). Since the published block is ",(0,i.kt)("em",{parentName:"p"},"syntactically valid,")," if the block were valid in the eyes of the protocol and of other nodes, it would cause a change to history and to the global network state, as new miners that join the network, for example, don't know when the block was actually published. We need to make sure that such blocks do not become part of the canonical ledger history: hence, even a ",(0,i.kt)("em",{parentName:"p"},"syntactically valid")," block may be deemed ",(0,i.kt)("em",{parentName:"p"},"contextually invalid")," if it wasn't published at the right time. Syntactically valid blocks form the mesh while contextually valid blocks form the ledger--or, put another way, the contextual validity of the blocks in the mesh (or lack thereof) is used to construct the ledger."),(0,i.kt)("p",null,"The purpose of the two consensus protocols, described below, is to determine which syntactically valid blocks are ",(0,i.kt)("em",{parentName:"p"},"also contextually valid."),' For this reason, the rest of this document is unconcerned with syntactic validity. For the purposes of the rest of this document, "valid" should be taken to mean "contextually valid." By the same token, "blocks" refers to syntactically valid blocks.'),(0,i.kt)("h3",{id:"phases"},"Phases"),(0,i.kt)("p",null,"Blockchain consensus and block production, in general (not in Spacemesh specifically), work in the following way:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Eligibility: There is a mechanism by which candidate block producers, i.e., miners, assert verifiably to the network that they are eligible to produce blocks. This serves as the network\u2019s Sybil resistance mechanism, which prevents the network from being overrun by a large number of candidate producers controlled by a single entity. To achieve strong Sybil resistance, there must be a cost associated both with establishing eligibility, and with maintaining ongoing eligibility."),(0,i.kt)("li",{parentName:"ol"},"Leader election: There is a mechanism by which the protocol selects one or more eligible candidate block producers to produce one or more blocks at a given block height."),(0,i.kt)("li",{parentName:"ol"},"Block production: Block producers elected by the protocol produce blocks at a given block height, according to the rules of the protocol, and distribute those blocks to the network."),(0,i.kt)("li",{parentName:"ol"},"Fork choice rule: There is a mechanism by which any node in the network, based only upon their view of the network at any given point in time, and all block data they\u2019ve received up to that point, can construct for themselves a canonical view of the blockchain data structure that is shared by other nodes with the same or similar views of the network at the same time. In concrete terms, a node must be able to decide on its own which set of blocks represent the canonical \u201clongest chain,\u201d and which transactions are included in that chain, in which order.")),(0,i.kt)("h3",{id:"proof-of-work-based-protocols"},"Proof-of-Work-based protocols"),(0,i.kt)("p",null,"For point of comparison, and since proof of work is relatively well understood and relatively easy to reason about, following is an abridged explanation of the mechanisms that Proof-of-Work-based chains, such as Bitcoin and Ethereum, use to address each of these phases."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Eligibility: All nodes are eligible to produce blocks at any block height, subject to the rules of the protocol, including the current PoW difficulty level and their ability to produce valid blocks accepted by the rest of the network. The cost of establishing and maintaining eligibility is the cost of the electricity that must be spent to participate in PoW mining. (Miners that don\u2019t meet this threshold and thus fail to ever produce a valid block are effectively \u201cinvisible\u201d from the perspective of mining.)"),(0,i.kt)("li",{parentName:"ol"},"Leader election: Leadership is implicitly associated with being the first node to successfully produce, and distribute, a valid block at a given block height. (Note that, in proof-of-work-based protocols, technically speaking block production happens ",(0,i.kt)("em",{parentName:"li"},"before")," leader election, since we only know if a block producer is eligible after they've successfully produced a block.)"),(0,i.kt)("li",{parentName:"ol"},"Block production: Each leader candidate may produce any block they wish as long as that block follows the rules of the protocol. For instance, it must refer to the previous block and must not contain any invalid transactions. In most cases, block producers will choose to produce a block that contains as many high-fee transactions as possible to maximize revenue, but note that even empty blocks are valid according to protocol rules."),(0,i.kt)("li",{parentName:"ol"},"Fork choice rule: The chain containing the most accumulated proof of work, measured as cumulative block difficulties up to the chain tip, is considered the current canonical chain. Note that this means finality in PoW is always probabilistic as there may always be another chain with greater total work than the current chain.")),(0,i.kt)("h3",{id:"proof-of-space-time"},"Proof of Space-time"),(0,i.kt)("p",null,"In contrast to PoW-based chains, Spacemesh employs a set of consensus mechanisms collectively referred to as ",(0,i.kt)("a",{parentName:"p",href:"/docs/protocol/mining/post"},"Proof of Space-time (PoST)"),". Here\u2019s how each mechanism functions to achieve consensus, at a high level."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Eligibility: Just as in PoW, all nodes are eligible to produce blocks in a permissionless fashion. In Spacemesh, however, instead of allocating CPU power, and by extension electricity, miners allocate hard disk space for a specified period of time. This allocation prevents Sybil attacks as explained above. To gain eligibility to produce blocks, a miner needs to send a ",(0,i.kt)("em",{parentName:"li"},"proof of space-time")," that asserts that the space-time resource was indeed allocated to the network. Then, once a new ",(0,i.kt)("a",{parentName:"li",href:"/docs/protocol/overview#spacemesh-basics"},"epoch")," starts they become active and are eligible to produce several blocks in that epoch. See ",(0,i.kt)("a",{parentName:"li",href:"/docs/protocol/mining/overview"},"Mining")," for details on how this process works."),(0,i.kt)("li",{parentName:"ol"},"Leader election: The protocol uses a ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Verifiable_random_function"},"Verifiable Random Function (VRF)")," to sample a set of miners eligible to produce blocks at each block height (the set of blocks at a given height is called a ",(0,i.kt)("a",{parentName:"li",href:"/docs/protocol/overview#spacemesh-basics"},"layer")," in Spacemesh terminology). Note that, unlike in PoW, ",(0,i.kt)("em",{parentName:"li"},"multiple")," miners are eligible to produce blocks at each layer."),(0,i.kt)("li",{parentName:"ol"},"Block production: Each miner eligible to produce a block in a given layer may optionally do so (but is not punished if it chooses not to). As in Bitcoin, the miner may include any set of valid transactions they like in that block, and an empty block is syntactically valid according to the protocol."),(0,i.kt)("li",{parentName:"ol"},"Fork choice rule: There are no forks in Spacemesh by design. The following section explains how and why this is the case.")),(0,i.kt)("h3",{id:"the-tortoise-and-the-hare"},"The Tortoise and the Hare"),(0,i.kt)("p",null,"Spacemesh employs two consensus mechanisms in parallel which together allow each node to determine the canonical set of blocks at each layer. The Tortoise and the Hare refer to the two independent, complementary consensus mechanisms that take as input a given node\u2019s view of all of the blocks it has seen as of a given layer and output a set of blocks deemed canonical by the protocol at that layer, i.e., a canonical ledger. The Tortoise is a slow, vote-based mechanism that requires each node to count the votes for and against each previous block, tallying these votes to eventually achieve consensus. However, it cannot run on the most recent layer since there are not yet any newer blocks voting on these blocks. This is where the Hare comes in."),(0,i.kt)("p",null,"Why do we need two consensus protocols? At the most basic level, we just want to make sure that each miner votes for blocks that arrived on time, so late blocks cannot change history. The solution is that each block votes for all the blocks that its producer saw on time."),(0,i.kt)("p",null,"The problem with this approach is that votes on adversarial blocks can become \"balanced,\" if an adversary makes sure that half the network receives a block on time and half doesn't. For this reason, it's important that all honest miners vote the same way: with a big enough honest majority, this balancing attack won't work."),(0,i.kt)("p",null,"In order to facilitate this, we run a permissionless Byzantine agreement protocol, the Hare, which outputs the set of blocks to be voted on. It bootstraps the Tortoise mechanism by allowing each node to quickly determine which recent blocks it should vote for. This helps the Tortoise quickly converge on the final, canonical ledger. The Hare runs on a random subset of nodes at every layer, producing a tentative, fast consensus on the set of canonical blocks that form that layer."),(0,i.kt)("h3",{id:"mesh-structure"},"Mesh Structure"),(0,i.kt)("p",null,"There are many blocks in every layer, and many transactions in every block. Each block includes a view that lists other blocks that are visible and valid according to the node that produced the block at the time the block was produced. As such, the overall structure of the mesh is a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Directed_acyclic_graph"},"directed acyclic graph (DAG)"),". There is furthermore a strict topological ordering to the blocks in a given layer, and to the transactions in each block. The valid blocks in the mesh (which are used to form the ledger) thus could form a chain. This strict ordering is necessary to determine transaction ordering, i.e., to turn the ",(0,i.kt)("em",{parentName:"p"},"mesh")," into a ledger. Blocks are ordered first by layer, then by block ID within a given layer. Transactions are ordered by block (i.e., the block in which they first appear), then by index within a block. If the same transaction appears in multiple blocks, it is counted only the first time it appears."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/protocol/transactions/overview#ordering"},"Transaction ordering")," for more information."),(0,i.kt)("h2",{id:"tortoise"},"Tortoise"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Tortoise protocol is the mechanism by which the Spacemesh network achieves final, eventual consensus on the set of blocks and transactions that form the canonical ledger. It\u2019s a relatively slow, vote-based mechanism that tallies votes for and against each block in majority-rule fashion. For this reason, it cannot be run on a recently-produced layer of blocks, since not enough votes have yet been collected that refer to the new layer. Therefore the output of the Hare consensus mechanism is used to bootstrap the Tortoise. See the Hare section, below, for information on how tentative consensus is achieved on recent layers."),(0,i.kt)("h3",{id:"voting"},"Voting"),(0,i.kt)("p",null,"Each time a miner produces a new block, they include in that block a \u201cvotes\u201d field that lists one or more previous blocks that the miner also considers valid at the time the block is produced. Each time a new block links to a given older block, the vote tally for that older block increases by one. Any block generated ",(0,i.kt)("em",{parentName:"p"},"after")," a given, older block that ",(0,i.kt)("em",{parentName:"p"},"doesn\u2019t")," vote for that block is ",(0,i.kt)("em",{parentName:"p"},"counted as a vote against the block.")," A vote is weighted proportional to the amount of space-time resources it represents: e.g., votes cast by a miner that has committed 200gb will count twice as much as votes cast by a miner that has committed 100gb to the protocol."),(0,i.kt)("h3",{id:"tallying-votes"},"Tallying votes"),(0,i.kt)("p",null,"The Tortoise protocol consists of a recursive algorithm that tallies all votes for and against each block, in majority-rule fashion: any block with a net tally greater than the irreversibility threshold becomes part of the canonical ledger. This tally algorithm may be run multiple times for a given layer until there is a clear majority voting in favor of a particular set of blocks in this layer, i.e., a majority so overwhelmingly large that it cannot be reversed because honest miners keep increasing it. At this point, the layer is finalized and set as the \u201cbest canonical layer.\u201d This process repeats itself every time new votes are received."),(0,i.kt)("h3",{id:"self-healing"},"Self-healing"),(0,i.kt)("p",null,"While the Tortoise protocol is very secure, it is fragile in the sense that its security depends upon assumptions about the protocol holding all the way from genesis. Over a long enough period of time, the likelihood of some event occurring that causes the protocol to fail approaches one. In order to recover from such a failure, Spacemesh includes a feature known as self-healing."),(0,i.kt)("p",null,"Self-healing works by having all honest nodes agree, at every layer, on a random coin toss. When the margin of votes cast for and against a given block is very narrow, honest nodes will rely on the outcome of the coin toss to decide whether or not to vote for the block in question. This allows all nodes to reconverge on the same consensus over time."),(0,i.kt)("h3",{id:"details"},"Details"),(0,i.kt)("p",null,"The Tortoise protocol is complex and the full details of the protocol are beyond the scope of this document. For more details on the protocol, including formal security proofs, see ",(0,i.kt)("a",{parentName:"p",href:"https://spacemesh.io/spacemesh-protocol-v1-0/"},"the full Spacemesh protocol paper"),"."),(0,i.kt)("h2",{id:"hare"},"Hare"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("p",null,"The Hare protocol is run once per layer. Its purpose is to allow each node to quickly determine the set of blocks in the layer to be voted for by ",(0,i.kt)("em",{parentName:"p"},"all honest miners.")),(0,i.kt)("p",null,"In contrast to the Tortoise protocol, the Hare protocol can achieve consensus rapidly on the network\u2019s shared view of the current data set, i.e., on which recently-proposed blocks should be considered valid and become candidates for finalization by the Tortoise. It does not rely on votes included in blocks, as the Tortoise does. In this way, the Hare protocol is used to bootstrap the consensus of the slower, eventual Tortoise mechanism by allowing nodes to rapidly decide which existing blocks they should vote for as they produce new blocks. It\u2019s a BFT-compatible algorithm that involves participation by a randomly-selected subset of the current set of eligible block producers, and achieves consensus in four rounds."),(0,i.kt)("p",null,"Each node internally runs the Hare protocol at the end of each layer. It passes in all of the blocks it received in time, randomly draws a role, and then participates by following the protocol. At the end of four rounds, the Hare outputs a set of blocks that should tentatively (i.e., until the Tortoise confirms them) be considered canonical for the layer in question."),(0,i.kt)("p",null,"When the node proposes a block in the future, it uses the output of the Hare, and includes votes (in the newly-proposed block) for blocks that the Hare confirmed, thus bootstrapping the Tortoise with the output of the Hare."),(0,i.kt)("h3",{id:"roles"},"Roles"),(0,i.kt)("p",null,"At the beginning of each round (rounds 0-4, as described in the following section), a miner draws a role that tells it whether it's ",(0,i.kt)("em",{parentName:"p"},"active")," (i.e., participating) or ",(0,i.kt)("em",{parentName:"p"},"passive")," (i.e., just observing) in this round. In order to draw a role, each miner uses a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Verifiable_random_function"},"Verifiable Random Function (VRF)")," and if the output passes some threshold (which depends on the number of total active miners) then it is active; otherwise the miner is passive for that round."),(0,i.kt)("p",null,"Miners change roles from round to round in order to prevent denial-of-service attacks against the Hare. If a miner kept the same role thoughout all of the rounds, then, after revealing their role in an earlier round, they could be targeted by an attack in subsequent rounds."),(0,i.kt)("p",null,"In round two (proposal round), a leader (with the ability to broadcast a proposal) is chosen. This also happens using a VRF, but as opposed to the assignment of active/passive roles as described above, even if a miner passes the required threshold before this round and subsequently sends a proposal, that miner is still not certain that it's the actual leader (since another miner may have drawn a lower number). There is, actually, just one leader, the one with the smallest VRF output, but this isn't known with certainty until the ",(0,i.kt)("em",{parentName:"p"},"end")," of the round."),(0,i.kt)("h3",{id:"rounds"},"Rounds"),(0,i.kt)("p",null,"The goal of the Hare protocol is to achieve consensus among all honest miners about which blocks to vote for (i.e., the set of valid blocks) in each layer. The protocol is based on ",(0,i.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2018/1028.pdf"},"ADDNR18")," with the difference that we want to achieve consensus on a set of values rather than a single bit value. The protocol takes place over four rounds, which are preceded by a pre-round:"),(0,i.kt)("ol",{start:0},(0,i.kt)("li",{parentName:"ol"},"Pre-round: each active participant shares their current view of blocks that are valid. At the end of the round, each then factors in the views shared by other participants and updates their view by removing blocks that didn't receive enough support from other participants."),(0,i.kt)("li",{parentName:"ol"},"Status round: each active participant broadcasts a status message reporting its updated view."),(0,i.kt)("li",{parentName:"ol"},"Proposal round: each active participant broadcasts a proposal to the group, based on the results of the previous round. One of these participants will be randomly chosen the leader."),(0,i.kt)("li",{parentName:"ol"},"Commit round: each active participant independently determines who was elected leader, reviews the proposal from this leader, and signals its willingness to commit to it to the group. By the end of this round, each participant that received a valid proposal from the leader (with no conflicting proposal broadcast by the leader) ",(0,i.kt)("em",{parentName:"li"},"and")," a sufficient number of commit messages from other participants creates a \u201ccommit certificate\u201d including all of this information."),(0,i.kt)("li",{parentName:"ol"},"Notify round: each active participant holding a commit certificate broadcasts it to the group. If a sufficient number of commit certificates are received from other participants, the protocol terminates and each participant knows the canonical set. (If not, the protocol returns to the Status round and iterates.)")),(0,i.kt)("h3",{id:"validity-rules"},"Validity rules"),(0,i.kt)("p",null,"Consensus can be said to be achieved when the following three conditions are satisfied:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"When the consensus mechanism terminates, every honest participant outputs the same set of canonical blocks."),(0,i.kt)("li",{parentName:"ol"},"If every honest party observed a given, valid block, then that block is included in the output set. Put another way, the output set contains the intersection of the valid blocks reported by all honest parties."),(0,i.kt)("li",{parentName:"ol"},"If no honest party observed a given block (or every honest party deemed it invalid), then that block is not included in the output set. Put another way, every block that makes it into the output set must have had at least one honest witness.")),(0,i.kt)("p",null,"Hopefully the intuition here is clear: Blocks submitted by ",(0,i.kt)("em",{parentName:"p"},"all")," honest miners definitely make it into the output set. Blocks submitted by ",(0,i.kt)("em",{parentName:"p"},"no")," honest miners do not."),(0,i.kt)("p",null,"What about blocks submitted by ",(0,i.kt)("em",{parentName:"p"},"some")," but not ",(0,i.kt)("em",{parentName:"p"},"all")," honest miners? The validity rules say nothing about this case, which is to say that they may or may not be included in the output set (depending how many honest miners saw it on time, and thus submitted it, and also upon the elected leader). This is by design, since the goal of the protocol is precisely to agree on the validity of such blocks. Since, according to validity rule #1, all honest participants agree upon the output set, based on the output set of the Hare they will ",(0,i.kt)("em",{parentName:"p"},"all")," vote for or against such a block in subsequent iterations of the Tortoise (regardless of whether or not they submitted the block as part of the Hare)."),(0,i.kt)("h3",{id:"details-1"},"Details"),(0,i.kt)("p",null,"The Hare protocol is somewhat more complicated than can be explained here. For more details, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/protocol/wiki/The-Hare-Protocol"},"The Hare Protocol"),". See also the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh/wiki/Hare-Protocol-Implementation"},"Hare Protocol Implementation Notes")," for information on how the protocol is implemented in go-spacemesh. Finally, for more formal proofs of these assertions, see ",(0,i.kt)("a",{parentName:"p",href:"https://spacemesh.io/spacemesh-protocol-v1-0/"},"the full Spacemesh protocol paper"),"."),(0,i.kt)("p",null,"Read on for more information on ",(0,i.kt)("a",{parentName:"p",href:"/docs/protocol/consensus/deepdive"},"Spacemesh consensus in the context of other consensus mechanisms"),"."))}h.isMDXComponent=!0}}]);