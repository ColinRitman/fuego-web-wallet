# Fuego Web Wallet Conversion Summary

This document summarizes the changes made to convert the Karbo/Conceal web wallet to Fuego compatibility.

## Network Configuration Changes

### Updated `src/config.ts`
- **API URLs**: Changed from `ccxapi.conceal.network` to `api.fuego.spaceportx.net`
- **Explorer URLs**: Updated to use Fuego explorer at `fuego.spaceportx.net`
- **Address Prefixes**: Updated to use Fuego's "fire" prefix (0x1ACB87)
- **Coin Symbol**: Changed from 'CCX' to 'XFG'
- **Coin Name**: Changed from 'Conceal' to 'Fuego'
- **Coin URI Prefix**: Changed from 'conceal:' to 'fuego:'
- **Decimal Places**: Updated from 6 to 7 (Fuego uses 7 decimal places)
- **Fees**: Updated to Fuego's fee structure (0.008 XFG minimum fee)
- **Dust Threshold**: Updated to 0.002 XFG
- **Default Mixin**: Changed from 5 to 2 (Fuego's minimum)
- **Block Time**: Updated from 120 to 480 seconds (8 minutes)
- **Coinbase Confirmations**: Updated from 10 to 60

## Branding and UI Changes

### Updated `package.json`
- **Name**: Changed from "ConcealWebWallet" to "FuegoWebWallet"
- **Description**: Updated to reference Fuego Network
- **Repository**: Updated to point to Fuego repository
- **Author**: Updated to "Fuego Community"
- **License**: Changed from BSD-3 to GPL-3.0

### Updated `src/index.html`
- **Title**: Changed from "Conceal Wallet" to "Fuego Wallet"
- **Theme Colors**: Updated from #363636 to #FF4500 (Fuego orange)
- **Meta URLs**: Updated to use `wallet.usexfg.org`
- **Twitter Handle**: Updated to @useXFG
- **Menu Logo**: Changed from "Conceal" to "Fuego"
- **Copyright**: Updated to "Fuego Community"

### Updated `src/manifest.json`
- **App Name**: Changed to "Fuego Web Wallet"
- **Theme Colors**: Updated to Fuego orange (#FF4500)

### Updated `CNAME`
- Changed from `wallet.conceal.network` to `wallet.usexfg.org`

## Translation Updates

### Updated `src/translations/en.json`
- Replaced all "CCX" references with "XFG"
- Replaced all "Conceal" references with "Fuego"
- Updated donation and support references
- Updated mining pool references

### Updated Other Translation Files
- Updated French, German, and Russian translation files
- Replaced mining pool references with Fuego equivalents

## Code Changes

### Updated `src/model/Wallet.ts`
- **Default Node URL**: Changed from `node.conceal.network:16000` to `api.fuego.spaceportx.net/daemon`

### Updated `src/model/CoinUri.ts`
- **URI Prefixes**: Changed from 'conceal:' to 'fuego:'

### Updated `src/model/TransactionsExplorer.ts`
- **Log Messages**: Updated to use "XFG" instead of "CCX"

### Updated `src/model/WalletRepository.ts`
- **PDF Generation**: Updated text to reference "Fuego Network"

### Updated `src/pages/send.ts`
- **Donation Addresses**: Commented out hardcoded CCX donation addresses
- Added TODO comment for future Fuego donation addresses

### Updated `src/pages/settings.ts`
- **Default Node URL**: Updated placeholder to Fuego API endpoint

## HTML Page Updates

### Updated `src/pages/privacyPolicy.html`
- **Discord Link**: Updated to Fuego Discord
- **Website References**: Updated to use Fuego domains
- **GitHub Links**: Updated to Fuego repository

### Updated `src/pages/support.html`
- **Discord Link**: Updated to Fuego Discord

### Updated `src/pages/settings.html`
- **Node URL Placeholder**: Updated to Fuego API endpoint

## Documentation Updates

### Updated `README.md`
- **Title**: Changed to "Fuego Web Wallet"
- **Description**: Updated to reference Fuego Network
- **Resources**: Added Fuego-specific links (website, explorer, Discord, Twitter)
- **Contributors**: Updated to acknowledge original Conceal work
- **Copyright**: Updated to Fuego Community

## Network Parameters Summary

| Parameter | Conceal/CCX | Fuego/XFG |
|-----------|-------------|-----------|
| Address Prefix | 0x7AD4 | 0x1ACB87 |
| Coin Symbol | CCX | XFG |
| Decimal Places | 6 | 7 |
| Block Time | 120s | 480s |
| Min Fee | 0.001 CCX | 0.008 XFG |
| Dust Threshold | 0.00001 CCX | 0.002 XFG |
| Default Mixin | 5 | 2 |
| Coinbase Confirms | 10 | 60 |

## TODO Items

1. **Donation Addresses**: Update hardcoded donation addresses in `src/pages/send.ts` with official Fuego addresses
2. **Translation Files**: Complete updates for all remaining translation files (Spanish, Italian, etc.)
3. **Terms of Use**: Complete the terms of use page updates
4. **Testing**: Test the wallet with Fuego network
5. **API Endpoints**: Verify all API endpoints are working with Fuego daemon

## Notes

- The wallet maintains full compatibility with the CryptoNote protocol
- All client-side security features are preserved
- The conversion focuses on network parameters and branding
- No changes to the core cryptographic functions were needed
- The wallet should work seamlessly with the Fuego network

## Build Instructions

To build the converted wallet:

```bash
npm install
node ./node_modules/typescript/bin/tsc --project tsconfig.prod.json
node build.js
```

The built files will be in the `src/` directory and can be deployed to any web server.