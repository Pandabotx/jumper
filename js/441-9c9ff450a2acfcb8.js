!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7b3645ee-db83-4189-b85b-1aa53f2a88ee",e._sentryDebugIdIdentifier="sentry-dbid-7b3645ee-db83-4189-b85b-1aa53f2a88ee")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[441],{78633:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.DEFAULT_BASE_URL=void 0,n.DEFAULT_BASE_URL="https://safe-client.safe.global"},62742:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.getEndpoint=n.deleteEndpoint=n.putEndpoint=n.postEndpoint=void 0;let a=t(99185);function s(e,n,t,s){let i=(0,a.insertParams)(n,t),r=(0,a.stringifyQuery)(s);return`${e}${i}${r}`}n.postEndpoint=function(e,n,t){let i=s(e,n,null==t?void 0:t.path,null==t?void 0:t.query);return(0,a.fetchData)(i,"POST",null==t?void 0:t.body,null==t?void 0:t.headers)},n.putEndpoint=function(e,n,t){let i=s(e,n,null==t?void 0:t.path,null==t?void 0:t.query);return(0,a.fetchData)(i,"PUT",null==t?void 0:t.body,null==t?void 0:t.headers)},n.deleteEndpoint=function(e,n,t){let i=s(e,n,null==t?void 0:t.path,null==t?void 0:t.query);return(0,a.fetchData)(i,"DELETE",null==t?void 0:t.body,null==t?void 0:t.headers)},n.getEndpoint=function(e,n,t,i){if(i)return(0,a.getData)(i);let r=s(e,n,null==t?void 0:t.path,null==t?void 0:t.query);return(0,a.getData)(r,null==t?void 0:t.headers)}},10441:function(e,n,t){var a=this&&this.__createBinding||(Object.create?function(e,n,t,a){void 0===a&&(a=t);var s=Object.getOwnPropertyDescriptor(n,t);(!s||("get"in s?!n.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return n[t]}}),Object.defineProperty(e,a,s)}:function(e,n,t,a){void 0===a&&(a=t),e[a]=n[t]}),s=this&&this.__exportStar||function(e,n){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(n,t)||a(n,e,t)};Object.defineProperty(n,"__esModule",{value:!0}),n.getContract=n.getSafeOverviews=n.unsubscribeAll=n.unsubscribeSingle=n.registerRecoveryModule=n.deleteRegisteredEmail=n.getRegisteredEmail=n.verifyEmail=n.resendEmailVerificationCode=n.changeEmail=n.registerEmail=n.unregisterDevice=n.unregisterSafe=n.registerDevice=n.getDelegates=n.confirmSafeMessage=n.proposeSafeMessage=n.getSafeMessage=n.getSafeMessages=n.getDecodedData=n.getMasterCopies=n.getSafeApps=n.getChainConfig=n.getChainsConfig=n.getConfirmationView=n.proposeTransaction=n.getNonces=n.postSafeGasEstimation=n.deleteTransaction=n.getTransactionDetails=n.getTransactionQueue=n.getTransactionHistory=n.getCollectiblesPage=n.getCollectibles=n.getAllOwnedSafes=n.getOwnedSafes=n.getFiatCurrencies=n.getBalances=n.getMultisigTransactions=n.getModuleTransactions=n.getIncomingTransfers=n.getSafeInfo=n.getRelayCount=n.relayTransaction=n.setBaseUrl=void 0;let i=t(62742),r=t(78633);s(t(61964),n),s(t(16261),n),s(t(31069),n),s(t(38558),n),s(t(44256),n),s(t(54948),n),s(t(76238),n),s(t(93134),n),s(t(60559),n),s(t(64618),n);let o=r.DEFAULT_BASE_URL;n.setBaseUrl=e=>{o=e},n.relayTransaction=function(e,n){return(0,i.postEndpoint)(o,"/v1/chains/{chainId}/relay",{path:{chainId:e},body:n})},n.getRelayCount=function(e,n){return(0,i.getEndpoint)(o,"/v1/chains/{chainId}/relay/{address}",{path:{chainId:e,address:n}})},n.getSafeInfo=function(e,n){return(0,i.getEndpoint)(o,"/v1/chains/{chainId}/safes/{address}",{path:{chainId:e,address:n}})},n.getIncomingTransfers=function(e,n,t,a){return(0,i.getEndpoint)(o,"/v1/chains/{chainId}/safes/{address}/incoming-transfers/",{path:{chainId:e,address:n},query:t},a)},n.getModuleTransactions=function(e,n,t,a){return(0,i.getEndpoint)(o,"/v1/chains/{chainId}/safes/{address}/module-transactions/",{path:{chainId:e,address:n},query:t},a)},n.getMultisigTransactions=function(e,n,t,a){return(0,i.getEndpoint)(o,"/v1/chains/{chainId}/safes/{address}/multisig-transactions/",{path:{chainId:e,address:n},query:t},a)},n.getBalances=function(e,n,t="usd",a={}){return(0,i.getEndpoint)(o,"/v1/chains/{chainId}/safes/{address}/balances/{currency}",{path:{chainId:e,address:n,currency:t},query:a})},n.getFiatCurrencies=function(){return(0,i.getEndpoint)(o,"/v1/balances/supported-fiat-codes")},n.getOwnedSafes=function(e,n){return(0,i.getEndpoint)(o,"/v1/chains/{chainId}/owners/{address}/safes",{path:{chainId:e,address:n}})},n.getAllOwnedSafes=function(e){return(0,i.getEndpoint)(o,"/v1/owners/{address}/safes",{path:{address:e}})},n.getCollectibles=function(e,n,t={}){return(0,i.getEndpoint)(o,"/v1/chains/{chainId}/safes/{address}/collectibles",{path:{chainId:e,address:n},query:t})},n.getCollectiblesPage=function(e,n,t={},a){return(0,i.getEndpoint)(o,"/v2/chains/{chainId}/safes/{address}/collectibles",{path:{chainId:e,address:n},query:t},a)},n.getTransactionHistory=function(e,n,t={},a){return(0,i.getEndpoint)(o,"/v1/chains/{chainId}/safes/{safe_address}/transactions/history",{path:{chainId:e,safe_address:n},query:t},a)},n.getTransactionQueue=function(e,n,t={},a){return(0,i.getEndpoint)(o,"/v1/chains/{chainId}/safes/{safe_address}/transactions/queued",{path:{chainId:e,safe_address:n},query:t},a)},n.getTransactionDetails=function(e,n){return(0,i.getEndpoint)(o,"/v1/chains/{chainId}/transactions/{transactionId}",{path:{chainId:e,transactionId:n}})},n.deleteTransaction=function(e,n,t){return(0,i.deleteEndpoint)(o,"/v1/chains/{chainId}/transactions/{safeTxHash}",{path:{chainId:e,safeTxHash:n},body:{signature:t}})},n.postSafeGasEstimation=function(e,n,t){return(0,i.postEndpoint)(o,"/v2/chains/{chainId}/safes/{safe_address}/multisig-transactions/estimations",{path:{chainId:e,safe_address:n},body:t})},n.getNonces=function(e,n){return(0,i.getEndpoint)(o,"/v1/chains/{chainId}/safes/{safe_address}/nonces",{path:{chainId:e,safe_address:n}})},n.proposeTransaction=function(e,n,t){return(0,i.postEndpoint)(o,"/v1/chains/{chainId}/transactions/{safe_address}/propose",{path:{chainId:e,safe_address:n},body:t})},n.getConfirmationView=function(e,n,t,a){return(0,i.postEndpoint)(o,"/v1/chains/{chainId}/safes/{safe_address}/views/transaction-confirmation",{path:{chainId:e,safe_address:n},body:{data:t,to:a}})},n.getChainsConfig=function(e){return(0,i.getEndpoint)(o,"/v1/chains",{query:e})},n.getChainConfig=function(e){return(0,i.getEndpoint)(o,"/v1/chains/{chainId}",{path:{chainId:e}})},n.getSafeApps=function(e,n={}){return(0,i.getEndpoint)(o,"/v1/chains/{chainId}/safe-apps",{path:{chainId:e},query:n})},n.getMasterCopies=function(e){return(0,i.getEndpoint)(o,"/v1/chains/{chainId}/about/master-copies",{path:{chainId:e}})},n.getDecodedData=function(e,n,t){return(0,i.postEndpoint)(o,"/v1/chains/{chainId}/data-decoder",{path:{chainId:e},body:{data:n,to:t}})},n.getSafeMessages=function(e,n,t){return(0,i.getEndpoint)(o,"/v1/chains/{chainId}/safes/{safe_address}/messages",{path:{chainId:e,safe_address:n},query:{}},t)},n.getSafeMessage=function(e,n){return(0,i.getEndpoint)(o,"/v1/chains/{chainId}/messages/{message_hash}",{path:{chainId:e,message_hash:n}})},n.proposeSafeMessage=function(e,n,t){return(0,i.postEndpoint)(o,"/v1/chains/{chainId}/safes/{safe_address}/messages",{path:{chainId:e,safe_address:n},body:t})},n.confirmSafeMessage=function(e,n,t){return(0,i.postEndpoint)(o,"/v1/chains/{chainId}/messages/{message_hash}/signatures",{path:{chainId:e,message_hash:n},body:t})},n.getDelegates=function(e,n={}){return(0,i.getEndpoint)(o,"/v1/chains/{chainId}/delegates",{path:{chainId:e},query:n})},n.registerDevice=function(e){return(0,i.postEndpoint)(o,"/v1/register/notifications",{body:e})},n.unregisterSafe=function(e,n,t){return(0,i.deleteEndpoint)(o,"/v1/chains/{chainId}/notifications/devices/{uuid}/safes/{safe_address}",{path:{chainId:e,safe_address:n,uuid:t}})},n.unregisterDevice=function(e,n){return(0,i.deleteEndpoint)(o,"/v1/chains/{chainId}/notifications/devices/{uuid}",{path:{chainId:e,uuid:n}})},n.registerEmail=function(e,n,t,a){return(0,i.postEndpoint)(o,"/v1/chains/{chainId}/safes/{safe_address}/emails",{path:{chainId:e,safe_address:n},body:t,headers:a})},n.changeEmail=function(e,n,t,a,s){return(0,i.putEndpoint)(o,"/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}",{path:{chainId:e,safe_address:n,signer:t},body:a,headers:s})},n.resendEmailVerificationCode=function(e,n,t){return(0,i.postEndpoint)(o,"/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}/verify-resend",{path:{chainId:e,safe_address:n,signer:t},body:""})},n.verifyEmail=function(e,n,t,a){return(0,i.putEndpoint)(o,"/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}/verify",{path:{chainId:e,safe_address:n,signer:t},body:a})},n.getRegisteredEmail=function(e,n,t,a){return(0,i.getEndpoint)(o,"/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}",{path:{chainId:e,safe_address:n,signer:t},headers:a})},n.deleteRegisteredEmail=function(e,n,t,a){return(0,i.deleteEndpoint)(o,"/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}",{path:{chainId:e,safe_address:n,signer:t},headers:a})},n.registerRecoveryModule=function(e,n,t){return(0,i.postEndpoint)(o,"/v1/chains/{chainId}/safes/{safe_address}/recovery",{path:{chainId:e,safe_address:n},body:t})},n.unsubscribeSingle=function(e){return(0,i.deleteEndpoint)(o,"/v1/subscriptions",{query:e})},n.unsubscribeAll=function(e){return(0,i.deleteEndpoint)(o,"/v1/subscriptions/all",{query:e})},n.getSafeOverviews=function(e,n){return(0,i.getEndpoint)(o,"/v1/safes",{query:Object.assign(Object.assign({},n),{safes:e.join(",")})})},n.getContract=function(e,n){return(0,i.getEndpoint)(o,"/v1/chains/{chainId}/contracts/{contractAddress}",{path:{chainId:e,contractAddress:n}})}},38558:function(e,n){var t,a,s;Object.defineProperty(n,"__esModule",{value:!0}),n.FEATURES=n.GAS_PRICE_TYPE=n.RPC_AUTHENTICATION=void 0,(t=n.RPC_AUTHENTICATION||(n.RPC_AUTHENTICATION={})).API_KEY_PATH="API_KEY_PATH",t.NO_AUTHENTICATION="NO_AUTHENTICATION",t.UNKNOWN="UNKNOWN",(a=n.GAS_PRICE_TYPE||(n.GAS_PRICE_TYPE={})).ORACLE="ORACLE",a.FIXED="FIXED",a.FIXED_1559="FIXED1559",a.UNKNOWN="UNKNOWN",(s=n.FEATURES||(n.FEATURES={})).ERC721="ERC721",s.SAFE_APPS="SAFE_APPS",s.CONTRACT_INTERACTION="CONTRACT_INTERACTION",s.DOMAIN_LOOKUP="DOMAIN_LOOKUP",s.SPENDING_LIMIT="SPENDING_LIMIT",s.EIP1559="EIP1559",s.SAFE_TX_GAS_OPTIONAL="SAFE_TX_GAS_OPTIONAL",s.TX_SIMULATION="TX_SIMULATION",s.EIP1271="EIP1271"},44256:function(e,n){var t;Object.defineProperty(n,"__esModule",{value:!0}),n.TokenType=void 0,(t=n.TokenType||(n.TokenType={})).ERC20="ERC20",t.ERC721="ERC721",t.NATIVE_TOKEN="NATIVE_TOKEN"},76238:function(e,n){Object.defineProperty(n,"__esModule",{value:!0})},54948:function(e,n){Object.defineProperty(n,"__esModule",{value:!0})},60559:function(e,n){var t;Object.defineProperty(n,"__esModule",{value:!0}),n.DeviceType=void 0,(t=n.DeviceType||(n.DeviceType={})).ANDROID="ANDROID",t.IOS="IOS",t.WEB="WEB"},64618:function(e,n){Object.defineProperty(n,"__esModule",{value:!0})},16261:function(e,n){var t,a;Object.defineProperty(n,"__esModule",{value:!0}),n.SafeAppSocialPlatforms=n.SafeAppFeatures=n.SafeAppAccessPolicyTypes=void 0,(t=n.SafeAppAccessPolicyTypes||(n.SafeAppAccessPolicyTypes={})).NoRestrictions="NO_RESTRICTIONS",t.DomainAllowlist="DOMAIN_ALLOWLIST",(n.SafeAppFeatures||(n.SafeAppFeatures={})).BATCHED_TRANSACTIONS="BATCHED_TRANSACTIONS",(a=n.SafeAppSocialPlatforms||(n.SafeAppSocialPlatforms={})).TWITTER="TWITTER",a.GITHUB="GITHUB",a.DISCORD="DISCORD"},61964:function(e,n){var t;Object.defineProperty(n,"__esModule",{value:!0}),n.ImplementationVersionState=void 0,(t=n.ImplementationVersionState||(n.ImplementationVersionState={})).UP_TO_DATE="UP_TO_DATE",t.OUTDATED="OUTDATED",t.UNKNOWN="UNKNOWN"},93134:function(e,n){var t,a;Object.defineProperty(n,"__esModule",{value:!0}),n.SafeMessageStatus=n.SafeMessageListItemType=void 0,(t=n.SafeMessageListItemType||(n.SafeMessageListItemType={})).DATE_LABEL="DATE_LABEL",t.MESSAGE="MESSAGE",(a=n.SafeMessageStatus||(n.SafeMessageStatus={})).NEEDS_CONFIRMATION="NEEDS_CONFIRMATION",a.CONFIRMED="CONFIRMED"},31069:function(e,n){var t,a,s,i,r,o,d,c,u,f;Object.defineProperty(n,"__esModule",{value:!0}),n.LabelValue=n.DetailedExecutionInfoType=n.TransactionListItemType=n.ConflictType=n.TransactionInfoType=n.SettingsInfoType=n.TransactionTokenType=n.TransferDirection=n.TransactionStatus=n.Operation=void 0,(t=n.Operation||(n.Operation={}))[t.CALL=0]="CALL",t[t.DELEGATE=1]="DELEGATE",(a=n.TransactionStatus||(n.TransactionStatus={})).AWAITING_CONFIRMATIONS="AWAITING_CONFIRMATIONS",a.AWAITING_EXECUTION="AWAITING_EXECUTION",a.CANCELLED="CANCELLED",a.FAILED="FAILED",a.SUCCESS="SUCCESS",(s=n.TransferDirection||(n.TransferDirection={})).INCOMING="INCOMING",s.OUTGOING="OUTGOING",s.UNKNOWN="UNKNOWN",(i=n.TransactionTokenType||(n.TransactionTokenType={})).ERC20="ERC20",i.ERC721="ERC721",i.NATIVE_COIN="NATIVE_COIN",(r=n.SettingsInfoType||(n.SettingsInfoType={})).SET_FALLBACK_HANDLER="SET_FALLBACK_HANDLER",r.ADD_OWNER="ADD_OWNER",r.REMOVE_OWNER="REMOVE_OWNER",r.SWAP_OWNER="SWAP_OWNER",r.CHANGE_THRESHOLD="CHANGE_THRESHOLD",r.CHANGE_IMPLEMENTATION="CHANGE_IMPLEMENTATION",r.ENABLE_MODULE="ENABLE_MODULE",r.DISABLE_MODULE="DISABLE_MODULE",r.SET_GUARD="SET_GUARD",r.DELETE_GUARD="DELETE_GUARD",(o=n.TransactionInfoType||(n.TransactionInfoType={})).TRANSFER="Transfer",o.SETTINGS_CHANGE="SettingsChange",o.CUSTOM="Custom",o.CREATION="Creation",o.SWAP_ORDER="SwapOrder",(d=n.ConflictType||(n.ConflictType={})).NONE="None",d.HAS_NEXT="HasNext",d.END="End",(c=n.TransactionListItemType||(n.TransactionListItemType={})).TRANSACTION="TRANSACTION",c.LABEL="LABEL",c.CONFLICT_HEADER="CONFLICT_HEADER",c.DATE_LABEL="DATE_LABEL",(u=n.DetailedExecutionInfoType||(n.DetailedExecutionInfoType={})).MULTISIG="MULTISIG",u.MODULE="MODULE",(f=n.LabelValue||(n.LabelValue={})).Queued="Queued",f.Next="Next"},99185:function(e,n){var t=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))(function(s,i){function r(e){try{d(a.next(e))}catch(e){i(e)}}function o(e){try{d(a.throw(e))}catch(e){i(e)}}function d(e){var n;e.done?s(e.value):((n=e.value)instanceof t?n:new t(function(e){e(n)})).then(r,o)}d((a=a.apply(e,n||[])).next())})};Object.defineProperty(n,"__esModule",{value:!0}),n.getData=n.fetchData=n.stringifyQuery=n.insertParams=void 0;let a=e=>"object"==typeof e&&null!==e&&"code"in e&&"message"in e;function s(e){return t(this,void 0,void 0,function*(){let n;try{n=204===e.status?{}:yield e.json()}catch(n){if(e.headers&&"0"!==e.headers.get("content-length"))throw Error(`Invalid response content: ${e.statusText}`)}if(!e.ok)throw Error(a(n)?`${n.code}: ${n.message}`:e.statusText);return n})}n.insertParams=function(e,n){return n?Object.keys(n).reduce((e,t)=>{var a;return a=String(n[t]),e.replace(RegExp(`\\{${t}\\}`,"g"),a)},e):e},n.stringifyQuery=function(e){if(!e)return"";let n=new URLSearchParams;Object.keys(e).forEach(t=>{null!=e[t]&&n.append(t,String(e[t]))});let t=n.toString();return t?`?${t}`:""},n.fetchData=function(e,n,a,i){return t(this,void 0,void 0,function*(){let t={method:null!=n?n:"POST",headers:Object.assign({"Content-Type":"application/json"},i)};return null!=a&&(t.body="string"==typeof a?a:JSON.stringify(a)),s((yield fetch(e,t)))})},n.getData=function(e,n){return t(this,void 0,void 0,function*(){let t={method:"GET"};return n&&(t.headers=Object.assign(Object.assign({},n),{"Content-Type":"application/json"})),s((yield fetch(e,t)))})}}}]);