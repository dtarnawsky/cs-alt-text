import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-edit-adhoc-credit-card',
  templateUrl: './add-edit-adhoc-credit-card.component.html',
  styleUrls: ['./add-edit-adhoc-credit-card.component.scss'],
})
export class AddEditAdhocCreditCardComponent {
  myCards: any;
  cardData = {
    cardHolderName: '', addressLine2: '', addressLine1: '',
    city: '', zipCode: '', state: '', country: '', cardNickname: '', expiryDate: '',
    cvv: ''
  };
  public creditCard = {
    stateName: 'State', countryName: 'Country'
  };
  isAdhoc = true;

  public isUserLoggedIn: boolean;
  public appCopy = {
    navigation: { cancelButton: 'Cancel', deleteButton: 'Delete' },
    creditCard: {
      saveCreditCardToMyProfile: true, walletTermsAndConditionsLinkText: 'T & C',
      cardNicknamePlaceHolderText: 'Nick', stateName: 'State'
    }
  };
  public ariaLabels = {
    addCreditCard: 'Add Credit Card'
  };

  public clearCCNumOnEdit: boolean;
  public clearCvvOnEdit: boolean;
  public statesList: any;
  public btnTextAddSave: string;
  public modifyPlaceHolder = '';
  public isCreditCardValid = true;
  public isCvvValid = false;
  public saveToProfile = true;
  public isExpiryValid = false;
  public isNameValid = false;
  public isEdit = true;
  public mask = [/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  public showCreditCardIcons = true;
  public creditCardFormSubmitted: boolean;
  public paymentsCopy = {
    cardNumberLabel: 'Card Number',
    invalidLabel: 'Invalid', expirationLabel: 'Expiration', cvvLabel: 'cvv',
    address1Label: 'Address 1', address2Label: 'Address 2', zipCodeLabelRequired: 'Zip Code',
    countryLabel: 'Country', cityLabel: 'City', nameLabel: 'Name'
  };
  public creditCardsArr;
  public creditCardForm: FormGroup;
  public showCvv;
  public showCountry;
  public stateProvinceLabel;
  public zipPostalLabel;
  public showState = true;
  public showZipCode = true;
  public zipCodeValidation;
  public zipCodeRegEx;
  public postalCodeRegEx;
  public otherZipCodeRegEx;
  public maxCvvLength = 0;
  public minCvvLength = 0;
  public origMaxCvvLength = 0;
  public origMinCvvLength = 10;
  public selectedCreditCard: any;
  public viewPassword = false;
  public viewCvv: boolean;

  public readonly pageName = 'AddEditCreditCardPage';
  public minCCLength = 16;
  public provincesList: any;
  public countriesList: any;
  public isCardEdit = false;
  headingText: string;
  public userId: string;
  public tncText: string;
  public isVisibleCvv = true;
  public previousExp;


  // eslint-disable-next-line @typescript-eslint/ban-types
  comp: {};

  public showSaveToProfile = true;

  public savedCreditCards: any;

  public creditCardDetails;

  constructor(private formBuilder: FormBuilder
  ) {
    const ccExpiryRegEx = new RegExp('.');
    const billingRegex = new RegExp('.');
    const nameRegEx = new RegExp('.');
    const cityName = new RegExp('.');
    const ccNumber = 0;
    this.creditCardForm = this.formBuilder.group({
      ccNumber: [ccNumber],
      ccExpiration: [this.isCardEdit ? this.cardData.expiryDate : '',
      Validators.compose([Validators.required, Validators.pattern(ccExpiryRegEx)])],
      ccCvv: [this.isAdhoc && this.isCardEdit ? this.cardData.cvv : ''],
      ccName: [this.cardData.cardHolderName, Validators.compose([Validators.required, Validators.pattern(nameRegEx)])],
      ccBillingAdd1: [this.cardData.addressLine1, Validators.compose([Validators.required, Validators.pattern(billingRegex)])],
      ccBillingAdd2: [this.cardData.addressLine2, Validators.pattern(billingRegex)],
      ccCity: [this.cardData.city, Validators.compose([Validators.required, Validators.pattern(cityName)])],
      ccZipCode: [this.cardData.zipCode, Validators.compose([Validators.required, Validators.pattern(this.zipCodeValidation)])],
      ccState: [this.cardData.state],
      ccCountry: [this.cardData.country],
      ccCardNickName: [this.cardData.cardNickname],
      ccIsDefault: [false],
    });
  }

  public done() { }
  public creditCardNumberEntered() { }
  public ccFieldFocussed() { }
  public eyeIconClicked(event) { }
  public expiryEnter() { }
  public onExpiryKeypress(event) { }
  public expirationBlurred() { }
  public showCVVInfo(event) { }
  public eyeIconClickedCvv(event) { }
  public billingAdd2Entered() { }
  public billingAddress1Entered() { }
  public stateSelected(state) { }
  public nameEntered() { }
  public formSubmitted() { }
  public setStoredCardIndicator() { }
  public removeCreditCard() { }
  public cityEntered() { }
  public viewWalletTermsAndConditions() { }
  public updateCreditCard() { }
  public cvvFieldFocussed() { }
  public onCvvEnter(event) { }
}
