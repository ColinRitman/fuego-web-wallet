//export {};
let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
  debug: false,  
	apiUrl: [
        "https://api.fuego.spaceportx.net/api/"
    ],
    nodeList: [
        "https://api.fuego.spaceportx.net/daemon/"
    ],
	nodeUrl: "",
	mainnetExplorerUrl: "https://fuego.spaceportx.net/",
	mainnetExplorerUrlHash: "https://fuego.spaceportx.net/index.html?hash={ID}#blockchain_transaction",
	mainnetExplorerUrlBlock: "https://fuego.spaceportx.net/index.html?hash={ID}#blockchain_block",
	
	testnetExplorerUrl: "https://testnet.fuego.spaceportx.net/",
	testnetExplorerUrlHash: "https://testnet.fuego.spaceportx.net/index.html?hash={ID}#blockchain_transaction",
	testnetExplorerUrlBlock: "https://testnet.fuego.spaceportx.net/index.html?hash={ID}#blockchain_block",
	testnet: false,
    
	coinUnitPlaces: 7,
	coinDisplayUnitPlaces: 7,
  	txMinConfirms: 10,
	txCoinbaseMinConfirms: 60,
	
	addressPrefix: 0x1ACB87, // "fire" address prefix (1753191 in decimal)
	integratedAddressPrefix: 0x1ACB88,
	subAddressPrefix: 0x1ACB89,
	addressPrefixTestnet: 0x1ACB87,
	integratedAddressPrefixTestnet: 0x1ACB88,
	subAddressPrefixTestnet: 0x1ACB89,
	
	coinFee: new JSBigInt('80000'), // 0.008 XFG minimum fee
	feePerKB: new JSBigInt('80000'), // 0.008 XFG per KB
	dustThreshold: new JSBigInt('20000'), // 0.002 XFG dust threshold
	defaultMixin: 2, // minimum mixin for Fuego

	idleTimeout: 30,
	idleWarningDuration: 20,
	syncBlockCount: 1000,

	coinSymbol: 'XFG',
	openAliasPrefix: "xfg",
	coinName: 'Fuego',
	coinUriPrefix: 'fuego:',
	
	avgBlockTime: 480, // 8 minutes
	maxBlockNumber: 500000000,    
};
let randInt = Math.floor(Math.random() * Math.floor(config.nodeList.length));
config.nodeUrl = config.nodeList[randInt];


function logDebugMsg(...data: any[]) {
  if (config.debug) {
    if (data.length > 1) {
      console.log(data[0], data.slice(1));
    } else {
      console.log(data[0]);
    }
  }
}

// log debug messages if debug is set to true
global.logDebugMsg = logDebugMsg;
