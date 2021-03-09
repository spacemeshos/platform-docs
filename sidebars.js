// sidebar for next version
module.exports = {
  someSidebar: {
        'Platform' : ['platform'],
        'Protoocl': [
            'protocol/overview',
            'protocol/p2p/overview',
            {'Consensus': ['protocol/consensus/overview', 'protocol/consensus/deepdive']},
            {'Hare': ['protocol/hare/overview', 'protocol/hare/faq']},
            {'Mining': ['protocol/mining/overview', 'protocol/mining/post', 'protocol/mining/poet', 'protocol/mining/activations']},
            'protocol/sync/overview',
            'protocol/transactions/overview'
        ],
        'API': ['api/overview']
    }
};
