/*!
 * Copyright (c) 2022-2024 Digital Bazaar, Inc. All rights reserved.
 */
import * as dataIntegrityContext from '@digitalbazaar/data-integrity-context';
import {jsonLdDocumentLoader} from '@bedrock/jsonld-document-loader';

jsonLdDocumentLoader.addDocuments({documents: dataIntegrityContext.contexts});

export const {constants} = dataIntegrityContext;
