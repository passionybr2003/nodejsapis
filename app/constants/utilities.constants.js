export const message = {
  PRODUCT_ADD: 'Product Added Successfully',
  PRODUCT_UPDATE: 'Product updated Successfully',
  PRODUCT_DELETE: 'Product deleted successfully',
  PROMOTION_ADD: 'Promotion Added Successfully',
  PROMOTION_UPDATE: 'Promotion updated Successfully',
  PROMOTION_DELETE: 'Promotion deleted successfully',
  UPDATE_CSRPASSWORD: 'Password changed Successfully'
};

export const service = {
  // api service constants
  dmaID: '001',
  GET: 'GET',
  POST: 'POST',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  CONTENT_TYPE: 'Content-Type',
  APPLICATION_JSON: 'application/json',
  ACCESS_CONTROL_MAX_AGE: 'Access-Control-Max-Age',
  GET_PROMOTIONS: 'getPromotions',
  UPDATE_PROMOTIONS: 'updatePromotions',
  UPDATE_CSRPASSWORD: 'updateCSRPassword',
};


const utilitiesConstants = {
  message,
  service
};

export default utilitiesConstants;
