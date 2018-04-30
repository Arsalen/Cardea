import {Injectable, OnInit} from '@angular/core';

//import Web3 from 'web3';

declare let require: any;
declare let window: any;

let tokenAbi = require('./CardeaToken.json');
const Web3 = require('web3');

@Injectable()
export class ContractsService {
  private _account: string = null;
  private _web3: any;
  

  private _CardeaToken: any;
  private _CardeaTokenAddress: string = "0x3edB1E137Fa5Ae0BBC6a7b9e967CaF16F6153E17";

  constructor() {
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      this._web3 = new Web3(window.web3.currentProvider);
    } else {
      console.warn(
        'Please use a dapp browser like mist or MetaMask plugin for chrome'
      );
    }

    this._CardeaToken = this._web3.eth.contract(tokenAbi).at(this._CardeaTokenAddress);
  }

  public async getAccount(): Promise<string> {
    if (this._account == null) {
      this._account = await new Promise((resolve, reject) => {
        this._web3.eth.getAccounts((err, accs) => {
          if (err != null) {
            alert('There was an error fetching your accounts.');
            return;
          }

          if (accs.length === 0) {
            alert(
              'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
            );
            return;
          }
          resolve(accs[0]);
        })
      }) as string;

      this._web3.eth.defaultAccount = this._account;
    }
    return Promise.resolve(this._account);
  }

  public async getUserBalance(): Promise<number> {
    let account = await this.getAccount();
    
    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this._CardeaToken.balanceOf.call(account, function (err, result) {
        resolve(_web3.fromWei(result))
      });
    }) as Promise<number>;
  }


  public async transferCardea(Sender: any, Receiver: any, amount: any): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this._CardeaToken.transfer(Receiver, amount, {from: Sender, gas:3000000}, function (err, result) {
        resolve(result)
      });
    }) as Promise<boolean>;
  }
}