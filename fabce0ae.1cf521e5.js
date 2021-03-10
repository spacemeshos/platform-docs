(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{106:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return r})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return p}));var s=o(3),n=o(7),a=(o(0),o(109)),i={id:"overview",title:"Peer-to-Peer Networking",sidebar_label:"Peer to Peer"},r={unversionedId:"protocol/p2p/overview",id:"version-0.1.0/protocol/p2p/overview",isDocsHomePage:!1,title:"Peer-to-Peer Networking",description:"The Spacemesh protocol leads to the construction of a global, distributed ledger. As such, each Spacemesh node must receive, validate, and store all transactions created by all other Spacemesh nodes. Also, nodes participate in consensus and listen to PoET server results. This requires the nodes to have a communication infrastructure to transport messages across the network. For this, Spacemesh nodes use a custom-built peer-to-peer (P2P) protocol. Using P2P technology allows nodes to efficiently transmit messages without the need for a centralized message server.",source:"@site/versioned_docs/version-0.1.0/protocol/p2p/01-overview.md",slug:"/protocol/p2p/overview",permalink:"/docs/protocol/p2p/overview",editUrl:"https://github.com/spacemeshos/platform-docs/blob/main/versioned_docs/version-0.1.0/protocol/p2p/01-overview.md",version:"0.1.0",lastUpdatedBy:"Aviv Eyal",lastUpdatedAt:1615401804,sidebar_label:"Peer to Peer",sidebar:"version-0.1.0/someSidebar",previous:{title:"Spacemesh Protocol Documentation",permalink:"/docs/protocol/overview"},next:{title:"Consensus in Spacemesh",permalink:"/docs/protocol/consensus/overview"}},c=[{value:"What is P2P?",id:"what-is-p2p",children:[]},{value:"Building Blocks",id:"building-blocks",children:[{value:"Topology",id:"topology",children:[]},{value:"Bootstrap and Peer Discovery",id:"bootstrap-and-peer-discovery",children:[]},{value:"Message Broadcast",id:"message-broadcast",children:[]},{value:"Peer Authentication",id:"peer-authentication",children:[]}]},{value:"P2P in Spacemesh",id:"p2p-in-spacemesh",children:[{value:"Custom P2P stack",id:"custom-p2p-stack",children:[]},{value:"Identity",id:"identity",children:[]},{value:"Protocols, multiplex, and gossip",id:"protocols-multiplex-and-gossip",children:[]},{value:"Messages",id:"messages",children:[]},{value:"Peer Discovery",id:"peer-discovery",children:[]},{value:"Session Initiation",id:"session-initiation",children:[]}]}],l={toc:c};function p(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(s.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Spacemesh protocol leads to the construction of a global, distributed ledger. As such, each Spacemesh node must receive, validate, and store all transactions created by all other Spacemesh nodes. Also, nodes ",Object(a.b)("a",{parentName:"p",href:"/docs/protocol/consensus/overview"},"participate in consensus")," and listen to ",Object(a.b)("a",{parentName:"p",href:"/docs/protocol/mining/poet"},"PoET server")," results. This requires the nodes to have a communication infrastructure to transport messages across the network. For this, Spacemesh nodes use a custom-built peer-to-peer (P2P) protocol. Using P2P technology allows nodes to efficiently transmit messages without the need for a centralized message server."),Object(a.b)("h2",{id:"what-is-p2p"},"What is P2P?"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Peer-to-peer"},"Peer-to-peer")," is a distributed application architecture that allows sharing of data and resources among nodes, called peers, that are similarly privileged. This means that no single server or master node has any special capabilities, unlike in a client-server architecture."),Object(a.b)("p",null,"Historically, peer to peer technology has mainly been used for file sharing, as popularized by ",Object(a.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Napster"},"Napster"),", VoIP services like Skype and, more recently, ",Object(a.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/BitTorrent"},"BitTorrent"),". Other usage cases have emerged, including distributed file systems and of course blockchain technology."),Object(a.b)("p",null,"P2P is the perfect architecture for blockchain since it provides a means to connect to a network without relying upon a centralized server, enabling some of the core properties of blockchain including permissionlessness and censorship resistance."),Object(a.b)("h2",{id:"building-blocks"},"Building Blocks"),Object(a.b)("h3",{id:"topology"},"Topology"),Object(a.b)("p",null,"Each peer must discover and connect to one or more peers in order to pass messages to and from the network. Peer to peer architecture usually connects nodes in a mesh topology. Each node knows and communicates with some number of peers, but does not need to connect directly to all other nodes in the network in order to communicate with them (indeed, in any network of even modest size, this would quickly become impossible as the number of required connections grows exponentially). Specifically in the context of blockchain, it is in fact desirable that a single node ",Object(a.b)("em",{parentName:"p"},"not")," know too many other nodes (e.g., their IP address and port) in order that a malicious node could not discover and attack too many other nodes."),Object(a.b)("a",{name:"discovery"}),Object(a.b)("h3",{id:"bootstrap-and-peer-discovery"},"Bootstrap and Peer Discovery"),Object(a.b)("p",null,'Nodes need a mechanism, called discovery, that allows them to find and connect to peers. In order for a new node to discover peers and join the network, it needs to know the address of at least one other node (called a bootstrap node) at system startup. The new node queries the bootstrap node for a list of other nodes to connect to. After connecting to a bootstrap node, additional discovery takes place, where the newly added peers are queried for additional nodes as well. Each node maintains a local list of peers that it has learned of, known as an "address book": after the node is restarted, or if it loses a peer connection, it can refer to its address book to find peers to connect to, thus bypassing the bootstrap phase. Note that, in order to prevent an ',Object(a.b)("a",{parentName:"p",href:"https://www.radixdlt.com/post/what-is-an-eclipse-attack/"},"eclipse attack"),", it's important that a node regularly perform peer discovery with nodes that it's not currently connected to."),Object(a.b)("h3",{id:"message-broadcast"},"Message Broadcast"),Object(a.b)("p",null,"Nodes also need a way to exchange messages with other nodes. This usually involves broadcasting a message to every node in the network, and, in turn, receiving such broadcast messages, a subprotocol called ",Object(a.b)("a",{parentName:"p",href:"#gossip"},"gossip"),'. However, it is also useful to be able to exchange messages with a specific peer (usually, only one that the node is directly connected to, i.e., a "neighbor"). Therefore we need a messaging protocol that allows messages to traverse the network and reach all nodes, or one specific "neighbor" node.'),Object(a.b)("a",{name:"authentication"}),Object(a.b)("h3",{id:"peer-authentication"},"Peer Authentication"),Object(a.b)("p",null,"To prevent fraud and to prevent one node from performing malicious activities while masquerading as another node, we also require a peer authentication system. Similar to the mechanism that's used in cryptocurrency wallets, these systems are usually based on public-private keypairs. Each peer generates a keypair and advertises its public key (which may or may not be distinct from the keypair used in the wallet), which can be used to encrypt messages intended for it. The keys can also be used to sign messages to prove that they originated from the holder of the private key."),Object(a.b)("h2",{id:"p2p-in-spacemesh"},"P2P in Spacemesh"),Object(a.b)("p",null,"The Spacemesh network is an unstructured peer-to-peer network. Each peer both connects to other peers and also accepts incoming connections from peers."),Object(a.b)("h3",{id:"custom-p2p-stack"},"Custom P2P stack"),Object(a.b)("p",null,"Early on in the architecture process, we evaluated existing P2P stacks including the Ethereum stack and ",Object(a.b)("a",{parentName:"p",href:"https://github.com/libp2p"},"libp2p"),". We decided that these existing stacks were too tightly coupled to the respective protocols: for instance, the Ethereum P2P stack requires that all data be sent using a custom encoding called ",Object(a.b)("a",{parentName:"p",href:"https://github.com/ethereum/wiki/wiki/RLP"},"RLP"),", and libp2p necessitates use of ",Object(a.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Kademlia"},"Kademlia DHT"),", which is useful for file sharing but is not required by Spacemesh. We therefore decided to implement our own lightweight P2P stack. For more information on this decision process, see ",Object(a.b)("a",{parentName:"p",href:"https://medium.com/spacemesh/perfect-p2p-library-c559d1ca57dc"},"The search for the perfect p2p library")," (but note that some of the information, such as the discussion of the DHT, is outdated)."),Object(a.b)("h3",{id:"identity"},"Identity"),Object(a.b)("p",null,"Each peer is identified by the peer's unique P2P public key. This public key is used both to encrypt data in transit between peers, and for ",Object(a.b)("a",{parentName:"p",href:"#authentication"},"peer authentication"),". Note that this public key is not used outside of the P2P stack. The keypair that Spacemesh nodes use to identify themselves in the P2P network is distinct from both the keypair used in mining (signing blocks, ATXs, Hare messages, etc.) and the wallet keypair used to sign transactions."),Object(a.b)("p",null,"This is a privacy feature: P2P IDs are not considered private since anyone on the network can determine the IP address of any P2P ID. In this way, a miner can change their P2P ID as often as they like (and, e.g., reconnect to the P2P network using a new ID). While traffic analysis can to some extent be used to associate different IDs belonging to the same node, there are additional steps one can take to protect their privacy. We are exploring the use of features such as ",Object(a.b)("a",{parentName:"p",href:"https://arxiv.org/pdf/1701.04439.pdf"},"Dandelion")," in Spacemesh for this purpose."),Object(a.b)("h3",{id:"protocols-multiplex-and-gossip"},"Protocols, multiplex, and gossip"),Object(a.b)("p",null,"Spacemesh ",Object(a.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Multiplexing"},"multiplexes")," messages from many subprotocols (",Object(a.b)("inlineCode",{parentName:"p"},"gossip"),", ",Object(a.b)("inlineCode",{parentName:"p"},"discovery"),", ",Object(a.b)("inlineCode",{parentName:"p"},"hare"),", ",Object(a.b)("inlineCode",{parentName:"p"},"sync"),") over each peer connection. The P2P stack is agnostic to the format and contents of messages belonging to individual subprotocols."),Object(a.b)("h4",{id:"discovery"},"Discovery"),Object(a.b)("p",null,"The discovery subprotocol is used to ",Object(a.b)("a",{parentName:"p",href:"#discovery"},"discover new peers")," to connect to. It's implemented directly on top of the P2P layer."),Object(a.b)("h4",{id:"gossip"},"Gossip"),Object(a.b)("p",null,"In a blockchain protocol like Spacemesh, many types of data, including transactions and blocks, must traverse the network and reach every node. This is achieved using the Gossip subprotocol. Gossip allows each node to broadcast a message to the entire network, and also to forward on other gossip messages it receives. Gossip is implemented on top of the P2P layer."),Object(a.b)("p",null,"Each individual subprotocol must register an incoming message handler with the P2P stack. When a subprotocol receives and validates a gossip message, it may report back to the P2P stack that the message is valid, which allows the message to continue to propagate throughout the P2P network to the node's peers. This helps prevent DoS attacks by ensuring that bad data (blocks, transactions, etc.) don't traverse the network since honest nodes will never gossip them."),Object(a.b)("h4",{id:"hare"},"Hare"),Object(a.b)("p",null,"The Hare is one of the two main consensus engines in Spacemesh. As it involves message passing among nodes, and as all nodes need to receive these messages, it's implemented on top of the Gossip subprotocol. For more information, see ",Object(a.b)("a",{parentName:"p",href:"/docs/protocol/consensus/overview#hare"},"Hare"),"."),Object(a.b)("h4",{id:"sync"},"Sync"),Object(a.b)("p",null,"Unlike Gossip, the Sync subprotocol is used to exchange specific pieces of data with specific peers. For instance, when a new node comes online, it needs to fetch every layer, block, transaction, ATX, etc. since genesis. It does this by requesting all of the blocks for a given layer, then all of the transactions for a given block, etc., from its peers."),Object(a.b)("p",null,"The Sync subprotocol is also implemented directly on top of the P2P layer. For more information, see ",Object(a.b)("a",{parentName:"p",href:"/docs/protocol/sync/overview"},"Sync"),"."),Object(a.b)("h3",{id:"messages"},"Messages"),Object(a.b)("p",null,"Each message is signed using the sender's public key. In addition to the message data itself (the payload), it includes a subprotocol, a client version, a timestamp, the public key of the message originator, a network ID, whether the message is a request or a response, the request ID, and the type of message in the specified subprotocol. All messages are serialized on the wire using ",Object(a.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/External_Data_Representation"},"the XDR standard"),"."),Object(a.b)("p",null,'The subprotocol that generated the message then sends it to the P2P stack. It can either broadcast the message to all peers over the gossip network, or it can send the message to one directly-connected "neighbor" peer. Most subprotocols only broadcast messages, but the ',Object(a.b)("inlineCode",{parentName:"p"},"sync")," subprotocol sends messages to specific peers: for example, to respond to an incoming request for a specific block from a specific peer."),Object(a.b)("h3",{id:"peer-discovery"},"Peer Discovery"),Object(a.b)("p",null,"As ",Object(a.b)("a",{parentName:"p",href:"#discovery"},"described above"),", a peer performs an initial discovery process, called bootstrap, when it first comes online, then subsequently performs additional peer discovery to ensure it has a sufficiently large list of other nodes, and to prevent eclipse attacks."),Object(a.b)("p",null,"The following flow describes how a node requests a list of peers from another node:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The initiator must first send ping message, to verify that node is alive. The ping contains the node ID (public key), the sender's IP and port."),Object(a.b)("li",{parentName:"ol"},"The recipient responds to the ping with a pong message, of the same format as the ping, to validate this information. (In other words, the recipient ensures the intiator is indeed listening at the IP and port they advertised. This prevents reflective DoS attacks.)"),Object(a.b)("li",{parentName:"ol"},"The initiator then sends a ",Object(a.b)("inlineCode",{parentName:"li"},"getAddresses")," message, requesting a list of peers."),Object(a.b)("li",{parentName:"ol"},"The recipient responds with a list of additional peers: their node IDs, IP addresses, and ports.")),Object(a.b)("p",null,'Each node maintains an "address book" of known nodes. When it first starts up, or after a peer connection has been lost, it randomly chooses a peer from this address book to dial and attempt to initiate a new session with. This randomness is important to help prevent an eclipse attack. Actually, it doesn\'t choose completely randomly: a peer is less likely to attempt to reconnect to a node that it failed to connect to before.'),Object(a.b)("h3",{id:"session-initiation"},"Session Initiation"),Object(a.b)("p",null,"When two nodes connect for the first time, a secure P2P session needs to be established (using a TCP socket). To establish the session the initiator node first generates a handshake message containing its client version and the network ID it's trying to connect to. It then encrypts the message using a ",Object(a.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange"},"Diffie-Hellman")," shared secret key constructed using its own private key and the recipient's public key. It sends the message, and its public key, to the recipient."),Object(a.b)("p",null,"The recipient reconstucts the shared secret key, using its private key and the initator's public key, uses it to decrypt the handshake message, and checks the initiator's client version and network ID. If everything checks out, it responds to the handshake message and a session is established; if not, the TCP connection is closed and no further information is exchanged."))}p.isMDXComponent=!0},109:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return b}));var s=o(0),n=o.n(s);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,s)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,s,n=function(e,t){if(null==e)return{};var o,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)o=a[s],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)o=a[s],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var o=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(o),u=s,b=d["".concat(i,".").concat(u)]||d[u]||h[u]||a;return o?n.a.createElement(b,r(r({ref:t},l),{},{components:o})):n.a.createElement(b,r({ref:t},l))}));function b(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=o.length,i=new Array(a);i[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var l=2;l<a;l++)i[l]=o[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"}}]);