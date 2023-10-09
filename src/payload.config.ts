import path from 'path';

import { webpackBundler } from '@payloadcms/bundler-webpack';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload/config';

import Pages from './collections/Pages';
import Toys from './collections/Toys';
import Users from './collections/Users';

export default buildConfig({
	serverURL: 'http://localhost:3000',
	admin: {
		user: Users.slug,
		bundler: webpackBundler(),
	},
	collections: [Users, Pages, Toys],
	db: mongooseAdapter({
		url: process.env.MONGODB_URI,
	}),
	editor: lexicalEditor({}),
	typescript: {
		outputFile: path.resolve(__dirname, 'payload-types.ts'),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
	},
});
