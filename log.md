$ WS_URL=wss://poc-1.polkadot.io:9944 yarn run start
yarn run v0.24.6
(node:8770) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
$ cd packages/apps && webpack-serve --config webpack.config.js --port 3000 
ℹ ｢hot｣: webpack: Compiling...
ℹ ｢hot｣: WebSocket Server Listening at localhost:8081
ℹ ｢serve｣: Project is running at http://localhost:3000
ℹ ｢serve｣: Server URI copied to clipboard
ℹ ｢hot｣: webpack: Compiling Done
✖ ｢wdm｣: Hash: f30195d834e27b082283
Version: webpack 4.12.0
Time: 20507ms
Built at: 06/11/2018 6:38:24 PM
               Asset       Size   Chunks                    Chunk Names
    main.f30195d8.js   1.23 MiB     main  [emitted]  [big]  main
 runtime.f30195d8.js   30.9 KiB  runtime  [emitted]         runtime
  vendor.26edeb9c.js    148 KiB   vendor  [emitted]         vendor
          index.html  684 bytes           [emitted]         
locales/en/apps.json    3 bytes           [emitted]         
       manifest.json  337 bytes           [emitted]         
         favicon.ico   37.2 KiB           [emitted]         
Entrypoint main [big] = runtime.f30195d8.js vendor.26edeb9c.js main.f30195d8.js
[../../node_modules/@babel/runtime/helpers/interopRequireDefault.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/runtime/helpers/interopRequireDefault.js 145 bytes {main} [built]
[../../node_modules/webpack-hot-client/client/index.js?6abaf5e8-325a-46c6-a927-104ae93c50e3] (webpack)-hot-client/client?6abaf5e8-325a-46c6-a927-104ae93c50e3 2.47 KiB {main} [built]
[../../node_modules/webpack-hot-client/client/log.js] (webpack)-hot-client/client/log.js 2.4 KiB {main} [built]
[../../node_modules/webpack-hot-client/client/socket.js] (webpack)-hot-client/client/socket.js 1.39 KiB {main} [built]
[../../node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {main} [built]
[../ui-app/src/index.js] 1.47 KiB {main} [built]
[../ui-signer/src/index.js] 1.64 KiB {main} [built]
[./src/Connecting/index.js] 1.73 KiB {main} [built]
[0] multi ./src/index.js 28 bytes {main} [built]
[./src/Content/index.js] 1.63 KiB {main} [built]
[./src/NodeInfo.js] 2.24 KiB {main} [built]
[./src/SideBar/index.js] 2.37 KiB {main} [built]
[./src/index.css] 1.27 KiB {main} [built]
[./src/index.js] 1.66 KiB {main} [built]
[2] multi webpack-hot-client/client?6abaf5e8-325a-46c6-a927-104ae93c50e3 ./src/index.js 40 bytes {main} [built]
    + 433 hidden modules

ERROR in ./src/SideBar/SideBar.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!./src/SideBar/SideBar.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ./src/SideBar/SideBar.css 2:14-157 21:1-42:3 21:155-42:2 22:19-162
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-extrinsics/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-extrinsics/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-addresses/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-addresses/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-vanitygen/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-vanitygen/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputAddress/InputAddress.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/InputAddress/InputAddress.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/InputAddress/InputAddress.css 2:14-162 21:1-42:3 21:160-42:2 22:19-167
 @ ../ui-app/src/InputAddress/index.js
 @ ../app-toolbox/src/Sign.js
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/InputExtrinsic.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/InputExtrinsic/InputExtrinsic.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/InputExtrinsic/InputExtrinsic.css 2:14-164 21:1-42:3 21:162-42:2 22:19-169
 @ ../ui-app/src/InputRpc/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-accounts/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-accounts/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/SideBar/Item.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!./src/SideBar/Item.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ./src/SideBar/Item.css 2:14-154 21:1-42:3 21:152-42:2 22:19-159
 @ ./src/SideBar/Item.js
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Button.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/Button/Button.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/Button/Button.css 2:14-156 21:1-42:3 21:154-42:2 22:19-161
 @ ../ui-app/src/Button/index.js
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/styles/semantic.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/styles/semantic.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/styles/semantic.css 2:14-158 21:1-42:3 21:156-42:2 22:19-163
 @ ../ui-app/src/styles.js
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/styles/app.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/styles/app.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/styles/app.css 2:14-153 21:1-42:3 21:151-42:2 22:19-158
 @ ../ui-app/src/styles.js
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/styles/form.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/styles/form.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/styles/form.css 2:14-154 21:1-42:3 21:152-42:2 22:19-159
 @ ../ui-app/src/styles.js
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/styles/rx.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/styles/rx.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/styles/rx.css 2:14-152 21:1-42:3 21:150-42:2 22:19-157
 @ ../ui-app/src/styles.js
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/styles/components.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/styles/components.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/styles/components.css 2:14-160 21:1-42:3 21:158-42:2 22:19-165
 @ ../ui-app/src/styles.js
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Params.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/Params/Params.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/Params/Params.css 2:14-156 21:1-42:3 21:154-42:2 22:19-161
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-signer/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-signer/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BlockHeader/BlockHeader.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-explorer/src/BlockHeader/BlockHeader.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-explorer/src/BlockHeader/BlockHeader.css 2:14-161 21:1-42:3 21:159-42:2 22:19-166
 @ ../app-explorer/src/BlockHeader/index.js
 @ ../app-explorer/src/BlockHeaders.js
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-storage/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-storage/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-explorer/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-explorer/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/options/KeyPair.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-keyring/src/options/KeyPair.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-keyring/src/options/KeyPair.css 2:14-157 21:1-42:3 21:155-42:2 22:19-162
 @ ../ui-keyring/src/options/KeyPair.js
 @ ../ui-keyring/src/options/item.js
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-toolbox/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-toolbox/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-rpc/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-rpc/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/NotFound/NotFound.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!./src/NotFound/NotFound.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ./src/NotFound/NotFound.css 2:14-158 21:1-42:3 21:156-42:2 22:19-163
 @ ./src/NotFound/index.js
 @ ./src/routing/unknown.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/Content/Content.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!./src/Content/Content.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ./src/Content/Content.css 2:14-157 21:1-42:3 21:155-42:2 22:19-162
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/Connecting/Connecting.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!./src/Connecting/Connecting.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ./src/Connecting/Connecting.css 2:14-160 21:1-42:3 21:158-42:2 22:19-165
 @ ./src/Connecting/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react/src/IdentityIcon/IdentityIcon.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-react/src/IdentityIcon/IdentityIcon.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-react/src/IdentityIcon/IdentityIcon.css 2:14-162 21:1-42:3 21:160-42:2 22:19-167
 @ ../ui-react/src/IdentityIcon/index.js
 @ ../ui-keyring/src/options/KeyPair.js
 @ ../ui-keyring/src/options/item.js
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!./src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ./src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Api.js
Module not found: Error: Can't resolve '@polkadot/api-provider/ws' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Api.js 18:33-69
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Api.js
Module not found: Error: Can't resolve '@polkadot/api-rx' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Api.js 20:36-63
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Api.js
Module not found: Error: Can't resolve '@polkadot/api-rx/defaults' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Api.js 22:39-75
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Selection.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Selection.js 16:41-72
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Params/Proposal.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src/Params'
 @ ../app-extrinsics/src/Params/Proposal.js 12:41-72
 @ ../app-extrinsics/src/Params/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Params/Call.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src/Params'
 @ ../app-extrinsics/src/Params/Call.js 12:41-72
 @ ../app-extrinsics/src/Params/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/SelectMethod.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic'
 @ ../ui-app/src/InputExtrinsic/SelectMethod.js 12:41-72
 @ ../ui-app/src/InputExtrinsic/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/index.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic'
 @ ../ui-app/src/InputExtrinsic/index.js 16:41-72
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/options/section.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic/options'
 @ ../ui-app/src/InputExtrinsic/options/section.js 14:41-72
 @ ../ui-app/src/InputExtrinsic/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/options/method.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic/options'
 @ ../ui-app/src/InputExtrinsic/options/method.js 16:41-72
 @ ../ui-app/src/InputExtrinsic/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Extrinsic.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Extrinsic.js 20:41-72
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/sign.js
Module not found: Error: Can't resolve '@polkadot/extrinsics-codec/encode/call' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/sign.js 10:35-84
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Extrinsic.js
Module not found: Error: Can't resolve '@polkadot/extrinsics-codec/encode/extrinsic' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Extrinsic.js 18:40-94
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Selection.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Selection.js 18:38-66
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/Selection.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/Selection.js 20:38-66
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/SelectMethod.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc'
 @ ../ui-app/src/InputRpc/SelectMethod.js 12:38-66
 @ ../ui-app/src/InputRpc/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/index.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc'
 @ ../ui-app/src/InputRpc/index.js 16:38-66
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/options/section.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc/options'
 @ ../ui-app/src/InputRpc/options/section.js 14:38-66
 @ ../ui-app/src/InputRpc/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/options/method.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc/options'
 @ ../ui-app/src/InputRpc/options/method.js 16:38-66
 @ ../ui-app/src/InputRpc/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/NodeVersion.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/NodeVersion.js 10:38-66
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Chain.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Chain.js 10:38-66
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/NodeName.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/NodeName.js 10:38-66
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/BestNumber.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/BestNumber.js 10:38-66
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/transform/storage.js
Module not found: Error: Can't resolve '@polkadot/params/decode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with/transform'
 @ ../ui-react-rx/src/with/transform/storage.js 10:37-71
 @ ../ui-react-rx/src/with/storage.js
 @ ../ui-react-rx/src/with/storageDiv.js
 @ ../app-storage/src/Query.js
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/Query.js
Module not found: Error: Can't resolve '@polkadot/params/typeToString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/Query.js 14:43-83
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/initValue.js
Module not found: Error: Can't resolve '@polkadot/params/typeToString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/initValue.js 12:43-83
 @ ../ui-app/src/Params/values.js
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/index.js
Module not found: Error: Can't resolve '@polkadot/params/typeToString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/index.js 14:43-83
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Unknown.js
Module not found: Error: Can't resolve '@polkadot/params/typeToString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Unknown.js 12:43-83
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BestHash.js
Module not found: Error: Can't resolve '@polkadot/primitives-codec/header/hash' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src'
 @ ../app-explorer/src/BestHash.js 10:35-84
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BlockHeader/index.js
Module not found: Error: Can't resolve '@polkadot/primitives-codec/header/hash' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src/BlockHeader'
 @ ../app-explorer/src/BlockHeader/index.js 14:35-84
 @ ../app-explorer/src/BlockHeaders.js
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/Selection.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/Selection.js 16:38-66
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/index.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage'
 @ ../ui-app/src/InputStorage/index.js 16:38-66
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/SelectKey.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage'
 @ ../ui-app/src/InputStorage/SelectKey.js 12:38-66
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/options/section.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage/options'
 @ ../ui-app/src/InputStorage/options/section.js 14:38-66
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/options/key.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage/options'
 @ ../ui-app/src/InputStorage/options/key.js 16:38-66
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Nonce.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Nonce.js 10:38-66
 @ ../app-extrinsics/src/Nonce.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Balance.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Balance.js 10:38-66
 @ ../app-extrinsics/src/Account.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/storage.js
Module not found: Error: Can't resolve '@polkadot/storage/key' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/storage.js 20:34-66
 @ ../ui-react-rx/src/with/storageDiv.js
 @ ../app-storage/src/Query.js
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Hash.js
Module not found: Error: Can't resolve '@polkadot/util-crypto/blake2/asHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Hash.js 28:36-81
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util-crypto/nacl/keypair/fromSeed' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 32:39-93
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/generator/generate.js
Module not found: Error: Can't resolve '@polkadot/util-crypto/nacl/keypair/fromSeed' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src/generator'
 @ ../app-vanitygen/src/generator/generate.js 16:21-75
 @ ../app-vanitygen/src/generator/index.js
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Verify.js
Module not found: Error: Can't resolve '@polkadot/util-crypto/nacl/verify' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Verify.js 32:37-81
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util-crypto/random/asU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 34:36-81
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/generator/generate.js
Module not found: Error: Can't resolve '@polkadot/util-crypto/random/asU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src/generator'
 @ ../app-vanitygen/src/generator/generate.js 12:20-65
 @ ../app-vanitygen/src/generator/index.js
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Address.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/decode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Address.js 24:37-85
 @ ../app-addresses/src/Creator.js
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/decode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-addresses/src'
 @ ../app-addresses/src/Creator.js 22:37-85
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputAddress/addressToAddress.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/decode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputAddress'
 @ ../ui-app/src/InputAddress/addressToAddress.js 10:37-85
 @ ../ui-app/src/InputAddress/index.js
 @ ../app-toolbox/src/Sign.js
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputAddress/index.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/decode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputAddress'
 @ ../ui-app/src/InputAddress/index.js 20:37-85
 @ ../app-toolbox/src/Sign.js
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/address/get.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/decode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/address'
 @ ../ui-keyring/src/address/get.js 12:37-85
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Address.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Address.js 26:37-85
 @ ../app-addresses/src/Creator.js
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 36:37-85
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-addresses/src'
 @ ../app-addresses/src/Creator.js 24:37-85
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/generator/generate.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src/generator'
 @ ../app-vanitygen/src/generator/generate.js 14:22-70
 @ ../app-vanitygen/src/generator/index.js
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputAddress/addressToAddress.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputAddress'
 @ ../ui-app/src/InputAddress/addressToAddress.js 12:37-85
 @ ../ui-app/src/InputAddress/index.js
 @ ../app-toolbox/src/Sign.js
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/valueToText.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/valueToText.js 14:37-85
 @ ../app-storage/src/Query.js
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/isAvailable.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src'
 @ ../ui-keyring/src/isAvailable.js 12:37-85
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/address/get.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/address'
 @ ../ui-keyring/src/address/get.js 14:37-85
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Extrinsic.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Extrinsic.js 28:37-85
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/index.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/testing' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src'
 @ ../ui-keyring/src/index.js 10:38-79
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/api.js
Module not found: Error: Can't resolve '@polkadot/util/assert' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/api.js 14:37-69
 @ ./src/Connecting/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/apiCall.js
Module not found: Error: Can't resolve '@polkadot/util/assert' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/apiCall.js 14:37-69
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeVersion.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/observable.js
Module not found: Error: Can't resolve '@polkadot/util/assert' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/observable.js 20:37-69
 @ ../ui-react-rx/src/with/apiCall.js
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeVersion.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/resultToText.js
Module not found: Error: Can't resolve '@polkadot/util/bn/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/resultToText.js 16:36-70
 @ ../app-rpc/src/Results.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/KeyValue.js
Module not found: Error: Can't resolve '@polkadot/util/bn/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/KeyValue.js 14:36-70
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Code.js
Module not found: Error: Can't resolve '@polkadot/util/bn/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Code.js 14:36-70
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util/hex/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 26:36-71
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Sign.js
Module not found: Error: Can't resolve '@polkadot/util/hex/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Sign.js 28:36-71
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Hash.js
Module not found: Error: Can't resolve '@polkadot/util/hex/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Hash.js 22:36-71
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Verify.js
Module not found: Error: Can't resolve '@polkadot/util/hex/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Verify.js 26:36-71
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/KeyValue.js
Module not found: Error: Can't resolve '@polkadot/util/hex/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/KeyValue.js 18:37-72
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/BaseBytes.js
Module not found: Error: Can't resolve '@polkadot/util/hex/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/BaseBytes.js 14:36-71
 @ ../ui-app/src/Params/Param/Bytes.js
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/resultToText.js
Module not found: Error: Can't resolve '@polkadot/util/is/bn' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/resultToText.js 20:33-64
 @ ../app-rpc/src/Results.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/valueToText.js
Module not found: Error: Can't resolve '@polkadot/util/is/bn' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/valueToText.js 18:33-64
 @ ../app-storage/src/Query.js
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/util/triggerChange.js
Module not found: Error: Can't resolve '@polkadot/util/is/function' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/util'
 @ ../ui-react-rx/src/util/triggerChange.js 12:39-76
 @ ../ui-react-rx/src/with/observable.js
 @ ../ui-react-rx/src/with/apiCall.js
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeVersion.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util/is/hex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 24:34-66
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Hash.js
Module not found: Error: Can't resolve '@polkadot/util/is/hex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Hash.js 24:34-66
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Verify.js
Module not found: Error: Can't resolve '@polkadot/util/is/hex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Verify.js 28:34-66
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Sign.js
Module not found: Error: Can't resolve '@polkadot/util/is/hex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Sign.js 30:34-66
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/resultToText.js
Module not found: Error: Can't resolve '@polkadot/util/is/object' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/resultToText.js 22:37-72
 @ ../app-rpc/src/Results.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/util/triggerChange.js
Module not found: Error: Can't resolve '@polkadot/util/is/observable' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/util'
 @ ../ui-react-rx/src/util/triggerChange.js 14:41-80
 @ ../ui-react-rx/src/with/observable.js
 @ ../ui-react-rx/src/with/apiCall.js
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeVersion.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/isAvailable.js
Module not found: Error: Can't resolve '@polkadot/util/is/string' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src'
 @ ../ui-keyring/src/isAvailable.js 10:37-72
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/address/get.js
Module not found: Error: Can't resolve '@polkadot/util/is/string' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/address'
 @ ../ui-keyring/src/address/get.js 10:37-72
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/resultToText.js
Module not found: Error: Can't resolve '@polkadot/util/is/u8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/resultToText.js 24:34-66
 @ ../app-rpc/src/Results.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/valueToText.js
Module not found: Error: Can't resolve '@polkadot/util/is/u8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/valueToText.js 20:34-66
 @ ../app-storage/src/Query.js
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-identicon/src/seeder.js
Module not found: Error: Can't resolve '@polkadot/util/is/u8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-identicon/src'
 @ ../ui-identicon/src/seeder.js 12:14-46
 @ ../ui-identicon/src/index.js
 @ ../ui-react/src/IdentityIcon/appendIcon.js
 @ ../ui-react/src/IdentityIcon/index.js
 @ ../ui-keyring/src/options/KeyPair.js
 @ ../ui-keyring/src/options/item.js
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Extrinsic.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Extrinsic.js 26:40-78
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/Results.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/Results.js 16:40-78
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/Selection.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/Selection.js 28:40-78
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Input.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Input.js 16:40-78
 @ ../ui-app/src/Password.js
 @ ../ui-signer/src/Unlock.js
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Or.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/Or.js 14:40-78
 @ ../ui-app/src/Button/index.js
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/index.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/index.js 16:40-78
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/values.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/values.js 10:40-78
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/KeyValue.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/concat' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/KeyValue.js 16:37-73
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Code.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/concat' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Code.js 16:37-73
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/sign.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/concat' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/sign.js 14:37-73
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/fromString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 28:41-81
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Hash.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/fromString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Hash.js 26:41-81
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Sign.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/fromString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Sign.js 32:41-81
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Verify.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/fromString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Verify.js 30:41-81
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-identicon/src/seeder.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/fromString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-identicon/src'
 @ ../ui-identicon/src/seeder.js 14:22-62
 @ ../ui-identicon/src/index.js
 @ ../ui-react/src/IdentityIcon/appendIcon.js
 @ ../ui-react/src/IdentityIcon/index.js
 @ ../ui-keyring/src/options/KeyPair.js
 @ ../ui-keyring/src/options/item.js
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 30:36-71
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BestHash.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src'
 @ ../app-explorer/src/BestHash.js 14:36-71
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BlockHeader/index.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src/BlockHeader'
 @ ../app-explorer/src/BlockHeader/index.js 20:36-71
 @ ../app-explorer/src/BlockHeaders.js
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/resultToText.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/resultToText.js 18:37-72
 @ ../app-rpc/src/Results.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Sign.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Sign.js 34:36-71
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/Match.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src'
 @ ../app-vanitygen/src/Match.js 22:36-71
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/valueToText.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/valueToText.js 16:36-71
 @ ../app-storage/src/Query.js
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/sign.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/sign.js 16:36-71
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Extrinsic.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Extrinsic.js 26:36-71
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/i18n.js
Module not found: Error: Can't resolve 'i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/i18n.js 10:38-56
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/i18n.js
Module not found: Error: Can't resolve 'i18next-browser-languagedetector' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/i18n.js 12:61-104
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/i18n.js
Module not found: Error: Can't resolve 'i18next-xhr-backend' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/i18n.js 14:48-78
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/react-hot-loader/dist/react-hot-loader.development.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/react-hot-loader/dist'
 @ /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/react-hot-loader/dist/react-hot-loader.development.js 7:12-28
 @ /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/react-hot-loader/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 12:36-52
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Address.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Address.js 12:36-52
 @ ../app-addresses/src/Creator.js
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/index.js 14:36-52
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Editor.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Editor.js 12:36-52
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/Editor.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-addresses/src'
 @ ../app-addresses/src/Editor.js 12:36-52
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/Creator.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-addresses/src'
 @ ../app-addresses/src/Creator.js 12:36-52
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-addresses/src'
 @ ../app-addresses/src/index.js 14:36-52
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BlockHeaders.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src'
 @ ../app-explorer/src/BlockHeaders.js 14:36-52
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src'
 @ ../app-explorer/src/index.js 12:36-52
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BlockHeader/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src/BlockHeader'
 @ ../app-explorer/src/BlockHeader/index.js 12:36-52
 @ ../app-explorer/src/BlockHeaders.js
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Nonce.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Nonce.js 10:36-52
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Account.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Account.js 12:36-52
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/index.js 12:36-52
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Extrinsic.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Extrinsic.js 16:36-52
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Selection.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Selection.js 14:36-52
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Params/Proposal.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src/Params'
 @ ../app-extrinsics/src/Params/Proposal.js 10:36-52
 @ ../app-extrinsics/src/Params/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Params/Call.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src/Params'
 @ ../app-extrinsics/src/Params/Call.js 10:36-52
 @ ../app-extrinsics/src/Params/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Params/Extrinsic.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src/Params'
 @ ../app-extrinsics/src/Params/Extrinsic.js 12:36-52
 @ ../app-extrinsics/src/Params/Proposal.js
 @ ../app-extrinsics/src/Params/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Params/Account.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src/Params'
 @ ../app-extrinsics/src/Params/Account.js 12:36-52
 @ ../app-extrinsics/src/Params/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/Results.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/Results.js 10:36-52
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/Selection.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/Selection.js 18:36-52
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/index.js 12:36-52
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/Account.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/Account.js 14:36-52
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/index.js 14:36-52
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/Queries.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/Queries.js 10:36-52
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/Query.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/Query.js 12:36-52
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/Selection.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/Selection.js 14:36-52
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Verify.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Verify.js 12:36-52
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Sign.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Sign.js 12:36-52
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Hash.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Hash.js 12:36-52
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Unlock.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Unlock.js 12:36-52
 @ ../app-toolbox/src/Sign.js
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/index.js 14:36-52
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/Match.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src'
 @ ../app-vanitygen/src/Match.js 12:36-52
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src'
 @ ../app-vanitygen/src/index.js 20:36-52
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/NodeInfo.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src'
 @ ./src/NodeInfo.js 10:36-52
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src'
 @ ./src/index.js 7:36-52
 @ multi ./src/index.js

ERROR in ./src/Connecting/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/Connecting'
 @ ./src/Connecting/index.js 12:36-52
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/Content/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/Content'
 @ ./src/Content/index.js 12:36-52
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/NotFound/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/NotFound'
 @ ./src/NotFound/index.js 12:36-52
 @ ./src/routing/unknown.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/SideBar/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/SideBar'
 @ ./src/SideBar/index.js 12:36-52
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/SideBar/Item.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/SideBar'
 @ ./src/SideBar/Item.js 12:36-52
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Password.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Password.js 12:36-52
 @ ../ui-signer/src/Unlock.js
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/CopyButton.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/CopyButton.js 10:36-52
 @ ../ui-app/src/Output.js
 @ ../app-toolbox/src/Hash.js
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Input.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Input.js 12:36-52
 @ ../ui-app/src/Password.js
 @ ../ui-signer/src/Unlock.js
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Dropdown.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Dropdown.js 12:36-52
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Labelled.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Labelled.js 10:36-52
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Static.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Static.js 10:36-52
 @ ../app-toolbox/src/Hash.js
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Output.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Output.js 10:36-52
 @ ../app-toolbox/src/Hash.js
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/index.js 14:36-52
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Divider.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/Divider.js 10:36-52
 @ ../ui-app/src/Button/index.js
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Or.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/Or.js 10:36-52
 @ ../ui-app/src/Button/index.js
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/index.js 12:36-52
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Group.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/Group.js 10:36-52
 @ ../ui-app/src/Button/index.js
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputAddress/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputAddress'
 @ ../ui-app/src/InputAddress/index.js 14:36-52
 @ ../app-toolbox/src/Sign.js
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/SelectSection.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic'
 @ ../ui-app/src/InputExtrinsic/SelectSection.js 10:36-52
 @ ../ui-app/src/InputExtrinsic/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic'
 @ ../ui-app/src/InputExtrinsic/index.js 14:36-52
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/SelectMethod.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic'
 @ ../ui-app/src/InputExtrinsic/SelectMethod.js 10:36-52
 @ ../ui-app/src/InputExtrinsic/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/options/method.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic/options'
 @ ../ui-app/src/InputExtrinsic/options/method.js 14:36-52
 @ ../ui-app/src/InputExtrinsic/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc'
 @ ../ui-app/src/InputRpc/index.js 14:36-52
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/SelectSection.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc'
 @ ../ui-app/src/InputRpc/SelectSection.js 10:36-52
 @ ../ui-app/src/InputRpc/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/SelectMethod.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc'
 @ ../ui-app/src/InputRpc/SelectMethod.js 10:36-52
 @ ../ui-app/src/InputRpc/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/options/method.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc/options'
 @ ../ui-app/src/InputRpc/options/method.js 14:36-52
 @ ../ui-app/src/InputRpc/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/SelectKey.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage'
 @ ../ui-app/src/InputStorage/SelectKey.js 10:36-52
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/SelectSection.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage'
 @ ../ui-app/src/InputStorage/SelectSection.js 10:36-52
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage'
 @ ../ui-app/src/InputStorage/index.js 14:36-52
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/options/key.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage/options'
 @ ../ui-app/src/InputStorage/options/key.js 14:36-52
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/index.js 16:36-52
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Bytes.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Bytes.js 10:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Amount.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Amount.js 14:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/File.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/File.js 14:36-52
 @ ../ui-app/src/Params/Param/Code.js
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/KeyValue.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/KeyValue.js 12:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/VoteThreshold.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/VoteThreshold.js 12:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/index.js 12:36-52
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Base.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Base.js 10:36-52
 @ ../ui-app/src/Params/Param/Unknown.js
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Hash.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Hash.js 10:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Bare.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Bare.js 10:36-52
 @ ../ui-app/src/Params/Param/Bool.js
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Account.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Account.js 12:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/String.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/String.js 12:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Unknown.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Unknown.js 10:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/BaseBytes.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/BaseBytes.js 12:36-52
 @ ../ui-app/src/Params/Param/Bytes.js
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Bool.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Bool.js 12:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Code.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Code.js 12:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/options/KeyPair.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/options'
 @ ../ui-keyring/src/options/KeyPair.js 12:36-52
 @ ../ui-keyring/src/options/item.js
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/options/item.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/options'
 @ ../ui-keyring/src/options/item.js 10:36-52
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Div.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Div.js 10:36-52
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeVersion.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Api.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Api.js 14:36-52
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/api.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/api.js 12:36-52
 @ ./src/Connecting/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/observable.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/observable.js 16:36-52
 @ ../ui-react-rx/src/with/apiCall.js
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeVersion.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/apiCall.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/apiCall.js 12:36-52
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeVersion.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/storage.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/storage.js 16:36-52
 @ ../ui-react-rx/src/with/storageDiv.js
 @ ../app-storage/src/Query.js
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react/src/IdentityIcon/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react/src/IdentityIcon'
 @ ../ui-react/src/IdentityIcon/index.js 12:36-52
 @ ../ui-keyring/src/options/KeyPair.js
 @ ../ui-keyring/src/options/item.js
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Status.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Status.js 10:36-52
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Modal.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Modal.js 14:36-52
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Queue.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Queue.js 14:36-52
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Unlock.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Unlock.js 12:36-52
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Extrinsic.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Extrinsic.js 16:36-52
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/index.js 12:36-52
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/CopyButton.js
Module not found: Error: Can't resolve 'react-copy-to-clipboard' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/CopyButton.js 12:51-85
 @ ../ui-app/src/Output.js
 @ ../app-toolbox/src/Hash.js
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/index.js
Module not found: Error: Can't resolve 'react-dom' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/index.js 16:39-59
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/File.js
Module not found: Error: Can't resolve 'react-dropzone' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/File.js 16:44-69
 @ ../ui-app/src/Params/Param/Code.js
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/translate.js 8:20-44
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-addresses/src'
 @ ../app-addresses/src/translate.js 8:20-44
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src'
 @ ../app-explorer/src/translate.js 8:20-44
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/translate.js 8:20-44
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/translate.js 8:20-44
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/translate.js 8:20-44
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Unlock.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Unlock.js 14:20-44
 @ ../app-toolbox/src/Sign.js
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/translate.js 8:20-44
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src'
 @ ../app-vanitygen/src/translate.js 8:20-44
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src'
 @ ./src/translate.js 8:20-44
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/i18n.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/i18n.js 16:20-44
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/translate.js 8:20-44
 @ ../ui-app/src/Button/Or.js
 @ ../ui-app/src/Button/index.js
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Extrinsic.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Extrinsic.js 18:20-44
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/translate.js 8:20-44
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/Content/index.js
Module not found: Error: Can't resolve 'react-router' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/Content'
 @ ./src/Content/index.js 14:19-42
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/SideBar/Item.js
Module not found: Error: Can't resolve 'react-router-dom' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/SideBar'
 @ ./src/SideBar/Item.js 14:22-49
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/index.js
Module not found: Error: Can't resolve 'react-router-dom' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/index.js 18:22-49
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/styles.js
Module not found: Error: Can't resolve 'semantic-ui-css/semantic.min.css' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/styles.js 3:0-43
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Menu.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/collections/Menu' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Menu.js 12:35-88
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Or.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Button' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/Or.js 12:37-89
 @ ../ui-app/src/Button/index.js
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Group.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Button' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/Group.js 12:37-89
 @ ../ui-app/src/Button/index.js
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/index.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Button' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/index.js 14:38-90
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Menu.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Divider' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Menu.js 10:38-91
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Icon.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Icon' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Icon.js 10:35-85
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Input.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Input' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Input.js 14:36-87
 @ ../ui-app/src/Password.js
 @ ../ui-signer/src/Unlock.js
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Labelled.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Label' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Labelled.js 12:36-87
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Dropdown.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/modules/Dropdown' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Dropdown.js 14:39-92
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Modal.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/modules/Modal' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Modal.js 10:36-86
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/loadAll.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src'
 @ ../ui-keyring/src/loadAll.js 10:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/account/forget.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/account'
 @ ../ui-keyring/src/account/forget.js 10:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/account/save.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/account'
 @ ../ui-keyring/src/account/save.js 10:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/account/meta.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/account'
 @ ../ui-keyring/src/account/meta.js 10:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/address/metaRecent.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/address'
 @ ../ui-keyring/src/address/metaRecent.js 10:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/address/meta.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/address'
 @ ../ui-keyring/src/address/meta.js 14:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/address/forget.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/address'
 @ ../ui-keyring/src/address/forget.js 10:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js
Child html-webpack-plugin for "index.html":
         Asset     Size  Chunks  Chunk Names
    index.html  557 KiB       0  
    Entrypoint undefined = index.html
    [../../node_modules/html-webpack-plugin/lib/loader.js!./public/index.html] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/html-webpack-plugin/lib/loader.js!./public/index.html 707 bytes {0} [built]
    [../../node_modules/lodash/lodash.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/lodash/lodash.js 527 KiB {0} [built]
    [../../node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 489 bytes {0} [built]
    [../../node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {0} [built]
ℹ ｢wdm｣: Failed to compile.
^[[A^C

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ ℹ ｢serve｣: Process Ended via SIGINT
webpack-serve[8772]: ../src/node.cc:4012:void node::PlatformExit(): Assertion `(err) != (-1)' failed.
 1: node::Abort() [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 2: node::MakeCallback(v8::Isolate*, v8::Local<v8::Object>, char const*, int, v8::Local<v8::Value>*, node::async_context) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 3: node::PlatformExit() [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 4: __cxa_finalize_ranges [/usr/lib/system/libsystem_c.dylib]
 5: exit [/usr/lib/system/libsystem_c.dylib]
 6: node::Abort(v8::FunctionCallbackInfo<v8::Value> const&) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 7: v8::internal::FunctionCallbackArguments::Call(v8::internal::CallHandlerInfo*) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 8: v8::internal::MaybeHandle<v8::internal::Object> v8::internal::(anonymous namespace)::HandleApiCallHelper<false>(v8::internal::Isolate*, v8::internal::Handle<v8::internal::HeapObject>, v8::internal::Handle<v8::internal::HeapObject>, v8::internal::Handle<v8::internal::FunctionTemplateInfo>, v8::internal::Handle<v8::internal::Object>, v8::internal::BuiltinArguments) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 9: v8::internal::Builtin_Impl_HandleApiCall(v8::internal::BuiltinArguments, v8::internal::Isolate*) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
10: 0xbc4afb841bd
sh: line 1:  8772 Abort trap: 6           webpack-serve --config webpack.config.js --port 3000


 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ WS_URL=wss://poc-1.polkadot.io:9944 yarn run start

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ 

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ lerna bootstrap
-bash: lerna: command not found

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ npm install --global lerna
/Users/Ls/.nvm/versions/node/v10.4.0/bin/lerna -> /Users/Ls/.nvm/versions/node/v10.4.0/lib/node_modules/lerna/bin/lerna.js
+ lerna@2.11.0
added 330 packages from 180 contributors in 24.517s

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ lerna bootstrap
lerna info version 2.11.0
lerna info Bootstrapping 15 packages
lerna info hoist Finished installing in root
lerna success Bootstrapped 15 packages

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ WS_URL=wss://poc-1.polkadot.io:9944 yarn run start
yarn run v0.24.6
(node:8973) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
$ cd packages/apps && webpack-serve --config webpack.config.js --port 3000 
ℹ ｢hot｣: webpack: Compiling...
ℹ ｢hot｣: WebSocket Server Listening at localhost:8081
ℹ ｢serve｣: Project is running at http://localhost:3000
ℹ ｢serve｣: Server URI copied to clipboard
ℹ ｢hot｣: webpack: Compiling Done
✖ ｢wdm｣: Hash: 65d3a472f865b115ec7c
Version: webpack 4.12.0
Time: 19957ms
Built at: 06/11/2018 6:48:17 PM
               Asset       Size   Chunks                    Chunk Names
    main.65d3a472.js   1.23 MiB     main  [emitted]  [big]  main
 runtime.65d3a472.js   30.9 KiB  runtime  [emitted]         runtime
  vendor.26edeb9c.js    148 KiB   vendor  [emitted]         vendor
          index.html  684 bytes           [emitted]         
       manifest.json  337 bytes           [emitted]         
locales/en/apps.json    3 bytes           [emitted]         
         favicon.ico   37.2 KiB           [emitted]         
Entrypoint main [big] = runtime.65d3a472.js vendor.26edeb9c.js main.65d3a472.js
[../../node_modules/@babel/runtime/helpers/interopRequireDefault.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/runtime/helpers/interopRequireDefault.js 145 bytes {main} [built]
[../../node_modules/webpack-hot-client/client/index.js?18aeda4e-f324-4687-932d-97751c321289] (webpack)-hot-client/client?18aeda4e-f324-4687-932d-97751c321289 2.47 KiB {main} [built]
[../../node_modules/webpack-hot-client/client/log.js] (webpack)-hot-client/client/log.js 2.4 KiB {main} [built]
[../../node_modules/webpack-hot-client/client/socket.js] (webpack)-hot-client/client/socket.js 1.39 KiB {main} [built]
[../../node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {main} [built]
[../ui-app/src/index.js] 1.47 KiB {main} [built]
[../ui-signer/src/index.js] 1.64 KiB {main} [built]
[./src/Connecting/index.js] 1.73 KiB {main} [built]
[0] multi ./src/index.js 28 bytes {main} [built]
[./src/Content/index.js] 1.63 KiB {main} [built]
[./src/NodeInfo.js] 2.24 KiB {main} [built]
[./src/SideBar/index.js] 2.37 KiB {main} [built]
[./src/index.css] 1.27 KiB {main} [built]
[./src/index.js] 1.66 KiB {main} [built]
[2] multi webpack-hot-client/client?18aeda4e-f324-4687-932d-97751c321289 ./src/index.js 40 bytes {main} [built]
    + 433 hidden modules

ERROR in ../ui-app/src/styles/semantic.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/styles/semantic.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/styles/semantic.css 2:14-158 21:1-42:3 21:156-42:2 22:19-163
 @ ../ui-app/src/styles.js
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/NotFound/NotFound.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!./src/NotFound/NotFound.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ./src/NotFound/NotFound.css 2:14-158 21:1-42:3 21:156-42:2 22:19-163
 @ ./src/NotFound/index.js
 @ ./src/routing/unknown.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-addresses/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-addresses/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputAddress/InputAddress.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/InputAddress/InputAddress.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/InputAddress/InputAddress.css 2:14-162 21:1-42:3 21:160-42:2 22:19-167
 @ ../ui-app/src/InputAddress/index.js
 @ ../app-accounts/src/Editor.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-extrinsics/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-extrinsics/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react/src/IdentityIcon/IdentityIcon.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-react/src/IdentityIcon/IdentityIcon.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-react/src/IdentityIcon/IdentityIcon.css 2:14-162 21:1-42:3 21:160-42:2 22:19-167
 @ ../ui-react/src/IdentityIcon/index.js
 @ ../ui-keyring/src/options/KeyPair.js
 @ ../ui-keyring/src/options/item.js
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-storage/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-storage/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-accounts/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-accounts/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-explorer/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-explorer/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BlockHeader/BlockHeader.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-explorer/src/BlockHeader/BlockHeader.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-explorer/src/BlockHeader/BlockHeader.css 2:14-161 21:1-42:3 21:159-42:2 22:19-166
 @ ../app-explorer/src/BlockHeader/index.js
 @ ../app-explorer/src/BlockHeaders.js
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-toolbox/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-toolbox/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-vanitygen/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-vanitygen/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/styles/components.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/styles/components.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/styles/components.css 2:14-160 21:1-42:3 21:158-42:2 22:19-165
 @ ../ui-app/src/styles.js
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/styles/form.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/styles/form.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/styles/form.css 2:14-154 21:1-42:3 21:152-42:2 22:19-159
 @ ../ui-app/src/styles.js
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/styles/rx.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/styles/rx.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/styles/rx.css 2:14-152 21:1-42:3 21:150-42:2 22:19-157
 @ ../ui-app/src/styles.js
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/styles/app.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/styles/app.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/styles/app.css 2:14-153 21:1-42:3 21:151-42:2 22:19-158
 @ ../ui-app/src/styles.js
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!./src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ./src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-rpc/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-rpc/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Button.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/Button/Button.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/Button/Button.css 2:14-156 21:1-42:3 21:154-42:2 22:19-161
 @ ../ui-app/src/Button/index.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/SideBar/Item.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!./src/SideBar/Item.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ./src/SideBar/Item.css 2:14-154 21:1-42:3 21:152-42:2 22:19-159
 @ ./src/SideBar/Item.js
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/Connecting/Connecting.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!./src/Connecting/Connecting.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ./src/Connecting/Connecting.css 2:14-160 21:1-42:3 21:158-42:2 22:19-165
 @ ./src/Connecting/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Params.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/Params/Params.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/Params/Params.css 2:14-156 21:1-42:3 21:154-42:2 22:19-161
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/Content/Content.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!./src/Content/Content.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ./src/Content/Content.css 2:14-157 21:1-42:3 21:155-42:2 22:19-162
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/SideBar/SideBar.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!./src/SideBar/SideBar.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ./src/SideBar/SideBar.css 2:14-157 21:1-42:3 21:155-42:2 22:19-162
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/options/KeyPair.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-keyring/src/options/KeyPair.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-keyring/src/options/KeyPair.css 2:14-157 21:1-42:3 21:155-42:2 22:19-162
 @ ../ui-keyring/src/options/KeyPair.js
 @ ../ui-keyring/src/options/item.js
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/InputExtrinsic.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/InputExtrinsic/InputExtrinsic.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/InputExtrinsic/InputExtrinsic.css 2:14-164 21:1-42:3 21:162-42:2 22:19-169
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-signer/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-signer/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Api.js
Module not found: Error: Can't resolve '@polkadot/api-provider/ws' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Api.js 18:33-69
 @ ../ui-react-rx/src/with/api.js
 @ ../ui-react-rx/src/with/apiCall.js
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeName.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Api.js
Module not found: Error: Can't resolve '@polkadot/api-rx' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Api.js 20:36-63
 @ ../ui-react-rx/src/with/api.js
 @ ../ui-react-rx/src/with/apiCall.js
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeName.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Api.js
Module not found: Error: Can't resolve '@polkadot/api-rx/defaults' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Api.js 22:39-75
 @ ../ui-react-rx/src/with/api.js
 @ ../ui-react-rx/src/with/apiCall.js
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeName.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Selection.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Selection.js 16:41-72
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Params/Call.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src/Params'
 @ ../app-extrinsics/src/Params/Call.js 12:41-72
 @ ../app-extrinsics/src/Params/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Params/Proposal.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src/Params'
 @ ../app-extrinsics/src/Params/Proposal.js 12:41-72
 @ ../app-extrinsics/src/Params/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/index.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic'
 @ ../ui-app/src/InputExtrinsic/index.js 16:41-72
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/SelectMethod.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic'
 @ ../ui-app/src/InputExtrinsic/SelectMethod.js 12:41-72
 @ ../ui-app/src/InputExtrinsic/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/options/section.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic/options'
 @ ../ui-app/src/InputExtrinsic/options/section.js 14:41-72
 @ ../ui-app/src/InputExtrinsic/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/options/method.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic/options'
 @ ../ui-app/src/InputExtrinsic/options/method.js 16:41-72
 @ ../ui-app/src/InputExtrinsic/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Extrinsic.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Extrinsic.js 20:41-72
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/sign.js
Module not found: Error: Can't resolve '@polkadot/extrinsics-codec/encode/call' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/sign.js 10:35-84
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Extrinsic.js
Module not found: Error: Can't resolve '@polkadot/extrinsics-codec/encode/extrinsic' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Extrinsic.js 18:40-94
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Selection.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Selection.js 18:38-66
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/Selection.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/Selection.js 20:38-66
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/index.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc'
 @ ../ui-app/src/InputRpc/index.js 16:38-66
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/SelectMethod.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc'
 @ ../ui-app/src/InputRpc/SelectMethod.js 12:38-66
 @ ../ui-app/src/InputRpc/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/options/method.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc/options'
 @ ../ui-app/src/InputRpc/options/method.js 16:38-66
 @ ../ui-app/src/InputRpc/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/options/section.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc/options'
 @ ../ui-app/src/InputRpc/options/section.js 14:38-66
 @ ../ui-app/src/InputRpc/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Chain.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Chain.js 10:38-66
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/NodeName.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/NodeName.js 10:38-66
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/BestNumber.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/BestNumber.js 10:38-66
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/NodeVersion.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/NodeVersion.js 10:38-66
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/transform/storage.js
Module not found: Error: Can't resolve '@polkadot/params/decode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with/transform'
 @ ../ui-react-rx/src/with/transform/storage.js 10:37-71
 @ ../ui-react-rx/src/with/storage.js
 @ ../ui-react-rx/src/with/storageDiv.js
 @ ../ui-react-rx/src/Nonce.js
 @ ../app-accounts/src/Address.js
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/Query.js
Module not found: Error: Can't resolve '@polkadot/params/typeToString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/Query.js 14:43-83
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/initValue.js
Module not found: Error: Can't resolve '@polkadot/params/typeToString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/initValue.js 12:43-83
 @ ../ui-app/src/Params/values.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Unknown.js
Module not found: Error: Can't resolve '@polkadot/params/typeToString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Unknown.js 12:43-83
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/index.js
Module not found: Error: Can't resolve '@polkadot/params/typeToString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/index.js 14:43-83
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BestHash.js
Module not found: Error: Can't resolve '@polkadot/primitives-codec/header/hash' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src'
 @ ../app-explorer/src/BestHash.js 10:35-84
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BlockHeader/index.js
Module not found: Error: Can't resolve '@polkadot/primitives-codec/header/hash' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src/BlockHeader'
 @ ../app-explorer/src/BlockHeader/index.js 14:35-84
 @ ../app-explorer/src/BlockHeaders.js
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/Selection.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/Selection.js 16:38-66
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/index.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage'
 @ ../ui-app/src/InputStorage/index.js 16:38-66
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/SelectKey.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage'
 @ ../ui-app/src/InputStorage/SelectKey.js 12:38-66
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/options/section.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage/options'
 @ ../ui-app/src/InputStorage/options/section.js 14:38-66
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/options/key.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage/options'
 @ ../ui-app/src/InputStorage/options/key.js 16:38-66
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Nonce.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Nonce.js 10:38-66
 @ ../app-accounts/src/Address.js
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Balance.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Balance.js 10:38-66
 @ ../app-accounts/src/Address.js
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/storage.js
Module not found: Error: Can't resolve '@polkadot/storage/key' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/storage.js 20:34-66
 @ ../ui-react-rx/src/with/storageDiv.js
 @ ../ui-react-rx/src/Nonce.js
 @ ../app-accounts/src/Address.js
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Hash.js
Module not found: Error: Can't resolve '@polkadot/util-crypto/blake2/asHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Hash.js 28:36-81
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util-crypto/nacl/keypair/fromSeed' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 32:39-93
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/generator/generate.js
Module not found: Error: Can't resolve '@polkadot/util-crypto/nacl/keypair/fromSeed' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src/generator'
 @ ../app-vanitygen/src/generator/generate.js 16:21-75
 @ ../app-vanitygen/src/generator/index.js
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Verify.js
Module not found: Error: Can't resolve '@polkadot/util-crypto/nacl/verify' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Verify.js 32:37-81
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util-crypto/random/asU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 34:36-81
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/generator/generate.js
Module not found: Error: Can't resolve '@polkadot/util-crypto/random/asU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src/generator'
 @ ../app-vanitygen/src/generator/generate.js 12:20-65
 @ ../app-vanitygen/src/generator/index.js
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Address.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/decode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Address.js 24:37-85
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/decode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-addresses/src'
 @ ../app-addresses/src/Creator.js 22:37-85
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputAddress/addressToAddress.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/decode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputAddress'
 @ ../ui-app/src/InputAddress/addressToAddress.js 10:37-85
 @ ../ui-app/src/InputAddress/index.js
 @ ../app-accounts/src/Editor.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputAddress/index.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/decode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputAddress'
 @ ../ui-app/src/InputAddress/index.js 20:37-85
 @ ../app-accounts/src/Editor.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/address/get.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/decode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/address'
 @ ../ui-keyring/src/address/get.js 12:37-85
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Address.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Address.js 26:37-85
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 36:37-85
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-addresses/src'
 @ ../app-addresses/src/Creator.js 24:37-85
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/generator/generate.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src/generator'
 @ ../app-vanitygen/src/generator/generate.js 14:22-70
 @ ../app-vanitygen/src/generator/index.js
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputAddress/addressToAddress.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputAddress'
 @ ../ui-app/src/InputAddress/addressToAddress.js 12:37-85
 @ ../ui-app/src/InputAddress/index.js
 @ ../app-accounts/src/Editor.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/valueToText.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/valueToText.js 14:37-85
 @ ../app-storage/src/Query.js
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/isAvailable.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src'
 @ ../ui-keyring/src/isAvailable.js 12:37-85
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/address/get.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/address'
 @ ../ui-keyring/src/address/get.js 14:37-85
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Extrinsic.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Extrinsic.js 28:37-85
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/index.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/testing' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src'
 @ ../ui-keyring/src/index.js 10:38-79
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/api.js
Module not found: Error: Can't resolve '@polkadot/util/assert' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/api.js 14:37-69
 @ ../ui-react-rx/src/with/apiCall.js
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeName.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/apiCall.js
Module not found: Error: Can't resolve '@polkadot/util/assert' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/apiCall.js 14:37-69
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeName.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/observable.js
Module not found: Error: Can't resolve '@polkadot/util/assert' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/observable.js 20:37-69
 @ ../ui-react-rx/src/with/apiCall.js
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeName.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/resultToText.js
Module not found: Error: Can't resolve '@polkadot/util/bn/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/resultToText.js 16:36-70
 @ ../app-rpc/src/Results.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/KeyValue.js
Module not found: Error: Can't resolve '@polkadot/util/bn/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/KeyValue.js 14:36-70
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Code.js
Module not found: Error: Can't resolve '@polkadot/util/bn/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Code.js 14:36-70
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util/hex/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 26:36-71
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Sign.js
Module not found: Error: Can't resolve '@polkadot/util/hex/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Sign.js 28:36-71
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Verify.js
Module not found: Error: Can't resolve '@polkadot/util/hex/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Verify.js 26:36-71
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Hash.js
Module not found: Error: Can't resolve '@polkadot/util/hex/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Hash.js 22:36-71
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/KeyValue.js
Module not found: Error: Can't resolve '@polkadot/util/hex/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/KeyValue.js 18:37-72
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/BaseBytes.js
Module not found: Error: Can't resolve '@polkadot/util/hex/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/BaseBytes.js 14:36-71
 @ ../ui-app/src/Params/Param/Bytes.js
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/resultToText.js
Module not found: Error: Can't resolve '@polkadot/util/is/bn' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/resultToText.js 20:33-64
 @ ../app-rpc/src/Results.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/valueToText.js
Module not found: Error: Can't resolve '@polkadot/util/is/bn' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/valueToText.js 18:33-64
 @ ../app-storage/src/Query.js
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/util/triggerChange.js
Module not found: Error: Can't resolve '@polkadot/util/is/function' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/util'
 @ ../ui-react-rx/src/util/triggerChange.js 12:39-76
 @ ../ui-react-rx/src/with/observable.js
 @ ../ui-react-rx/src/with/apiCall.js
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeName.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util/is/hex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 24:34-66
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Sign.js
Module not found: Error: Can't resolve '@polkadot/util/is/hex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Sign.js 30:34-66
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Verify.js
Module not found: Error: Can't resolve '@polkadot/util/is/hex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Verify.js 28:34-66
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Hash.js
Module not found: Error: Can't resolve '@polkadot/util/is/hex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Hash.js 24:34-66
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/resultToText.js
Module not found: Error: Can't resolve '@polkadot/util/is/object' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/resultToText.js 22:37-72
 @ ../app-rpc/src/Results.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/util/triggerChange.js
Module not found: Error: Can't resolve '@polkadot/util/is/observable' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/util'
 @ ../ui-react-rx/src/util/triggerChange.js 14:41-80
 @ ../ui-react-rx/src/with/observable.js
 @ ../ui-react-rx/src/with/apiCall.js
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeName.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/isAvailable.js
Module not found: Error: Can't resolve '@polkadot/util/is/string' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src'
 @ ../ui-keyring/src/isAvailable.js 10:37-72
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/address/get.js
Module not found: Error: Can't resolve '@polkadot/util/is/string' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/address'
 @ ../ui-keyring/src/address/get.js 10:37-72
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/resultToText.js
Module not found: Error: Can't resolve '@polkadot/util/is/u8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/resultToText.js 24:34-66
 @ ../app-rpc/src/Results.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/valueToText.js
Module not found: Error: Can't resolve '@polkadot/util/is/u8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/valueToText.js 20:34-66
 @ ../app-storage/src/Query.js
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-identicon/src/seeder.js
Module not found: Error: Can't resolve '@polkadot/util/is/u8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-identicon/src'
 @ ../ui-identicon/src/seeder.js 12:14-46
 @ ../ui-identicon/src/index.js
 @ ../ui-react/src/IdentityIcon/appendIcon.js
 @ ../ui-react/src/IdentityIcon/index.js
 @ ../ui-keyring/src/options/KeyPair.js
 @ ../ui-keyring/src/options/item.js
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Extrinsic.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Extrinsic.js 26:40-78
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/Results.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/Results.js 16:40-78
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/Selection.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/Selection.js 28:40-78
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Input.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Input.js 16:40-78
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Or.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/Or.js 14:40-78
 @ ../ui-app/src/Button/index.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/index.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/index.js 16:40-78
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/values.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/values.js 10:40-78
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Code.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/concat' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Code.js 16:37-73
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/KeyValue.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/concat' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/KeyValue.js 16:37-73
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/sign.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/concat' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/sign.js 14:37-73
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/fromString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 28:41-81
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Sign.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/fromString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Sign.js 32:41-81
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Verify.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/fromString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Verify.js 30:41-81
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Hash.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/fromString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Hash.js 26:41-81
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-identicon/src/seeder.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/fromString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-identicon/src'
 @ ../ui-identicon/src/seeder.js 14:22-62
 @ ../ui-identicon/src/index.js
 @ ../ui-react/src/IdentityIcon/appendIcon.js
 @ ../ui-react/src/IdentityIcon/index.js
 @ ../ui-keyring/src/options/KeyPair.js
 @ ../ui-keyring/src/options/item.js
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 30:36-71
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BestHash.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src'
 @ ../app-explorer/src/BestHash.js 14:36-71
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BlockHeader/index.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src/BlockHeader'
 @ ../app-explorer/src/BlockHeader/index.js 20:36-71
 @ ../app-explorer/src/BlockHeaders.js
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/resultToText.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/resultToText.js 18:37-72
 @ ../app-rpc/src/Results.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Sign.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Sign.js 34:36-71
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/Match.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src'
 @ ../app-vanitygen/src/Match.js 22:36-71
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/valueToText.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/valueToText.js 16:36-71
 @ ../app-storage/src/Query.js
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/sign.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/sign.js 16:36-71
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Extrinsic.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Extrinsic.js 26:36-71
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/i18n.js
Module not found: Error: Can't resolve 'i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/i18n.js 10:38-56
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/i18n.js
Module not found: Error: Can't resolve 'i18next-browser-languagedetector' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/i18n.js 12:61-104
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/i18n.js
Module not found: Error: Can't resolve 'i18next-xhr-backend' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/i18n.js 14:48-78
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/react-hot-loader/dist/react-hot-loader.development.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/react-hot-loader/dist'
 @ /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/react-hot-loader/dist/react-hot-loader.development.js 7:12-28
 @ /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/react-hot-loader/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/index.js 14:36-52
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Editor.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Editor.js 12:36-52
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 12:36-52
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Address.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Address.js 12:36-52
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/Editor.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-addresses/src'
 @ ../app-addresses/src/Editor.js 12:36-52
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/Creator.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-addresses/src'
 @ ../app-addresses/src/Creator.js 12:36-52
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-addresses/src'
 @ ../app-addresses/src/index.js 14:36-52
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src'
 @ ../app-explorer/src/index.js 12:36-52
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BlockHeaders.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src'
 @ ../app-explorer/src/BlockHeaders.js 14:36-52
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BlockHeader/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src/BlockHeader'
 @ ../app-explorer/src/BlockHeader/index.js 12:36-52
 @ ../app-explorer/src/BlockHeaders.js
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/index.js 12:36-52
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Account.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Account.js 12:36-52
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Selection.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Selection.js 14:36-52
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Nonce.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Nonce.js 10:36-52
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Extrinsic.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Extrinsic.js 16:36-52
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Params/Proposal.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src/Params'
 @ ../app-extrinsics/src/Params/Proposal.js 10:36-52
 @ ../app-extrinsics/src/Params/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Params/Account.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src/Params'
 @ ../app-extrinsics/src/Params/Account.js 12:36-52
 @ ../app-extrinsics/src/Params/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Params/Call.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src/Params'
 @ ../app-extrinsics/src/Params/Call.js 10:36-52
 @ ../app-extrinsics/src/Params/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Params/Extrinsic.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src/Params'
 @ ../app-extrinsics/src/Params/Extrinsic.js 12:36-52
 @ ../app-extrinsics/src/Params/Call.js
 @ ../app-extrinsics/src/Params/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/Account.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/Account.js 14:36-52
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/index.js 12:36-52
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/Selection.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/Selection.js 18:36-52
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/Results.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/Results.js 10:36-52
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/index.js 14:36-52
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/Query.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/Query.js 12:36-52
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/Queries.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/Queries.js 10:36-52
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/Selection.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/Selection.js 14:36-52
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Unlock.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Unlock.js 12:36-52
 @ ../app-toolbox/src/Sign.js
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/index.js 14:36-52
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Hash.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Hash.js 12:36-52
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Verify.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Verify.js 12:36-52
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Sign.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Sign.js 12:36-52
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src'
 @ ../app-vanitygen/src/index.js 20:36-52
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/Match.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src'
 @ ../app-vanitygen/src/Match.js 12:36-52
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/NodeInfo.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src'
 @ ./src/NodeInfo.js 10:36-52
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src'
 @ ./src/index.js 7:36-52
 @ multi ./src/index.js

ERROR in ./src/Connecting/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/Connecting'
 @ ./src/Connecting/index.js 12:36-52
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/Content/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/Content'
 @ ./src/Content/index.js 12:36-52
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/NotFound/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/NotFound'
 @ ./src/NotFound/index.js 12:36-52
 @ ./src/routing/unknown.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/SideBar/Item.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/SideBar'
 @ ./src/SideBar/Item.js 12:36-52
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/SideBar/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/SideBar'
 @ ./src/SideBar/index.js 12:36-52
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Static.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Static.js 10:36-52
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Dropdown.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Dropdown.js 12:36-52
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Output.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Output.js 10:36-52
 @ ../app-toolbox/src/Sign.js
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Input.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Input.js 12:36-52
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/index.js 14:36-52
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Labelled.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Labelled.js 10:36-52
 @ ../ui-app/src/Input.js
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Password.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Password.js 12:36-52
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/CopyButton.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/CopyButton.js 10:36-52
 @ ../app-accounts/src/Address.js
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Group.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/Group.js 10:36-52
 @ ../ui-app/src/Button/index.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Or.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/Or.js 10:36-52
 @ ../ui-app/src/Button/index.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/index.js 12:36-52
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Divider.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/Divider.js 10:36-52
 @ ../ui-app/src/Button/index.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputAddress/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputAddress'
 @ ../ui-app/src/InputAddress/index.js 14:36-52
 @ ../app-accounts/src/Editor.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/SelectSection.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic'
 @ ../ui-app/src/InputExtrinsic/SelectSection.js 10:36-52
 @ ../ui-app/src/InputExtrinsic/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/SelectMethod.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic'
 @ ../ui-app/src/InputExtrinsic/SelectMethod.js 10:36-52
 @ ../ui-app/src/InputExtrinsic/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic'
 @ ../ui-app/src/InputExtrinsic/index.js 14:36-52
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/options/method.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic/options'
 @ ../ui-app/src/InputExtrinsic/options/method.js 14:36-52
 @ ../ui-app/src/InputExtrinsic/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc'
 @ ../ui-app/src/InputRpc/index.js 14:36-52
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/SelectSection.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc'
 @ ../ui-app/src/InputRpc/SelectSection.js 10:36-52
 @ ../ui-app/src/InputRpc/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/SelectMethod.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc'
 @ ../ui-app/src/InputRpc/SelectMethod.js 10:36-52
 @ ../ui-app/src/InputRpc/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/options/method.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc/options'
 @ ../ui-app/src/InputRpc/options/method.js 14:36-52
 @ ../ui-app/src/InputRpc/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage'
 @ ../ui-app/src/InputStorage/index.js 14:36-52
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/SelectKey.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage'
 @ ../ui-app/src/InputStorage/SelectKey.js 10:36-52
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/SelectSection.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage'
 @ ../ui-app/src/InputStorage/SelectSection.js 10:36-52
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/options/key.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage/options'
 @ ../ui-app/src/InputStorage/options/key.js 14:36-52
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/index.js 16:36-52
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Account.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Account.js 12:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Amount.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Amount.js 14:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Bool.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Bool.js 12:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Unknown.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Unknown.js 10:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Bytes.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Bytes.js 10:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/index.js 12:36-52
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/KeyValue.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/KeyValue.js 12:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/File.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/File.js 14:36-52
 @ ../ui-app/src/Params/Param/Code.js
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/String.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/String.js 12:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Bare.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Bare.js 10:36-52
 @ ../ui-app/src/Params/Param/Bool.js
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Base.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Base.js 10:36-52
 @ ../ui-app/src/Params/Param/Unknown.js
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Code.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Code.js 12:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/VoteThreshold.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/VoteThreshold.js 12:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Hash.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Hash.js 10:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/BaseBytes.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/BaseBytes.js 12:36-52
 @ ../ui-app/src/Params/Param/Bytes.js
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/options/KeyPair.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/options'
 @ ../ui-keyring/src/options/KeyPair.js 12:36-52
 @ ../ui-keyring/src/options/item.js
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/options/item.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/options'
 @ ../ui-keyring/src/options/item.js 10:36-52
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Div.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Div.js 10:36-52
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeName.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Api.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Api.js 14:36-52
 @ ../ui-react-rx/src/with/api.js
 @ ../ui-react-rx/src/with/apiCall.js
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeName.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/api.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/api.js 12:36-52
 @ ../ui-react-rx/src/with/apiCall.js
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeName.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/apiCall.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/apiCall.js 12:36-52
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeName.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/storage.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/storage.js 16:36-52
 @ ../ui-react-rx/src/with/storageDiv.js
 @ ../ui-react-rx/src/Nonce.js
 @ ../app-accounts/src/Address.js
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/observable.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/observable.js 16:36-52
 @ ../ui-react-rx/src/with/apiCall.js
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeName.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react/src/IdentityIcon/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react/src/IdentityIcon'
 @ ../ui-react/src/IdentityIcon/index.js 12:36-52
 @ ../ui-keyring/src/options/KeyPair.js
 @ ../ui-keyring/src/options/item.js
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Modal.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Modal.js 14:36-52
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Unlock.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Unlock.js 12:36-52
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Extrinsic.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Extrinsic.js 16:36-52
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/index.js 12:36-52
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Status.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Status.js 10:36-52
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Queue.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Queue.js 14:36-52
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/CopyButton.js
Module not found: Error: Can't resolve 'react-copy-to-clipboard' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/CopyButton.js 12:51-85
 @ ../app-accounts/src/Address.js
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/index.js
Module not found: Error: Can't resolve 'react-dom' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/index.js 16:39-59
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/File.js
Module not found: Error: Can't resolve 'react-dropzone' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/File.js 16:44-69
 @ ../ui-app/src/Params/Param/Code.js
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/translate.js 8:20-44
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-addresses/src'
 @ ../app-addresses/src/translate.js 8:20-44
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src'
 @ ../app-explorer/src/translate.js 8:20-44
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/translate.js 8:20-44
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/translate.js 8:20-44
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/translate.js 8:20-44
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Unlock.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Unlock.js 14:20-44
 @ ../app-toolbox/src/Sign.js
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/translate.js 8:20-44
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src'
 @ ../app-vanitygen/src/translate.js 8:20-44
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src'
 @ ./src/translate.js 8:20-44
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/translate.js 8:20-44
 @ ../ui-app/src/Button/Or.js
 @ ../ui-app/src/Button/index.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/i18n.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/i18n.js 16:20-44
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/translate.js 8:20-44
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Extrinsic.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Extrinsic.js 18:20-44
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/Content/index.js
Module not found: Error: Can't resolve 'react-router' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/Content'
 @ ./src/Content/index.js 14:19-42
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/SideBar/Item.js
Module not found: Error: Can't resolve 'react-router-dom' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/SideBar'
 @ ./src/SideBar/Item.js 14:22-49
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/index.js
Module not found: Error: Can't resolve 'react-router-dom' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/index.js 18:22-49
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/styles.js
Module not found: Error: Can't resolve 'semantic-ui-css/semantic.min.css' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/styles.js 3:0-43
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Menu.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/collections/Menu' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Menu.js 12:35-88
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Group.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Button' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/Group.js 12:37-89
 @ ../ui-app/src/Button/index.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Or.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Button' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/Or.js 12:37-89
 @ ../ui-app/src/Button/index.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/index.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Button' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/index.js 14:38-90
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Menu.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Divider' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Menu.js 10:38-91
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Icon.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Icon' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Icon.js 10:35-85
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Input.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Input' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Input.js 14:36-87
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Labelled.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Label' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Labelled.js 12:36-87
 @ ../ui-app/src/Input.js
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Dropdown.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/modules/Dropdown' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Dropdown.js 14:39-92
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Modal.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/modules/Modal' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Modal.js 10:36-86
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/loadAll.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src'
 @ ../ui-keyring/src/loadAll.js 10:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/account/save.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/account'
 @ ../ui-keyring/src/account/save.js 10:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/account/meta.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/account'
 @ ../ui-keyring/src/account/meta.js 10:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/account/forget.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/account'
 @ ../ui-keyring/src/account/forget.js 10:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/address/forget.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/address'
 @ ../ui-keyring/src/address/forget.js 10:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/address/metaRecent.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/address'
 @ ../ui-keyring/src/address/metaRecent.js 10:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/address/meta.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/address'
 @ ../ui-keyring/src/address/meta.js 14:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js
Child html-webpack-plugin for "index.html":
         Asset     Size  Chunks  Chunk Names
    index.html  557 KiB       0  
    Entrypoint undefined = index.html
    [../../node_modules/html-webpack-plugin/lib/loader.js!./public/index.html] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/html-webpack-plugin/lib/loader.js!./public/index.html 707 bytes {0} [built]
    [../../node_modules/lodash/lodash.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/lodash/lodash.js 527 KiB {0} [built]
    [../../node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 489 bytes {0} [built]
    [../../node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {0} [built]
ℹ ｢wdm｣: Failed to compile.
^C

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ ℹ ｢serve｣: Process Ended via SIGINT
webpack-serve[8975]: ../src/node.cc:4012:void node::PlatformExit(): Assertion `(err) != (-1)' failed.
 1: node::Abort() [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 2: node::MakeCallback(v8::Isolate*, v8::Local<v8::Object>, char const*, int, v8::Local<v8::Value>*, node::async_context) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 3: node::PlatformExit() [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 4: __cxa_finalize_ranges [/usr/lib/system/libsystem_c.dylib]
 5: exit [/usr/lib/system/libsystem_c.dylib]
 6: node::Abort(v8::FunctionCallbackInfo<v8::Value> const&) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 7: v8::internal::FunctionCallbackArguments::Call(v8::internal::CallHandlerInfo*) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 8: v8::internal::MaybeHandle<v8::internal::Object> v8::internal::(anonymous namespace)::HandleApiCallHelper<false>(v8::internal::Isolate*, v8::internal::Handle<v8::internal::HeapObject>, v8::internal::Handle<v8::internal::HeapObject>, v8::internal::Handle<v8::internal::FunctionTemplateInfo>, v8::internal::Handle<v8::internal::Object>, v8::internal::BuiltinArguments) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 9: v8::internal::Builtin_Impl_HandleApiCall(v8::internal::BuiltinArguments, v8::internal::Isolate*) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
10: 0xaae803041bd
sh: line 1:  8975 Abort trap: 6           webpack-serve --config webpack.config.js --port 3000


 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ npm install --global lerna

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ cd ..

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp 
$ rm -rf app

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp 
$ ls
apps

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp 
$ rm -rf apps

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp 
$ git clone https://github.com/polkadot-js/apps
Cloning into 'apps'...
remote: Counting objects: 4635, done.
remote: Compressing objects: 100% (259/259), done.
remote: Total 4635 (delta 801), reused 725 (delta 653), pack-reused 3723
Receiving objects: 100% (4635/4635), 15.09 MiB | 920.00 KiB/s, done.
Resolving deltas: 100% (3360/3360), done.

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp 
$ cd apps/

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ yarn
yarn install v0.24.6
(node:9150) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "react-hot-loader@4.2.0" has unmet peer dependency "react@^15.0.0 || ^16.0.0".
[4/4] 📃  Building fresh packages...
success Saved lockfile.
✨  Done in 45.73s.

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ node --version
v10.4.0

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ ls
LICENSE     flow-typed    node_modules    postcss.config.js
README.md   jest.config.js    package.json    yarn.lock
babel.config.js   lerna.json    packages

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ printf -- "10.4.0" >> .nvmrc

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ ls
LICENSE     flow-typed    node_modules    postcss.config.js
README.md   jest.config.js    package.json    yarn.lock
babel.config.js   lerna.json    packages

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ printf -- "10.4.0" > .nvmrc

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ ls
LICENSE     flow-typed    node_modules    postcss.config.js
README.md   jest.config.js    package.json    yarn.lock
babel.config.js   lerna.json    packages

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ touch .nvmrc && printf -- "10.4.0" > .nvmrc

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ ls
LICENSE     flow-typed    node_modules    postcss.config.js
README.md   jest.config.js    package.json    yarn.lock
babel.config.js   lerna.json    packages

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ rm .nvmrc 

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ printf -- "10.4.0" > .nvmrc

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ ls -al
total 800
drwxr-xr-x    24 Ls  staff     768 11 Jun 19:01 .
drwxr-xr-x     3 Ls  staff      96 11 Jun 18:54 ..
-rw-r--r--     1 Ls  staff      55 11 Jun 18:54 .codeclimate.yml
-rw-r--r--     1 Ls  staff     166 11 Jun 18:54 .editorconfig
-rw-r--r--     1 Ls  staff      29 11 Jun 18:54 .eslintignore
-rw-r--r--     1 Ls  staff      81 11 Jun 18:54 .eslintrc.json
-rw-r--r--     1 Ls  staff     616 11 Jun 18:54 .flowconfig
drwxr-xr-x    12 Ls  staff     384 11 Jun 18:54 .git
-rw-r--r--     1 Ls  staff     183 11 Jun 18:54 .gitignore
-rw-r--r--     1 Ls  staff       0 11 Jun 18:54 .npmignore
-rw-r--r--     1 Ls  staff       6 11 Jun 19:01 .nvmrc
-rw-r--r--     1 Ls  staff      56 11 Jun 18:54 .stylelintrc.json
-rw-r--r--     1 Ls  staff     132 11 Jun 18:54 .travis.yml
-rw-r--r--     1 Ls  staff     768 11 Jun 18:54 LICENSE
-rw-r--r--     1 Ls  staff    4826 11 Jun 18:54 README.md
-rw-r--r--     1 Ls  staff      68 11 Jun 18:54 babel.config.js
drwxr-xr-x     6 Ls  staff     192 11 Jun 18:54 flow-typed
-rw-r--r--     1 Ls  staff     517 11 Jun 18:54 jest.config.js
-rw-r--r--     1 Ls  staff     206 11 Jun 18:54 lerna.json
drwxr-xr-x  1137 Ls  staff   36384 11 Jun 18:57 node_modules
-rw-r--r--     1 Ls  staff     991 11 Jun 18:54 package.json
drwxr-xr-x    17 Ls  staff     544 11 Jun 18:54 packages
-rw-r--r--     1 Ls  staff      64 11 Jun 18:54 postcss.config.js
-rw-r--r--     1 Ls  staff  337880 11 Jun 18:57 yarn.lock

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ cat .nvmrc 
10.4.0
 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ nvm use
Found '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/.nvmrc' with version <10.4.0>
Now using node v10.4.0 (npm v6.1.0)

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ WS_URL=wss://poc-1.polkadot.io:9944 yarn run start
yarn run v0.24.6
(node:9434) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
$ cd packages/apps && webpack-serve --config webpack.config.js --port 3000 
sh: webpack-serve: command not found
error Command failed with exit code 127.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ webpack-serve
-bash: webpack-serve: command not found

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ yarn add webpack-serve --dev
yarn add v0.24.6
(node:9468) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "react-hot-loader@4.2.0" has unmet peer dependency "react@^15.0.0 || ^16.0.0".
[4/4] 📃  Building fresh packages...
success Saved lockfile.
success Saved 1 new dependency.
└─ webpack-serve@1.0.4
✨  Done in 7.42s.

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ webpack-serve
-bash: webpack-serve: command not found

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ WS_URL=wss://poc-1.polkadot.io:9944 yarn run start
yarn run v0.24.6
(node:9491) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
$ cd packages/apps && webpack-serve --config webpack.config.js --port 3000 
✖ ｢config｣: An error ocurred while trying to load /Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js
              Did you forget to specify a --require?
/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@webpack-contrib/config-loader/lib/load.js:84
    throw new LoadConfigError(e, configPath);
    ^

LoadConfigError: Cannot find module 'copy-webpack-plugin'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.<anonymous> (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:9:27)
    at Module._compile (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:178:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:713:10)
    at Module.load (internal/modules/cjs/loader.js:612:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:551:12)
    at Function.Module._load (internal/modules/cjs/loader.js:543:3)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ 

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ yarn add copy-webpack-plugin --dev
yarn add v0.24.6
(node:9534) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "react-hot-loader@4.2.0" has unmet peer dependency "react@^15.0.0 || ^16.0.0".
[4/4] 📃  Building fresh packages...
success Saved lockfile.
success Saved 2 new dependencies.
├─ copy-webpack-plugin@4.5.1
└─ p-limit@1.2.0
✨  Done in 7.31s.

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ WS_URL=wss://poc-1.polkadot.io:9944 yarn run start
yarn run v0.24.6
(node:9551) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
$ cd packages/apps && webpack-serve --config webpack.config.js --port 3000 
✖ ｢config｣: An error ocurred while trying to load /Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js
              Did you forget to specify a --require?
/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@webpack-contrib/config-loader/lib/load.js:84
    throw new LoadConfigError(e, configPath);
    ^

LoadConfigError: Cannot find module 'mini-css-extract-plugin'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.<anonymous> (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:10:30)
    at Module._compile (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:178:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:713:10)
    at Module.load (internal/modules/cjs/loader.js:612:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:551:12)
    at Function.Module._load (internal/modules/cjs/loader.js:543:3)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at loadJs (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/cosmiconfig/dist/loaders.js:8:18)
    at Explorer.loadFileContent (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/cosmiconfig/dist/createExplorer.js:226:12)
    at Explorer.createCosmiconfigResultSync (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/cosmiconfig/dist/createExplorer.js:259:31)
    at cacheWrapper (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/cosmiconfig/dist/createExplorer.js:288:27)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ 

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ yarn add 
  webpack-serve \
  html-webpack-plugin \
  copy-webpack-plugin \
  mini-css-extract-plugin \
  babel-loader \
  css-loader \
  file-loader \
  postcss-loader \
  style-loader \
  thread-loader \
  url-loader \
yarn add v0.24.6
(node:9637) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
error Missing list of packages to add to your project.
info Visit https://yarnpkg.com/en/docs/cli/add for documentation about this command.

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$   webpack-serve \
>   html-webpack-plugin \
>   copy-webpack-plugin \
>   mini-css-extract-plugin \
>   babel-loader \
>   css-loader \
>   file-loader \
>   postcss-loader \
>   style-loader \
>   thread-loader \
>   url-loader \
>   --dev

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ yarn add webpack-serve \
>   html-webpack-plugin \
>   copy-webpack-plugin \
>   mini-css-extract-plugin \
>   babel-loader \
>   css-loader \
>   file-loader \
>   postcss-loader \
>   style-loader \
>   thread-loader \
>   url-loader \
>   --dev
yarn add v0.24.6
(node:9656) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
warning Pattern ["webpack-serve@^1.0.4"] is trying to unpack in the same destination "/Users/Ls/Library/Caches/Yarn/v1/npm-webpack-serve-1.0.4-d1c83955926969ba195e5032f978da92ef07829c" as pattern ["webpack-serve@^1.0.2"]. This could result in a non deterministic behavior, skipping.
[3/4] 🔗  Linking dependencies...
warning "react-hot-loader@4.2.0" has unmet peer dependency "react@^15.0.0 || ^16.0.0".
[4/4] 📃  Building fresh packages...
success Saved lockfile.
success Saved 121 new dependencies.
├─ alphanum-sort@1.0.2
├─ autoprefixer@6.7.7
├─ babel-loader@7.1.4
├─ balanced-match@0.4.2
├─ boolbase@1.0.0
├─ browserslist@1.7.7
├─ camel-case@3.0.0
├─ caniuse-api@1.6.1
├─ caniuse-db@1.0.30000851
├─ clap@1.2.3
├─ clean-css@4.1.11
├─ coa@1.0.4
├─ color-convert@1.9.1
├─ color-name@1.1.3
├─ color-string@0.3.0
├─ color@0.11.4
├─ colormin@1.1.2
├─ copy-webpack-plugin@4.5.1
├─ cosmiconfig@2.2.2
├─ css-color-names@0.0.4
├─ css-loader@0.28.11
├─ css-select@1.2.0
├─ css-selector-tokenizer@0.7.0
├─ css-what@2.1.0
├─ cssesc@0.1.0
├─ cssnano@3.10.0
├─ csso@2.3.2
├─ defined@1.0.0
├─ dom-converter@0.1.4
├─ domhandler@2.1.0
├─ domutils@1.1.6
├─ electron-to-chromium@1.3.46
├─ fastparse@1.1.1
├─ file-loader@1.1.11
├─ flatten@1.0.2
├─ he@1.1.1
├─ html-comment-regex@1.1.1
├─ html-minifier@3.5.16
├─ html-webpack-plugin@3.2.0
├─ icss-replace-symbols@1.1.0
├─ icss-utils@2.1.0
├─ is-absolute-url@2.1.0
├─ is-svg@2.1.0
├─ js-yaml@3.11.0
├─ loader-utils@1.1.0
├─ lodash.camelcase@4.3.0
├─ lodash.memoize@4.1.2
├─ lodash.uniq@4.5.0
├─ lodash@4.17.10
├─ lower-case@1.1.4
├─ math-expression-evaluator@1.2.17
├─ mime@2.3.1
├─ mini-css-extract-plugin@0.4.0
├─ mkdirp@0.5.1
├─ no-case@2.3.2
├─ normalize-url@1.9.1
├─ nth-check@1.0.1
├─ os-homedir@1.0.2
├─ param-case@2.1.1
├─ postcss-calc@5.3.1
├─ postcss-colormin@2.2.2
├─ postcss-convert-values@2.6.1
├─ postcss-discard-comments@2.0.4
├─ postcss-discard-duplicates@2.1.0
├─ postcss-discard-empty@2.1.0
├─ postcss-discard-overridden@0.1.1
├─ postcss-discard-unused@2.2.3
├─ postcss-filter-plugins@2.0.3
├─ postcss-load-config@1.2.0
├─ postcss-load-options@1.2.0
├─ postcss-load-plugins@2.3.0
├─ postcss-loader@2.1.5
├─ postcss-merge-idents@2.1.7
├─ postcss-merge-longhand@2.0.2
├─ postcss-merge-rules@2.1.2
├─ postcss-message-helpers@2.0.0
├─ postcss-minify-font-values@1.0.5
├─ postcss-minify-gradients@1.0.5
├─ postcss-minify-params@1.2.2
├─ postcss-minify-selectors@2.1.1
├─ postcss-modules-extract-imports@1.2.0
├─ postcss-modules-local-by-default@1.2.0
├─ postcss-modules-scope@1.1.0
├─ postcss-modules-values@1.3.0
├─ postcss-normalize-charset@1.1.1
├─ postcss-normalize-url@3.0.8
├─ postcss-ordered-values@2.2.3
├─ postcss-reduce-idents@2.4.0
├─ postcss-reduce-initial@1.0.1
├─ postcss-reduce-transforms@1.0.4
├─ postcss-selector-parser@2.2.3
├─ postcss-svgo@2.1.6
├─ postcss-unique-selectors@2.0.2
├─ postcss-value-parser@3.3.0
├─ postcss-zindex@2.2.0
├─ postcss@5.2.18
├─ prepend-http@1.0.4
├─ pretty-error@2.1.1
├─ q@1.5.1
├─ query-string@4.3.4
├─ reduce-css-calc@1.3.0
├─ reduce-function-call@1.0.2
├─ relateurl@0.2.7
├─ renderkid@2.0.1
├─ require-from-string@1.2.1
├─ sax@1.2.4
├─ schema-utils@0.4.5
├─ source-map@0.5.7
├─ style-loader@0.21.0
├─ svgo@0.7.2
├─ thread-loader@1.1.5
├─ toposort@1.0.7
├─ uglify-js@3.3.28
├─ uniqs@2.0.0
├─ upper-case@1.1.3
├─ url-loader@1.0.1
├─ util.promisify@1.0.0
├─ utila@0.3.3
├─ vendors@1.0.2
├─ webpack-serve@1.0.4
└─ whet.extend@0.9.9
✨  Done in 17.76s.

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ WS_URL=wss://poc-1.polkadot.io:9944 yarn run start
yarn run v0.24.6
(node:9676) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
$ cd packages/apps && webpack-serve --config webpack.config.js --port 3000 
ℹ ｢hot｣: webpack: Compiling...
ℹ ｢hot｣: WebSocket Server Listening at localhost:8081
ℹ ｢serve｣: Project is running at http://localhost:3000
ℹ ｢serve｣: Server URI copied to clipboard
ℹ ｢hot｣: webpack: Compiling Done
✖ ｢wdm｣: Hash: da6f212d1b70234fbd8e
Version: webpack 4.8.3
Time: 11968ms
Built at: 06/11/2018 7:14:28 PM
               Asset       Size   Chunks             Chunk Names
    main.da6f212d.js    149 KiB     main  [emitted]  main
 runtime.da6f212d.js   29.7 KiB  runtime  [emitted]  runtime
          index.html  619 bytes           [emitted]  
locales/en/apps.json    3 bytes           [emitted]  
       manifest.json  337 bytes           [emitted]  
         favicon.ico   37.2 KiB           [emitted]  
Entrypoint main = runtime.da6f212d.js main.da6f212d.js
[../../node_modules/loglevelnext/dist/loglevelnext.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/loglevelnext/dist/loglevelnext.js 55.9 KiB {main} [built]
[../../node_modules/punycode/punycode.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/punycode/punycode.js 14.3 KiB {main} [built]
[../../node_modules/querystring-es3/encode.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/querystring-es3/encode.js 2.48 KiB {main} [built]
[0] multi ./src/index.js 28 bytes {main} [built]
[../../node_modules/webpack-hot-client/client/index.js?8d3e4b96-9d31-4d90-bc10-de0798fd4609] (webpack)-hot-client/client?8d3e4b96-9d31-4d90-bc10-de0798fd4609 2.47 KiB {main} [built]
[1] multi webpack-hot-client/client?8d3e4b96-9d31-4d90-bc10-de0798fd4609 ./src/index.js 40 bytes {main} [built]
[../../node_modules/querystring-es3/index.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/querystring-es3/index.js 127 bytes {main} [built]
[../../node_modules/url/url.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/url/url.js 22.8 KiB {main} [built]
[../../node_modules/url/util.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/url/util.js 314 bytes {main} [built]
[../../node_modules/webpack-hot-client/client/hot.js] (webpack)-hot-client/client/hot.js 4.91 KiB {main} [built]
[../../node_modules/webpack-hot-client/client/log.js] (webpack)-hot-client/client/log.js 2.4 KiB {main} [built]
[../../node_modules/webpack-hot-client/client/socket.js] (webpack)-hot-client/client/socket.js 1.39 KiB {main} [built]
[../../node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 509 bytes {main} [built]
[../../node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 519 bytes {main} [built]
[./src/index.js] 1.5 KiB {main} [built] [failed] [1 error]
    + 1 hidden module

ERROR in ./src/index.js
Module build failed: Thread Loader (Worker 0)
Couldn't find preset "env" relative to directory "/Users/Ls"

    at /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:293:19
    at Array.map (<anonymous>)
    at OptionManager.resolvePresets (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:275:20)
    at OptionManager.mergePresets (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:264:10)
    at OptionManager.mergeOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:249:14)
    at OptionManager.init (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:368:12)
    at File.initOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/index.js:212:65)
    at new File (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/index.js:135:24)
    at Pipeline.transform (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/pipeline.js:46:16)
    at transpile (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-loader/lib/index.js:50:20)
 @ multi ./src/index.js
Child html-webpack-plugin for "index.html":
         Asset     Size  Chunks  Chunk Names
    index.html  556 KiB       0  
    Entrypoint undefined = index.html
    [../../node_modules/html-webpack-plugin/lib/loader.js!./public/index.html] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/html-webpack-plugin/lib/loader.js!./public/index.html 707 bytes {0} [built]
    [../../node_modules/lodash/lodash.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/lodash/lodash.js 527 KiB {0} [built]
    [../../node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 509 bytes {0} [built]
    [../../node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 519 bytes {0} [built]
ℹ ｢wdm｣: Failed to compile.
touch ^Cℹ ｢serve｣: Process Ended via SIGINT


 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ webpack-serve[9678]: ../src/node.cc:4012:void node::PlatformExit(): Assertion `(err) != (-1)' failed.
 1: node::Abort() [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 2: node::MakeCallback(v8::Isolate*, v8::Local<v8::Object>, char const*, int, v8::Local<v8::Value>*, node::async_context) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 3: node::PlatformExit() [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 4: __cxa_finalize_ranges [/usr/lib/system/libsystem_c.dylib]
 5: exit [/usr/lib/system/libsystem_c.dylib]
 6: node::Abort(v8::FunctionCallbackInfo<v8::Value> const&) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 7: v8::internal::FunctionCallbackArguments::Call(v8::internal::CallHandlerInfo*) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 8: v8::internal::MaybeHandle<v8::internal::Object> v8::internal::(anonymous namespace)::HandleApiCallHelper<false>(v8::internal::Isolate*, v8::internal::Handle<v8::internal::HeapObject>, v8::internal::Handle<v8::internal::HeapObject>, v8::internal::Handle<v8::internal::FunctionTemplateInfo>, v8::internal::Handle<v8::internal::Object>, v8::internal::BuiltinArguments) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 9: v8::internal::Builtin_Impl_HandleApiCall(v8::internal::BuiltinArguments, v8::internal::Isolate*) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
10: 0x2dbd848041bd
11: 0x2dbd84813429
12: 0x2dbd84813429
13: 0x2dbd84813429
sh: line 1:  9678 Abort trap: 6           webpack-serve --config webpack.config.js --port 3000


 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ touch .babelrc

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ code .

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ WS_URL=wss://poc-1.polkadot.io:9944 yarn run start
yarn run v0.24.6
(node:9835) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
$ cd packages/apps && webpack-serve --config webpack.config.js --port 3000 
ℹ ｢hot｣: webpack: Compiling...
ℹ ｢hot｣: WebSocket Server Listening at localhost:8081
ℹ ｢serve｣: Project is running at http://localhost:3000
ℹ ｢serve｣: Server URI copied to clipboard
ℹ ｢hot｣: webpack: Compiling Done
✖ ｢wdm｣: Hash: 559eacd494aeee507727
Version: webpack 4.8.3
Time: 12161ms
Built at: 06/11/2018 7:19:01 PM
               Asset       Size   Chunks             Chunk Names
    main.559eacd4.js    150 KiB     main  [emitted]  main
 runtime.559eacd4.js   29.7 KiB  runtime  [emitted]  runtime
          index.html  619 bytes           [emitted]  
locales/en/apps.json    3 bytes           [emitted]  
       manifest.json  337 bytes           [emitted]  
         favicon.ico   37.2 KiB           [emitted]  
Entrypoint main = runtime.559eacd4.js main.559eacd4.js
[../../node_modules/loglevelnext/dist/loglevelnext.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/loglevelnext/dist/loglevelnext.js 55.9 KiB {main} [built]
[../../node_modules/punycode/punycode.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/punycode/punycode.js 14.3 KiB {main} [built]
[../../node_modules/querystring-es3/encode.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/querystring-es3/encode.js 2.48 KiB {main} [built]
[0] multi ./src/index.js 28 bytes {main} [built]
[../../node_modules/webpack-hot-client/client/index.js?6b195ed0-d0a5-42fe-8faa-c696396e22e4] (webpack)-hot-client/client?6b195ed0-d0a5-42fe-8faa-c696396e22e4 2.47 KiB {main} [built]
[1] multi webpack-hot-client/client?6b195ed0-d0a5-42fe-8faa-c696396e22e4 ./src/index.js 40 bytes {main} [built]
[../../node_modules/querystring-es3/index.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/querystring-es3/index.js 127 bytes {main} [built]
[../../node_modules/url/url.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/url/url.js 22.8 KiB {main} [built]
[../../node_modules/url/util.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/url/util.js 314 bytes {main} [built]
[../../node_modules/webpack-hot-client/client/hot.js] (webpack)-hot-client/client/hot.js 4.91 KiB {main} [built]
[../../node_modules/webpack-hot-client/client/log.js] (webpack)-hot-client/client/log.js 2.4 KiB {main} [built]
[../../node_modules/webpack-hot-client/client/socket.js] (webpack)-hot-client/client/socket.js 1.39 KiB {main} [built]
[../../node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 509 bytes {main} [built]
[../../node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 519 bytes {main} [built]
[./src/index.js] 2.55 KiB {main} [built] [failed] [1 error]
    + 1 hidden module

ERROR in ./src/index.js
Module build failed: Thread Loader (Worker 0)
Requires Babel "^7.0.0-0", but was loaded with "6.26.3". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel. (While processing preset: "/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/preset-env/lib/index.js")

    at throwVersionError (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/helper-plugin-utils/lib/index.js:65:11)
    at Object.assertVersion (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/helper-plugin-utils/lib/index.js:13:11)
    at _default (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/preset-env/lib/index.js:150:7)
    at /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/helper-plugin-utils/lib/index.js:19:12
    at /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:317:46
    at Array.map (<anonymous>)
    at OptionManager.resolvePresets (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:275:20)
    at OptionManager.mergePresets (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:264:10)
    at OptionManager.mergeOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:249:14)
    at OptionManager.init (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:368:12)
    at File.initOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/index.js:212:65)
    at new File (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/index.js:135:24)
    at Pipeline.transform (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/pipeline.js:46:16)
    at transpile (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-loader/lib/index.js:50:20)
    at Object.module.exports (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-loader/lib/index.js:173:20)
 @ multi ./src/index.js
Child html-webpack-plugin for "index.html":
         Asset     Size  Chunks  Chunk Names
    index.html  556 KiB       0  
    Entrypoint undefined = index.html
    [../../node_modules/html-webpack-plugin/lib/loader.js!./public/index.html] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/html-webpack-plugin/lib/loader.js!./public/index.html 707 bytes {0} [built]
    [../../node_modules/lodash/lodash.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/lodash/lodash.js 527 KiB {0} [built]
    [../../node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 509 bytes {0} [built]
    [../../node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 519 bytes {0} [built]
ℹ ｢wdm｣: Failed to compile.
babel^Cℹ ｢serve｣: Process Ended via SIGINT


 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ babel --version
6.18.0 (babel-core 6.18.2)

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ subl .

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ yarn add @babel/core@7.0.0-beta.40
yarn add v0.24.6
(node:10016) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "react-hot-loader@4.2.0" has unmet peer dependency "react@^15.0.0 || ^16.0.0".
[4/4] 📃  Building fresh packages...
success Saved lockfile.
success Saved 4 new dependencies.
├─ @babel/core@7.0.0-beta.40
├─ @babel/generator@7.0.0-beta.40
├─ @babel/helpers@7.0.0-beta.40
└─ debug@3.1.0
✨  Done in 16.59s.

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ yarn add @babel/core@7.0.0-beta.47
yarn add v0.24.6
(node:10045) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "react-hot-loader@4.2.0" has unmet peer dependency "react@^15.0.0 || ^16.0.0".
[4/4] 📃  Building fresh packages...
success Saved lockfile.
success Saved 1 new dependency.
└─ @babel/core@7.0.0-beta.47
✨  Done in 13.61s.

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ WS_URL=wss://poc-1.polkadot.io:9944 yarn run start
yarn run v0.24.6
(node:10065) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
$ cd packages/apps && webpack-serve --config webpack.config.js --port 3000 
ℹ ｢hot｣: webpack: Compiling...
ℹ ｢hot｣: WebSocket Server Listening at localhost:8081
ℹ ｢serve｣: Project is running at http://localhost:3000
ℹ ｢serve｣: Server URI copied to clipboard
ℹ ｢hot｣: webpack: Compiling Done
✖ ｢wdm｣: Hash: 59181d6f5008cdecf92e
Version: webpack 4.8.3
Time: 12236ms
Built at: 06/11/2018 7:29:26 PM
               Asset       Size   Chunks             Chunk Names
    main.59181d6f.js    150 KiB     main  [emitted]  main
 runtime.59181d6f.js   29.7 KiB  runtime  [emitted]  runtime
          index.html  619 bytes           [emitted]  
locales/en/apps.json    3 bytes           [emitted]  
       manifest.json  337 bytes           [emitted]  
         favicon.ico   37.2 KiB           [emitted]  
Entrypoint main = runtime.59181d6f.js main.59181d6f.js
[../../node_modules/loglevelnext/dist/loglevelnext.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/loglevelnext/dist/loglevelnext.js 55.9 KiB {main} [built]
[../../node_modules/punycode/punycode.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/punycode/punycode.js 14.3 KiB {main} [built]
[../../node_modules/querystring-es3/encode.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/querystring-es3/encode.js 2.48 KiB {main} [built]
[0] multi ./src/index.js 28 bytes {main} [built]
[../../node_modules/webpack-hot-client/client/index.js?70cc12c2-8ff0-4ae5-9645-c607d801d89d] (webpack)-hot-client/client?70cc12c2-8ff0-4ae5-9645-c607d801d89d 2.47 KiB {main} [built]
[1] multi webpack-hot-client/client?70cc12c2-8ff0-4ae5-9645-c607d801d89d ./src/index.js 40 bytes {main} [built]
[../../node_modules/querystring-es3/index.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/querystring-es3/index.js 127 bytes {main} [built]
[../../node_modules/url/url.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/url/url.js 22.8 KiB {main} [built]
[../../node_modules/url/util.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/url/util.js 314 bytes {main} [built]
[../../node_modules/webpack-hot-client/client/hot.js] (webpack)-hot-client/client/hot.js 4.91 KiB {main} [built]
[../../node_modules/webpack-hot-client/client/log.js] (webpack)-hot-client/client/log.js 2.4 KiB {main} [built]
[../../node_modules/webpack-hot-client/client/socket.js] (webpack)-hot-client/client/socket.js 1.39 KiB {main} [built]
[../../node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 509 bytes {main} [built]
[../../node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 519 bytes {main} [built]
[./src/index.js] 2.55 KiB {main} [built] [failed] [1 error]
    + 1 hidden module

ERROR in ./src/index.js
Module build failed: Thread Loader (Worker 0)
Requires Babel "^7.0.0-0", but was loaded with "6.26.3". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel. (While processing preset: "/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/preset-env/lib/index.js")

    at throwVersionError (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/helper-plugin-utils/lib/index.js:65:11)
    at Object.assertVersion (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/helper-plugin-utils/lib/index.js:13:11)
    at _default (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/preset-env/lib/index.js:150:7)
    at /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/helper-plugin-utils/lib/index.js:19:12
    at /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:317:46
    at Array.map (<anonymous>)
    at OptionManager.resolvePresets (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:275:20)
    at OptionManager.mergePresets (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:264:10)
    at OptionManager.mergeOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:249:14)
    at OptionManager.init (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:368:12)
    at File.initOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/index.js:212:65)
    at new File (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/index.js:135:24)
    at Pipeline.transform (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/pipeline.js:46:16)
    at transpile (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-loader/lib/index.js:50:20)
    at Object.module.exports (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-loader/lib/index.js:173:20)
 @ multi ./src/index.js
Child html-webpack-plugin for "index.html":
         Asset     Size  Chunks  Chunk Names
    index.html  556 KiB       0  
    Entrypoint undefined = index.html
    [../../node_modules/html-webpack-plugin/lib/loader.js!./public/index.html] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/html-webpack-plugin/lib/loader.js!./public/index.html 707 bytes {0} [built]
    [../../node_modules/lodash/lodash.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/lodash/lodash.js 527 KiB {0} [built]
    [../../node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 509 bytes {0} [built]
    [../../node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 519 bytes {0} [built]
ℹ ｢wdm｣: Failed to compile.
^[[A^[[A^Cℹ ｢serve｣: Process Ended via SIGINT


 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ subl .yarn add babel-loader babel-core babel-preset-env webpack --dev

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ yarn add babel-core babel-preset-env webpack --dev
yarn add v0.24.6
(node:10249) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
warning Pattern ["babel-core@^6.26.3"] is trying to unpack in the same destination "/Users/Ls/Library/Caches/Yarn/v1/npm-babel-core-6.26.3-b2e2f09e342d0f0c88e2f02e067794125e75c207" as pattern ["babel-core@^6.26.0","babel-core@^6.0.0"]. This could result in a non deterministic behavior, skipping.
[3/4] 🔗  Linking dependencies...
warning "react-hot-loader@4.2.0" has unmet peer dependency "react@^15.0.0 || ^16.0.0".
[4/4] 📃  Building fresh packages...
success Saved lockfile.
success Saved 36 new dependencies.
├─ @webassemblyjs/helper-api-error@1.5.12
├─ @webassemblyjs/helper-module-context@1.5.12
├─ @webassemblyjs/helper-wasm-section@1.5.12
├─ @webassemblyjs/ieee754@1.5.12
├─ @webassemblyjs/utf8@1.5.12
├─ @webassemblyjs/wasm-edit@1.5.12
├─ @webassemblyjs/wasm-opt@1.5.12
├─ babel-core@6.26.3
├─ babel-plugin-transform-async-to-generator@6.24.1
├─ babel-plugin-transform-es2015-block-scoping@6.26.0
├─ babel-plugin-transform-es2015-classes@6.24.1
├─ babel-plugin-transform-es2015-computed-properties@6.24.1
├─ babel-plugin-transform-es2015-destructuring@6.23.0
├─ babel-plugin-transform-es2015-duplicate-keys@6.24.1
├─ babel-plugin-transform-es2015-for-of@6.23.0
├─ babel-plugin-transform-es2015-function-name@6.24.1
├─ babel-plugin-transform-es2015-modules-amd@6.24.1
├─ babel-plugin-transform-es2015-modules-commonjs@6.26.2
├─ babel-plugin-transform-es2015-modules-systemjs@6.24.1
├─ babel-plugin-transform-es2015-modules-umd@6.24.1
├─ babel-plugin-transform-es2015-object-super@6.24.1
├─ babel-plugin-transform-es2015-parameters@6.24.1
├─ babel-plugin-transform-es2015-shorthand-properties@6.24.1
├─ babel-plugin-transform-es2015-sticky-regex@6.24.1
├─ babel-plugin-transform-es2015-typeof-symbol@6.23.0
├─ babel-plugin-transform-es2015-unicode-regex@6.24.1
├─ babel-plugin-transform-exponentiation-operator@6.24.1
├─ babel-plugin-transform-regenerator@6.26.0
├─ babel-preset-env@1.7.0
├─ browserslist@3.2.7
├─ chrome-trace-event@1.0.0
├─ ieee754@1.1.11
├─ json-parse-better-errors@1.0.2
├─ mamacro@0.0.3
├─ tslib@1.9.2
└─ webpack@4.12.0
✨  Done in 25.91s.

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ WS_URL=wss://poc-1.polkadot.io:9944 yarn run start
yarn run v0.24.6
(node:10313) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
$ cd packages/apps && webpack-serve --config webpack.config.js --port 3000 
ℹ ｢hot｣: webpack: Compiling...
ℹ ｢hot｣: WebSocket Server Listening at localhost:8081
ℹ ｢serve｣: Project is running at http://localhost:3000
ℹ ｢serve｣: Server URI copied to clipboard
ℹ ｢hot｣: webpack: Compiling Done
✖ ｢wdm｣: Hash: c19370f3acc5d1224af5
Version: webpack 4.8.3
Time: 12317ms
Built at: 06/11/2018 7:40:23 PM
               Asset       Size   Chunks             Chunk Names
    main.c19370f3.js    151 KiB     main  [emitted]  main
 runtime.c19370f3.js   29.7 KiB  runtime  [emitted]  runtime
          index.html  619 bytes           [emitted]  
locales/en/apps.json    3 bytes           [emitted]  
       manifest.json  337 bytes           [emitted]  
         favicon.ico   37.2 KiB           [emitted]  
Entrypoint main = runtime.c19370f3.js main.c19370f3.js
[../../node_modules/loglevelnext/dist/loglevelnext.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/loglevelnext/dist/loglevelnext.js 55.9 KiB {main} [built]
[../../node_modules/punycode/punycode.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/punycode/punycode.js 14.3 KiB {main} [built]
[../../node_modules/querystring-es3/encode.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/querystring-es3/encode.js 2.48 KiB {main} [built]
[0] multi ./src/index.js 28 bytes {main} [built]
[../../node_modules/webpack-hot-client/client/index.js?e893fc39-819c-4de0-8511-86e5272093b9] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/webpack-hot-client/client?e893fc39-819c-4de0-8511-86e5272093b9 2.47 KiB {main} [built]
[1] multi webpack-hot-client/client?e893fc39-819c-4de0-8511-86e5272093b9 ./src/index.js 40 bytes {main} [built]
[../../node_modules/querystring-es3/index.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/querystring-es3/index.js 127 bytes {main} [built]
[../../node_modules/url/url.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/url/url.js 22.8 KiB {main} [built]
[../../node_modules/url/util.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/url/util.js 314 bytes {main} [built]
[../../node_modules/webpack-hot-client/client/hot.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/webpack-hot-client/client/hot.js 4.91 KiB {main} [built]
[../../node_modules/webpack-hot-client/client/log.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/webpack-hot-client/client/log.js 2.4 KiB {main} [built]
[../../node_modules/webpack-hot-client/client/socket.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/webpack-hot-client/client/socket.js 1.39 KiB {main} [built]
[../../node_modules/webpack-serve/node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 509 bytes {main} [built]
[../../node_modules/webpack-serve/node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 519 bytes {main} [built]
[./src/index.js] 2.55 KiB {main} [built] [failed] [1 error]
    + 1 hidden module

ERROR in ./src/index.js
Module build failed: Thread Loader (Worker 0)
Requires Babel "^7.0.0-0", but was loaded with "6.26.3". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel. (While processing preset: "/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/preset-env/lib/index.js")

    at throwVersionError (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/helper-plugin-utils/lib/index.js:65:11)
    at Object.assertVersion (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/helper-plugin-utils/lib/index.js:13:11)
    at _default (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/preset-env/lib/index.js:150:7)
    at /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/helper-plugin-utils/lib/index.js:19:12
    at /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:317:46
    at Array.map (<anonymous>)
    at OptionManager.resolvePresets (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:275:20)
    at OptionManager.mergePresets (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:264:10)
    at OptionManager.mergeOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:249:14)
    at OptionManager.init (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:368:12)
    at File.initOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/index.js:212:65)
    at new File (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/index.js:135:24)
    at Pipeline.transform (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/pipeline.js:46:16)
    at transpile (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-loader/lib/index.js:50:20)
    at Object.module.exports (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-loader/lib/index.js:173:20)
 @ multi ./src/index.js
Child html-webpack-plugin for "index.html":
         Asset     Size  Chunks  Chunk Names
    index.html  556 KiB       0  
    Entrypoint undefined = index.html
    [../../node_modules/html-webpack-plugin/lib/loader.js!./public/index.html] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/html-webpack-plugin/lib/loader.js!./public/index.html 707 bytes {0} [built]
    [../../node_modules/lodash/lodash.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/lodash/lodash.js 527 KiB {0} [built]
    [../../node_modules/webpack-serve/node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 509 bytes {0} [built]
    [../../node_modules/webpack-serve/node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 519 bytes {0} [built]
ℹ ｢wdm｣: Failed to compile.
yarn^Cℹ ｢serve｣: Process Ended via SIGINT


 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ webpack-serve[10315]: ../src/node.cc:4012:void node::PlatformExit(): Assertion `(err) != (-1)' failed.
 1: node::Abort() [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 2: node::MakeCallback(v8::Isolate*, v8::Local<v8::Object>, char const*, int, v8::Local<v8::Value>*, node::async_context) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 3: node::PlatformExit() [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 4: __cxa_finalize_ranges [/usr/lib/system/libsystem_c.dylib]
 5: exit [/usr/lib/system/libsystem_c.dylib]
 6: node::Abort(v8::FunctionCallbackInfo<v8::Value> const&) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 7: v8::internal::FunctionCallbackArguments::Call(v8::internal::CallHandlerInfo*) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 8: v8::internal::MaybeHandle<v8::internal::Object> v8::internal::(anonymous namespace)::HandleApiCallHelper<false>(v8::internal::Isolate*, v8::internal::Handle<v8::internal::HeapObject>, v8::internal::Handle<v8::internal::HeapObject>, v8::internal::Handle<v8::internal::FunctionTemplateInfo>, v8::internal::Handle<v8::internal::Object>, v8::internal::BuiltinArguments) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 9: v8::internal::Builtin_Impl_HandleApiCall(v8::internal::BuiltinArguments, v8::internal::Isolate*) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
10: 0x32d6472841bd
11: 0x32d647293429
12: 0x32d647293429
13: 0x32d647293429
sh: line 1: 10315 Abort trap: 6           webpack-serve --config webpack.config.js --port 3000


 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ yarn add babel-core@7.0.0-beta.47
yarn add v0.24.6
(node:10367) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
[1/4] 🔍  Resolving packages...
Couldn't find any versions for "babel-preset-env" that matches "7.0.0-beta.47"
? Please choose a version of "babel-preset-env" from this list: (Use arrow keys)
❯ 1.7.0 
  1.6.1 
  7.0.0-beta.3 
  2.0.0-beta.2 
  2.0.0-beta.1 
  2.0.0-beta.0 
  2.0.0-alpha.20 
  2.0.0-alpha.19 
  2.0.0-alpha.18 
  2.0.0-alpha.17 
  2.0.0-alpha.16 
  2.0.0-alpha.15 
  1.6.0 
  1.5.2 
  2.0.0-alpha.12 
  1.5.1 
  1.5.0 
  2.0.0-alpha.7 
  2.0.0-alpha.6 
  1.4.0 
  2.0.0-alpha.5 
  1.3.3 
  2.0.0-alpha.4 
  1.3.2 
  1.3.1 
Couldn't find any versions for "babel-core" that matches "7.0.0-beta.47"
? Please choose a version of "babel-core" from this list: 
❯ 6.26.3 
  6.26.2 
  7.0.0-bridge.0 
  7.0.0-beta.3 
  7.0.0-beta.2 
  7.0.0-beta.1 
  7.0.0-beta.0 
  7.0.0-alpha.20 
  6.26.0 
  7.0.0-alpha.19 
  7.0.0-alpha.18 
  7.0.0-alpha.17 
  7.0.0-alpha.16 
  7.0.0-alpha.15 
  7.0.0-alpha.14 
  6.25.0 
  7.0.0-alpha.12 
  7.0.0-alpha.11 
  7.0.0-alpha.10 
  7.0.0-alpha.9 
  7.0.0-alpha.8 
  6.24.1 
  7.0.0-alpha.7 
  7.0.0-alpha.6 
  7.0.0-alpha.3 
(Move up and down to reveal more choices)qq
^C

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ yarn add babel-core@7.0.0-bridge.0
yarn add v0.24.6
(node:10393) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
[1/4] 🔍  Resolving packages...
Couldn't find any versions for "babel-preset-env" that matches "7.0.0-beta.47"
? Please choose a version of "babel-preset-env" from this list: (Use arrow keys)
❯ 1.7.0 
  1.6.1 
  7.0.0-beta.3 
  2.0.0-beta.2 
  2.0.0-beta.1 
  2.0.0-beta.0 
  2.0.0-alpha.20 
  2.0.0-alpha.19 
  2.0.0-alpha.18 
  2.0.0-alpha.17 
  2.0.0-alpha.16 
  2.0.0-alpha.15 
  1.6.0 
  1.5.2 
  2.0.0-alpha.12 
  1.5.1 
  1.5.0 
  2.0.0-alpha.7 
  2.0.0-alpha.6 
  1.4.0 
  2.0.0-alpha.5 
  1.3.3 
  2.0.0-alpha.4 
  1.3.2 
  1.3.1 
(Move up and down to reveal more choices)^C

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ yarn add babel-core@7.0.0-beta.47
yarn add v0.24.6
(node:10409) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
[1/4] 🔍  Resolving packages...
Couldn't find any versions for "babel-preset-env" that matches "7.0.0-beta.47"
? Please choose a version of "babel-preset-env" from this list: (Use arrow keys)
❯ 1.7.0 
  1.6.1 
  7.0.0-beta.3 
  2.0.0-beta.2 
  2.0.0-beta.1 
  2.0.0-beta.0 
  2.0.0-alpha.20 
  2.0.0-alpha.19 
  2.0.0-alpha.18 
  2.0.0-alpha.17 
  2.0.0-alpha.16 
  2.0.0-alpha.15 
  1.6.0 
  1.5.2 
  2.0.0-alpha.12 
  1.5.1 
  1.5.0 
  2.0.0-alpha.7 
  2.0.0-alpha.6 
  1.4.0 
  2.0.0-alpha.5 
  1.3.3 
  2.0.0-alpha.4 
  1.3.2 
  1.3.1 
Couldn't find any versions for "babel-core" that matches "7.0.0-beta.47"
? Please choose a version of "babel-core" from this list: 7.0.0-bridge.0
warning babel-preset-env > babel-plugin-transform-unicode-property-regex@2.0.5: Use @babel/plugin-proposal-unicode-property-regex instead.
[2/4] 🚚  Fetching packages...
warning Pattern ["babel-core@7.0.0-beta.47"] is trying to unpack in the same destination "/Users/Ls/Library/Caches/Yarn/v1/npm-babel-core-7.0.0-bridge.0-95a492ddd90f9b4e9a4a1da14eb335b87b634ece" as pattern ["babel-core@^7.0.0-bridge.0"]. This could result in a non deterministic behavior, skipping.
[3/4] 🔗  Linking dependencies...
warning "react-hot-loader@4.2.0" has unmet peer dependency "react@^15.0.0 || ^16.0.0".
[4/4] 📃  Building fresh packages...
success Saved lockfile.
success Saved 50 new dependencies.
├─ babel-core@7.0.0-bridge.0
├─ babel-helper-annotate-as-pure@7.0.0-beta.3
├─ babel-helper-builder-binary-assignment-operator-visitor@7.0.0-beta.3
├─ babel-helper-call-delegate@7.0.0-beta.3
├─ babel-helper-define-map@7.0.0-beta.3
├─ babel-helper-explode-assignable-expression@7.0.0-beta.3
├─ babel-helper-module-imports@7.0.0-beta.3
├─ babel-helper-module-transforms@7.0.0-beta.3
├─ babel-helper-regex@6.26.0
├─ babel-helper-simple-access@7.0.0-beta.3
├─ babel-helper-wrap-function@7.0.0-beta.3
├─ babel-plugin-check-es2015-constants@7.0.0-beta.3
├─ babel-plugin-syntax-async-functions@7.0.0-beta.0
├─ babel-plugin-syntax-async-generators@7.0.0-beta.3
├─ babel-plugin-syntax-exponentiation-operator@7.0.0-beta.0
├─ babel-plugin-syntax-optional-catch-binding@7.0.0-beta.3
├─ babel-plugin-syntax-trailing-function-commas@7.0.0-beta.0
├─ babel-plugin-transform-async-generator-functions@7.0.0-beta.3
├─ babel-plugin-transform-async-to-generator@7.0.0-beta.3
├─ babel-plugin-transform-es2015-arrow-functions@7.0.0-beta.3
├─ babel-plugin-transform-es2015-block-scoped-functions@7.0.0-beta.3
├─ babel-plugin-transform-es2015-block-scoping@7.0.0-beta.3
├─ babel-plugin-transform-es2015-classes@7.0.0-beta.3
├─ babel-plugin-transform-es2015-computed-properties@7.0.0-beta.3
├─ babel-plugin-transform-es2015-destructuring@7.0.0-beta.3
├─ babel-plugin-transform-es2015-duplicate-keys@7.0.0-beta.3
├─ babel-plugin-transform-es2015-for-of@7.0.0-beta.3
├─ babel-plugin-transform-es2015-function-name@7.0.0-beta.3
├─ babel-plugin-transform-es2015-literals@7.0.0-beta.3
├─ babel-plugin-transform-es2015-modules-systemjs@7.0.0-beta.3
├─ babel-plugin-transform-es2015-modules-umd@7.0.0-beta.3
├─ babel-plugin-transform-es2015-object-super@7.0.0-beta.3
├─ babel-plugin-transform-es2015-parameters@7.0.0-beta.3
├─ babel-plugin-transform-es2015-shorthand-properties@7.0.0-beta.3
├─ babel-plugin-transform-es2015-spread@7.0.0-beta.3
├─ babel-plugin-transform-es2015-sticky-regex@7.0.0-beta.3
├─ babel-plugin-transform-es2015-template-literals@7.0.0-beta.3
├─ babel-plugin-transform-es2015-typeof-symbol@7.0.0-beta.3
├─ babel-plugin-transform-es2015-unicode-regex@7.0.0-beta.3
├─ babel-plugin-transform-exponentiation-operator@7.0.0-beta.3
├─ babel-plugin-transform-new-target@7.0.0-beta.3
├─ babel-plugin-transform-object-rest-spread@7.0.0-beta.3
├─ babel-plugin-transform-optional-catch-binding@7.0.0-beta.3
├─ babel-plugin-transform-regenerator@7.0.0-beta.3
├─ babel-plugin-transform-unicode-property-regex@2.0.5
├─ babel-preset-env@7.0.0-beta.3
├─ caniuse-lite@1.0.30000841
├─ debug@3.1.0
├─ electron-to-chromium@1.3.46
└─ regenerator-transform@0.11.1
✨  Done in 35.99s.

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ WS_URL=wss://poc-1.polkadot.io:9944 yarn run start
yarn run v0.24.6
(node:10438) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
$ cd packages/apps && webpack-serve --config webpack.config.js --port 3000 
ℹ ｢hot｣: webpack: Compiling...
ℹ ｢hot｣: WebSocket Server Listening at localhost:8081
ℹ ｢serve｣: Project is running at http://localhost:3000
ℹ ｢serve｣: Server URI copied to clipboard
ℹ ｢hot｣: webpack: Compiling Done
✖ ｢wdm｣: Hash: c38e2484dfbc6652fd79
Version: webpack 4.12.0
Time: 12406ms
Built at: 06/11/2018 7:43:53 PM
               Asset       Size   Chunks             Chunk Names
    main.c38e2484.js    152 KiB     main  [emitted]  main
 runtime.c38e2484.js   30.9 KiB  runtime  [emitted]  runtime
          index.html  619 bytes           [emitted]  
locales/en/apps.json    3 bytes           [emitted]  
       manifest.json  337 bytes           [emitted]  
         favicon.ico   37.2 KiB           [emitted]  
Entrypoint main = runtime.c38e2484.js main.c38e2484.js
[../../node_modules/loglevelnext/dist/loglevelnext.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/loglevelnext/dist/loglevelnext.js 55.9 KiB {main} [built]
[../../node_modules/punycode/punycode.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/punycode/punycode.js 14.3 KiB {main} [built]
[../../node_modules/querystring-es3/encode.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/querystring-es3/encode.js 2.48 KiB {main} [built]
[0] multi ./src/index.js 28 bytes {main} [built]
[../../node_modules/webpack-hot-client/client/index.js?ba229856-cfb3-4ffe-a80f-5f47bdaa9950] (webpack)-hot-client/client?ba229856-cfb3-4ffe-a80f-5f47bdaa9950 2.47 KiB {main} [built]
[1] multi webpack-hot-client/client?ba229856-cfb3-4ffe-a80f-5f47bdaa9950 ./src/index.js 40 bytes {main} [built]
[../../node_modules/querystring-es3/index.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/querystring-es3/index.js 127 bytes {main} [built]
[../../node_modules/url/url.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/url/url.js 22.8 KiB {main} [built]
[../../node_modules/url/util.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/url/util.js 314 bytes {main} [built]
[../../node_modules/webpack-hot-client/client/hot.js] (webpack)-hot-client/client/hot.js 4.91 KiB {main} [built]
[../../node_modules/webpack-hot-client/client/log.js] (webpack)-hot-client/client/log.js 2.4 KiB {main} [built]
[../../node_modules/webpack-hot-client/client/socket.js] (webpack)-hot-client/client/socket.js 1.39 KiB {main} [built]
[../../node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 489 bytes {main} [built]
[../../node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {main} [built]
[./src/index.js] 2.85 KiB {main} [built] [failed] [1 error]
    + 1 hidden module

ERROR in ./src/index.js
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/thread-loader/dist/cjs.js):
Thread Loader (Worker 0)
Requires Babel "^7.0.0-0", but was loaded with "6.26.3". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel. (While processing preset: "/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/preset-env/lib/index.js")

    at throwVersionError (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/helper-plugin-utils/lib/index.js:65:11)
    at Object.assertVersion (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/helper-plugin-utils/lib/index.js:13:11)
    at _default (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/preset-env/lib/index.js:150:7)
    at /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/helper-plugin-utils/lib/index.js:19:12
    at /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-loader/node_modules/babel-core/lib/transformation/file/options/option-manager.js:317:46
    at Array.map (<anonymous>)
    at OptionManager.resolvePresets (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-loader/node_modules/babel-core/lib/transformation/file/options/option-manager.js:275:20)
    at OptionManager.mergePresets (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-loader/node_modules/babel-core/lib/transformation/file/options/option-manager.js:264:10)
    at OptionManager.mergeOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-loader/node_modules/babel-core/lib/transformation/file/options/option-manager.js:249:14)
    at OptionManager.init (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-loader/node_modules/babel-core/lib/transformation/file/options/option-manager.js:368:12)
    at File.initOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-loader/node_modules/babel-core/lib/transformation/file/index.js:212:65)
    at new File (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-loader/node_modules/babel-core/lib/transformation/file/index.js:135:24)
    at Pipeline.transform (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-loader/node_modules/babel-core/lib/transformation/pipeline.js:46:16)
    at transpile (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-loader/lib/index.js:50:20)
    at Object.module.exports (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-loader/lib/index.js:173:20)
 @ multi ./src/index.js
Child html-webpack-plugin for "index.html":
         Asset     Size  Chunks  Chunk Names
    index.html  557 KiB       0  
    Entrypoint undefined = index.html
    [../../node_modules/html-webpack-plugin/lib/loader.js!./public/index.html] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/html-webpack-plugin/lib/loader.js!./public/index.html 707 bytes {0} [built]
    [../../node_modules/lodash/lodash.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/lodash/lodash.js 527 KiB {0} [built]
    [../../node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 489 bytes {0} [built]
    [../../node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {0} [built]
ℹ ｢wdm｣: Failed to compile.
^Cℹ ｢serve｣: Process Ended via SIGINT


 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ webpack-serve[10440]: ../src/node.cc:4012:void node::PlatformExit(): Assertion `(err) != (-1)' failed.
 1: node::Abort() [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 2: node::MakeCallback(v8::Isolate*, v8::Local<v8::Object>, char const*, int, v8::Local<v8::Value>*, node::async_context) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 3: node::PlatformExit() [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 4: __cxa_finalize_ranges [/usr/lib/system/libsystem_c.dylib]
 5: exit [/usr/lib/system/libsystem_c.dylib]
 6: node::Abort(v8::FunctionCallbackInfo<v8::Value> const&) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 7: v8::internal::FunctionCallbackArguments::Call(v8::internal::CallHandlerInfo*) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 8: v8::internal::MaybeHandle<v8::internal::Object> v8::internal::(anonymous namespace)::HandleApiCallHelper<false>(v8::internal::Isolate*, v8::internal::Handle<v8::internal::HeapObject>, v8::internal::Handle<v8::internal::HeapObject>, v8::internal::Handle<v8::internal::FunctionTemplateInfo>, v8::internal::Handle<v8::internal::Object>, v8::internal::BuiltinArguments) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 9: v8::internal::Builtin_Impl_HandleApiCall(v8::internal::BuiltinArguments, v8::internal::Isolate*) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
10: 0x37f600f041bd
11: 0x37f600f13429
12: 0x37f600f13429
13: 0x37f600f13429
sh: line 1: 10440 Abort trap: 6           webpack-serve --config webpack.config.js --port 3000
y

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ npm uninstall babel-cli
npm WARN deprecated istanbul-lib-hook@1.2.1: 1.2.0 should have been a major version bump
npm WARN deprecated nomnom@1.8.1: Package no longer supported. Contact support@npmjs.com for more info.
npm WARN deprecated babel-preset-es2015@6.24.1: 🙌  Thanks for using Babel: we recommend using babel-preset-env now: please read babeljs.io/env to update! 
npm WARN deprecated babel-plugin-transform-unicode-property-regex@2.0.5: Use @babel/plugin-proposal-unicode-property-regex instead.
npm WARN rm not removing /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/jscodeshift/node_modules/.bin/babylon as it wasn't installed by /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/jscodeshift/node_modules/babylon
npm WARN rm not removing /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@polkadot/dev-react/node_modules/.bin/browserslist as it wasn't installed by /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@polkadot/dev-react/node_modules/browserslist
npm WARN rm not removing /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/traverse/node_modules/.bin/babylon as it wasn't installed by /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/traverse/node_modules/babylon
npm WARN rm not removing /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/template/node_modules/.bin/babylon as it wasn't installed by /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/template/node_modules/babylon
npm WARN rm not removing /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/preset-env/node_modules/.bin/browserslist as it wasn't installed by /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/preset-env/node_modules/browserslist
npm WARN rm not removing /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/generator/node_modules/.bin/jsesc as it wasn't installed by /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/generator/node_modules/jsesc
npm WARN rm not removing /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/core/node_modules/.bin/babylon as it wasn't installed by /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/core/node_modules/babylon

> fsevents@1.2.4 install /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/fsevents
> node install

[fsevents] Success: "/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64/fse.node" already installed
Pass --update-binary to reinstall or --build-from-source to recompile
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN babel-loader@7.1.4 requires a peer of babel-core@6 but none is installed. You must install peer dependencies yourself.
npm WARN react-hot-loader@4.3.1 requires a peer of react@^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN postcss-markdown@0.23.7 requires a peer of postcss-syntax@^0.10.0 but none is installed. You must install peer dependencies yourself.
npm WARN postcss-html@0.23.7 requires a peer of postcss-syntax@^0.10.0 but none is installed. You must install peer dependencies yourself.

added 446 packages from 215 contributors, removed 420 packages, updated 1599 packages and audited 47756 packages in 160.502s
found 1 moderate severity vulnerability
  run `npm audit fix` to fix them, or `npm audit` for details

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ WS_URL=wss://poc-1.polkadot.io:9944 yarn run start
yarn run v0.24.6
(node:10548) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
$ cd packages/apps && webpack-serve --config webpack.config.js --port 3000 
ℹ ｢hot｣: webpack: Compiling...
ℹ ｢hot｣: WebSocket Server Listening at localhost:8081
ℹ ｢serve｣: Project is running at http://localhost:3000
ℹ ｢serve｣: Server URI copied to clipboard
ℹ ｢hot｣: webpack: Compiling Done
✖ ｢wdm｣: Hash: e029869b032623fde488
Version: webpack 4.12.0
Time: 24175ms
Built at: 06/11/2018 7:48:03 PM
               Asset       Size   Chunks                    Chunk Names
    main.e029869b.js   1.23 MiB     main  [emitted]  [big]  main
 runtime.e029869b.js   30.9 KiB  runtime  [emitted]         runtime
  vendor.26edeb9c.js    148 KiB   vendor  [emitted]         vendor
          index.html  684 bytes           [emitted]         
locales/en/apps.json    3 bytes           [emitted]         
       manifest.json  337 bytes           [emitted]         
         favicon.ico   37.2 KiB           [emitted]         
Entrypoint main [big] = runtime.e029869b.js vendor.26edeb9c.js main.e029869b.js
[../../node_modules/@babel/runtime/helpers/interopRequireDefault.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/runtime/helpers/interopRequireDefault.js 145 bytes {main} [built]
[../../node_modules/webpack-hot-client/client/index.js?782759bb-d7a5-49a4-aadd-133027f2865c] (webpack)-hot-client/client?782759bb-d7a5-49a4-aadd-133027f2865c 2.47 KiB {main} [built]
[../../node_modules/webpack-hot-client/client/log.js] (webpack)-hot-client/client/log.js 2.4 KiB {main} [built]
[../../node_modules/webpack-hot-client/client/socket.js] (webpack)-hot-client/client/socket.js 1.39 KiB {main} [built]
[../../node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {main} [built]
[../ui-app/src/index.js] 1.47 KiB {main} [built]
[../ui-signer/src/index.js] 1.64 KiB {main} [built]
[./src/Connecting/index.js] 1.73 KiB {main} [built]
[0] multi ./src/index.js 28 bytes {main} [built]
[./src/Content/index.js] 1.63 KiB {main} [built]
[./src/NodeInfo.js] 2.24 KiB {main} [built]
[./src/SideBar/index.js] 2.37 KiB {main} [built]
[./src/index.css] 1.27 KiB {main} [built]
[./src/index.js] 1.66 KiB {main} [built]
[2] multi webpack-hot-client/client?782759bb-d7a5-49a4-aadd-133027f2865c ./src/index.js 40 bytes {main} [built]
    + 433 hidden modules

ERROR in ../app-vanitygen/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-vanitygen/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-vanitygen/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-explorer/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-explorer/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-extrinsics/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-extrinsics/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputAddress/InputAddress.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/InputAddress/InputAddress.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/InputAddress/InputAddress.css 2:14-162 21:1-42:3 21:160-42:2 22:19-167
 @ ../ui-app/src/InputAddress/index.js
 @ ../app-addresses/src/Editor.js
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-accounts/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-accounts/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-toolbox/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-toolbox/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!./src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ./src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Params.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/Params/Params.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/Params/Params.css 2:14-156 21:1-42:3 21:154-42:2 22:19-161
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BlockHeader/BlockHeader.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-explorer/src/BlockHeader/BlockHeader.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-explorer/src/BlockHeader/BlockHeader.css 2:14-161 21:1-42:3 21:159-42:2 22:19-166
 @ ../app-explorer/src/BlockHeader/index.js
 @ ../app-explorer/src/BlockHeaders.js
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/NotFound/NotFound.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!./src/NotFound/NotFound.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ./src/NotFound/NotFound.css 2:14-158 21:1-42:3 21:156-42:2 22:19-163
 @ ./src/NotFound/index.js
 @ ./src/routing/unknown.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/styles/semantic.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/styles/semantic.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/styles/semantic.css 2:14-158 21:1-42:3 21:156-42:2 22:19-163
 @ ../ui-app/src/styles.js
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/styles/app.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/styles/app.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/styles/app.css 2:14-153 21:1-42:3 21:151-42:2 22:19-158
 @ ../ui-app/src/styles.js
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/styles/rx.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/styles/rx.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/styles/rx.css 2:14-152 21:1-42:3 21:150-42:2 22:19-157
 @ ../ui-app/src/styles.js
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/styles/form.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/styles/form.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/styles/form.css 2:14-154 21:1-42:3 21:152-42:2 22:19-159
 @ ../ui-app/src/styles.js
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/styles/components.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/styles/components.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/styles/components.css 2:14-160 21:1-42:3 21:158-42:2 22:19-165
 @ ../ui-app/src/styles.js
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-addresses/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-addresses/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/SideBar/Item.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!./src/SideBar/Item.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ./src/SideBar/Item.css 2:14-154 21:1-42:3 21:152-42:2 22:19-159
 @ ./src/SideBar/Item.js
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Button.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/Button/Button.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/Button/Button.css 2:14-156 21:1-42:3 21:154-42:2 22:19-161
 @ ../ui-app/src/Button/index.js
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-storage/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-storage/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/InputExtrinsic.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/InputExtrinsic/InputExtrinsic.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/InputExtrinsic/InputExtrinsic.css 2:14-164 21:1-42:3 21:162-42:2 22:19-169
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-rpc/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-rpc/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/Content/Content.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!./src/Content/Content.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ./src/Content/Content.css 2:14-157 21:1-42:3 21:155-42:2 22:19-162
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-signer/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-signer/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react/src/IdentityIcon/IdentityIcon.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-react/src/IdentityIcon/IdentityIcon.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-react/src/IdentityIcon/IdentityIcon.css 2:14-162 21:1-42:3 21:160-42:2 22:19-167
 @ ../ui-react/src/IdentityIcon/index.js
 @ ../ui-keyring/src/options/KeyPair.js
 @ ../ui-keyring/src/options/item.js
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/options/KeyPair.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-keyring/src/options/KeyPair.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-keyring/src/options/KeyPair.css 2:14-157 21:1-42:3 21:155-42:2 22:19-162
 @ ../ui-keyring/src/options/KeyPair.js
 @ ../ui-keyring/src/options/item.js
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/SideBar/SideBar.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!./src/SideBar/SideBar.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ./src/SideBar/SideBar.css 2:14-157 21:1-42:3 21:155-42:2 22:19-162
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/Connecting/Connecting.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!./src/Connecting/Connecting.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ./src/Connecting/Connecting.css 2:14-160 21:1-42:3 21:158-42:2 22:19-165
 @ ./src/Connecting/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Api.js
Module not found: Error: Can't resolve '@polkadot/api-provider/ws' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Api.js 18:33-69
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Api.js
Module not found: Error: Can't resolve '@polkadot/api-rx' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Api.js 20:36-63
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Api.js
Module not found: Error: Can't resolve '@polkadot/api-rx/defaults' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Api.js 22:39-75
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Selection.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Selection.js 16:41-72
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Params/Proposal.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src/Params'
 @ ../app-extrinsics/src/Params/Proposal.js 12:41-72
 @ ../app-extrinsics/src/Params/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Params/Call.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src/Params'
 @ ../app-extrinsics/src/Params/Call.js 12:41-72
 @ ../app-extrinsics/src/Params/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/index.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic'
 @ ../ui-app/src/InputExtrinsic/index.js 16:41-72
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/SelectMethod.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic'
 @ ../ui-app/src/InputExtrinsic/SelectMethod.js 12:41-72
 @ ../ui-app/src/InputExtrinsic/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/options/section.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic/options'
 @ ../ui-app/src/InputExtrinsic/options/section.js 14:41-72
 @ ../ui-app/src/InputExtrinsic/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/options/method.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic/options'
 @ ../ui-app/src/InputExtrinsic/options/method.js 16:41-72
 @ ../ui-app/src/InputExtrinsic/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Extrinsic.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Extrinsic.js 20:41-72
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/sign.js
Module not found: Error: Can't resolve '@polkadot/extrinsics-codec/encode/call' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/sign.js 10:35-84
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Extrinsic.js
Module not found: Error: Can't resolve '@polkadot/extrinsics-codec/encode/extrinsic' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Extrinsic.js 18:40-94
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Selection.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Selection.js 18:38-66
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/Selection.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/Selection.js 20:38-66
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/SelectMethod.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc'
 @ ../ui-app/src/InputRpc/SelectMethod.js 12:38-66
 @ ../ui-app/src/InputRpc/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/index.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc'
 @ ../ui-app/src/InputRpc/index.js 16:38-66
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/options/method.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc/options'
 @ ../ui-app/src/InputRpc/options/method.js 16:38-66
 @ ../ui-app/src/InputRpc/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/options/section.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc/options'
 @ ../ui-app/src/InputRpc/options/section.js 14:38-66
 @ ../ui-app/src/InputRpc/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/NodeName.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/NodeName.js 10:38-66
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/BestNumber.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/BestNumber.js 10:38-66
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/NodeVersion.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/NodeVersion.js 10:38-66
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Chain.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Chain.js 10:38-66
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/transform/storage.js
Module not found: Error: Can't resolve '@polkadot/params/decode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with/transform'
 @ ../ui-react-rx/src/with/transform/storage.js 10:37-71
 @ ../ui-react-rx/src/with/storage.js
 @ ../ui-react-rx/src/with/storageDiv.js
 @ ../app-storage/src/Query.js
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/Query.js
Module not found: Error: Can't resolve '@polkadot/params/typeToString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/Query.js 14:43-83
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/initValue.js
Module not found: Error: Can't resolve '@polkadot/params/typeToString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/initValue.js 12:43-83
 @ ../ui-app/src/Params/values.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/index.js
Module not found: Error: Can't resolve '@polkadot/params/typeToString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/index.js 14:43-83
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Unknown.js
Module not found: Error: Can't resolve '@polkadot/params/typeToString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Unknown.js 12:43-83
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BestHash.js
Module not found: Error: Can't resolve '@polkadot/primitives-codec/header/hash' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src'
 @ ../app-explorer/src/BestHash.js 10:35-84
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BlockHeader/index.js
Module not found: Error: Can't resolve '@polkadot/primitives-codec/header/hash' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src/BlockHeader'
 @ ../app-explorer/src/BlockHeader/index.js 14:35-84
 @ ../app-explorer/src/BlockHeaders.js
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/Selection.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/Selection.js 16:38-66
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/index.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage'
 @ ../ui-app/src/InputStorage/index.js 16:38-66
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/SelectKey.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage'
 @ ../ui-app/src/InputStorage/SelectKey.js 12:38-66
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/options/key.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage/options'
 @ ../ui-app/src/InputStorage/options/key.js 16:38-66
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/options/section.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage/options'
 @ ../ui-app/src/InputStorage/options/section.js 14:38-66
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Nonce.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Nonce.js 10:38-66
 @ ../app-accounts/src/Address.js
 @ ../app-addresses/src/Editor.js
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Balance.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Balance.js 10:38-66
 @ ../app-extrinsics/src/Account.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/storage.js
Module not found: Error: Can't resolve '@polkadot/storage/key' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/storage.js 20:34-66
 @ ../ui-react-rx/src/with/storageDiv.js
 @ ../app-storage/src/Query.js
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Hash.js
Module not found: Error: Can't resolve '@polkadot/util-crypto/blake2/asHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Hash.js 28:36-81
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util-crypto/nacl/keypair/fromSeed' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 32:39-93
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/generator/generate.js
Module not found: Error: Can't resolve '@polkadot/util-crypto/nacl/keypair/fromSeed' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src/generator'
 @ ../app-vanitygen/src/generator/generate.js 16:21-75
 @ ../app-vanitygen/src/generator/index.js
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Verify.js
Module not found: Error: Can't resolve '@polkadot/util-crypto/nacl/verify' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Verify.js 32:37-81
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util-crypto/random/asU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 34:36-81
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/generator/generate.js
Module not found: Error: Can't resolve '@polkadot/util-crypto/random/asU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src/generator'
 @ ../app-vanitygen/src/generator/generate.js 12:20-65
 @ ../app-vanitygen/src/generator/index.js
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Address.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/decode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Address.js 24:37-85
 @ ../app-addresses/src/Editor.js
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/decode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-addresses/src'
 @ ../app-addresses/src/Creator.js 22:37-85
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputAddress/addressToAddress.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/decode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputAddress'
 @ ../ui-app/src/InputAddress/addressToAddress.js 10:37-85
 @ ../ui-app/src/InputAddress/index.js
 @ ../app-addresses/src/Editor.js
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputAddress/index.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/decode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputAddress'
 @ ../ui-app/src/InputAddress/index.js 20:37-85
 @ ../app-addresses/src/Editor.js
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/address/get.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/decode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/address'
 @ ../ui-keyring/src/address/get.js 12:37-85
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Address.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Address.js 26:37-85
 @ ../app-addresses/src/Editor.js
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 36:37-85
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-addresses/src'
 @ ../app-addresses/src/Creator.js 24:37-85
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/generator/generate.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src/generator'
 @ ../app-vanitygen/src/generator/generate.js 14:22-70
 @ ../app-vanitygen/src/generator/index.js
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputAddress/addressToAddress.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputAddress'
 @ ../ui-app/src/InputAddress/addressToAddress.js 12:37-85
 @ ../ui-app/src/InputAddress/index.js
 @ ../app-addresses/src/Editor.js
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/valueToText.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/valueToText.js 14:37-85
 @ ../app-storage/src/Query.js
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/isAvailable.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src'
 @ ../ui-keyring/src/isAvailable.js 12:37-85
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/address/get.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/address'
 @ ../ui-keyring/src/address/get.js 14:37-85
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Extrinsic.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Extrinsic.js 28:37-85
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/index.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/testing' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src'
 @ ../ui-keyring/src/index.js 10:38-79
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/observable.js
Module not found: Error: Can't resolve '@polkadot/util/assert' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/observable.js 20:37-69
 @ ../ui-react-rx/src/with/apiCall.js
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeVersion.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/api.js
Module not found: Error: Can't resolve '@polkadot/util/assert' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/api.js 14:37-69
 @ ./src/Connecting/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/apiCall.js
Module not found: Error: Can't resolve '@polkadot/util/assert' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/apiCall.js 14:37-69
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeVersion.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/resultToText.js
Module not found: Error: Can't resolve '@polkadot/util/bn/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/resultToText.js 16:36-70
 @ ../app-rpc/src/Results.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Code.js
Module not found: Error: Can't resolve '@polkadot/util/bn/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Code.js 14:36-70
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/KeyValue.js
Module not found: Error: Can't resolve '@polkadot/util/bn/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/KeyValue.js 14:36-70
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util/hex/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 26:36-71
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Verify.js
Module not found: Error: Can't resolve '@polkadot/util/hex/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Verify.js 26:36-71
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Hash.js
Module not found: Error: Can't resolve '@polkadot/util/hex/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Hash.js 22:36-71
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Sign.js
Module not found: Error: Can't resolve '@polkadot/util/hex/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Sign.js 28:36-71
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/KeyValue.js
Module not found: Error: Can't resolve '@polkadot/util/hex/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/KeyValue.js 18:37-72
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/BaseBytes.js
Module not found: Error: Can't resolve '@polkadot/util/hex/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/BaseBytes.js 14:36-71
 @ ../ui-app/src/Params/Param/Hash.js
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/resultToText.js
Module not found: Error: Can't resolve '@polkadot/util/is/bn' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/resultToText.js 20:33-64
 @ ../app-rpc/src/Results.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/valueToText.js
Module not found: Error: Can't resolve '@polkadot/util/is/bn' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/valueToText.js 18:33-64
 @ ../app-storage/src/Query.js
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/util/triggerChange.js
Module not found: Error: Can't resolve '@polkadot/util/is/function' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/util'
 @ ../ui-react-rx/src/util/triggerChange.js 12:39-76
 @ ../ui-react-rx/src/with/observable.js
 @ ../ui-react-rx/src/with/apiCall.js
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeVersion.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util/is/hex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 24:34-66
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Hash.js
Module not found: Error: Can't resolve '@polkadot/util/is/hex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Hash.js 24:34-66
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Verify.js
Module not found: Error: Can't resolve '@polkadot/util/is/hex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Verify.js 28:34-66
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Sign.js
Module not found: Error: Can't resolve '@polkadot/util/is/hex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Sign.js 30:34-66
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/resultToText.js
Module not found: Error: Can't resolve '@polkadot/util/is/object' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/resultToText.js 22:37-72
 @ ../app-rpc/src/Results.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/util/triggerChange.js
Module not found: Error: Can't resolve '@polkadot/util/is/observable' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/util'
 @ ../ui-react-rx/src/util/triggerChange.js 14:41-80
 @ ../ui-react-rx/src/with/observable.js
 @ ../ui-react-rx/src/with/apiCall.js
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeVersion.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/isAvailable.js
Module not found: Error: Can't resolve '@polkadot/util/is/string' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src'
 @ ../ui-keyring/src/isAvailable.js 10:37-72
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/address/get.js
Module not found: Error: Can't resolve '@polkadot/util/is/string' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/address'
 @ ../ui-keyring/src/address/get.js 10:37-72
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/resultToText.js
Module not found: Error: Can't resolve '@polkadot/util/is/u8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/resultToText.js 24:34-66
 @ ../app-rpc/src/Results.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/valueToText.js
Module not found: Error: Can't resolve '@polkadot/util/is/u8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/valueToText.js 20:34-66
 @ ../app-storage/src/Query.js
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-identicon/src/seeder.js
Module not found: Error: Can't resolve '@polkadot/util/is/u8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-identicon/src'
 @ ../ui-identicon/src/seeder.js 12:14-46
 @ ../ui-identicon/src/index.js
 @ ../ui-react/src/IdentityIcon/appendIcon.js
 @ ../ui-react/src/IdentityIcon/index.js
 @ ../ui-keyring/src/options/KeyPair.js
 @ ../ui-keyring/src/options/item.js
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Extrinsic.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Extrinsic.js 26:40-78
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/Results.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/Results.js 16:40-78
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/Selection.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/Selection.js 28:40-78
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Input.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Input.js 16:40-78
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/index.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/index.js 16:40-78
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Or.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/Or.js 14:40-78
 @ ../ui-app/src/Button/index.js
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/values.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/values.js 10:40-78
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Code.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/concat' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Code.js 16:37-73
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/KeyValue.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/concat' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/KeyValue.js 16:37-73
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/sign.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/concat' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/sign.js 14:37-73
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/fromString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 28:41-81
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Verify.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/fromString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Verify.js 30:41-81
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Sign.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/fromString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Sign.js 32:41-81
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Hash.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/fromString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Hash.js 26:41-81
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-identicon/src/seeder.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/fromString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-identicon/src'
 @ ../ui-identicon/src/seeder.js 14:22-62
 @ ../ui-identicon/src/index.js
 @ ../ui-react/src/IdentityIcon/appendIcon.js
 @ ../ui-react/src/IdentityIcon/index.js
 @ ../ui-keyring/src/options/KeyPair.js
 @ ../ui-keyring/src/options/item.js
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 30:36-71
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BestHash.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src'
 @ ../app-explorer/src/BestHash.js 14:36-71
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BlockHeader/index.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src/BlockHeader'
 @ ../app-explorer/src/BlockHeader/index.js 20:36-71
 @ ../app-explorer/src/BlockHeaders.js
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/resultToText.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/resultToText.js 18:37-72
 @ ../app-rpc/src/Results.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Sign.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Sign.js 34:36-71
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/Match.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src'
 @ ../app-vanitygen/src/Match.js 22:36-71
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/valueToText.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/valueToText.js 16:36-71
 @ ../app-storage/src/Query.js
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Extrinsic.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Extrinsic.js 26:36-71
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/sign.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/sign.js 16:36-71
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/i18n.js
Module not found: Error: Can't resolve 'i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/i18n.js 10:38-56
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/i18n.js
Module not found: Error: Can't resolve 'i18next-browser-languagedetector' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/i18n.js 12:61-104
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/i18n.js
Module not found: Error: Can't resolve 'i18next-xhr-backend' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/i18n.js 14:48-78
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/react-hot-loader/dist/react-hot-loader.development.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/react-hot-loader/dist'
 @ /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/react-hot-loader/dist/react-hot-loader.development.js 7:12-28
 @ /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/react-hot-loader/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 12:36-52
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Editor.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Editor.js 12:36-52
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Address.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Address.js 12:36-52
 @ ../app-addresses/src/Editor.js
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/index.js 14:36-52
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/Editor.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-addresses/src'
 @ ../app-addresses/src/Editor.js 12:36-52
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/Creator.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-addresses/src'
 @ ../app-addresses/src/Creator.js 12:36-52
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-addresses/src'
 @ ../app-addresses/src/index.js 14:36-52
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BlockHeaders.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src'
 @ ../app-explorer/src/BlockHeaders.js 14:36-52
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src'
 @ ../app-explorer/src/index.js 12:36-52
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BlockHeader/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src/BlockHeader'
 @ ../app-explorer/src/BlockHeader/index.js 12:36-52
 @ ../app-explorer/src/BlockHeaders.js
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Account.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Account.js 12:36-52
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Nonce.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Nonce.js 10:36-52
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Extrinsic.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Extrinsic.js 16:36-52
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/index.js 12:36-52
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Selection.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Selection.js 14:36-52
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Params/Account.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src/Params'
 @ ../app-extrinsics/src/Params/Account.js 12:36-52
 @ ../app-extrinsics/src/Params/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Params/Proposal.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src/Params'
 @ ../app-extrinsics/src/Params/Proposal.js 10:36-52
 @ ../app-extrinsics/src/Params/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Params/Call.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src/Params'
 @ ../app-extrinsics/src/Params/Call.js 10:36-52
 @ ../app-extrinsics/src/Params/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Params/Extrinsic.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src/Params'
 @ ../app-extrinsics/src/Params/Extrinsic.js 12:36-52
 @ ../app-extrinsics/src/Params/Proposal.js
 @ ../app-extrinsics/src/Params/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/Results.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/Results.js 10:36-52
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/Selection.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/Selection.js 18:36-52
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/index.js 12:36-52
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/Account.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/Account.js 14:36-52
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/Selection.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/Selection.js 14:36-52
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/Queries.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/Queries.js 10:36-52
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/Query.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/Query.js 12:36-52
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/index.js 14:36-52
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Verify.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Verify.js 12:36-52
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Hash.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Hash.js 12:36-52
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Sign.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Sign.js 12:36-52
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/index.js 14:36-52
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Unlock.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Unlock.js 12:36-52
 @ ../app-toolbox/src/Sign.js
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/Match.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src'
 @ ../app-vanitygen/src/Match.js 12:36-52
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src'
 @ ../app-vanitygen/src/index.js 20:36-52
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src'
 @ ./src/index.js 7:36-52
 @ multi ./src/index.js

ERROR in ./src/NodeInfo.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src'
 @ ./src/NodeInfo.js 10:36-52
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/Connecting/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/Connecting'
 @ ./src/Connecting/index.js 12:36-52
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/Content/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/Content'
 @ ./src/Content/index.js 12:36-52
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/NotFound/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/NotFound'
 @ ./src/NotFound/index.js 12:36-52
 @ ./src/routing/unknown.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/SideBar/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/SideBar'
 @ ./src/SideBar/index.js 12:36-52
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/SideBar/Item.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/SideBar'
 @ ./src/SideBar/Item.js 12:36-52
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Output.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Output.js 10:36-52
 @ ../app-toolbox/src/Sign.js
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/index.js 14:36-52
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/CopyButton.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/CopyButton.js 10:36-52
 @ ../app-vanitygen/src/Match.js
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Labelled.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Labelled.js 10:36-52
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Input.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Input.js 12:36-52
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Dropdown.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Dropdown.js 12:36-52
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Password.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Password.js 12:36-52
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Static.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Static.js 10:36-52
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Group.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/Group.js 10:36-52
 @ ../ui-app/src/Button/index.js
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Or.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/Or.js 10:36-52
 @ ../ui-app/src/Button/index.js
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/index.js 12:36-52
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Divider.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/Divider.js 10:36-52
 @ ../ui-app/src/Button/index.js
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputAddress/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputAddress'
 @ ../ui-app/src/InputAddress/index.js 14:36-52
 @ ../app-addresses/src/Editor.js
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/SelectSection.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic'
 @ ../ui-app/src/InputExtrinsic/SelectSection.js 10:36-52
 @ ../ui-app/src/InputExtrinsic/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/SelectMethod.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic'
 @ ../ui-app/src/InputExtrinsic/SelectMethod.js 10:36-52
 @ ../ui-app/src/InputExtrinsic/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic'
 @ ../ui-app/src/InputExtrinsic/index.js 14:36-52
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/options/method.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic/options'
 @ ../ui-app/src/InputExtrinsic/options/method.js 14:36-52
 @ ../ui-app/src/InputExtrinsic/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc'
 @ ../ui-app/src/InputRpc/index.js 14:36-52
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/SelectSection.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc'
 @ ../ui-app/src/InputRpc/SelectSection.js 10:36-52
 @ ../ui-app/src/InputRpc/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/SelectMethod.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc'
 @ ../ui-app/src/InputRpc/SelectMethod.js 10:36-52
 @ ../ui-app/src/InputRpc/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/options/method.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc/options'
 @ ../ui-app/src/InputRpc/options/method.js 14:36-52
 @ ../ui-app/src/InputRpc/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/SelectSection.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage'
 @ ../ui-app/src/InputStorage/SelectSection.js 10:36-52
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage'
 @ ../ui-app/src/InputStorage/index.js 14:36-52
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/SelectKey.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage'
 @ ../ui-app/src/InputStorage/SelectKey.js 10:36-52
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/options/key.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage/options'
 @ ../ui-app/src/InputStorage/options/key.js 14:36-52
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/index.js 16:36-52
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/VoteThreshold.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/VoteThreshold.js 12:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Bare.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Bare.js 10:36-52
 @ ../ui-app/src/Params/Param/Bool.js
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Base.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Base.js 10:36-52
 @ ../ui-app/src/Params/Param/Unknown.js
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/String.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/String.js 12:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/KeyValue.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/KeyValue.js 12:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Bytes.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Bytes.js 10:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Code.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Code.js 12:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Hash.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Hash.js 10:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Account.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Account.js 12:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/index.js 12:36-52
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Amount.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Amount.js 14:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Bool.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Bool.js 12:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/BaseBytes.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/BaseBytes.js 12:36-52
 @ ../ui-app/src/Params/Param/Hash.js
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Unknown.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Unknown.js 10:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/File.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/File.js 14:36-52
 @ ../ui-app/src/Params/Param/Code.js
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/options/item.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/options'
 @ ../ui-keyring/src/options/item.js 10:36-52
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/options/KeyPair.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/options'
 @ ../ui-keyring/src/options/KeyPair.js 12:36-52
 @ ../ui-keyring/src/options/item.js
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Div.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Div.js 10:36-52
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeVersion.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Api.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Api.js 14:36-52
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/observable.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/observable.js 16:36-52
 @ ../ui-react-rx/src/with/apiCall.js
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeVersion.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/apiCall.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/apiCall.js 12:36-52
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeVersion.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/storage.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/storage.js 16:36-52
 @ ../ui-react-rx/src/with/storageDiv.js
 @ ../app-storage/src/Query.js
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/api.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/api.js 12:36-52
 @ ./src/Connecting/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react/src/IdentityIcon/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react/src/IdentityIcon'
 @ ../ui-react/src/IdentityIcon/index.js 12:36-52
 @ ../ui-keyring/src/options/KeyPair.js
 @ ../ui-keyring/src/options/item.js
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Queue.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Queue.js 14:36-52
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Modal.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Modal.js 14:36-52
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Extrinsic.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Extrinsic.js 16:36-52
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Status.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Status.js 10:36-52
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/index.js 12:36-52
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Unlock.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Unlock.js 12:36-52
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/CopyButton.js
Module not found: Error: Can't resolve 'react-copy-to-clipboard' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/CopyButton.js 12:51-85
 @ ../app-vanitygen/src/Match.js
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/index.js
Module not found: Error: Can't resolve 'react-dom' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/index.js 16:39-59
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/File.js
Module not found: Error: Can't resolve 'react-dropzone' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/File.js 16:44-69
 @ ../ui-app/src/Params/Param/Code.js
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/translate.js 8:20-44
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-addresses/src'
 @ ../app-addresses/src/translate.js 8:20-44
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src'
 @ ../app-explorer/src/translate.js 8:20-44
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/translate.js 8:20-44
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/translate.js 8:20-44
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/translate.js 8:20-44
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Unlock.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Unlock.js 14:20-44
 @ ../app-toolbox/src/Sign.js
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/translate.js 8:20-44
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src'
 @ ../app-vanitygen/src/translate.js 8:20-44
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src'
 @ ./src/translate.js 8:20-44
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/translate.js 8:20-44
 @ ../ui-app/src/Button/Or.js
 @ ../ui-app/src/Button/index.js
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/i18n.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/i18n.js 16:20-44
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Extrinsic.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Extrinsic.js 18:20-44
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/translate.js 8:20-44
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/Content/index.js
Module not found: Error: Can't resolve 'react-router' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/Content'
 @ ./src/Content/index.js 14:19-42
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/SideBar/Item.js
Module not found: Error: Can't resolve 'react-router-dom' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/SideBar'
 @ ./src/SideBar/Item.js 14:22-49
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/index.js
Module not found: Error: Can't resolve 'react-router-dom' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/index.js 18:22-49
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/styles.js
Module not found: Error: Can't resolve 'semantic-ui-css/semantic.min.css' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/styles.js 3:0-43
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Menu.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/collections/Menu' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Menu.js 12:35-88
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Or.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Button' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/Or.js 12:37-89
 @ ../ui-app/src/Button/index.js
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Group.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Button' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/Group.js 12:37-89
 @ ../ui-app/src/Button/index.js
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/index.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Button' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/index.js 14:38-90
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Menu.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Divider' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Menu.js 10:38-91
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Icon.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Icon' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Icon.js 10:35-85
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Input.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Input' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Input.js 14:36-87
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Labelled.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Label' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Labelled.js 12:36-87
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Dropdown.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/modules/Dropdown' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Dropdown.js 14:39-92
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Modal.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/modules/Modal' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Modal.js 10:36-86
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/loadAll.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src'
 @ ../ui-keyring/src/loadAll.js 10:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/account/save.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/account'
 @ ../ui-keyring/src/account/save.js 10:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/account/meta.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/account'
 @ ../ui-keyring/src/account/meta.js 10:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/account/forget.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/account'
 @ ../ui-keyring/src/account/forget.js 10:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/address/forget.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/address'
 @ ../ui-keyring/src/address/forget.js 10:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/address/metaRecent.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/address'
 @ ../ui-keyring/src/address/metaRecent.js 10:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/address/meta.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/address'
 @ ../ui-keyring/src/address/meta.js 14:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js
Child html-webpack-plugin for "index.html":
         Asset     Size  Chunks  Chunk Names
    index.html  557 KiB       0  
    Entrypoint undefined = index.html
    [../../node_modules/html-webpack-plugin/lib/loader.js!./public/index.html] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/html-webpack-plugin/lib/loader.js!./public/index.html 707 bytes {0} [built]
    [../../node_modules/lodash/lodash.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/lodash/lodash.js 527 KiB {0} [built]
    [../../node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 489 bytes {0} [built]
    [../../node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {0} [built]
ℹ ｢wdm｣: Failed to compile.
^C

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ ℹ ｢serve｣: Process Ended via SIGINT
webpack-serve[10550]: ../src/node.cc:4012:void node::PlatformExit(): Assertion `(err) != (-1)' failed.
 1: node::Abort() [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 2: node::MakeCallback(v8::Isolate*, v8::Local<v8::Object>, char const*, int, v8::Local<v8::Value>*, node::async_context) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 3: node::PlatformExit() [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 4: __cxa_finalize_ranges [/usr/lib/system/libsystem_c.dylib]
 5: exit [/usr/lib/system/libsystem_c.dylib]
 6: node::Abort(v8::FunctionCallbackInfo<v8::Value> const&) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 7: v8::internal::FunctionCallbackArguments::Call(v8::internal::CallHandlerInfo*) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 8: v8::internal::MaybeHandle<v8::internal::Object> v8::internal::(anonymous namespace)::HandleApiCallHelper<false>(v8::internal::Isolate*, v8::internal::Handle<v8::internal::HeapObject>, v8::internal::Handle<v8::internal::HeapObject>, v8::internal::Handle<v8::internal::FunctionTemplateInfo>, v8::internal::Handle<v8::internal::Object>, v8::internal::BuiltinArguments) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 9: v8::internal::Builtin_Impl_HandleApiCall(v8::internal::BuiltinArguments, v8::internal::Isolate*) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
10: 0x1c938f1041bd
sh: line 1: 10550 Abort trap: 6           webpack-serve --config webpack.config.js --port 3000


 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ babel

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ which babel
/usr/local/bin/babel

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ babel --version
6.18.0 (babel-core 6.18.2)

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ yarn install babel-cli@7.0.0-beta.47
yarn install v0.24.6
(node:10629) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
error `install` has been replaced with `add` to add new dependencies. Run "yarn add babel-cli@7.0.0-beta.47" instead.
info Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command.

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ yarn add babel-cli@7.0.0-beta.47
yarn add v0.24.6
(node:10643) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
[1/4] 🔍  Resolving packages...
Couldn't find any versions for "babel-cli" that matches "7.0.0-beta.47"
? Please choose a version of "babel-cli" from this list: 7.0.0-beta.3
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "react-hot-loader@4.2.0" has unmet peer dependency "react@^15.0.0 || ^16.0.0".
[4/4] 📃  Building fresh packages...
success Saved lockfile.
success Saved 4 new dependencies.
├─ babel-cli@7.0.0-beta.3
├─ fsevents@1.2.4
├─ micromatch@2.3.11
└─ normalize-path@2.1.1
✨  Done in 43.52s.

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ WS_URL=wss://poc-1.polkadot.io:9944 yarn run start
yarn run v0.24.6
(node:10670) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
$ cd packages/apps && webpack-serve --config webpack.config.js --port 3000 
ℹ ｢hot｣: webpack: Compiling...
ℹ ｢hot｣: WebSocket Server Listening at localhost:8081
ℹ ｢serve｣: Project is running at http://localhost:3000
ℹ ｢serve｣: Server URI copied to clipboard
ℹ ｢hot｣: webpack: Compiling Done
✖ ｢wdm｣: Hash: 8b014a68947b382f3926
Version: webpack 4.12.0
Time: 12405ms
Built at: 06/11/2018 7:50:20 PM
               Asset       Size   Chunks             Chunk Names
    main.8b014a68.js    151 KiB     main  [emitted]  main
 runtime.8b014a68.js   30.9 KiB  runtime  [emitted]  runtime
          index.html  619 bytes           [emitted]  
locales/en/apps.json    3 bytes           [emitted]  
       manifest.json  337 bytes           [emitted]  
         favicon.ico   37.2 KiB           [emitted]  
Entrypoint main = runtime.8b014a68.js main.8b014a68.js
[../../node_modules/loglevelnext/dist/loglevelnext.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/loglevelnext/dist/loglevelnext.js 55.9 KiB {main} [built]
[../../node_modules/punycode/punycode.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/punycode/punycode.js 14.3 KiB {main} [built]
[../../node_modules/querystring-es3/encode.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/querystring-es3/encode.js 2.48 KiB {main} [built]
[0] multi ./src/index.js 28 bytes {main} [built]
[../../node_modules/webpack-hot-client/client/index.js?9a9f43fe-bb79-4d8a-aefa-0a85cf3dcf00] (webpack)-hot-client/client?9a9f43fe-bb79-4d8a-aefa-0a85cf3dcf00 2.47 KiB {main} [built]
[1] multi webpack-hot-client/client?9a9f43fe-bb79-4d8a-aefa-0a85cf3dcf00 ./src/index.js 40 bytes {main} [built]
[../../node_modules/querystring-es3/index.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/querystring-es3/index.js 127 bytes {main} [built]
[../../node_modules/url/url.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/url/url.js 22.8 KiB {main} [built]
[../../node_modules/url/util.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/url/util.js 314 bytes {main} [built]
[../../node_modules/webpack-hot-client/client/hot.js] (webpack)-hot-client/client/hot.js 4.91 KiB {main} [built]
[../../node_modules/webpack-hot-client/client/log.js] (webpack)-hot-client/client/log.js 2.4 KiB {main} [built]
[../../node_modules/webpack-hot-client/client/socket.js] (webpack)-hot-client/client/socket.js 1.39 KiB {main} [built]
[../../node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 489 bytes {main} [built]
[../../node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {main} [built]
[./src/index.js] 2.65 KiB {main} [built] [failed] [1 error]
    + 1 hidden module

ERROR in ./src/index.js
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/thread-loader/dist/cjs.js):
Thread Loader (Worker 0)
Requires Babel "^7.0.0-0", but was loaded with "6.26.3". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel. (While processing preset: "/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/preset-env/lib/index.js")

    at throwVersionError (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/helper-plugin-utils/lib/index.js:65:11)
    at Object.assertVersion (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/helper-plugin-utils/lib/index.js:13:11)
    at _default (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/preset-env/lib/index.js:150:7)
    at /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/helper-plugin-utils/lib/index.js:19:12
    at /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:317:46
    at Array.map (<anonymous>)
    at OptionManager.resolvePresets (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:275:20)
    at OptionManager.mergePresets (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:264:10)
    at OptionManager.mergeOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:249:14)
    at OptionManager.init (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:368:12)
    at File.initOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/index.js:212:65)
    at new File (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/index.js:135:24)
    at Pipeline.transform (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/pipeline.js:46:16)
    at transpile (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-loader/lib/index.js:50:20)
    at Object.module.exports (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-loader/lib/index.js:173:20)
 @ multi ./src/index.js
Child html-webpack-plugin for "index.html":
         Asset     Size  Chunks  Chunk Names
    index.html  557 KiB       0  
    Entrypoint undefined = index.html
    [../../node_modules/html-webpack-plugin/lib/loader.js!./public/index.html] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/html-webpack-plugin/lib/loader.js!./public/index.html 707 bytes {0} [built]
    [../../node_modules/lodash/lodash.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/lodash/lodash.js 527 KiB {0} [built]
    [../../node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 489 bytes {0} [built]
    [../../node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {0} [built]
ℹ ｢wdm｣: Failed to compile.
^[[A^[[A^Cℹ ｢serve｣: Process Ended via SIGINT


 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ webpack-serve[10672]: ../src/node.cc:4012:void node::PlatformExit(): Assertion `(err) != (-1)' failed.
 1: node::Abort() [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 2: node::MakeCallback(v8::Isolate*, v8::Local<v8::Object>, char const*, int, v8::Local<v8::Value>*, node::async_context) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 3: node::PlatformExit() [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 4: __cxa_finalize_ranges [/usr/lib/system/libsystem_c.dylib]
 5: exit [/usr/lib/system/libsystem_c.dylib]
 6: node::Abort(v8::FunctionCallbackInfo<v8::Value> const&) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 7: v8::internal::FunctionCallbackArguments::Call(v8::internal::CallHandlerInfo*) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 8: v8::internal::MaybeHandle<v8::internal::Object> v8::internal::(anonymous namespace)::HandleApiCallHelper<false>(v8::internal::Isolate*, v8::internal::Handle<v8::internal::HeapObject>, v8::internal::Handle<v8::internal::HeapObject>, v8::internal::Handle<v8::internal::FunctionTemplateInfo>, v8::internal::Handle<v8::internal::Object>, v8::internal::BuiltinArguments) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
 9: v8::internal::Builtin_Impl_HandleApiCall(v8::internal::BuiltinArguments, v8::internal::Isolate*) [/Users/Ls/.nvm/versions/node/v10.4.0/bin/node]
10: 0x30122af041bd
11: 0x30122af13429
12: 0x30122af13429
13: 0x30122af13429
sh: line 1: 10672 Abort trap: 6           webpack-serve --config webpack.config.js --port 3000


 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ yarn uninstall babel-cli
yarn uninstall v0.24.6
(node:10699) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
error Did you mean `yarn remove`?
info Visit https://yarnpkg.com/en/docs/cli/remove for documentation about this command.

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ yarn remove babel-cli
yarn remove v0.24.6
(node:10714) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
[1/2] Removing module babel-cli...
[2/2] Regenerating lockfile and installing missing dependencies...
warning "react-hot-loader@4.2.0" has unmet peer dependency "react@^15.0.0 || ^16.0.0".
success Uninstalled packages.
✨  Done in 14.26s.

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ WS_URL=wss://poc-1.polkadot.io:9944 yarn run start
yarn run v0.24.6
(node:10735) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
$ cd packages/apps && webpack-serve --config webpack.config.js --port 3000 
ℹ ｢hot｣: webpack: Compiling...
ℹ ｢hot｣: WebSocket Server Listening at localhost:8081
ℹ ｢serve｣: Project is running at http://localhost:3000
ℹ ｢serve｣: Server URI copied to clipboard
ℹ ｢hot｣: webpack: Compiling Done
✖ ｢wdm｣: Hash: cc75e88c9837fea63532
Version: webpack 4.12.0
Time: 12407ms
Built at: 06/11/2018 7:51:14 PM
               Asset       Size   Chunks             Chunk Names
    main.cc75e88c.js    151 KiB     main  [emitted]  main
 runtime.cc75e88c.js   30.9 KiB  runtime  [emitted]  runtime
          index.html  619 bytes           [emitted]  
locales/en/apps.json    3 bytes           [emitted]  
       manifest.json  337 bytes           [emitted]  
         favicon.ico   37.2 KiB           [emitted]  
Entrypoint main = runtime.cc75e88c.js main.cc75e88c.js
[../../node_modules/loglevelnext/dist/loglevelnext.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/loglevelnext/dist/loglevelnext.js 55.9 KiB {main} [built]
[../../node_modules/punycode/punycode.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/punycode/punycode.js 14.3 KiB {main} [built]
[../../node_modules/querystring-es3/encode.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/querystring-es3/encode.js 2.48 KiB {main} [built]
[0] multi ./src/index.js 28 bytes {main} [built]
[../../node_modules/webpack-hot-client/client/index.js?b62bd143-ef78-4af0-bbb6-d921caee85b9] (webpack)-hot-client/client?b62bd143-ef78-4af0-bbb6-d921caee85b9 2.47 KiB {main} [built]
[1] multi webpack-hot-client/client?b62bd143-ef78-4af0-bbb6-d921caee85b9 ./src/index.js 40 bytes {main} [built]
[../../node_modules/querystring-es3/index.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/querystring-es3/index.js 127 bytes {main} [built]
[../../node_modules/url/url.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/url/url.js 22.8 KiB {main} [built]
[../../node_modules/url/util.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/url/util.js 314 bytes {main} [built]
[../../node_modules/webpack-hot-client/client/hot.js] (webpack)-hot-client/client/hot.js 4.91 KiB {main} [built]
[../../node_modules/webpack-hot-client/client/log.js] (webpack)-hot-client/client/log.js 2.4 KiB {main} [built]
[../../node_modules/webpack-hot-client/client/socket.js] (webpack)-hot-client/client/socket.js 1.39 KiB {main} [built]
[../../node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 489 bytes {main} [built]
[../../node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {main} [built]
[./src/index.js] 2.65 KiB {main} [built] [failed] [1 error]
    + 1 hidden module

ERROR in ./src/index.js
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/thread-loader/dist/cjs.js):
Thread Loader (Worker 0)
Requires Babel "^7.0.0-0", but was loaded with "6.26.3". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel. (While processing preset: "/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/preset-env/lib/index.js")

    at throwVersionError (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/helper-plugin-utils/lib/index.js:65:11)
    at Object.assertVersion (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/helper-plugin-utils/lib/index.js:13:11)
    at _default (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/preset-env/lib/index.js:150:7)
    at /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/helper-plugin-utils/lib/index.js:19:12
    at /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:317:46
    at Array.map (<anonymous>)
    at OptionManager.resolvePresets (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:275:20)
    at OptionManager.mergePresets (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:264:10)
    at OptionManager.mergeOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:249:14)
    at OptionManager.init (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/options/option-manager.js:368:12)
    at File.initOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/index.js:212:65)
    at new File (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/file/index.js:135:24)
    at Pipeline.transform (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-core/lib/transformation/pipeline.js:46:16)
    at transpile (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-loader/lib/index.js:50:20)
    at Object.module.exports (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/babel-loader/lib/index.js:173:20)
 @ multi ./src/index.js
Child html-webpack-plugin for "index.html":
         Asset     Size  Chunks  Chunk Names
    index.html  557 KiB       0  
    Entrypoint undefined = index.html
    [../../node_modules/html-webpack-plugin/lib/loader.js!./public/index.html] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/html-webpack-plugin/lib/loader.js!./public/index.html 707 bytes {0} [built]
    [../../node_modules/lodash/lodash.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/lodash/lodash.js 527 KiB {0} [built]
    [../../node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 489 bytes {0} [built]
    [../../node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {0} [built]
ℹ ｢wdm｣: Failed to compile.
^[[A^[[A^Cℹ ｢serve｣: Process Ended via SIGINT


 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ 

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ npm uninstall babel-cli
npm WARN rm not removing /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/jscodeshift/node_modules/.bin/babylon as it wasn't installed by /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/jscodeshift/node_modules/babylon
npm WARN rm not removing /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@polkadot/dev-react/node_modules/.bin/browserslist as it wasn't installed by /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@polkadot/dev-react/node_modules/browserslist
npm WARN rm not removing /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/traverse/node_modules/.bin/babylon as it wasn't installed by /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/traverse/node_modules/babylon
npm WARN rm not removing /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/template/node_modules/.bin/babylon as it wasn't installed by /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/template/node_modules/babylon
npm WARN rm not removing /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/preset-env/node_modules/.bin/browserslist as it wasn't installed by /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/preset-env/node_modules/browserslist
npm WARN rm not removing /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/generator/node_modules/.bin/jsesc as it wasn't installed by /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/generator/node_modules/jsesc
npm WARN rm not removing /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/core/node_modules/.bin/babylon as it wasn't installed by /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/core/node_modules/babylon

> fsevents@1.2.4 install /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/fsevents
> node install

[fsevents] Success: "/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64/fse.node" already installed
Pass --update-binary to reinstall or --build-from-source to recompile
added 487 packages from 218 contributors, removed 255 packages, updated 1624 packages and audited 47756 packages in 92.288s
found 1 moderate severity vulnerability
  run `npm audit fix` to fix them, or `npm audit` for details

 MP@Ls /Users/Ls/code/blockchain/clones/paritytech/temp/apps [git:master]
$ WS_URL=wss://poc-1.polkadot.io:9944 yarn run start
yarn run v0.24.6
(node:10804) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
$ cd packages/apps && webpack-serve --config webpack.config.js --port 3000 
ℹ ｢hot｣: webpack: Compiling...
ℹ ｢hot｣: WebSocket Server Listening at localhost:8081
ℹ ｢serve｣: Project is running at http://localhost:3000
ℹ ｢serve｣: Server URI copied to clipboard
ℹ ｢hot｣: webpack: Compiling Done
✖ ｢wdm｣: Hash: 3011c6121fc2470e1720
Version: webpack 4.12.0
Time: 24543ms
Built at: 06/11/2018 7:53:39 PM
               Asset       Size   Chunks                    Chunk Names
    main.3011c612.js   1.23 MiB     main  [emitted]  [big]  main
 runtime.3011c612.js   30.9 KiB  runtime  [emitted]         runtime
  vendor.26edeb9c.js    148 KiB   vendor  [emitted]         vendor
          index.html  684 bytes           [emitted]         
locales/en/apps.json    3 bytes           [emitted]         
       manifest.json  337 bytes           [emitted]         
         favicon.ico   37.2 KiB           [emitted]         
Entrypoint main [big] = runtime.3011c612.js vendor.26edeb9c.js main.3011c612.js
[../../node_modules/@babel/runtime/helpers/interopRequireDefault.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/@babel/runtime/helpers/interopRequireDefault.js 145 bytes {main} [built]
[../../node_modules/webpack-hot-client/client/index.js?84df1287-0126-402e-8d3c-0ee421e3b514] (webpack)-hot-client/client?84df1287-0126-402e-8d3c-0ee421e3b514 2.47 KiB {main} [built]
[../../node_modules/webpack-hot-client/client/log.js] (webpack)-hot-client/client/log.js 2.4 KiB {main} [built]
[../../node_modules/webpack-hot-client/client/socket.js] (webpack)-hot-client/client/socket.js 1.39 KiB {main} [built]
[../../node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {main} [built]
[../ui-app/src/index.js] 1.47 KiB {main} [built]
[../ui-signer/src/index.js] 1.64 KiB {main} [built]
[./src/Connecting/index.js] 1.73 KiB {main} [built]
[0] multi ./src/index.js 28 bytes {main} [built]
[./src/Content/index.js] 1.63 KiB {main} [built]
[./src/NodeInfo.js] 2.24 KiB {main} [built]
[./src/SideBar/index.js] 2.37 KiB {main} [built]
[./src/index.css] 1.27 KiB {main} [built]
[./src/index.js] 1.66 KiB {main} [built]
[2] multi webpack-hot-client/client?84df1287-0126-402e-8d3c-0ee421e3b514 ./src/index.js 40 bytes {main} [built]
    + 433 hidden modules

ERROR in ../ui-app/src/styles/rx.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/styles/rx.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/styles/rx.css 2:14-152 21:1-42:3 21:150-42:2 22:19-157
 @ ../ui-app/src/styles.js
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/styles/components.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/styles/components.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/styles/components.css 2:14-160 21:1-42:3 21:158-42:2 22:19-165
 @ ../ui-app/src/styles.js
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/SideBar/Item.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!./src/SideBar/Item.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ./src/SideBar/Item.css 2:14-154 21:1-42:3 21:152-42:2 22:19-159
 @ ./src/SideBar/Item.js
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/options/KeyPair.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-keyring/src/options/KeyPair.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-keyring/src/options/KeyPair.css 2:14-157 21:1-42:3 21:155-42:2 22:19-162
 @ ../ui-keyring/src/options/KeyPair.js
 @ ../ui-keyring/src/options/item.js
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/InputExtrinsic.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/InputExtrinsic/InputExtrinsic.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/InputExtrinsic/InputExtrinsic.css 2:14-164 21:1-42:3 21:162-42:2 22:19-169
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Button.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/Button/Button.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/Button/Button.css 2:14-156 21:1-42:3 21:154-42:2 22:19-161
 @ ../ui-app/src/Button/index.js
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-accounts/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-accounts/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-explorer/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-explorer/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/styles/form.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/styles/form.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/styles/form.css 2:14-154 21:1-42:3 21:152-42:2 22:19-159
 @ ../ui-app/src/styles.js
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BlockHeader/BlockHeader.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-explorer/src/BlockHeader/BlockHeader.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-explorer/src/BlockHeader/BlockHeader.css 2:14-161 21:1-42:3 21:159-42:2 22:19-166
 @ ../app-explorer/src/BlockHeader/index.js
 @ ../app-explorer/src/BlockHeaders.js
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-vanitygen/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-vanitygen/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react/src/IdentityIcon/IdentityIcon.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-react/src/IdentityIcon/IdentityIcon.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-react/src/IdentityIcon/IdentityIcon.css 2:14-162 21:1-42:3 21:160-42:2 22:19-167
 @ ../ui-react/src/IdentityIcon/index.js
 @ ../ui-keyring/src/options/KeyPair.js
 @ ../ui-keyring/src/options/item.js
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-rpc/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-rpc/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-toolbox/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-toolbox/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-addresses/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-addresses/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/Connecting/Connecting.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!./src/Connecting/Connecting.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ./src/Connecting/Connecting.css 2:14-160 21:1-42:3 21:158-42:2 22:19-165
 @ ./src/Connecting/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/styles/app.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/styles/app.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/styles/app.css 2:14-153 21:1-42:3 21:151-42:2 22:19-158
 @ ../ui-app/src/styles.js
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-extrinsics/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-extrinsics/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputAddress/InputAddress.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/InputAddress/InputAddress.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/InputAddress/InputAddress.css 2:14-162 21:1-42:3 21:160-42:2 22:19-167
 @ ../ui-app/src/InputAddress/index.js
 @ ../app-accounts/src/Editor.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-signer/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-signer/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!./src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ./src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/Content/Content.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!./src/Content/Content.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ./src/Content/Content.css 2:14-157 21:1-42:3 21:155-42:2 22:19-162
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Params.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/Params/Params.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/Params/Params.css 2:14-156 21:1-42:3 21:154-42:2 22:19-161
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/styles/semantic.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../ui-app/src/styles/semantic.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../ui-app/src/styles/semantic.css 2:14-158 21:1-42:3 21:156-42:2 22:19-163
 @ ../ui-app/src/styles.js
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/NotFound/NotFound.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!./src/NotFound/NotFound.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ./src/NotFound/NotFound.css 2:14-158 21:1-42:3 21:156-42:2 22:19-163
 @ ./src/NotFound/index.js
 @ ./src/routing/unknown.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/index.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!../app-storage/src/index.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ../app-storage/src/index.css 2:14-149 21:1-42:3 21:147-42:2 22:19-154
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/SideBar/SideBar.css (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/css-loader??ref--4-1!/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib??postcss!./src/SideBar/SideBar.css)
Module build failed (from /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js):
Error: Cannot find module 'postcss-clean'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:594:15)
    at Function.Module._load (internal/modules/cjs/loader.js:520:25)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.plugins (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/webpack.config.js:57:19)
    at Object.parseOptions (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/options.js:5:37)
    at Promise.resolve.then (/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/postcss-loader/lib/index.js:68:27)
 @ ./src/SideBar/SideBar.css 2:14-157 21:1-42:3 21:155-42:2 22:19-162
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Api.js
Module not found: Error: Can't resolve '@polkadot/api-provider/ws' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Api.js 18:33-69
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Api.js
Module not found: Error: Can't resolve '@polkadot/api-rx' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Api.js 20:36-63
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Api.js
Module not found: Error: Can't resolve '@polkadot/api-rx/defaults' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Api.js 22:39-75
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Selection.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Selection.js 16:41-72
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Params/Call.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src/Params'
 @ ../app-extrinsics/src/Params/Call.js 12:41-72
 @ ../app-extrinsics/src/Params/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Params/Proposal.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src/Params'
 @ ../app-extrinsics/src/Params/Proposal.js 12:41-72
 @ ../app-extrinsics/src/Params/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/index.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic'
 @ ../ui-app/src/InputExtrinsic/index.js 16:41-72
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/SelectMethod.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic'
 @ ../ui-app/src/InputExtrinsic/SelectMethod.js 12:41-72
 @ ../ui-app/src/InputExtrinsic/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/options/method.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic/options'
 @ ../ui-app/src/InputExtrinsic/options/method.js 16:41-72
 @ ../ui-app/src/InputExtrinsic/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/options/section.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic/options'
 @ ../ui-app/src/InputExtrinsic/options/section.js 14:41-72
 @ ../ui-app/src/InputExtrinsic/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Extrinsic.js
Module not found: Error: Can't resolve '@polkadot/extrinsics' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Extrinsic.js 20:41-72
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/sign.js
Module not found: Error: Can't resolve '@polkadot/extrinsics-codec/encode/call' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/sign.js 10:35-84
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Extrinsic.js
Module not found: Error: Can't resolve '@polkadot/extrinsics-codec/encode/extrinsic' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Extrinsic.js 18:40-94
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Selection.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Selection.js 18:38-66
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/Selection.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/Selection.js 20:38-66
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/SelectMethod.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc'
 @ ../ui-app/src/InputRpc/SelectMethod.js 12:38-66
 @ ../ui-app/src/InputRpc/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/index.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc'
 @ ../ui-app/src/InputRpc/index.js 16:38-66
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/options/method.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc/options'
 @ ../ui-app/src/InputRpc/options/method.js 16:38-66
 @ ../ui-app/src/InputRpc/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/options/section.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc/options'
 @ ../ui-app/src/InputRpc/options/section.js 14:38-66
 @ ../ui-app/src/InputRpc/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Chain.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Chain.js 10:38-66
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/BestNumber.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/BestNumber.js 10:38-66
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/NodeVersion.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/NodeVersion.js 10:38-66
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/NodeName.js
Module not found: Error: Can't resolve '@polkadot/jsonrpc' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/NodeName.js 10:38-66
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/transform/storage.js
Module not found: Error: Can't resolve '@polkadot/params/decode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with/transform'
 @ ../ui-react-rx/src/with/transform/storage.js 10:37-71
 @ ../ui-react-rx/src/with/storage.js
 @ ../ui-react-rx/src/with/storageDiv.js
 @ ../ui-react-rx/src/Nonce.js
 @ ../app-accounts/src/Address.js
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/Query.js
Module not found: Error: Can't resolve '@polkadot/params/typeToString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/Query.js 14:43-83
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/initValue.js
Module not found: Error: Can't resolve '@polkadot/params/typeToString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/initValue.js 12:43-83
 @ ../ui-app/src/Params/values.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/index.js
Module not found: Error: Can't resolve '@polkadot/params/typeToString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/index.js 14:43-83
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Unknown.js
Module not found: Error: Can't resolve '@polkadot/params/typeToString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Unknown.js 12:43-83
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BestHash.js
Module not found: Error: Can't resolve '@polkadot/primitives-codec/header/hash' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src'
 @ ../app-explorer/src/BestHash.js 10:35-84
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BlockHeader/index.js
Module not found: Error: Can't resolve '@polkadot/primitives-codec/header/hash' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src/BlockHeader'
 @ ../app-explorer/src/BlockHeader/index.js 14:35-84
 @ ../app-explorer/src/BlockHeaders.js
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/Selection.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/Selection.js 16:38-66
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/SelectKey.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage'
 @ ../ui-app/src/InputStorage/SelectKey.js 12:38-66
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/index.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage'
 @ ../ui-app/src/InputStorage/index.js 16:38-66
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/options/section.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage/options'
 @ ../ui-app/src/InputStorage/options/section.js 14:38-66
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/options/key.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage/options'
 @ ../ui-app/src/InputStorage/options/key.js 16:38-66
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Balance.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Balance.js 10:38-66
 @ ../app-accounts/src/Address.js
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Nonce.js
Module not found: Error: Can't resolve '@polkadot/storage' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Nonce.js 10:38-66
 @ ../app-accounts/src/Address.js
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/storage.js
Module not found: Error: Can't resolve '@polkadot/storage/key' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/storage.js 20:34-66
 @ ../ui-react-rx/src/with/storageDiv.js
 @ ../ui-react-rx/src/Nonce.js
 @ ../app-accounts/src/Address.js
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Hash.js
Module not found: Error: Can't resolve '@polkadot/util-crypto/blake2/asHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Hash.js 28:36-81
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util-crypto/nacl/keypair/fromSeed' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 32:39-93
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/generator/generate.js
Module not found: Error: Can't resolve '@polkadot/util-crypto/nacl/keypair/fromSeed' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src/generator'
 @ ../app-vanitygen/src/generator/generate.js 16:21-75
 @ ../app-vanitygen/src/generator/index.js
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Verify.js
Module not found: Error: Can't resolve '@polkadot/util-crypto/nacl/verify' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Verify.js 32:37-81
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util-crypto/random/asU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 34:36-81
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/generator/generate.js
Module not found: Error: Can't resolve '@polkadot/util-crypto/random/asU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src/generator'
 @ ../app-vanitygen/src/generator/generate.js 12:20-65
 @ ../app-vanitygen/src/generator/index.js
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Address.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/decode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Address.js 24:37-85
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/decode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-addresses/src'
 @ ../app-addresses/src/Creator.js 22:37-85
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputAddress/addressToAddress.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/decode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputAddress'
 @ ../ui-app/src/InputAddress/addressToAddress.js 10:37-85
 @ ../ui-app/src/InputAddress/index.js
 @ ../app-accounts/src/Editor.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputAddress/index.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/decode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputAddress'
 @ ../ui-app/src/InputAddress/index.js 20:37-85
 @ ../app-accounts/src/Editor.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/address/get.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/decode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/address'
 @ ../ui-keyring/src/address/get.js 12:37-85
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Address.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Address.js 26:37-85
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 36:37-85
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-addresses/src'
 @ ../app-addresses/src/Creator.js 24:37-85
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/generator/generate.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src/generator'
 @ ../app-vanitygen/src/generator/generate.js 14:22-70
 @ ../app-vanitygen/src/generator/index.js
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputAddress/addressToAddress.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputAddress'
 @ ../ui-app/src/InputAddress/addressToAddress.js 12:37-85
 @ ../ui-app/src/InputAddress/index.js
 @ ../app-accounts/src/Editor.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/valueToText.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/valueToText.js 14:37-85
 @ ../app-storage/src/Query.js
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/isAvailable.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src'
 @ ../ui-keyring/src/isAvailable.js 12:37-85
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/address/get.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/address'
 @ ../ui-keyring/src/address/get.js 14:37-85
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Extrinsic.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/address/encode' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Extrinsic.js 28:37-85
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/index.js
Module not found: Error: Can't resolve '@polkadot/util-keyring/testing' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src'
 @ ../ui-keyring/src/index.js 10:38-79
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/api.js
Module not found: Error: Can't resolve '@polkadot/util/assert' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/api.js 14:37-69
 @ ./src/Connecting/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/observable.js
Module not found: Error: Can't resolve '@polkadot/util/assert' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/observable.js 20:37-69
 @ ../ui-react-rx/src/with/apiCall.js
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeVersion.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/apiCall.js
Module not found: Error: Can't resolve '@polkadot/util/assert' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/apiCall.js 14:37-69
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeVersion.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/resultToText.js
Module not found: Error: Can't resolve '@polkadot/util/bn/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/resultToText.js 16:36-70
 @ ../app-rpc/src/Results.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Code.js
Module not found: Error: Can't resolve '@polkadot/util/bn/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Code.js 14:36-70
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/KeyValue.js
Module not found: Error: Can't resolve '@polkadot/util/bn/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/KeyValue.js 14:36-70
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util/hex/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 26:36-71
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Hash.js
Module not found: Error: Can't resolve '@polkadot/util/hex/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Hash.js 22:36-71
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Sign.js
Module not found: Error: Can't resolve '@polkadot/util/hex/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Sign.js 28:36-71
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Verify.js
Module not found: Error: Can't resolve '@polkadot/util/hex/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Verify.js 26:36-71
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/BaseBytes.js
Module not found: Error: Can't resolve '@polkadot/util/hex/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/BaseBytes.js 14:36-71
 @ ../ui-app/src/Params/Param/Bytes.js
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/KeyValue.js
Module not found: Error: Can't resolve '@polkadot/util/hex/toU8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/KeyValue.js 18:37-72
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/resultToText.js
Module not found: Error: Can't resolve '@polkadot/util/is/bn' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/resultToText.js 20:33-64
 @ ../app-rpc/src/Results.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/valueToText.js
Module not found: Error: Can't resolve '@polkadot/util/is/bn' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/valueToText.js 18:33-64
 @ ../app-storage/src/Query.js
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/util/triggerChange.js
Module not found: Error: Can't resolve '@polkadot/util/is/function' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/util'
 @ ../ui-react-rx/src/util/triggerChange.js 12:39-76
 @ ../ui-react-rx/src/with/observable.js
 @ ../ui-react-rx/src/with/apiCall.js
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeVersion.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util/is/hex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 24:34-66
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Verify.js
Module not found: Error: Can't resolve '@polkadot/util/is/hex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Verify.js 28:34-66
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Hash.js
Module not found: Error: Can't resolve '@polkadot/util/is/hex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Hash.js 24:34-66
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Sign.js
Module not found: Error: Can't resolve '@polkadot/util/is/hex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Sign.js 30:34-66
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/resultToText.js
Module not found: Error: Can't resolve '@polkadot/util/is/object' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/resultToText.js 22:37-72
 @ ../app-rpc/src/Results.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/util/triggerChange.js
Module not found: Error: Can't resolve '@polkadot/util/is/observable' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/util'
 @ ../ui-react-rx/src/util/triggerChange.js 14:41-80
 @ ../ui-react-rx/src/with/observable.js
 @ ../ui-react-rx/src/with/apiCall.js
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeVersion.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/isAvailable.js
Module not found: Error: Can't resolve '@polkadot/util/is/string' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src'
 @ ../ui-keyring/src/isAvailable.js 10:37-72
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/address/get.js
Module not found: Error: Can't resolve '@polkadot/util/is/string' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/address'
 @ ../ui-keyring/src/address/get.js 10:37-72
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/resultToText.js
Module not found: Error: Can't resolve '@polkadot/util/is/u8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/resultToText.js 24:34-66
 @ ../app-rpc/src/Results.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/valueToText.js
Module not found: Error: Can't resolve '@polkadot/util/is/u8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/valueToText.js 20:34-66
 @ ../app-storage/src/Query.js
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-identicon/src/seeder.js
Module not found: Error: Can't resolve '@polkadot/util/is/u8a' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-identicon/src'
 @ ../ui-identicon/src/seeder.js 12:14-46
 @ ../ui-identicon/src/index.js
 @ ../ui-react/src/IdentityIcon/appendIcon.js
 @ ../ui-react/src/IdentityIcon/index.js
 @ ../ui-keyring/src/options/KeyPair.js
 @ ../ui-keyring/src/options/item.js
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Extrinsic.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Extrinsic.js 26:40-78
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/Results.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/Results.js 16:40-78
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/Selection.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/Selection.js 28:40-78
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Input.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Input.js 16:40-78
 @ ../ui-app/src/Password.js
 @ ../ui-signer/src/Unlock.js
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Or.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/Or.js 14:40-78
 @ ../ui-app/src/Button/index.js
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/index.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/index.js 16:40-78
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/values.js
Module not found: Error: Can't resolve '@polkadot/util/is/undefined' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/values.js 10:40-78
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Code.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/concat' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Code.js 16:37-73
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/KeyValue.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/concat' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/KeyValue.js 16:37-73
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/sign.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/concat' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/sign.js 14:37-73
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/fromString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 28:41-81
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Hash.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/fromString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Hash.js 26:41-81
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Verify.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/fromString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Verify.js 30:41-81
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Sign.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/fromString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Sign.js 32:41-81
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-identicon/src/seeder.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/fromString' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-identicon/src'
 @ ../ui-identicon/src/seeder.js 14:22-62
 @ ../ui-identicon/src/index.js
 @ ../ui-react/src/IdentityIcon/appendIcon.js
 @ ../ui-react/src/IdentityIcon/index.js
 @ ../ui-keyring/src/options/KeyPair.js
 @ ../ui-keyring/src/options/item.js
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 30:36-71
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BestHash.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src'
 @ ../app-explorer/src/BestHash.js 14:36-71
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BlockHeader/index.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src/BlockHeader'
 @ ../app-explorer/src/BlockHeader/index.js 20:36-71
 @ ../app-explorer/src/BlockHeaders.js
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/resultToText.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/resultToText.js 18:37-72
 @ ../app-rpc/src/Results.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Sign.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Sign.js 34:36-71
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/Match.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src'
 @ ../app-vanitygen/src/Match.js 22:36-71
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/valueToText.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/valueToText.js 16:36-71
 @ ../app-storage/src/Query.js
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Extrinsic.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Extrinsic.js 26:36-71
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/sign.js
Module not found: Error: Can't resolve '@polkadot/util/u8a/toHex' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/sign.js 16:36-71
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/i18n.js
Module not found: Error: Can't resolve 'i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/i18n.js 10:38-56
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/i18n.js
Module not found: Error: Can't resolve 'i18next-browser-languagedetector' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/i18n.js 12:61-104
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/i18n.js
Module not found: Error: Can't resolve 'i18next-xhr-backend' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/i18n.js 14:48-78
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/react-hot-loader/dist/react-hot-loader.development.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/react-hot-loader/dist'
 @ /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/react-hot-loader/dist/react-hot-loader.development.js 7:12-28
 @ /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/react-hot-loader/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/index.js 14:36-52
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Creator.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Creator.js 12:36-52
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Address.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Address.js 12:36-52
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/Editor.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/Editor.js 12:36-52
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-addresses/src'
 @ ../app-addresses/src/index.js 14:36-52
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/Editor.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-addresses/src'
 @ ../app-addresses/src/Editor.js 12:36-52
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/Creator.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-addresses/src'
 @ ../app-addresses/src/Creator.js 12:36-52
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BlockHeaders.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src'
 @ ../app-explorer/src/BlockHeaders.js 14:36-52
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src'
 @ ../app-explorer/src/index.js 12:36-52
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/BlockHeader/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src/BlockHeader'
 @ ../app-explorer/src/BlockHeader/index.js 12:36-52
 @ ../app-explorer/src/BlockHeaders.js
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Selection.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Selection.js 14:36-52
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Extrinsic.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Extrinsic.js 16:36-52
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/index.js 12:36-52
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Nonce.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Nonce.js 10:36-52
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Account.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/Account.js 12:36-52
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Params/Extrinsic.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src/Params'
 @ ../app-extrinsics/src/Params/Extrinsic.js 12:36-52
 @ ../app-extrinsics/src/Params/Call.js
 @ ../app-extrinsics/src/Params/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Params/Account.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src/Params'
 @ ../app-extrinsics/src/Params/Account.js 12:36-52
 @ ../app-extrinsics/src/Params/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Params/Proposal.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src/Params'
 @ ../app-extrinsics/src/Params/Proposal.js 10:36-52
 @ ../app-extrinsics/src/Params/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/Params/Call.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src/Params'
 @ ../app-extrinsics/src/Params/Call.js 10:36-52
 @ ../app-extrinsics/src/Params/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/index.js 12:36-52
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/Selection.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/Selection.js 18:36-52
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/Results.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/Results.js 10:36-52
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/Account.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/Account.js 14:36-52
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/Selection.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/Selection.js 14:36-52
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/Queries.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/Queries.js 10:36-52
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/Query.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/Query.js 12:36-52
 @ ../app-storage/src/Queries.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/index.js 14:36-52
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Unlock.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Unlock.js 12:36-52
 @ ../app-toolbox/src/Sign.js
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Verify.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Verify.js 12:36-52
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/index.js 14:36-52
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Sign.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Sign.js 12:36-52
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Hash.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Hash.js 12:36-52
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/Match.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src'
 @ ../app-vanitygen/src/Match.js 12:36-52
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src'
 @ ../app-vanitygen/src/index.js 20:36-52
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src'
 @ ./src/index.js 7:36-52
 @ multi ./src/index.js

ERROR in ./src/NodeInfo.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src'
 @ ./src/NodeInfo.js 10:36-52
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/Connecting/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/Connecting'
 @ ./src/Connecting/index.js 12:36-52
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/Content/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/Content'
 @ ./src/Content/index.js 12:36-52
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/NotFound/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/NotFound'
 @ ./src/NotFound/index.js 12:36-52
 @ ./src/routing/unknown.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/SideBar/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/SideBar'
 @ ./src/SideBar/index.js 12:36-52
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/SideBar/Item.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/SideBar'
 @ ./src/SideBar/Item.js 12:36-52
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Labelled.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Labelled.js 10:36-52
 @ ../ui-app/src/Input.js
 @ ../ui-app/src/Password.js
 @ ../ui-signer/src/Unlock.js
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/index.js 14:36-52
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Password.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Password.js 12:36-52
 @ ../ui-signer/src/Unlock.js
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/CopyButton.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/CopyButton.js 10:36-52
 @ ../app-accounts/src/Address.js
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Dropdown.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Dropdown.js 12:36-52
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Static.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Static.js 10:36-52
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Output.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Output.js 10:36-52
 @ ../app-toolbox/src/Hash.js
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Input.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Input.js 12:36-52
 @ ../ui-app/src/Password.js
 @ ../ui-signer/src/Unlock.js
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Group.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/Group.js 10:36-52
 @ ../ui-app/src/Button/index.js
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/index.js 12:36-52
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Divider.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/Divider.js 10:36-52
 @ ../ui-app/src/Button/index.js
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Or.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/Or.js 10:36-52
 @ ../ui-app/src/Button/index.js
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputAddress/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputAddress'
 @ ../ui-app/src/InputAddress/index.js 14:36-52
 @ ../app-accounts/src/Editor.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/SelectSection.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic'
 @ ../ui-app/src/InputExtrinsic/SelectSection.js 10:36-52
 @ ../ui-app/src/InputExtrinsic/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic'
 @ ../ui-app/src/InputExtrinsic/index.js 14:36-52
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/SelectMethod.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic'
 @ ../ui-app/src/InputExtrinsic/SelectMethod.js 10:36-52
 @ ../ui-app/src/InputExtrinsic/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputExtrinsic/options/method.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputExtrinsic/options'
 @ ../ui-app/src/InputExtrinsic/options/method.js 14:36-52
 @ ../ui-app/src/InputExtrinsic/index.js
 @ ../app-extrinsics/src/Extrinsic.js
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/SelectSection.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc'
 @ ../ui-app/src/InputRpc/SelectSection.js 10:36-52
 @ ../ui-app/src/InputRpc/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc'
 @ ../ui-app/src/InputRpc/index.js 14:36-52
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/SelectMethod.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc'
 @ ../ui-app/src/InputRpc/SelectMethod.js 10:36-52
 @ ../ui-app/src/InputRpc/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputRpc/options/method.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputRpc/options'
 @ ../ui-app/src/InputRpc/options/method.js 14:36-52
 @ ../ui-app/src/InputRpc/index.js
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage'
 @ ../ui-app/src/InputStorage/index.js 14:36-52
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/SelectSection.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage'
 @ ../ui-app/src/InputStorage/SelectSection.js 10:36-52
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/SelectKey.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage'
 @ ../ui-app/src/InputStorage/SelectKey.js 10:36-52
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/InputStorage/options/key.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/InputStorage/options'
 @ ../ui-app/src/InputStorage/options/key.js 14:36-52
 @ ../ui-app/src/InputStorage/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params'
 @ ../ui-app/src/Params/index.js 16:36-52
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/String.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/String.js 12:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/VoteThreshold.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/VoteThreshold.js 12:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Bare.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Bare.js 10:36-52
 @ ../ui-app/src/Params/Param/Account.js
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Bytes.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Bytes.js 10:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Amount.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Amount.js 14:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/BaseBytes.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/BaseBytes.js 12:36-52
 @ ../ui-app/src/Params/Param/Bytes.js
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Account.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Account.js 12:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Unknown.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Unknown.js 10:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/KeyValue.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/KeyValue.js 12:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Base.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Base.js 10:36-52
 @ ../ui-app/src/Params/Param/Unknown.js
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Code.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Code.js 12:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Hash.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Hash.js 10:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/File.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/File.js 14:36-52
 @ ../ui-app/src/Params/Param/Code.js
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/index.js 12:36-52
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/Bool.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/Bool.js 12:36-52
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/options/item.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/options'
 @ ../ui-keyring/src/options/item.js 10:36-52
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/options/KeyPair.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/options'
 @ ../ui-keyring/src/options/KeyPair.js 12:36-52
 @ ../ui-keyring/src/options/item.js
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Div.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Div.js 10:36-52
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeVersion.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/Api.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src'
 @ ../ui-react-rx/src/Api.js 14:36-52
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/apiCall.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/apiCall.js 12:36-52
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeVersion.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/observable.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/observable.js 16:36-52
 @ ../ui-react-rx/src/with/apiCall.js
 @ ../ui-react-rx/src/with/apiDiv.js
 @ ../ui-react-rx/src/NodeVersion.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/storage.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/storage.js 16:36-52
 @ ../ui-react-rx/src/with/storageDiv.js
 @ ../ui-react-rx/src/Nonce.js
 @ ../app-accounts/src/Address.js
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react-rx/src/with/api.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react-rx/src/with'
 @ ../ui-react-rx/src/with/api.js 12:36-52
 @ ./src/Connecting/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-react/src/IdentityIcon/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-react/src/IdentityIcon'
 @ ../ui-react/src/IdentityIcon/index.js 12:36-52
 @ ../ui-keyring/src/options/KeyPair.js
 @ ../ui-keyring/src/options/item.js
 @ ../ui-keyring/src/options/index.js
 @ ../ui-keyring/src/loadAll.js
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Queue.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Queue.js 14:36-52
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Status.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Status.js 10:36-52
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/index.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/index.js 12:36-52
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Unlock.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Unlock.js 12:36-52
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Modal.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Modal.js 14:36-52
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Extrinsic.js
Module not found: Error: Can't resolve 'react' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Extrinsic.js 16:36-52
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/CopyButton.js
Module not found: Error: Can't resolve 'react-copy-to-clipboard' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/CopyButton.js 12:51-85
 @ ../app-accounts/src/Address.js
 @ ../app-accounts/src/Creator.js
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/index.js
Module not found: Error: Can't resolve 'react-dom' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/index.js 16:39-59
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Params/Param/File.js
Module not found: Error: Can't resolve 'react-dropzone' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Params/Param'
 @ ../ui-app/src/Params/Param/File.js 16:44-69
 @ ../ui-app/src/Params/Param/Code.js
 @ ../ui-app/src/Params/Param/findComponent.js
 @ ../ui-app/src/Params/Param/index.js
 @ ../ui-app/src/Params/index.js
 @ ../app-storage/src/Selection.js
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-accounts/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-accounts/src'
 @ ../app-accounts/src/translate.js 8:20-44
 @ ../app-accounts/src/index.js
 @ ./src/routing/accounts.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-addresses/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-addresses/src'
 @ ../app-addresses/src/translate.js 8:20-44
 @ ../app-addresses/src/index.js
 @ ./src/routing/addresses.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-explorer/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-explorer/src'
 @ ../app-explorer/src/translate.js 8:20-44
 @ ../app-explorer/src/index.js
 @ ./src/routing/explorer.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-extrinsics/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-extrinsics/src'
 @ ../app-extrinsics/src/translate.js 8:20-44
 @ ../app-extrinsics/src/Selection.js
 @ ../app-extrinsics/src/index.js
 @ ./src/routing/extrinsics.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-rpc/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-rpc/src'
 @ ../app-rpc/src/translate.js 8:20-44
 @ ../app-rpc/src/Selection.js
 @ ../app-rpc/src/index.js
 @ ./src/routing/rpc.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-storage/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-storage/src'
 @ ../app-storage/src/translate.js 8:20-44
 @ ../app-storage/src/index.js
 @ ./src/routing/storage.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/Unlock.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/Unlock.js 14:20-44
 @ ../app-toolbox/src/Sign.js
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-toolbox/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-toolbox/src'
 @ ../app-toolbox/src/translate.js 8:20-44
 @ ../app-toolbox/src/index.js
 @ ./src/routing/toolbox.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../app-vanitygen/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/app-vanitygen/src'
 @ ../app-vanitygen/src/translate.js 8:20-44
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src'
 @ ./src/translate.js 8:20-44
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/i18n.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/i18n.js 16:20-44
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/translate.js 8:20-44
 @ ../ui-app/src/Button/Or.js
 @ ../ui-app/src/Button/index.js
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/Extrinsic.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/Extrinsic.js 18:20-44
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-signer/src/translate.js
Module not found: Error: Can't resolve 'react-i18next' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-signer/src'
 @ ../ui-signer/src/translate.js 8:20-44
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/Content/index.js
Module not found: Error: Can't resolve 'react-router' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/Content'
 @ ./src/Content/index.js 14:19-42
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ./src/SideBar/Item.js
Module not found: Error: Can't resolve 'react-router-dom' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/apps/src/SideBar'
 @ ./src/SideBar/Item.js 14:22-49
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/index.js
Module not found: Error: Can't resolve 'react-router-dom' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/index.js 18:22-49
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/styles.js
Module not found: Error: Can't resolve 'semantic-ui-css/semantic.min.css' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/styles.js 3:0-43
 @ ../ui-app/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Menu.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/collections/Menu' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Menu.js 12:35-88
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Group.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Button' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/Group.js 12:37-89
 @ ../ui-app/src/Button/index.js
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/Or.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Button' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/Or.js 12:37-89
 @ ../ui-app/src/Button/index.js
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Button/index.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Button' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src/Button'
 @ ../ui-app/src/Button/index.js 14:38-90
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Menu.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Divider' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Menu.js 10:38-91
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Icon.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Icon' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Icon.js 10:35-85
 @ ./src/SideBar/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Input.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Input' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Input.js 14:36-87
 @ ../ui-app/src/Password.js
 @ ../ui-signer/src/Unlock.js
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Labelled.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/elements/Label' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Labelled.js 12:36-87
 @ ../ui-app/src/Input.js
 @ ../ui-app/src/Password.js
 @ ../ui-signer/src/Unlock.js
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Dropdown.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/modules/Dropdown' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Dropdown.js 14:39-92
 @ ../app-vanitygen/src/index.js
 @ ./src/routing/vanitygen.js
 @ ./src/routing/index.js
 @ ./src/Content/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-app/src/Modal.js
Module not found: Error: Can't resolve 'semantic-ui-react/dist/es/modules/Modal' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-app/src'
 @ ../ui-app/src/Modal.js 10:36-86
 @ ../ui-signer/src/Modal.js
 @ ../ui-signer/src/index.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/loadAll.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src'
 @ ../ui-keyring/src/loadAll.js 10:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/account/forget.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/account'
 @ ../ui-keyring/src/account/forget.js 10:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/account/save.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/account'
 @ ../ui-keyring/src/account/save.js 10:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/account/meta.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/account'
 @ ../ui-keyring/src/account/meta.js 10:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/address/metaRecent.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/address'
 @ ../ui-keyring/src/address/metaRecent.js 10:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/address/forget.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/address'
 @ ../ui-keyring/src/address/forget.js 10:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js

ERROR in ../ui-keyring/src/address/meta.js
Module not found: Error: Can't resolve 'store' in '/Users/Ls/code/blockchain/clones/paritytech/temp/apps/packages/ui-keyring/src/address'
 @ ../ui-keyring/src/address/meta.js 14:36-52
 @ ../ui-keyring/src/index.js
 @ ./src/NodeInfo.js
 @ ./src/index.js
 @ multi ./src/index.js
Child html-webpack-plugin for "index.html":
         Asset     Size  Chunks  Chunk Names
    index.html  557 KiB       0  
    Entrypoint undefined = index.html
    [../../node_modules/html-webpack-plugin/lib/loader.js!./public/index.html] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/html-webpack-plugin/lib/loader.js!./public/index.html 707 bytes {0} [built]
    [../../node_modules/lodash/lodash.js] /Users/Ls/code/blockchain/clones/paritytech/temp/apps/node_modules/lodash/lodash.js 527 KiB {0} [built]
    [../../node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 489 bytes {0} [built]
    [../../node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {0} [built]
ℹ ｢wdm｣: Failed to compile.

