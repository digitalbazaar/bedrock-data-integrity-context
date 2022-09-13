/*!
 * Copyright (c) 2022 Digital Bazaar, Inc. All rights reserved.
 */
import {jsonLdDocumentLoader} from '@bedrock/jsonld-document-loader';
import dataIntegrityContext from '@digitalbazaar/data-integrity-context';

const contextModules = [
  dataIntegrityContext
];

for(const {contexts} of contextModules) {
  for(const [contextUrl, context] of contexts) {
    jsonLdDocumentLoader.addStatic(contextUrl, context);
  }
}

const {constants} = dataIntegrityContext;
export {constants};
