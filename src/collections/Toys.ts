import type { CollectionConfig } from 'payload/types';

const Toys: CollectionConfig = {
	slug: 'toys',
	fields: [
		{
			name: 'id',
			type: 'text',
			unique: true,
			index: true,
			required: true,
		},
		{
			name: 'name',
			type: 'text',
		},
		{
			name: 'color',
			type: 'text',
		},
	],
};

export default Toys;
