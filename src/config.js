System.config({
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ],
    "blacklist": [],
    "stage": 1
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "ampersand-collection": "npm:ampersand-collection@1.6.1",
    "ampersand-collection-lodash-mixin": "npm:ampersand-collection-lodash-mixin@2.0.1",
    "ampersand-collection-rest-mixin": "npm:ampersand-collection-rest-mixin@4.2.0",
    "ampersand-model": "npm:ampersand-model@5.0.3",
    "ampersand-state": "npm:ampersand-state@4.9.1",
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "bluebird": "npm:bluebird@2.10.2",
    "bows": "npm:bows@1.4.8",
    "core-js": "npm:core-js@0.9.18",
    "jsx": "github:floatdrop/plugin-jsx@1.1.0",
    "lodash": "npm:lodash@3.10.1",
    "react": "npm:react@0.14.7",
    "github:floatdrop/plugin-jsx@1.1.0": {
      "react-tools": "npm:react-tools@0.13.3"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:acorn@1.2.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ampersand-class-extend@1.0.2": {
      "lodash.assign": "npm:lodash.assign@3.2.0"
    },
    "npm:ampersand-collection-lodash-mixin@2.0.1": {
      "ampersand-version": "npm:ampersand-version@1.0.2",
      "lodash.countby": "npm:lodash.countby@3.1.1",
      "lodash.difference": "npm:lodash.difference@3.2.2",
      "lodash.drop": "npm:lodash.drop@3.0.0",
      "lodash.every": "npm:lodash.every@3.2.3",
      "lodash.filter": "npm:lodash.filter@3.1.1",
      "lodash.find": "npm:lodash.find@3.2.1",
      "lodash.foreach": "npm:lodash.foreach@3.0.3",
      "lodash.groupby": "npm:lodash.groupby@3.1.1",
      "lodash.includes": "npm:lodash.includes@3.1.3",
      "lodash.indexby": "npm:lodash.indexby@3.1.1",
      "lodash.indexof": "npm:lodash.indexof@3.0.3",
      "lodash.initial": "npm:lodash.initial@3.0.0",
      "lodash.invoke": "npm:lodash.invoke@3.2.3",
      "lodash.isempty": "npm:lodash.isempty@3.0.4",
      "lodash.isfunction": "npm:lodash.isfunction@3.0.7",
      "lodash.lastindexof": "npm:lodash.lastindexof@3.0.2",
      "lodash.map": "npm:lodash.map@3.1.4",
      "lodash.max": "npm:lodash.max@3.4.0",
      "lodash.min": "npm:lodash.min@3.4.0",
      "lodash.partition": "npm:lodash.partition@3.1.1",
      "lodash.reduce": "npm:lodash.reduce@3.1.2",
      "lodash.reduceright": "npm:lodash.reduceright@3.1.2",
      "lodash.reject": "npm:lodash.reject@3.1.1",
      "lodash.rest": "npm:lodash.rest@3.0.0",
      "lodash.sample": "npm:lodash.sample@3.1.0",
      "lodash.shuffle": "npm:lodash.shuffle@3.1.0",
      "lodash.some": "npm:lodash.some@3.2.3",
      "lodash.sortby": "npm:lodash.sortby@3.1.5",
      "lodash.take": "npm:lodash.take@3.0.0",
      "lodash.without": "npm:lodash.without@3.2.1"
    },
    "npm:ampersand-collection-rest-mixin@4.2.0": {
      "ampersand-sync": "npm:ampersand-sync@3.0.7",
      "ampersand-version": "npm:ampersand-version@1.0.2",
      "lodash.assign": "npm:lodash.assign@3.2.0"
    },
    "npm:ampersand-collection@1.6.1": {
      "ampersand-class-extend": "npm:ampersand-class-extend@1.0.2",
      "ampersand-events": "npm:ampersand-events@1.1.1",
      "ampersand-version": "npm:ampersand-version@1.0.2",
      "lodash.assign": "npm:lodash.assign@3.2.0",
      "lodash.bind": "npm:lodash.bind@3.1.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:ampersand-events@1.1.1": {
      "ampersand-version": "npm:ampersand-version@1.0.2",
      "lodash.assign": "npm:lodash.assign@3.2.0",
      "lodash.bind": "npm:lodash.bind@3.1.0",
      "lodash.foreach": "npm:lodash.foreach@3.0.3",
      "lodash.isempty": "npm:lodash.isempty@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2",
      "lodash.once": "npm:lodash.once@3.0.1",
      "lodash.uniqueid": "npm:lodash.uniqueid@3.1.1"
    },
    "npm:ampersand-model@5.0.3": {
      "ampersand-state": "npm:ampersand-state@4.9.1",
      "ampersand-sync": "npm:ampersand-sync@3.0.7",
      "ampersand-version": "npm:ampersand-version@1.0.2",
      "lodash.assign": "npm:lodash.assign@3.2.0",
      "lodash.clone": "npm:lodash.clone@3.0.3",
      "lodash.isobject": "npm:lodash.isobject@3.0.2",
      "lodash.result": "npm:lodash.result@3.1.2"
    },
    "npm:ampersand-state@4.9.1": {
      "ampersand-events": "npm:ampersand-events@1.1.1",
      "ampersand-version": "npm:ampersand-version@1.0.2",
      "array-next": "npm:array-next@0.0.1",
      "key-tree-store": "npm:key-tree-store@1.3.0",
      "lodash.assign": "npm:lodash.assign@3.2.0",
      "lodash.bind": "npm:lodash.bind@3.1.0",
      "lodash.escape": "npm:lodash.escape@3.1.1",
      "lodash.forown": "npm:lodash.forown@3.0.2",
      "lodash.has": "npm:lodash.has@3.2.1",
      "lodash.includes": "npm:lodash.includes@3.1.3",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.isdate": "npm:lodash.isdate@3.0.2",
      "lodash.isequal": "npm:lodash.isequal@3.0.4",
      "lodash.isfunction": "npm:lodash.isfunction@3.0.7",
      "lodash.isobject": "npm:lodash.isobject@3.0.2",
      "lodash.isstring": "npm:lodash.isstring@3.0.1",
      "lodash.omit": "npm:lodash.omit@3.1.0",
      "lodash.result": "npm:lodash.result@3.1.2",
      "lodash.union": "npm:lodash.union@3.1.0",
      "lodash.uniqueid": "npm:lodash.uniqueid@3.1.1"
    },
    "npm:ampersand-sync@3.0.7": {
      "ampersand-version": "npm:ampersand-version@1.0.2",
      "lodash.assign": "npm:lodash.assign@3.2.0",
      "lodash.defaults": "npm:lodash.defaults@3.1.2",
      "lodash.includes": "npm:lodash.includes@3.1.3",
      "lodash.result": "npm:lodash.result@3.1.2",
      "qs": "npm:qs@2.4.2",
      "xhr": "npm:xhr@1.17.1"
    },
    "npm:ampersand-version@1.0.2": {
      "find-root": "npm:find-root@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "through2": "npm:through2@0.6.5"
    },
    "npm:array-next@0.0.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:asn1.js@4.3.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.9.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bluebird@2.10.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bn.js@4.9.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:bows@1.4.8": {
      "andlog": "npm:andlog@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:brace-expansion@1.1.2": {
      "balanced-match": "npm:balanced-match@0.3.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.0": {
      "bn.js": "npm:bn.js@4.9.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.2"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.9.0",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.2",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:commander@2.9.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:commoner@0.10.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "commander": "npm:commander@2.9.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "detective": "npm:detective@4.3.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.15",
      "graceful-fs": "npm:graceful-fs@4.1.2",
      "iconv-lite": "npm:iconv-lite@0.4.13",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "q": "npm:q@1.4.1",
      "recast": "npm:recast@0.10.43",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.9.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.2"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.2"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:detective@4.3.1": {
      "acorn": "npm:acorn@1.2.2",
      "defined": "npm:defined@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.9.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@6.2.2": {
      "bn.js": "npm:bn.js@4.9.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esprima-fb@15001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:fbjs@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:find-root@0.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:for-each@0.3.2": {
      "is-function": "npm:is-function@1.0.1"
    },
    "npm:glob@5.0.15": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.0",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:global@4.3.0": {
      "min-document": "npm:min-document@2.18.0",
      "process": "npm:process@0.5.2"
    },
    "npm:graceful-fs@4.1.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:is-function@1.0.1": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:lodash._baseassign@3.2.0": {
      "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash._basecallback@3.3.1": {
      "lodash._baseisequal": "npm:lodash._baseisequal@3.0.7",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.pairs": "npm:lodash.pairs@3.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._baseclone@3.3.0": {
      "lodash._arraycopy": "npm:lodash._arraycopy@3.0.0",
      "lodash._arrayeach": "npm:lodash._arrayeach@3.0.0",
      "lodash._baseassign": "npm:lodash._baseassign@3.2.0",
      "lodash._basefor": "npm:lodash._basefor@3.0.3",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash._basedifference@3.0.3": {
      "lodash._baseindexof": "npm:lodash._baseindexof@3.1.0",
      "lodash._cacheindexof": "npm:lodash._cacheindexof@3.0.2",
      "lodash._createcache": "npm:lodash._createcache@3.1.2"
    },
    "npm:lodash._baseeach@3.0.4": {
      "lodash.keys": "npm:lodash.keys@3.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._baseeachright@3.0.3": {
      "lodash._baseforright": "npm:lodash._baseforright@3.0.2",
      "lodash.keys": "npm:lodash.keys@3.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._basefilter@3.0.0": {
      "lodash._baseeach": "npm:lodash._baseeach@3.0.4"
    },
    "npm:lodash._baseflatten@3.1.4": {
      "lodash.isarguments": "npm:lodash.isarguments@3.0.5",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash._baseforright@3.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._baseget@3.7.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._baseisequal@3.0.7": {
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.istypedarray": "npm:lodash.istypedarray@3.0.3",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash._baseuniq@3.0.3": {
      "lodash._baseindexof": "npm:lodash._baseindexof@3.1.0",
      "lodash._cacheindexof": "npm:lodash._cacheindexof@3.0.2",
      "lodash._createcache": "npm:lodash._createcache@3.1.2"
    },
    "npm:lodash._binaryindex@3.0.1": {
      "lodash._binaryindexby": "npm:lodash._binaryindexby@3.0.3"
    },
    "npm:lodash._createaggregator@3.0.0": {
      "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.4",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash._createassigner@3.1.1": {
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash._createcache@3.1.2": {
      "lodash._getnative": "npm:lodash._getnative@3.9.1"
    },
    "npm:lodash._createwrapper@3.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._invokepath@3.7.2": {
      "lodash._baseget": "npm:lodash._baseget@3.7.2",
      "lodash._baseslice": "npm:lodash._baseslice@3.0.3",
      "lodash._topath": "npm:lodash._topath@3.8.1",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._pickbyarray@3.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._pickbycallback@3.0.0": {
      "lodash._basefor": "npm:lodash._basefor@3.0.3",
      "lodash.keysin": "npm:lodash.keysin@3.0.8"
    },
    "npm:lodash._toiterable@3.0.4": {
      "lodash._basevalues": "npm:lodash._basevalues@3.0.0",
      "lodash.keys": "npm:lodash.keys@3.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._topath@3.8.1": {
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.assign@3.2.0": {
      "lodash._baseassign": "npm:lodash._baseassign@3.2.0",
      "lodash._createassigner": "npm:lodash._createassigner@3.1.1",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.bind@3.1.0": {
      "lodash._createwrapper": "npm:lodash._createwrapper@3.1.0",
      "lodash._replaceholders": "npm:lodash._replaceholders@3.0.0",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash.clone@3.0.3": {
      "lodash._baseclone": "npm:lodash._baseclone@3.3.0",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9"
    },
    "npm:lodash.countby@3.1.1": {
      "lodash._createaggregator": "npm:lodash._createaggregator@3.0.0",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.defaults@3.1.2": {
      "lodash.assign": "npm:lodash.assign@3.2.0",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash.difference@3.2.2": {
      "lodash._basedifference": "npm:lodash._basedifference@3.0.3",
      "lodash._baseflatten": "npm:lodash._baseflatten@3.1.4",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash.drop@3.0.0": {
      "lodash._baseslice": "npm:lodash._baseslice@3.0.3",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9"
    },
    "npm:lodash.escape@3.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.every@3.2.3": {
      "lodash._arrayevery": "npm:lodash._arrayevery@3.0.0",
      "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.4",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.filter@3.1.1": {
      "lodash._arrayfilter": "npm:lodash._arrayfilter@3.0.0",
      "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
      "lodash._basefilter": "npm:lodash._basefilter@3.0.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.find@3.2.1": {
      "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.4",
      "lodash._basefind": "npm:lodash._basefind@3.0.0",
      "lodash._basefindindex": "npm:lodash._basefindindex@3.6.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.foreach@3.0.3": {
      "lodash._arrayeach": "npm:lodash._arrayeach@3.0.0",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.4",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash.forown@3.0.2": {
      "lodash._basefor": "npm:lodash._basefor@3.0.3",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.groupby@3.1.1": {
      "lodash._createaggregator": "npm:lodash._createaggregator@3.0.0",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.has@3.2.1": {
      "lodash._baseget": "npm:lodash._baseget@3.7.2",
      "lodash._baseslice": "npm:lodash._baseslice@3.0.3",
      "lodash._topath": "npm:lodash._topath@3.8.1",
      "lodash.isarguments": "npm:lodash.isarguments@3.0.5",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.includes@3.1.3": {
      "lodash._baseindexof": "npm:lodash._baseindexof@3.1.0",
      "lodash._basevalues": "npm:lodash._basevalues@3.0.0",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.isstring": "npm:lodash.isstring@3.0.1",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.indexby@3.1.1": {
      "lodash._createaggregator": "npm:lodash._createaggregator@3.0.0",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.indexof@3.0.3": {
      "lodash._baseindexof": "npm:lodash._baseindexof@3.1.0",
      "lodash._binaryindex": "npm:lodash._binaryindex@3.0.1"
    },
    "npm:lodash.initial@3.0.0": {
      "lodash._baseslice": "npm:lodash._baseslice@3.0.3",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9"
    },
    "npm:lodash.invoke@3.2.3": {
      "lodash._baseeach": "npm:lodash._baseeach@3.0.4",
      "lodash._invokepath": "npm:lodash._invokepath@3.7.2",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.restparam": "npm:lodash.restparam@3.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.isempty@3.0.4": {
      "lodash.isarguments": "npm:lodash.isarguments@3.0.5",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.isfunction": "npm:lodash.isfunction@3.0.7",
      "lodash.isstring": "npm:lodash.isstring@3.0.1",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.isequal@3.0.4": {
      "lodash._baseisequal": "npm:lodash._baseisequal@3.0.7",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1"
    },
    "npm:lodash.keys@3.1.2": {
      "lodash._getnative": "npm:lodash._getnative@3.9.1",
      "lodash.isarguments": "npm:lodash.isarguments@3.0.5",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash.keysin@3.0.8": {
      "lodash.isarguments": "npm:lodash.isarguments@3.0.5",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash.lastindexof@3.0.2": {
      "lodash._binaryindex": "npm:lodash._binaryindex@3.0.1"
    },
    "npm:lodash.map@3.1.4": {
      "lodash._arraymap": "npm:lodash._arraymap@3.0.0",
      "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.4",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.max@3.4.0": {
      "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.4",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash._toiterable": "npm:lodash._toiterable@3.0.4",
      "lodash.gt": "npm:lodash.gt@3.9.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.min@3.4.0": {
      "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.4",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash._toiterable": "npm:lodash._toiterable@3.0.4",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2",
      "lodash.lt": "npm:lodash.lt@3.9.0"
    },
    "npm:lodash.omit@3.1.0": {
      "lodash._arraymap": "npm:lodash._arraymap@3.0.0",
      "lodash._basedifference": "npm:lodash._basedifference@3.0.3",
      "lodash._baseflatten": "npm:lodash._baseflatten@3.1.4",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash._pickbyarray": "npm:lodash._pickbyarray@3.0.2",
      "lodash._pickbycallback": "npm:lodash._pickbycallback@3.0.0",
      "lodash.keysin": "npm:lodash.keysin@3.0.8",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash.once@3.0.1": {
      "lodash.before": "npm:lodash.before@3.0.3"
    },
    "npm:lodash.pairs@3.0.1": {
      "lodash.keys": "npm:lodash.keys@3.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.partition@3.1.1": {
      "lodash._createaggregator": "npm:lodash._createaggregator@3.0.0",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.reduce@3.1.2": {
      "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.4",
      "lodash._basereduce": "npm:lodash._basereduce@3.0.2",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.reduceright@3.1.2": {
      "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
      "lodash._baseeachright": "npm:lodash._baseeachright@3.0.3",
      "lodash._basereduce": "npm:lodash._basereduce@3.0.2",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.reject@3.1.1": {
      "lodash._arrayfilter": "npm:lodash._arrayfilter@3.0.0",
      "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
      "lodash._basefilter": "npm:lodash._basefilter@3.0.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.rest@3.0.0": {
      "lodash._baseslice": "npm:lodash._baseslice@3.0.3",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9"
    },
    "npm:lodash.result@3.1.2": {
      "lodash._baseget": "npm:lodash._baseget@3.7.2",
      "lodash._baseslice": "npm:lodash._baseslice@3.0.3",
      "lodash._topath": "npm:lodash._topath@3.8.1",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.isfunction": "npm:lodash.isfunction@3.0.7",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.sample@3.1.0": {
      "lodash._baserandom": "npm:lodash._baserandom@3.0.1",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash._toiterable": "npm:lodash._toiterable@3.0.4",
      "lodash.toarray": "npm:lodash.toarray@3.0.2",
      "lodash.values": "npm:lodash.values@3.0.0"
    },
    "npm:lodash.shuffle@3.1.0": {
      "lodash.sample": "npm:lodash.sample@3.1.0"
    },
    "npm:lodash.some@3.2.3": {
      "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.4",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.sortby@3.1.5": {
      "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
      "lodash._basecompareascending": "npm:lodash._basecompareascending@3.0.2",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.4",
      "lodash._basesortby": "npm:lodash._basesortby@3.0.0",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.take@3.0.0": {
      "lodash._baseslice": "npm:lodash._baseslice@3.0.3",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9"
    },
    "npm:lodash.toarray@3.0.2": {
      "lodash._arraycopy": "npm:lodash._arraycopy@3.0.0",
      "lodash._basevalues": "npm:lodash._basevalues@3.0.0",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.union@3.1.0": {
      "lodash._baseflatten": "npm:lodash._baseflatten@3.1.4",
      "lodash._baseuniq": "npm:lodash._baseuniq@3.0.3",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash.uniqueid@3.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.values@3.0.0": {
      "lodash._basevalues": "npm:lodash._basevalues@3.0.0",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.without@3.2.1": {
      "lodash._basedifference": "npm:lodash._basedifference@3.0.3",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.9.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:min-document@2.18.0": {
      "dom-walk": "npm:dom-walk@0.1.1"
    },
    "npm:minimatch@3.0.0": {
      "brace-expansion": "npm:brace-expansion@1.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:once@1.3.3": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.3.0",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:parse-headers@2.0.1": {
      "for-each": "npm:for-each@0.3.2",
      "trim": "npm:trim@0.0.1"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-is-absolute@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.9.0",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.2"
    },
    "npm:q@1.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-tools@0.13.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commoner": "npm:commoner@0.10.4",
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react@0.14.6": {
      "fbjs": "npm:fbjs@0.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react@0.14.7": {
      "fbjs": "npm:fbjs@0.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.0.33": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:recast@0.10.43": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.8.15",
      "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.3"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.0.33"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through2@0.6.5": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:xhr@1.17.1": {
      "global": "npm:global@4.3.0",
      "once": "npm:once@1.1.1",
      "parse-headers": "npm:parse-headers@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});

