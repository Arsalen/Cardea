import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  async ngAfterViewInit() {
    await this.loadScript('../assets/bundles/libscripts.bundle.js');
    await this.loadScript('../assets/bundles/vendorscripts.bundle.js');
  }

  constructor(private route: Router,private clinic_create_service: LoginService, private localStorageService: LocalStorageService ) { }

  clinic_all_data:any;
  clinic_asset_with_login:any;
  clinic_s_id:any;
  clinic_id:any;

  clinic_log(name)
      {
        //get id of the clinic after login with local storage
        this.clinic_asset_with_login=this.localStorageService.get(String(name));
        this.clinic_id = JSON.parse(this.clinic_asset_with_login)["id"] ;
        this.clinic_s_id = String(this.clinic_id);
        //send clinic name and id to the leftbar
        this.localStorageService.set('current_clinic',this.clinic_asset_with_login);
        //login with service retrieve_id
        this.clinic_create_service.clinic_log(this.clinic_s_id).subscribe(
          (response) => {
            /*this function is executed every time there's a new output */
            console.log("VALUE RECEIVED: " + response);
            //get results from server
           // this.clinic_data = JSON.stringify(response.data);
            this.clinic_all_data = JSON.stringify(response);
            //stock in localstorage
           // this.localStorageService.set('clinic_data', this.clinic_data);
            //this.localStorageService.set('clinic_all_data', this.clinic_all_data);
            //redirect
           this.route.navigate(['/clinic']);
          },
          (err) => {
            /* this function is executed when there's an ERROR */
            // alert("Bigchaindb error");
          },
          () => {
            /* this function is executed when the observable ends (completes) its stream */
            // alert("logged to the Bigchain");
          }
        );
      }



  ngOnInit() {
    this.localStorageService.set('al bassatine', '{"_name":"Clinic","_connection":{"path":"http://34.217.132.241:9984/api/v1/","headers":{"app_id":"5e04b70c","app_key":"e4362476ae5da5e742cb1f5f9f4ef0ce"},"conn":{"path":"http://34.217.132.241:9984/api/v1/","headers":{"app_id":"5e04b70c","app_key":"e4362476ae5da5e742cb1f5f9f4ef0ce"}}},"_appId":"5e04b70c","transactionHistory":[{"inputs":[{"owners_before":["BtbFFum3kc7gNzVYrgkvsKgtzsmYugKZ5gVuJumoJjWf"],"fulfills":null,"fulfillment":"pGSAIKHMNl8cccMQhWL0_4IB2ARCM147rqzrJmRMLiDjbNsogUCF5QNS_lbBuwdThDO2O6redv5RbadG5T1dvEQRL8wdFCwuobqSyUlTOQjL0V2EMWLLXKpNSU4r4N-YLBatN-kD"}],"outputs":[{"public_keys":["BtbFFum3kc7gNzVYrgkvsKgtzsmYugKZ5gVuJumoJjWf"],"condition":{"details":{"type":"ed25519-sha-256","public_key":"BtbFFum3kc7gNzVYrgkvsKgtzsmYugKZ5gVuJumoJjWf"},"uri":"ni:///sha-256;RtEsWOadwv9Uw8dSyMFpSVr6_jr7nKawJTnb1jQBBwM?fpt=ed25519-sha-256&cost=131072"},"amount":"1"}],"operation":"CREATE","metadata":{"name":"al bassatine","publicKey":"BtbFFum3kc7gNzVYrgkvsKgtzsmYugKZ5gVuJumoJjWf"},"asset":{"data":{"5e04b70c-Clinic":{"id":"id:5e04b70c:7e2305b2-995f-43c3-8c91-2de81c8d9d25"}}},"version":"2.0","id":"65811b9f2c48ba4ec9ae255abb5f7b9d43b9814947927d5217e8347e684ddddb"}],"id":"id:5e04b70c:7e2305b2-995f-43c3-8c91-2de81c8d9d25","data":{"name":"al bassatine","publicKey":"BtbFFum3kc7gNzVYrgkvsKgtzsmYugKZ5gVuJumoJjWf","patients":[]}}' );
    this.localStorageService.set('al alya', '{"_name":"Clinic","_connection":{"path":"http://34.217.132.241:9984/api/v1/","headers":{"app_id":"5e04b70c","app_key":"e4362476ae5da5e742cb1f5f9f4ef0ce"},"conn":{"path":"http://34.217.132.241:9984/api/v1/","headers":{"app_id":"5e04b70c","app_key":"e4362476ae5da5e742cb1f5f9f4ef0ce"}}},"_appId":"5e04b70c","transactionHistory":[{"inputs":[{"owners_before":["E19r28HMoV3MPq7YQUmKGqnTeo9Roxg7G72g3Qq2VWgx"],"fulfills":null,"fulfillment":"pGSAIMEx7mmiG9BFv2rEsO3SkoyARhRPvbZyyZskbt5xExNRgUC6vMHX9_-TKqQAfpxoaPlnKR9eJ-vlV4Fr1dSMzsH2lPX2BTP78EdwAnDsrWFTB-vuwfKyVtrgDShAxVVrDroG"}],"outputs":[{"public_keys":["E19r28HMoV3MPq7YQUmKGqnTeo9Roxg7G72g3Qq2VWgx"],"condition":{"details":{"type":"ed25519-sha-256","public_key":"E19r28HMoV3MPq7YQUmKGqnTeo9Roxg7G72g3Qq2VWgx"},"uri":"ni:///sha-256;plkIZrE4Ce-gJz7ufWGxzy7Bda9IBQowep7zgeGA3jc?fpt=ed25519-sha-256&cost=131072"},"amount":"1"}],"operation":"CREATE","metadata":{"name":"al alya","publicKey":"E19r28HMoV3MPq7YQUmKGqnTeo9Roxg7G72g3Qq2VWgx"},"asset":{"data":{"5e04b70c-Clinic":{"id":"id:5e04b70c:dd06e89d-b24e-4929-9b9c-ad53a6d350c1"}}},"version":"2.0","id":"052535be56d0c446bb98f50c5113bd24d274f29f8fdd098208b158e7aae2088f"}],"id":"id:5e04b70c:dd06e89d-b24e-4929-9b9c-ad53a6d350c1","data":{"name":"al alya","publicKey":"E19r28HMoV3MPq7YQUmKGqnTeo9Roxg7G72g3Qq2VWgx","patients":[]}}');
    this.localStorageService.set('Ibn nafis', '{"_name":"Clinic","_connection":{"path":"http://34.217.132.241:9984/api/v1/","headers":{"app_id":"5e04b70c","app_key":"e4362476ae5da5e742cb1f5f9f4ef0ce"},"conn":{"path":"http://34.217.132.241:9984/api/v1/","headers":{"app_id":"5e04b70c","app_key":"e4362476ae5da5e742cb1f5f9f4ef0ce"}}},"_appId":"5e04b70c","transactionHistory":[{"inputs":[{"owners_before":["4XUFBYnmBaXZfsjUozaPBQHY4PkEPfNpBDGzwj4oshP6"],"fulfills":null,"fulfillment":"pGSAIDRhSl-ux5vmG0PtH7mOAjoiGK_6jF1GTnUvLlcn-7SxgUDyteU7Hp9eFXQ9N5s6OwbkdcPlxmLjqCZQMh2C5sV3ZvLyfsHJIJAZ6wX-0AlNKo_-ghxcyX9OrJiaqmF4a0YO"}],"outputs":[{"public_keys":["4XUFBYnmBaXZfsjUozaPBQHY4PkEPfNpBDGzwj4oshP6"],"condition":{"details":{"type":"ed25519-sha-256","public_key":"4XUFBYnmBaXZfsjUozaPBQHY4PkEPfNpBDGzwj4oshP6"},"uri":"ni:///sha-256;cf5r2bMcfmCvYxsnC9nA9U9vicl-GTVKK3MIVVmVv30?fpt=ed25519-sha-256&cost=131072"},"amount":"1"}],"operation":"CREATE","metadata":{"name":"Ibn nafis","publicKey":"4XUFBYnmBaXZfsjUozaPBQHY4PkEPfNpBDGzwj4oshP6"},"asset":{"data":{"5e04b70c-Clinic":{"id":"id:5e04b70c:da4489c6-97e2-4552-b7f1-ba6c22b42312"}}},"version":"2.0","id":"cdf521177aca9673ff64335db8d7ecbd5d2cbe94cd08a3a265798914dd27578f"}],"id":"id:5e04b70c:da4489c6-97e2-4552-b7f1-ba6c22b42312","data":{"name":"Ibn nafis","publicKey":"4XUFBYnmBaXZfsjUozaPBQHY4PkEPfNpBDGzwj4oshP6","patients":[]}}');
    this.localStorageService.set('Yassamine', '{"_name":"Clinic","_connection":{"path":"http://34.217.132.241:9984/api/v1/","headers":{"app_id":"5e04b70c","app_key":"e4362476ae5da5e742cb1f5f9f4ef0ce"},"conn":{"path":"http://34.217.132.241:9984/api/v1/","headers":{"app_id":"5e04b70c","app_key":"e4362476ae5da5e742cb1f5f9f4ef0ce"}}},"_appId":"5e04b70c","transactionHistory":[{"inputs":[{"owners_before":["C7F49Fsaxkom4dq4bVswUe5FaVMm8UJoACE52RoBX4vQ"],"fulfills":null,"fulfillment":"pGSAIKUJ7qGvDGNukBu6VVPed6qq73fulPWqN6MDIZd04BQVgUCRrRFO-4BSHM1iwJEkQVYfCxcPKqaPOXohQB8VZ_00XNK4JymYx3D70LzfF6SEp3sRdDMfDUiatKoSFASZExgL"}],"outputs":[{"public_keys":["C7F49Fsaxkom4dq4bVswUe5FaVMm8UJoACE52RoBX4vQ"],"condition":{"details":{"type":"ed25519-sha-256","public_key":"C7F49Fsaxkom4dq4bVswUe5FaVMm8UJoACE52RoBX4vQ"},"uri":"ni:///sha-256;mz0q4Ar9ei6BuwjPY_T6DnVpgkaVCbCinfP44JA7slw?fpt=ed25519-sha-256&cost=131072"},"amount":"1"}],"operation":"CREATE","metadata":{"name":"Yassamine","publicKey":"C7F49Fsaxkom4dq4bVswUe5FaVMm8UJoACE52RoBX4vQ"},"asset":{"data":{"5e04b70c-Clinic":{"id":"id:5e04b70c:828c9b0a-65f9-44f9-a334-b2b61cbfcc3e"}}},"version":"2.0","id":"6e3307a365bf2b808d12409d7cd00d2d5bbe098e73673d28a9ee55a88a75617e"}],"id":"id:5e04b70c:828c9b0a-65f9-44f9-a334-b2b61cbfcc3e","data":{"name":"Yassamine","publicKey":"C7F49Fsaxkom4dq4bVswUe5FaVMm8UJoACE52RoBX4vQ","patients":[]}}');
    this.localStorageService.set('Arrachid', '{"_name":"Clinic","_connection":{"path":"http://34.217.132.241:9984/api/v1/","headers":{"app_id":"5e04b70c","app_key":"e4362476ae5da5e742cb1f5f9f4ef0ce"},"conn":{"path":"http://34.217.132.241:9984/api/v1/","headers":{"app_id":"5e04b70c","app_key":"e4362476ae5da5e742cb1f5f9f4ef0ce"}}},"_appId":"5e04b70c","transactionHistory":[{"inputs":[{"owners_before":["F9TkqNTetKsxF6SXRoTjtYDQdHS5s4yJ1QbzA1UcLuL9"],"fulfills":null,"fulfillment":"pGSAINIuhCqBWEsl6qdRBhhn7F9xbaGwZqDy23YCH1RreikugUCJxqw3THYQJPCqikzLadcUoujnLExaujv_lE8sb38nWdn9cwDNc_Lgv71Ufd4puX4HoPtPBsBRc7Bu2z2N9N8L"}],"outputs":[{"public_keys":["F9TkqNTetKsxF6SXRoTjtYDQdHS5s4yJ1QbzA1UcLuL9"],"condition":{"details":{"type":"ed25519-sha-256","public_key":"F9TkqNTetKsxF6SXRoTjtYDQdHS5s4yJ1QbzA1UcLuL9"},"uri":"ni:///sha-256;MHAY7kBygQEnfgRArYvsM75tZfrVdIBCx0MAcZWmTn4?fpt=ed25519-sha-256&cost=131072"},"amount":"1"}],"operation":"CREATE","metadata":{"name":"Arrachid","publicKey":"F9TkqNTetKsxF6SXRoTjtYDQdHS5s4yJ1QbzA1UcLuL9"},"asset":{"data":{"5e04b70c-Clinic":{"id":"id:5e04b70c:5ce379ba-2d57-4824-b6b3-58baf34be9ce"}}},"version":"2.0","id":"aed5e60390fc14f857b6284bb411fed594cd1387e13b27476e19a7a808b81a9c"}],"id":"id:5e04b70c:5ce379ba-2d57-4824-b6b3-58baf34be9ce","data":{"name":"Arrachid","publicKey":"F9TkqNTetKsxF6SXRoTjtYDQdHS5s4yJ1QbzA1UcLuL9","patients":[]}}');
    this.localStorageService.set('Al madina', '{"_name":"Clinic","_connection":{"path":"http://34.217.132.241:9984/api/v1/","headers":{"app_id":"5e04b70c","app_key":"e4362476ae5da5e742cb1f5f9f4ef0ce"},"conn":{"path":"http://34.217.132.241:9984/api/v1/","headers":{"app_id":"5e04b70c","app_key":"e4362476ae5da5e742cb1f5f9f4ef0ce"}}},"_appId":"5e04b70c","transactionHistory":[{"inputs":[{"owners_before":["7X6H6fH6tT4wHdr7phJYPb4sqwq8G4BZhKBpSCSzbC9s"],"fulfills":null,"fulfillment":"pGSAIGDbg18L4xzm9Mmqriuu80TdfIOkVtjeAKm2Kp3OxndOgUB-URuFeI4Ev1ziMpGRT5KIv1GzIOCtfjnlsLWtnCVuxhY-k065EfFZga76GdQhYkmrwJzNruMw_jbs6PzpNnwD"}],"outputs":[{"public_keys":["7X6H6fH6tT4wHdr7phJYPb4sqwq8G4BZhKBpSCSzbC9s"],"condition":{"details":{"type":"ed25519-sha-256","public_key":"7X6H6fH6tT4wHdr7phJYPb4sqwq8G4BZhKBpSCSzbC9s"},"uri":"ni:///sha-256;ZUHufJvKkPZC7VAe1bCEIvKKqeEtep-jtZ9TbKwe7rg?fpt=ed25519-sha-256&cost=131072"},"amount":"1"}],"operation":"CREATE","metadata":{"name":"Al madina","publicKey":"7X6H6fH6tT4wHdr7phJYPb4sqwq8G4BZhKBpSCSzbC9s"},"asset":{"data":{"5e04b70c-Clinic":{"id":"id:5e04b70c:99212c65-c429-49df-8168-7724033df39c"}}},"version":"2.0","id":"b677dea7a494904de93babb368b03563fca53c2a35461a5194e3f3a0c743b64b"}],"id":"id:5e04b70c:99212c65-c429-49df-8168-7724033df39c","data":{"name":"Al madina","publicKey":"7X6H6fH6tT4wHdr7phJYPb4sqwq8G4BZhKBpSCSzbC9s","patients":[]}}');

  }


  goto_signup()
  {
    this.route.navigate(['/login/signup']);
  }
  private loadScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
    const scriptElement = document.createElement('script');
    scriptElement.src = scriptUrl;
    scriptElement.onload = resolve;
    document.body.appendChild(scriptElement);
   });
  }
  //clinics



}
