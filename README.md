# Vanity Address Generator (0816065-bdaf-lab2)

## Webpage

https://vag.jotpac.com/  

![](https://github.com/jotpalch/0816065-bdaf-lab2/blob/d3d132715db7d44e66de6ec7a4ae7168bacc49f4/demo.gif)

### Implementation details

#### Web_Workers_API
https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers  

Run scripts in background threads with Web_Workers_API to prevent page unresponsive  
Performing heavy calculation without interfering with the user interface

### akachain-bip39
https://www.npmjs.com/package/akachain-bip39  
Using akachain-bip39 instead of bip39 for impelementing it in the bowser  
( There is a bug in bip39 module when convert into browser mode with bowserify.js )

---

### Installation  

Recommand do it under `Linux` or `Mac OS`  
There is an encoding bug while converting into the browser mode in `Windows`

Pack `main_worker.js` with bowserify.js
```
npm i -g browserify
browserify main_worker.js > public/worker.js
```

Use express.js to open the page
```
npm i express
node ./app.js
```

Open webpage with browser  
```
start http://localhost:8081/
```

## Command Line Tool

### Usage

Clone this repo  
```
git clone https://github.com/jotpalch/0816065-bdaf-lab2.git
```

Change dir to 0816065-bdaf-lab2  
```
cd 0816065-bdaf-lab2
```

Install packages  
```
npm i bip39 ethereum-hdwallet
```

Run the script  
```
node .\CmdTool.js [_pre]
```
