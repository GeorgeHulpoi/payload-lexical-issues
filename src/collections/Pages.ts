import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical';
import { CollectionConfig } from 'payload/types';

import QuoteBlock from '../blocks/Quote';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Pages: CollectionConfig = {
	slug: 'page',
	admin: {
		useAsTitle: 'title',
	},
	fields: [
		{
			name: 'title',
			type: 'text',
		},
		{
			name: 'content',
			type: 'richText',
			editor: lexicalEditor({
				features: ({ defaultFeatures }) => [
					...defaultFeatures,
					BlocksFeature({
						blocks: [QuoteBlock],
					}),
				],
			}),
		},
	],
};

export default Pages;
