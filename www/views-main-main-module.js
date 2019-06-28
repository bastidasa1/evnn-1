(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-main-main-module"],{

/***/ "./node_modules/@ionic-native/paypal/ngx/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@ionic-native/paypal/ngx/index.js ***!
  \********************************************************/
/*! exports provided: PayPal, PayPalPayment, PayPalItem, PayPalPaymentDetails, PayPalConfiguration, PayPalShippingAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPal", function() { return PayPal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPalPayment", function() { return PayPalPayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPalItem", function() { return PayPalItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPalPaymentDetails", function() { return PayPalPaymentDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPalConfiguration", function() { return PayPalConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPalShippingAddress", function() { return PayPalShippingAddress; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PayPal = /** @class */ (function (_super) {
    __extends(PayPal, _super);
    function PayPal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PayPal.prototype.version = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "version", {}, arguments); };
    PayPal.prototype.init = function (clientIdsForEnvironments) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "init", {}, arguments); };
    PayPal.prototype.prepareToRender = function (environment, configuration) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "prepareToRender", {}, arguments); };
    PayPal.prototype.renderSinglePaymentUI = function (payment) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "renderSinglePaymentUI", {}, arguments); };
    PayPal.prototype.clientMetadataID = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "clientMetadataID", {}, arguments); };
    PayPal.prototype.renderFuturePaymentUI = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "renderFuturePaymentUI", {}, arguments); };
    PayPal.prototype.renderProfileSharingUI = function (scopes) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "renderProfileSharingUI", {}, arguments); };
    PayPal.pluginName = "PayPal";
    PayPal.plugin = "com.paypal.cordova.mobilesdk";
    PayPal.pluginRef = "PayPalMobile";
    PayPal.repo = "https://github.com/paypal/PayPal-Cordova-Plugin";
    PayPal.platforms = ["Android", "iOS"];
    PayPal = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PayPal);
    return PayPal;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

var PayPalPayment = /** @class */ (function () {
    function PayPalPayment(amount, currency, shortDescription, intent, details) {
        /**
         * Optional Build Notation code ("BN code"), obtained from partnerprogram@paypal.com,
         * for your tracking purposes.
         */
        this.bnCode = 'PhoneGap_SP';
        this.amount = amount;
        this.currency = currency;
        this.shortDescription = shortDescription;
        this.intent = intent;
        this.details = details;
    }
    return PayPalPayment;
}());

var PayPalItem = /** @class */ (function () {
    /**
     * The PayPalItem class defines an optional itemization for a payment.
     * @see https://developer.paypal.com/docs/api/#item-object for more details.
     * @param {String} name: Name of the item. 127 characters max
     * @param {Number} quantity: Number of units. 10 characters max.
     * @param {String} price: Unit price for this item 10 characters max.
     * May be negative for "coupon" etc
     * @param {String} currency: ISO standard currency code.
     * @param {String} sku: The stock keeping unit for this item. 50 characters max (optional)
     */
    function PayPalItem(name, quantity, price, currency, sku) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.currency = currency;
        this.sku = sku;
    }
    return PayPalItem;
}());

var PayPalPaymentDetails = /** @class */ (function () {
    /**
     * The PayPalPaymentDetails class defines optional amount details.
     * @param {String} subtotal: Sub-total (amount) of items being paid for. 10 characters max with support for 2 decimal places.
     * @param {String} shipping: Amount charged for shipping. 10 characters max with support for 2 decimal places.
     * @param {String} tax: Amount charged for tax. 10 characters max with support for 2 decimal places.
     */
    function PayPalPaymentDetails(subtotal, shipping, tax) {
        this.subtotal = subtotal;
        this.shipping = shipping;
        this.tax = tax;
    }
    return PayPalPaymentDetails;
}());

var PayPalConfiguration = /** @class */ (function () {
    /**
     * You use a PayPalConfiguration object to configure many aspects of how the SDK behaves.
     * see defaults for options available
     */
    function PayPalConfiguration(options) {
        var defaults = {
            defaultUserEmail: null,
            defaultUserPhoneCountryCode: null,
            defaultUserPhoneNumber: null,
            merchantName: null,
            merchantPrivacyPolicyURL: null,
            merchantUserAgreementURL: null,
            acceptCreditCards: true,
            payPalShippingAddressOption: 0,
            rememberUser: true,
            languageOrLocale: null,
            disableBlurWhenBackgrounding: false,
            presentingInPopover: false,
            forceDefaultsInSandbox: false,
            sandboxUserPassword: null,
            sandboxUserPin: null
        };
        if (options && typeof options === 'object') {
            for (var i in options) {
                if (defaults.hasOwnProperty(i)) {
                    defaults[i] = options[i];
                }
            }
        }
        return defaults;
    }
    return PayPalConfiguration;
}());

var PayPalShippingAddress = /** @class */ (function () {
    /**
     * See the documentation of the individual properties for more detail.
     * @param {String} recipientName: Name of the recipient at this address. 50 characters max.
     * @param {String} line1: Line 1 of the address (e.g., Number, street, etc). 100 characters max.
     * @param {String} line2: Line 2 of the address (e.g., Suite, apt #, etc). 100 characters max. Optional.
     * @param {String} city: City name. 50 characters max.
     * @param {String} state: 2-letter code for US states, and the equivalent for other countries. 100 characters max. Required in certain countries.
     * @param {String} postalCode: ZIP code or equivalent is usually required for countries that have them. 20 characters max. Required in certain countries.
     * @param {String} countryCode: 2-letter country code. 2 characters max.
     */
    function PayPalShippingAddress(recipientName, line1, line2, city, state, postalCode, countryCode) {
        this.recipientName = recipientName;
        this.line1 = line1;
        this.line2 = line2;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
        this.countryCode = countryCode;
    }
    return PayPalShippingAddress;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3BheXBhbC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUF5RTVDLDBCQUFpQjs7OztJQU0zQyx3QkFBTztJQWNQLHFCQUFJLGFBQUMsd0JBQTJDO0lBY2hELGdDQUFlLGFBQ2IsV0FBbUIsRUFDbkIsYUFBa0M7SUFjcEMsc0NBQXFCLGFBQUMsT0FBc0I7SUFlNUMsaUNBQWdCO0lBU2hCLHNDQUFxQjtJQVlyQix1Q0FBc0IsYUFBQyxNQUFnQjs7Ozs7O0lBdEY1QixNQUFNO1FBRGxCLFVBQVUsRUFBRTtPQUNBLE1BQU07aUJBMUVuQjtFQTBFNEIsaUJBQWlCO1NBQWhDLE1BQU07O0lBb0dqQix1QkFDRSxNQUFjLEVBQ2QsUUFBZ0IsRUFDaEIsZ0JBQXdCLEVBQ3hCLE1BQWMsRUFDZCxPQUE4QjtRQXlCaEM7OztXQUdHO1FBQ0gsV0FBTSxHQUFHLGFBQWEsQ0FBQztRQTNCckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7d0JBMUxIOzs7O0lBcVBFOzs7Ozs7Ozs7T0FTRztJQUNILG9CQUNFLElBQVksRUFDWixRQUFnQixFQUNoQixLQUFhLEVBQ2IsUUFBZ0IsRUFDaEIsR0FBWTtRQUVaLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7cUJBM1FIOzs7O0lBbVRFOzs7OztPQUtHO0lBQ0gsOEJBQVksUUFBZ0IsRUFBRSxRQUFnQixFQUFFLEdBQVc7UUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQzsrQkE3VEg7Ozs7SUE0YUU7OztPQUdHO0lBQ0gsNkJBQVksT0FBb0M7UUFDOUMsSUFBTSxRQUFRLEdBQStCO1lBQzNDLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsMkJBQTJCLEVBQUUsSUFBSTtZQUNqQyxzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLHdCQUF3QixFQUFFLElBQUk7WUFDOUIsd0JBQXdCLEVBQUUsSUFBSTtZQUM5QixpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLDJCQUEyQixFQUFFLENBQUM7WUFDOUIsWUFBWSxFQUFFLElBQUk7WUFDbEIsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0Qiw0QkFBNEIsRUFBRSxLQUFLO1lBQ25DLG1CQUFtQixFQUFFLEtBQUs7WUFDMUIsc0JBQXNCLEVBQUUsS0FBSztZQUM3QixtQkFBbUIsRUFBRSxJQUFJO1lBQ3pCLGNBQWMsRUFBRSxJQUFJO1NBQ3JCLENBQUM7UUFFRixJQUFJLE9BQU8sSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDMUMsS0FBSyxJQUFNLENBQUMsSUFBSSxPQUFPLEVBQUU7Z0JBQ3ZCLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDOUIsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDMUI7YUFDRjtTQUNGO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs4QkE1Y0g7Ozs7SUFtZEU7Ozs7Ozs7OztPQVNHO0lBQ0gsK0JBQ0UsYUFBcUIsRUFDckIsS0FBYSxFQUNiLEtBQWEsRUFDYixJQUFZLEVBQ1osS0FBYSxFQUNiLFVBQWtCLEVBQ2xCLFdBQW1CO1FBRW5CLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2pDLENBQUM7Z0NBN2VIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgUGF5UGFsXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBheVBhbCBwbHVnaW4gZm9yIENvcmRvdmEvSW9uaWMgQXBwbGljYXRpb25zXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBQYXlQYWwsIFBheVBhbFBheW1lbnQsIFBheVBhbENvbmZpZ3VyYXRpb24gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3BheXBhbC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgcGF5UGFsOiBQYXlQYWwpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLnBheVBhbC5pbml0KHtcbiAqICAgUGF5UGFsRW52aXJvbm1lbnRQcm9kdWN0aW9uOiAnWU9VUl9QUk9EVUNUSU9OX0NMSUVOVF9JRCcsXG4gKiAgIFBheVBhbEVudmlyb25tZW50U2FuZGJveDogJ1lPVVJfU0FOREJPWF9DTElFTlRfSUQnXG4gKiB9KS50aGVuKCgpID0+IHtcbiAqICAgLy8gRW52aXJvbm1lbnRzOiBQYXlQYWxFbnZpcm9ubWVudE5vTmV0d29yaywgUGF5UGFsRW52aXJvbm1lbnRTYW5kYm94LCBQYXlQYWxFbnZpcm9ubWVudFByb2R1Y3Rpb25cbiAqICAgdGhpcy5wYXlQYWwucHJlcGFyZVRvUmVuZGVyKCdQYXlQYWxFbnZpcm9ubWVudFNhbmRib3gnLCBuZXcgUGF5UGFsQ29uZmlndXJhdGlvbih7XG4gKiAgICAgLy8gT25seSBuZWVkZWQgaWYgeW91IGdldCBhbiBcIkludGVybmFsIFNlcnZpY2UgRXJyb3JcIiBhZnRlciBQYXlQYWwgbG9naW4hXG4gKiAgICAgLy9wYXlQYWxTaGlwcGluZ0FkZHJlc3NPcHRpb246IDIgLy8gUGF5UGFsU2hpcHBpbmdBZGRyZXNzT3B0aW9uUGF5UGFsXG4gKiAgIH0pKS50aGVuKCgpID0+IHtcbiAqICAgICBsZXQgcGF5bWVudCA9IG5ldyBQYXlQYWxQYXltZW50KCczLjMzJywgJ1VTRCcsICdEZXNjcmlwdGlvbicsICdzYWxlJyk7XG4gKiAgICAgdGhpcy5wYXlQYWwucmVuZGVyU2luZ2xlUGF5bWVudFVJKHBheW1lbnQpLnRoZW4oKCkgPT4ge1xuICogICAgICAgLy8gU3VjY2Vzc2Z1bGx5IHBhaWRcbiAqXG4gKiAgICAgICAvLyBFeGFtcGxlIHNhbmRib3ggcmVzcG9uc2VcbiAqICAgICAgIC8vXG4gKiAgICAgICAvLyB7XG4gKiAgICAgICAvLyAgIFwiY2xpZW50XCI6IHtcbiAqICAgICAgIC8vICAgICBcImVudmlyb25tZW50XCI6IFwic2FuZGJveFwiLFxuICogICAgICAgLy8gICAgIFwicHJvZHVjdF9uYW1lXCI6IFwiUGF5UGFsIGlPUyBTREtcIixcbiAqICAgICAgIC8vICAgICBcInBheXBhbF9zZGtfdmVyc2lvblwiOiBcIjIuMTYuMFwiLFxuICogICAgICAgLy8gICAgIFwicGxhdGZvcm1cIjogXCJpT1NcIlxuICogICAgICAgLy8gICB9LFxuICogICAgICAgLy8gICBcInJlc3BvbnNlX3R5cGVcIjogXCJwYXltZW50XCIsXG4gKiAgICAgICAvLyAgIFwicmVzcG9uc2VcIjoge1xuICogICAgICAgLy8gICAgIFwiaWRcIjogXCJQQVktMUFCMjM0NTZDRDc4OTAxMkVGMzRHSElKXCIsXG4gKiAgICAgICAvLyAgICAgXCJzdGF0ZVwiOiBcImFwcHJvdmVkXCIsXG4gKiAgICAgICAvLyAgICAgXCJjcmVhdGVfdGltZVwiOiBcIjIwMTYtMTAtMDNUMTM6MzM6MzNaXCIsXG4gKiAgICAgICAvLyAgICAgXCJpbnRlbnRcIjogXCJzYWxlXCJcbiAqICAgICAgIC8vICAgfVxuICogICAgICAgLy8gfVxuICogICAgIH0sICgpID0+IHtcbiAqICAgICAgIC8vIEVycm9yIG9yIHJlbmRlciBkaWFsb2cgY2xvc2VkIHdpdGhvdXQgYmVpbmcgc3VjY2Vzc2Z1bFxuICogICAgIH0pO1xuICogICB9LCAoKSA9PiB7XG4gKiAgICAgLy8gRXJyb3IgaW4gY29uZmlndXJhdGlvblxuICogICB9KTtcbiAqIH0sICgpID0+IHtcbiAqICAgLy8gRXJyb3IgaW4gaW5pdGlhbGl6YXRpb24sIG1heWJlIFBheVBhbCBpc24ndCBzdXBwb3J0ZWQgb3Igc29tZXRoaW5nIGVsc2VcbiAqIH0pO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogUGF5UGFsRW52aXJvbm1lbnRcbiAqIFBheVBhbENvbmZpZ3VyYXRpb25PcHRpb25zXG4gKiBAY2xhc3Nlc1xuICogUGF5UGFsUGF5bWVudFxuICogUGF5UGFsSXRlbVxuICogUGF5UGFsUGF5bWVudERldGFpbHNcbiAqIFBheVBhbFNoaXBwaW5nQWRkcmVzc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1BheVBhbCcsXG4gIHBsdWdpbjogJ2NvbS5wYXlwYWwuY29yZG92YS5tb2JpbGVzZGsnLFxuICBwbHVnaW5SZWY6ICdQYXlQYWxNb2JpbGUnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3BheXBhbC9QYXlQYWwtQ29yZG92YS1QbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYXlQYWwgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBSZXRyaWV2ZSB0aGUgdmVyc2lvbiBvZiB0aGUgUGF5UGFsIGlPUyBTREsgbGlicmFyeS4gVXNlZnVsIHdoZW4gY29udGFjdGluZyBzdXBwb3J0LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB2ZXJzaW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFlvdSBtdXN0IHByZWNvbm5lY3QgdG8gUGF5UGFsIHRvIHByZXBhcmUgdGhlIGRldmljZSBmb3IgcHJvY2Vzc2luZyBwYXltZW50cy5cbiAgICogVGhpcyBpbXByb3ZlcyB0aGUgdXNlciBleHBlcmllbmNlLCBieSBtYWtpbmcgdGhlIHByZXNlbnRhdGlvbiBvZiB0aGVcbiAgICogVUkgZmFzdGVyLiBUaGUgcHJlY29ubmVjdCBpcyB2YWxpZCBmb3IgYSBsaW1pdGVkIHRpbWUsIHNvXG4gICAqIHRoZSByZWNvbW1lbmRlZCB0aW1lIHRvIHByZWNvbm5lY3QgaXMgb24gcGFnZSBsb2FkLlxuICAgKlxuICAgKiBAcGFyYW0ge1BheVBhbEVudmlyb25tZW50fSBjbGllbnRJZHNGb3JFbnZpcm9ubWVudHM6IHNldCBvZiBjbGllbnQgaWRzIGZvciBlbnZpcm9ubWVudHNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaW5pdChjbGllbnRJZHNGb3JFbnZpcm9ubWVudHM6IFBheVBhbEVudmlyb25tZW50KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogWW91IG11c3QgcHJlY29ubmVjdCB0byBQYXlQYWwgdG8gcHJlcGFyZSB0aGUgZGV2aWNlIGZvciBwcm9jZXNzaW5nIHBheW1lbnRzLlxuICAgKiBUaGlzIGltcHJvdmVzIHRoZSB1c2VyIGV4cGVyaWVuY2UsIGJ5IG1ha2luZyB0aGUgcHJlc2VudGF0aW9uIG9mIHRoZSBVSSBmYXN0ZXIuXG4gICAqIFRoZSBwcmVjb25uZWN0IGlzIHZhbGlkIGZvciBhIGxpbWl0ZWQgdGltZSwgc28gdGhlIHJlY29tbWVuZGVkIHRpbWUgdG8gcHJlY29ubmVjdCBpcyBvbiBwYWdlIGxvYWQuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlbnZpcm9ubWVudDogYXZhaWxhYmxlIG9wdGlvbnMgYXJlIFwiUGF5UGFsRW52aXJvbm1lbnROb05ldHdvcmtcIiwgXCJQYXlQYWxFbnZpcm9ubWVudFByb2R1Y3Rpb25cIiBhbmQgXCJQYXlQYWxFbnZpcm9ubWVudFNhbmRib3hcIlxuICAgKiBAcGFyYW0ge1BheVBhbENvbmZpZ3VyYXRpb259IGNvbmZpZ3VyYXRpb246IFBheVBhbENvbmZpZ3VyYXRpb24gb2JqZWN0LCBmb3IgRnV0dXJlIFBheW1lbnRzIG1lcmNoYW50TmFtZSwgbWVyY2hhbnRQcml2YWN5UG9saWN5VVJMIGFuZCBtZXJjaGFudFVzZXJBZ3JlZW1lbnRVUkwgbXVzdCBiZSBzZXQgYmUgc2V0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHByZXBhcmVUb1JlbmRlcihcbiAgICBlbnZpcm9ubWVudDogc3RyaW5nLFxuICAgIGNvbmZpZ3VyYXRpb246IFBheVBhbENvbmZpZ3VyYXRpb25cbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgUGF5UGFsIFVJIHRvIGNvbGxlY3QgcGF5bWVudCBmcm9tIHRoZSB1c2VyLlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIucGF5cGFsLmNvbS93ZWJhcHBzL2RldmVsb3Blci9kb2NzL2ludGVncmF0aW9uL21vYmlsZS9pb3MtaW50ZWdyYXRpb24tZ3VpZGUvXG4gICAqIGZvciBtb3JlIGRvY3VtZW50YXRpb24gb2YgdGhlIHBhcmFtcy5cbiAgICpcbiAgICogQHBhcmFtIHtQYXlQYWxQYXltZW50fSBwYXltZW50IFBheVBhbFBheW1lbnQgb2JqZWN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlbmRlclNpbmdsZVBheW1lbnRVSShwYXltZW50OiBQYXlQYWxQYXltZW50KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogT25jZSBhIHVzZXIgaGFzIGNvbnNlbnRlZCB0byBmdXR1cmUgcGF5bWVudHMsIHdoZW4gdGhlIHVzZXIgc3Vic2VxdWVudGx5IGluaXRpYXRlcyBhIFBheVBhbCBwYXltZW50XG4gICAqIGZyb20gdGhlaXIgZGV2aWNlIHRvIGJlIGNvbXBsZXRlZCBieSB5b3VyIHNlcnZlciwgUGF5UGFsIHVzZXMgYSBDb3JyZWxhdGlvbiBJRCB0byB2ZXJpZnkgdGhhdCB0aGVcbiAgICogcGF5bWVudCBpcyBvcmlnaW5hdGluZyBmcm9tIGEgdmFsaWQsIHVzZXItY29uc2VudGVkIGRldmljZSthcHBsaWNhdGlvbi5cbiAgICogVGhpcyBoZWxwcyByZWR1Y2UgZnJhdWQgYW5kIGRlY3JlYXNlIGRlY2xpbmVzLlxuICAgKiBUaGlzIG1ldGhvZCBNVVNUIGJlIGNhbGxlZCBwcmlvciB0byBpbml0aWF0aW5nIGEgcHJlLWNvbnNlbnRlZCBwYXltZW50IChhIFwiZnV0dXJlIHBheW1lbnRcIikgZnJvbSBhIG1vYmlsZSBkZXZpY2UuXG4gICAqIFBhc3MgdGhlIHJlc3VsdCB0byB5b3VyIHNlcnZlciwgdG8gaW5jbHVkZSBpbiB0aGUgcGF5bWVudCByZXF1ZXN0IHNlbnQgdG8gUGF5UGFsLlxuICAgKiBEbyBub3Qgb3RoZXJ3aXNlIGNhY2hlIG9yIHN0b3JlIHRoaXMgdmFsdWUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNsaWVudE1ldGFkYXRhSUQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUGxlYXNlIFJlYWQgRG9jcyBvbiBGdXR1cmUgUGF5bWVudHMgYXQgaHR0cHM6Ly9naXRodWIuY29tL3BheXBhbC9QYXlQYWwtaU9TLVNESyNmdXR1cmUtcGF5bWVudHNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVuZGVyRnV0dXJlUGF5bWVudFVJKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFBsZWFzZSBSZWFkIERvY3Mgb24gUHJvZmlsZSBTaGFyaW5nIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9wYXlwYWwvUGF5UGFsLWlPUy1TREsjcHJvZmlsZS1zaGFyaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHNjb3BlcyBzY29wZXMgU2V0IG9mIHJlcXVlc3RlZCBzY29wZS12YWx1ZXMuIEFjY2VwdGVkIHNjb3BlcyBhcmU6IG9wZW5pZCwgcHJvZmlsZSwgYWRkcmVzcywgZW1haWwsIHBob25lLCBmdXR1cmVwYXltZW50cyBhbmQgcGF5cGFsYXR0cmlidXRlc1xuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIucGF5cGFsLmNvbS9kb2NzL2ludGVncmF0aW9uL2RpcmVjdC9pZGVudGl0eS9hdHRyaWJ1dGVzLyBmb3IgbW9yZSBkZXRhaWxzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlbmRlclByb2ZpbGVTaGFyaW5nVUkoc2NvcGVzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGF5UGFsRW52aXJvbm1lbnQge1xuICBQYXlQYWxFbnZpcm9ubWVudFByb2R1Y3Rpb246IHN0cmluZztcbiAgUGF5UGFsRW52aXJvbm1lbnRTYW5kYm94OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgUGF5UGFsUGF5bWVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGFtb3VudDogc3RyaW5nLFxuICAgIGN1cnJlbmN5OiBzdHJpbmcsXG4gICAgc2hvcnREZXNjcmlwdGlvbjogc3RyaW5nLFxuICAgIGludGVudDogc3RyaW5nLFxuICAgIGRldGFpbHM/OiBQYXlQYWxQYXltZW50RGV0YWlsc1xuICApIHtcbiAgICB0aGlzLmFtb3VudCA9IGFtb3VudDtcbiAgICB0aGlzLmN1cnJlbmN5ID0gY3VycmVuY3k7XG4gICAgdGhpcy5zaG9ydERlc2NyaXB0aW9uID0gc2hvcnREZXNjcmlwdGlvbjtcbiAgICB0aGlzLmludGVudCA9IGludGVudDtcbiAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBhbW91bnQgb2YgdGhlIHBheW1lbnQuXG4gICAqL1xuICBhbW91bnQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBJU08gNDIxNyBjdXJyZW5jeSBmb3IgdGhlIHBheW1lbnQuXG4gICAqL1xuICBjdXJyZW5jeTogc3RyaW5nO1xuICAvKipcbiAgICogQSBzaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcGF5bWVudC5cbiAgICovXG4gIHNob3J0RGVzY3JpcHRpb246IHN0cmluZztcbiAgLyoqXG4gICAqIFwiU2FsZVwiIGZvciBhbiBpbW1lZGlhdGUgcGF5bWVudC5cbiAgICovXG4gIGludGVudDogc3RyaW5nO1xuICAvKipcbiAgICogT3B0aW9uYWwgQnVpbGQgTm90YXRpb24gY29kZSAoXCJCTiBjb2RlXCIpLCBvYnRhaW5lZCBmcm9tIHBhcnRuZXJwcm9ncmFtQHBheXBhbC5jb20sXG4gICAqIGZvciB5b3VyIHRyYWNraW5nIHB1cnBvc2VzLlxuICAgKi9cbiAgYm5Db2RlID0gJ1Bob25lR2FwX1NQJztcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGludm9pY2UgbnVtYmVyLCBmb3IgeW91ciB0cmFja2luZyBwdXJwb3Nlcy4gKHVwIHRvIDI1NiBjaGFyYWN0ZXJzKVxuICAgKi9cbiAgaW52b2ljZU51bWJlcjogc3RyaW5nO1xuICAvKipcbiAgICogT3B0aW9uYWwgdGV4dCwgZm9yIHlvdXIgdHJhY2tpbmcgcHVycG9zZXMuICh1cCB0byAyNTYgY2hhcmFjdGVycylcbiAgICovXG4gIGN1c3RvbTogc3RyaW5nO1xuICAvKipcbiAgICogT3B0aW9uYWwgdGV4dCB3aGljaCB3aWxsIGFwcGVhciBvbiB0aGUgY3VzdG9tZXIncyBjcmVkaXQgY2FyZCBzdGF0ZW1lbnQuICh1cCB0byAyMiBjaGFyYWN0ZXJzKVxuICAgKi9cbiAgc29mdERlc2NyaXB0b3I6IHN0cmluZztcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGFycmF5IG9mIFBheVBhbEl0ZW0gb2JqZWN0cy5cbiAgICovXG4gIGl0ZW1zOiBQYXlQYWxJdGVtW107XG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIHBheWVlIGVtYWlsLCBpZiB5b3VyIGFwcCBpcyBwYXlpbmcgYSB0aGlyZC1wYXJ0eSBtZXJjaGFudC5cbiAgICogVGhlIHBheWVlJ3MgZW1haWwuIEl0IG11c3QgYmUgYSB2YWxpZCBQYXlQYWwgZW1haWwgYWRkcmVzcy5cbiAgICovXG4gIHBheWVlRW1haWw6IHN0cmluZztcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGN1c3RvbWVyIHNoaXBwaW5nIGFkZHJlc3MsIGlmIHlvdXIgYXBwIHdpc2hlcyB0byBwcm92aWRlIHRoaXMgdG8gdGhlIFNESy5cbiAgICovXG4gIHNoaXBwaW5nQWRkcmVzczogc3RyaW5nO1xuICAvKipcbiAgICogT3B0aW9uYWwgUGF5UGFsUGF5bWVudERldGFpbHMgb2JqZWN0XG4gICAqL1xuICBkZXRhaWxzOiBQYXlQYWxQYXltZW50RGV0YWlscztcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBQYXlQYWxJdGVtIHtcbiAgLyoqXG4gICAqIFRoZSBQYXlQYWxJdGVtIGNsYXNzIGRlZmluZXMgYW4gb3B0aW9uYWwgaXRlbWl6YXRpb24gZm9yIGEgcGF5bWVudC5cbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5wYXlwYWwuY29tL2RvY3MvYXBpLyNpdGVtLW9iamVjdCBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZTogTmFtZSBvZiB0aGUgaXRlbS4gMTI3IGNoYXJhY3RlcnMgbWF4XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBxdWFudGl0eTogTnVtYmVyIG9mIHVuaXRzLiAxMCBjaGFyYWN0ZXJzIG1heC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHByaWNlOiBVbml0IHByaWNlIGZvciB0aGlzIGl0ZW0gMTAgY2hhcmFjdGVycyBtYXguXG4gICAqIE1heSBiZSBuZWdhdGl2ZSBmb3IgXCJjb3Vwb25cIiBldGNcbiAgICogQHBhcmFtIHtTdHJpbmd9IGN1cnJlbmN5OiBJU08gc3RhbmRhcmQgY3VycmVuY3kgY29kZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNrdTogVGhlIHN0b2NrIGtlZXBpbmcgdW5pdCBmb3IgdGhpcyBpdGVtLiA1MCBjaGFyYWN0ZXJzIG1heCAob3B0aW9uYWwpXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgcXVhbnRpdHk6IG51bWJlcixcbiAgICBwcmljZTogc3RyaW5nLFxuICAgIGN1cnJlbmN5OiBzdHJpbmcsXG4gICAgc2t1Pzogc3RyaW5nXG4gICkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5xdWFudGl0eSA9IHF1YW50aXR5O1xuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB0aGlzLmN1cnJlbmN5ID0gY3VycmVuY3k7XG4gICAgdGhpcy5za3UgPSBza3U7XG4gIH1cbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIGl0ZW0uIDEyNyBjaGFyYWN0ZXJzIG1heFxuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogTnVtYmVyIG9mIHVuaXRzLiAxMCBjaGFyYWN0ZXJzIG1heC5cbiAgICovXG4gIHF1YW50aXR5OiBudW1iZXI7XG4gIC8qKlxuICAgKiBVbml0IHByaWNlIGZvciB0aGlzIGl0ZW0gMTAgY2hhcmFjdGVycyBtYXguXG4gICAqL1xuICBwcmljZTogc3RyaW5nO1xuICAvKipcbiAgICogSVNPIHN0YW5kYXJkIGN1cnJlbmN5IGNvZGUuXG4gICAqL1xuICBjdXJyZW5jeTogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHN0b2NrIGtlZXBpbmcgdW5pdCBmb3IgdGhpcyBpdGVtLiA1MCBjaGFyYWN0ZXJzIG1heCAob3B0aW9uYWwpXG4gICAqL1xuICBza3U/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgUGF5UGFsUGF5bWVudERldGFpbHMge1xuICAvKipcbiAgICogU3ViLXRvdGFsIChhbW91bnQpIG9mIGl0ZW1zIGJlaW5nIHBhaWQgZm9yLiAxMCBjaGFyYWN0ZXJzIG1heCB3aXRoIHN1cHBvcnQgZm9yIDIgZGVjaW1hbCBwbGFjZXMuXG4gICAqL1xuICBzdWJ0b3RhbDogc3RyaW5nO1xuICAvKipcbiAgICogQW1vdW50IGNoYXJnZWQgZm9yIHNoaXBwaW5nLiAxMCBjaGFyYWN0ZXJzIG1heCB3aXRoIHN1cHBvcnQgZm9yIDIgZGVjaW1hbCBwbGFjZXMuXG4gICAqL1xuICBzaGlwcGluZzogc3RyaW5nO1xuICAvKipcbiAgICogQW1vdW50IGNoYXJnZWQgZm9yIHRheC4gMTAgY2hhcmFjdGVycyBtYXggd2l0aCBzdXBwb3J0IGZvciAyIGRlY2ltYWwgcGxhY2VzLlxuICAgKi9cbiAgdGF4OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBQYXlQYWxQYXltZW50RGV0YWlscyBjbGFzcyBkZWZpbmVzIG9wdGlvbmFsIGFtb3VudCBkZXRhaWxzLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3VidG90YWw6IFN1Yi10b3RhbCAoYW1vdW50KSBvZiBpdGVtcyBiZWluZyBwYWlkIGZvci4gMTAgY2hhcmFjdGVycyBtYXggd2l0aCBzdXBwb3J0IGZvciAyIGRlY2ltYWwgcGxhY2VzLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2hpcHBpbmc6IEFtb3VudCBjaGFyZ2VkIGZvciBzaGlwcGluZy4gMTAgY2hhcmFjdGVycyBtYXggd2l0aCBzdXBwb3J0IGZvciAyIGRlY2ltYWwgcGxhY2VzLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdGF4OiBBbW91bnQgY2hhcmdlZCBmb3IgdGF4LiAxMCBjaGFyYWN0ZXJzIG1heCB3aXRoIHN1cHBvcnQgZm9yIDIgZGVjaW1hbCBwbGFjZXMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihzdWJ0b3RhbDogc3RyaW5nLCBzaGlwcGluZzogc3RyaW5nLCB0YXg6IHN0cmluZykge1xuICAgIHRoaXMuc3VidG90YWwgPSBzdWJ0b3RhbDtcbiAgICB0aGlzLnNoaXBwaW5nID0gc2hpcHBpbmc7XG4gICAgdGhpcy50YXggPSB0YXg7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGF5UGFsQ29uZmlndXJhdGlvbk9wdGlvbnMge1xuICAvKipcbiAgICogV2lsbCBiZSBvdmVycmlkZGVuIGJ5IGVtYWlsIHVzZWQgaW4gbW9zdCByZWNlbnQgUGF5UGFsIGxvZ2luLlxuICAgKi9cbiAgZGVmYXVsdFVzZXJFbWFpbD86IHN0cmluZztcbiAgLyoqXG4gICAqIFdpbGwgYmUgb3ZlcnJpZGRlbiBieSBwaG9uZSBjb3VudHJ5IGNvZGUgdXNlZCBpbiBtb3N0IHJlY2VudCBQYXlQYWwgbG9naW5cbiAgICovXG4gIGRlZmF1bHRVc2VyUGhvbmVDb3VudHJ5Q29kZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFdpbGwgYmUgb3ZlcnJpZGRlbiBieSBwaG9uZSBudW1iZXIgdXNlZCBpbiBtb3N0IHJlY2VudCBQYXlQYWwgbG9naW4uXG4gICAqL1xuICBkZWZhdWx0VXNlclBob25lTnVtYmVyPzogc3RyaW5nO1xuICAvKipcbiAgICogWW91ciBjb21wYW55IG5hbWUsIGFzIGl0IHNob3VsZCBiZSBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIgd2hlbiByZXF1ZXN0aW5nIGNvbnNlbnQgdmlhIGEgUGF5UGFsRnV0dXJlUGF5bWVudFZpZXdDb250cm9sbGVyLlxuICAgKi9cbiAgbWVyY2hhbnROYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICogVVJMIG9mIHlvdXIgY29tcGFueSdzIHByaXZhY3kgcG9saWN5LCB3aGljaCB3aWxsIGJlIG9mZmVyZWQgdG8gdGhlIHVzZXIgd2hlbiByZXF1ZXN0aW5nIGNvbnNlbnQgdmlhIGEgUGF5UGFsRnV0dXJlUGF5bWVudFZpZXdDb250cm9sbGVyLlxuICAgKi9cbiAgbWVyY2hhbnRQcml2YWN5UG9saWN5VVJMPzogc3RyaW5nO1xuICAvKipcbiAgICogVVJMIG9mIHlvdXIgY29tcGFueSdzIHVzZXIgYWdyZWVtZW50LCB3aGljaCB3aWxsIGJlIG9mZmVyZWQgdG8gdGhlIHVzZXIgd2hlbiByZXF1ZXN0aW5nIGNvbnNlbnQgdmlhIGEgUGF5UGFsRnV0dXJlUGF5bWVudFZpZXdDb250cm9sbGVyLlxuICAgKi9cbiAgbWVyY2hhbnRVc2VyQWdyZWVtZW50VVJMPzogc3RyaW5nO1xuICAvKipcbiAgICogSWYgc2V0IHRvIE5PLCB0aGUgU0RLIHdpbGwgb25seSBzdXBwb3J0IHBheWluZyB3aXRoIFBheVBhbCwgbm90IHdpdGggY3JlZGl0IGNhcmRzLlxuICAgKiBUaGlzIGFwcGxpZXMgb25seSB0byBzaW5nbGUgcGF5bWVudHMgKHZpYSBQYXlQYWxQYXltZW50Vmlld0NvbnRyb2xsZXIpLlxuICAgKiBGdXR1cmUgcGF5bWVudHMgKHZpYSBQYXlQYWxGdXR1cmVQYXltZW50Vmlld0NvbnRyb2xsZXIpIGFsd2F5cyB1c2UgUGF5UGFsLlxuICAgKiBEZWZhdWx0cyB0byB0cnVlXG4gICAqL1xuICBhY2NlcHRDcmVkaXRDYXJkcz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBGb3Igc2luZ2xlIHBheW1lbnRzLCBvcHRpb25zIGZvciB0aGUgc2hpcHBpbmcgYWRkcmVzcy5cbiAgICogLSAwIC0gUGF5UGFsU2hpcHBpbmdBZGRyZXNzT3B0aW9uTm9uZTogbm8gc2hpcHBpbmcgYWRkcmVzcyBhcHBsaWVzLlxuICAgKiAtIDEgLSBQYXlQYWxTaGlwcGluZ0FkZHJlc3NPcHRpb25Qcm92aWRlZDogc2hpcHBpbmcgYWRkcmVzcyB3aWxsIGJlIHByb3ZpZGVkIGJ5IHlvdXIgYXBwLFxuICAgKiAgIGluIHRoZSBzaGlwcGluZ0FkZHJlc3MgcHJvcGVydHkgb2YgUGF5UGFsUGF5bWVudC5cbiAgICogLSAyIC0gUGF5UGFsU2hpcHBpbmdBZGRyZXNzT3B0aW9uUGF5UGFsOiB1c2VyIHdpbGwgY2hvb3NlIGZyb20gc2hpcHBpbmcgYWRkcmVzc2VzIG9uIGZpbGVcbiAgICogICBmb3IgdGhlaXIgUGF5UGFsIGFjY291bnQuXG4gICAqIC0gMyAtIFBheVBhbFNoaXBwaW5nQWRkcmVzc09wdGlvbkJvdGg6IHVzZXIgd2lsbCBjaG9vc2UgZnJvbSB0aGUgc2hpcHBpbmcgYWRkcmVzcyBwcm92aWRlZCBieSB5b3VyIGFwcCxcbiAgICogICBpbiB0aGUgc2hpcHBpbmdBZGRyZXNzIHByb3BlcnR5IG9mIFBheVBhbFBheW1lbnQsIHBsdXMgdGhlIHNoaXBwaW5nIGFkZHJlc3NlcyBvbiBmaWxlIGZvciB0aGUgdXNlcidzIFBheVBhbCBhY2NvdW50LlxuICAgKiBEZWZhdWx0cyB0byAwIChQYXlQYWxTaGlwcGluZ0FkZHJlc3NPcHRpb25Ob25lKS5cbiAgICovXG4gIHBheVBhbFNoaXBwaW5nQWRkcmVzc09wdGlvbj86IG51bWJlcjtcbiAgLyoqXG4gICAqIElmIHNldCB0byBZRVMsIHRoZW4gaWYgdGhlIHVzZXIgcGF5cyB2aWEgdGhlaXIgUGF5UGFsIGFjY291bnQsXG4gICAqIHRoZSBTREsgd2lsbCByZW1lbWJlciB0aGUgdXNlcidzIFBheVBhbCB1c2VybmFtZSBvciBwaG9uZSBudW1iZXI7XG4gICAqIGlmIHRoZSB1c2VyIHBheXMgdmlhIHRoZWlyIGNyZWRpdCBjYXJkLCB0aGVuIHRoZSBTREsgd2lsbCByZW1lbWJlclxuICAgKiB0aGUgUGF5UGFsIFZhdWx0IHRva2VuIHJlcHJlc2VudGluZyB0aGUgdXNlcidzIGNyZWRpdCBjYXJkLlxuICAgKlxuICAgKiBJZiBzZXQgdG8gTk8sIHRoZW4gYW55IHByZXZpb3VzbHktcmVtZW1iZXJlZCB1c2VybmFtZSwgcGhvbmUgbnVtYmVyLCBvclxuICAgKiBjcmVkaXQgY2FyZCB0b2tlbiB3aWxsIGJlIGVyYXNlZCwgYW5kIHN1YnNlcXVlbnQgcGF5bWVudCBpbmZvcm1hdGlvbiB3aWxsXG4gICAqIG5vdCBiZSByZW1lbWJlcmVkLlxuICAgKlxuICAgKiBEZWZhdWx0cyB0byBZRVMuXG4gICAqL1xuICByZW1lbWJlclVzZXI/OiBib29sZWFuO1xuICAvKipcbiAgICogSWYgbm90IHNldCwgb3IgaWYgc2V0IHRvIG5pbCwgZGVmYXVsdHMgdG8gdGhlIGRldmljZSdzIGN1cnJlbnQgbGFuZ3VhZ2Ugc2V0dGluZy5cbiAgICpcbiAgICogQ2FuIGJlIHNwZWNpZmllZCBhcyBhIGxhbmd1YWdlIGNvZGUgKFwiZW5cIiwgXCJmclwiLCBcInpoLUhhbnNcIiwgZXRjLikgb3IgYXMgYSBsb2NhbGUgKFwiZW5fQVVcIiwgXCJmcl9GUlwiLCBcInpoLUhhbnRfSEtcIiwgZXRjLikuXG4gICAqIElmIHRoZSBsaWJyYXJ5IGRvZXMgbm90IGNvbnRhaW4gbG9jYWxpemVkIHN0cmluZ3MgZm9yIGEgc3BlY2lmaWVkIGxvY2FsZSwgdGhlbiB3aWxsIGZhbGwgYmFjayB0byB0aGUgbGFuZ3VhZ2UuIEUuZy4sIFwiZXNfQ09cIiAtPiBcImVzXCIuXG4gICAqIElmIHRoZSBsaWJyYXJ5IGRvZXMgbm90IGNvbnRhaW4gbG9jYWxpemVkIHN0cmluZ3MgZm9yIGEgc3BlY2lmaWVkIGxhbmd1YWdlLCB0aGVuIHdpbGwgZmFsbCBiYWNrIHRvIEFtZXJpY2FuIEVuZ2xpc2guXG4gICAqXG4gICAqIElmIHlvdSBzcGVjaWZ5IG9ubHkgYSBsYW5ndWFnZSBjb2RlLCBhbmQgdGhhdCBjb2RlIG1hdGNoZXMgdGhlIGRldmljZSdzIGN1cnJlbnRseSBwcmVmZXJyZWQgbGFuZ3VhZ2UsXG4gICAqIHRoZW4gdGhlIGxpYnJhcnkgd2lsbCBhdHRlbXB0IHRvIHVzZSB0aGUgZGV2aWNlJ3MgY3VycmVudCByZWdpb24gYXMgd2VsbC5cbiAgICogRS5nLiwgc3BlY2lmeWluZyBcImVuXCIgb24gYSBkZXZpY2Ugc2V0IHRvIFwiRW5nbGlzaFwiIGFuZCBcIlVuaXRlZCBLaW5nZG9tXCIgd2lsbCByZXN1bHQgaW4gXCJlbl9HQlwiLlxuICAgKi9cbiAgbGFuZ3VhZ2VPckxvY2FsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIE5vcm1hbGx5LCB0aGUgU0RLIGJsdXJzIHRoZSBzY3JlZW4gd2hlbiB0aGUgYXBwIGlzIGJhY2tncm91bmRlZCxcbiAgICogdG8gb2JzY3VyZSBjcmVkaXQgY2FyZCBvciBQYXlQYWwgYWNjb3VudCBkZXRhaWxzIGluIHRoZSBpT1Mtc2F2ZWQgc2NyZWVuc2hvdC5cbiAgICogSWYgeW91ciBhcHAgYWxyZWFkeSBkb2VzIGl0cyBvd24gYmx1cnJpbmcgdXBvbiBiYWNrZ3JvdW5kaW5nLCB5b3UgbWlnaHQgY2hvb3NlIHRvIGRpc2FibGUgdGhpcy5cbiAgICogRGVmYXVsdHMgdG8gTk8uXG4gICAqL1xuICBkaXNhYmxlQmx1cldoZW5CYWNrZ3JvdW5kaW5nPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIElmIHlvdSB3aWxsIHByZXNlbnQgdGhlIFNESydzIHZpZXcgY29udHJvbGxlciB3aXRoaW4gYSBwb3BvdmVyLCB0aGVuIHNldCB0aGlzIHByb3BlcnR5IHRvIFlFUy5cbiAgICogRGVmYXVsdHMgdG8gTk8uIChpT1Mgb25seSlcbiAgICovXG4gIHByZXNlbnRpbmdJblBvcG92ZXI/OiBib29sZWFuO1xuICAvKipcbiAgICogU2FuZGJveCBjcmVkZW50aWFscyBjYW4gYmUgZGlmZmljdWx0IHRvIHR5cGUgb24gYSBtb2JpbGUgZGV2aWNlLiBTZXR0aW5nIHRoaXMgZmxhZyB0byBZRVMgd2lsbFxuICAgKiBjYXVzZSB0aGUgc2FuZGJveFVzZXJQYXNzd29yZCBhbmQgc2FuZGJveFVzZXJQaW4gdG8gYWx3YXlzIGJlIHByZS1wb3B1bGF0ZWQgaW50byBsb2dpbiBmaWVsZHMuXG4gICAqL1xuICBmb3JjZURlZmF1bHRzSW5TYW5kYm94PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFBhc3N3b3JkIHRvIHVzZSBmb3Igc2FuZGJveCBpZiAnZm9yY2VEZWZhdWx0c0luU2FuZGJveCcgaXMgc2V0LlxuICAgKi9cbiAgc2FuZGJveFVzZXJQYXNzd29yZD86IHN0cmluZztcbiAgLyoqXG4gICAqIFBJTiB0byB1c2UgZm9yIHNhbmRib3ggaWYgJ2ZvcmNlRGVmYXVsdHNJblNhbmRib3gnIGlzIHNldC5cbiAgICovXG4gIHNhbmRib3hVc2VyUGluPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgUGF5UGFsQ29uZmlndXJhdGlvbiBpbXBsZW1lbnRzIFBheVBhbENvbmZpZ3VyYXRpb25PcHRpb25zIHtcbiAgLyoqXG4gICAqIFlvdSB1c2UgYSBQYXlQYWxDb25maWd1cmF0aW9uIG9iamVjdCB0byBjb25maWd1cmUgbWFueSBhc3BlY3RzIG9mIGhvdyB0aGUgU0RLIGJlaGF2ZXMuXG4gICAqIHNlZSBkZWZhdWx0cyBmb3Igb3B0aW9ucyBhdmFpbGFibGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBQYXlQYWxDb25maWd1cmF0aW9uT3B0aW9ucykge1xuICAgIGNvbnN0IGRlZmF1bHRzOiBQYXlQYWxDb25maWd1cmF0aW9uT3B0aW9ucyA9IHtcbiAgICAgIGRlZmF1bHRVc2VyRW1haWw6IG51bGwsXG4gICAgICBkZWZhdWx0VXNlclBob25lQ291bnRyeUNvZGU6IG51bGwsXG4gICAgICBkZWZhdWx0VXNlclBob25lTnVtYmVyOiBudWxsLFxuICAgICAgbWVyY2hhbnROYW1lOiBudWxsLFxuICAgICAgbWVyY2hhbnRQcml2YWN5UG9saWN5VVJMOiBudWxsLFxuICAgICAgbWVyY2hhbnRVc2VyQWdyZWVtZW50VVJMOiBudWxsLFxuICAgICAgYWNjZXB0Q3JlZGl0Q2FyZHM6IHRydWUsXG4gICAgICBwYXlQYWxTaGlwcGluZ0FkZHJlc3NPcHRpb246IDAsXG4gICAgICByZW1lbWJlclVzZXI6IHRydWUsXG4gICAgICBsYW5ndWFnZU9yTG9jYWxlOiBudWxsLFxuICAgICAgZGlzYWJsZUJsdXJXaGVuQmFja2dyb3VuZGluZzogZmFsc2UsXG4gICAgICBwcmVzZW50aW5nSW5Qb3BvdmVyOiBmYWxzZSxcbiAgICAgIGZvcmNlRGVmYXVsdHNJblNhbmRib3g6IGZhbHNlLFxuICAgICAgc2FuZGJveFVzZXJQYXNzd29yZDogbnVsbCxcbiAgICAgIHNhbmRib3hVc2VyUGluOiBudWxsXG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgZm9yIChjb25zdCBpIGluIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGRlZmF1bHRzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgZGVmYXVsdHNbaV0gPSBvcHRpb25zW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgUGF5UGFsU2hpcHBpbmdBZGRyZXNzIHtcbiAgLyoqXG4gICAqIFNlZSB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGUgaW5kaXZpZHVhbCBwcm9wZXJ0aWVzIGZvciBtb3JlIGRldGFpbC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHJlY2lwaWVudE5hbWU6IE5hbWUgb2YgdGhlIHJlY2lwaWVudCBhdCB0aGlzIGFkZHJlc3MuIDUwIGNoYXJhY3RlcnMgbWF4LlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbGluZTE6IExpbmUgMSBvZiB0aGUgYWRkcmVzcyAoZS5nLiwgTnVtYmVyLCBzdHJlZXQsIGV0YykuIDEwMCBjaGFyYWN0ZXJzIG1heC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGxpbmUyOiBMaW5lIDIgb2YgdGhlIGFkZHJlc3MgKGUuZy4sIFN1aXRlLCBhcHQgIywgZXRjKS4gMTAwIGNoYXJhY3RlcnMgbWF4LiBPcHRpb25hbC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGNpdHk6IENpdHkgbmFtZS4gNTAgY2hhcmFjdGVycyBtYXguXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZTogMi1sZXR0ZXIgY29kZSBmb3IgVVMgc3RhdGVzLCBhbmQgdGhlIGVxdWl2YWxlbnQgZm9yIG90aGVyIGNvdW50cmllcy4gMTAwIGNoYXJhY3RlcnMgbWF4LiBSZXF1aXJlZCBpbiBjZXJ0YWluIGNvdW50cmllcy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHBvc3RhbENvZGU6IFpJUCBjb2RlIG9yIGVxdWl2YWxlbnQgaXMgdXN1YWxseSByZXF1aXJlZCBmb3IgY291bnRyaWVzIHRoYXQgaGF2ZSB0aGVtLiAyMCBjaGFyYWN0ZXJzIG1heC4gUmVxdWlyZWQgaW4gY2VydGFpbiBjb3VudHJpZXMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb3VudHJ5Q29kZTogMi1sZXR0ZXIgY291bnRyeSBjb2RlLiAyIGNoYXJhY3RlcnMgbWF4LlxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcmVjaXBpZW50TmFtZTogc3RyaW5nLFxuICAgIGxpbmUxOiBzdHJpbmcsXG4gICAgbGluZTI6IHN0cmluZyxcbiAgICBjaXR5OiBzdHJpbmcsXG4gICAgc3RhdGU6IHN0cmluZyxcbiAgICBwb3N0YWxDb2RlOiBzdHJpbmcsXG4gICAgY291bnRyeUNvZGU6IHN0cmluZ1xuICApIHtcbiAgICB0aGlzLnJlY2lwaWVudE5hbWUgPSByZWNpcGllbnROYW1lO1xuICAgIHRoaXMubGluZTEgPSBsaW5lMTtcbiAgICB0aGlzLmxpbmUyID0gbGluZTI7XG4gICAgdGhpcy5jaXR5ID0gY2l0eTtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy5wb3N0YWxDb2RlID0gcG9zdGFsQ29kZTtcbiAgICB0aGlzLmNvdW50cnlDb2RlID0gY291bnRyeUNvZGU7XG4gIH1cbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIHJlY2lwaWVudCBhdCB0aGlzIGFkZHJlc3MuIDUwIGNoYXJhY3RlcnMgbWF4LlxuICAgKi9cbiAgcmVjaXBpZW50TmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogTGluZSAxIG9mIHRoZSBhZGRyZXNzIChlLmcuLCBOdW1iZXIsIHN0cmVldCwgZXRjKS4gMTAwIGNoYXJhY3RlcnMgbWF4LlxuICAgKi9cbiAgbGluZTE6IHN0cmluZztcbiAgLyoqXG4gICAqIExpbmUgMiBvZiB0aGUgYWRkcmVzcyAoZS5nLiwgU3VpdGUsIGFwdCAjLCBldGMpLiAxMDAgY2hhcmFjdGVycyBtYXguIE9wdGlvbmFsLlxuICAgKi9cbiAgbGluZTI6IHN0cmluZztcbiAgLyoqXG4gICAqIENpdHkgbmFtZS4gNTAgY2hhcmFjdGVycyBtYXguXG4gICAqL1xuICBjaXR5OiBzdHJpbmc7XG4gIC8qKlxuICAgKiAyLWxldHRlciBjb2RlIGZvciBVUyBzdGF0ZXMsIGFuZCB0aGUgZXF1aXZhbGVudCBmb3Igb3RoZXIgY291bnRyaWVzLiAxMDAgY2hhcmFjdGVycyBtYXguIFJlcXVpcmVkIGluIGNlcnRhaW4gY291bnRyaWVzLlxuICAgKi9cbiAgc3RhdGU6IHN0cmluZztcbiAgLyoqXG4gICAqIFpJUCBjb2RlIG9yIGVxdWl2YWxlbnQgaXMgdXN1YWxseSByZXF1aXJlZCBmb3IgY291bnRyaWVzIHRoYXQgaGF2ZSB0aGVtLiAyMCBjaGFyYWN0ZXJzIG1heC4gUmVxdWlyZWQgaW4gY2VydGFpbiBjb3VudHJpZXMuXG4gICAqL1xuICBwb3N0YWxDb2RlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiAyLWxldHRlciBjb3VudHJ5IGNvZGUuIDIgY2hhcmFjdGVycyBtYXguXG4gICAqL1xuICBjb3VudHJ5Q29kZTogc3RyaW5nO1xufVxuIl19

/***/ }),

/***/ "./node_modules/ionic2-calendar/calendar.js":
/*!**************************************************!*\
  !*** ./node_modules/ionic2-calendar/calendar.js ***!
  \**************************************************/
/*! exports provided: Step, CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step", function() { return Step; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.service */ "./node_modules/ionic2-calendar/calendar.service.js");



var Step;
(function (Step) {
    Step[Step["QuarterHour"] = 15] = "QuarterHour";
    Step[Step["HalfHour"] = 30] = "HalfHour";
    Step[Step["Hour"] = 60] = "Hour";
})(Step || (Step = {}));
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(calendarService, appLocale) {
        this.calendarService = calendarService;
        this.appLocale = appLocale;
        this.eventSource = [];
        this.calendarMode = 'month';
        this.formatDay = 'd';
        this.formatDayHeader = 'EEE';
        this.formatDayTitle = 'MMMM dd, yyyy';
        this.formatWeekTitle = 'MMMM yyyy, \'Week\' w';
        this.formatMonthTitle = 'MMMM yyyy';
        this.formatWeekViewDayHeader = 'EEE d';
        this.formatHourColumn = 'ha';
        this.showEventDetail = true;
        this.startingDayMonth = 0;
        this.startingDayWeek = 0;
        this.allDayLabel = 'all day';
        this.noEventsLabel = 'No Events';
        this.queryMode = 'local';
        this.step = Step.Hour;
        this.timeInterval = 60;
        this.autoSelect = true;
        this.dir = "";
        this.scrollToHour = 0;
        this.preserveScrollPosition = false;
        this.lockSwipeToPrev = false;
        this.lockSwipes = false;
        this.locale = "";
        this.startHour = 0;
        this.endHour = 24;
        this.spaceBetween = 0;
        this.onCurrentDateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEventSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTimeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTitleChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hourParts = 1;
        this.hourSegments = 1;
        this.locale = appLocale;
    }
    Object.defineProperty(CalendarComponent.prototype, "currentDate", {
        get: function () {
            return this._currentDate;
        },
        set: function (val) {
            if (!val) {
                val = new Date();
            }
            this._currentDate = val;
            this.calendarService.setCurrentDate(val, true);
            this.onCurrentDateChanged.emit(this._currentDate);
        },
        enumerable: true,
        configurable: true
    });
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.autoSelect) {
            if (this.autoSelect.toString() === 'false') {
                this.autoSelect = false;
            }
            else {
                this.autoSelect = true;
            }
        }
        this.hourSegments = 60 / this.timeInterval;
        this.hourParts = 60 / this.step;
        if (this.hourParts <= this.hourSegments) {
            this.hourParts = 1;
        }
        else {
            this.hourParts = this.hourParts / this.hourSegments;
        }
        this.startHour = parseInt(this.startHour.toString());
        this.endHour = parseInt(this.endHour.toString());
        this.calendarService.queryMode = this.queryMode;
        this.currentDateChangedFromChildrenSubscription = this.calendarService.currentDateChangedFromChildren$.subscribe(function (currentDate) {
            _this._currentDate = currentDate;
            _this.onCurrentDateChanged.emit(currentDate);
        });
    };
    CalendarComponent.prototype.ngOnDestroy = function () {
        if (this.currentDateChangedFromChildrenSubscription) {
            this.currentDateChangedFromChildrenSubscription.unsubscribe();
            this.currentDateChangedFromChildrenSubscription = null;
        }
    };
    CalendarComponent.prototype.rangeChanged = function (range) {
        this.onRangeChanged.emit(range);
    };
    CalendarComponent.prototype.eventSelected = function (event) {
        this.onEventSelected.emit(event);
    };
    CalendarComponent.prototype.timeSelected = function (timeSelected) {
        this.onTimeSelected.emit(timeSelected);
    };
    CalendarComponent.prototype.titleChanged = function (title) {
        this.onTitleChanged.emit(title);
    };
    CalendarComponent.prototype.loadEvents = function () {
        this.calendarService.loadEvents();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Date])
    ], CalendarComponent.prototype, "currentDate", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CalendarComponent.prototype, "eventSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "calendarMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "formatDay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "formatDayHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "formatDayTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "formatWeekTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "formatMonthTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "formatWeekViewDayHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "formatHourColumn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CalendarComponent.prototype, "showEventDetail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CalendarComponent.prototype, "startingDayMonth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CalendarComponent.prototype, "startingDayWeek", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "allDayLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "noEventsLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "queryMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CalendarComponent.prototype, "step", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CalendarComponent.prototype, "timeInterval", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CalendarComponent.prototype, "autoSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], CalendarComponent.prototype, "markDisabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "monthviewDisplayEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "monthviewInactiveDisplayEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "monthviewEventDetailTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "weekviewHeaderTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "weekviewAllDayEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "weekviewNormalEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "dayviewAllDayEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "dayviewNormalEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "weekviewAllDayEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "weekviewNormalEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "dayviewAllDayEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "dayviewNormalEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarComponent.prototype, "dateFormatter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "dir", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CalendarComponent.prototype, "scrollToHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CalendarComponent.prototype, "preserveScrollPosition", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CalendarComponent.prototype, "lockSwipeToPrev", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CalendarComponent.prototype, "lockSwipes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "locale", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CalendarComponent.prototype, "startHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CalendarComponent.prototype, "endHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CalendarComponent.prototype, "spaceBetween", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarComponent.prototype, "onCurrentDateChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarComponent.prototype, "onRangeChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarComponent.prototype, "onEventSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarComponent.prototype, "onTimeSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarComponent.prototype, "onTitleChanged", void 0);
    CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'calendar',
            template: "\n        <ng-template #monthviewDefaultDisplayEventTemplate let-view=\"view\" let-row=\"row\" let-col=\"col\">\n            {{view.dates[row*7+col].label}}\n        </ng-template>\n        <ng-template #monthviewDefaultEventDetailTemplate let-showEventDetail=\"showEventDetail\" let-selectedDate=\"selectedDate\" let-noEventsLabel=\"noEventsLabel\">\n            <ion-list class=\"event-detail-container\" has-bouncing=\"false\" *ngIf=\"showEventDetail\" overflow-scroll=\"false\">\n                <ion-item *ngFor=\"let event of selectedDate?.events\" (click)=\"eventSelected(event)\">\n                        <span *ngIf=\"!event.allDay\" class=\"monthview-eventdetail-timecolumn\">{{event.startTime|date: 'HH:mm'}}\n                            -\n                            {{event.endTime|date: 'HH:mm'}}\n                        </span>\n                    <span *ngIf=\"event.allDay\" class=\"monthview-eventdetail-timecolumn\">{{allDayLabel}}</span>\n                    <span class=\"event-detail\">  |  {{event.title}}</span>\n                </ion-item>\n                <ion-item *ngIf=\"selectedDate?.events.length==0\">\n                    <div class=\"no-events-label\">{{noEventsLabel}}</div>\n                </ion-item>\n            </ion-list>\n        </ng-template>\n        <ng-template #defaultWeekviewHeaderTemplate let-viewDate=\"viewDate\">\n            {{ viewDate.dayHeader }}\n        </ng-template>\n        <ng-template #defaultAllDayEventTemplate let-displayEvent=\"displayEvent\">\n            <div class=\"calendar-event-inner\">{{displayEvent.event.title}}</div>\n        </ng-template>\n        <ng-template #defaultNormalEventTemplate let-displayEvent=\"displayEvent\">\n            <div class=\"calendar-event-inner\">{{displayEvent.event.title}}</div>\n        </ng-template>\n        <ng-template #defaultWeekViewAllDayEventSectionTemplate let-day=\"day\" let-eventTemplate=\"eventTemplate\">\n            <div [ngClass]=\"{'calendar-event-wrap': day.events}\" *ngIf=\"day.events\"\n                 [ngStyle]=\"{height: 25*day.events.length+'px'}\">\n                <div *ngFor=\"let displayEvent of day.events\" class=\"calendar-event\" tappable\n                     (click)=\"eventSelected(displayEvent.event)\"\n                     [ngStyle]=\"{top: 25*displayEvent.position+'px', width: 100*(displayEvent.endIndex-displayEvent.startIndex)+'%', height: '25px'}\">\n                    <ng-template [ngTemplateOutlet]=\"eventTemplate\"\n                                 [ngTemplateOutletContext]=\"{displayEvent:displayEvent}\">\n                    </ng-template>\n                </div>\n            </div>\n        </ng-template>\n        <ng-template #defaultDayViewAllDayEventSectionTemplate let-allDayEvents=\"allDayEvents\" let-eventTemplate=\"eventTemplate\">\n            <div *ngFor=\"let displayEvent of allDayEvents; let eventIndex=index\"\n                 class=\"calendar-event\" tappable\n                 (click)=\"eventSelected(displayEvent.event)\"\n                 [ngStyle]=\"{top: 25*eventIndex+'px',width: '100%',height:'25px'}\">\n                <ng-template [ngTemplateOutlet]=\"eventTemplate\"\n                             [ngTemplateOutletContext]=\"{displayEvent:displayEvent}\">\n                </ng-template>\n            </div>\n        </ng-template>\n        <ng-template #defaultNormalEventSectionTemplate let-tm=\"tm\" let-hourParts=\"hourParts\" let-eventTemplate=\"eventTemplate\">\n            <div [ngClass]=\"{'calendar-event-wrap': tm.events}\" *ngIf=\"tm.events\">\n                <div *ngFor=\"let displayEvent of tm.events\" class=\"calendar-event\" tappable\n                     (click)=\"eventSelected(displayEvent.event)\"\n                     [ngStyle]=\"{top: (37*displayEvent.startOffset/hourParts)+'px',left: 100/displayEvent.overlapNumber*displayEvent.position+'%', width: 100/displayEvent.overlapNumber+'%', height: 37*(displayEvent.endIndex -displayEvent.startIndex - (displayEvent.endOffset + displayEvent.startOffset)/hourParts)+'px'}\">\n                    <ng-template [ngTemplateOutlet]=\"eventTemplate\"\n                                 [ngTemplateOutletContext]=\"{displayEvent:displayEvent}\">\n                    </ng-template>\n                </div>\n            </div>\n        </ng-template>\n\n        <div [ngSwitch]=\"calendarMode\" class=\"{{calendarMode}}view-container\">\n            <monthview *ngSwitchCase=\"'month'\"\n                [formatDay]=\"formatDay\"\n                [formatDayHeader]=\"formatDayHeader\"\n                [formatMonthTitle]=\"formatMonthTitle\"\n                [startingDayMonth]=\"startingDayMonth\"\n                [showEventDetail]=\"showEventDetail\"\n                [noEventsLabel]=\"noEventsLabel\"\n                [autoSelect]=\"autoSelect\"\n                [eventSource]=\"eventSource\"\n                [markDisabled]=\"markDisabled\"\n                [monthviewDisplayEventTemplate]=\"monthviewDisplayEventTemplate||monthviewDefaultDisplayEventTemplate\"\n                [monthviewInactiveDisplayEventTemplate]=\"monthviewInactiveDisplayEventTemplate||monthviewDefaultDisplayEventTemplate\"\n                [monthviewEventDetailTemplate]=\"monthviewEventDetailTemplate||monthviewDefaultEventDetailTemplate\"\n                [locale]=\"locale\"\n                [dateFormatter]=\"dateFormatter\"\n                [dir]=\"dir\"\n                [lockSwipeToPrev]=\"lockSwipeToPrev\"\n                [lockSwipes]=\"lockSwipes\"\n                [spaceBetween]=\"spaceBetween\"\n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </monthview>\n            <weekview *ngSwitchCase=\"'week'\"\n                [formatWeekTitle]=\"formatWeekTitle\"\n                [formatWeekViewDayHeader]=\"formatWeekViewDayHeader\"\n                [formatHourColumn]=\"formatHourColumn\"\n                [startingDayWeek]=\"startingDayWeek\"\n                [allDayLabel]=\"allDayLabel\"\n                [hourParts]=\"hourParts\"\n                [autoSelect]=\"autoSelect\"\n                [hourSegments]=\"hourSegments\"\n                [eventSource]=\"eventSource\"\n                [markDisabled]=\"markDisabled\"\n                [weekviewHeaderTemplate]=\"weekviewHeaderTemplate||defaultWeekviewHeaderTemplate\"\n                [weekviewAllDayEventTemplate]=\"weekviewAllDayEventTemplate||defaultAllDayEventTemplate\"\n                [weekviewNormalEventTemplate]=\"weekviewNormalEventTemplate||defaultNormalEventTemplate\"\n                [weekviewAllDayEventSectionTemplate]=\"weekviewAllDayEventSectionTemplate||defaultWeekViewAllDayEventSectionTemplate\"\n                [weekviewNormalEventSectionTemplate]=\"weekviewNormalEventSectionTemplate||defaultNormalEventSectionTemplate\"\n                [locale]=\"locale\"\n                [dateFormatter]=\"dateFormatter\"\n                [dir]=\"dir\"\n                [scrollToHour]=\"scrollToHour\"\n                [preserveScrollPosition]=\"preserveScrollPosition\"\n                [lockSwipeToPrev]=\"lockSwipeToPrev\"\n                [lockSwipes]=\"lockSwipes\"\n                [startHour]=\"startHour\"\n                [endHour]=\"endHour\"\n                [spaceBetween]=\"spaceBetween\"\n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </weekview>\n            <dayview *ngSwitchCase=\"'day'\"\n                [formatDayTitle]=\"formatDayTitle\"\n                [formatHourColumn]=\"formatHourColumn\"\n                [allDayLabel]=\"allDayLabel\"\n                [hourParts]=\"hourParts\"\n                [hourSegments]=\"hourSegments\"\n                [eventSource]=\"eventSource\"\n                [markDisabled]=\"markDisabled\"\n                [dayviewAllDayEventTemplate]=\"dayviewAllDayEventTemplate||defaultAllDayEventTemplate\"\n                [dayviewNormalEventTemplate]=\"dayviewNormalEventTemplate||defaultNormalEventTemplate\"\n                [dayviewAllDayEventSectionTemplate]=\"dayviewAllDayEventSectionTemplate||defaultDayViewAllDayEventSectionTemplate\" \n                [dayviewNormalEventSectionTemplate]=\"dayviewNormalEventSectionTemplate||defaultNormalEventSectionTemplate\"\n                [locale]=\"locale\"\n                [dateFormatter]=\"dateFormatter\"\n                [dir]=\"dir\"\n                [scrollToHour]=\"scrollToHour\"\n                [preserveScrollPosition]=\"preserveScrollPosition\"\n                [lockSwipeToPrev]=\"lockSwipeToPrev\"\n                [lockSwipes]=\"lockSwipes\"\n                [startHour]=\"startHour\"\n                [endHour]=\"endHour\"\n                [spaceBetween]=\"spaceBetween\"\n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </dayview>\n        </div>\n    ",
            styles: ["\n        :host > div { height: 100%; }\n\n        .event-detail-container {\n          border-top: 2px darkgrey solid;\n        }\n\n        .no-events-label {\n          font-weight: bold;\n          color: darkgrey;\n          text-align: center;\n        }\n\n        .event-detail {\n          cursor: pointer;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n        }\n\n        .monthview-eventdetail-timecolumn {\n          width: 110px;\n          overflow: hidden;\n        }\n\n        .calendar-event-inner {\n          overflow: hidden;\n          background-color: #3a87ad;\n          color: white;\n          height: 100%;\n          width: 100%;\n          padding: 2px;\n          line-height: 15px;\n          text-align: initial;\n        }\n\n        @media (max-width: 750px) {\n          .calendar-event-inner {\n            font-size: 12px;\n          }\n        }\n    "],
            providers: [_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"], String])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./node_modules/ionic2-calendar/calendar.module.js":
/*!*********************************************************!*\
  !*** ./node_modules/ionic2-calendar/calendar.module.js ***!
  \*********************************************************/
/*! exports provided: NgCalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgCalendarModule", function() { return NgCalendarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _monthview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./monthview */ "./node_modules/ionic2-calendar/monthview.js");
/* harmony import */ var _weekview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weekview */ "./node_modules/ionic2-calendar/weekview.js");
/* harmony import */ var _dayview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dayview */ "./node_modules/ionic2-calendar/dayview.js");
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calendar */ "./node_modules/ionic2-calendar/calendar.js");
/* harmony import */ var _init_position_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./init-position-scroll */ "./node_modules/ionic2-calendar/init-position-scroll.js");









var NgCalendarModule = /** @class */ (function () {
    function NgCalendarModule() {
    }
    NgCalendarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _monthview__WEBPACK_IMPORTED_MODULE_4__["MonthViewComponent"], _weekview__WEBPACK_IMPORTED_MODULE_5__["WeekViewComponent"], _dayview__WEBPACK_IMPORTED_MODULE_6__["DayViewComponent"], _calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"], _init_position_scroll__WEBPACK_IMPORTED_MODULE_8__["initPositionScrollComponent"]
            ],
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"]],
            entryComponents: [_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"]]
        })
    ], NgCalendarModule);
    return NgCalendarModule;
}());



/***/ }),

/***/ "./node_modules/ionic2-calendar/calendar.service.js":
/*!**********************************************************!*\
  !*** ./node_modules/ionic2-calendar/calendar.service.js ***!
  \**********************************************************/
/*! exports provided: CalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarService", function() { return CalendarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var CalendarService = /** @class */ (function () {
    function CalendarService() {
        this.currentDateChangedFromParent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentDateChangedFromChildren = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.eventSourceChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentDateChangedFromParent$ = this.currentDateChangedFromParent.asObservable();
        this.currentDateChangedFromChildren$ = this.currentDateChangedFromChildren.asObservable();
        this.eventSourceChanged$ = this.eventSourceChanged.asObservable();
    }
    CalendarService.prototype.setCurrentDate = function (val, fromParent) {
        if (fromParent === void 0) { fromParent = false; }
        this._currentDate = val;
        if (fromParent) {
            this.currentDateChangedFromParent.next(val);
        }
        else {
            this.currentDateChangedFromChildren.next(val);
        }
    };
    Object.defineProperty(CalendarService.prototype, "currentDate", {
        get: function () {
            return this._currentDate;
        },
        enumerable: true,
        configurable: true
    });
    CalendarService.prototype.rangeChanged = function (component) {
        if (this.queryMode === 'local') {
            if (component.eventSource && component.onDataLoaded) {
                component.onDataLoaded();
            }
        }
        else if (this.queryMode === 'remote') {
            component.onRangeChanged.emit(component.range);
        }
    };
    CalendarService.prototype.getStep = function (mode) {
        switch (mode) {
            case 'month':
                return {
                    years: 0,
                    months: 1,
                    days: 0
                };
            case 'week':
                return {
                    years: 0,
                    months: 0,
                    days: 7
                };
            case 'day':
                return {
                    years: 0,
                    months: 0,
                    days: 1
                };
        }
    };
    CalendarService.prototype.getAdjacentCalendarDate = function (mode, direction) {
        var step = this.getStep(mode);
        var calculateCalendarDate = new Date(this.currentDate.getTime()), year = calculateCalendarDate.getFullYear() + direction * step.years, month = calculateCalendarDate.getMonth() + direction * step.months, date = calculateCalendarDate.getDate() + direction * step.days;
        calculateCalendarDate.setFullYear(year, month, date);
        if (mode === 'month') {
            var firstDayInNextMonth = new Date(year, month + 1, 1);
            if (firstDayInNextMonth.getTime() <= calculateCalendarDate.getTime()) {
                calculateCalendarDate = new Date(firstDayInNextMonth.getTime() - 24 * 60 * 60 * 1000);
            }
        }
        return calculateCalendarDate;
    };
    CalendarService.prototype.getAdjacentViewStartTime = function (component, direction) {
        var adjacentCalendarDate = this.getAdjacentCalendarDate(component.mode, direction);
        return component.getRange(adjacentCalendarDate).startTime;
    };
    CalendarService.prototype.populateAdjacentViews = function (component) {
        var currentViewStartDate, currentViewData, toUpdateViewIndex, currentViewIndex = component.currentViewIndex;
        if (component.direction === 1) {
            currentViewStartDate = this.getAdjacentViewStartTime(component, 1);
            toUpdateViewIndex = (currentViewIndex + 1) % 3;
            component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
        }
        else if (component.direction === -1) {
            currentViewStartDate = this.getAdjacentViewStartTime(component, -1);
            toUpdateViewIndex = (currentViewIndex + 2) % 3;
            component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
        }
        else {
            if (!component.views) {
                currentViewData = [];
                currentViewStartDate = component.range.startTime;
                currentViewData.push(component.getViewData(currentViewStartDate));
                currentViewStartDate = this.getAdjacentViewStartTime(component, 1);
                currentViewData.push(component.getViewData(currentViewStartDate));
                currentViewStartDate = this.getAdjacentViewStartTime(component, -1);
                currentViewData.push(component.getViewData(currentViewStartDate));
                component.views = currentViewData;
            }
            else {
                currentViewStartDate = component.range.startTime;
                component.views[currentViewIndex] = component.getViewData(currentViewStartDate);
                currentViewStartDate = this.getAdjacentViewStartTime(component, -1);
                toUpdateViewIndex = (currentViewIndex + 2) % 3;
                component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
                currentViewStartDate = this.getAdjacentViewStartTime(component, 1);
                toUpdateViewIndex = (currentViewIndex + 1) % 3;
                component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
            }
        }
    };
    CalendarService.prototype.loadEvents = function () {
        this.eventSourceChanged.next();
    };
    CalendarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CalendarService);
    return CalendarService;
}());



/***/ }),

/***/ "./node_modules/ionic2-calendar/dayview.js":
/*!*************************************************!*\
  !*** ./node_modules/ionic2-calendar/dayview.js ***!
  \*************************************************/
/*! exports provided: DayViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayViewComponent", function() { return DayViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar.service */ "./node_modules/ionic2-calendar/calendar.service.js");





var DayViewComponent = /** @class */ (function () {
    function DayViewComponent(calendarService, elm) {
        this.calendarService = calendarService;
        this.elm = elm;
        this.class = true;
        this.dir = "";
        this.scrollToHour = 0;
        this.onRangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onEventSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onTimeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onTitleChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](true);
        this.views = [];
        this.currentViewIndex = 0;
        this.direction = 0;
        this.mode = 'day';
        this.inited = false;
        this.callbackOnInit = true;
    }
    DayViewComponent_1 = DayViewComponent;
    DayViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slideOptions = {
            loop: true,
            spaceBetween: this.spaceBetween
        };
        this.hourRange = (this.endHour - this.startHour) * this.hourSegments;
        if (this.dateFormatter && this.dateFormatter.formatDayViewTitle) {
            this.formatTitle = this.dateFormatter.formatDayViewTitle;
        }
        else {
            var datePipe_1 = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](this.locale);
            this.formatTitle = function (date) {
                return datePipe_1.transform(date, this.formatDayTitle);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatDayViewHourColumn) {
            this.formatHourColumnLabel = this.dateFormatter.formatDayViewHourColumn;
        }
        else {
            var datePipe_2 = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](this.locale);
            this.formatHourColumnLabel = function (date) {
                return datePipe_2.transform(date, this.formatHourColumn);
            };
        }
        if (this.lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(true);
        }
        if (this.lockSwipes) {
            this.slider.lockSwipes(true);
        }
        this.refreshView();
        this.hourColumnLabels = this.getHourColumnLabels();
        this.inited = true;
        this.currentDateChangedFromParentSubscription = this.calendarService.currentDateChangedFromParent$.subscribe(function (currentDate) {
            _this.refreshView();
        });
        this.eventSourceChangedSubscription = this.calendarService.eventSourceChanged$.subscribe(function () {
            _this.onDataLoaded();
        });
    };
    DayViewComponent.prototype.ngAfterViewInit = function () {
        var title = this.getTitle();
        this.onTitleChanged.emit(title);
        if (this.scrollToHour > 0) {
            var hourColumns_1 = this.elm.nativeElement.querySelector('.dayview-normal-event-container').querySelectorAll('.calendar-hour-column');
            var me_1 = this;
            setTimeout(function () {
                me_1.initScrollPosition = hourColumns_1[me_1.scrollToHour - me_1.startHour].offsetTop;
            }, 0);
        }
    };
    DayViewComponent.prototype.ngOnChanges = function (changes) {
        if (!this.inited)
            return;
        var eventSourceChange = changes['eventSource'];
        if (eventSourceChange && eventSourceChange.currentValue) {
            this.onDataLoaded();
        }
        var lockSwipeToPrev = changes['lockSwipeToPrev'];
        if (lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(lockSwipeToPrev.currentValue);
        }
        var lockSwipes = changes['lockSwipes'];
        if (lockSwipes) {
            this.slider.lockSwipes(lockSwipes.currentValue);
        }
    };
    DayViewComponent.prototype.ngOnDestroy = function () {
        if (this.currentDateChangedFromParentSubscription) {
            this.currentDateChangedFromParentSubscription.unsubscribe();
            this.currentDateChangedFromParentSubscription = null;
        }
        if (this.eventSourceChangedSubscription) {
            this.eventSourceChangedSubscription.unsubscribe();
            this.eventSourceChangedSubscription = null;
        }
    };
    DayViewComponent.prototype.onSlideChanged = function () {
        var _this = this;
        if (this.callbackOnInit) {
            this.callbackOnInit = false;
            return;
        }
        var direction = 0, currentViewIndex = this.currentViewIndex;
        this.slider.getActiveIndex().then(function (currentSlideIndex) {
            currentSlideIndex = (currentSlideIndex + 2) % 3;
            if (currentSlideIndex - currentViewIndex === 1) {
                direction = 1;
            }
            else if (currentSlideIndex === 0 && currentViewIndex === 2) {
                direction = 1;
                _this.slider.slideTo(1, 0, false);
            }
            else if (currentViewIndex - currentSlideIndex === 1) {
                direction = -1;
            }
            else if (currentSlideIndex === 2 && currentViewIndex === 0) {
                direction = -1;
                _this.slider.slideTo(3, 0, false);
            }
            _this.currentViewIndex = currentSlideIndex;
            _this.move(direction);
        });
    };
    DayViewComponent.prototype.move = function (direction) {
        if (direction === 0)
            return;
        this.direction = direction;
        var adjacentDate = this.calendarService.getAdjacentCalendarDate(this.mode, direction);
        this.calendarService.setCurrentDate(adjacentDate);
        this.refreshView();
        this.direction = 0;
    };
    DayViewComponent.createDateObjects = function (startTime, startHour, endHour, timeInterval) {
        var rows = [], time, currentHour = startTime.getHours(), currentDate = startTime.getDate(), hourStep, minStep;
        if (timeInterval < 1) {
            hourStep = Math.floor(1 / timeInterval);
            minStep = 60;
        }
        else {
            hourStep = 1;
            minStep = Math.floor(60 / timeInterval);
        }
        for (var hour = startHour; hour < endHour; hour += hourStep) {
            for (var interval = 0; interval < 60; interval += minStep) {
                time = new Date(startTime.getTime());
                time.setHours(currentHour + hour, interval);
                time.setDate(currentDate);
                rows.push({
                    time: time,
                    events: []
                });
            }
        }
        return rows;
    };
    DayViewComponent.prototype.getHourColumnLabels = function () {
        var hourColumnLabels = [];
        for (var hour = 0, length_1 = this.views[0].rows.length; hour < length_1; hour += 1) {
            hourColumnLabels.push(this.formatHourColumnLabel(this.views[0].rows[hour].time));
        }
        return hourColumnLabels;
    };
    DayViewComponent.prototype.getViewData = function (startTime) {
        return {
            rows: DayViewComponent_1.createDateObjects(startTime, this.startHour, this.endHour, this.hourSegments),
            allDayEvents: []
        };
    };
    DayViewComponent.prototype.getRange = function (currentDate) {
        var year = currentDate.getFullYear(), month = currentDate.getMonth(), date = currentDate.getDate(), startTime = new Date(year, month, date), endTime = new Date(year, month, date + 1);
        return {
            startTime: startTime,
            endTime: endTime
        };
    };
    DayViewComponent.prototype.onDataLoaded = function () {
        var eventSource = this.eventSource, len = eventSource ? eventSource.length : 0, startTime = this.range.startTime, endTime = this.range.endTime, utcStartTime = new Date(Date.UTC(startTime.getFullYear(), startTime.getMonth(), startTime.getDate())), utcEndTime = new Date(Date.UTC(endTime.getFullYear(), endTime.getMonth(), endTime.getDate())), currentViewIndex = this.currentViewIndex, rows = this.views[currentViewIndex].rows, allDayEvents = this.views[currentViewIndex].allDayEvents = [], oneHour = 3600000, eps = 0.016, normalEventInRange = false, rangeStartRowIndex = this.startHour * this.hourSegments, rangeEndRowIndex = this.endHour * this.hourSegments;
        for (var hour = 0; hour < this.hourRange; hour += 1) {
            rows[hour].events = [];
        }
        for (var i = 0; i < len; i += 1) {
            var event_1 = eventSource[i];
            var eventStartTime = new Date(event_1.startTime.getTime());
            var eventEndTime = new Date(event_1.endTime.getTime());
            if (event_1.allDay) {
                if (eventEndTime <= utcStartTime || eventStartTime >= utcEndTime) {
                    continue;
                }
                else {
                    allDayEvents.push({
                        event: event_1
                    });
                }
            }
            else {
                if (eventEndTime <= startTime || eventStartTime >= endTime) {
                    continue;
                }
                else {
                    normalEventInRange = true;
                }
                var timeDiff = void 0;
                var timeDifferenceStart = void 0;
                if (eventStartTime <= startTime) {
                    timeDifferenceStart = 0;
                }
                else {
                    timeDiff = eventStartTime.getTime() - startTime.getTime() - (eventStartTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                    timeDifferenceStart = timeDiff / oneHour * this.hourSegments;
                }
                var timeDifferenceEnd = void 0;
                if (eventEndTime >= endTime) {
                    timeDiff = endTime.getTime() - startTime.getTime() - (endTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                    timeDifferenceEnd = timeDiff / oneHour * this.hourSegments;
                }
                else {
                    timeDiff = eventEndTime.getTime() - startTime.getTime() - (eventEndTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                    timeDifferenceEnd = timeDiff / oneHour * this.hourSegments;
                }
                var startIndex = Math.floor(timeDifferenceStart);
                var endIndex = Math.ceil(timeDifferenceEnd - eps);
                var startOffset = 0;
                var endOffset = 0;
                if (this.hourParts !== 1) {
                    if (startIndex < rangeStartRowIndex) {
                        startOffset = 0;
                    }
                    else {
                        startOffset = Math.floor((timeDifferenceStart - startIndex) * this.hourParts);
                    }
                    if (endIndex > rangeEndRowIndex) {
                        endOffset = 0;
                    }
                    else {
                        endOffset = Math.floor((endIndex - timeDifferenceEnd) * this.hourParts);
                    }
                }
                if (startIndex < rangeStartRowIndex) {
                    startIndex = 0;
                }
                else {
                    startIndex -= rangeStartRowIndex;
                }
                if (endIndex > rangeEndRowIndex) {
                    endIndex = rangeEndRowIndex;
                }
                endIndex -= rangeStartRowIndex;
                if (startIndex < endIndex) {
                    var displayEvent = {
                        event: event_1,
                        startIndex: startIndex,
                        endIndex: endIndex,
                        startOffset: startOffset,
                        endOffset: endOffset
                    };
                    var eventSet = rows[startIndex].events;
                    if (eventSet) {
                        eventSet.push(displayEvent);
                    }
                    else {
                        eventSet = [];
                        eventSet.push(displayEvent);
                        rows[startIndex].events = eventSet;
                    }
                }
            }
        }
        if (normalEventInRange) {
            var orderedEvents = [];
            for (var hour = 0; hour < this.hourRange; hour += 1) {
                if (rows[hour].events) {
                    rows[hour].events.sort(DayViewComponent_1.compareEventByStartOffset);
                    orderedEvents = orderedEvents.concat(rows[hour].events);
                }
            }
            if (orderedEvents.length > 0) {
                this.placeEvents(orderedEvents);
            }
        }
    };
    DayViewComponent.prototype.refreshView = function () {
        this.range = this.getRange(this.calendarService.currentDate);
        if (this.inited) {
            var title = this.getTitle();
            this.onTitleChanged.emit(title);
        }
        this.calendarService.populateAdjacentViews(this);
        this.calendarService.rangeChanged(this);
    };
    DayViewComponent.prototype.getTitle = function () {
        var startingDate = new Date(this.range.startTime.getTime());
        startingDate.setHours(12, 0, 0, 0);
        return this.formatTitle(startingDate);
    };
    DayViewComponent.compareEventByStartOffset = function (eventA, eventB) {
        return eventA.startOffset - eventB.startOffset;
    };
    DayViewComponent.prototype.select = function (selectedTime, events) {
        var disabled = false;
        if (this.markDisabled) {
            disabled = this.markDisabled(selectedTime);
        }
        this.onTimeSelected.emit({
            selectedTime: selectedTime,
            events: events.map(function (e) { return e.event; }),
            disabled: disabled
        });
    };
    DayViewComponent.prototype.placeEvents = function (orderedEvents) {
        this.calculatePosition(orderedEvents);
        DayViewComponent_1.calculateWidth(orderedEvents, this.hourRange, this.hourParts);
    };
    DayViewComponent.prototype.placeAllDayEvents = function (orderedEvents) {
        this.calculatePosition(orderedEvents);
    };
    DayViewComponent.prototype.overlap = function (event1, event2) {
        var earlyEvent = event1, lateEvent = event2;
        if (event1.startIndex > event2.startIndex || (event1.startIndex === event2.startIndex && event1.startOffset > event2.startOffset)) {
            earlyEvent = event2;
            lateEvent = event1;
        }
        if (earlyEvent.endIndex <= lateEvent.startIndex) {
            return false;
        }
        else {
            return !(earlyEvent.endIndex - lateEvent.startIndex === 1 && earlyEvent.endOffset + lateEvent.startOffset >= this.hourParts);
        }
    };
    DayViewComponent.prototype.calculatePosition = function (events) {
        var len = events.length, maxColumn = 0, col, isForbidden = new Array(len);
        for (var i = 0; i < len; i += 1) {
            for (col = 0; col < maxColumn; col += 1) {
                isForbidden[col] = false;
            }
            for (var j = 0; j < i; j += 1) {
                if (this.overlap(events[i], events[j])) {
                    isForbidden[events[j].position] = true;
                }
            }
            for (col = 0; col < maxColumn; col += 1) {
                if (!isForbidden[col]) {
                    break;
                }
            }
            if (col < maxColumn) {
                events[i].position = col;
            }
            else {
                events[i].position = maxColumn++;
            }
        }
        if (this.dir === 'rtl') {
            for (var i = 0; i < len; i += 1) {
                events[i].position = maxColumn - 1 - events[i].position;
            }
        }
    };
    DayViewComponent.calculateWidth = function (orderedEvents, size, hourParts) {
        var totalSize = size * hourParts, cells = new Array(totalSize);
        // sort by position in descending order, the right most columns should be calculated first
        orderedEvents.sort(function (eventA, eventB) {
            return eventB.position - eventA.position;
        });
        for (var i_1 = 0; i_1 < totalSize; i_1 += 1) {
            cells[i_1] = {
                calculated: false,
                events: []
            };
        }
        var len = orderedEvents.length;
        for (var i_2 = 0; i_2 < len; i_2 += 1) {
            var event_2 = orderedEvents[i_2];
            var index = event_2.startIndex * hourParts + event_2.startOffset;
            while (index < event_2.endIndex * hourParts - event_2.endOffset) {
                cells[index].events.push(event_2);
                index += 1;
            }
        }
        var i = 0;
        while (i < len) {
            var event_3 = orderedEvents[i];
            if (!event_3.overlapNumber) {
                var overlapNumber = event_3.position + 1;
                event_3.overlapNumber = overlapNumber;
                var eventQueue = [event_3];
                while ((event_3 = eventQueue.shift())) {
                    var index = event_3.startIndex * hourParts + event_3.startOffset;
                    while (index < event_3.endIndex * hourParts - event_3.endOffset) {
                        if (!cells[index].calculated) {
                            cells[index].calculated = true;
                            if (cells[index].events) {
                                var eventCountInCell = cells[index].events.length;
                                for (var j = 0; j < eventCountInCell; j += 1) {
                                    var currentEventInCell = cells[index].events[j];
                                    if (!currentEventInCell.overlapNumber) {
                                        currentEventInCell.overlapNumber = overlapNumber;
                                        eventQueue.push(currentEventInCell);
                                    }
                                }
                            }
                        }
                        index += 1;
                    }
                }
            }
            i += 1;
        }
    };
    DayViewComponent.prototype.eventSelected = function (event) {
        this.onEventSelected.emit(event);
    };
    DayViewComponent.prototype.setScrollPosition = function (scrollPosition) {
        this.initScrollPosition = scrollPosition;
    };
    var DayViewComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('daySlider'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], DayViewComponent.prototype, "slider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"])('class.dayview'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DayViewComponent.prototype, "class", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], DayViewComponent.prototype, "dayviewAllDayEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], DayViewComponent.prototype, "dayviewNormalEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], DayViewComponent.prototype, "dayviewAllDayEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], DayViewComponent.prototype, "dayviewNormalEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DayViewComponent.prototype, "formatHourColumn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DayViewComponent.prototype, "formatDayTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DayViewComponent.prototype, "allDayLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DayViewComponent.prototype, "hourParts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DayViewComponent.prototype, "eventSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], DayViewComponent.prototype, "markDisabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DayViewComponent.prototype, "locale", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DayViewComponent.prototype, "dateFormatter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DayViewComponent.prototype, "dir", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DayViewComponent.prototype, "scrollToHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DayViewComponent.prototype, "preserveScrollPosition", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DayViewComponent.prototype, "lockSwipeToPrev", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DayViewComponent.prototype, "lockSwipes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DayViewComponent.prototype, "startHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DayViewComponent.prototype, "endHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DayViewComponent.prototype, "spaceBetween", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DayViewComponent.prototype, "hourSegments", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DayViewComponent.prototype, "onRangeChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DayViewComponent.prototype, "onEventSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DayViewComponent.prototype, "onTimeSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DayViewComponent.prototype, "onTitleChanged", void 0);
    DayViewComponent = DayViewComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'dayview',
            template: "\n        <ion-slides #daySlider [options]=\"slideOptions\" [dir]=\"dir\" (ionSlideDidChange)=\"onSlideChanged()\" class=\"slides-container\">\n            <ion-slide class=\"slide-container\">\n                <div class=\"dayview-allday-table\">\n                    <div class=\"dayview-allday-label\">{{allDayLabel}}</div>\n                    <div class=\"dayview-allday-content-wrapper scroll-content\">\n                        <table class=\"table table-bordered dayview-allday-content-table\">\n                            <tbody>\n                            <tr>\n                                <td class=\"calendar-cell\" [ngClass]=\"{'calendar-event-wrap':views[0].allDayEvents.length>0}\"\n                                    [ngStyle]=\"{height: 25*views[0].allDayEvents.length+'px'}\"\n                                    *ngIf=\"0===currentViewIndex\">\n                                    <ng-template [ngTemplateOutlet]=\"dayviewAllDayEventSectionTemplate\"\n                                                 [ngTemplateOutletContext]=\"{allDayEvents:views[0].allDayEvents,eventTemplate:dayviewAllDayEventTemplate}\">\n                                    </ng-template>\n                                </td>\n                                <td class=\"calendar-cell\" *ngIf=\"0!==currentViewIndex\">\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <init-position-scroll *ngIf=\"0===currentViewIndex\" class=\"dayview-normal-event-container\" [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[0].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                <ng-template [ngTemplateOutlet]=\"dayviewNormalEventSectionTemplate\"\n                                             [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts, eventTemplate:dayviewNormalEventTemplate}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n                <init-position-scroll *ngIf=\"0!==currentViewIndex\" class=\"dayview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[0].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\">\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n            </ion-slide>\n            <ion-slide class=\"slide-container\">\n                <div class=\"dayview-allday-table\">\n                    <div class=\"dayview-allday-label\">{{allDayLabel}}</div>\n                    <div class=\"dayview-allday-content-wrapper scroll-content\">\n                        <table class=\"table table-bordered dayview-allday-content-table\">\n                            <tbody>\n                            <tr>\n                                <td class=\"calendar-cell\" [ngClass]=\"{'calendar-event-wrap':views[1].allDayEvents.length>0}\"\n                                    [ngStyle]=\"{height: 25*views[1].allDayEvents.length+'px'}\"\n                                    *ngIf=\"1===currentViewIndex\">\n                                    <ng-template [ngTemplateOutlet]=\"dayviewAllDayEventSectionTemplate\"\n                                                 [ngTemplateOutletContext]=\"{allDayEvents:views[1].allDayEvents,eventTemplate:dayviewAllDayEventTemplate}\">\n                                    </ng-template>\n                                </td>\n                                <td class=\"calendar-cell\" *ngIf=\"1!==currentViewIndex\">\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <init-position-scroll *ngIf=\"1===currentViewIndex\" class=\"dayview-normal-event-container\" [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[1].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                <ng-template [ngTemplateOutlet]=\"dayviewNormalEventSectionTemplate\"\n                                             [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts, eventTemplate:dayviewNormalEventTemplate}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n                <init-position-scroll *ngIf=\"1!==currentViewIndex\" class=\"dayview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[1].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\">\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n            </ion-slide>\n            <ion-slide class=\"slide-container\">\n                <div class=\"dayview-allday-table\">\n                    <div class=\"dayview-allday-label\">{{allDayLabel}}</div>\n                    <div class=\"dayview-allday-content-wrapper scroll-content\">\n                        <table class=\"table table-bordered dayview-allday-content-table\">\n                            <tbody>\n                            <tr>\n                                <td class=\"calendar-cell\" [ngClass]=\"{'calendar-event-wrap':views[2].allDayEvents.length>0}\"\n                                    [ngStyle]=\"{height: 25*views[2].allDayEvents.length+'px'}\"\n                                    *ngIf=\"2===currentViewIndex\">\n                                    <ng-template [ngTemplateOutlet]=\"dayviewAllDayEventSectionTemplate\"\n                                                 [ngTemplateOutletContext]=\"{allDayEvents:views[2].allDayEvents,eventTemplate:dayviewAllDayEventTemplate}\">\n                                    </ng-template>\n                                </td>\n                                <td class=\"calendar-cell\" *ngIf=\"2!==currentViewIndex\">\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <init-position-scroll *ngIf=\"2===currentViewIndex\" class=\"dayview-normal-event-container\" [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[2].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                <ng-template [ngTemplateOutlet]=\"dayviewNormalEventSectionTemplate\"\n                                             [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts, eventTemplate:dayviewNormalEventTemplate}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n                <init-position-scroll *ngIf=\"2!==currentViewIndex\" class=\"dayview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[2].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\">\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n            </ion-slide>\n        </ion-slides>\n    ",
            styles: ["\n        .table-fixed {\n          table-layout: fixed;\n        }\n\n        .table {\n          width: 100%;\n          max-width: 100%;\n          background-color: transparent;\n        }\n\n        .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td,\n        .table > tbody > tr > td, .table > tfoot > tr > td {\n          padding: 8px;\n          line-height: 20px;\n          vertical-align: top;\n        }\n\n        .table > thead > tr > th {\n          vertical-align: bottom;\n          border-bottom: 2px solid #ddd;\n        }\n\n        .table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {\n          border-top: 0\n        }\n\n        .table > tbody + tbody {\n          border-top: 2px solid #ddd;\n        }\n\n        .table-bordered {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th,\n        .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {\n          border-bottom-width: 2px;\n        }\n\n        .table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {\n          background-color: #f9f9f9\n        }\n\n        .calendar-hour-column {\n          width: 50px;\n          white-space: nowrap;\n        }\n\n        .calendar-event-wrap {\n          position: relative;\n          width: 100%;\n          height: 100%;\n        }\n\n        .calendar-event {\n          position: absolute;\n          padding: 2px;\n          cursor: pointer;\n          z-index: 10000;\n        }\n\n        .slides-container {\n            height: 100%;\n        }\n\n        .slide-container {\n            display: block;\n        }\n\n        .calendar-cell {\n          padding: 0 !important;\n          height: 37px;\n        }\n\n        .dayview-allday-label {\n          float: left;\n          height: 100%;\n          line-height: 50px;\n          text-align: center;\n          width: 50px;\n          border-left: 1px solid #ddd;\n        }\n\n        [dir=\"rtl\"] .dayview-allday-label {\n            border-right: 1px solid #ddd;\n            float: right;\n        }\n\n        .dayview-allday-content-wrapper {\n          margin-left: 50px;\n          overflow: hidden;\n          height: 51px;\n        }\n\n        [dir=\"rtl\"] .dayview-allday-content-wrapper {\n          margin-left: 0;\n          margin-right: 50px;\n        }\n\n        .dayview-allday-content-table {\n          min-height: 50px;\n        }\n\n        .dayview-allday-content-table td {\n          border-left: 1px solid #ddd;\n          border-right: 1px solid #ddd;\n        }\n\n        .dayview-allday-table {\n          height: 50px;\n          position: relative;\n          border-bottom: 1px solid #ddd;\n          font-size: 14px;\n        }\n\n        .dayview-normal-event-container {\n          margin-top: 50px;\n          overflow: hidden;\n          left: 0;\n          right: 0;\n          top: 0;\n          bottom: 0;\n          position: absolute;\n          font-size: 14px;\n        }\n\n        .scroll-content {\n            overflow-y: auto;\n            overflow-x: hidden;\n        }\n\n        ::-webkit-scrollbar,\n        *::-webkit-scrollbar {\n          display: none;\n        }\n\n        .table > tbody > tr > td.calendar-hour-column {\n          padding-left: 0;\n          padding-right: 0;\n          vertical-align: middle;\n        }\n\n        @media (max-width: 750px) {\n          .dayview-allday-label, .calendar-hour-column {\n            width: 31px;\n            font-size: 12px;\n          }\n\n          .dayview-allday-label {\n            padding-top: 4px;\n          }\n\n          .table > tbody > tr > td.calendar-hour-column {\n            padding-left: 0;\n            padding-right: 0;\n            vertical-align: middle;\n            line-height: 12px;\n          }\n\n          .dayview-allday-label {\n            line-height: 20px;\n          }\n\n          .dayview-allday-content-wrapper {\n            margin-left: 31px;\n          }\n\n          [dir=\"rtl\"] .dayview-allday-content-wrapper {\n            margin-left: 0;\n            margin-right: 31px;\n          }\n        }\n    "],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_calendar_service__WEBPACK_IMPORTED_MODULE_4__["CalendarService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])
    ], DayViewComponent);
    return DayViewComponent;
}());



/***/ }),

/***/ "./node_modules/ionic2-calendar/index.js":
/*!***********************************************!*\
  !*** ./node_modules/ionic2-calendar/index.js ***!
  \***********************************************/
/*! exports provided: NgCalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.module */ "./node_modules/ionic2-calendar/calendar.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgCalendarModule", function() { return _calendar_module__WEBPACK_IMPORTED_MODULE_0__["NgCalendarModule"]; });




/***/ }),

/***/ "./node_modules/ionic2-calendar/init-position-scroll.js":
/*!**************************************************************!*\
  !*** ./node_modules/ionic2-calendar/init-position-scroll.js ***!
  \**************************************************************/
/*! exports provided: initPositionScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPositionScrollComponent", function() { return initPositionScrollComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var initPositionScrollComponent = /** @class */ (function () {
    function initPositionScrollComponent(el) {
        this.onScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.listenerAttached = false;
        this.element = el;
    }
    initPositionScrollComponent.prototype.ngOnChanges = function (changes) {
        var initPosition = changes['initPosition'];
        if (initPosition && initPosition.currentValue !== undefined && this.scrollContent) {
            this.scrollContent.scrollTop = initPosition.currentValue;
        }
    };
    initPositionScrollComponent.prototype.ngAfterViewInit = function () {
        var scrollContent = this.scrollContent = this.element.nativeElement.querySelector('.scroll-content');
        if (this.initPosition !== undefined) {
            scrollContent.scrollTop = this.initPosition;
        }
        if (this.emitEvent && !this.listenerAttached) {
            var onScroll_1 = this.onScroll;
            this.handler = function () {
                onScroll_1.emit(scrollContent.scrollTop);
            };
            this.listenerAttached = true;
            scrollContent.addEventListener('scroll', this.handler);
        }
    };
    initPositionScrollComponent.prototype.ngOnDestroy = function () {
        if (this.listenerAttached) {
            this.scrollContent.removeEventListener('scroll', this.handler);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], initPositionScrollComponent.prototype, "initPosition", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], initPositionScrollComponent.prototype, "emitEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], initPositionScrollComponent.prototype, "onScroll", void 0);
    initPositionScrollComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'init-position-scroll',
            template: "\n        <div class=\"scroll-content\" style=\"height:100%\">\n            <ng-content></ng-content>\n        </div>\n    ",
            styles: ["\n        .scroll-content {\n            overflow-y: auto;\n            overflow-x: hidden;\n        }        \n    "],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], initPositionScrollComponent);
    return initPositionScrollComponent;
}());



/***/ }),

/***/ "./node_modules/ionic2-calendar/monthview.js":
/*!***************************************************!*\
  !*** ./node_modules/ionic2-calendar/monthview.js ***!
  \***************************************************/
/*! exports provided: MonthViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthViewComponent", function() { return MonthViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar.service */ "./node_modules/ionic2-calendar/calendar.service.js");





var MonthViewComponent = /** @class */ (function () {
    function MonthViewComponent(calendarService) {
        this.calendarService = calendarService;
        this.autoSelect = true;
        this.dir = "";
        this.onRangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEventSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTimeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.onTitleChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.views = [];
        this.currentViewIndex = 0;
        this.mode = 'month';
        this.direction = 0;
        this.moveOnSelected = false;
        this.inited = false;
        this.callbackOnInit = true;
    }
    MonthViewComponent_1 = MonthViewComponent;
    MonthViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slideOptions = {
            loop: true,
            spaceBetween: this.spaceBetween
        };
        if (this.dateFormatter && this.dateFormatter.formatMonthViewDay) {
            this.formatDayLabel = this.dateFormatter.formatMonthViewDay;
        }
        else {
            var dayLabelDatePipe_1 = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US');
            this.formatDayLabel = function (date) {
                return dayLabelDatePipe_1.transform(date, this.formatDay);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatMonthViewDayHeader) {
            this.formatDayHeaderLabel = this.dateFormatter.formatMonthViewDayHeader;
        }
        else {
            var datePipe_1 = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"](this.locale);
            this.formatDayHeaderLabel = function (date) {
                return datePipe_1.transform(date, this.formatDayHeader);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatMonthViewTitle) {
            this.formatTitle = this.dateFormatter.formatMonthViewTitle;
        }
        else {
            var datePipe_2 = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"](this.locale);
            this.formatTitle = function (date) {
                return datePipe_2.transform(date, this.formatMonthTitle);
            };
        }
        if (this.lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(true);
        }
        if (this.lockSwipes) {
            this.slider.lockSwipes(true);
        }
        this.refreshView();
        this.inited = true;
        this.currentDateChangedFromParentSubscription = this.calendarService.currentDateChangedFromParent$.subscribe(function (currentDate) {
            _this.refreshView();
        });
        this.eventSourceChangedSubscription = this.calendarService.eventSourceChanged$.subscribe(function () {
            _this.onDataLoaded();
        });
    };
    MonthViewComponent.prototype.ngOnDestroy = function () {
        if (this.currentDateChangedFromParentSubscription) {
            this.currentDateChangedFromParentSubscription.unsubscribe();
            this.currentDateChangedFromParentSubscription = null;
        }
        if (this.eventSourceChangedSubscription) {
            this.eventSourceChangedSubscription.unsubscribe();
            this.eventSourceChangedSubscription = null;
        }
    };
    MonthViewComponent.prototype.ngOnChanges = function (changes) {
        if (!this.inited)
            return;
        var eventSourceChange = changes['eventSource'];
        if (eventSourceChange && eventSourceChange.currentValue) {
            this.onDataLoaded();
        }
        var lockSwipeToPrev = changes['lockSwipeToPrev'];
        if (lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(lockSwipeToPrev.currentValue);
        }
        var lockSwipes = changes['lockSwipes'];
        if (lockSwipes) {
            this.slider.lockSwipes(lockSwipes.currentValue);
        }
    };
    MonthViewComponent.prototype.ngAfterViewInit = function () {
        var title = this.getTitle();
        this.onTitleChanged.emit(title);
    };
    MonthViewComponent.prototype.onSlideChanged = function () {
        var _this = this;
        if (this.callbackOnInit) {
            this.callbackOnInit = false;
            return;
        }
        var currentSlideIndex = this.slider.getActiveIndex(), direction = 0, currentViewIndex = this.currentViewIndex;
        this.slider.getActiveIndex().then(function (currentSlideIndex) {
            currentSlideIndex = (currentSlideIndex + 2) % 3;
            if (currentSlideIndex - currentViewIndex === 1) {
                direction = 1;
            }
            else if (currentSlideIndex === 0 && currentViewIndex === 2) {
                direction = 1;
                _this.slider.slideTo(1, 0, false);
            }
            else if (currentViewIndex - currentSlideIndex === 1) {
                direction = -1;
            }
            else if (currentSlideIndex === 2 && currentViewIndex === 0) {
                direction = -1;
                _this.slider.slideTo(3, 0, false);
            }
            _this.currentViewIndex = currentSlideIndex;
            _this.move(direction);
        });
    };
    MonthViewComponent.prototype.move = function (direction) {
        if (direction === 0)
            return;
        this.direction = direction;
        if (!this.moveOnSelected) {
            var adjacentDate = this.calendarService.getAdjacentCalendarDate(this.mode, direction);
            this.calendarService.setCurrentDate(adjacentDate);
        }
        this.refreshView();
        this.direction = 0;
        this.moveOnSelected = false;
    };
    MonthViewComponent.prototype.createDateObject = function (date) {
        var disabled = false;
        if (this.markDisabled) {
            disabled = this.markDisabled(date);
        }
        return {
            date: date,
            events: [],
            label: this.formatDayLabel(date),
            secondary: false,
            disabled: disabled
        };
    };
    MonthViewComponent.getDates = function (startDate, n) {
        var dates = new Array(n), current = new Date(startDate.getTime()), i = 0;
        current.setHours(12); // Prevent repeated dates because of timezone bug
        while (i < n) {
            dates[i++] = new Date(current.getTime());
            current.setDate(current.getDate() + 1);
        }
        return dates;
    };
    MonthViewComponent.prototype.getViewData = function (startTime) {
        var startDate = startTime, date = startDate.getDate(), month = (startDate.getMonth() + (date !== 1 ? 1 : 0)) % 12;
        var dates = MonthViewComponent_1.getDates(startDate, 42);
        var days = [];
        for (var i = 0; i < 42; i++) {
            var dateObject = this.createDateObject(dates[i]);
            dateObject.secondary = dates[i].getMonth() !== month;
            days[i] = dateObject;
        }
        var dayHeaders = [];
        for (var i = 0; i < 7; i++) {
            dayHeaders.push(this.formatDayHeaderLabel(days[i].date));
        }
        return {
            dates: days,
            dayHeaders: dayHeaders
        };
    };
    MonthViewComponent.prototype.getHighlightClass = function (date) {
        var className = '';
        if (date.hasEvent) {
            if (date.secondary) {
                className = 'monthview-secondary-with-event';
            }
            else {
                className = 'monthview-primary-with-event';
            }
        }
        if (date.selected) {
            if (className) {
                className += ' ';
            }
            className += 'monthview-selected';
        }
        if (date.current) {
            if (className) {
                className += ' ';
            }
            className += 'monthview-current';
        }
        if (date.secondary) {
            if (className) {
                className += ' ';
            }
            className += 'text-muted';
        }
        if (date.disabled) {
            if (className) {
                className += ' ';
            }
            className += 'monthview-disabled';
        }
        return className;
    };
    MonthViewComponent.prototype.getRange = function (currentDate) {
        var year = currentDate.getFullYear(), month = currentDate.getMonth(), firstDayOfMonth = new Date(year, month, 1), difference = this.startingDayMonth - firstDayOfMonth.getDay(), numDisplayedFromPreviousMonth = (difference > 0) ? 7 - difference : -difference, startDate = new Date(firstDayOfMonth.getTime());
        if (numDisplayedFromPreviousMonth > 0) {
            startDate.setDate(-numDisplayedFromPreviousMonth + 1);
        }
        var endDate = new Date(startDate.getTime());
        endDate.setDate(endDate.getDate() + 42);
        return {
            startTime: startDate,
            endTime: endDate
        };
    };
    MonthViewComponent.prototype.onDataLoaded = function () {
        var range = this.range, eventSource = this.eventSource, len = eventSource ? eventSource.length : 0, startTime = range.startTime, endTime = range.endTime, utcStartTime = new Date(Date.UTC(startTime.getFullYear(), startTime.getMonth(), startTime.getDate())), utcEndTime = new Date(Date.UTC(endTime.getFullYear(), endTime.getMonth(), endTime.getDate())), currentViewIndex = this.currentViewIndex, dates = this.views[currentViewIndex].dates, oneDay = 86400000, eps = 0.0006;
        for (var r = 0; r < 42; r += 1) {
            if (dates[r].hasEvent) {
                dates[r].hasEvent = false;
                dates[r].events = [];
            }
        }
        for (var i = 0; i < len; i += 1) {
            var event_1 = eventSource[i], eventStartTime = new Date(event_1.startTime.getTime()), eventEndTime = new Date(event_1.endTime.getTime()), st = void 0, et = void 0;
            if (event_1.allDay) {
                if (eventEndTime <= utcStartTime || eventStartTime >= utcEndTime) {
                    continue;
                }
                else {
                    st = utcStartTime;
                    et = utcEndTime;
                }
            }
            else {
                if (eventEndTime <= startTime || eventStartTime >= endTime) {
                    continue;
                }
                else {
                    st = startTime;
                    et = endTime;
                }
            }
            var timeDiff = void 0;
            var timeDifferenceStart = void 0;
            if (eventStartTime <= st) {
                timeDifferenceStart = 0;
            }
            else {
                timeDiff = eventStartTime.getTime() - st.getTime();
                if (!event_1.allDay) {
                    timeDiff = timeDiff - (eventStartTime.getTimezoneOffset() - st.getTimezoneOffset()) * 60000;
                }
                timeDifferenceStart = timeDiff / oneDay;
            }
            var timeDifferenceEnd = void 0;
            if (eventEndTime >= et) {
                timeDiff = et.getTime() - st.getTime();
                if (!event_1.allDay) {
                    timeDiff = timeDiff - (et.getTimezoneOffset() - st.getTimezoneOffset()) * 60000;
                }
                timeDifferenceEnd = timeDiff / oneDay;
            }
            else {
                timeDiff = eventEndTime.getTime() - st.getTime();
                if (!event_1.allDay) {
                    timeDiff = timeDiff - (eventEndTime.getTimezoneOffset() - st.getTimezoneOffset()) * 60000;
                }
                timeDifferenceEnd = timeDiff / oneDay;
            }
            var index = Math.floor(timeDifferenceStart);
            while (index < timeDifferenceEnd - eps) {
                dates[index].hasEvent = true;
                var eventSet = dates[index].events;
                if (eventSet) {
                    eventSet.push(event_1);
                }
                else {
                    eventSet = [];
                    eventSet.push(event_1);
                    dates[index].events = eventSet;
                }
                index += 1;
            }
        }
        for (var r = 0; r < 42; r += 1) {
            if (dates[r].hasEvent) {
                dates[r].events.sort(this.compareEvent);
            }
        }
        if (this.autoSelect) {
            var findSelected = false;
            for (var r = 0; r < 42; r += 1) {
                if (dates[r].selected) {
                    this.selectedDate = dates[r];
                    findSelected = true;
                    break;
                }
            }
            if (findSelected) {
                this.onTimeSelected.emit({
                    selectedTime: this.selectedDate.date,
                    events: this.selectedDate.events,
                    disabled: this.selectedDate.disabled
                });
            }
        }
    };
    ;
    MonthViewComponent.prototype.refreshView = function () {
        this.range = this.getRange(this.calendarService.currentDate);
        if (this.inited) {
            var title = this.getTitle();
            this.onTitleChanged.emit(title);
        }
        this.calendarService.populateAdjacentViews(this);
        this.updateCurrentView(this.range.startTime, this.views[this.currentViewIndex]);
        this.calendarService.rangeChanged(this);
    };
    MonthViewComponent.prototype.getTitle = function () {
        var currentViewStartDate = this.range.startTime, date = currentViewStartDate.getDate(), month = (currentViewStartDate.getMonth() + (date !== 1 ? 1 : 0)) % 12, year = currentViewStartDate.getFullYear() + (date !== 1 && month === 0 ? 1 : 0), headerDate = new Date(year, month, 1, 12, 0, 0, 0);
        return this.formatTitle(headerDate);
    };
    MonthViewComponent.prototype.compareEvent = function (event1, event2) {
        if (event1.allDay) {
            return 1;
        }
        else if (event2.allDay) {
            return -1;
        }
        else {
            return (event1.startTime.getTime() - event2.startTime.getTime());
        }
    };
    MonthViewComponent.prototype.select = function (viewDate) {
        if (!this.views)
            return;
        var selectedDate = viewDate.date, events = viewDate.events;
        if (!viewDate.disabled) {
            var dates = this.views[this.currentViewIndex].dates, currentCalendarDate = this.calendarService.currentDate, currentMonth = currentCalendarDate.getMonth(), currentYear = currentCalendarDate.getFullYear(), selectedMonth = selectedDate.getMonth(), selectedYear = selectedDate.getFullYear(), direction = 0;
            if (currentYear === selectedYear) {
                if (currentMonth !== selectedMonth) {
                    direction = currentMonth < selectedMonth ? 1 : -1;
                }
            }
            else {
                direction = currentYear < selectedYear ? 1 : -1;
            }
            this.calendarService.setCurrentDate(selectedDate);
            if (direction === 0) {
                var currentViewStartDate = this.range.startTime, oneDay = 86400000, selectedDayDifference = Math.floor((selectedDate.getTime() - currentViewStartDate.getTime() - (selectedDate.getTimezoneOffset() - currentViewStartDate.getTimezoneOffset()) * 60000) / oneDay);
                for (var r = 0; r < 42; r += 1) {
                    dates[r].selected = false;
                }
                if (selectedDayDifference >= 0 && selectedDayDifference < 42) {
                    dates[selectedDayDifference].selected = true;
                    this.selectedDate = dates[selectedDayDifference];
                }
            }
            else {
                this.moveOnSelected = true;
                this.slideView(direction);
            }
        }
        this.onTimeSelected.emit({ selectedTime: selectedDate, events: events, disabled: viewDate.disabled });
    };
    MonthViewComponent.prototype.slideView = function (direction) {
        if (direction === 1) {
            this.slider.slideNext();
        }
        else if (direction === -1) {
            this.slider.slidePrev();
        }
    };
    MonthViewComponent.prototype.updateCurrentView = function (currentViewStartDate, view) {
        var currentCalendarDate = this.calendarService.currentDate, today = new Date(), oneDay = 86400000, selectedDayDifference = Math.floor((currentCalendarDate.getTime() - currentViewStartDate.getTime() - (currentCalendarDate.getTimezoneOffset() - currentViewStartDate.getTimezoneOffset()) * 60000) / oneDay), currentDayDifference = Math.floor((today.getTime() - currentViewStartDate.getTime() - (today.getTimezoneOffset() - currentViewStartDate.getTimezoneOffset()) * 60000) / oneDay);
        for (var r = 0; r < 42; r += 1) {
            view.dates[r].selected = false;
        }
        if (selectedDayDifference >= 0 && selectedDayDifference < 42 && !view.dates[selectedDayDifference].disabled && (this.autoSelect || this.moveOnSelected)) {
            view.dates[selectedDayDifference].selected = true;
            this.selectedDate = view.dates[selectedDayDifference];
        }
        else {
            this.selectedDate = {
                date: null,
                events: [],
                label: null,
                secondary: null,
                disabled: false
            };
        }
        if (currentDayDifference >= 0 && currentDayDifference < 42) {
            view.dates[currentDayDifference].current = true;
        }
    };
    MonthViewComponent.prototype.eventSelected = function (event) {
        this.onEventSelected.emit(event);
    };
    var MonthViewComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('monthSlider'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
    ], MonthViewComponent.prototype, "slider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], MonthViewComponent.prototype, "monthviewDisplayEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], MonthViewComponent.prototype, "monthviewInactiveDisplayEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], MonthViewComponent.prototype, "monthviewEventDetailTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MonthViewComponent.prototype, "formatDay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MonthViewComponent.prototype, "formatDayHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MonthViewComponent.prototype, "formatMonthTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MonthViewComponent.prototype, "eventSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MonthViewComponent.prototype, "startingDayMonth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MonthViewComponent.prototype, "showEventDetail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MonthViewComponent.prototype, "noEventsLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MonthViewComponent.prototype, "autoSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], MonthViewComponent.prototype, "markDisabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MonthViewComponent.prototype, "locale", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthViewComponent.prototype, "dateFormatter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MonthViewComponent.prototype, "dir", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MonthViewComponent.prototype, "lockSwipeToPrev", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MonthViewComponent.prototype, "lockSwipes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MonthViewComponent.prototype, "spaceBetween", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthViewComponent.prototype, "onRangeChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthViewComponent.prototype, "onEventSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthViewComponent.prototype, "onTimeSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthViewComponent.prototype, "onTitleChanged", void 0);
    MonthViewComponent = MonthViewComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'monthview',
            template: "\n        <div>\n            <ion-slides #monthSlider [options]=\"slideOptions\" [dir]=\"dir\" (ionSlideDidChange)=\"onSlideChanged()\">\n                <ion-slide>\n                    <table *ngIf=\"0===currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr>\n                            <th *ngFor=\"let dayHeader of views[0].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\" tappable (click)=\"select(views[0].dates[row*7+col])\"\n                                [ngClass]=\"getHighlightClass(views[0].dates[row*7+col])\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewDisplayEventTemplate\"\n                                [ngTemplateOutletContext]=\"{view: views[0], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                    <table *ngIf=\"0!==currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr class=\"text-center\">\n                            <th *ngFor=\"let dayHeader of views[0].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewInactiveDisplayEventTemplate\"\n                                [ngTemplateOutletContext]=\"{view: views[0], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        <tr>\n                        </tbody>\n                    </table>\n                </ion-slide>\n                <ion-slide>\n                    <table *ngIf=\"1===currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr>\n                            <th *ngFor=\"let dayHeader of views[1].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\" tappable (click)=\"select(views[1].dates[row*7+col])\"\n                                [ngClass]=\"getHighlightClass(views[1].dates[row*7+col])\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewDisplayEventTemplate\"\n                                [ngTemplateOutletContext]=\"{view: views[1], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                    <table *ngIf=\"1!==currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr class=\"text-center\">\n                            <th *ngFor=\"let dayHeader of views[1].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewInactiveDisplayEventTemplate\"\n                                [ngTemplateOutletContext]=\"{view: views[1], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        <tr>\n                        </tbody>\n                    </table>\n                </ion-slide>\n                <ion-slide>\n                    <table *ngIf=\"2===currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr>\n                            <th *ngFor=\"let dayHeader of views[2].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\" tappable (click)=\"select(views[2].dates[row*7+col])\"\n                                [ngClass]=\"getHighlightClass(views[2].dates[row*7+col])\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewDisplayEventTemplate\"\n                                [ngTemplateOutletContext]=\"{view: views[2], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                    <table *ngIf=\"2!==currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr class=\"text-center\">\n                            <th *ngFor=\"let dayHeader of views[2].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewInactiveDisplayEventTemplate\"\n                                [ngTemplateOutletContext]=\"{view: views[2], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        <tr>\n                        </tbody>\n                    </table>\n                </ion-slide>\n            </ion-slides>\n            <ng-template [ngTemplateOutlet]=\"monthviewEventDetailTemplate\"\n            [ngTemplateOutletContext]=\"{showEventDetail:showEventDetail, selectedDate: selectedDate, noEventsLabel: noEventsLabel}\">\n            </ng-template>\n        </div>\n    ",
            styles: ["\n        .text-muted {\n          color: #999;\n        }\n\n        .table-fixed {\n          table-layout: fixed;\n        }\n\n        .table {\n          width: 100%;\n          max-width: 100%;\n          background-color: transparent;\n        }\n\n        .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td,\n        .table > tbody > tr > td, .table > tfoot > tr > td {\n          padding: 8px;\n          line-height: 20px;\n          vertical-align: top;\n        }\n\n        .table > thead > tr > th {\n          vertical-align: bottom;\n          border-bottom: 2px solid #ddd;\n        }\n\n        .table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {\n          border-top: 0\n        }\n\n        .table > tbody + tbody {\n          border-top: 2px solid #ddd;\n        }\n\n        .table-bordered {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th,\n        .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {\n          border-bottom-width: 2px;\n        }\n\n        .table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {\n          background-color: #f9f9f9\n        }\n\n        .monthview-primary-with-event {\n          background-color: #3a87ad;\n          color: white;\n        }\n\n        .monthview-current {\n          background-color: #f0f0f0;\n        }\n\n        .monthview-selected {\n          background-color: #009900;\n          color: white;\n        }\n\n        .monthview-datetable td.monthview-disabled {\n            color: lightgrey;\n            cursor: default;\n        }\n\n        .monthview-datetable th {\n          text-align: center;\n        }\n\n        .monthview-datetable td {\n          cursor: pointer;\n          text-align: center;\n        }\n\n        .monthview-secondary-with-event {\n          background-color: #d9edf7;\n        }\n\n        ::-webkit-scrollbar,\n        *::-webkit-scrollbar {\n          display: none;\n        }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_calendar_service__WEBPACK_IMPORTED_MODULE_4__["CalendarService"]])
    ], MonthViewComponent);
    return MonthViewComponent;
}());



/***/ }),

/***/ "./node_modules/ionic2-calendar/weekview.js":
/*!**************************************************!*\
  !*** ./node_modules/ionic2-calendar/weekview.js ***!
  \**************************************************/
/*! exports provided: WeekViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekViewComponent", function() { return WeekViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar.service */ "./node_modules/ionic2-calendar/calendar.service.js");





var WeekViewComponent = /** @class */ (function () {
    function WeekViewComponent(calendarService, elm) {
        this.calendarService = calendarService;
        this.elm = elm;
        this.class = true;
        this.autoSelect = true;
        this.dir = "";
        this.scrollToHour = 0;
        this.onRangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onEventSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onTimeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onTitleChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](true);
        this.views = [];
        this.currentViewIndex = 0;
        this.direction = 0;
        this.mode = 'week';
        this.inited = false;
        this.callbackOnInit = true;
    }
    WeekViewComponent_1 = WeekViewComponent;
    WeekViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slideOptions = {
            loop: true,
            spaceBetween: this.spaceBetween
        };
        this.hourRange = (this.endHour - this.startHour) * this.hourSegments;
        if (this.dateFormatter && this.dateFormatter.formatWeekViewDayHeader) {
            this.formatDayHeader = this.dateFormatter.formatWeekViewDayHeader;
        }
        else {
            var datePipe_1 = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](this.locale);
            this.formatDayHeader = function (date) {
                return datePipe_1.transform(date, this.formatWeekViewDayHeader);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatWeekViewTitle) {
            this.formatTitle = this.dateFormatter.formatWeekViewTitle;
        }
        else {
            var datePipe_2 = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](this.locale);
            this.formatTitle = function (date) {
                return datePipe_2.transform(date, this.formatWeekTitle);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatWeekViewHourColumn) {
            this.formatHourColumnLabel = this.dateFormatter.formatWeekViewHourColumn;
        }
        else {
            var datePipe_3 = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](this.locale);
            this.formatHourColumnLabel = function (date) {
                return datePipe_3.transform(date, this.formatHourColumn);
            };
        }
        if (this.lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(true);
        }
        if (this.lockSwipes) {
            this.slider.lockSwipes(true);
        }
        this.refreshView();
        this.hourColumnLabels = this.getHourColumnLabels();
        this.inited = true;
        this.currentDateChangedFromParentSubscription = this.calendarService.currentDateChangedFromParent$.subscribe(function (currentDate) {
            _this.refreshView();
        });
        this.eventSourceChangedSubscription = this.calendarService.eventSourceChanged$.subscribe(function () {
            _this.onDataLoaded();
        });
    };
    WeekViewComponent.prototype.ngAfterViewInit = function () {
        var title = this.getTitle();
        this.onTitleChanged.emit(title);
        if (this.scrollToHour > 0) {
            var hourColumns_1 = this.elm.nativeElement.querySelector('.weekview-normal-event-container').querySelectorAll('.calendar-hour-column');
            var me_1 = this;
            setTimeout(function () {
                me_1.initScrollPosition = hourColumns_1[me_1.scrollToHour - me_1.startHour].offsetTop;
            }, 0);
        }
    };
    WeekViewComponent.prototype.ngOnChanges = function (changes) {
        if (!this.inited)
            return;
        var eventSourceChange = changes['eventSource'];
        if (eventSourceChange && eventSourceChange.currentValue) {
            this.onDataLoaded();
        }
        var lockSwipeToPrev = changes['lockSwipeToPrev'];
        if (lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(lockSwipeToPrev.currentValue);
        }
        var lockSwipes = changes['lockSwipes'];
        if (lockSwipes) {
            this.slider.lockSwipes(lockSwipes.currentValue);
        }
    };
    WeekViewComponent.prototype.ngOnDestroy = function () {
        if (this.currentDateChangedFromParentSubscription) {
            this.currentDateChangedFromParentSubscription.unsubscribe();
            this.currentDateChangedFromParentSubscription = null;
        }
        if (this.eventSourceChangedSubscription) {
            this.eventSourceChangedSubscription.unsubscribe();
            this.eventSourceChangedSubscription = null;
        }
    };
    WeekViewComponent.prototype.onSlideChanged = function () {
        var _this = this;
        if (this.callbackOnInit) {
            this.callbackOnInit = false;
            return;
        }
        var currentSlideIndex = this.slider.getActiveIndex(), direction = 0, currentViewIndex = this.currentViewIndex;
        this.slider.getActiveIndex().then(function (currentSlideIndex) {
            currentSlideIndex = (currentSlideIndex + 2) % 3;
            if (currentSlideIndex - currentViewIndex === 1) {
                direction = 1;
            }
            else if (currentSlideIndex === 0 && currentViewIndex === 2) {
                direction = 1;
                _this.slider.slideTo(1, 0, false);
            }
            else if (currentViewIndex - currentSlideIndex === 1) {
                direction = -1;
            }
            else if (currentSlideIndex === 2 && currentViewIndex === 0) {
                direction = -1;
                _this.slider.slideTo(3, 0, false);
            }
            _this.currentViewIndex = currentSlideIndex;
            _this.move(direction);
        });
    };
    WeekViewComponent.prototype.move = function (direction) {
        if (direction === 0) {
            return;
        }
        this.direction = direction;
        var adjacent = this.calendarService.getAdjacentCalendarDate(this.mode, direction);
        this.calendarService.setCurrentDate(adjacent);
        this.refreshView();
        this.direction = 0;
    };
    WeekViewComponent.createDateObjects = function (startTime, startHour, endHour, timeInterval) {
        var times = [], currentHour = startTime.getHours(), currentDate = startTime.getDate(), hourStep, minStep;
        if (timeInterval < 1) {
            hourStep = Math.floor(1 / timeInterval);
            minStep = 60;
        }
        else {
            hourStep = 1;
            minStep = Math.floor(60 / timeInterval);
        }
        for (var hour = startHour; hour < endHour; hour += hourStep) {
            for (var interval = 0; interval < 60; interval += minStep) {
                var row = [];
                for (var day = 0; day < 7; day += 1) {
                    var time = new Date(startTime.getTime());
                    time.setHours(currentHour + hour, interval);
                    time.setDate(currentDate + day);
                    row.push({
                        events: [],
                        time: time
                    });
                }
                times.push(row);
            }
        }
        return times;
    };
    WeekViewComponent.getDates = function (startTime, n) {
        var dates = new Array(n), current = new Date(startTime.getTime()), i = 0;
        current.setHours(12); // Prevent repeated dates because of timezone bug
        while (i < n) {
            dates[i++] = {
                date: new Date(current.getTime()),
                events: [],
                dayHeader: ''
            };
            current.setDate(current.getDate() + 1);
        }
        return dates;
    };
    WeekViewComponent.prototype.getHourColumnLabels = function () {
        var hourColumnLabels = [];
        for (var hour = 0, length_1 = this.views[0].rows.length; hour < length_1; hour += 1) {
            hourColumnLabels.push(this.formatHourColumnLabel(this.views[0].rows[hour][0].time));
        }
        return hourColumnLabels;
    };
    WeekViewComponent.prototype.getViewData = function (startTime) {
        var dates = WeekViewComponent_1.getDates(startTime, 7);
        for (var i = 0; i < 7; i++) {
            dates[i].dayHeader = this.formatDayHeader(dates[i].date);
        }
        return {
            rows: WeekViewComponent_1.createDateObjects(startTime, this.startHour, this.endHour, this.hourSegments),
            dates: dates
        };
    };
    WeekViewComponent.prototype.getRange = function (currentDate) {
        var year = currentDate.getFullYear(), month = currentDate.getMonth(), date = currentDate.getDate(), day = currentDate.getDay(), difference = day - this.startingDayWeek;
        if (difference < 0) {
            difference += 7;
        }
        var firstDayOfWeek = new Date(year, month, date - difference);
        var endTime = new Date(year, month, date - difference + 7);
        return {
            startTime: firstDayOfWeek,
            endTime: endTime
        };
    };
    WeekViewComponent.prototype.onDataLoaded = function () {
        var eventSource = this.eventSource, len = eventSource ? eventSource.length : 0, startTime = this.range.startTime, endTime = this.range.endTime, utcStartTime = new Date(Date.UTC(startTime.getFullYear(), startTime.getMonth(), startTime.getDate())), utcEndTime = new Date(Date.UTC(endTime.getFullYear(), endTime.getMonth(), endTime.getDate())), currentViewIndex = this.currentViewIndex, rows = this.views[currentViewIndex].rows, dates = this.views[currentViewIndex].dates, oneHour = 3600000, oneDay = 86400000, 
        // add allday eps
        eps = 0.016, allDayEventInRange = false, normalEventInRange = false, rangeStartRowIndex = this.startHour * this.hourSegments, rangeEndRowIndex = this.endHour * this.hourSegments, allRows = 24 * this.hourSegments;
        for (var i = 0; i < 7; i += 1) {
            dates[i].events = [];
            dates[i].hasEvent = false;
        }
        for (var day = 0; day < 7; day += 1) {
            for (var hour = 0; hour < this.hourRange; hour += 1) {
                rows[hour][day].events = [];
            }
        }
        for (var i = 0; i < len; i += 1) {
            var event_1 = eventSource[i];
            var eventStartTime = new Date(event_1.startTime.getTime());
            var eventEndTime = new Date(event_1.endTime.getTime());
            if (event_1.allDay) {
                if (eventEndTime <= utcStartTime || eventStartTime >= utcEndTime) {
                    continue;
                }
                else {
                    allDayEventInRange = true;
                    var allDayStartIndex = void 0;
                    if (eventStartTime <= utcStartTime) {
                        allDayStartIndex = 0;
                    }
                    else {
                        allDayStartIndex = Math.floor((eventStartTime.getTime() - utcStartTime.getTime()) / oneDay);
                    }
                    var allDayEndIndex = void 0;
                    if (eventEndTime >= utcEndTime) {
                        allDayEndIndex = Math.ceil((utcEndTime.getTime() - utcStartTime.getTime()) / oneDay);
                    }
                    else {
                        allDayEndIndex = Math.ceil((eventEndTime.getTime() - utcStartTime.getTime()) / oneDay);
                    }
                    var displayAllDayEvent = {
                        event: event_1,
                        startIndex: allDayStartIndex,
                        endIndex: allDayEndIndex
                    };
                    var eventSet = dates[allDayStartIndex].events;
                    if (eventSet) {
                        eventSet.push(displayAllDayEvent);
                    }
                    else {
                        eventSet = [];
                        eventSet.push(displayAllDayEvent);
                        dates[allDayStartIndex].events = eventSet;
                    }
                    dates[allDayStartIndex].hasEvent = true;
                }
            }
            else {
                if (eventEndTime <= startTime || eventStartTime >= endTime) {
                    continue;
                }
                else {
                    normalEventInRange = true;
                    var timeDiff = void 0;
                    var timeDifferenceStart = void 0;
                    if (eventStartTime <= startTime) {
                        timeDifferenceStart = 0;
                    }
                    else {
                        timeDiff = eventStartTime.getTime() - startTime.getTime() - (eventStartTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                        timeDifferenceStart = timeDiff / oneHour * this.hourSegments;
                    }
                    var timeDifferenceEnd = void 0;
                    if (eventEndTime >= endTime) {
                        timeDiff = endTime.getTime() - startTime.getTime() - (endTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                        timeDifferenceEnd = timeDiff / oneHour * this.hourSegments;
                    }
                    else {
                        timeDiff = eventEndTime.getTime() - startTime.getTime() - (eventEndTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                        timeDifferenceEnd = timeDiff / oneHour * this.hourSegments;
                    }
                    var startIndex = Math.floor(timeDifferenceStart), endIndex = Math.ceil(timeDifferenceEnd - eps), startRowIndex = startIndex % allRows, dayIndex = Math.floor(startIndex / allRows), endOfDay = dayIndex * allRows, startOffset = 0, endOffset = 0;
                    if (this.hourParts !== 1) {
                        if (startRowIndex < rangeStartRowIndex) {
                            startOffset = 0;
                        }
                        else {
                            startOffset = Math.floor((timeDifferenceStart - startIndex) * this.hourParts);
                        }
                    }
                    do {
                        endOfDay += allRows;
                        var endRowIndex = void 0;
                        if (endOfDay < endIndex) {
                            endRowIndex = allRows;
                        }
                        else {
                            if (endOfDay === endIndex) {
                                endRowIndex = allRows;
                            }
                            else {
                                endRowIndex = endIndex % allRows;
                            }
                            if (this.hourParts !== 1) {
                                if (endRowIndex > rangeEndRowIndex) {
                                    endOffset = 0;
                                }
                                else {
                                    endOffset = Math.floor((endIndex - timeDifferenceEnd) * this.hourParts);
                                }
                            }
                        }
                        if (startRowIndex < rangeStartRowIndex) {
                            startRowIndex = 0;
                        }
                        else {
                            startRowIndex -= rangeStartRowIndex;
                        }
                        if (endRowIndex > rangeEndRowIndex) {
                            endRowIndex = rangeEndRowIndex;
                        }
                        endRowIndex -= rangeStartRowIndex;
                        if (startRowIndex < endRowIndex) {
                            var displayEvent = {
                                event: event_1,
                                startIndex: startRowIndex,
                                endIndex: endRowIndex,
                                startOffset: startOffset,
                                endOffset: endOffset
                            };
                            var eventSet = rows[startRowIndex][dayIndex].events;
                            if (eventSet) {
                                eventSet.push(displayEvent);
                            }
                            else {
                                eventSet = [];
                                eventSet.push(displayEvent);
                                rows[startRowIndex][dayIndex].events = eventSet;
                            }
                            dates[dayIndex].hasEvent = true;
                        }
                        startRowIndex = 0;
                        startOffset = 0;
                        dayIndex += 1;
                    } while (endOfDay < endIndex);
                }
            }
        }
        if (normalEventInRange) {
            for (var day = 0; day < 7; day += 1) {
                var orderedEvents = [];
                for (var hour = 0; hour < this.hourRange; hour += 1) {
                    if (rows[hour][day].events) {
                        rows[hour][day].events.sort(WeekViewComponent_1.compareEventByStartOffset);
                        orderedEvents = orderedEvents.concat(rows[hour][day].events);
                    }
                }
                if (orderedEvents.length > 0) {
                    this.placeEvents(orderedEvents);
                }
            }
        }
        if (allDayEventInRange) {
            var orderedAllDayEvents = [];
            for (var day = 0; day < 7; day += 1) {
                if (dates[day].events) {
                    orderedAllDayEvents = orderedAllDayEvents.concat(dates[day].events);
                }
            }
            if (orderedAllDayEvents.length > 0) {
                this.placeAllDayEvents(orderedAllDayEvents);
            }
        }
        if (this.autoSelect) {
            var findSelected = false;
            var selectedDate = void 0;
            for (var r = 0; r < 7; r += 1) {
                if (dates[r].selected) {
                    selectedDate = dates[r];
                    findSelected = true;
                    break;
                }
            }
            if (findSelected) {
                var disabled = false;
                if (this.markDisabled) {
                    disabled = this.markDisabled(selectedDate.date);
                }
                this.onTimeSelected.emit({
                    selectedTime: selectedDate.date,
                    events: selectedDate.events.map(function (e) { return e.event; }),
                    disabled: disabled
                });
            }
        }
    };
    WeekViewComponent.prototype.refreshView = function () {
        this.range = this.getRange(this.calendarService.currentDate);
        if (this.inited) {
            var title = this.getTitle();
            this.onTitleChanged.emit(title);
        }
        this.calendarService.populateAdjacentViews(this);
        this.updateCurrentView(this.range.startTime, this.views[this.currentViewIndex]);
        this.calendarService.rangeChanged(this);
    };
    WeekViewComponent.prototype.getTitle = function () {
        var firstDayOfWeek = new Date(this.range.startTime.getTime());
        firstDayOfWeek.setHours(12, 0, 0, 0);
        return this.formatTitle(firstDayOfWeek);
    };
    WeekViewComponent.prototype.getHighlightClass = function (date) {
        var className = '';
        if (date.hasEvent) {
            if (className) {
                className += ' ';
            }
            className = 'weekview-with-event';
        }
        if (date.selected) {
            if (className) {
                className += ' ';
            }
            className += 'weekview-selected';
        }
        if (date.current) {
            if (className) {
                className += ' ';
            }
            className += 'weekview-current';
        }
        return className;
    };
    WeekViewComponent.compareEventByStartOffset = function (eventA, eventB) {
        return eventA.startOffset - eventB.startOffset;
    };
    WeekViewComponent.prototype.select = function (selectedTime, events) {
        var disabled = false;
        if (this.markDisabled) {
            disabled = this.markDisabled(selectedTime);
        }
        this.onTimeSelected.emit({
            selectedTime: selectedTime,
            events: events.map(function (e) { return e.event; }),
            disabled: disabled
        });
    };
    WeekViewComponent.prototype.placeEvents = function (orderedEvents) {
        this.calculatePosition(orderedEvents);
        WeekViewComponent_1.calculateWidth(orderedEvents, this.hourRange, this.hourParts);
    };
    WeekViewComponent.prototype.placeAllDayEvents = function (orderedEvents) {
        this.calculatePosition(orderedEvents);
    };
    WeekViewComponent.prototype.overlap = function (event1, event2) {
        var earlyEvent = event1, lateEvent = event2;
        if (event1.startIndex > event2.startIndex || (event1.startIndex === event2.startIndex && event1.startOffset > event2.startOffset)) {
            earlyEvent = event2;
            lateEvent = event1;
        }
        if (earlyEvent.endIndex <= lateEvent.startIndex) {
            return false;
        }
        else {
            return !(earlyEvent.endIndex - lateEvent.startIndex === 1 && earlyEvent.endOffset + lateEvent.startOffset >= this.hourParts);
        }
    };
    WeekViewComponent.prototype.calculatePosition = function (events) {
        var len = events.length, maxColumn = 0, isForbidden = new Array(len);
        for (var i = 0; i < len; i += 1) {
            var col = void 0;
            for (col = 0; col < maxColumn; col += 1) {
                isForbidden[col] = false;
            }
            for (var j = 0; j < i; j += 1) {
                if (this.overlap(events[i], events[j])) {
                    isForbidden[events[j].position] = true;
                }
            }
            for (col = 0; col < maxColumn; col += 1) {
                if (!isForbidden[col]) {
                    break;
                }
            }
            if (col < maxColumn) {
                events[i].position = col;
            }
            else {
                events[i].position = maxColumn++;
            }
        }
        if (this.dir === 'rtl') {
            for (var i = 0; i < len; i += 1) {
                events[i].position = maxColumn - 1 - events[i].position;
            }
        }
    };
    WeekViewComponent.calculateWidth = function (orderedEvents, size, hourParts) {
        var totalSize = size * hourParts, cells = new Array(totalSize);
        // sort by position in descending order, the right most columns should be calculated first
        orderedEvents.sort(function (eventA, eventB) {
            return eventB.position - eventA.position;
        });
        for (var i_1 = 0; i_1 < totalSize; i_1 += 1) {
            cells[i_1] = {
                calculated: false,
                events: []
            };
        }
        var len = orderedEvents.length;
        for (var i_2 = 0; i_2 < len; i_2 += 1) {
            var event_2 = orderedEvents[i_2];
            var index = event_2.startIndex * hourParts + event_2.startOffset;
            while (index < event_2.endIndex * hourParts - event_2.endOffset) {
                cells[index].events.push(event_2);
                index += 1;
            }
        }
        var i = 0;
        while (i < len) {
            var event_3 = orderedEvents[i];
            if (!event_3.overlapNumber) {
                var overlapNumber = event_3.position + 1;
                event_3.overlapNumber = overlapNumber;
                var eventQueue = [event_3];
                while ((event_3 = eventQueue.shift())) {
                    var index = event_3.startIndex * hourParts + event_3.startOffset;
                    while (index < event_3.endIndex * hourParts - event_3.endOffset) {
                        if (!cells[index].calculated) {
                            cells[index].calculated = true;
                            if (cells[index].events) {
                                var eventCountInCell = cells[index].events.length;
                                for (var j = 0; j < eventCountInCell; j += 1) {
                                    var currentEventInCell = cells[index].events[j];
                                    if (!currentEventInCell.overlapNumber) {
                                        currentEventInCell.overlapNumber = overlapNumber;
                                        eventQueue.push(currentEventInCell);
                                    }
                                }
                            }
                        }
                        index += 1;
                    }
                }
            }
            i += 1;
        }
    };
    WeekViewComponent.prototype.updateCurrentView = function (currentViewStartDate, view) {
        var currentCalendarDate = this.calendarService.currentDate, today = new Date(), oneDay = 86400000, selectedDayDifference = Math.floor((currentCalendarDate.getTime() - currentViewStartDate.getTime() - (currentCalendarDate.getTimezoneOffset() - currentViewStartDate.getTimezoneOffset()) * 60000) / oneDay), currentDayDifference = Math.floor((today.getTime() - currentViewStartDate.getTime() - (today.getTimezoneOffset() - currentViewStartDate.getTimezoneOffset()) * 60000) / oneDay);
        for (var r = 0; r < 7; r += 1) {
            view.dates[r].selected = false;
        }
        if (selectedDayDifference >= 0 && selectedDayDifference < 7 && this.autoSelect) {
            view.dates[selectedDayDifference].selected = true;
        }
        if (currentDayDifference >= 0 && currentDayDifference < 7) {
            view.dates[currentDayDifference].current = true;
        }
    };
    WeekViewComponent.prototype.daySelected = function (viewDate) {
        var selectedDate = viewDate.date, dates = this.views[this.currentViewIndex].dates, currentViewStartDate = this.range.startTime, oneDay = 86400000, selectedDayDifference = Math.floor((selectedDate.getTime() - currentViewStartDate.getTime() - (selectedDate.getTimezoneOffset() - currentViewStartDate.getTimezoneOffset()) * 60000) / oneDay);
        this.calendarService.setCurrentDate(selectedDate);
        for (var r = 0; r < 7; r += 1) {
            dates[r].selected = false;
        }
        if (selectedDayDifference >= 0 && selectedDayDifference < 7) {
            dates[selectedDayDifference].selected = true;
        }
        var disabled = false;
        if (this.markDisabled) {
            disabled = this.markDisabled(selectedDate);
        }
        this.onTimeSelected.emit({ selectedTime: selectedDate, events: viewDate.events.map(function (e) { return e.event; }), disabled: disabled });
    };
    WeekViewComponent.prototype.setScrollPosition = function (scrollPosition) {
        this.initScrollPosition = scrollPosition;
    };
    var WeekViewComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('weekSlider'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], WeekViewComponent.prototype, "slider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"])('class.weekview'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeekViewComponent.prototype, "class", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], WeekViewComponent.prototype, "weekviewHeaderTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], WeekViewComponent.prototype, "weekviewAllDayEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], WeekViewComponent.prototype, "weekviewNormalEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], WeekViewComponent.prototype, "weekviewAllDayEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], WeekViewComponent.prototype, "weekviewNormalEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WeekViewComponent.prototype, "formatWeekTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WeekViewComponent.prototype, "formatWeekViewDayHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WeekViewComponent.prototype, "formatHourColumn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WeekViewComponent.prototype, "startingDayWeek", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WeekViewComponent.prototype, "allDayLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WeekViewComponent.prototype, "hourParts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], WeekViewComponent.prototype, "eventSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], WeekViewComponent.prototype, "autoSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], WeekViewComponent.prototype, "markDisabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WeekViewComponent.prototype, "locale", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeekViewComponent.prototype, "dateFormatter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WeekViewComponent.prototype, "dir", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WeekViewComponent.prototype, "scrollToHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], WeekViewComponent.prototype, "preserveScrollPosition", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], WeekViewComponent.prototype, "lockSwipeToPrev", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], WeekViewComponent.prototype, "lockSwipes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WeekViewComponent.prototype, "startHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WeekViewComponent.prototype, "endHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WeekViewComponent.prototype, "spaceBetween", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WeekViewComponent.prototype, "hourSegments", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeekViewComponent.prototype, "onRangeChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeekViewComponent.prototype, "onEventSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeekViewComponent.prototype, "onTimeSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeekViewComponent.prototype, "onTitleChanged", void 0);
    WeekViewComponent = WeekViewComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'weekview',
            template: "\n        <ion-slides #weekSlider [options]=\"slideOptions\" [dir]=\"dir\" (ionSlideDidChange)=\"onSlideChanged()\" class=\"slides-container\">\n            <ion-slide class=\"slide-container\">\n                <table class=\"table table-bordered table-fixed weekview-header\">\n                    <thead>\n                    <tr>\n                        <th class=\"calendar-hour-column\"></th>\n                        <th class=\"weekview-header text-center\" *ngFor=\"let date of views[0].dates\"\n                            [ngClass]=\"getHighlightClass(date)\"\n                            (click)=\"daySelected(date)\">\n                            <ng-template [ngTemplateOutlet]=\"weekviewHeaderTemplate\"\n                                [ngTemplateOutletContext]=\"{viewDate:date}\">\n                            </ng-template>\n                        </th>\n                    </tr>\n                    </thead>\n                </table>\n                <div *ngIf=\"0===currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <div class=\"weekview-allday-content-wrapper scroll-content\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[0].dates\" class=\"calendar-cell\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewAllDayEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{day:day, eventTemplate:weekviewAllDayEventTemplate}\">\n                                        </ng-template>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[0].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                    <ng-template [ngTemplateOutlet]=\"weekviewNormalEventSectionTemplate\"\n                                                 [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts, eventTemplate:weekviewNormalEventTemplate}\">\n                                    </ng-template>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n                <div *ngIf=\"0!==currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <div class=\"weekview-allday-content-wrapper scroll-content\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[0].dates\" class=\"calendar-cell\">\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[0].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\">\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n            </ion-slide>\n            <ion-slide class=\"slide-container\">\n                <table class=\"table table-bordered table-fixed weekview-header\">\n                    <thead>\n                    <tr>\n                        <th class=\"calendar-hour-column\"></th>\n                        <th class=\"weekview-header text-center\" *ngFor=\"let date of views[1].dates\"\n                            [ngClass]=\"getHighlightClass(date)\"\n                            (click)=\"daySelected(date)\">\n                            <ng-template [ngTemplateOutlet]=\"weekviewHeaderTemplate\"\n                                [ngTemplateOutletContext]=\"{viewDate:date}\">\n                            </ng-template>\n                        </th>\n                    </tr>\n                    </thead>\n                </table>\n                <div *ngIf=\"1===currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <div class=\"weekview-allday-content-wrapper scroll-content\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[1].dates\" class=\"calendar-cell\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewAllDayEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{day:day, eventTemplate:weekviewAllDayEventTemplate}\">\n                                        </ng-template>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[1].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                    <div [ngClass]=\"{'calendar-event-wrap': tm.events}\" *ngIf=\"tm.events\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewNormalEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts, eventTemplate:weekviewNormalEventTemplate}\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n                <div *ngIf=\"1!==currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <div class=\"weekview-allday-content-wrapper scroll-content\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[1].dates\" class=\"calendar-cell\">\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[1].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\">\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n            </ion-slide>\n            <ion-slide class=\"slide-container\">\n                <table class=\"table table-bordered table-fixed weekview-header\">\n                    <thead>\n                    <tr>\n                        <th class=\"calendar-hour-column\"></th>\n                        <th class=\"weekview-header text-center\" *ngFor=\"let date of views[2].dates\"\n                            [ngClass]=\"getHighlightClass(date)\"\n                            (click)=\"daySelected(date)\">\n                            <ng-template [ngTemplateOutlet]=\"weekviewHeaderTemplate\"\n                                [ngTemplateOutletContext]=\"{viewDate:date}\">\n                            </ng-template>\n                        </th>\n                    </tr>\n                    </thead>\n                </table>\n                <div *ngIf=\"2===currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <div class=\"weekview-allday-content-wrapper scroll-content\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[2].dates\" class=\"calendar-cell\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewAllDayEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{day:day, eventTemplate:weekviewAllDayEventTemplate}\">\n                                        </ng-template>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[2].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                    <div [ngClass]=\"{'calendar-event-wrap': tm.events}\" *ngIf=\"tm.events\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewNormalEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts, eventTemplate:weekviewNormalEventTemplate}\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n                <div *ngIf=\"2!==currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <div class=\"weekview-allday-content-wrapper scroll-content\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[2].dates\" class=\"calendar-cell\">\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[2].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\">\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n            </ion-slide>\n        </ion-slides>\n    ",
            styles: ["\n        .table-fixed {\n          table-layout: fixed;\n        }\n\n        .table {\n          width: 100%;\n          max-width: 100%;\n          background-color: transparent;\n        }\n\n        .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td,\n        .table > tbody > tr > td, .table > tfoot > tr > td {\n          padding: 8px;\n          line-height: 20px;\n          vertical-align: top;\n        }\n\n        .table > thead > tr > th {\n          vertical-align: bottom;\n          border-bottom: 2px solid #ddd;\n        }\n\n        .table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {\n          border-top: 0\n        }\n\n        .table > tbody + tbody {\n          border-top: 2px solid #ddd;\n        }\n\n        .table-bordered {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th,\n        .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {\n          border-bottom-width: 2px;\n        }\n\n        .table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {\n          background-color: #f9f9f9\n        }\n\n        .calendar-hour-column {\n          width: 50px;\n          white-space: nowrap;\n        }\n\n        .calendar-event-wrap {\n          position: relative;\n          width: 100%;\n          height: 100%;\n        }\n\n        .calendar-event {\n          position: absolute;\n          padding: 2px;\n          cursor: pointer;\n          z-index: 10000;\n        }\n\n        .calendar-cell {\n          padding: 0 !important;\n          height: 37px;\n        }\n        \n        .slides-container {\n            height: 100%;\n        }\n        \n        .slide-container {\n            display: block;\n        }\n\n        .weekview-allday-label {\n          float: left;\n          height: 100%;\n          line-height: 50px;\n          text-align: center;\n          width: 50px;\n          border-left: 1px solid #ddd;\n        }\n\n        [dir=\"rtl\"] .weekview-allday-label {\n            float: right;\n            border-right: 1px solid #ddd;\n        }\n\n        .weekview-allday-content-wrapper {\n          margin-left: 50px;\n          overflow: hidden;\n          height: 51px;\n        }\n\n        [dir=\"rtl\"] .weekview-allday-content-wrapper {\n          margin-left: 0;\n          margin-right: 50px;\n        }\n\n        .weekview-allday-content-table {\n          min-height: 50px;\n        }\n\n        .weekview-allday-content-table td {\n          border-left: 1px solid #ddd;\n          border-right: 1px solid #ddd;\n        }\n\n        .weekview-header th {\n          overflow: hidden;\n          white-space: nowrap;\n          font-size: 14px;\n        }\n\n        .weekview-allday-table {\n          height: 50px;\n          position: relative;\n          border-bottom: 1px solid #ddd;\n          font-size: 14px;\n        }\n\n        .weekview-normal-event-container {\n          margin-top: 87px;\n          overflow: hidden;\n          left: 0;\n          right: 0;\n          top: 0;\n          bottom: 0;\n          position: absolute;\n          font-size: 14px;\n        }\n\n        .scroll-content {\n            overflow-y: auto;\n            overflow-x: hidden;\n        }\n        \n        ::-webkit-scrollbar,\n        *::-webkit-scrollbar {\n            display: none;\n        }\n\n        .table > tbody > tr > td.calendar-hour-column {\n          padding-left: 0;\n          padding-right: 0;\n          vertical-align: middle;\n        }\n\n        @media (max-width: 750px) {\n          .weekview-allday-label, .calendar-hour-column {\n            width: 31px;\n            font-size: 12px;\n          }\n\n          .weekview-allday-label {\n            padding-top: 4px;\n          }\n\n          .table > tbody > tr > td.calendar-hour-column {\n            padding-left: 0;\n            padding-right: 0;\n            vertical-align: middle;\n            line-height: 12px;\n          }\n\n          .table > thead > tr > th.weekview-header {\n            padding-left: 0;\n            padding-right: 0;\n            font-size: 12px;\n          }\n\n          .weekview-allday-label {\n            line-height: 20px;\n          }\n\n          .weekview-allday-content-wrapper {\n            margin-left: 31px;\n          }\n\n          [dir=\"rtl\"] .weekview-allday-content-wrapper {\n            margin-left: 0;\n            margin-right: 31px;\n          }\n        }\n    "],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_calendar_service__WEBPACK_IMPORTED_MODULE_4__["CalendarService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])
    ], WeekViewComponent);
    return WeekViewComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/editprofile/editprofile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/editprofile/editprofile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-item-center\" style=\"border-bottom: 1px solid gray;\">\n  <img src=\"assets/images/back.png\" style=\"width: 5%; opacity: .42; margin-left: 4px;\" (click)=\"onBack();\">\n  <h5 style=\"text-align: center; width: 84%; color: #673ab7;\">STUDENT ACCOUNT</h5>\n</div>\n<div padding>\n  <div style=\"width: 30%; margin: 0 auto;\">\n    <img src=\"{{ profile }}\">\n  </div>\n  <div style=\"text-align: center;\">\n  <label style=\"text-decoration: underline;\">Upload Picture\n    <ion-input type=\"file\" name=\"file\" hidden (change)=\"uploadFile($event)\"></ion-input>\n  </label>\n  </div>\n  <div>\n    <ion-label>Bio</ion-label>\n    <ion-textarea rows=\"8\" style=\"border: 1px solid gray;\" [(ngModel)]=\"bio\"></ion-textarea>\n  </div>\n  <div style=\"margin-top: 8px;\">\n    <ion-label>Change Username</ion-label>\n    <ion-input [(ngModel)]=\"username\"></ion-input>\n  </div>\n  <div style=\"margin-top: 8px;\">\n    <ion-label>Email</ion-label>\n    <ion-input [(ngModel)]=\"email\"></ion-input>\n  </div>\n  <div style=\"margin-top: 8px;\">\n    <ion-label>Password</ion-label>\n    <ion-input [(ngModel)]=\"password\" type=\"password\"></ion-input>\n  </div>\n  <div style=\"margin-top: 8px;\">\n    <ion-label>University</ion-label>\n    <ion-select [(ngModel)]=\"univer\">\n      <ion-select-option  *ngFor=\"let item of university\" value=\"{{ item.id }}\">{{ item.name }}</ion-select-option>\n    </ion-select>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/dialogs/editprofile/editprofile.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/editprofile/editprofile.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvZWRpdHByb2ZpbGUvZWRpdHByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dialogs/editprofile/editprofile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dialogs/editprofile/editprofile.component.ts ***!
  \**************************************************************/
/*! exports provided: EditprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofileComponent", function() { return EditprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _services_university_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/university.service */ "./src/app/services/university.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");








var EditprofileComponent = /** @class */ (function () {
    function EditprofileComponent(api, loginService, universityService, toastController, modalController) {
        this.api = api;
        this.loginService = loginService;
        this.universityService = universityService;
        this.toastController = toastController;
        this.modalController = modalController;
        this.base_url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].profile.url;
        this.university = [];
    }
    EditprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.loginService.currentUserValue;
        this.bio = this.user.bio;
        this.username = this.user.username;
        this.email = this.user.email;
        this.univer = this.user.university;
        this.profile = this.base_url + this.user.profile;
        this.universityService.getUniversities()
            .subscribe(function (res) {
            _this.university = res;
        }, function (err) {
            console.log(err);
        });
    };
    EditprofileComponent.prototype.uploadFile = function (event) {
        var _this = this;
        var elem = event.target;
        if (elem.files.length > 0) {
            this.file = elem.files[0];
            this.filename = elem.files[0].name;
        }
        elem.value = "";
        var formData = new FormData();
        formData.append('myfile', this.file);
        formData.append('user_id', this.user.id.toString());
        formData.append('filename', this.filename);
        this.api.uploadProfileImg(formData).subscribe(function (response) {
            _this.user.profile = _this.user.id + '_' + _this.filename;
            localStorage.setItem('currentUser', JSON.stringify(_this.user));
            _this.profile = _this.base_url + _this.user.profile;
            _this.showToast('Profile image saved!');
        });
    };
    EditprofileComponent.prototype.showToast = function (text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            duration: 1000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditprofileComponent.prototype.onBack = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('user_id', this.user.id.toString());
        formData.append('bio', this.bio);
        formData.append('username', this.username);
        formData.append('email', this.email);
        formData.append('password', this.password);
        formData.append('university', this.univer.toString());
        this.api.edit(formData).subscribe(function (response) {
            _this.showToast('Profile saved!');
            _this.user.bio = _this.bio;
            _this.user.username = _this.username;
            _this.user.email = _this.email;
            _this.user.university = _this.univer;
            localStorage.setItem('currentUser', JSON.stringify(_this.user));
        }, function (error) {
            _this.showToast('Error!');
        });
        this.modalController.dismiss();
    };
    EditprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editprofile',
            template: __webpack_require__(/*! ./editprofile.component.html */ "./src/app/dialogs/editprofile/editprofile.component.html"),
            styles: [__webpack_require__(/*! ./editprofile.component.scss */ "./src/app/dialogs/editprofile/editprofile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"], _services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"], _services_university_service__WEBPACK_IMPORTED_MODULE_4__["UniversityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], EditprofileComponent);
    return EditprofileComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/editprofile/index.ts":
/*!**********************************************!*\
  !*** ./src/app/dialogs/editprofile/index.ts ***!
  \**********************************************/
/*! exports provided: EditprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editprofile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editprofile.component */ "./src/app/dialogs/editprofile/editprofile.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditprofileComponent", function() { return _editprofile_component__WEBPACK_IMPORTED_MODULE_0__["EditprofileComponent"]; });




/***/ }),

/***/ "./src/app/dialogs/msglist/index.ts":
/*!******************************************!*\
  !*** ./src/app/dialogs/msglist/index.ts ***!
  \******************************************/
/*! exports provided: MsglistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _msglist_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./msglist.component */ "./src/app/dialogs/msglist/msglist.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MsglistComponent", function() { return _msglist_component__WEBPACK_IMPORTED_MODULE_0__["MsglistComponent"]; });




/***/ }),

/***/ "./src/app/dialogs/msglist/msglist.component.html":
/*!********************************************************!*\
  !*** ./src/app/dialogs/msglist/msglist.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-item-center\" style=\"border-bottom: 1px solid gray;\">\n  <img src=\"assets/images/back.png\" style=\"width: 8%; opacity: .42; margin-left: 4px;\" (click)=\"onMsgList();\">\n  <h5 style=\"text-align: center; width: 84%; color: #673ab7;\">Direct Messages</h5>\n</div>\n\n<ion-searchbar></ion-searchbar>\n\n<div class=\"flex-item-center\" style=\"border: 1px solid gray;\">\n  <div style=\"background-color: #FFC82C; border-radius: 100%; width: 55.33px; height: 72px; width: 72px;\"></div>\n  <div>\n    <div>AlyssaLC01</div>\n    <div>Hey, yeah, I can definetely ...</div>\n  </div>\n</div>\n\n<div class=\"flex-item-center\" style=\"border: 1px solid gray;\">\n  <div style=\"background-color: #FFC82C; border-radius: 100%; width: 55.33px; height: 72px; width: 72px;\"></div>\n  <div>\n    <div>AlyssaLC01</div>\n    <div>Hey, yeah, I can definetely ...</div>\n  </div>\n</div>\n\n<div class=\"flex-item-center\" style=\"border: 1px solid gray;\">\n  <div style=\"background-color: #FFC82C; border-radius: 100%; width: 55.33px; height: 72px; width: 72px;\"></div>\n  <div>\n    <div>AlyssaLC01</div>\n    <div>Hey, yeah, I can definetely ...</div>\n  </div>\n</div>\n\n<div style=\"height: calc(100vh - 366px)\"></div>\n\n<div class=\"flex-item-center\" style=\"border: 1px solid gray;\">\n  <div style=\"width: 90%; text-align: center; color: purple;\">Create new message</div>\n  <div style=\"width: 10%;\"><img src=\"assets/images/edit.png\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/dialogs/msglist/msglist.component.scss":
/*!********************************************************!*\
  !*** ./src/app/dialogs/msglist/msglist.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvbXNnbGlzdC9tc2dsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dialogs/msglist/msglist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dialogs/msglist/msglist.component.ts ***!
  \******************************************************/
/*! exports provided: MsglistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsglistComponent", function() { return MsglistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MsglistComponent = /** @class */ (function () {
    function MsglistComponent() {
    }
    MsglistComponent.prototype.ngOnInit = function () { };
    MsglistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-msglist',
            template: __webpack_require__(/*! ./msglist.component.html */ "./src/app/dialogs/msglist/msglist.component.html"),
            styles: [__webpack_require__(/*! ./msglist.component.scss */ "./src/app/dialogs/msglist/msglist.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MsglistComponent);
    return MsglistComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/postevent/index.ts":
/*!********************************************!*\
  !*** ./src/app/dialogs/postevent/index.ts ***!
  \********************************************/
/*! exports provided: PosteventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _postevent_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postevent.component */ "./src/app/dialogs/postevent/postevent.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PosteventComponent", function() { return _postevent_component__WEBPACK_IMPORTED_MODULE_0__["PosteventComponent"]; });




/***/ }),

/***/ "./src/app/dialogs/postevent/postevent.component.html":
/*!************************************************************!*\
  !*** ./src/app/dialogs/postevent/postevent.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div padding>\n  <div><img src=\"assets/images/back.png\" style=\"width: 5%;\" (click)=\"onClose();\"></div>\n  <div style=\"width: 60%; margin: 0 auto; background-color: #d2f7d2; border-radius: 24px;\" padding>\n    <div style=\"text-align: center;\">\n      <label style=\"color: purple; font-size: 166px;\">+\n        <ion-input type=\"file\" name=\"file\" hidden (change)=\"uploadFile($event)\"></ion-input>\n      </label>\n    </div>\n    <div style=\"text-align: center; font-size: 22px;\">Upload Flyer</div>\n  </div>\n  <ion-item>\n    <ion-label>Date</ion-label>\n    <ion-datetime display-format=\"MM/DD/YY\" style=\"border: 1px solid gray; border-radius: 8px; padding: 4px;\" placeholder=\"Pick date\" [(ngModel)]=\"date\"></ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-label>Time From:</ion-label>\n    <ion-datetime displayFormat=\"HH:mm\" placeholder=\"Pick time\" style=\"border: 1px solid gray; border-radius: 8px; padding: 4px;\" [(ngModel)]=\"timefrom\"></ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-label>Time To:</ion-label>\n    <ion-datetime displayFormat=\"HH:mm\" placeholder=\"Pick time\" style=\"border: 1px solid gray; border-radius: 8px; padding: 4px;\" [(ngModel)]=\"timeto\"></ion-datetime>\n  </ion-item>\n  <div style=\"margin-top: 12px;\">\n    <ion-label>Event Description</ion-label>\n    <ion-textarea style=\"border: 1px solid gray; border-radius: 8px; padding: 4px;\" rows=\"6\" [(ngModel)]=\"description\"></ion-textarea>\n  </div>\n  <div style=\"background-color: #bb69b5; color: white; width: 60%; text-align: center; margin: 0 auto; padding: 8px; margin-top: 24px;\" (click)=\"onSubmit();\">\n    Submit\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dialogs/postevent/postevent.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dialogs/postevent/postevent.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvcG9zdGV2ZW50L3Bvc3RldmVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dialogs/postevent/postevent.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dialogs/postevent/postevent.component.ts ***!
  \**********************************************************/
/*! exports provided: PosteventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosteventComponent", function() { return PosteventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");





var PosteventComponent = /** @class */ (function () {
    function PosteventComponent(fileService, loginService, toastController) {
        this.fileService = fileService;
        this.loginService = loginService;
        this.toastController = toastController;
    }
    PosteventComponent.prototype.ngOnInit = function () { };
    PosteventComponent.prototype.uploadFile = function (event) {
        var elem = event.target;
        if (elem.files.length > 0) {
            this.file = elem.files[0];
            this.filename = elem.files[0].name;
        }
        elem.value = "";
    };
    PosteventComponent.prototype.showToast = function (text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            duration: 1000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    PosteventComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = this.loginService.currentUserValue;
        var formData = new FormData();
        formData.append('myfile', this.file);
        formData.append('filename', this.filename);
        formData.append('date', this.date);
        formData.append('timefrom', this.timefrom);
        formData.append('timeto', this.timeto);
        formData.append('description', this.description);
        formData.append('user_id', user.id.toString());
        this.fileService.sendRequest(formData, 'post').subscribe(function (response) {
            _this.showToast('Event ' + response + ' saved!');
        });
    };
    PosteventComponent.prototype.onClose = function () {
        //this.destroy();
    };
    PosteventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-postevent',
            template: __webpack_require__(/*! ./postevent.component.html */ "./src/app/dialogs/postevent/postevent.component.html"),
            styles: [__webpack_require__(/*! ./postevent.component.scss */ "./src/app/dialogs/postevent/postevent.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"], _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], PosteventComponent);
    return PosteventComponent;
}());



/***/ }),

/***/ "./src/app/services/event.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var EventService = /** @class */ (function () {
    function EventService(httpClient) {
        this.httpClient = httpClient;
        this.newurl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.url + "/event/new";
        this.getsurl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.url + "/event/user";
        this.getoriginsurl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.url + "/event/originuser";
        this.geturl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.url + "/event";
        this.likeurl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.url + "/event/like";
        this.addcommenturl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.url + "/event/comment/add";
        this.removecommenturl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.url + "/event/comment/remove";
        this.addtolisturl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.url + "/event/add";
    }
    EventService.prototype.sendRequest = function (formData, func) {
        var url;
        if (func == 'post') {
            url = this.newurl;
        }
        else if (func == 'getorigin') {
            url = this.getoriginsurl;
        }
        else if (func == 'gets') {
            url = this.getsurl;
        }
        else if (func == 'get') {
            url = this.geturl;
        }
        else if (func == 'like') {
            url = this.likeurl;
        }
        else if (func == 'addcomment') {
            url = this.addcommenturl;
        }
        else if (func == 'removecomment') {
            url = this.removecommenturl;
        }
        else if (func == 'add') {
            url = this.addtolisturl;
        }
        return this.httpClient.post(url, formData);
    };
    EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/services/home.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/home.service.ts ***!
  \******************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var HomeService = /** @class */ (function () {
    function HomeService(httpClient) {
        this.httpClient = httpClient;
        this.nowurl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.url + "/home/nowhappening";
        this.feedurl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.url + "/home/getnews";
    }
    HomeService.prototype.sendRequest = function (formData, func) {
        var url;
        if (func == 'now') {
            url = this.nowurl;
        }
        else if (func == 'feed') {
            url = this.feedurl;
        }
        return this.httpClient.post(url, formData);
    };
    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var NotificationService = /** @class */ (function () {
    function NotificationService(httpClient) {
        this.httpClient = httpClient;
        this.indexurl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.url + "/notification/index";
        this.connecturl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.url + "/notification/connect";
    }
    NotificationService.prototype.sendRequest = function (formData, func) {
        var url;
        if (func == 'index') {
            url = this.indexurl;
        }
        else if (func == 'connect') {
            url = this.connecturl;
        }
        return this.httpClient.post(url, formData);
    };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/services/oprofile.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/oprofile.service.ts ***!
  \**********************************************/
/*! exports provided: OprofileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OprofileService", function() { return OprofileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var OprofileService = /** @class */ (function () {
    function OprofileService(api) {
        this.api = api;
        this.subscribeurl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.url + "/oprofile/subscribe";
        this.connecturl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.url + "/oprofile/connect";
        this.indexurl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.url + "/oprofile/index";
    }
    OprofileService.prototype.sendRequest = function (formData, func) {
        var url;
        if (func == 'index') {
            url = this.indexurl;
        }
        else if (func == 'subscribe') {
            url = this.subscribeurl;
        }
        else if (func == 'connect') {
            url = this.connecturl;
        }
        return this.api.post(url, formData);
    };
    OprofileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OprofileService);
    return OprofileService;
}());



/***/ }),

/***/ "./src/app/services/profile.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var ProfileService = /** @class */ (function () {
    function ProfileService(httpClient) {
        this.httpClient = httpClient;
        this.uploadurl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.url + "/profile/upload";
        this.editurl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.url + "/profile/edit";
    }
    ProfileService.prototype.uploadProfileImg = function (formData) {
        return this.httpClient.post(this.uploadurl, formData);
    };
    ProfileService.prototype.edit = function (formData) {
        return this.httpClient.post(this.editurl, formData);
    };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var SearchService = /** @class */ (function () {
    function SearchService(httpClient) {
        this.httpClient = httpClient;
        this.topEventsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.url + "/search/topevent";
        this.newEventsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.url + "/search/newevent";
        this.topUsersUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.url + "/search/toppeople";
        this.searchUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.url + "/search/people";
    }
    SearchService.prototype.sendRequest = function (formData, func) {
        var url;
        if (func == 'topEvents') {
            url = this.topEventsUrl;
        }
        else if (func == 'newEvents') {
            url = this.newEventsUrl;
        }
        else if (func == 'topUsers') {
            url = this.topUsersUrl;
        }
        else if (func == 'search') {
            url = this.searchUrl;
        }
        return this.httpClient.post(url, formData);
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/views/main/event/event.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/main/event/event.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div padding>\n  <img src=\"assets/images/back.png\" style=\"width: 8%; opacity: .42\">\n  <div class=\"flex-item-center\">\n    <div style=\"width: 90%;\" class=\"purple\" routerLink=\"/main/oprofile/{{event.user_id}}\">{{username}}</div>\n    <div style=\"width: 10%;\"><img src=\"assets/images/select.png\" style=\"opacity: .42;\"></div>\n  </div>\n  <div>\n    <img src=\"{{base_url}}{{event.image}}\" style=\"width: 100%; height: 50vh;\">\n  </div>\n  <div class=\"flex-item-center\">\n    <div style=\"width: 85%;\" class=\"flex-item-center\">\n      <img src=\"assets/images/hand.png\" class=\"image-item\" (click)=\"onLike();\">\n      <img src=\"assets/images/message.png\" class=\"image-item\" style=\"margin: 0 18px;\" (click)=\"onComment();\">\n      <img src=\"assets/images/plus.png\" class=\"image-item\" (click)=\"onAddEvent();\">\n    </div>\n    <div class=\"flex-item-center\">\n      <div style=\"background-image: url(assets/images/captummre.png); width: 75px; height: 50px; background-size: cover; padding-top: 15px; padding-left: 8px; padding-bottom: 4px;\" class=\"flex-item-center\">\n        <div style=\"width: 30%;\" class=\"flex-item-center\"><img src=\"assets/images/hand.png\"></div>\n        <div style=\"margin: 0 auto;\"><label style=\"font-size: 24px;\">{{count}}</label></div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"is_comment === 1\">\n    <ion-input padding [(ngModel)]=\"comment\"></ion-input>\n    <ion-button size=\"small\" style=\"float: right;\" (click)=\"onAddComment();\">Comment</ion-button>\n  </div>\n  <div style=\"clear: right;\">\n  </div>\n  <div><label>Come make a tie blanket for you or a loved one.</label></div>\n  <div style=\" margin-top: 12px;\"><label style=\"text-decoration: underline;\">Comments</label></div>\n  <div>\n    <div *ngFor=\"let item of comments\">\n      <label style=\"color: purple;\">{{item.user}}</label>\n      <label style=\"margin-left: 12px;\">{{item.comment}}</label>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/main/event/event.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/views/main/event/event.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-item {\n  width: 10%;\n  opacity: .42; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFpbi9ldmVudC9FOlxcV29ya1xcTXJCbGFzdFxcbXlBcHAvc3JjXFxhcHBcXHZpZXdzXFxtYWluXFxldmVudFxcZXZlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFpbi9ldmVudC9ldmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1pdGVtIHtcclxuICB3aWR0aDogMTAlO1xyXG4gIG9wYWNpdHk6IC40MjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/main/event/event.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/main/event/event.component.ts ***!
  \*****************************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");







var EventComponent = /** @class */ (function () {
    function EventComponent(route, api, loginService, toastController) {
        this.route = route;
        this.api = api;
        this.loginService = loginService;
        this.toastController = toastController;
        this.base_url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].flyer.url;
        this.comments = [];
        this.is_comment = 0;
    }
    EventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.loginService.currentUserValue;
        var id = this.route.snapshot.paramMap.get('id');
        this.event_id = id;
        var formData = new FormData();
        formData.append("id", id.toString());
        this.api.sendRequest(formData, 'get').subscribe(function (response) {
            console.log(response);
            _this.event = {
                id: response['event']['id'],
                title: response['event']['title'],
                desc: response['event']['desc'],
                startTime: response['event']['startTime'],
                endTime: response['event']['endTime'],
                user_id: response['event']['user_id'],
                image: response['event']['image']
            };
            _this.username = response['event']['user_name'];
            _this.count = response['count'];
            _this.comments = response['comments'];
        }, function (error) {
            console.log('Error');
        });
    };
    EventComponent.prototype.showToast = function (text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            duration: 1000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    EventComponent.prototype.onLike = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('user_id', this.user.id.toString());
        formData.append('event_id', this.event_id.toString());
        this.api.sendRequest(formData, 'like').subscribe(function (response) {
            if (response['success'] == true) {
                console.log('success');
                _this.count = response['count'];
            }
            else {
                _this.showToast('Already liked');
            }
        }, function (error) {
            console.log('Error');
        });
    };
    EventComponent.prototype.onComment = function () {
        if (this.is_comment == 0) {
            this.is_comment = 1;
        }
        else {
            this.is_comment = 0;
        }
    };
    EventComponent.prototype.onAddComment = function () {
        var formData = new FormData();
        formData.append('user_id', this.user.id.toString());
        formData.append('event_id', this.event_id);
        formData.append('comment', this.comment);
        this.api.sendRequest(formData, 'addcomment').subscribe(function (response) {
            if (response['success'] == true) {
                console.log('success');
            }
            else {
                //this.showToast('Already liked');
            }
        }, function (error) {
            console.log('Error');
        });
    };
    EventComponent.prototype.onAddEvent = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('user_id', this.user.id.toString());
        formData.append('event_id', this.event_id);
        this.api.sendRequest(formData, 'add').subscribe(function (response) {
            if (response['success'] == true) {
                _this.showToast('Successfuly added');
            }
            else {
                _this.showToast('Already added');
            }
        }, function (error) {
            console.log('Error');
        });
    };
    EventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/views/main/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.scss */ "./src/app/views/main/event/event.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"], _services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/views/main/event/index.ts":
/*!*******************************************!*\
  !*** ./src/app/views/main/event/index.ts ***!
  \*******************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.component */ "./src/app/views/main/event/event.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return _event_component__WEBPACK_IMPORTED_MODULE_0__["EventComponent"]; });




/***/ }),

/***/ "./src/app/views/main/getticket/getticket.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/main/getticket/getticket.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div padding>\n  <div class=\"flex-item-center\">\n    <img src=\"assets/images/back.png\" style=\"width: 8%; opacity: .42\">\n    <div>Learn more about Sponsorship</div>\n  </div>\n  <div>\n    <img src=\"assets/images/flyers/1.png\">\n  </div>\n  <div class=\"flex-item-center\">\n    <div style=\"width: 85%;\">\n      <img src=\"assets/images/hand.png\" class=\"image-item\">\n      <img src=\"assets/images/plus.png\" class=\"image-item\">\n    </div>\n    <div>\n      <div style=\"background-image: url(assets/images/captummre.png); width: 100px; height: 40px;\">\n      </div>\n    </div>\n  </div>\n  <div style=\"color: gray;\">\n    Hot97 WhosNext presents UNDISPUTED by  Def Jam feat. Danileigh, Nimic Revenue, Dominic Lord, TJ Porter, S3nsi Molly x Lil Brook. Hosted by Shani Kulture and music by DJ Juanyto.\n  </div>\n  <div style=\"border: 1px solid black; padding: 4px;\">\n    <div style=\"display: flex; align-items: center; margin-top: 12px;\">\n      <div style=\"width: 30%;\"></div>\n      <div style=\"width: 30%; border-bottom: 1px solid black;\">Sale Ends</div>\n      <div style=\"width: 15%; border-bottom: 1px solid black;\">Price</div>\n      <div style=\"width: 25%; border-bottom: 1px solid black;\">Quantity</div>\n    </div>\n    <div style=\"display: flex; align-items: center;\">\n      <div style=\"width: 30%;\">Early Bird</div>\n      <div style=\"width: 30%;\">January 20, 2017</div>\n      <div style=\"width: 15%;\">$25</div>\n      <div style=\"width: 25%;\">Sale Ended</div>\n    </div>\n    <div style=\"display: flex; align-items: center;\">\n      <div style=\"width: 30%;\">General Admission</div>\n      <div style=\"width: 30%;\">Febuary 25, 2019</div>\n      <div style=\"width: 15%;\">$30</div>\n      <div style=\"width: 25%;\">\n        <ion-select placeholder=\"Select Quantity\">\n          <ion-select-option value=\"1\">1</ion-select-option>\n          <ion-select-option value=\"2\">2</ion-select-option>\n        </ion-select>\n      </div>\n    </div>\n    <div style=\"display: flex; align-items: center;\">\n      <div style=\"width: 30%;\">Fees & Taxes</div>\n      <div style=\"width: 30%;\"></div>\n      <div style=\"width: 15%;\">$2.75</div>\n      <div style=\"width: 25%;\"></div>\n    </div>\n  </div>\n  <div style=\"display: flex; align-items: center; float: right; margin-top: 8px;\">\n    <div>Total Price: </div>\n    <div style=\"border: 1px solid gray; padding: 8px; margin-left: 16px;\">$31.20</div>\n  </div>\n  <img src=\"assets/images/paypal.png\" style=\"width: 30%; float: right; clear:right; margin-top: 8px;\" (click)=\"onGetTicket();\">\n  <div style=\"clear: right;\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/main/getticket/getticket.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/views/main/getticket/getticket.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-item {\n  width: 10%;\n  opacity: .42; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFpbi9nZXR0aWNrZXQvRTpcXFdvcmtcXE1yQmxhc3RcXG15QXBwL3NyY1xcYXBwXFx2aWV3c1xcbWFpblxcZ2V0dGlja2V0XFxnZXR0aWNrZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFpbi9nZXR0aWNrZXQvZ2V0dGlja2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLWl0ZW0ge1xyXG4gIHdpZHRoOiAxMCU7XHJcbiAgb3BhY2l0eTogLjQyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/main/getticket/getticket.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/main/getticket/getticket.component.ts ***!
  \*************************************************************/
/*! exports provided: GetticketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetticketComponent", function() { return GetticketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/paypal/ngx */ "./node_modules/@ionic-native/paypal/ngx/index.js");



var GetticketComponent = /** @class */ (function () {
    function GetticketComponent(payPal) {
        this.payPal = payPal;
    }
    GetticketComponent.prototype.ngOnInit = function () { };
    GetticketComponent.prototype.onGetTicket = function () {
        var _this = this;
        this.payPal.init({
            PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
            PayPalEnvironmentSandbox: 'YOUR_SANDBOX_CLIENT_ID'
        }).then(function () {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            _this.payPal.prepareToRender('PayPalEnvironmentSandbox', new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__["PayPalConfiguration"]({
            // Only needed if you get an "Internal Service Error" after PayPal login!
            //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
            })).then(function () {
                var payment = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__["PayPalPayment"]('3.33', 'USD', 'Description', 'sale');
                _this.payPal.renderSinglePaymentUI(payment).then(function () {
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
                }, function () {
                    // Error or render dialog closed without being successful
                });
            }, function () {
                // Error in configuration
            });
        }, function () {
            // Error in initialization, maybe PayPal isn't supported or something else
        });
    };
    GetticketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-getticket',
            template: __webpack_require__(/*! ./getticket.component.html */ "./src/app/views/main/getticket/getticket.component.html"),
            styles: [__webpack_require__(/*! ./getticket.component.scss */ "./src/app/views/main/getticket/getticket.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__["PayPal"]])
    ], GetticketComponent);
    return GetticketComponent;
}());



/***/ }),

/***/ "./src/app/views/main/getticket/index.ts":
/*!***********************************************!*\
  !*** ./src/app/views/main/getticket/index.ts ***!
  \***********************************************/
/*! exports provided: GetticketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getticket_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getticket.component */ "./src/app/views/main/getticket/getticket.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetticketComponent", function() { return _getticket_component__WEBPACK_IMPORTED_MODULE_0__["GetticketComponent"]; });




/***/ }),

/***/ "./src/app/views/main/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/views/main/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div padding class=\"background\">\n  <div class=\"text-center\">\n    <img src=\"assets/images/logo1.png\" style=\"width: 30%;\">\n    <img src=\"assets/images/profile.jpg\" style=\"float: right; width: 10%;\">\n  </div>\n  <div class=\"border-top\" *ngIf=\"fNow === 1\">\n    <div class=\"title\">Happening Now</div>\n    <div>\n      <ion-slides pager=\"false\" [options]=\"slideOpts\" *ngFor=\"let nowEvent of nowEvents\">\n          <ion-slide routerLink=\"/main/event/{{nowEvent.id}}\">\n            <div class=\"padding\">\n              <div style=\"height: 200px;\"><img src=\"{{base_url}}{{nowEvent.image}}\"></div>\n              <div class=\"border\">{{nowEvent.startTime}} ~ {{nowEvent.endTime}}</div>\n            </div>\n          </ion-slide>\n        </ion-slides>\n    </div>\n  </div>\n  <div class=\"border-top\" *ngIf=\"fNow === 0\" style=\"padding-top: 12px;\">No happenings</div>\n  <div class=\"border-top space-top-12\">\n    <div class=\"title\">Event of the Week</div>\n    <div style=\"margin-top: 12px;\">\n      <div style=\"float: right;\">Sponsership</div>\n      <img src=\"assets/images/sponsorship.png\">\n    </div>\n    <div class=\"link-item\" routerLink=\"/main/getticket\">Get Tickets</div>\n  </div>\n\n  <div class=\"border-top space-top-12\">\n    <div class=\"title\">News Feed</div>\n    <div class=\"border-top\" *ngIf=\"fNews === 0\" style=\"padding-top: 12px;\">No happenings</div>\n    <div *ngIf=\"fNews === 1\">\n      <div style=\"margin-top: 12px;\" *ngFor=\"let item of news\">\n        <div style=\"float: left;\" class=\"purple\">{{item.user_name}}</div>\n        <div style=\"float: right; width: 10%;\"><img src=\"assets/images/select.png\" style=\"opacity: .42;\"  routerLink=\"/main/event/{{item.id}}\"></div>\n        <img src=\"{{base_url}}{{item.image}}\">\n        <div class=\"flex-item-center\">\n          <div style=\"width: 85%;\" class=\"flex-item-center\">\n            <img src=\"assets/images/hand.png\" class=\"image-item\" (click)=\"onLike(item.id);\">\n            <img src=\"assets/images/message.png\" class=\"image-item\" style=\"margin: 0 18px;\" (click)=\"onComment(item.id);\">\n            <img src=\"assets/images/plus.png\" class=\"image-item\" (click)=\"onAddEvent(item.id);\">\n          </div>\n          <div class=\"flex-item-center\">\n            <div style=\"background-image: url(assets/images/captummre.png); width: 75px; height: 50px; background-size: cover; padding-top: 15px; padding-left: 8px; padding-bottom: 4px;\" class=\"flex-item-center\">\n              <div style=\"width: 30%;\" class=\"flex-item-center\"><img src=\"assets/images/hand.png\"></div>\n              <div style=\"margin: 0 auto;\"><label style=\"font-size: 24px;\">{{item.count}}</label></div>\n            </div>\n          </div>\n        </div>\n        <div>{{item.desc}}</div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"is_comment === 1\" style=\"position: fixed; bottom: 24px; width: calc(100% - 32px); z-index: 999;\">\n    <ion-input padding [(ngModel)]=\"comment\"></ion-input>\n    <ion-button size=\"small\" style=\"float: right;\" (click)=\"onAddComment();\">Comment</ion-button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/main/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/views/main/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  color: #4B5B6A;\n  margin-left: 10px;\n  padding: 5px; }\n\n.border-top {\n  border-top: 1px solid gray; }\n\n.border {\n  border: 1px solid gray; }\n\n.padding {\n  padding: 2px; }\n\n.image-item {\n  width: 10%;\n  opacity: .42; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFpbi9ob21lL0U6XFxXb3JrXFxNckJsYXN0XFxteUFwcC9zcmNcXGFwcFxcdmlld3NcXG1haW5cXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTs7QUFHZDtFQUNFLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLFVBQVU7RUFDVixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9tYWluL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgY29sb3I6ICM0QjVCNkE7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYm9yZGVyLXRvcCB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbn1cclxuXHJcbi5wYWRkaW5nIHtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbi5pbWFnZS1pdGVtIHtcclxuICB3aWR0aDogMTAlO1xyXG4gIG9wYWNpdHk6IC40MjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/main/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/main/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");








var HomeComponent = /** @class */ (function () {
    function HomeComponent(modalController, api, loginService, toastController, eventapi) {
        this.modalController = modalController;
        this.api = api;
        this.loginService = loginService;
        this.toastController = toastController;
        this.eventapi = eventapi;
        this.base_url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].flyer.url;
        this.nowEvents = [];
        this.news = [];
        this.fNow = 0;
        this.fNews = 0;
        this.is_comment = 0;
        this.temp_id = -1;
        this.slideOpts = {
            slidesPerView: 2
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.loginService.currentUserValue;
        var formData = new FormData();
        this.api.sendRequest(formData, 'now').subscribe(function (response) {
            if (response['success'] == true) {
                _this.nowEvents = response['events'];
                _this.fNow = 1;
            }
            else {
                _this.fNow = 0;
            }
        }, function (error) {
            console.log('Error');
            _this.fNow = 0;
        });
        formData.append('user_id', this.user.id.toString());
        this.api.sendRequest(formData, 'feed').subscribe(function (response) {
            if (response['success'] == true) {
                _this.news = response['result'];
                _this.fNews = 1;
            }
            else {
                _this.fNews = 0;
            }
        }, function (error) {
            console.log('Error');
            _this.fNews = 0;
        });
    };
    HomeComponent.prototype.getTicket = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    HomeComponent.prototype.showToast = function (text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            duration: 1000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.onLike = function (id) {
        var _this = this;
        var formData = new FormData();
        formData.append('user_id', this.user.id.toString());
        formData.append('event_id', id.toString());
        this.eventapi.sendRequest(formData, 'like').subscribe(function (response) {
            if (response['success'] == true) {
            }
            else {
                _this.showToast('Already liked');
            }
        }, function (error) {
            console.log('Error');
        });
        this.api.sendRequest(formData, 'feed').subscribe(function (response) {
            if (response['success'] == true) {
                _this.news = response['result'];
                _this.fNews = 1;
            }
            else {
                _this.fNews = 0;
            }
        }, function (error) {
            console.log('Error');
            _this.fNews = 0;
        });
    };
    HomeComponent.prototype.onComment = function (id) {
        if (this.is_comment == 0) {
            this.is_comment = 1;
        }
        else {
            this.is_comment = 0;
        }
        this.temp_id = id;
    };
    HomeComponent.prototype.onAddComment = function () {
        var formData = new FormData();
        formData.append('user_id', this.user.id.toString());
        formData.append('event_id', this.temp_id.toString());
        this.temp_id = -1;
        formData.append('comment', this.comment);
        this.eventapi.sendRequest(formData, 'addcomment').subscribe(function (response) {
            if (response['success'] == true) {
                console.log('success');
            }
            else {
                //this.showToast('Already liked');
            }
        }, function (error) {
            console.log('Error');
        });
    };
    HomeComponent.prototype.onAddEvent = function (id) {
        var _this = this;
        var formData = new FormData();
        formData.append('user_id', this.user.id.toString());
        formData.append('event_id', id.toString());
        console.log(id);
        console.log(this.user.id);
        this.eventapi.sendRequest(formData, 'add').subscribe(function (response) {
            if (response['success'] == true) {
                _this.showToast('Successfuly added');
            }
            else {
                _this.showToast('Already added');
            }
        }, function (error) {
            console.log('Error');
        });
        this.is_comment = 0;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/views/main/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/views/main/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"], _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/main/home/index.ts":
/*!******************************************!*\
  !*** ./src/app/views/main/home/index.ts ***!
  \******************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/views/main/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/views/main/main-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/main/main-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/app/views/main/home/index.ts");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event */ "./src/app/views/main/event/index.ts");
/* harmony import */ var _getticket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getticket */ "./src/app/views/main/getticket/index.ts");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile */ "./src/app/views/main/profile/index.ts");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search */ "./src/app/views/main/search/index.ts");
/* harmony import */ var _oprofile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./oprofile */ "./src/app/views/main/oprofile/index.ts");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notification */ "./src/app/views/main/notification/index.ts");
/* harmony import */ var _dialogs_postevent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../dialogs/postevent */ "./src/app/dialogs/postevent/index.ts");











var routes = [
    {
        path: 'main',
        children: [
            {
                path: 'home',
                component: _home__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            },
            {
                path: 'search',
                component: _search__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"]
            },
            {
                path: 'notification',
                component: _notification__WEBPACK_IMPORTED_MODULE_9__["NotificationComponent"]
            },
            {
                path: 'event/:id',
                component: _event__WEBPACK_IMPORTED_MODULE_4__["EventComponent"]
            },
            {
                path: 'getticket',
                component: _getticket__WEBPACK_IMPORTED_MODULE_5__["GetticketComponent"]
            },
            {
                path: 'profile',
                component: _profile__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]
            },
            {
                path: 'oprofile/:id',
                component: _oprofile__WEBPACK_IMPORTED_MODULE_8__["OprofileComponent"]
            },
            {
                path: 'post',
                component: _dialogs_postevent__WEBPACK_IMPORTED_MODULE_10__["PosteventComponent"]
            }
        ]
    }
];
var MainRoutingModule = /** @class */ (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MainRoutingModule);
    return MainRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/main/main.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/main/main.module.ts ***!
  \*******************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/index.js");
/* harmony import */ var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/paypal/ngx */ "./node_modules/@ionic-native/paypal/ngx/index.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/views/main/main-routing.module.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home */ "./src/app/views/main/home/index.ts");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./event */ "./src/app/views/main/event/index.ts");
/* harmony import */ var _getticket__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./getticket */ "./src/app/views/main/getticket/index.ts");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile */ "./src/app/views/main/profile/index.ts");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search */ "./src/app/views/main/search/index.ts");
/* harmony import */ var _oprofile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./oprofile */ "./src/app/views/main/oprofile/index.ts");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./notification */ "./src/app/views/main/notification/index.ts");
/* harmony import */ var _dialogs_postevent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../dialogs/postevent */ "./src/app/dialogs/postevent/index.ts");
/* harmony import */ var _dialogs_msglist__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../dialogs/msglist */ "./src/app/dialogs/msglist/index.ts");
/* harmony import */ var _dialogs_editprofile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../dialogs/editprofile */ "./src/app/dialogs/editprofile/index.ts");



















var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _event__WEBPACK_IMPORTED_MODULE_10__["EventComponent"], _getticket__WEBPACK_IMPORTED_MODULE_11__["GetticketComponent"],
                _profile__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"], _dialogs_postevent__WEBPACK_IMPORTED_MODULE_16__["PosteventComponent"], _dialogs_msglist__WEBPACK_IMPORTED_MODULE_17__["MsglistComponent"], _dialogs_editprofile__WEBPACK_IMPORTED_MODULE_18__["EditprofileComponent"], _search__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"], _oprofile__WEBPACK_IMPORTED_MODULE_14__["OprofileComponent"], _notification__WEBPACK_IMPORTED_MODULE_15__["NotificationComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _main_routing_module__WEBPACK_IMPORTED_MODULE_8__["MainRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(),
                ionic2_calendar__WEBPACK_IMPORTED_MODULE_6__["NgCalendarModule"]
            ],
            providers: [
                _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_7__["PayPal"]
            ],
            entryComponents: [_dialogs_postevent__WEBPACK_IMPORTED_MODULE_16__["PosteventComponent"], _dialogs_msglist__WEBPACK_IMPORTED_MODULE_17__["MsglistComponent"], _dialogs_editprofile__WEBPACK_IMPORTED_MODULE_18__["EditprofileComponent"]]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/views/main/notification/index.ts":
/*!**************************************************!*\
  !*** ./src/app/views/main/notification/index.ts ***!
  \**************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.component */ "./src/app/views/main/notification/notification.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return _notification_component__WEBPACK_IMPORTED_MODULE_0__["NotificationComponent"]; });




/***/ }),

/***/ "./src/app/views/main/notification/notification.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/main/notification/notification.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 24px;padding-left: 12px;padding-bottom: 4px;border-bottom: 1px solid gray;\">\n  Notifications\n</div>\n<div padding *ngFor=\"let connection of connections\">\n  <div class=\"flex-item-center\">\n    <img src=\"{{profile_url}}{{connection.profile}}\" style=\"width: 20%; border-radius: 100%;\">\n    <div style=\"width: 55%; text-align: center;\">{{connection.user_name}} asked to connect!</div>\n    <div class=\"link-item\" style=\"width: 25%;\" (click)=\"onAccept(connection.user_id);\">Accept</div>\n  </div>\n</div>\n<div padding *ngFor=\"let log of logs\">\n  <div class=\"flex-item-center\">\n    <img src=\"{{profile_url}}{{log.profile}}\" style=\"width: 20%; border-radius: 100%;\">\n    <div style=\"width: 80%; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;\">{{log.name}} and you are now connected.</div>\n  </div>\n</div>\n<div padding *ngFor=\"let history of historys\">\n  <div class=\"flex-item-center\">\n    <div style=\"width: 80%; text-align: center;\">{{history.user_name}} and {{history.count}} people like this event!.</div>\n    <img src=\"{{flyer_url}}{{history.event_image}}\" style=\"width: 20%;\" routerLink=\"/main/event/{{history.value2}}\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/main/notification/notification.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/views/main/notification/notification.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21haW4vbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/main/notification/notification.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/main/notification/notification.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");






var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(api, loginService, toastController) {
        this.api = api;
        this.loginService = loginService;
        this.toastController = toastController;
        this.profile_url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].profile.url;
        this.flyer_url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].flyer.url;
        this.connections = [];
        this.logs = [];
        this.historys = [];
    }
    NotificationComponent.prototype.ngOnInit = function () {
        this.user = this.loginService.currentUserValue;
        this.doInit();
    };
    NotificationComponent.prototype.doInit = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('user_id', this.user.id.toString());
        this.api.sendRequest(formData, 'index').subscribe(function (response) {
            _this.connections = response['connection'];
            _this.logs = response['log'];
            _this.historys = response['users'];
        }, function (error) {
            console.log('Error');
        });
    };
    NotificationComponent.prototype.showToast = function (text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            duration: 1000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationComponent.prototype.onAccept = function (id) {
        var _this = this;
        var formData = new FormData();
        formData.append('user1', this.user.id.toString());
        formData.append('user2', id.toString());
        this.api.sendRequest(formData, 'connect').subscribe(function (response) {
            if (response['success'] == true) {
                _this.doInit();
                _this.showToast(response['user'] + ' is connected!');
            }
        }, function (error) {
            console.log('Error');
        });
    };
    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/views/main/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/views/main/notification/notification.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/views/main/oprofile/index.ts":
/*!**********************************************!*\
  !*** ./src/app/views/main/oprofile/index.ts ***!
  \**********************************************/
/*! exports provided: OprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _oprofile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oprofile.component */ "./src/app/views/main/oprofile/oprofile.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OprofileComponent", function() { return _oprofile_component__WEBPACK_IMPORTED_MODULE_0__["OprofileComponent"]; });




/***/ }),

/***/ "./src/app/views/main/oprofile/oprofile.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/main/oprofile/oprofile.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-item-center\" style=\"border-bottom: 1px solid gray;\">\n  <img src=\"assets/images/back.png\" style=\"width: 8%; opacity: .42; margin-left: 4px;\">\n  <h5 style=\"text-align: center; width: 84%;\">{{name}}</h5>\n  <img src=\"assets/images/mail.png\" style=\"width: 8%; margin-right: 4px;\">\n</div>\n<div class=\"flex-item-center\">\n  <div style=\"width: 60%;\">\n    <div text-center><label style=\"font-size: 18px; font-family: Roboto Slab;\">{{name}}</label></div>\n    <div>\n      <div text-center><label style=\"color: #47525E;font-family: Roboto Slab;font-size: 50px; font-weight: 700; line-height: 41px;text-align: left;\">{{connections}}</label></div>\n      <div text-center style=\"font-size: 16px; font-family: Roboto Slab;\">Connections</div>\n    </div>\n  </div>\n  <div style=\"width: 40%;\" padding>\n    <div><img src=\"{{profileUrl}}{{profile}}\"></div>\n  </div>\n</div>\n<div class=\"flex-item-center\" style=\"font-size: 14px;\">\n  <div style=\"width: 60%;\" padding>\n\n  </div>\n  <div style=\"width: 40%;\" padding *ngIf=\"type === 1\">\n    <div *ngIf=\"isConnected === false\" style=\"padding: 4px 16px; color: white; background-color: #520971; border-radius: 20px;\" text-center (click)=\"onConnect();\">Connect</div>\n    <div *ngIf=\"isConnected === true && isApproved\" style=\"padding: 4px 16px; color: white; background-color: #520971d8; border-radius: 20px;\" text-center (click)=\"onConnect();\">Connected</div>\n    <div *ngIf=\"isConnected === true && !isApproved\" style=\"padding: 4px 16px; color: white; background-color: #520971d8; border-radius: 20px;\" text-center (click)=\"onConnect();\">Pending</div>\n  </div>\n  <div style=\"width: 40%;\" padding *ngIf=\"type == 2\">\n    <div *ngIf=\"isSubscribed === false\" style=\"padding: 4px 16px; color: white; background-color: #520971; border-radius: 20px;\" text-center (click)=\"onSubscribe();\">Subscribe</div>\n    <div *ngIf=\"isSubscribed === true\" style=\"padding: 4px 16px; color: white; background-color: #520971d8; border-radius: 20px;\" text-center (click)=\"onSubscribe();\">Subscribed</div>\n  </div>\n</div>\n<div style=\"padding: 16px;\"><ion-textarea [(ngModel)]=\"bio\" style=\"border: 1px solid gray; padding: 4px;\"></ion-textarea></div>\n<div class=\"flex-div\">\n  <div style=\"width: 100%; border: 1px solid black; padding: 8px;\" text-center>Events</div>\n</div>\n<div style=\"display: flex; margin-top: 12px; justify-content: space-between; flex-flow: row wrap; padding: 0 4px;\">\n  <div *ngFor=\"let event of events\" style=\"width: 30%;\">\n    <div style=\"text-align: center; border: 1px solid gray;\"><label>{{ event.day }}</label></div>\n    <img src=\"{{imgUrl}}{{event.image}}\" style=\"width: 100%; height: 160px;\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/main/oprofile/oprofile.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/views/main/oprofile/oprofile.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21haW4vb3Byb2ZpbGUvb3Byb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/main/oprofile/oprofile.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/main/oprofile/oprofile.component.ts ***!
  \***********************************************************/
/*! exports provided: OprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OprofileComponent", function() { return OprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _services_oprofile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/oprofile.service */ "./src/app/services/oprofile.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");







var OprofileComponent = /** @class */ (function () {
    function OprofileComponent(route, api, eventService, loginService) {
        this.route = route;
        this.api = api;
        this.eventService = eventService;
        this.loginService = loginService;
        this.imgUrl = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].flyer.url;
        this.profileUrl = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].profile.url;
        this.events = [];
        this.profile = "none.png";
        this.isSubscribed = true;
        this.isConnected = true;
        this.isApproved = false;
    }
    OprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        this.user = this.loginService.currentUserValue;
        var formData = new FormData();
        formData.append('user_id', this.id);
        this.eventService.sendRequest(formData, 'getorigin')
            .subscribe(function (res) {
            _this.events = res;
            console.log(_this.events);
        }, function (err) {
            console.log(err);
        });
        var form = new FormData();
        form.append('user_id', this.user.id.toString());
        form.append('org_id', this.id);
        this.api.sendRequest(form, 'index')
            .subscribe(function (res) {
            _this.name = res['name'];
            _this.bio = res['bio'];
            _this.profile = res['profile'];
            _this.connections = res['connections'];
            _this.type = res['privilege'];
            if (_this.type == 2)
                _this.isSubscribed = res['subscribed'];
            else {
                _this.isConnected = res['connected'];
                _this.isApproved = res['approved'];
            }
        }, function (err) {
            console.log(err);
        });
    };
    OprofileComponent.prototype.onSubscribe = function () {
        var _this = this;
        this.isSubscribed = !this.isSubscribed;
        var formData = new FormData();
        formData.append('user_id', this.user.id.toString());
        formData.append('org_id', this.id);
        formData.append('flag', this.isSubscribed.toString());
        this.api.sendRequest(formData, 'subscribe')
            .subscribe(function (res) {
            _this.isSubscribed = res['subscribed'];
        }, function (err) {
            console.log(err);
        });
    };
    OprofileComponent.prototype.onConnect = function () {
        var _this = this;
        this.isConnected = !this.isConnected;
        var formData = new FormData();
        formData.append('user_id', this.user.id.toString());
        formData.append('org_id', this.id);
        formData.append('flag', this.isConnected.toString());
        this.api.sendRequest(formData, 'connect')
            .subscribe(function (res) {
            _this.isConnected = res['connected'];
            _this.isApproved = false;
        }, function (err) {
            console.log(err);
        });
    };
    OprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-oprofile',
            template: __webpack_require__(/*! ./oprofile.component.html */ "./src/app/views/main/oprofile/oprofile.component.html"),
            styles: [__webpack_require__(/*! ./oprofile.component.scss */ "./src/app/views/main/oprofile/oprofile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_oprofile_service__WEBPACK_IMPORTED_MODULE_4__["OprofileService"], _services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"], _services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], OprofileComponent);
    return OprofileComponent;
}());



/***/ }),

/***/ "./src/app/views/main/profile/index.ts":
/*!*********************************************!*\
  !*** ./src/app/views/main/profile/index.ts ***!
  \*********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component */ "./src/app/views/main/profile/profile.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return _profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"]; });




/***/ }),

/***/ "./src/app/views/main/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/main/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-item-center\" style=\"border-bottom: 1px solid gray;\">\n  <img src=\"assets/images/back.png\" style=\"width: 8%; opacity: .42; margin-left: 4px;\">\n  <h5 style=\"text-align: center; width: 84%;\">Bastidas_A1</h5>\n  <img src=\"assets/images/mail.png\" style=\"width: 8%; margin-right: 4px;\">\n</div>\n<div class=\"flex-item-center\">\n  <div style=\"width: 60%;\">\n    <div><h3 style=\"text-align: center;\">Alex Bastidas</h3></div>\n    <div class=\"flex-div\">\n      <div style=\"border-right: 1px solid black; width: 50%;\">\n        <div><h2 text-center>28</h2></div>\n        <div text-center>Organizations</div>\n      </div>\n      <div style=\"width: 50%;\">\n        <div text-center><h2>403</h2></div>\n        <div text-center>Connections</div>\n      </div>\n    </div>\n  </div>\n  <div style=\"width: 40%;\" padding>\n    <div><img src=\"assets/images/profile.png\"></div>\n    <div style=\"padding: 8px 16px; border: 1px solid black;\" text-center (click)=\"onEditProfile();\">Edit Profile</div>\n  </div>\n</div>\n<div style=\"padding: 16px;\"><ion-textarea [(ngModel)]=\"bio\" style=\"border: 1px solid gray; padding: 4px;\"></ion-textarea></div>\n<div class=\"flex-div\">\n  <div style=\"width: 50%; border: 1px solid black; padding: 8px;\" [ngClass]=\"{'active': isMode === 0}\" text-center (click)=\"onEvent();\">Added Events</div>\n  <div style=\"width: 50%; border: 1px solid black; padding: 8px;\" [ngClass]=\"{'active': isMode === 1}\" text-center (click)=\"onCalendar();\">Calendar</div>\n</div>\n<div style=\"display: flex; margin-top: 12px; justify-content: space-between; flex-flow: row wrap; padding: 0 4px;\" *ngIf=\"isMode === 0\">\n  <div *ngFor=\"let event of events\" style=\"width: 30%;\">\n    <div style=\"text-align: center; border: 1px solid gray;\"><label>{{ event.day }}</label></div>\n    <img src=\"{{imgUrl}}{{event.image}}\" style=\"width: 100%; height: 160px;\">\n  </div>\n</div>\n<div  *ngIf=\"isMode === 1\">\n  <div style=\"font-size: 22px; color: #81a6c5; margin-left: 24px;\">{{viewTitle}}</div>\n  <calendar\n  [eventSource]=\"eventSource\"\n  [calendarMode]=\"calendar.mode\"\n  [currentDate]=\"calendar.currentDate\"\n  (onTitleChanged)=\"onViewTitleChanged($event)\"\n  startHour=\"6\"\n  endHour=\"20\"\n  step=\"30\"\n  startingDayWeek=\"1\">\n  </calendar>\n</div>\n"

/***/ }),

/***/ "./src/app/views/main/profile/profile.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/views/main/profile/profile.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  background-color: #eee; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFpbi9wcm9maWxlL0U6XFxXb3JrXFxNckJsYXN0XFxteUFwcC9zcmNcXGFwcFxcdmlld3NcXG1haW5cXHByb2ZpbGVcXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21haW4vcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/main/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/main/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dialogs_msglist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../dialogs/msglist */ "./src/app/dialogs/msglist/index.ts");
/* harmony import */ var _dialogs_editprofile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../dialogs/editprofile */ "./src/app/dialogs/editprofile/index.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");








var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(modalController, loginService, eventService) {
        this.modalController = modalController;
        this.loginService = loginService;
        this.eventService = eventService;
        this.imgUrl = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].flyer.url;
        this.isMode = 0;
        this.events = [];
        this.event = {
            title: '',
            desc: '',
            startTime: '',
            endTime: '',
            allDay: false
        };
        this.eventSource = [];
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.loginService.currentUserValue;
        this.bio = this.user.bio;
        var formData = new FormData();
        formData.append('user_id', this.user.id.toString());
        this.eventService.sendRequest(formData, 'gets')
            .subscribe(function (res) {
            _this.events = res;
            var i = 0;
            for (i = 0; i < _this.events.length; i++) {
                _this.eventSource.push({
                    title: 'Event',
                    desc: _this.events[i].desc,
                    startTime: new Date(_this.events[i].startTime),
                    endTime: new Date(_this.events[i].endTime),
                    allDay: false
                });
            }
            console.log(_this.events);
        }, function (err) {
            console.log(err);
        });
    };
    ProfileComponent.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    ProfileComponent.prototype.onEditProfile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _dialogs_editprofile__WEBPACK_IMPORTED_MODULE_4__["EditprofileComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfileComponent.prototype.onMsgList = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _dialogs_msglist__WEBPACK_IMPORTED_MODULE_3__["MsglistComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfileComponent.prototype.onEvent = function () {
        this.isMode = 0;
    };
    ProfileComponent.prototype.onCalendar = function () {
        this.isMode = 1;
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/main/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/views/main/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"], _services_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/main/search/index.ts":
/*!********************************************!*\
  !*** ./src/app/views/main/search/index.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.component */ "./src/app/views/main/search/search.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return _search_component__WEBPACK_IMPORTED_MODULE_0__["SearchComponent"]; });




/***/ }),

/***/ "./src/app/views/main/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/views/main/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-searchbar [(ngModel)]=\"skey\" (ionChange)=\"onInput($event)\"></ion-searchbar>\n<div *ngIf=\"flag === 0\" style=\"padding-left: 8px;\">No mathces</div>\n<div *ngIf=\"flag === 1\">\n  <label style=\"margin-left: 8px;\">People you might know</label>\n  <ion-slides style=\"margin-top: 12px;\" [options]=\"slideOpts2\">\n    <ion-slide *ngFor=\"let topUser of topUsers\">\n      <div style=\"width: 100%;\">\n        <img src=\"{{base_profile_url}}{{topUser.profile}}\">\n        <div style=\"text-overflow: ellipsis; white-space: nowrap; overflow: hidden;\">{{topUser.name}}</div>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</div>\n<div style=\"margin-top: 12px;\">\n  <label style=\"margin-left: 8px;\">Top recommended</label>\n  <div style=\"border: 1px solid gray;\">\n    <ion-slides [options]=\"slideOpts\" style=\"margin: 8px 0;\">\n      <ion-slide *ngFor=\"let topEvent of topEvents\"><img src=\"{{base_flyer_url}}{{topEvent.image}}\" style=\"height: 200px;\"></ion-slide>\n    </ion-slides>\n  </div>\n</div>\n<div style=\"margin-top: 12px;\">\n  <label style=\"margin-left: 8px;\">Explore New Events</label>\n  <div class=\"flex-div\" style=\"justify-content: space-between; margin-top: 12px; flex-direction: column; flex-wrap: wrap;\" [ngStyle]=\"{'height': height}\">\n      <img *ngFor=\"let newEvent of newEvents\" src=\"{{base_flyer_url}}{{newEvent.image}}\" style=\"width: 49%; max-height: 200px;\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/main/search/search.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/views/main/search/search.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21haW4vc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/main/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/main/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");





var SearchComponent = /** @class */ (function () {
    function SearchComponent(api, loginService) {
        this.api = api;
        this.loginService = loginService;
        this.base_flyer_url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].flyer.url;
        this.base_profile_url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].profile.url;
        this.topEvents = [];
        this.newEvents = [];
        this.topUsers = [];
        this.flag = 0;
        this.height = '600px';
        this.slideOpts = {
            slidesPerView: 2
        };
        this.slideOpts2 = {
            slidesPerView: 5
        };
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.loginService.currentUserValue;
        var formData = new FormData();
        this.api.sendRequest(formData, 'topEvents')
            .subscribe(function (res) {
            _this.topEvents = res;
        }, function (err) {
            console.log(err);
        });
        var count;
        this.api.sendRequest(formData, 'newEvents')
            .subscribe(function (res) {
            _this.newEvents = res;
            count = _this.newEvents.length;
            if (count % 2 == 1)
                count++;
            _this.height = (count / 2 * 200).toString() + 'px';
        }, function (err) {
            console.log(err);
        });
        formData.append('user_id', this.user.id.toString());
        this.api.sendRequest(formData, 'topUsers')
            .subscribe(function (res) {
            _this.topUsers = res;
            _this.flag = 1;
        }, function (err) {
            console.log(err);
            _this.flag = 0;
        });
    };
    SearchComponent.prototype.onInput = function ($event) {
        var _this = this;
        var formData = new FormData();
        formData.append('key', this.skey);
        this.api.sendRequest(formData, 'search')
            .subscribe(function (res) {
            if (res['success'] == true) {
                _this.topUsers = res['users'];
                _this.flag = 1;
            }
            else {
                _this.flag = 0;
            }
        }, function (err) {
            console.log(err);
            _this.flag = 0;
        });
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/views/main/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/views/main/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"], _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-main-main-module.js.map