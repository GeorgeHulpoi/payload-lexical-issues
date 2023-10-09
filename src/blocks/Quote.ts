import { Block } from 'payload/types';

const QuoteBlock: Block = {
	slug: 'Quote',
	interfaceName: 'QuoteBlock',
	fields: [
		{
			name: 'toy',
			type: 'relationship',
			relationTo: 'toys',
		},
		{
			name: 'quoteText',
			type: 'text',
		},
	],
};

export default QuoteBlock;
