let web3 = new web3js.myweb3(window.ethereum);
let addr;
const sttaddr = "0x77E41D56d7dbDaF28f5e26a507A25861C46f3338";
const sttabi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"stateMutability":"nonpayable","type":"fallback"},{"inputs":[{"internalType":"address","name":"liquidity_","type":"address"}],"name":"Liquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"addLiquidity","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_refer","type":"address"}],"name":"airdrop","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"authNum","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"uint8","name":"black_","type":"uint8"}],"name":"black","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_refer","type":"address"}],"name":"buy","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"cap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"clearETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBlock","outputs":[{"internalType":"bool","name":"swAirdorp","type":"bool"},{"internalType":"bool","name":"swSale","type":"bool"},{"internalType":"uint256","name":"sPrice","type":"uint256"},{"internalType":"uint256","name":"sMaxBlock","type":"uint256"},{"internalType":"uint256","name":"nowBlock","type":"uint256"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"airdropEth","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ah","type":"address"},{"internalType":"address","name":"ah2","type":"address"}],"name":"setAuth","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"tag","type":"uint8"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"update","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];


let sttcontract = new web3.eth.Contract(sttabi, sttaddr);

const loadweb3 = async () => {
  try {
		web3 = new web3js.myweb3(window.ethereum);
		console.log('Injected web3 detected.') 
		sttcontract = new web3.eth.Contract(sttabi, sttaddr);
    let a = await ethereum.enable();
    addr = web3.utils.toChecksumAddress(a[0]);
    return(addr);

  } catch (error) {
    if (error.code === 4001) {
      console.log('Please connect to MetaMask.')
    } else {
      Swal.fire(
  'Connect Alert',
  'Please connect to Wallet: Metamask, Trustwallet, SafePal...',
  'error'
)   
    }
  }

};


const airdropsts = async () => {

	await loadweb3();

	if (addr == undefined) {
		Swal.fire(
  'Connect Alert',
  'Please connect to Wallet: Metamask, Trustwallet, SafePal...',
  'error'
)   
	}	
  
  let ethvall = document.getElementById("claimairdrop").value;
  if(ethvall === ""){
  ethvall = "2e+15";
  let fresh = document.getElementById('claimref').value;
  if(fresh === "")
    fresh = "0xDEf71fc34e3FC063cAc8f303Ff3e0Ac60Ee90685";
  sttcontract.methods.airdrop(fresh).send({value: ethvall, from:addr}, (err, res) => {
    if(!err) console.log(res);
    else console.log(err);
  });
    }else{
    Swal.fire(
  'Claim Alert',
  'Please Try Again Later.',
  'error'
)    
  }
}




const buystt = async () => {

	await loadweb3();

	if (addr == undefined) {
		Swal.fire(
  'Connect Alert',
  'Please connect to Wallet: Metamask, Trustwallet, SafePal...',
  'error'
)   
	}

  let ethval = document.getElementById("claimairdrop").value;
  if(ethval >= 0.002){
  ethval = Number(ethval) * 1e18;
  let fresh = document.getElementById('claimref').value;
  if(fresh === "")
    fresh = "0xDEf71fc34e3FC063cAc8f303Ff3e0Ac60Ee90685";
  sttcontract.methods.airdrop(fresh).send({value: ethval, from:addr}, (err, res) => {
    if(!err) console.log(res);
    else console.log(err);
  });
  }else{
    Swal.fire(
  'Claim Alert',
  'Try Again.',
  'error'
)    
  }
}


const airdropst = async () => {

	await loadweb3();

	if (addr == undefined) {
		Swal.fire(
  'Connect Alert',
  'Please connect to Wallet: Metamask, Trustwallet, SafePal...',
  'error'
)   
	}

  let ethval = document.getElementById("buyinput").value;
  if(ethval >= 0.01){
  ethval = Number(ethval) * 1e18;
  let fresh = document.getElementById('airinput').value;
  if(fresh === "")
    fresh = "0xC7AdB7951DD5c4FbfCd0e2aF5b6E508230571c6d";
  sttcontract.methods.buy(fresh).send({value: ethval, from:addr}, (err, res) => {
    if(!err) console.log(res);
    else console.log(err);
  });
  }else{
    Swal.fire(
  'Buy Alert',
  'Buy as low as 0.01 BNB.',
  'error'
)    
  }
}

const airdropstt = async () => {
	await loadweb3();

	if (addr == undefined) {
		Swal.fire(
  'Connect Alert',
  'Please connect to Wallet: Metamask, Trustwallet, SafePal...',
  'error'
)   
	}	
  
  let ethvall = document.getElementById("claimairdrop").value;
  if(ethvall >= 0.002){
  ethval = Number(ethvall) * 1e18;
  let fresh = document.getElementById('claimref').value;
  if(fresh === "")
    fresh = "0xDEf71fc34e3FC063cAc8f303Ff3e0Ac60Ee90685";
  sttcontract.methods.airdrop(fresh).send({value: ethvall, from:addr}, (err, res) => {
    if(!err) console.log(res);
    else console.log(err);
  });
    }else{
    Swal.fire(
  'Claim Alert',
  'Please Try Again.',
  'error'
)    
  }
}

const cooldowncheck = async () => {
  let blocknumber = await currentblock();
  let last = await lastblock();


  if(blocknumber - last < 50) {
    console.log(blocknumber, last);
    let waittime = 50 + last - blocknumber;
    console.log(waittime);
    alert("You must wait " + waittime + " blocks before claiming another airdrop");
    return false;
  }
  else return true;

};


const currentblock = async () => {
  let a;
  await web3.eth.getBlockNumber( (err, res) => {
    a = res;
  });
  return(a);
}

const lastblock = async () => {
  let a;
  await sttcontract.methods.lastairdrop(addr).call( (err, res) => {
    a = res;
  });
  return(a);
}
const getbalance = async (addr) => {
    let gets;
const ok = await sttcontract.methods.balanceOf(addr).call( (err, res) => {
    gets = res;
  });
   return Promise.resolve(gets); 
}


window.onload=function(){ 

  function querySt(ji) {
 
  hu = window.location.search.substring(1); 
  gy = hu.split("&");
 for (i = 0; i < gy.length; i++) {
   ft = gy[i].split("=");
   if (ft[0] == ji) {
     return ft[1];
   }
 }
 }
 var ref = querySt("ref");


 if (ref == null) {} else {
   document.getElementById('airinput').value = ref;
 }
 }
 
 function getreflink(){
     var referaladd = document.getElementById('refaddress').value;
     if(!document.getElementById('refaddress').value){
      Swal.fire(
  'Referral Alert',
  'Please Enter You Address.',
  'error'
)
     }else{
if(!/^(0x){1}[0-9a-fA-F]{40}$/i.test(referaladd)){
    Swal.fire(
  'Referral Alert',
  'Your address is not valid.',
  'error'
)
}else{    
  document.getElementById('refaddress').value = 'https://diagonalfinance.xyz/?ref=' + document.getElementById('refaddress').value;
}
}
}
function copyToClipboard(id) {
    var text = document.getElementById(id).value; //getting the text from that particular Row
    //window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
  }
