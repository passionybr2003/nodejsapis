import cloneDeep from 'lodash/cloneDeep';
import trim from 'lodash/trim';
import each from 'lodash/each';
import isEmpty from 'lodash/isEmpty';
import filter from 'lodash/filter';
import has from 'lodash/has';
import remove from 'lodash/remove';
import findIndex from 'lodash/findIndex';

// Object literal lookup
// item : promotion, obj: product|| packages,
const getPromotion = (type, promo, data) => {
  let obj;
  const promoObj = {
    Free() {
      obj = {
        discount: data.retailPrice,
        priceAfterDiscount: 0,
      };
    },
    Flat() {
      obj = {
        discount: data.retailPrice - promo.amount,
        priceAfterDiscount: promo.amount,
      };
    },
    'Flat Off': function() {
      obj = {
        discount: promo.amount,
        priceAfterDiscount: data.retailPrice - promo.amount,
      };
    },
    Percentage() {
      const discount = data.retailPrice * (promo.percentage / 100);
      obj = {
        discount,
        priceAfterDiscount: data.retailPrice - discount,
      };
    },
    'Percentage Off': function() {
      const discount = data.retailPrice * (promo.percentage / 100);
      if (promo.percentage) {
        obj = {
          discount,
          priceAfterDiscount: data.retailPrice - discount,
        };
      }
    },
    default() {
      obj = {
        priceAfterDiscount: 'Not defined',
        discount: 'Not defined',
      };
    },
  };
  // invoke it
  if (type) {
    if (promoObj[trim(type)]) {
      (promoObj[trim(type)] || promoObj.default)();
    }
  } else {
    promoObj.default();
  }
  return obj;
};

const processData = (responseData) => {
  let serviceType = [];
  const selectedProducts = [];
  const selectedPackages = [];
  const products = {};
  const packages = {};
  const data = cloneDeep(responseData);
  const { cartData, mapToSubAccount } = responseData;
  const { availableEquipmentCount } = data;

  // get the service Types in product and packages
  if (data.prodWithPromos) {
    each(data.prodWithPromos, (item) => {
      item.prodMsg && serviceType.push(item.prodMsg.serviceType);
    });
  }
  if (data.pkgWithPromos) {
    each(data.pkgWithPromos, (pkgItem) => {
      if (pkgItem.pkgMsg && pkgItem.pkgMsg.products) {
        each(pkgItem.pkgMsg.products, (prodItem) => {
          serviceType.push(prodItem.productType);
        });
      }
    });
  }
  serviceType = [...new Set(serviceType)];

  // checking has loash this logic helps when cart data availble
  // var sample = [{ "quantity": "1", "productDetails": { "sku": "sku6", "productName": "product6", "retailPrice": 70.00 }, "ProdPackIndicator": "0" }]
  // console.log(filter(sample, (n) => (has(n, 'productDetails'))))

  if (!isEmpty(serviceType)) {
    // itteration service Type
    each(serviceType, (type) => {
      const serviceTypeProducts = [];
      const serviceTypePackages = [];
      //  verifying prod with promos have the data
      if (!isEmpty(data.prodWithPromos)) {
        // itteration product with promotion data;
        const filterServiceTypeData = filter(
          data.prodWithPromos,
          (n) => n.prodMsg.serviceType === type,
        );
        filterServiceTypeData.map((item) => {
          let productObj = {};
          // default product selected state setting false;
          // This key is use while cart data available
          item.prodMsg.selected = false;
          item.prodMsg.quantity = has(item.prodMsg, 'quantity')
            ? parseFloat(item.prodMsg.quantity)
            : 1;
          // if product have preRequiste
          const preRequisite = [];
          if (has(item.prodMsg, 'preRequisiteProducts')) {
            each(
              item.preRequisiteProducts,
              (preReq) => (preReq.selected = false),
            );
            preRequisite.push(...new Set(item.prodMsg.preRequisiteProducts));
          }
          if (has(item.prodMsg, 'preRequisitePackages')) {
            each(
              item.preRequisitePackages,
              (preReq) => (preReq.selected = false),
            );
            preRequisite.push(...new Set(item.prodMsg.preRequisitePackages));
          }
          item.prodMsg.preRequisite = preRequisite;
          productObj = item.prodMsg;

          // Product have promotion
          if (item.promoMsg) {
            const filterDataWithoutAddon = filter(
              item.promoMsg,
              (n) =>
                !has(n, 'promotionalProducts') &&
                !has(n, 'promotionalPackages'),
            );
            each(filterDataWithoutAddon, (promo) => {
              // set default status of promotion
              promo.selected = false;
              promo = Object.assign(
                promo,
                getPromotion(promo.promotionType, promo, item.prodMsg),
              );
              if (has(promo, 'promotionalProducts')) {
                each(
                  promo.promotionalProducts,
                  (promoProd) => (promoProd.selected = false),
                );
              }
            });
            productObj.promotion = filterDataWithoutAddon; // item.promoMsg;
          }
          // console.log('prodMsg and PromoMsg merge into single obj', productObj);
          // If cart data available run below
          if (!isEmpty(cartData)) {
            // do something here
            const getIdx = findIndex(cartData, {
              skuORQuickCode: productObj.skuORQuickCode,
            });
            if (getIdx !== -1) {
              Object.assign(productObj, cartData[getIdx]);
            }
          }
          serviceTypeProducts.push(productObj);
        });
      }
      let filterMapToSubAccountData = [];
      if (mapToSubAccount !== '') {
        filterMapToSubAccountData = filter(serviceTypeProducts, {
          mapToSubAccount: mapToSubAccount,
        });
      } else {
        filterMapToSubAccountData = serviceTypeProducts;
      }
      products[type] = remove(filterMapToSubAccountData, (item) =>
        has(item, 'retailPrice'),
      );
      // products[type] = serviceTypeProducts;

      // packages
      if (!isEmpty(data.pkgWithPromos)) {
        // itteration product with promotion data
        const filterServiceTypeData = filter(
          data.pkgWithPromos,
          (n) =>
            has(n.pkgMsg, 'products') &&
            n.pkgMsg.products[0].productType === type,
        );
        filterServiceTypeData.map((item) => {
          let packageObj = {};
          // if product have preRequiste
          const preRequisite = [];
          if (has(item.pkgMsg, 'preRequisiteProducts')) {
            each(
              item.preRequisiteProducts,
              (preReq) => (preReq.selected = false),
            );
            preRequisite.push(...new Set(item.pkgMsg.preRequisiteProducts));
          }
          if (has(item.pkgMsg, 'preRequisitePackages')) {
            each(
              item.preRequisitePackages,
              (preReq) => (preReq.selected = false),
            );
            preRequisite.push(...new Set(item.pkgMsg.preRequisitePackages));
          }
          item.pkgMsg.preRequisite = preRequisite;
          // conditional check pkg have products
          // If productType match with 'type' set the pkg selected, serviceType
          if (has(item.pkgMsg, 'products') && !isEmpty(item.pkgMsg.products)) {
            if (item.pkgMsg.products[0].productType === type) {
              item.pkgMsg.selected = false;
              item.pkgMsg.quantity = has(item.pkgMsg, 'quantity')
                ? parseFloat(item.pkgMsg.quantity)
                : 1;
              item.pkgMsg.serviceType = type;
              packageObj = item.pkgMsg;
            }
          }

          // Packages have Promotions
          if (item.promoMsg) {
            const filterDataWithoutAddon = filter(
              item.promoMsg,
              (n) =>
                !has(n, 'promotionalProducts') &&
                !has(n, 'promotionalPackages'),
            );
            each(filterDataWithoutAddon, (promo) => {
              // set promotion status
              promo.selected = false;
              promo = Object.assign(
                promo,
                getPromotion(promo.promotionType, promo, item.pkgMsg),
              );
            });
            packageObj.promotion = filterDataWithoutAddon; // item.promoMsg;
          }
          // console.log('prodMsg and PromoMsg merge into single obj', packageObj);
          // If cart data available run below
          if (!isEmpty(cartData)) {
            // do something here
            const getIdx = findIndex(cartData, {
              packageID: packageObj.packageID,
            });
            if (getIdx !== -1) {
              Object.assign(packageObj, cartData[getIdx]);
            }
          }
          serviceTypePackages.push(packageObj);
        });
      }

      let filterMapToSubAccountPkgData = [];
      if (mapToSubAccount !== '') {
        filterMapToSubAccountPkgData = filter(serviceTypePackages, {
          mapToSubAccount: mapToSubAccount,
        });
      } else {
        filterMapToSubAccountPkgData = serviceTypePackages;
      }
      packages[type] = remove(filterMapToSubAccountPkgData, (item) =>
        has(item, 'retailPrice'),
      );
    });
  }
  return {
    serviceType,
    products,
    packages,
    selectedProducts,
    selectedPackages,
    availableEquipmentCount,
  };
};

const getFinalAmount = (orderData) => {
  let totalValue = 0;
  const data = cloneDeep(orderData);
  each(data, (item) => {
    let finalAmount = 0;
    if (has(item, 'promotion')) {
      const isAnyPromotionSelected = !isEmpty(
        filter(item.promotion, (n) => n.selected === true),
      );
      if (isAnyPromotionSelected) {
        // we are getting non available promotional products and packages data;
        let promoFinalAmount = false;
        const addonFinalAmount = 0;
        each(item.promotion, (promoItem) => {
          delete promoItem.promotionalProducts;
          delete promoItem.promotionalPackages;
          if (
            !has(promoItem, 'promotionalProducts') &&
            !has(promoItem, 'promotionalPackages')
          ) {
            if (promoItem.selected) {
              promoFinalAmount += parseFloat(promoItem.priceAfterDiscount);
            }
          } else {
            // this logic for addon and will use in future
            // if (has(promoItem, 'promotionalProducts')) {
            //   each(promoItem.promotionalProducts, addon => {
            //     if (addon.selected) {
            //       let afterPromoDiscount = parseFloat(addon.price) - parseFloat(promoItem.priceAfterDiscount);
            //       addonFinalAmount += afterPromoDiscount;
            //     }
            //   })
            // } else if (has(promoItem, 'promotionalPackages')) {
            //   each(promoItem.promotionalPackages, addon => {
            //     if (addon.selected) {
            //       let afterPromoDiscount = parseFloat(addon.price) - parseFloat(promoItem.priceAfterDiscount);
            //       addonFinalAmount += afterPromoDiscount;
            //     }
            //   })
            // }
          }

          // prooFinalAmout not empty
          if (promoFinalAmount === false) {
            const priceAlongWithQuantity =
              parseFloat(item.retailPrice) * parseFloat(item.quantity);
            finalAmount =
              parseFloat(priceAlongWithQuantity) + parseFloat(addonFinalAmount);
          } else {
            const priceAlongWithQuantity =
              parseFloat(promoFinalAmount) * parseFloat(item.quantity);
            finalAmount =
              parseFloat(priceAlongWithQuantity) + parseFloat(addonFinalAmount);
          }
        });
      } else {
        const priceAlongWithQuantity =
          parseFloat(item.retailPrice) * parseFloat(item.quantity);
        // finalAmount = parseFloat(item.retailPrice);
        finalAmount = priceAlongWithQuantity;
      }
    } else {
      const priceAlongWithQuantity =
        parseFloat(item.retailPrice) * parseFloat(item.quantity);
      // finalAmount = parseFloat(item.retailPrice);
      finalAmount = priceAlongWithQuantity;
    }
    if (has(item, 'preRequisite') && !isEmpty(item.preRequisite)) {
      const getSelectedPreRequiste = filter(item.preRequisite, {
        selected: true,
      });
      each(getSelectedPreRequiste, (preRequsite) => {
        finalAmount += parseFloat(preRequsite.price);
      });
    }
    totalValue += finalAmount;
  });
  return totalValue;
};

const delOrderPkgProdWithHelper = (
  OrderPkgProdWithPromo,
  selectedItem,
  isType,
  data,
) => {
  const allPkgProdWithPromo = cloneDeep(OrderPkgProdWithPromo);
  const getItem = has(selectedItem, 'packageName')
    ? {
        type: 'packages',
        serviceType: selectedItem.serviceType,
        isMatch: 'packageID',
        promotionalItem: 'promotionalPackages',
      }
    : {
        type: 'products',
        serviceType: selectedItem.serviceType,
        isMatch: 'skuORQuickCode',
        promotionalItem: 'promotionalProducts',
      };
  const getIndex = findIndex(
    allPkgProdWithPromo[getItem.type][getItem.serviceType],
    { [getItem.isMatch]: selectedItem[getItem.isMatch] },
  );

  // delete order => product || addon || preRequiste
  const deleteOrderItem = {
    addon() {
      const promotions = filter(
        allPkgProdWithPromo[getItem.type][getItem.serviceType][getIndex]
          .promotion,
        { promotionID: data.promotionID },
      )[0];
      if (promotions[getItem.promotionalItem].length > 1) {
        each(promotions[getItem.promotionalItem], (promoAddon) => {
          if (promoAddon.sku === data.sku) {
            promoAddon.selected = false;
          }
        });
      } else {
        promotions.selected = false;
        promotions[getItem.promotionalItem][0].selected = false;
      }
    },
    preReq() {
      // allPkgProdWithPromo[getItem.type][getItem.serviceType][getIndex].selected = false;
      const getPreReqIndex = findIndex(
        allPkgProdWithPromo[getItem.type][getItem.serviceType][getIndex]
          .preRequisite,
        { sku: data.sku },
      );
      allPkgProdWithPromo[getItem.type][getItem.serviceType][
        getIndex
      ].preRequisite[getPreReqIndex].selected = false;
      const getSelectedPreReqItemsCount = filter(
        allPkgProdWithPromo[getItem.type][getItem.serviceType][getIndex]
          .preRequisite,
        { selected: true },
      ).length;
      if (getSelectedPreReqItemsCount < 1) {
        deleteOrderItem.default();
      }
    },
    default() {
      allPkgProdWithPromo[getItem.type][getItem.serviceType][
        getIndex
      ].selected = false;
      // unselect all pre Requistie data in product || package
      if (
        has(
          allPkgProdWithPromo[getItem.type][getItem.serviceType][getIndex],
          'preRequisite',
        )
      ) {
        each(
          allPkgProdWithPromo[getItem.type][getItem.serviceType][getIndex]
            .preRequisite,
          (preReqItem) => (preReqItem.selected = false),
        );
      }

      // unselect all pre Requistie data in product || package
      if (
        has(
          allPkgProdWithPromo[getItem.type][getItem.serviceType][getIndex],
          'promotion',
        ) &&
        !isEmpty(
          allPkgProdWithPromo[getItem.type][getItem.serviceType][getIndex]
            .promotion,
        )
      ) {
        each(
          allPkgProdWithPromo[getItem.type][getItem.serviceType][getIndex]
            .promotion,
          (promo) => {
            promo.selected = false;
            if (has(promo, getItem.promotionalItem)) {
              each(promo[getItem.promotionalItem], (addon) => {
                addon.selected = false;
              });
            }
          },
        );
      }
    },
  };

  // invoke it
  if (deleteOrderItem[trim(isType)]) {
    (deleteOrderItem[trim(isType)] || deleteOrderItem.default)();
  } else {
    deleteOrderItem.default();
  }

  return allPkgProdWithPromo;
};

const pkgsOrProdsWithPromoHelper = {
  processData,
  getFinalAmount,
  delOrderPkgProdWithHelper,
};

export default pkgsOrProdsWithPromoHelper;
