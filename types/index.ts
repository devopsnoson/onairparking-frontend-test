import { Dayjs } from 'dayjs';

export interface ISearch {
  searchType?: string;
  airports?: any;
  title?: string;
  selectedAirport?: any;
}

export interface IAirportValue {
  value: string;
  id: number;
  airportinitials: string;
}

export interface ICityValue {
  formatted_address: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  html_attributions: [];
}

export interface IAirport {
  airport_id: number;
  airport_initials: string;
  airport_name: string;
  airport_description: string;
  airport_zipcode: string;
  airport_latitude: number;
  airport_longitude: number;
  airport_frienldy_url: string;
  airport_display_type: number;
  airport_city: string;
  airport_active: number;
}

export interface IFacility {
  Airport: IAirport;
  facility_id: number;
  airport_id: number;
  facility_active: number;
  facility_code: number;
  facility_url_code: string;
  facility_name: string;
  facility_description: string;
  facility_highlights: string;
  facility_lot: string;
  facility_brand_image: string;
  facility_address: string;
  facility_phone: string;
  facility_is_24: number;
  facility_open_time: string;
  facility_close_time: string;
  facility_days: string;
  facility_latitude: number;
  facility_longitude: number;
  facility_number_reservation: number;
  facility_airport_distance: number;
  solid_affee: number;
  apply_on_tax: number;
  facility_tax: number;
  facility_static_tax: number;
  facility_fee: number;
  facility_afee: number;
  noson_pct: number;
  partner_pct: number;
  facility_cost: number;
  facility_selling_price: number;
  facility_review: number;
  facility_cancellation_fee: number;
  facility_cancellation_fee_price: number;
  facility_is_express_deal: number;
  facility_type: number;
  facility_total_slots: number;
  facility_is_sold_out: number;
  facility_integration: number;
  facility_integration_data: string;
  facility_barcode_type: number;
  facility_terminal_directions: string;
  facility_lot_directions: string;
  facility_dt_inc: string;
  facility_min_days: number;
  facility_allow_change: number;
  facility_custom_msg: string;
  facility_custom_msg_2: string;
  facility_allow_modification_active: number;
  facility_allow_cancellation_active: number;
  facility_send_notification: number;
  facility_notification_email: string;
  facility_24h_extension: number;
  sendEmailCopy: string;
  facility_send_soldout_email: string;
  request_license_plate: number;
  reviewUrl: string;
  facilityParkingType: number;
  facility_hide_coupon: string;
  facility_charge_type: number;
  facility_charge_days: number;
  facility_payee: string;
  facility_send_modification_email: string;
  facility_is_no_cancellation: number;
  facility_is_image_uploaded: number;
  facility_search_order: number;
  extra_tax_fee: number;
  extra_tax_apply_on_tax: number;
  facility_search_display_price: number;
  label_solid_tax_fee: string;
  label_facility_tax: string;
  label_facility_static_tax: string;
  label_extra_tax_fee: string;
  label_facility_fee: string;
  label_facility_afee: string;
  min_hours_reservation: number;
}

export interface IReservation {
  Facility: IFacility;
  reservation_id: number;
  facility_id: number;
  member_id: number;
  reservation_code: string;
  reservation_first_name: string;
  reservation_last_name: string;
  reservation_email: string;
  reservation_phone: string;
  reservation_price: number;
  reservation_tax: number;
  reservation_fee: number;
  reservation_afee: number;
  reservation_days_parked: number;
  reservation_zipcode: string;
  dayjs_reservation_dt_checkin: Dayjs; // Date in iso format
  dayjs_reservation_dt_checkout: Dayjs; // Date in iso format
  reservation_dt_checkin: string; // Date in iso format
  reservation_dt_checkout: string; // Date in iso format
  reservation_status: string;
  reservation_payment_status: string;
  payment_card: string;
  payment_card_brand: string;
  reservation_dt_inc: string; // Date in iso format
  reservation_balance: number;
  reservation_reviewed: string;
  coupon_code: string;
  remind_sent: number;
  reservation_dt_cancelled: string; // Date in iso format; if it is 1900-01-01 it was not cancelled
  integration_data: string;
  reservation_refund: number;
  selling_price_list: string;
  reservation_facility_fee: number;
  solid_affee: number;
  apply_on_tax: number;
  facility_static_tax: number;
  facility_selling_price: number;
  facility_tax: number;
  customPrices: string;
  reservation_checkout_data: string;
  facility_charge_type: number;
  facility_charge_days: number;
  reservation_due_now: number;
  reservation_license_plate: string;
  option_amount_facility: number;
  option_amount_noson: number;
  reservation_sendgrid_status: string;
  extra_tax_fee: number;
  extra_tax_apply_on_tax: number;
  value_facility_tax: number;
  value_facility_static_tax: number;
  value_extra_tax_fee: number;
  value_solid_tax_fee: number;
}

export interface IReservationsResponse {
  result: Array<IReservation>;
}

export interface IReservationCode {
  reservation_email: string;
  reservation_code: string;
  reservation_id: Number;
  facility_id: Number;
  facility_name: string;
  facility_address: string;
  facility_barcode_type: Number;
  reservation_dt_checkin: string;
  reservation_dt_checkout: string;
  dayjs_reservation_dt_checkin: Dayjs;
  dayjs_reservation_dt_checkout: Dayjs;
  paid: Number;
}

export interface IReservationCodeResponse {
  result: IReservationCode;
  pkStripe: string;
}

export interface IReservationResponse {
  result: IReservation;
  moreObs: string;
  pkStripe: string;
  modificationAllowed: boolean;
  cancelationAllowed: boolean;
  gracePeriod: string;
  dayjs_gracePeriod: Dayjs;
}

export interface ILoginResponse {
  member_dt_next_payment: string;
  member_email: string;
  member_first_name: string;
  member_id: number;
  member_last_name: string;
  member_login: string;
  member_phone: string;
  member_token: string;
  member_zip: string;
}

export interface IPriceDescription {
  basePrice: number;
  fullNosonFee: number;
  discountedNosonFee: number;
  airportFee: number;
  tax: number;
  totalPrice: number;
  daysParked: number;
  dueNow: number;
}

export interface ICheckoutHelper {
  coupon_discount: number;
  coupon_code: string;
  user_id: number;
  reservation_fee: number;

  reservation_id: number;
  facility_id: number;
  member_id: number;
  reservation_code: string;
  reservation_first_name: string;
  reservation_last_name: string;
  reservation_email: string;
  reservation_phone: string;
  reservation_price: string;
  reservation_tax: number;
  reservation_days_parked: number;
  reservation_zipcode: string;
  reservation_dt_checkin: string;
  dayjs_reservation_dt_checkin: Dayjs;
  reservation_dt_checkout: string;
  dayjs_reservation_dt_checkout: Dayjs;
  reservation_status: string;
  reservation_payment_status: string; // PR => Partial Refunded, R => Refunded, C => Confirmed
  payment_card: string;

  integration_data: string;
  payment_card_brand: string;
  reservation_dt_inc: string;
  dayjs_reservation_dt_inc: Dayjs;
  stripeToken: string;

  // general string used for logging purposes. Ex: reason for cancellation, in case this is for a cancellation request
  observation: string;

  card_token: string;
  card_brand: string;
  card_country: string;
  card_last4: string;

  license_plate: string;
  reservation_affiliate: string;
}

export interface IViewReservationReview {
  facility_id: number;
  facility_name: string;
  member_id: number;
  reservation_reviewed: number;
  reservation_code: string;
  reservation_first_name: string;
  reservation_last_name: string;
  reservation_dt_checkin: string;
  reservation_dt_checkout: string;
  dayjs_reservation_dt_checkin: Dayjs; // Date in iso format
  dayjs_reservation_dt_checkout: Dayjs; // Date in iso format
}

export interface IReservationReviewResponse {
  count: number;
  facility_name: string;
  result: IViewReservationReview;
  error: string | any;
}

export interface ICheckoutResponse {
  status: string;
  stripe: string | any;
  sendgrid: string | any;
  netpark: string | any;
  reservation: string;
  error: string | any;
}

export interface IReviews {
  dt_review: string;
  facility_id: number;
  member_email: string;
  member_id: number;
  real_email: string;
  reservation_id: number;
  review_comment: string;
  review_grade: number;
  review_id: number;
  view_approved: number;
}

export interface ICoupon {
  Facility: IFacility;
  coupon_code: string;
  coupon_discount: number;
  coupon_id: number;
  coupon_status: number;
  email: string;
  facility_id: number;
}
export interface IMember {
  home_airport: string;
  member_active: number;
  member_address: string;
  member_birth_date: string;
  member_city: string;
  member_country: string;
  member_dt_first_payment: string;
  member_dt_inc: string;
  member_dt_next_payment: string;
  member_email: string;
  member_fee: number;
  member_first_name: string;
  member_gender: string;
  member_id: number;
  member_key: number;
  member_last_name: string;
  member_login: string;
  member_phone: string;
  member_picture: string;
  member_token: string;
  member_type: number;
  member_valid_email: number;
  member_zip: string;
}

export interface IMembershipResponse {
  status: string;
  ex: string;
  jwt: string;
  charge: Number;
  member: IMember;
}

export interface IUser {
  Member: IMember;
}
