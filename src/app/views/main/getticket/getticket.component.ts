import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';

import { IUser } from '../../../interfaces/user';
import { EventType } from '../../../interfaces/event';

import { EventService } from '../../../services/event.service';
import { LoginService } from '../../../services/login.service';
import { HomeService } from '../../../services/home.service';
import { CodeComponent } from '../../../dialogs/code/code.component';

import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-getticket',
  templateUrl: './getticket.component.html',
  styleUrls: ['./getticket.component.scss'],
})
export class GetticketComponent implements OnInit {

  base_url: string = `${environment.flyer.url}`;

  count: number = 4;

  event: EventType;

  code_id: number;
  paymentAmount: string = '3.33';
  currency: string = 'USD';
  currencyIcon: string = '$';
  event_id: number = 7;
  user: IUser;

  early: string;
  early_price: number;
  admission: string;
  admission_price: number;
  eflag: boolean;
  aflag: boolean;
  fee: number;

  early_count: number = 0;
  admission_count: number = 0;

  total: number = 0;

  constructor(private payPal: PayPal, private loginService: LoginService, private api: HomeService, private eventService: EventService, private modalController: ModalController, public toastController: ToastController) { }

  ngOnInit() {
    this.user = this.loginService.currentUserValue;

    let formData = new FormData();
    formData.append("id", this.event_id.toString());

    this.eventService.sendRequest(formData, 'get').subscribe(
      (response) => {
        console.log(response);
        this.event = {
					id: response['event']['id'],
					title: response['event']['title'],
					desc: response['event']['desc'],
					startTime: response['event']['startTime'],
					endTime: response['event']['endTime'],
					user_id: response['event']['user_id'],
					image: response['event']['image']
				};
        this.count = response['count'];
      },
      error => {
        console.log('Error');
      }
    );

    this.api.sendRequest(formData, 'week').subscribe(
      (response) => {
        console.log(response);
        this.early = response['early'];
        this.early_price = response['early_price'];
        this.admission = response['admission'];
        this.admission_price = response['admission_price'];
        this.eflag = response['eflag'];
        this.aflag = response['aflag'];
        this.fee = response['fee'];
      },
      error => {
        console.log('Error');
      }
    );
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: CodeComponent,
      componentProps: { code: this.code_id }
    });
    return await modal.present();
  }

  async showToast(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 1000
    });
    toast.present();
  }

  onLike() {
    let formData = new FormData();

    formData.append('user_id', this.user.id.toString());
    formData.append('event_id', this.event_id.toString());

    this.eventService.sendRequest(formData, 'like').subscribe(
      (response) => {
        if (response['success'] == true) {
          console.log('success');
          this.count = response['count'];
        }
        else {
          this.showToast('Already liked');
        }
      },
      error => {
        console.log('Error');
      }
    );
  }

  onChange() {
    this.total = (this.early_price + this.fee) * this.early_count + (this.admission_price + this.fee) * this.admission_count;
  }

  async onGetTicket() {
    this.payPal.init({
      PayPalEnvironmentProduction: 'AZrcw0CTIcQE7o_dtzE6w23MMLg3O2nNuQHfg9Khnx81xYVaw9VWGtGL8gugig7rb8SZU30e7ywY1w6Z',
      PayPalEnvironmentSandbox: 'AZVJtdr2fmVUuWb_gr4SAXVzXDF8tHFmf36HMdeHOE8Uy_JWKIdugertkOnknIoq7biY6gvaRlc6h-4M'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {

        let payment = new PayPalPayment(this.total, 'USD', 'Description', 'sale');

        this.payPal.renderSinglePaymentUI(payment).then((res) => {

          let formData = new FormData();

          formData.append('user_id', this.user.id.toString());
          formData.append('trans_id', res['response']['id']);
          formData.append('event_id', this.event_id.toString());

          this.api.sendRequest(formData, 'request').subscribe(
            (response) => {
              if (response['success'] == true) {
                this.code_id = response['id'];
                console.log('aaa' + this.code_id);
                this.openModal();
              }
              else {
                console.log('Error');
              }
            },
            error => {
              console.log('Error');
            }
          );

          // Successfully paid

          // Example sandbox response
          //
          // {
          //   "client": {
          //     "environment": "sandbox",
          //     "product_name": "PayPal iOS SDK",
          //     "paypal_sdk_version": "2.16.0",
          //     "platform": "iOS"
          //   },
          //   "response_type": "payment",
          //   "response": {
          //     "id": "PAY-1AB23456CD789012EF34GHIJ",
          //     "state": "approved",
          //     "create_time": "2016-10-03T13:33:33Z",
          //     "intent": "sale"
          //   }
          // }
        }, () => {
          // Error or render dialog closed without being successful
        });
      }, () => {
        // Error in configuration
      });
    }, () => {
      // Error in initialization, maybe PayPal isn't supported or something else
    });
  }

}
