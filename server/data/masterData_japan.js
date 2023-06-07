module.exports = {
  billingPreferences: [
    'Prepaid',
    'Postpaid',
    'Advance Postpaid',
    'Prepaid Wallet',
  ],
  billDeliveryTypes: ['Paper', 'E-mail', 'Both'],
  masterCurrencies: [
    'USD',
    'MYR',
    'CNY',
    'INR',
    'MXN',
    'ARS',
    'BRL',
    'CLP',
    'COP',
    'EUR',
    'THB',
    'PHP',
    'XPF',
    'SEK',
    'PLN',
    'DKK',
    'NOK',
    'NGN',
    'NZD',
    'AUD',
    'CAD',
    'QAT',
    'SAU',
    'SGD',
    'MYR',
    'ARE',
    'GBP',
    'TTD',
    'AED',
    'SAR',
    'LKR',
    'QAR',
    'KWD',
    'BHD',
    'OMR',
    'BDT',
    'TWD',
    'HKD',
    'UYU',
    'IDR',
    'ZAR',
    'YEN',
    'PKR',
    'VEN',
    'JPY',
    'JOD',
  ],
  applications: [
    {
      name: 'Account Management',
      action: 'Account Management Action',
    },
    {
      name: 'Billing Management',
      action: 'Billing Mangement Action',
    },
    {
      name: 'User Admin',
      action: 'User Admin Action',
    },
    {
      name: 'System Admin',
      action: 'System Admin Action',
    },
    {
      name: 'Product Admin',
      action: 'Product Admin Action',
    },
    {
      name: 'Service Admin',
      action: 'Service Admin Action',
    },
    {
      name: 'Ticket Management',
      action: 'Ticket Management Action',
    },
    {
      name: 'Workflow Admin',
      action: 'WorkFlow Admin Action',
    },
    {
      name: 'Back Office Admin',
      action: 'Back Office Admin Action',
    },
    {
      name: 'Dispatch Admin',
      action: 'Dispatch AdminAction',
    },
    {
      name: 'Dispatch',
      action: 'Dispatch Action',
    },
    {
      name: 'Tax Management',
      action: 'Tax Management Action',
    },
    {
      name: 'Operational Reports',
      action: 'Operational Reports Action',
    },
    {
      name: 'Financial Reports',
      action: 'Financial Reports Action',
    },
    {
      name: 'Equipment Inventory',
      action: 'Equipment Inventory Action',
    },
    {
      name: 'IP Inventory',
      action: 'IP Inventory Action',
    },
    {
      name: 'Pop Management',
      action: 'Pop Management Action',
    },
    {
      name: 'Sales Management',
      action: 'Sales Management Action',
    },
    {
      name: 'Commission',
      action: 'Commission Action',
    },
    {
      name: 'Evergent Go',
      action: 'Evergent Go Action',
    },
    {
      name: 'Statistics',
      action: 'Statistics Action',
    },
    {
      name: 'Batch Process Management',
      action: 'Batch Process Application Action',
    },
  ],
  buTypes: ['WISP', 'VDSL', 'TELECOM', 'CONVERGENT', 'EdgeComputing', 'PAYTV'],
  billingModes: ['Monthly', 'Quarterly', 'Half Yearly', 'Yearly'],
  salutation: ['DR', 'MR', 'MRS', 'MS'],
  gender: ['Not-Specified', 'Male', 'Female'],
  attributeDataTypes: [
    'Boolean',
    'Numeric',
    'Decimal',
    'String',
    'Timestamp',
    'MIME Type',
    'Password',
  ],
  cardTypes: [
    'Visa',
    'MasterCard',
    'American Express',
    'Discover',
    'Diners Club',
    'JCB',
    'enRoute',
    'Maestro',
    'CB',
  ],
  paymentGroups: [
    {
      groupName: 'Wallet',
      imageUrl: 'https://daw08m47isw17.cloudfront.net/wallet.png',
    },
    {
      groupName: 'QRCode',
      imageUrl: 'https://daw08m47isw17.cloudfront.net/qr.png',
    },
    {
      groupName: 'Credit,Debit&ATMCards',
      imageUrl: 'https://daw08m47isw17.cloudfront.net/creditcard.png',
    },
    {
      groupName: 'UPI',
      imageUrl: 'https://daw08m47isw17.cloudfront.net/upi.png',
    },
    {
      groupName: 'Wallets',
      imageUrl: 'https://daw08m47isw17.cloudfront.net/wallet.png',
    },
    {
      groupName: 'Netbanking',
      imageUrl: 'https://daw08m47isw17.cloudfront.net/netbanking.png',
    },
    {
      groupName: 'GooglePlayStore',
      imageUrl: 'https://daw08m47isw17.cloudfront.net/google-wallet.png',
    },
    {
      groupName: 'InApp',
      imageUrl: 'https://daw08m47isw17.cloudfront.net/google-wallet.png',
    },
    {
      groupName: 'LazyPay',
      imageUrl: 'https://daw08m47isw17.cloudfront.net/lazypay.png',
    },
    {
      groupName: 'PayPal Billing',
      imageUrl: 'https://daw08m47isw17.cloudfront.net/paypal.png',
    },
    {
      groupName: 'Zain',
      imageUrl: 'https://daw08m47isw17.cloudfront.net/Telco_Billing_Icon3x.png',
    },
    {
      groupName: 'Batelco',
      imageUrl: 'https://daw08m47isw17.cloudfront.net/Telco_Billing_Icon3x.png',
    },
    {
      groupName: 'Operator',
      imageUrl: 'operatorimageurl',
    },
    {
      groupName: 'IAP',
      imageUrl: 'iapimageurl',
    },
    {
      groupName: 'Guest',
      imageUrl: 'guestimageurl',
    },
  ],
  extTicketingSystems: ['Zendesk'],
  deviceStatusList: [
    {
      description: 'Active',
      id: 1,
      displayOrder: '1',
    },
    {
      description: 'Cancel',
      id: 2,
      displayOrder: '2',
    },
    {
      description: 'Swap',
      id: 4,
      displayOrder: '4',
    },
    {
      description: 'Suspend',
      id: 5,
      displayOrder: '5',
    },
  ],
  platforms: [
    'Desktop-Web',
    'iOS-Web',
    'iOS-MWeb',
    'iOS-App',
    'Android-Web',
    'Android-MWeb',
    'Android-App',
    'Android-TV',
    'Android-NewApp',
    'Android-6.3.8',
    'Android-6.3.9',
    'Android-6.3.10',
    'Android-6.4.0',
    'Android-6.4.1',
    'Mobile-App',
  ],
  operators: [
    'Aircel',
    'Airtel',
    'Idea',
    'Reliance',
    'Tata Docomo',
    'Vodafone',
  ],
  periods: [
    'LifeTime',
    'NoOfMinutes',
    'NoOfHours',
    'NoOfDays',
    'NoOfMonths',
    'NoOfYears',
  ],
  rateType: [
    'Retail Price',
    'Suggested Price',
    'Floor Price',
    'Base Wholesale Price',
    'Early Pay Price',
    'App Store Billing',
    'Google Wallet',
    'Online Payments',
    'USD-PayPal Billing',
    'PayPal Billing',
    'Contract Selling Price',
    'Setup Fee',
    'Early Termination Fee',
    'Transfer Drive Overage Charges',
  ],
  eligibilityTypes: [
    {
      entity: 'Product',
      displayName: 'S',
      description: 'Sequential',
    },
    {
      entity: 'Product',
      displayName: 'E',
      description: 'Exclude',
    },
    {
      entity: 'Product',
      displayName: 'R',
      description: 'Replace',
    },
    {
      entity: 'Product',
      displayName: 'HE',
      description: 'History-Exclude',
    },
    {
      entity: 'Package',
      displayName: 'R',
      description: 'Replace',
    },
    {
      entity: 'Package',
      displayName: 'HE',
      description: 'History-Exclude',
    },
    {
      entity: 'Package',
      displayName: 'P',
      description: 'Pause',
    },
    {
      entity: 'Package',
      displayName: 'S',
      description: 'Sequential',
    },
    {
      entity: 'Package',
      displayName: 'A',
      description: 'Allow',
    },
    {
      entity: 'Package',
      displayName: 'E',
      description: 'Exclude',
    },
    {
      entity: 'Promotion',
      displayName: 'A',
      description: 'Allow',
    },
    {
      entity: 'Promotion',
      displayName: 'E',
      description: 'Exclude',
    },
  ],
  promoEligibilityTypes: [
    {
      displayName: 'S',
      description: 'Sequential',
    },
    {
      displayName: 'E',
      description: 'Exclude',
    },
    {
      displayName: 'PN',
      description: 'Parallel-OnNet',
    },
    {
      displayName: 'PG',
      description: 'Parallel-Gross',
    },
    {
      displayName: 'HE',
      description: 'History Exclude',
    },
  ],
  hardwareTypes: [
    {
      description: 'ATM Switch',
      id: 1,
      displayOrder: 1,
    },
    {
      description: 'Repeater',
      id: 2,
      displayOrder: 2,
    },
    {
      description: 'Router',
      id: 3,
      displayOrder: 3,
    },
    {
      description: 'CPE',
      id: 4,
      displayOrder: 4,
    },
    {
      description: 'Remote',
      id: 5,
      displayOrder: 5,
    },
    {
      description: 'Antenna',
      id: 6,
      displayOrder: 6,
    },
    {
      description: 'STB',
      id: 1846,
      displayOrder: 8,
    },
    {
      description: 'SmartCard',
      id: 1847,
      displayOrder: 7,
    },
  ],
  effectiveUntil: ['Immediately', 'NextBillCycle', 'PromotionEndDate'],
  customerClassification: [
    'New Customer',
    'Existing Customer',
    'Upsell',
    'Retention',
  ],
  permissions: [
    {
      name: 'Application Admin',
      id: 1,
      code: 'APPAD',
    },
    {
      name: 'User Admin',
      id: 2,
      code: 'USERA',
    },
    {
      name: 'Ticket Domain Admin',
      id: 3,
      code: 'TDOMA',
    },
    {
      name: 'Billing Admin',
      id: 4,
      code: 'BILLA',
    },
    {
      name: 'Accept Payments/Adjustments',
      id: 5,
      code: 'PAYAD',
    },
    {
      name: 'Create/Modify',
      id: 6,
      code: 'CR/MO',
    },
    {
      name: 'View only',
      id: 8,
      code: 'VUE',
    },
    {
      name: 'Assign only',
      id: 9,
      code: 'ASIN',
    },
    {
      name: 'Modify Bill Mode',
      id: 11,
      code: 'BILMO',
    },
    {
      name: 'Modify Bill Cycle',
      id: 12,
      code: 'BILCY',
    },
    {
      name: 'Pricing',
      id: 13,
      code: 'PRICE',
    },
    {
      name: 'Cancel/Suspend',
      id: 14,
      code: 'CNCL/SSPD',
    },
    {
      name: 'Modify Contact Info',
      id: 16,
      code: 'CONT',
    },
    {
      name: 'Complimentary Account',
      id: 18,
      code: 'CAMO',
    },
    {
      name: 'Generate Coupons',
      id: 19,
      code: 'GC',
    },
    {
      name: 'View New Coupons',
      id: 25,
      code: 'VNC',
    },
    {
      name: 'Reset Current Session Count',
      id: 26,
      code: 'RCSC',
    },
    {
      name: 'Reset Concurrent Session Limit',
      id: 27,
      code: 'RCSL',
    },
    {
      name: 'Edit Current Session Count',
      id: 28,
      code: 'ECSC',
    },
    {
      name: 'Edit Concurrent Session Limit',
      id: 29,
      code: 'ECSL',
    },
    {
      name: 'Reset No Of Allowed Devices',
      id: 30,
      code: 'RNOAD',
    },
    {
      name: 'Edit No Of Allowed Devices',
      id: 31,
      code: 'ENOAD',
    },
    {
      name: 'Reset No Of Registered Devices',
      id: 32,
      code: 'RNORD',
    },
    {
      name: 'Edit No Of Registered Devices',
      id: 33,
      code: 'ENORD',
    },
    {
      name: 'Edit Download Limit',
      id: 34,
      code: 'EDL',
    },
    {
      name: 'Reset Download Limit',
      id: 35,
      code: 'RDL',
    },
    {
      name: 'Edit Download Count',
      id: 36,
      code: 'EDC',
    },
    {
      name: 'Reset Download Count',
      id: 37,
      code: 'RDC',
    },
    {
      name: 'CC Search',
      id: 38,
      code: 'CCSEARCH',
    },
    {
      name: 'Reset Contact Password',
      id: 39,
      code: 'RCP',
    },
    {
      name: 'Modify Validity End Date',
      id: 40,
      code: 'MVE',
    },
    {
      name: 'Add Contact',
      id: 42,
      code: 'AC',
    },
    {
      name: 'Modify Device Info',
      id: 43,
      code: 'MDI',
    },
    {
      name: 'Enable Cash',
      id: 44,
      code: 'ECASH',
    },
    {
      name: 'Enable PrePaid',
      id: 45,
      code: 'EPRE',
    },
    {
      name: 'Hide Allowed Devices',
      id: 46,
      code: 'HAD',
    },
    {
      name: 'Hide Concurrent Play Limit',
      id: 47,
      code: 'HCPL',
    },
    {
      name: 'UpdateDeviceDetail',
      id: 48,
      code: 'UDD',
    },
    {
      name: 'Reset Concurrent Play Limit',
      id: 49,
      code: 'RCPL',
    },
    {
      name: 'Edit Concurrent Play Limit',
      id: 50,
      code: 'ECPL',
    },
    {
      name: 'ModifyEmailTemplate',
      id: 51,
      code: 'MET',
    },
    {
      name: 'Product Eligibility Rules',
      id: 74,
      code: 'PEBR',
    },
    {
      name: 'Refund Against Adjustment is Mandatory',
      id: 75,
      code: 'RAIM',
    },
    {
      name: 'Edit Refunds',
      id: 76,
      code: 'ERE',
    },
    {
      name: 'View Coupon Code',
      id: 78,
      code: 'VCC',
    },
    {
      name: 'Update OPPromotion End date',
      id: 79,
      code: 'UOPED',
    },
    {
      name: 'Delete Schedule Running Events',
      id: 85,
      code: 'DRE',
    },
    {
      name: 'UpdateScheduleEventURL',
      id: 90,
      code: 'USEU',
    },
    {
      name: 'CSRPasswordResetOnFirstLogin',
      id: 101,
      code: 'CPROFL',
    },
    {
      name: 'CanEditPaymentModes',
      id: 102,
      code: 'CED',
    },
    {
      name: 'UpgradeOrDowngrade',
      id: 103,
      code: 'UDG',
    },
    {
      name: 'Unblock Payment Method',
      id: 104,
      code: 'UPM',
    },
    {
      name: 'View Events Export',
      id: 105,
      code: 'VEE',
    },
    {
      name: 'Add Currency Conversion',
      id: 106,
      code: 'ACCOV',
    },
    {
      name: 'Modify Currency Conversion',
      id: 107,
      code: 'MCCOV',
    },
    {
      name: 'Enhanced CSR Login',
      id: 108,
      code: 'ECL',
    },
  ],
  messageTypes: [
    'Scheduling',
    'Invoice Msg',
    'Credit Card Transaction',
    'Credit Card Expiry Reminder',
    'Bill Run Process',
    'Report Error Info',
    'Invocation Activity Error Info',
    'Product  File Status',
    'Product Priority File Status',
    'Package File Status',
    'Promotion File Status',
    'XML Invoice Message',
    'Import Message',
    'Bulk Emails',
    'Event Message',
    'Adhoc',
    'Account File Status',
    'Equipment File Status',
    'Order File Status',
    'PayPal WPS File',
    'Manufacturer File Status',
    'Warehouse File Status',
    'Cablelabs 3.0 File Status',
    'ATT AccountType Conversion',
    'Equipment Status Fail',
    'JCOM Delivery Request',
    'JCOM Delivery Request Password',
    'Update Work Order Status',
    'AddOrder - Admin',
  ],
  sendMailTo: ['Channel Partner', 'DMA', 'Service'],
  customerType: ['BYOD', 'BBTV', 'EDSP'],
  areaLicence: [
    'Premium10',
    'Sports10',
    'Sports20',
    'Sports30',
    'Basic10',
    'Basic20',
    'Basic30',
    'Basic40',
  ],
  channelLabel: [
    'FOX1',
    'FOX Sports +',
    'FOX Sports',
    'FOX Sports',
    'FOX Sports',
    'FOX Sports',
    'FOX Sports',
    'FOX',
  ],
  walletTypes: ['Currency', 'Credits/Points'],
  workFlowTypes: [
    'Product',
    'Ticket',
    'Collections',
    'Customer Sign-up',
    'Add Order',
    'Cancel Account',
    'Cancel CPE',
    'Suspend Account',
    'Reactivate Account',
    'Suspend Order',
  ],
  buRoles: [
    'MSO',
    'JV',
    'Distributor',
    'LCO',
    'Manager',
    'Associate Manager',
    'General Manager',
  ],
  userLanguages: [
    'English',
    'Malay',
    'Chinese_HANS',
    'Chinese_HANT',
    'Tamil',
    'Spanish',
    'Portuguese',
    'French',
    'Telugu',
    'Punjabi',
    'Gujarati',
    'Hindi',
    'Marathi',
    'Swedish',
    'Indonesian',
    'Thai',
    'Japanese',
  ],
  discountTypes: ['Flat', 'Flat Off', 'Percentage'],
  status: 'SUCCESS',
  productMasterData: {
    planTypeSubPlanData: [
      {
        planType: 'Basic Service',
      },
      {
        planType: 'Bolt-on',
      },
      {
        planType: 'Standalone',
      },
      {
        planType: 'AddOn',
      },
    ],
    typeOfService: ['Basic Service', 'Bolt-on', 'Standalone', 'AddOn'],
    languages: [
      'English',
      'French',
      'German',
      'Spanish',
      'Swedish',
      'Portuguese',
      'Korean',
      'Vietnamese',
      'Filipino',
      'Arabic',
    ],
    offerTypes: [
      'CSR-New Customer',
      'CSR-Existing Customer',
      'CSR-Retention',
      'CSR-Re-activation',
      'CSR-Up-sell',
      'CSR-Cross-sell',
      'CSR-Down-sell',
      'CSR-One-time credit',
      'CSR-VIP',
      'Web-New Customer',
      'Web-Existing Customer',
      'Web-Retention',
      'Web-Re-activation',
      'Web-Up-sell',
      'Web-Cross-sell',
      'Web-Down-sell',
      'Web-One-time credit',
      'Web-Apple',
      'Web-web',
      'Web-Web',
      'Web-Google Play',
      'Web-CCAvenue',
      'Web-Fortumo',
      'Web-PayPal',
      'Web-Generic_Coupon',
      'Web-Titanium',
      'Partner Channel-New Customer',
      'Partner Channel-Existing Customer',
      'Partner Channel-Retention',
      'Partner Channel-Re-activation',
      'Partner Channel-Up-sell',
      'Partner Channel-Cross-sell',
      'Partner Channel-Down-sell',
      'Partner Channel-One-time credit',
      'Kiosk-New Customer',
      'Kiosk-Existing Customer',
      'Kiosk-Retention',
      'Kiosk-Re-activation',
      'Kiosk-Up-sell',
      'Kiosk-Cross-sell',
      'Kiosk-Down-sell',
      'Kiosk-One-time credit',
      'Android-New Customer',
      'Android-Existing Customer',
      'Android-Samsung',
      'Android-Micromax',
      'Android-Android',
      'Android-Sony-Xperia',
      'Android-Intex-Aqua Craze',
      'Android-Intex-Aqua Raze',
      'Android-Intex-Aqua Twist',
      'Android-Intex-Aqua Prime 4G',
      'Android-Intex-Aqua Shine 4G',
      'Android-Intex-Cloud Fame',
      'Android-Intex-Cloud Glory',
      'Android-Intex-Aqua Music',
      'Android-Intex-Cloud String',
      'Android-Intex-Aqua Power HD',
      'Android-Intex-Aqua Classic',
      'Android-Intex-Aqua Lions 4G',
      'Android-Motorola-Mot1G3',
      'Android-Sony-F5122',
      'Android-Sony-F3116',
      'Android-Sony-C2004',
      'Android-Sony-C2104',
      'Android-Sony-C2305',
      'Android-Sony-C5302',
      'Android-Sony-C5502',
      'Android-Sony-C6502',
      'Android-Sony-C6802',
      'Android-Sony-C6902',
      'Android-Sony-SGP321',
      'Android-Sony-D2005',
      'Android-Sony-D2105',
      'Android-Sony-D2202',
      'Android-Sony-D2212',
      'Android-Sony-D2302',
      'Android-Sony-D5102',
      'Android-Sony-D5322',
      'Android-Sony-D5503',
      'Android-Sony-D5833',
      'Android-Sony-D6502',
      'Android-Sony-D6653',
      'Android-Sony-E2115',
      'Android-Sony-E5363',
      'Android-Sony-SGP521',
      'Android-Sony-E2043',
      'Android-Sony-E5563',
      'Android-Sony-E5663',
      'Android-Sony-E6553',
      'Android-Sony-C1504',
      'Android-Sony-C1604',
      'Android-Sony-C1904',
      'Android-Sony-D2502',
      'Android-Sony-E2363',
      'Android-LGE-LGK500I.AINDBKF',
      'Android-Intex-Aqua Power HD-4G',
      'Android-Google Play',
      'Android-CCAvenue',
      'Android-Fortumo',
      'Android-PayPal',
      'Android-Juno',
      'iOS-New Customer',
      'iOS-Existing Customer',
      'iOS-Apple',
      'iOS-Apple_iPhone',
      'iOS-Apple_iPad',
      'Cablevisión-web',
      'Cablevisión-iPhone',
      'Cablevisión-iPad',
      'Cablevisión-Android Tablet',
      'Cablevisión-xbox_console',
      'Cablevisión-samsung_smart_tv',
      'Cablevisión-phillips_smart_tv',
      'Cablevisión-sony_smart_tv',
      'Cablevisión-panasonic_smart_tv',
      'Cablevisión-lg_smart_tv',
      'Cablevisión-ps3_console',
      'Cablevisión-ps4_console',
      'Cablevisión-android',
      'Cablevisión-ios',
      'Cablevisión-windows',
      'Cablevisión-stb',
      'Cablevisión-roku',
      'Cablevisión-hisense_smart_tv',
      'DIRECTV-web',
      'DIRECTV-iPhone',
      'DIRECTV-iPad',
      'DIRECTV-Android Tablet',
      'DIRECTV-xbox_console',
      'DIRECTV-samsung_smart_tv',
      'DIRECTV-phillips_smart_tv',
      'DIRECTV-sony_smart_tv',
      'DIRECTV-panasonic_smart_tv',
      'DIRECTV-lg_smart_tv',
      'DIRECTV-ps3_console',
      'DIRECTV-ps4_console',
      'DIRECTV-android',
      'DIRECTV-ios',
      'DIRECTV-windows',
      'DIRECTV-stb',
      'DIRECTV-roku',
      'DIRECTV-hisense_smart_tv',
      'Telecentro-web',
      'Telecentro-iPhone',
      'Telecentro-iPad',
      'Telecentro-Android Tablet',
      'Telecentro-xbox_console',
      'Telecentro-samsung_smart_tv',
      'Telecentro-phillips_smart_tv',
      'Telecentro-sony_smart_tv',
      'Telecentro-panasonic_smart_tv',
      'Telecentro-lg_smart_tv',
      'Telecentro-ps3_console',
      'Telecentro-ps4_console',
      'Telecentro-android',
      'Telecentro-ios',
      'Telecentro-windows',
      'Telecentro-stb',
      'Telecentro-roku',
      'Telecentro-hisense_smart_tv',
      'Supercanal-web',
      'Supercanal-iPhone',
      'Supercanal-iPad',
      'Supercanal-Android Tablet',
      'Supercanal-xbox_console',
      'Supercanal-samsung_smart_tv',
      'Supercanal-phillips_smart_tv',
      'Supercanal-sony_smart_tv',
      'Supercanal-panasonic_smart_tv',
      'Supercanal-lg_smart_tv',
      'Supercanal-ps3_console',
      'Supercanal-ps4_console',
      'Supercanal-android',
      'Supercanal-ios',
      'Supercanal-windows',
      'Supercanal-stb',
      'Supercanal-roku',
      'Supercanal-hisense_smart_tv',
      'Telered-web',
      'Telered-iPhone',
      'Telered-iPad',
      'Telered-Android Tablet',
      'Telered-xbox_console',
      'Telered-samsung_smart_tv',
      'Telered-phillips_smart_tv',
      'Telered-sony_smart_tv',
      'Telered-panasonic_smart_tv',
      'Telered-lg_smart_tv',
      'Telered-ps3_console',
      'Telered-ps4_console',
      'Telered-android',
      'Telered-ios',
      'Telered-windows',
      'Telered-stb',
      'Telered-roku',
      'Telered-hisense_smart_tv',
      'VTR-web',
      'VTR-iPhone',
      'VTR-iPad',
      'VTR-Android Tablet',
      'VTR-xbox_console',
      'VTR-samsung_smart_tv',
      'VTR-phillips_smart_tv',
      'VTR-sony_smart_tv',
      'VTR-panasonic_smart_tv',
      'VTR-lg_smart_tv',
      'VTR-ps3_console',
      'VTR-ps4_console',
      'VTR-android',
      'VTR-ios',
      'VTR-windows',
      'VTR-stb',
      'VTR-roku',
      'VTR-hisense_smart_tv',
      'Telefónica del Sur-web',
      'Telefónica del Sur-iPhone',
      'Telefónica del Sur-iPad',
      'Telefónica del Sur-Android Tablet',
      'Telefónica del Sur-xbox_console',
      'Telefónica del Sur-samsung_smart_tv',
      'Telefónica del Sur-phillips_smart_tv',
      'Telefónica del Sur-sony_smart_tv',
      'Telefónica del Sur-panasonic_smart_tv',
      'Telefónica del Sur-lg_smart_tv',
      'Telefónica del Sur-ps3_console',
      'Telefónica del Sur-ps4_console',
      'Telefónica del Sur-android',
      'Telefónica del Sur-ios',
      'Telefónica del Sur-windows',
      'Telefónica del Sur-stb',
      'Telefónica del Sur-roku',
      'Telefónica del Sur-hisense_smart_tv',
      'Movistar-web',
      'Movistar-iPhone',
      'Movistar-iPad',
      'Movistar-Android Tablet',
      'Movistar-xbox_console',
      'Movistar-samsung_smart_tv',
      'Movistar-phillips_smart_tv',
      'Movistar-sony_smart_tv',
      'Movistar-panasonic_smart_tv',
      'Movistar-lg_smart_tv',
      'Movistar-ps3_console',
      'Movistar-ps4_console',
      'Movistar-android',
      'Movistar-ios',
      'Movistar-windows',
      'Movistar-stb',
      'Movistar-roku',
      'Movistar-hisense_smart_tv',
      'Telefónica de Coyhaique-web',
      'Telefónica de Coyhaique-iPhone',
      'Telefónica de Coyhaique-iPad',
      'Telefónica de Coyhaique-Android Tablet',
      'Telefónica de Coyhaique-xbox_console',
      'Telefónica de Coyhaique-samsung_smart_tv',
      'Telefónica de Coyhaique-phillips_smart_tv',
      'Telefónica de Coyhaique-sony_smart_tv',
      'Telefónica de Coyhaique-panasonic_smart_tv',
      'Telefónica de Coyhaique-lg_smart_tv',
      'Telefónica de Coyhaique-ps3_console',
      'Telefónica de Coyhaique-ps4_console',
      'Telefónica de Coyhaique-android',
      'Telefónica de Coyhaique-ios',
      'Telefónica de Coyhaique-windows',
      'Telefónica de Coyhaique-stb',
      'Telefónica de Coyhaique-roku',
      'Telefónica de Coyhaique-hisense_smart_tv',
      'Cuenta UNE-web',
      'Cuenta UNE-iPhone',
      'Cuenta UNE-iPad',
      'Cuenta UNE-Android Tablet',
      'Cuenta UNE-xbox_console',
      'Cuenta UNE-samsung_smart_tv',
      'Cuenta UNE-phillips_smart_tv',
      'Cuenta UNE-sony_smart_tv',
      'Cuenta UNE-panasonic_smart_tv',
      'Cuenta UNE-lg_smart_tv',
      'Cuenta UNE-ps3_console',
      'Cuenta UNE-ps4_console',
      'Cuenta UNE-android',
      'Cuenta UNE-ios',
      'Cuenta UNE-windows',
      'Cuenta UNE-stb',
      'Cuenta UNE-roku',
      'Cuenta UNE-hisense_smart_tv',
      'Claro-web',
      'Claro-iPhone',
      'Claro-iPad',
      'Claro-Android Tablet',
      'Claro-xbox_console',
      'Claro-samsung_smart_tv',
      'Claro-phillips_smart_tv',
      'Claro-sony_smart_tv',
      'Claro-panasonic_smart_tv',
      'Claro-lg_smart_tv',
      'Claro-ps3_console',
      'Claro-ps4_console',
      'Claro-android',
      'Claro-ios',
      'Claro-windows',
      'Claro-stb',
      'Claro-roku',
      'Claro-hisense_smart_tv',
      'TVCable-web',
      'TVCable-iPhone',
      'TVCable-iPad',
      'TVCable-Android Tablet',
      'TVCable-xbox_console',
      'TVCable-samsung_smart_tv',
      'TVCable-phillips_smart_tv',
      'TVCable-sony_smart_tv',
      'TVCable-panasonic_smart_tv',
      'TVCable-lg_smart_tv',
      'TVCable-ps3_console',
      'TVCable-ps4_console',
      'TVCable-android',
      'TVCable-ios',
      'TVCable-windows',
      'TVCable-stb',
      'TVCable-roku',
      'TVCable-hisense_smart_tv',
      'Telecable-web',
      'Telecable-iPhone',
      'Telecable-iPad',
      'Telecable-Android Tablet',
      'Telecable-xbox_console',
      'Telecable-samsung_smart_tv',
      'Telecable-phillips_smart_tv',
      'Telecable-sony_smart_tv',
      'Telecable-panasonic_smart_tv',
      'Telecable-lg_smart_tv',
      'Telecable-ps3_console',
      'Telecable-ps4_console',
      'Telecable-android',
      'Telecable-ios',
      'Telecable-windows',
      'Telecable-stb',
      'Telecable-roku',
      'Telecable-hisense_smart_tv',
      'Ultravisión-web',
      'Ultravisión-iPhone',
      'Ultravisión-iPad',
      'Ultravisión-Android Tablet',
      'Ultravisión-Android Smartphone',
      'Ultravisión-Microsoft Smartphone',
      'Ultravisión-Microsoft Tablet',
      'Ultravisión-xbox_console',
      'Ultravisión-samsung_smart_tv',
      'Ultravisión-phillips_smart_tv',
      'Ultravisión-sony_smart_tv',
      'Ultravisión-panasonic_smart_tv',
      'Ultravisión-lg_smart_tv',
      'Ultravisión-ps3_console',
      'Ultravisión-ps4_console',
      'Ultravisión-android',
      'Ultravisión-ios',
      'Ultravisión-windows',
      'Ultravisión-stb',
      'Ultravisión-roku',
      'Ultravisión-hisense_smart_tv',
      'Cableonda-web',
      'Cableonda-iPhone',
      'Cableonda-iPad',
      'Cableonda-Android Tablet',
      'Cableonda-xbox_console',
      'Cableonda-samsung_smart_tv',
      'Cableonda-phillips_smart_tv',
      'Cableonda-sony_smart_tv',
      'Cableonda-panasonic_smart_tv',
      'Cableonda-lg_smart_tv',
      'Cableonda-ps3_console',
      'Cableonda-ps4_console',
      'Cableonda-android',
      'Cableonda-ios',
      'Cableonda-windows',
      'Cableonda-stb',
      'Cableonda-roku',
      'Cableonda-hisense_smart_tv',
      'PuntaCable-web',
      'PuntaCable-iPhone',
      'PuntaCable-iPad',
      'PuntaCable-Android Tablet',
      'PuntaCable-xbox_console',
      'PuntaCable-samsung_smart_tv',
      'PuntaCable-phillips_smart_tv',
      'PuntaCable-sony_smart_tv',
      'PuntaCable-panasonic_smart_tv',
      'PuntaCable-lg_smart_tv',
      'PuntaCable-ps3_console',
      'PuntaCable-ps4_console',
      'PuntaCable-android',
      'PuntaCable-ios',
      'PuntaCable-windows',
      'PuntaCable-stb',
      'PuntaCable-roku',
      'PuntaCable-hisense_smart_tv',
      'MonteCable-web',
      'MonteCable-iPhone',
      'MonteCable-iPad',
      'MonteCable-Android Tablet',
      'MonteCable-xbox_console',
      'MonteCable-samsung_smart_tv',
      'MonteCable-phillips_smart_tv',
      'MonteCable-sony_smart_tv',
      'MonteCable-panasonic_smart_tv',
      'MonteCable-lg_smart_tv',
      'MonteCable-ps3_console',
      'MonteCable-ps4_console',
      'MonteCable-android',
      'MonteCable-ios',
      'MonteCable-windows',
      'MonteCable-stb',
      'MonteCable-roku',
      'MonteCable-hisense_smart_tv',
      'NS Now-web',
      'NS Now-iPhone',
      'NS Now-iPad',
      'NS Now-Android Tablet',
      'NS Now-xbox_console',
      'NS Now-samsung_smart_tv',
      'NS Now-phillips_smart_tv',
      'NS Now-sony_smart_tv',
      'NS Now-panasonic_smart_tv',
      'NS Now-lg_smart_tv',
      'NS Now-ps3_console',
      'NS Now-ps4_console',
      'NS Now-android',
      'NS Now-ios',
      'NS Now-windows',
      'NS Now-stb',
      'NS Now-roku',
      'NS Now-hisense_smart_tv',
      'TCC-web',
      'TCC-iPhone',
      'TCC-iPad',
      'TCC-Android Tablet',
      'TCC-xbox_console',
      'TCC-samsung_smart_tv',
      'TCC-phillips_smart_tv',
      'TCC-sony_smart_tv',
      'TCC-panasonic_smart_tv',
      'TCC-lg_smart_tv',
      'TCC-ps3_console',
      'TCC-ps4_console',
      'TCC-android',
      'TCC-ios',
      'TCC-windows',
      'TCC-stb',
      'TCC-roku',
      'TCC-hisense_smart_tv',
      'Inter-web',
      'Inter-iPhone',
      'Inter-iPad',
      'Inter-Android Tablet',
      'Inter-xbox_console',
      'Inter-samsung_smart_tv',
      'Inter-phillips_smart_tv',
      'Inter-sony_smart_tv',
      'Inter-panasonic_smart_tv',
      'Inter-lg_smart_tv',
      'Inter-ps3_console',
      'Inter-ps4_console',
      'Inter-android',
      'Inter-ios',
      'Inter-windows',
      'Inter-stb',
      'Inter-roku',
      'Inter-hisense_smart_tv',
      'Dish-web',
      'Dish-iPhone',
      'Dish-iPad',
      'Dish-Android Tablet',
      'Dish-xbox_console',
      'Dish-samsung_smart_tv',
      'Dish-phillips_smart_tv',
      'Dish-sony_smart_tv',
      'Dish-panasonic_smart_tv',
      'Dish-lg_smart_tv',
      'Dish-ps3_console',
      'Dish-ps4_console',
      'Dish-android',
      'Dish-ios',
      'Dish-windows',
      'Dish-stb',
      'Dish-roku',
      'Dish-hisense_smart_tv',
      'TVred-web',
      'TVred-iPhone',
      'TVred-iPad',
      'TVred-Android Tablet',
      'TVred-xbox_console',
      'TVred-samsung_smart_tv',
      'TVred-phillips_smart_tv',
      'TVred-sony_smart_tv',
      'TVred-panasonic_smart_tv',
      'TVred-lg_smart_tv',
      'TVred-ps3_console',
      'TVred-ps4_console',
      'TVred-android',
      'TVred-ios',
      'TVred-windows',
      'TVred-stb',
      'TVred-roku',
      'TVred-hisense_smart_tv',
      'Axtel-web',
      'Axtel-iPhone',
      'Axtel-iPad',
      'Axtel-Android Tablet',
      'Axtel-xbox_console',
      'Axtel-samsung_smart_tv',
      'Axtel-phillips_smart_tv',
      'Axtel-sony_smart_tv',
      'Axtel-panasonic_smart_tv',
      'Axtel-lg_smart_tv',
      'Axtel-ps3_console',
      'Axtel-ps4_console',
      'Axtel-android',
      'Axtel-ios',
      'Axtel-windows',
      'Axtel-stb',
      'Axtel-roku',
      'Axtel-hisense_smart_tv',
      'Total Play-web',
      'Total Play-iPhone',
      'Total Play-iPad',
      'Total Play-Android Tablet',
      'Total Play-xbox_console',
      'Total Play-samsung_smart_tv',
      'Total Play-phillips_smart_tv',
      'Total Play-sony_smart_tv',
      'Total Play-panasonic_smart_tv',
      'Total Play-lg_smart_tv',
      'Total Play-ps3_console',
      'Total Play-ps4_console',
      'Total Play-android',
      'Total Play-ios',
      'Total Play-windows',
      'Total Play-stb',
      'Total Play-roku',
      'Total Play-hisense_smart_tv',
      'Gigacable-web',
      'Gigacable-iPhone',
      'Gigacable-iPad',
      'Gigacable-Android Tablet',
      'Gigacable-xbox_console',
      'Gigacable-samsung_smart_tv',
      'Gigacable-phillips_smart_tv',
      'Gigacable-sony_smart_tv',
      'Gigacable-panasonic_smart_tv',
      'Gigacable-lg_smart_tv',
      'Gigacable-ps3_console',
      'Gigacable-ps4_console',
      'Gigacable-android',
      'Gigacable-ios',
      'Gigacable-windows',
      'Gigacable-stb',
      'Gigacable-roku',
      'Gigacable-hisense_smart_tv',
      'Etapa TV-web',
      'Etapa TV-iPhone',
      'Etapa TV-iPad',
      'Etapa TV-Android Tablet',
      'Etapa TV-xbox_console',
      'Etapa TV-samsung_smart_tv',
      'Etapa TV-phillips_smart_tv',
      'Etapa TV-sony_smart_tv',
      'Etapa TV-panasonic_smart_tv',
      'Etapa TV-lg_smart_tv',
      'Etapa TV-ps3_console',
      'Etapa TV-ps4_console',
      'Etapa TV-android',
      'Etapa TV-ios',
      'Etapa TV-windows',
      'Etapa TV-stb',
      'Etapa TV-roku',
      'Etapa TV-hisense_smart_tv',
      'Megacable-web',
      'Megacable-iPhone',
      'Megacable-iPad',
      'Megacable-Android Tablet',
      'Megacable-xbox_console',
      'Megacable-samsung_smart_tv',
      'Megacable-phillips_smart_tv',
      'Megacable-sony_smart_tv',
      'Megacable-panasonic_smart_tv',
      'Megacable-lg_smart_tv',
      'Megacable-ps3_console',
      'Megacable-ps4_console',
      'Megacable-android',
      'Megacable-ios',
      'Megacable-windows',
      'Megacable-stb',
      'Megacable-roku',
      'Megacable-hisense_smart_tv',
      'Dibox-web',
      'Dibox-iPhone',
      'Dibox-iPad',
      'Dibox-Android Tablet',
      'Dibox-xbox_console',
      'Dibox-samsung_smart_tv',
      'Dibox-phillips_smart_tv',
      'Dibox-sony_smart_tv',
      'Dibox-panasonic_smart_tv',
      'Dibox-lg_smart_tv',
      'Dibox-ps3_console',
      'Dibox-ps4_console',
      'Dibox-android',
      'Dibox-ios',
      'Dibox-windows',
      'Dibox-stb',
      'Dibox-roku',
      'Dibox-hisense_smart_tv',
      'Express-web',
      'Express-iPhone',
      'Express-iPad',
      'Express-Android Tablet',
      'Express-xbox_console',
      'Express-samsung_smart_tv',
      'Express-phillips_smart_tv',
      'Express-sony_smart_tv',
      'Express-panasonic_smart_tv',
      'Express-lg_smart_tv',
      'Express-ps3_console',
      'Express-ps4_console',
      'Express-android',
      'Express-ios',
      'Express-windows',
      'Express-stb',
      'Express-roku',
      'Express-hisense_smart_tv',
      'Colsecor-web',
      'Colsecor-iPhone',
      'Colsecor-iPad',
      'Colsecor-Android Tablet',
      'Colsecor-xbox_console',
      'Colsecor-samsung_smart_tv',
      'Colsecor-phillips_smart_tv',
      'Colsecor-sony_smart_tv',
      'Colsecor-panasonic_smart_tv',
      'Colsecor-lg_smart_tv',
      'Colsecor-ps3_console',
      'Colsecor-ps4_console',
      'Colsecor-android',
      'Colsecor-ios',
      'Colsecor-windows',
      'Colsecor-stb',
      'Colsecor-roku',
      'Colsecor-hisense_smart_tv',
      'GTD Manquehue-web',
      'GTD Manquehue-iPhone',
      'GTD Manquehue-iPad',
      'GTD Manquehue-Android Tablet',
      'GTD Manquehue-xbox_console',
      'GTD Manquehue-samsung_smart_tv',
      'GTD Manquehue-phillips_smart_tv',
      'GTD Manquehue-sony_smart_tv',
      'GTD Manquehue-panasonic_smart_tv',
      'GTD Manquehue-lg_smart_tv',
      'GTD Manquehue-ps3_console',
      'GTD Manquehue-ps4_console',
      'GTD Manquehue-android',
      'GTD Manquehue-ios',
      'GTD Manquehue-windows',
      'GTD Manquehue-stb',
      'GTD Manquehue-roku',
      'GTD Manquehue-hisense_smart_tv',
      'TV Digital-web',
      'TV Digital-iPhone',
      'TV Digital-iPad',
      'TV Digital-Android Tablet',
      'TV Digital-xbox_console',
      'TV Digital-samsung_smart_tv',
      'TV Digital-phillips_smart_tv',
      'TV Digital-sony_smart_tv',
      'TV Digital-panasonic_smart_tv',
      'TV Digital-lg_smart_tv',
      'TV Digital-ps3_console',
      'TV Digital-ps4_console',
      'TV Digital-android',
      'TV Digital-ios',
      'TV Digital-windows',
      'TV Digital-stb',
      'TV Digital-roku',
      'TV Digital-hisense_smart_tv',
      'Claro Peru-web',
      'Claro Peru-iPhone',
      'Claro Peru-iPad',
      'Claro Peru-Android Tablet',
      'Claro Peru-xbox_console',
      'Claro Peru-samsung_smart_tv',
      'Claro Peru-phillips_smart_tv',
      'Claro Peru-sony_smart_tv',
      'Claro Peru-panasonic_smart_tv',
      'Claro Peru-lg_smart_tv',
      'Claro Peru-ps3_console',
      'Claro Peru-ps4_console',
      'Claro Peru-android',
      'Claro Peru-ios',
      'Claro Peru-windows',
      'Claro Peru-stb',
      'Claro Peru-roku',
      'Claro Peru-hisense_smart_tv',
      'Cablecom Mexico-web',
      'Cablecom Mexico-iPhone',
      'Cablecom Mexico-iPad',
      'Cablecom Mexico-Android Tablet',
      'Cablecom Mexico-xbox_console',
      'Cablecom Mexico-samsung_smart_tv',
      'Cablecom Mexico-phillips_smart_tv',
      'Cablecom Mexico-sony_smart_tv',
      'Cablecom Mexico-panasonic_smart_tv',
      'Cablecom Mexico-lg_smart_tv',
      'Cablecom Mexico-ps3_console',
      'Cablecom Mexico-ps4_console',
      'Cablecom Mexico-android',
      'Cablecom Mexico-ios',
      'Cablecom Mexico-windows',
      'Cablecom Mexico-stb',
      'Cablecom Mexico-roku',
      'Cablecom Mexico-hisense_smart_tv',
      'Personal TV-web',
      'Personal TV-iPhone',
      'Personal TV-iPad',
      'Personal TV-Android Tablet',
      'Personal TV-xbox_console',
      'Personal TV-samsung_smart_tv',
      'Personal TV-phillips_smart_tv',
      'Personal TV-sony_smart_tv',
      'Personal TV-panasonic_smart_tv',
      'Personal TV-lg_smart_tv',
      'Personal TV-ps3_console',
      'Personal TV-ps4_console',
      'Personal TV-android',
      'Personal TV-ios',
      'Personal TV-windows',
      'Personal TV-stb',
      'Personal TV-roku',
      'Personal TV-hisense_smart_tv',
      'Aster-web',
      'Aster-iPhone',
      'Aster-iPad',
      'Aster-Android Tablet',
      'Aster-xbox_console',
      'Aster-samsung_smart_tv',
      'Aster-phillips_smart_tv',
      'Aster-sony_smart_tv',
      'Aster-panasonic_smart_tv',
      'Aster-lg_smart_tv',
      'Aster-ps3_console',
      'Aster-ps4_console',
      'Aster-android',
      'Aster-ios',
      'Aster-windows',
      'Aster-stb',
      'Aster-roku',
      'Aster-hisense_smart_tv',
      'Tricom-web',
      'Tricom-iPhone',
      'Tricom-iPad',
      'Tricom-Android Tablet',
      'Tricom-xbox_console',
      'Tricom-samsung_smart_tv',
      'Tricom-phillips_smart_tv',
      'Tricom-sony_smart_tv',
      'Tricom-panasonic_smart_tv',
      'Tricom-lg_smart_tv',
      'Tricom-ps3_console',
      'Tricom-ps4_console',
      'Tricom-android',
      'Tricom-ios',
      'Tricom-windows',
      'Tricom-stb',
      'Tricom-roku',
      'Tricom-hisense_smart_tv',
      'Wind Telecom-web',
      'Wind Telecom-iPhone',
      'Wind Telecom-iPad',
      'Wind Telecom-Android Tablet',
      'Wind Telecom-xbox_console',
      'Wind Telecom-samsung_smart_tv',
      'Wind Telecom-phillips_smart_tv',
      'Wind Telecom-sony_smart_tv',
      'Wind Telecom-panasonic_smart_tv',
      'Wind Telecom-lg_smart_tv',
      'Wind Telecom-ps3_console',
      'Wind Telecom-ps4_console',
      'Wind Telecom-android',
      'Wind Telecom-ios',
      'Wind Telecom-windows',
      'Wind Telecom-stb',
      'Wind Telecom-roku',
      'Wind Telecom-hisense_smart_tv',
      'Net Uno-web',
      'Net Uno-iPhone',
      'Net Uno-iPad',
      'Net Uno-Android Tablet',
      'Net Uno-xbox_console',
      'Net Uno-samsung_smart_tv',
      'Net Uno-phillips_smart_tv',
      'Net Uno-sony_smart_tv',
      'Net Uno-panasonic_smart_tv',
      'Net Uno-lg_smart_tv',
      'Net Uno-ps3_console',
      'Net Uno-ps4_console',
      'Net Uno-android',
      'Net Uno-ios',
      'Net Uno-windows',
      'Net Uno-stb',
      'Net Uno-roku',
      'Net Uno-hisense_smart_tv',
      'Kolbi-web',
      'Kolbi-iPhone',
      'Kolbi-iPad',
      'Kolbi-Android Tablet',
      'Kolbi-xbox_console',
      'Kolbi-samsung_smart_tv',
      'Kolbi-phillips_smart_tv',
      'Kolbi-sony_smart_tv',
      'Kolbi-panasonic_smart_tv',
      'Kolbi-lg_smart_tv',
      'Kolbi-ps3_console',
      'Kolbi-ps4_console',
      'Kolbi-android',
      'Kolbi-ios',
      'Kolbi-windows',
      'Kolbi-stb',
      'Kolbi-roku',
      'Kolbi-hisense_smart_tv',
      'Falabella-web',
      'Falabella-iPhone',
      'Falabella-iPad',
      'Falabella-Android Tablet',
      'Falabella-xbox_console',
      'Falabella-samsung_smart_tv',
      'Falabella-phillips_smart_tv',
      'Falabella-sony_smart_tv',
      'Falabella-panasonic_smart_tv',
      'Falabella-lg_smart_tv',
      'Falabella-ps3_console',
      'Falabella-ps4_console',
      'Falabella-android',
      'Falabella-ios',
      'Falabella-windows',
      'Falabella-stb',
      'Falabella-roku',
      'Falabella-hisense_smart_tv',
      'U Play-web',
      'U Play-iPhone',
      'U Play-iPad',
      'U Play-Android Tablet',
      'U Play-xbox_console',
      'U Play-samsung_smart_tv',
      'U Play-phillips_smart_tv',
      'U Play-sony_smart_tv',
      'U Play-panasonic_smart_tv',
      'U Play-lg_smart_tv',
      'U Play-ps3_console',
      'U Play-ps4_console',
      'U Play-android',
      'U Play-ios',
      'U Play-windows',
      'U Play-stb',
      'U Play-roku',
      'U Play-hisense_smart_tv',
      'Gigared-web',
      'Gigared-iPhone',
      'Gigared-iPad',
      'Gigared-Android Tablet',
      'Gigared-xbox_console',
      'Gigared-samsung_smart_tv',
      'Gigared-phillips_smart_tv',
      'Gigared-sony_smart_tv',
      'Gigared-panasonic_smart_tv',
      'Gigared-lg_smart_tv',
      'Gigared-ps3_console',
      'Gigared-ps4_console',
      'Gigared-android',
      'Gigared-ios',
      'Gigared-windows',
      'Gigared-stb',
      'Gigared-roku',
      'Gigared-hisense_smart_tv',
      'Cableplus-web',
      'Cableplus-iPhone',
      'Cableplus-iPad',
      'Cableplus-Android Tablet',
      'Cableplus-xbox_console',
      'Cableplus-samsung_smart_tv',
      'Cableplus-phillips_smart_tv',
      'Cableplus-sony_smart_tv',
      'Cableplus-panasonic_smart_tv',
      'Cableplus-lg_smart_tv',
      'Cableplus-ps3_console',
      'Cableplus-ps4_console',
      'Cableplus-android',
      'Cableplus-ios',
      'Cableplus-windows',
      'Cableplus-stb',
      'Cableplus-roku',
      'Cableplus-hisense_smart_tv',
      'SKY (por Blue To Go Video-web',
      'SKY (por Blue To Go Video-iPhone',
      'SKY (por Blue To Go Video-iPad',
      'SKY (por Blue To Go Video-Android Tablet',
      'SKY (por Blue To Go Video-xbox_console',
      'SKY (por Blue To Go Video-samsung_smart_tv',
      'SKY (por Blue To Go Video-phillips_smart_tv',
      'SKY (por Blue To Go Video-sony_smart_tv',
      'SKY (por Blue To Go Video-panasonic_smart_tv',
      'SKY (por Blue To Go Video-lg_smart_tv',
      'SKY (por Blue To Go Video-ps3_console',
      'SKY (por Blue To Go Video-ps4_console',
      'SKY (por Blue To Go Video-android',
      'SKY (por Blue To Go Video-ios',
      'SKY (por Blue To Go Video-windows',
      'SKY (por Blue To Go Video-stb',
      'SKY (por Blue To Go Video-roku',
      'SKY (por Blue To Go Video-hisense_smart_tv',
      'ETB-web',
      'ETB-iPhone',
      'ETB-iPad',
      'ETB-Android Tablet',
      'ETB-xbox_console',
      'ETB-samsung_smart_tv',
      'ETB-phillips_smart_tv',
      'ETB-sony_smart_tv',
      'ETB-panasonic_smart_tv',
      'ETB-lg_smart_tv',
      'ETB-ps3_console',
      'ETB-ps4_console',
      'ETB-android',
      'ETB-ios',
      'ETB-windows',
      'ETB-stb',
      'ETB-roku',
      'ETB-hisense_smart_tv',
      'CCC-web',
      'CCC-iPhone',
      'CCC-iPad',
      'CCC-Android Tablet',
      'CCC-xbox_console',
      'CCC-samsung_smart_tv',
      'CCC-phillips_smart_tv',
      'CCC-sony_smart_tv',
      'CCC-panasonic_smart_tv',
      'CCC-lg_smart_tv',
      'CCC-ps3_console',
      'CCC-ps4_console',
      'CCC-android',
      'CCC-ios',
      'CCC-windows',
      'CCC-stb',
      'CCC-roku',
      'CCC-hisense_smart_tv',
      'TIGO-web',
      'TIGO-iPhone',
      'TIGO-iPad',
      'TIGO-Android Tablet',
      'TIGO-xbox_console',
      'TIGO-samsung_smart_tv',
      'TIGO-phillips_smart_tv',
      'TIGO-sony_smart_tv',
      'TIGO-panasonic_smart_tv',
      'TIGO-lg_smart_tv',
      'TIGO-ps3_console',
      'TIGO-ps4_console',
      'TIGO-android',
      'TIGO-ios',
      'TIGO-windows',
      'TIGO-stb',
      'TIGO-roku',
      'TIGO-hisense_smart_tv',
      'Algar-web',
      'Algar-iPhone',
      'Algar-iPad',
      'Algar-Android Tablet',
      'Algar-xbox_console',
      'Algar-samsung_smart_tv',
      'Algar-phillips_smart_tv',
      'Algar-sony_smart_tv',
      'Algar-panasonic_smart_tv',
      'Algar-lg_smart_tv',
      'Algar-ps3_console',
      'Algar-ps4_console',
      'Algar-android',
      'Algar-ios',
      'Algar-windows',
      'Algar-stb',
      'Algar-roku',
      'Algar-hisense_smart_tv',
      'Claro hdtv-web',
      'Claro hdtv-iPhone',
      'Claro hdtv-iPad',
      'Claro hdtv-Android Tablet',
      'Claro hdtv-xbox_console',
      'Claro hdtv-samsung_smart_tv',
      'Claro hdtv-phillips_smart_tv',
      'Claro hdtv-sony_smart_tv',
      'Claro hdtv-panasonic_smart_tv',
      'Claro hdtv-lg_smart_tv',
      'Claro hdtv-ps3_console',
      'Claro hdtv-ps4_console',
      'Claro hdtv-android',
      'Claro hdtv-ios',
      'Claro hdtv-windows',
      'Claro hdtv-stb',
      'Claro hdtv-roku',
      'Claro hdtv-hisense_smart_tv',
      'GVT-web',
      'GVT-iPhone',
      'GVT-iPad',
      'GVT-Android Tablet',
      'GVT-xbox_console',
      'GVT-samsung_smart_tv',
      'GVT-phillips_smart_tv',
      'GVT-sony_smart_tv',
      'GVT-panasonic_smart_tv',
      'GVT-lg_smart_tv',
      'GVT-ps3_console',
      'GVT-ps4_console',
      'GVT-android',
      'GVT-ios',
      'GVT-windows',
      'GVT-stb',
      'GVT-roku',
      'GVT-hisense_smart_tv',
      'SIM TV-web',
      'SIM TV-iPhone',
      'SIM TV-iPad',
      'SIM TV-Android Tablet',
      'SIM TV-xbox_console',
      'SIM TV-samsung_smart_tv',
      'SIM TV-phillips_smart_tv',
      'SIM TV-sony_smart_tv',
      'SIM TV-panasonic_smart_tv',
      'SIM TV-lg_smart_tv',
      'SIM TV-ps3_console',
      'SIM TV-ps4_console',
      'SIM TV-android',
      'SIM TV-ios',
      'SIM TV-windows',
      'SIM TV-stb',
      'SIM TV-roku',
      'SIM TV-hisense_smart_tv',
      'SKY-web',
      'SKY-iPhone',
      'SKY-iPad',
      'SKY-Android Tablet',
      'SKY-xbox_console',
      'SKY-samsung_smart_tv',
      'SKY-phillips_smart_tv',
      'SKY-sony_smart_tv',
      'SKY-panasonic_smart_tv',
      'SKY-lg_smart_tv',
      'SKY-ps3_console',
      'SKY-ps4_console',
      'SKY-android',
      'SKY-ios',
      'SKY-windows',
      'SKY-stb',
      'SKY-roku',
      'SKY-hisense_smart_tv',
      'VIVO-web',
      'VIVO-iPhone',
      'VIVO-iPad',
      'VIVO-Android Tablet',
      'VIVO-xbox_console',
      'VIVO-samsung_smart_tv',
      'VIVO-phillips_smart_tv',
      'VIVO-sony_smart_tv',
      'VIVO-panasonic_smart_tv',
      'VIVO-lg_smart_tv',
      'VIVO-ps3_console',
      'VIVO-ps4_console',
      'VIVO-android',
      'VIVO-ios',
      'VIVO-windows',
      'VIVO-stb',
      'VIVO-roku',
      'VIVO-hisense_smart_tv',
      'FOXPLAY-web',
      'FOXPLAY-iPhone',
      'FOXPLAY-iPad',
      'FOXPLAY-Android Tablet',
      'FOXPLAY-xbox_console',
      'FOXPLAY-samsung_smart_tv',
      'FOXPLAY-phillips_smart_tv',
      'FOXPLAY-sony_smart_tv',
      'FOXPLAY-panasonic_smart_tv',
      'FOXPLAY-lg_smart_tv',
      'FOXPLAY-ps3_console',
      'FOXPLAY-ps4_console',
      'FOXPLAY-android',
      'FOXPLAY-ios',
      'FOXPLAY-windows',
      'FOXPLAY-stb',
      'FOXPLAY-roku',
      'FOXPLAY-hisense_smart_tv',
      'Oi-web',
      'Oi-iPhone',
      'Oi-iPad',
      'Oi-Android Tablet',
      'Oi-xbox_console',
      'Oi-samsung_smart_tv',
      'Oi-phillips_smart_tv',
      'Oi-sony_smart_tv',
      'Oi-panasonic_smart_tv',
      'Oi-lg_smart_tv',
      'Oi-ps3_console',
      'Oi-ps4_console',
      'Oi-android',
      'Oi-ios',
      'Oi-windows',
      'Oi-stb',
      'Oi-roku',
      'Oi-hisense_smart_tv',
      'CTV-web',
      'CTV-xbox_console',
      'CTV-samsung_smart_tv',
      'CTV-phillips_smart_tv',
      'CTV-sony_smart_tv',
      'CTV-panasonic_smart_tv',
      'CTV-lg_smart_tv',
      'CTV-CTV',
      'CTV-ps3_console',
      'CTV-ps4_console',
      'CTV-android',
      'CTV-ios',
      'CTV-windows',
      'CTV-stb',
      'CTV-roku',
      'CTV-hisense_smart_tv',
      'Prensafox-web',
      'Prensafox-xbox_console',
      'Prensafox-samsung_smart_tv',
      'Prensafox-phillips_smart_tv',
      'Prensafox-sony_smart_tv',
      'Prensafox-panasonic_smart_tv',
      'Prensafox-lg_smart_tv',
      'Prensafox-ps3_console',
      'Prensafox-ps4_console',
      'Prensafox-android',
      'Prensafox-ios',
      'Prensafox-windows',
      'Prensafox-stb',
      'Prensafox-roku',
      'Prensafox-hisense_smart_tv',
      'emp_fox-web',
      'emp_fox-xbox_console',
      'emp_fox-samsung_smart_tv',
      'emp_fox-phillips_smart_tv',
      'emp_fox-sony_smart_tv',
      'emp_fox-panasonic_smart_tv',
      'emp_fox-lg_smart_tv',
      'emp_fox-ps3_console',
      'emp_fox-ps4_console',
      'emp_fox-android',
      'emp_fox-ios',
      'emp_fox-windows',
      'emp_fox-stb',
      'emp_fox-roku',
      'emp_fox-hisense_smart_tv',
      'Base-Telugu',
      'Base-Tamil',
      'Base-Kannada',
      'Base-Malayalam',
      'AddOn-Telugu',
      'AddOn-Tamil',
      'AddOn-Kannada',
      'AddOn-Malayalam',
      'DFW-OPUS',
      'DFW-MYATT',
      'Windows-New Customer',
      'Windows-Google Play',
      'Windows-CCAvenue',
      'Windows-Fortumo',
      'Windows-PayPal',
      'Nokia-OVI Store',
      'Nokia-HBOSKNY',
      'Nokia-25DOLRDISC',
      'Nokia-15DOLRDISC',
      'Wap-CCAvenue',
      'Wap-Fortumo',
      'Wap-PayPal',
      'Wap-Juno',
      'Wap-Yippster',
      'Dtc-Directplan',
      'Tve-Buythrough',
      'EV Web-ProdOffer',
      'EV Web-PromoOffer',
      'Fox Basic-Fox Play App',
      'Fox Sports Premium-Fox Play App and Fox Spor',
      'FOX-New Customer',
      'FOX-Existing Customer',
      'Natgeo-New Customer',
      'Natgeo-Existing Customer',
      'Sports-New Customer',
      'Sports-Existing Customer',
      'IVP-Base Plan',
      'IVP-Up-sell',
      'AndroidTV-AndroidTV',
      'Indigo-Indigo',
      'Alliance-Alliance',
      'DishTv-DishTv',
      'Android_LC-Android_LC',
      'AndroidTV_LC-AndroidTV_LC',
      'AndroidTV2-AndroidTV2',
    ],
    appChannel: [
      'App Store Billing',
      'Google Play',
      'AppStore',
      'URN',
      'Amazon App Store Billing',
      'Cisco',
      'base pack',
    ],
    periods: [
      'LifeTime',
      'NoOfMinutes',
      'NoOfHours',
      'NoOfDays',
      'NoOfMonths',
      'NoOfYears',
    ],
    unitOfMeasures: [
      'Number(s)',
      'Meter(s)',
      'Year(s)',
      'Hour(s)',
      'Pound(s)',
      'Minute(s)',
      'Liter(s)',
      'Kilowatt(s)',
    ],
    frequencyAndProrates: ['Monthly', 'Yearly', 'Weekly', 'Daily'],
  },
  packagesMasterData: {
    planTypeSubPlanData: [
      {
        planType: 'Basic Service',
      },
      {
        planType: 'Bolt-on',
      },
      {
        planType: 'Standalone',
      },
      {
        planType: 'AddOn',
      },
    ],
    typeOfService: ['Basic Service', 'Bolt-on', 'Standalone', 'AddOn'],
    languages: [
      'English',
      'French',
      'German',
      'Spanish',
      'Swedish',
      'Portuguese',
      'Korean',
      'Vietnamese',
      'Filipino',
      'Arabic',
    ],
    salesChannels: [
      'CSR',
      'Web',
      'Partner Channel',
      'Kiosk',
      'Android',
      'iOS',
      'Cablevisión',
      'DIRECTV',
      'Telecentro',
      'Supercanal',
      'Telered',
      'VTR',
      'Telefónica del Sur',
      'Movistar',
      'Telefónica de Coyhaique',
      'Cuenta UNE',
      'Claro',
      'TVCable',
      'Telecable',
      'Ultravisión',
      'Cableonda',
      'PuntaCable',
      'MonteCable',
      'NS Now',
      'TCC',
      'Inter',
      'Dish',
      'TVred',
      'Axtel',
      'Total Play',
      'Gigacable',
      'Etapa TV',
      'Megacable',
      'Dibox',
      'Express',
      'Colsecor',
      'GTD Manquehue',
      'TV Digital',
      'Claro Peru',
      'Cablecom Mexico',
      'Personal TV',
      'Aster',
      'Tricom',
      'Wind Telecom',
      'Net Uno',
      'Kolbi',
      'Falabella',
      'U Play',
      'Gigared',
      'Cableplus',
      'SKY (por Blue To Go Video',
      'ETB',
      'CCC',
      'TIGO',
      'Algar',
      'Claro hdtv',
      'GVT',
      'SIM TV',
      'SKY',
      'VIVO',
      'FOXPLAY',
      'Oi',
      'CTV',
      'Prensafox',
      'emp_fox',
      'Base',
      'AddOn',
      'DFW',
      'Windows',
      'Nokia',
      'Wap',
      'Dtc',
      'Tve',
      'EV Web',
      'Fox Basic',
      'Fox Sports Premium',
      'FOX',
      'Natgeo',
      'Sports',
      'IVP',
      'AndroidTV',
      'Indigo',
      'Generic_Coupon',
      'Alliance',
      'DishTv',
      'Titanium',
      'Android_LC',
      'AndroidTV_LC',
      'AndroidTV2',
    ],
    packageType: ['Recurring', 'OneTime', 'Both'],
    periods: [
      'LifeTime',
      'NoOfMinutes',
      'NoOfHours',
      'NoOfDays',
      'NoOfMonths',
      'NoOfYears',
    ],
    offerTypes: [
      'New Customer',
      'Existing Customer',
      'Retention',
      'Re-activation',
      'Up-sell',
      'Cross-sell',
      'Down-sell',
      'One-time credit',
      'Samsung',
      'Micromax',
      'Apple',
      'Android',
      'Sony-Xperia',
      'web',
      'iPhone',
      'iPad',
      'Android Tablet',
      'Android Smartphone',
      'Microsoft Smartphone',
      'Microsoft Tablet',
      'xbox_console',
      'XBOX1',
      'samsung_smart_tv',
      'phillips_smart_tv',
      'sony_smart_tv',
      'panasonic_smart_tv',
      'lg_smart_tv',
      'CTV',
      'Intex-Aqua Craze',
      'Intex-Aqua Raze',
      'Intex-Aqua Twist',
      'Intex-Aqua Prime 4G',
      'Intex-Aqua Shine 4G',
      'Intex-Cloud Fame',
      'Intex-Cloud Glory',
      'Intex-Aqua Music',
      'Intex-Cloud String',
      'Intex-Aqua Power HD',
      'Intex-Aqua Classic',
      'Intex-Aqua Lions 4G',
      'Non Paid Customer',
      'Motorola-Mot1G3',
      'ps3_console',
      'ps4_console',
      'android',
      'ios',
      'windows',
      'stb',
      'Sony-F5122',
      'Sony-F3116',
      'Sony-C2004',
      'Sony-C2104',
      'Sony-C2305',
      'Sony-C5302',
      'Sony-C5502',
      'Sony-C6502',
      'Sony-C6802',
      'Sony-C6902',
      'Sony-SGP321',
      'Sony-D2005',
      'Sony-D2105',
      'Sony-D2202',
      'Sony-D2212',
      'Sony-D2302',
      'Sony-D5102',
      'Sony-D5322',
      'Sony-D5503',
      'Sony-D5833',
      'Sony-D6502',
      'Sony-D6653',
      'Sony-E2115',
      'Sony-E5363',
      'Sony-SGP521',
      'Sony-E2043',
      'Sony-E5563',
      'Sony-E5663',
      'Sony-E6553',
      'Sony-C1504',
      'Sony-C1604',
      'Sony-C1904',
      'Sony-D2502',
      'Sony-E2363',
      'LGE-LGK500I.AINDBKF',
      'Intex-Aqua Power HD-4G',
      'Apple_iPhone',
      'Apple_iPad',
      'roku',
      'Web',
      'Telugu',
      'Tamil',
      'Kannada',
      'Malayalam',
      'OPUS',
      'MYATT',
      'Google Play',
      'CCAvenue',
      'Fortumo',
      'PayPal',
      'Juno',
      'Yippster',
      'OVI Store',
      'HBOSKNY',
      '25DOLRDISC',
      '15DOLRDISC',
      'Directplan',
      'Buythrough',
      'ProdOffer',
      'PromoOffer',
      'Fox Play App',
      'Fox Play App and Fox Spor',
      'Base Plan',
      'Up-sell',
      'hisense_smart_tv',
      'AndroidTV',
      'Indigo',
      'VIP',
      'All_Customers',
      'Alliance',
      'DishTv',
      'Generic_Coupon',
      'Titanium',
      'Android_LC',
      'AndroidTV_LC',
      'AndroidTV2',
    ],
  },
  promotionsMasterData: {
    promotionCategory: [
      'Product',
      'ChannelGroup',
      'Dependent',
      'OrderAmount',
      'OrderItems',
      'PayInAdvance',
      'PrePay',
      'Contract',
      'OrderQuantity',
      'PromoOnPromo',
    ],
    salesChannels: [
      'CSR',
      'Web',
      'Partner Channel',
      'Kiosk',
      'Android',
      'iOS',
      'Cablevisión',
      'DIRECTV',
      'Telecentro',
      'Supercanal',
      'Telered',
      'VTR',
      'Telefónica del Sur',
      'Movistar',
      'Telefónica de Coyhaique',
      'Cuenta UNE',
      'Claro',
      'TVCable',
      'Telecable',
      'Ultravisión',
      'Cableonda',
      'PuntaCable',
      'MonteCable',
      'NS Now',
      'TCC',
      'Inter',
      'Dish',
      'TVred',
      'Axtel',
      'Total Play',
      'Gigacable',
      'Etapa TV',
      'Megacable',
      'Dibox',
      'Express',
      'Colsecor',
      'GTD Manquehue',
      'TV Digital',
      'Claro Peru',
      'Cablecom Mexico',
      'Personal TV',
      'Aster',
      'Tricom',
      'Wind Telecom',
      'Net Uno',
      'Kolbi',
      'Falabella',
      'U Play',
      'Gigared',
      'Cableplus',
      'SKY (por Blue To Go Video',
      'ETB',
      'CCC',
      'TIGO',
      'Algar',
      'Claro hdtv',
      'GVT',
      'SIM TV',
      'SKY',
      'VIVO',
      'FOXPLAY',
      'Oi',
      'CTV',
      'Prensafox',
      'emp_fox',
      'Base',
      'AddOn',
      'DFW',
      'Windows',
      'Nokia',
      'Wap',
      'Dtc',
      'Tve',
      'EV Web',
      'Fox Basic',
      'Fox Sports Premium',
      'FOX',
      'Natgeo',
      'Sports',
      'IVP',
      'AndroidTV',
      'Indigo',
      'Generic_Coupon',
      'Alliance',
      'DishTv',
      'Titanium',
      'Android_LC',
      'AndroidTV_LC',
      'AndroidTV2',
    ],
    accessibilityMode: ['Free', 'Bounded'],
    isPreviousPromotionAllowed: ['Yes', 'No'],
    contentType: ['HD', 'SD'],
    promotionTypes: [
      'Flat',
      'Free',
      'Flat Off',
      'Percentage',
      'Percentage Off',
    ],
    periods: [
      'LifeTime',
      'NoOfMinutes',
      'NoOfHours',
      'NoOfDays',
      'NoOfMonths',
      'NoOfYears',
    ],
    offerTypes: [
      'New Customer',
      'Existing Customer',
      'Retention',
      'Re-activation',
      'Up-sell',
      'Cross-sell',
      'Down-sell',
      'One-time credit',
      'Samsung',
      'Micromax',
      'Apple',
      'Android',
      'Sony-Xperia',
      'web',
      'iPhone',
      'iPad',
      'Android Tablet',
      'Android Smartphone',
      'Microsoft Smartphone',
      'Microsoft Tablet',
      'xbox_console',
      'XBOX1',
      'samsung_smart_tv',
      'phillips_smart_tv',
      'sony_smart_tv',
      'panasonic_smart_tv',
      'lg_smart_tv',
      'CTV',
      'Intex-Aqua Craze',
      'Intex-Aqua Raze',
      'Intex-Aqua Twist',
      'Intex-Aqua Prime 4G',
      'Intex-Aqua Shine 4G',
      'Intex-Cloud Fame',
      'Intex-Cloud Glory',
      'Intex-Aqua Music',
      'Intex-Cloud String',
      'Intex-Aqua Power HD',
      'Intex-Aqua Classic',
      'Intex-Aqua Lions 4G',
      'Non Paid Customer',
      'Motorola-Mot1G3',
      'ps3_console',
      'ps4_console',
      'android',
      'ios',
      'windows',
      'stb',
      'Sony-F5122',
      'Sony-F3116',
      'Sony-C2004',
      'Sony-C2104',
      'Sony-C2305',
      'Sony-C5302',
      'Sony-C5502',
      'Sony-C6502',
      'Sony-C6802',
      'Sony-C6902',
      'Sony-SGP321',
      'Sony-D2005',
      'Sony-D2105',
      'Sony-D2202',
      'Sony-D2212',
      'Sony-D2302',
      'Sony-D5102',
      'Sony-D5322',
      'Sony-D5503',
      'Sony-D5833',
      'Sony-D6502',
      'Sony-D6653',
      'Sony-E2115',
      'Sony-E5363',
      'Sony-SGP521',
      'Sony-E2043',
      'Sony-E5563',
      'Sony-E5663',
      'Sony-E6553',
      'Sony-C1504',
      'Sony-C1604',
      'Sony-C1904',
      'Sony-D2502',
      'Sony-E2363',
      'LGE-LGK500I.AINDBKF',
      'Intex-Aqua Power HD-4G',
      'Apple_iPhone',
      'Apple_iPad',
      'roku',
      'Web',
      'Telugu',
      'Tamil',
      'Kannada',
      'Malayalam',
      'OPUS',
      'MYATT',
      'Google Play',
      'CCAvenue',
      'Fortumo',
      'PayPal',
      'Juno',
      'Yippster',
      'OVI Store',
      'HBOSKNY',
      '25DOLRDISC',
      '15DOLRDISC',
      'Directplan',
      'Buythrough',
      'ProdOffer',
      'PromoOffer',
      'Fox Play App',
      'Fox Play App and Fox Spor',
      'Base Plan',
      'Up-sell',
      'hisense_smart_tv',
      'AndroidTV',
      'Indigo',
      'VIP',
      'All_Customers',
      'Alliance',
      'DishTv',
      'Generic_Coupon',
      'Titanium',
      'Android_LC',
      'AndroidTV_LC',
      'AndroidTV2',
    ],
  },
  effectiveFrom: ['Immediately', 'NextBillCycle'],
  paymentInterfaceList: [
    'Authorize.Net',
    'PayPal PRO',
    'Cyber Source',
    'Indigo',
    'PayPal',
    'DineroMail',
    'Global Collect',
    'Oi',
    'PayZen',
    'DIBS',
    'PayTM Wallet',
    'App Store',
    'Braintree',
    'Google Wallet',
    'Amazon App Store',
    'MobilePayment',
    'PayU',
    'IPPayments',
    'PayPal Billing',
    'Line Pay',
    'World Pay',
    'Adyen',
    'Globe',
    'RazorPay',
    'EPG',
    'LazyPay',
    'AntelDCB',
    'PAYTMQR',
    'Boost',
    'Kushkipagos',
    'Chase Paymentech',
    'Banco Mercantil',
  ],
  gatewayList: [
    'Cash',
    'Check',
    'Credit/Debit Card',
    'Electronic Check',
    'EFT',
    'Money Order',
    'PayPal Account',
    'Offline Cash',
    'Prepaid',
    'Partner',
    'Netbanking',
    'Credit Card',
    'Debit Card',
    'Operator Billing',
    'App Store Billing',
    'Google Wallet',
    'Paypal',
    'Wallet',
    'MobileWallet',
    'Paypal EC',
    'Coupon',
    'AppStore',
    'Klarna',
    'Grab Pay',
    'PayTM Wallet',
    'GoogleStore',
    'iDEAL',
    'PayUMoney',
    'FreeCharge',
    'OlaMoney',
    'MobilePayment',
    'Wallet-PayU-PayZapp',
    'Wallet-PayU-OlaMoney',
    'Wallet-PayU-YPayCash',
    'Wallet-PayU-FrechargeWallet',
    'Wallet-PayU-AirtelMoney',
    'Wallet-PayU-OXIGENWallet',
    'Wallet-PayU-ItzCash',
    'Wallet-PayU-YesWallet',
    'PayPal Billing',
    'Partner Billing',
    'JUNOTELE',
    'ACT Fibernet',
    'Idea',
    'Truecaller',
    'Globe',
    'yupptv',
    'HOOQ Billing',
    'BandOTT',
    'StarHub',
    'Singtel',
    'ePagos',
    'unifi',
    'CHT',
    'AntelSMS',
    'Dragonpay (Convenience Stores)',
    'Dragonpay (OTC Banks)',
    'Dragonpay Online Banking',
    'Dragonpay GCash',
    'RAZORPAY',
    'Vodafone',
    'Voucher',
    'Amazon Pay',
    'UPI',
    'Kotak Bank',
    'LazyPay',
    'PhonePe',
    'BHARATQR',
    'JioSTB',
    'PAYTMQR',
    'Alliance',
    'DishTv',
    'Boost',
    'Etisalat',
    'M2M',
    'FLIPKART',
    'PayZapp',
    'Ola Money',
    'Airtel Money',
    'MobiKwik',
    'TataSky',
    'Zain',
    'Batelco',
    'PayTM Billing',
    'SkyTV',
    'Telkomsel',
    'Cignal',
    'TBC',
    'FirstMedia',
    'IndiHome',
    'Astro',
    '3BB',
    'KBRO_W_Chinese',
    'TOP',
    'Globe',
    'CNS',
    'KBRO_TFM_W_Chinese',
    'KBRO_W_Chinese1',
    'KBRO_W_Chinese2',
    'SWITCHTV',
    'Amazon App Store Billing',
    'Gift Card Payment',
    'Devetel',
    'Others',
  ],
  countryList: [
    {
      region: 'South America',
      regions: ['South', 'North'],
      countryCode: 'US',
      countryName: 'United States',
      stateList: [
        {
          stateName: 'AL-Alabama',
          districtList: [
            {
              districtName: 'Baldwin',
              cityList: [
                {
                  cityName: 'Bay Minette',
                },
                {
                  cityName: 'Daphne',
                },
              ],
            },
            {
              districtName: 'Autauga',
              cityList: [
                {
                  cityName: 'Millbrook',
                },
                {
                  cityName: 'Prattville',
                },
              ],
            },
          ],
        },
        {
          stateName: 'AK-Alaska',
          districtList: [
            {
              districtName: 'Aleutians East Borough',
              cityList: [
                {
                  cityName: 'Sand Point',
                },
                {
                  cityName: 'Cold Bay',
                },
              ],
            },
            {
              districtName: 'Anchorage',
              cityList: [
                {
                  cityName: 'Wasilla',
                },
                {
                  cityName: 'Homer',
                },
              ],
            },
          ],
        },
        {
          stateName: 'AZ-Arizona',
          districtList: [
            {
              districtName: 'Apache',
              cityList: [
                {
                  cityName: 'Saint Johns',
                },
                {
                  cityName: 'Eagar',
                },
              ],
            },
            {
              districtName: 'Cochise',
              cityList: [
                {
                  cityName: 'Sierra Vista',
                },
                {
                  cityName: 'Douglas',
                },
              ],
            },
          ],
        },
        {
          stateName: 'AR-Arkansas',
          districtList: [
            {
              districtName: 'Arkansas',
              cityList: [
                {
                  cityName: 'Little Rock',
                },
                {
                  cityName: 'Fort Smith',
                },
              ],
            },
            {
              districtName: 'Ashley',
              cityList: [
                {
                  cityName: 'Ashley North',
                },
                {
                  cityName: 'Ashley Central',
                },
              ],
            },
          ],
        },
        {
          stateName: 'CA-California',
        },
        {
          stateName: 'CO-Colorado',
        },
        {
          stateName: 'CT-Connecticut',
        },
        {
          stateName: 'DC-D.C',
        },
        {
          stateName: 'DE-Delaware',
        },
        {
          stateName: 'FL-Florida',
        },
        {
          stateName: 'GA-Georgia',
        },
        {
          stateName: 'HI-Hawaii',
        },
        {
          stateName: 'ID-Idaho',
        },
        {
          stateName: 'IL-Illinois',
        },
        {
          stateName: 'IN-Indiana',
        },
        {
          stateName: 'IA-Iowa',
        },
        {
          stateName: 'KS-Kansas',
        },
        {
          stateName: 'KY-Kentucky',
        },
        {
          stateName: 'LA-Louisiana',
        },
        {
          stateName: 'ME-Maine',
        },
        {
          stateName: 'MD-Maryland',
        },
        {
          stateName: 'MA-Massachusetts',
        },
        {
          stateName: 'MI-Michigan',
        },
        {
          stateName: 'MN-Minnesota',
        },
        {
          stateName: 'MS-Mississippi',
        },
        {
          stateName: 'MO-Missouri',
        },
        {
          stateName: 'MT-Montana',
        },
        {
          stateName: 'NE-Nebraska',
        },
        {
          stateName: 'NV-Nevada',
        },
        {
          stateName: 'NH-New Hampshire',
        },
        {
          stateName: 'NJ-New Jersey',
        },
        {
          stateName: 'NM-New Mexico',
        },
        {
          stateName: 'NY-New York',
        },
        {
          stateName: 'NC-North Carolina',
        },
        {
          stateName: 'ND-North Dakota',
        },
        {
          stateName: 'OH-Ohio',
        },
        {
          stateName: 'OK-Oklahoma',
        },
        {
          stateName: 'OR-Oregon',
        },
        {
          stateName: 'PA-Pennsylvania',
        },
        {
          stateName: 'RI-Rhode Island',
        },
        {
          stateName: 'SC-South Carolina',
        },
        {
          stateName: 'SD-South Dakota',
        },
        {
          stateName: 'TN-Tennessee',
        },
        {
          stateName: 'TX-Texas',
        },
        {
          stateName: 'UT-Utah',
        },
        {
          stateName: 'VT-Vermont',
        },
        {
          stateName: 'VA-Virginia',
        },
        {
          stateName: 'WA-Washington',
        },
        {
          stateName: 'WV-West Virginia',
        },
        {
          stateName: 'WT-Wisconsin',
        },
        {
          stateName: 'WY-Wyoming',
        },
        {
          stateName: 'AA-Armed Forces Africa',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'MY',
      countryName: 'Malaysia',
      stateList: [
        {
          stateName: 'JHR-Johor',
          districtList: [
            {
              districtName: 'Batu Pahat',
              cityList: [
                {
                  cityName: 'Jalan Kluang',
                },
                {
                  cityName: 'Tanjung Sepat',
                },
              ],
            },
            {
              districtName: 'Muar',
              cityList: [
                {
                  cityName: 'Cheras',
                },
                {
                  cityName: 'Ampang',
                },
              ],
            },
          ],
        },
        {
          stateName: 'KDH-Kedah',
          districtList: [
            {
              districtName: 'Kulim',
              cityList: [
                {
                  cityName: 'Bukit Mertajam',
                },
                {
                  cityName: 'Taiping',
                },
              ],
            },
            {
              districtName: 'Baling',
              cityList: [
                {
                  cityName: 'Daman',
                },
                {
                  cityName: 'Shang Baling',
                },
              ],
            },
          ],
        },
        {
          stateName: 'KTN-Kelantan',
        },
        {
          stateName: 'KUL-Federal Territory of Kuala Lumpur',
        },
        {
          stateName: 'LBN-Federal Territory of Labuan',
        },
        {
          stateName: 'MLK-Malacca',
        },
        {
          stateName: 'NSN-Negeri Sembilan',
        },
        {
          stateName: 'PHG-Pahang',
        },
        {
          stateName: 'PJY-Federal Territory of Putrajaya',
        },
        {
          stateName: 'PLS-Perlis',
        },
        {
          stateName: 'PNG-Penang',
        },
        {
          stateName: 'PRK-Perak',
        },
        {
          stateName: 'SBH-Sabah',
        },
        {
          stateName: 'SGR-Selangor',
        },
        {
          stateName: 'SWK-Sarawak',
        },
        {
          stateName: 'TRG-Terengganu',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'MX',
      countryName: 'Mexico',
      stateList: [
        {
          stateName: 'AS-Aguascalientes',
          districtList: [
            {
              districtName: 'Asientos',
              cityList: [
                {
                  cityName: 'LA Minerva',
                },
                {
                  cityName: 'Calie Mariano Matamoros',
                },
              ],
            },
            {
              districtName: 'Calvillo',
              cityList: [
                {
                  cityName: 'Belize City',
                },
                {
                  cityName: 'Corozal',
                },
              ],
            },
          ],
        },
        {
          stateName: 'BC-Baja California',
          districtList: [
            {
              districtName: 'Tijuana',
              cityList: [
                {
                  cityName: 'Iowa',
                },
                {
                  cityName: 'Oregon',
                },
              ],
            },
            {
              districtName: 'Tecate',
              cityList: [
                {
                  cityName: 'Belmopan',
                },
                {
                  cityName: 'San Ignacio',
                },
              ],
            },
          ],
        },
        {
          stateName: 'BS-Baja California Sur',
        },
        {
          stateName: 'CC-Campeche',
        },
        {
          stateName: 'CS-Chiapas',
        },
        {
          stateName: 'CH-Chihuahua',
        },
        {
          stateName: 'CL-Coahuila',
        },
        {
          stateName: 'CM-Colima',
        },
        {
          stateName: 'DF-Distrito Federal',
        },
        {
          stateName: 'DG-Durango',
        },
        {
          stateName: 'GT-Guanajuato',
        },
        {
          stateName: 'GR-Guerrero',
        },
        {
          stateName: 'HG-Hidalgo',
        },
        {
          stateName: 'JC-Jalisco',
        },
        {
          stateName: 'MC-México',
        },
        {
          stateName: 'MN-Michoacan',
        },
        {
          stateName: 'MS-Morelos',
        },
        {
          stateName: 'NT-Nayarit',
        },
        {
          stateName: 'NL-Nuevo León',
        },
        {
          stateName: 'OC-Oaxaca',
        },
        {
          stateName: 'PL-Puebla',
        },
        {
          stateName: 'QT-Querétaro',
        },
        {
          stateName: 'QR-Quintana Roo',
        },
        {
          stateName: 'SP-San Luis Potosí',
        },
        {
          stateName: 'SL-Sinaloa',
        },
        {
          stateName: 'SR-Sonora',
        },
        {
          stateName: 'TC-Tabasco',
        },
        {
          stateName: 'TL-Tlaxcala',
        },
        {
          stateName: 'TS-Tamaulipas',
        },
        {
          stateName: 'VZ-Veracruz',
        },
        {
          stateName: 'YN-Yucatán',
        },
        {
          stateName: 'ZS-Zacatecas',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'BZ',
      countryName: 'Belize',
      stateList: [
        {
          stateName: 'BZ-Belize',
          districtList: [
            {
              districtName: 'Orange Walk',
              cityList: [
                {
                  cityName: 'Unitedville?',
                },
                {
                  cityName: 'San Antonio',
                },
              ],
            },
            {
              districtName: 'Toledo',
              cityList: [
                {
                  cityName: 'Zapopan',
                },
                {
                  cityName: 'Irapuato',
                },
              ],
            },
          ],
        },
        {
          stateName: 'CY-Cayo',
          districtList: [
            {
              districtName: 'Cayo North',
              cityList: [
                {
                  cityName: 'Guadalajara',
                },
                {
                  cityName: 'Tijuana',
                },
              ],
            },
            {
              districtName: 'Cayo Central',
              cityList: [
                {
                  cityName: 'Alpine',
                },
                {
                  cityName: 'Bonita',
                },
              ],
            },
          ],
        },
        {
          stateName: 'CZL-Corozal',
        },
        {
          stateName: 'OW-Orange Walk',
        },
        {
          stateName: 'SC-Stann Creek',
        },
        {
          stateName: 'TOL-Toledo',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'CR',
      countryName: 'Costa Rica',
      stateList: [
        {
          stateName: 'A-Alajuela',
        },
        {
          stateName: 'C-Cartago',
        },
        {
          stateName: 'G-Guanacaste',
        },
        {
          stateName: 'H-Heredia',
        },
        {
          stateName: 'L-Limón',
        },
        {
          stateName: 'P-Puntarenas',
        },
        {
          stateName: 'SJ-San José',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'SV',
      countryName: 'El Salvador',
      stateList: [
        {
          stateName: 'AH-Ahuachapán',
        },
        {
          stateName: 'CA-Cabañas',
        },
        {
          stateName: 'CH-Chalatenango',
        },
        {
          stateName: 'CU-Cuscatlán',
        },
        {
          stateName: 'LI-La Libertad',
        },
        {
          stateName: 'MO-Morazán',
        },
        {
          stateName: 'PA-La Paz',
        },
        {
          stateName: 'SA-Santa Ana',
        },
        {
          stateName: 'SM-San Miguel',
        },
        {
          stateName: 'SO-Sonsonate',
        },
        {
          stateName: 'SS-San Salvador',
        },
        {
          stateName: 'SV-San Vicente',
        },
        {
          stateName: 'UN-La Unión',
        },
        {
          stateName: 'US-Usulután',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'GT',
      countryName: 'Guatemala',
      stateList: [
        {
          stateName: 'AV-Alta Verapaz',
        },
        {
          stateName: 'BV-Baja Verapaz',
        },
        {
          stateName: 'CM-Chimaltenango',
        },
        {
          stateName: 'CQ-Chiquimula',
        },
        {
          stateName: 'ES-Escuintla',
        },
        {
          stateName: 'GU-Guatemala',
        },
        {
          stateName: 'HU-Huehuetenango',
        },
        {
          stateName: 'IZ-Izabal',
        },
        {
          stateName: 'JA-Jalapa',
        },
        {
          stateName: 'JU-Jutiapa',
        },
        {
          stateName: 'PE-Petén',
        },
        {
          stateName: 'PR-El Progreso',
        },
        {
          stateName: 'QC-Quiché',
        },
        {
          stateName: 'QZ-Quetzaltenango',
        },
        {
          stateName: 'RE-Retalhuleu',
        },
        {
          stateName: 'SA-Sacatepéquez',
        },
        {
          stateName: 'SM-San Marcos',
        },
        {
          stateName: 'SO-Sololá',
        },
        {
          stateName: 'SR-Santa Rosa',
        },
        {
          stateName: 'SU-Suchitepéquez',
        },
        {
          stateName: 'TO-Totonicapán',
        },
        {
          stateName: 'ZA-Zacapa',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'HN',
      countryName: 'Honduras',
      stateList: [
        {
          stateName: 'AT-Atlántida',
        },
        {
          stateName: 'CH-Choluteca',
        },
        {
          stateName: 'CL-Colón',
        },
        {
          stateName: 'CM-Comayagua',
        },
        {
          stateName: 'CP-Copán',
        },
        {
          stateName: 'CR-Cortés',
        },
        {
          stateName: 'EP-El Paraíso',
        },
        {
          stateName: 'FM-Francisco Morazán',
        },
        {
          stateName: 'GD-Gracias a Dios',
        },
        {
          stateName: 'IB-Islas de la Bahía',
        },
        {
          stateName: 'IN-Intibucá',
        },
        {
          stateName: 'LE-Lempira',
        },
        {
          stateName: 'LP-La Paz',
        },
        {
          stateName: 'OC-Ocotepeque',
        },
        {
          stateName: 'OL-Olancho',
        },
        {
          stateName: 'SB-Santa Bárbara',
        },
        {
          stateName: 'VA-Valle',
        },
        {
          stateName: 'YO-Yoro',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'NI',
      countryName: 'Nicaragua ',
      stateList: [
        {
          stateName: 'AN-Atlántico Norte',
        },
        {
          stateName: 'AS-Atlántico Sur',
        },
        {
          stateName: 'BO-Boaco',
        },
        {
          stateName: 'CA-Carazo',
        },
        {
          stateName: 'CI-Chinandega',
        },
        {
          stateName: 'CO-Chontales',
        },
        {
          stateName: 'ES-Estelí',
        },
        {
          stateName: 'GR-Granada',
        },
        {
          stateName: 'JI-Jinotega',
        },
        {
          stateName: 'LE-León',
        },
        {
          stateName: 'MD-Madriz',
        },
        {
          stateName: 'MN-Managua',
        },
        {
          stateName: 'MS-Masaya',
        },
        {
          stateName: 'MT-Matagalpa',
        },
        {
          stateName: 'NS-Nueva Segovia',
        },
        {
          stateName: 'RI-Rivas',
        },
        {
          stateName: 'SJ-Río San Juan',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'PA',
      countryName: 'Panama',
      stateList: [
        {
          stateName: 'EM-Emberá',
        },
        {
          stateName: 'KY-Kuna Yala',
        },
        {
          stateName: 'NB-Ngöbe-Buglé',
        },
        {
          stateName: '1-Bocas del Toro',
        },
        {
          stateName: '2-Coclé',
        },
        {
          stateName: '3-Colón',
        },
        {
          stateName: '4-Chiriquí',
        },
        {
          stateName: '5-Darién',
        },
        {
          stateName: '6-Herrera',
        },
        {
          stateName: '7-Los Santos',
        },
        {
          stateName: '8-Panamá',
        },
        {
          stateName: '9-Veraguas',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'AR',
      countryName: 'Argentina',
      stateList: [
        {
          stateName: 'C-Ciudad Autónoma de Buenos Aires',
        },
        {
          stateName: 'A-Salta',
        },
        {
          stateName: 'B-Buenos Aires',
        },
        {
          stateName: 'D-San Luis',
        },
        {
          stateName: 'E-Entre Ríos',
        },
        {
          stateName: 'F-La Rioja',
        },
        {
          stateName: 'G-Santiago del Estero',
        },
        {
          stateName: 'H-Chaco',
        },
        {
          stateName: 'J-San Juan',
        },
        {
          stateName: 'K-Catamarca',
        },
        {
          stateName: 'L-La Pampa',
        },
        {
          stateName: 'M-Mendoza',
        },
        {
          stateName: 'N-Misiones',
        },
        {
          stateName: 'P-Formosa',
        },
        {
          stateName: 'Q-Neuquén',
        },
        {
          stateName: 'R-Río Negro',
        },
        {
          stateName: 'S-Santa Fe',
        },
        {
          stateName: 'T-Tucumán',
        },
        {
          stateName: 'U-Chubut',
        },
        {
          stateName: 'V-Tierra del Fuego',
        },
        {
          stateName: 'W-Corrientes',
        },
        {
          stateName: 'X-Córdoba',
        },
        {
          stateName: 'Y-Jujuy',
        },
        {
          stateName: 'Z-Santa Cruz',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'BO',
      countryName: 'Bolivia',
      stateList: [
        {
          stateName: 'B-El Beni',
        },
        {
          stateName: 'C-Cochabamba',
        },
        {
          stateName: 'H-Chuquisaca',
        },
        {
          stateName: 'L-La Paz',
        },
        {
          stateName: 'N-Pando',
        },
        {
          stateName: 'O-Oruro',
        },
        {
          stateName: 'P-Potosí',
        },
        {
          stateName: 'S-Santa Cruz',
        },
        {
          stateName: 'T-Tarija',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'BR',
      countryName: 'Brazil',
      stateList: [
        {
          stateName: 'DF-Distrito Federal',
        },
        {
          stateName: 'AC-Acre',
        },
        {
          stateName: 'AL-Alagoas',
        },
        {
          stateName: 'AM-Amazonas',
        },
        {
          stateName: 'AP-Amapá',
        },
        {
          stateName: 'BA-Bahia',
        },
        {
          stateName: 'CE-Ceará',
        },
        {
          stateName: 'ES-Espírito Santo',
        },
        {
          stateName: 'GO-Goiás',
        },
        {
          stateName: 'MA-Maranhão',
        },
        {
          stateName: 'MG-Minas Gerais',
        },
        {
          stateName: 'MS-Mato Grosso do Sul',
        },
        {
          stateName: 'MT-Mato Grosso',
        },
        {
          stateName: 'PA-Pará',
        },
        {
          stateName: 'PB-Paraíba',
        },
        {
          stateName: 'PE-Pernambuco',
        },
        {
          stateName: 'PI-Piauí',
        },
        {
          stateName: 'PR-Paraná',
        },
        {
          stateName: 'RJ-Rio de Janeiro',
        },
        {
          stateName: 'RN-Rio Grande do Norte',
        },
        {
          stateName: 'RO-Rondônia',
        },
        {
          stateName: 'RR-Roraima',
        },
        {
          stateName: 'RS-Rio Grande do Sul',
        },
        {
          stateName: 'SC-Santa Catarina',
        },
        {
          stateName: 'SE-Sergipe',
        },
        {
          stateName: 'SP-São Paulo',
        },
        {
          stateName: 'TO-Tocantins',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'CL',
      countryName: 'Chile',
      stateList: [
        {
          stateName: 'AI-Aisén del General Carlos Ibáñez del Campo',
        },
        {
          stateName: 'AN-Antofagasta',
        },
        {
          stateName: 'AP-Arica y Parinacota',
        },
        {
          stateName: 'AR-Araucanía',
        },
        {
          stateName: 'AT-Atacama',
        },
        {
          stateName: 'BI-Bío-Bío',
        },
        {
          stateName: 'CO-Coquimbo',
        },
        {
          stateName: "LI-Libertador General Bernardo O'Higgins",
        },
        {
          stateName: 'LL-Los Lagos',
        },
        {
          stateName: 'LR-Los Ríos',
        },
        {
          stateName: 'MA-Magallanes',
        },
        {
          stateName: 'ML-Maule',
        },
        {
          stateName: 'RM-Región Metropolitana de Santiago',
        },
        {
          stateName: 'TA-Tarapacá',
        },
        {
          stateName: 'VS-Valparaíso',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'CO',
      countryName: 'Colombia',
      stateList: [
        {
          stateName: 'DC-Distrito Capital de Bogotá',
        },
        {
          stateName: 'AMA-Amazonas',
        },
        {
          stateName: 'ANT-Antioquia',
        },
        {
          stateName: 'ARA-Arauca',
        },
        {
          stateName: 'ATL-Atlántico',
        },
        {
          stateName: 'BOL-Bolívar',
        },
        {
          stateName: 'BOY-Boyacá',
        },
        {
          stateName: 'CAL-Caldas',
        },
        {
          stateName: 'CAQ-Caquetá',
        },
        {
          stateName: 'CAS-Casanare',
        },
        {
          stateName: 'CAU-Cauca',
        },
        {
          stateName: 'CES-Cesar',
        },
        {
          stateName: 'CHO-Chocó',
        },
        {
          stateName: 'COR-Córdoba',
        },
        {
          stateName: 'CUN-Cundinamarca',
        },
        {
          stateName: 'GUA-Guainía',
        },
        {
          stateName: 'GUV-Guaviare',
        },
        {
          stateName: 'HUI-Huila',
        },
        {
          stateName: 'LAG-La Guajira',
        },
        {
          stateName: 'MAG-Magdalena',
        },
        {
          stateName: 'MET-Meta',
        },
        {
          stateName: 'NAR-Nariño',
        },
        {
          stateName: 'NSA-Norte de Santander',
        },
        {
          stateName: 'PUT-Putumayo',
        },
        {
          stateName: 'QUI-Quindío',
        },
        {
          stateName: 'RIS-Risaralda',
        },
        {
          stateName: 'SAN-Santander',
        },
        {
          stateName: 'SAP-San Andrés, Providencia y Santa Catalina',
        },
        {
          stateName: 'SUC-Sucre',
        },
        {
          stateName: 'TOL-Tolima',
        },
        {
          stateName: 'VAC-Valle del Cauca',
        },
        {
          stateName: 'VAU-Vaupés',
        },
        {
          stateName: 'VID-Vichada',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'EC',
      countryName: 'Ecuador',
      stateList: [
        {
          stateName: 'A-Azuay',
        },
        {
          stateName: 'B-Bolívar',
        },
        {
          stateName: 'C-Carchi',
        },
        {
          stateName: 'D-Orellana',
        },
        {
          stateName: 'E-Esmeraldas',
        },
        {
          stateName: 'F-Cañar',
        },
        {
          stateName: 'G-Guayas',
        },
        {
          stateName: 'H-Chimborazo',
        },
        {
          stateName: 'I-Imbabura',
        },
        {
          stateName: 'L-Loja',
        },
        {
          stateName: 'M-Manabí',
        },
        {
          stateName: 'N-Napo',
        },
        {
          stateName: 'O-El Oro',
        },
        {
          stateName: 'P-Pichincha',
        },
        {
          stateName: 'R-Los Ríos',
        },
        {
          stateName: 'S-Morona-Santiago',
        },
        {
          stateName: 'SD-Santo Domingo de los Tsáchilas',
        },
        {
          stateName: 'SE-Santa Elena',
        },
        {
          stateName: 'T-Tungurahua',
        },
        {
          stateName: 'U-Sucumbíos',
        },
        {
          stateName: 'W-Galápagos',
        },
        {
          stateName: 'X-Cotopaxi',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'GF',
      countryName: 'French Guiana',
      stateList: [
        {
          stateName: 'GF-French Guiana',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'GY',
      countryName: 'Guyana',
      stateList: [
        {
          stateName: 'BA-Barima-Waini',
        },
        {
          stateName: 'CU-Cuyuni-Mazaruni',
        },
        {
          stateName: 'DE-Demerara-Mahaica',
        },
        {
          stateName: 'EB-East Berbice-Corentyne',
        },
        {
          stateName: 'ES-Essequibo Islands-West Demerara',
        },
        {
          stateName: 'MA-Mahaica-Berbice',
        },
        {
          stateName: 'PM-Pomeroon-Supenaam',
        },
        {
          stateName: 'PT-Potaro-Siparuni',
        },
        {
          stateName: 'UD-Upper Demerara-Berbice',
        },
        {
          stateName: 'UT-Upper Takutu-Upper Essequibo',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'PY',
      countryName: 'Paraguay',
      stateList: [
        {
          stateName: 'ASU-Asunción',
        },
        {
          stateName: '1-Concepción',
        },
        {
          stateName: '10-Alto Paraná',
        },
        {
          stateName: '11-Central',
        },
        {
          stateName: '12-Ñeembucú',
        },
        {
          stateName: '13-Amambay\t',
        },
        {
          stateName: '14-Canindeyú',
        },
        {
          stateName: '15-Presidente Hayes',
        },
        {
          stateName: '16-Alto Paraguay',
        },
        {
          stateName: '19-Boquerón',
        },
        {
          stateName: '2-San Pedro',
        },
        {
          stateName: '3-Cordillera',
        },
        {
          stateName: '4-Guairá',
        },
        {
          stateName: '5-Caaguazú',
        },
        {
          stateName: '6-Caazapá',
        },
        {
          stateName: '7-Itapúa',
        },
        {
          stateName: '8-Misiones',
        },
        {
          stateName: '9-Paraguarí',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'PE',
      countryName: 'Peru',
      stateList: [
        {
          stateName: 'CA-Kallao',
        },
        {
          stateName: 'AMA-Amasunu',
        },
        {
          stateName: 'ANC-Ankashu',
        },
        {
          stateName: 'APU-Apurimaq',
        },
        {
          stateName: 'ARE-Arikipa',
        },
        {
          stateName: 'AYA-Ayaquchu',
        },
        {
          stateName: 'CAJ-Qajamarka',
        },
        {
          stateName: 'CUS-Kusku',
        },
        {
          stateName: 'HUC-Wanuku',
        },
        {
          stateName: 'HUV-Wankawelika',
        },
        {
          stateName: 'ICA-Ika',
        },
        {
          stateName: 'JUN-Junin',
        },
        {
          stateName: 'LAL-La Libertad',
        },
        {
          stateName: 'LAM-Lambayeque',
        },
        {
          stateName: 'LIM-Lima',
        },
        {
          stateName: 'LOR-Luritu',
        },
        {
          stateName: 'MDD-Madre de Dios',
        },
        {
          stateName: 'MOQ-Moqwegwa',
        },
        {
          stateName: 'PAS-Pasqu',
        },
        {
          stateName: 'PIU-Piura',
        },
        {
          stateName: 'PUN-Puno',
        },
        {
          stateName: 'SAM-San Martín',
        },
        {
          stateName: 'TAC-Takna',
        },
        {
          stateName: 'TUM-Tumbes',
        },
        {
          stateName: 'UCA-Ukayali',
        },
        {
          stateName: 'LMA-Lima hatun llaqta',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'SR',
      countryName: 'Suriname',
      stateList: [
        {
          stateName: 'BR-Brokopondo',
        },
        {
          stateName: 'CM-Commewijne',
        },
        {
          stateName: 'CR-Coronie',
        },
        {
          stateName: 'MA-Marowijne',
        },
        {
          stateName: 'NI-Nickerie',
        },
        {
          stateName: 'PM-Paramaribo',
        },
        {
          stateName: 'PR-Para',
        },
        {
          stateName: 'SA-Saramacca',
        },
        {
          stateName: 'SI-Sipaliwini',
        },
        {
          stateName: 'WA-Wanica',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'UY',
      countryName: 'Uruguay',
      stateList: [
        {
          stateName: 'AR-Artigas',
        },
        {
          stateName: 'CA-Canelones',
        },
        {
          stateName: 'CL-Cerro Largo',
        },
        {
          stateName: 'CO-Colonia',
        },
        {
          stateName: 'DU-Durazno',
        },
        {
          stateName: 'FD-Florida\t',
        },
        {
          stateName: 'FS-Flores',
        },
        {
          stateName: 'LA-Lavalleja',
        },
        {
          stateName: 'MA-Maldonado',
        },
        {
          stateName: 'MO-Montevideo',
        },
        {
          stateName: 'PA-Paysandú',
        },
        {
          stateName: 'RN-Río Negro',
        },
        {
          stateName: 'RO-Rocha',
        },
        {
          stateName: 'RV-Rivera',
        },
        {
          stateName: 'SA-Salto',
        },
        {
          stateName: 'SJ-San José',
        },
        {
          stateName: 'SO-Soriano',
        },
        {
          stateName: 'TA-Tacuarembó',
        },
        {
          stateName: 'TT-Treinta y Tres',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'VE',
      countryName: 'Venezuela',
      stateList: [
        {
          stateName: 'A-Distrito Capital',
        },
        {
          stateName: 'W-Dependencias Federales',
        },
        {
          stateName: 'B-Anzoátegui',
        },
        {
          stateName: 'C-Apure',
        },
        {
          stateName: 'D-Aragua',
        },
        {
          stateName: 'E-Barinas',
        },
        {
          stateName: 'F-Bolívar',
        },
        {
          stateName: 'G-Carabobo',
        },
        {
          stateName: 'H-Cojedes',
        },
        {
          stateName: 'I-Falcón',
        },
        {
          stateName: 'J-Guárico',
        },
        {
          stateName: 'K-Lara',
        },
        {
          stateName: 'L-Mérida',
        },
        {
          stateName: 'M-Miranda',
        },
        {
          stateName: 'N-Monagas',
        },
        {
          stateName: 'O-Nueva Esparta',
        },
        {
          stateName: 'P-Portuguesa',
        },
        {
          stateName: 'R-Sucre',
        },
        {
          stateName: 'S-Táchira',
        },
        {
          stateName: 'T-Trujillo',
        },
        {
          stateName: 'U-Yaracuy',
        },
        {
          stateName: 'V-Zulia',
        },
        {
          stateName: 'X-Vargas',
        },
        {
          stateName: 'Y-Delta Amacuro',
        },
        {
          stateName: 'Z-Amazonas',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'AI',
      countryName: 'Anguilla',
      stateList: [
        {
          stateName: 'AI-Anguilla',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'AG',
      countryName: 'Antigua and Barbuda',
      stateList: [
        {
          stateName: '10-Barbuda',
        },
        {
          stateName: '11-Redonda',
        },
        {
          stateName: '03-Saint George',
        },
        {
          stateName: "04-Saint John's",
        },
        {
          stateName: '05-Saint Mary',
        },
        {
          stateName: '06-Saint Paul',
        },
        {
          stateName: '07-Saint Peter',
        },
        {
          stateName: '08-Saint Philip',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'AW',
      countryName: 'Aruba',
      stateList: [
        {
          stateName: 'AW-Aruba',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'BS',
      countryName: 'Bahamas',
      stateList: [
        {
          stateName: 'AK-Acklins',
        },
        {
          stateName: 'BI-Bimini and Cat Cay',
        },
        {
          stateName: 'BP-Black Point',
        },
        {
          stateName: 'BY-Berry Islands',
        },
        {
          stateName: 'CE-Central Eleuthera',
        },
        {
          stateName: 'CI-Cat Island',
        },
        {
          stateName: 'CK-Crooked Island and Long Cay',
        },
        {
          stateName: 'CO-Central Abaco',
        },
        {
          stateName: 'CS-Central Andros',
        },
        {
          stateName: 'EG-East Grand Bahama',
        },
        {
          stateName: 'EX-Exuma',
        },
        {
          stateName: 'FP-City of Freeport',
        },
        {
          stateName: 'GC-Grand Cay',
        },
        {
          stateName: 'HI-Harbour Island',
        },
        {
          stateName: 'HT-Hope Town',
        },
        {
          stateName: 'IN-Inagua',
        },
        {
          stateName: 'LI-Long Island',
        },
        {
          stateName: 'MC-Mangrove Cay',
        },
        {
          stateName: 'MG-Mayaguana',
        },
        {
          stateName: 'MI-Moores Island',
        },
        {
          stateName: 'NE-North Eleuthera',
        },
        {
          stateName: 'NO-North Abaco',
        },
        {
          stateName: 'NS-North Andros',
        },
        {
          stateName: 'RC-Rum Cay',
        },
        {
          stateName: 'RI-Ragged Island',
        },
        {
          stateName: 'SA-South Andros',
        },
        {
          stateName: 'SE-South Eleuthera',
        },
        {
          stateName: 'SO-South Abaco',
        },
        {
          stateName: 'SS-San Salvador',
        },
        {
          stateName: 'SW-Spanish Wells',
        },
        {
          stateName: 'WG-West Grand Bahama',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'BB',
      countryName: 'Barbados',
      stateList: [
        {
          stateName: '01-Christ Church',
        },
        {
          stateName: '02-Saint Andrew',
        },
        {
          stateName: '03-Saint George',
        },
        {
          stateName: '04-Saint James',
        },
        {
          stateName: '05-Saint John',
        },
        {
          stateName: '06-Saint Joseph',
        },
        {
          stateName: '07-Saint Lucy',
        },
        {
          stateName: '08-Saint Michael',
        },
        {
          stateName: '09-Saint Peter',
        },
        {
          stateName: '10-Saint Philip',
        },
        {
          stateName: '11-Saint Thomas',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'VG',
      countryName: 'British Virgin Islands',
      stateList: [
        {
          stateName: 'VG-British Virgin Islands',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'KY',
      countryName: 'Cayman Islands',
      stateList: [
        {
          stateName: 'KY-Cayman Islands',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'DM',
      countryName: 'Dominica',
      stateList: [
        {
          stateName: '02-Saint Andrew',
        },
        {
          stateName: '03-Saint David',
        },
        {
          stateName: '04-Saint George',
        },
        {
          stateName: '05-Saint John',
        },
        {
          stateName: '06-Saint Joseph',
        },
        {
          stateName: '07-Saint Luke',
        },
        {
          stateName: '08-Saint Mark',
        },
        {
          stateName: '09-Saint Patrick',
        },
        {
          stateName: '10-Saint Paul',
        },
        {
          stateName: '11-Saint Peter',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'DO',
      countryName: 'Dominican Republic',
      stateList: [
        {
          stateName: '1-Distrito Nacional (Santo Domingo)',
        },
        {
          stateName: '2-Azua',
        },
        {
          stateName: '3-Bahoruco',
        },
        {
          stateName: '4-Barahona',
        },
        {
          stateName: '5-Dajabón',
        },
        {
          stateName: '6-Duarte',
        },
        {
          stateName: '7-Elías Piña',
        },
        {
          stateName: '8-El Seybo',
        },
        {
          stateName: '9-Espaillat',
        },
        {
          stateName: '10-Independencia',
        },
        {
          stateName: '11-La Altagracia',
        },
        {
          stateName: '12-La Romana',
        },
        {
          stateName: '13-La Vega',
        },
        {
          stateName: '14-María Trinidad Sánchez',
        },
        {
          stateName: '15-Monte Cristi',
        },
        {
          stateName: '16-Pedernales',
        },
        {
          stateName: '17-Peravia',
        },
        {
          stateName: '18-Puerto Plata',
        },
        {
          stateName: '19-Salcedo',
        },
        {
          stateName: '20-Samaná',
        },
        {
          stateName: '21-San Cristóbal',
        },
        {
          stateName: '22-San Juan',
        },
        {
          stateName: '23-San Pedro de Macorís',
        },
        {
          stateName: '24-Sánchez Ramírez',
        },
        {
          stateName: '25-Santiago',
        },
        {
          stateName: '26-Santiago Rodríguez',
        },
        {
          stateName: '27-Valverde',
        },
        {
          stateName: '28-Monseñor Nouel',
        },
        {
          stateName: '29-Monte Plata',
        },
        {
          stateName: '30-Hato Mayor',
        },
        {
          stateName: '31-San José de Ocoa',
        },
        {
          stateName: '32-Santo Domingo',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'GD',
      countryName: 'Grenada',
      stateList: [
        {
          stateName: '01-Saint Andrew',
        },
        {
          stateName: '02-Saint David',
        },
        {
          stateName: '03-Saint George',
        },
        {
          stateName: '04-Saint John',
        },
        {
          stateName: '05-Saint Mark',
        },
        {
          stateName: '06-Saint Patrick',
        },
        {
          stateName: '10-Southern Grenadine Islands',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'GP',
      countryName: 'Guadeloupe',
      stateList: [
        {
          stateName: 'GP-Guadeloupe',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'HT',
      countryName: 'Haiti',
      stateList: [
        {
          stateName: 'AR-Artibonite',
        },
        {
          stateName: 'CE-Centre',
        },
        {
          stateName: 'GA-Grande-Anse',
        },
        {
          stateName: 'ND-Nord',
        },
        {
          stateName: 'NE-Nord-Est',
        },
        {
          stateName: 'NI-Nippes',
        },
        {
          stateName: 'NO-Nord-Ouest',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'JM',
      countryName: 'Jamaica',
      stateList: [
        {
          stateName: '1-Kingston',
        },
        {
          stateName: '2-Saint Andrew',
        },
        {
          stateName: '3-Saint Thomas',
        },
        {
          stateName: '4-Portland',
        },
        {
          stateName: '5-Saint Mary',
        },
        {
          stateName: '6-Saint Ann',
        },
        {
          stateName: '7-Trelawny',
        },
        {
          stateName: '8-Saint James',
        },
        {
          stateName: '9-Hanover',
        },
        {
          stateName: '10-Westmoreland',
        },
        {
          stateName: '11-Saint Elizabeth',
        },
        {
          stateName: '12-Manchester',
        },
        {
          stateName: '13-Clarendon',
        },
        {
          stateName: '14-Saint Catherine',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'MQ',
      countryName: 'Martinique',
      stateList: [
        {
          stateName: 'MQ-Martinique',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'MS',
      countryName: 'Montserrat',
      stateList: [
        {
          stateName: '14-MS',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'KN',
      countryName: 'Saint Kitts And Nevis',
      stateList: [
        {
          stateName: '01-Christ Church Nichola Town',
        },
        {
          stateName: '02-Saint Anne Sandy Point',
        },
        {
          stateName: '03-Saint George Basseterre',
        },
        {
          stateName: '04-Saint George Gingerland',
        },
        {
          stateName: '05-Saint James Windward',
        },
        {
          stateName: '06-Saint John Capisterre',
        },
        {
          stateName: '07-Saint John Figtree',
        },
        {
          stateName: '08-Saint Mary Cayon',
        },
        {
          stateName: '09-Saint Paul Capisterre',
        },
        {
          stateName: '10-Saint Paul Charlestown',
        },
        {
          stateName: '11-Saint Peter Basseterre',
        },
        {
          stateName: '12-Saint Thomas Lowland',
        },
        {
          stateName: '13-Saint Thomas Middle Island',
        },
        {
          stateName: '15-Trinity Palmetto Point',
        },
        {
          stateName: 'K-Saint Kitts',
        },
        {
          stateName: 'N-Nevis',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'LC',
      countryName: 'Saint Lucia',
      stateList: [
        {
          stateName: '01-Anse la Raye',
        },
        {
          stateName: '02-Castries',
        },
        {
          stateName: '03-Choiseul',
        },
        {
          stateName: '04-Dauphin',
        },
        {
          stateName: '05-Dennery',
        },
        {
          stateName: '06-Gros Islet',
        },
        {
          stateName: '07-Laborie',
        },
        {
          stateName: '08-Micoud',
        },
        {
          stateName: '09-Praslin',
        },
        {
          stateName: '10-Soufrière',
        },
        {
          stateName: '11-Vieux Fort',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'MF',
      countryName: 'Saint Martin',
      stateList: [
        {
          stateName: 'MF-Saint Martin',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'VC',
      countryName: 'Saint Vincent And The Grenadines',
      stateList: [
        {
          stateName: '01-Charlotte',
        },
        {
          stateName: '02-Saint Andrew',
        },
        {
          stateName: '03-Saint David',
        },
        {
          stateName: '04-Saint George',
        },
        {
          stateName: '05-Saint Patrick',
        },
        {
          stateName: '06-Grenadines',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'TT',
      countryName: 'Trinidad And Tobago',
      stateList: [
        {
          stateName: 'AR-Arima',
        },
        {
          stateName: 'CHA-Chaguanas',
        },
        {
          stateName: 'POS-Port of Spain',
        },
        {
          stateName: 'PTF-Point Fortin',
        },
        {
          stateName: 'SFO-San Fernando',
        },
        {
          stateName: 'CTT-Couva-Tabaquite-Talparo',
        },
        {
          stateName: 'DMN-Diego Martin',
        },
        {
          stateName: 'ETO-Eastern Tobago',
        },
        {
          stateName: 'PED-Penal-Debe',
        },
        {
          stateName: 'PRT-Princes Town',
        },
        {
          stateName: 'RCM-Rio Claro-Mayaro',
        },
        {
          stateName: 'SGE-Sangre Grande',
        },
        {
          stateName: 'SIP-Siparia',
        },
        {
          stateName: 'SJL-San Juan-Laventille',
        },
        {
          stateName: 'TUP-Tunapuna-Piarco',
        },
        {
          stateName: 'WTO-Western Tobago',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'TC',
      countryName: 'Turks And Caicos Islands',
      stateList: [
        {
          stateName: 'TC-Turks and Caicos Islands',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'AN',
      countryName: 'Netherlands Antilles',
      stateList: [
        {
          stateName: 'AN-Netherlands Antilles',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'CA',
      countryName: 'Canada',
      stateList: [
        {
          stateName: 'TC-Turks and Caicos Islands',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      regions: ['South', 'North'],
      countryCode: 'IN',
      countryName: 'India',
      stateList: [
        {
          stateName: 'AP-Andhra Pradesh',
          districtList: [
            {
              districtName: 'Guntur',
              cityList: [
                {
                  cityName: 'Tenali',
                },
                {
                  cityName: 'Chilakaluripet',
                },
              ],
            },
            {
              districtName: 'Anantapur',
              cityList: [
                {
                  cityName: 'Dharmavaram',
                },
                {
                  cityName: 'Guntakal',
                },
              ],
            },
            {
              districtName: 'Chittoor',
              cityList: [
                {
                  cityName: 'Tirupati',
                },
                {
                  cityName: 'Puttur',
                },
              ],
            },
            {
              districtName: 'Kadapa',
              cityList: [
                {
                  cityName: 'Gopavaram',
                },
                {
                  cityName: 'Jammalamadugu',
                },
              ],
            },
            {
              districtName: 'Krishna',
              cityList: [
                {
                  cityName: 'Ibrahimpatnam',
                },
                {
                  cityName: 'Vijayawada',
                },
              ],
            },
            {
              districtName: 'Vizag',
              cityList: [
                {
                  cityName: 'Anakapalle',
                },
                {
                  cityName: 'Deverapalle',
                },
              ],
            },
            {
              districtName: 'Kurnool',
              cityList: [
                {
                  cityName: 'Srisailam',
                },
                {
                  cityName: 'Allagadda',
                },
              ],
            },
            {
              districtName: 'East Godavari',
              cityList: [
                {
                  cityName: 'Rajahmundry',
                },
                {
                  cityName: 'Kakinada',
                },
              ],
            },
            {
              districtName: 'West Godavari',
              cityList: [
                {
                  cityName: 'Eluru',
                },
                {
                  cityName: 'Bhimavaram',
                },
              ],
            },
            {
              districtName: 'Srikakulam',
              cityList: [
                {
                  cityName: 'Palakonda',
                },
                {
                  cityName: 'Ichchapuram',
                },
              ],
            },
            {
              districtName: 'Nellore',
              cityList: [
                {
                  cityName: 'Gudur',
                },
                {
                  cityName: 'Kavali',
                },
              ],
            },
            {
              districtName: 'Prakasam',
              cityList: [
                {
                  cityName: 'Ongole',
                },
                {
                  cityName: 'Chirala',
                },
              ],
            },
            {
              districtName: 'Vizianagaram',
              cityList: [
                {
                  cityName: 'Bobbili',
                },
                {
                  cityName: 'Chintalavalasa',
                },
              ],
            },
          ],
        },
        {
          stateName: 'AN-Andaman and Nicobar Islands',
        },
        {
          stateName: 'AR-Arunachal Pradesh',
        },
        {
          stateName: 'AS-Assam',
        },
        {
          stateName: 'BR-Bihar',
        },
        {
          stateName: 'CH-Chandigarh',
        },
        {
          stateName: 'CT-Chhattisgarh',
        },
        {
          stateName: 'DN-Dadra and Nagar Haveli',
        },
        {
          stateName: 'DD-Daman and Diu',
        },
        {
          stateName: 'DL-Delhi',
        },
        {
          stateName: 'GA-Goa',
        },
        {
          stateName: 'GJ-Gujarat',
        },
        {
          stateName: 'HR-Haryana',
        },
        {
          stateName: 'HP-Himachal Pradesh',
        },
        {
          stateName: 'JK-Jammu and Kashmir',
        },
        {
          stateName: 'JH-Jharkhand',
        },
        {
          stateName: 'KA-Karnataka',
        },
        {
          stateName: 'KL-Kerala',
        },
        {
          stateName: 'LD-Lakshadweep',
        },
        {
          stateName: 'MP-Madhya Pradesh',
        },
        {
          stateName: 'MH-Maharashtra',
        },
        {
          stateName: 'MN-Manipur',
        },
        {
          stateName: 'ML-Meghalaya',
        },
        {
          stateName: 'MZ-Mizoram',
        },
        {
          stateName: 'NL-Nagaland',
        },
        {
          stateName: 'OR-Odisha',
        },
        {
          stateName: 'PY-Puducherry',
        },
        {
          stateName: 'PB-Punjab',
        },
        {
          stateName: 'RJ-Rajasthan',
        },
        {
          stateName: 'SK-Sikkim',
        },
        {
          stateName: 'TN-Tamil Nadu',
        },
        {
          stateName: 'TG-Telangana',
        },
        {
          stateName: 'TR-Tripura',
        },
        {
          stateName: 'UP-Uttar Pradesh',
        },
        {
          stateName: 'UT-Uttarakhand',
        },
        {
          stateName: 'WB-West Bengal',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'CW',
      countryName: 'Curacao',
      stateList: [
        {
          stateName: 'CW-Curacao State',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'WF',
      countryName: 'Wallis and Futuna',
      stateList: [
        {
          stateName: 'WF-Wallis and Futuna',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'YE',
      countryName: 'Yemen',
      stateList: [
        {
          stateName: 'YE-Yemen',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'ZM',
      countryName: 'Zambia',
      stateList: [
        {
          stateName: 'ZM-Zambia',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'ZW',
      countryName: 'Zimbabwe',
      stateList: [
        {
          stateName: 'ZW-Zimbabwe',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Oceania',
      countryCode: 'AF',
      countryName: 'Afghanistan',
      stateList: [
        {
          stateName: 'AF-Afghanistan',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'AX',
      countryName: 'Åland Islands',
      stateList: [
        {
          stateName: 'AX-Åland Islands',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'AL',
      countryName: 'Albania',
      stateList: [
        {
          stateName: 'AL-Albania',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'DZ',
      countryName: 'Algeria',
      stateList: [
        {
          stateName: 'DZ-Algeria',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'AS',
      countryName: 'AmericanSamoa',
      stateList: [
        {
          stateName: 'AS-AmericanSamoa',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'AD',
      countryName: 'Andorra',
      stateList: [
        {
          stateName: 'AD-Andorra',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'AO',
      countryName: 'Angola',
      stateList: [
        {
          stateName: 'AO-Angola',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'AQ',
      countryName: 'Antarctica',
      stateList: [
        {
          stateName: 'AQ-Antarctica',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'AM',
      countryName: 'Armenia',
      stateList: [
        {
          stateName: 'AM-Armenia',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'SH',
      countryName: 'Ascension and Tristan Da Cunha Saint Hel',
      stateList: [
        {
          stateName: 'SH-Ascension and Tristan Da Cunha Saint Hel',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'AU',
      countryName: 'Australia',
      stateList: [
        {
          stateName: 'AU-Australia',
        },
        {
          stateName: 'BA-Barima-Waini',
        },
        {
          stateName: 'CU-Cuyuni-Mazaruni',
        },
        {
          stateName: 'DE-Demerara-Mahaica',
        },
        {
          stateName: 'EB-East Berbice-Corentyne',
        },
        {
          stateName: 'ES-Essequibo Islands-West Demerara',
        },
        {
          stateName: 'MA-Mahaica-Berbice',
        },
        {
          stateName: 'PT-Potaro-Siparuni',
        },
        {
          stateName: 'UD-Upper Demerara-Berbice',
        },
        {
          stateName: 'UT-Upper Takutu-Upper Essequibo',
        },
        {
          stateName: 'PM-Pomeroon-Supenaam',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'AT',
      countryName: 'Austria',
      stateList: [
        {
          stateName: 'AT-Austria',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'AZ',
      countryName: 'Azerbaijan',
      stateList: [
        {
          stateName: 'AZ-Azerbaijan',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'BH',
      countryName: 'Bahrain',
      stateList: [
        {
          stateName: 'BH-Bahrain',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'BD',
      countryName: 'Bangladesh',
      stateList: [
        {
          stateName: 'BD-Bangladesh',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'BY',
      countryName: 'Belarus',
      stateList: [
        {
          stateName: 'BY-Belarus',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'BE',
      countryName: 'Belgium',
      stateList: [
        {
          stateName: 'BE-Belgium',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central and Eastern Europe',
      countryCode: 'BJ',
      countryName: 'Benin',
      stateList: [
        {
          stateName: 'BJ-Benin',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Europe',
      countryCode: 'BM',
      countryName: 'Bermuda',
      stateList: [
        {
          stateName: 'BM-Bermuda',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'BT',
      countryName: 'Bhutan',
      stateList: [
        {
          stateName: 'BT-Bhutan',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'BA',
      countryName: 'Bosnia and Herzegovina',
      stateList: [
        {
          stateName: 'BA-Bosnia and Herzegovina',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'BW',
      countryName: 'Botswana',
      stateList: [
        {
          stateName: 'BW-Botswana',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'IO',
      countryName: 'British Indian Ocean Territory',
      stateList: [
        {
          stateName: 'IO-British Indian Ocean Territory',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'BN',
      countryName: 'Brunei Darussalam',
      stateList: [
        {
          stateName: 'BN-Brunei Darussalam',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'BG',
      countryName: 'Bulgaria',
      stateList: [
        {
          stateName: 'BG-Bulgaria',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'BF',
      countryName: 'Burkina Faso',
      stateList: [
        {
          stateName: 'BF-Burkina Faso',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'BI',
      countryName: 'Burundi',
      stateList: [
        {
          stateName: 'BI-Burundi',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'KH',
      countryName: 'Cambodia',
      stateList: [
        {
          stateName: 'KH-Cambodia',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'CM',
      countryName: 'Cameroon',
      stateList: [
        {
          stateName: 'CM-Cameroon',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'CV',
      countryName: 'Cape Verde',
      stateList: [
        {
          stateName: 'CV-Cape Verde',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'CF',
      countryName: 'Central African Republic',
      stateList: [
        {
          stateName: 'CF-Central African Republic',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'TD',
      countryName: 'Chad',
      stateList: [
        {
          stateName: 'TD-Chad',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'CN',
      countryName: 'China',
      stateList: [
        {
          stateName: 'CN-China',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Africa',
      countryCode: 'CX',
      countryName: 'Christmas Island',
      stateList: [
        {
          stateName: 'CX-Christmas Island',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Europe',
      countryCode: 'CC',
      countryName: 'Cocos (Keeling) Islands',
      stateList: [
        {
          stateName: 'CC-Cocos (Keeling) Islands',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Africa',
      countryCode: 'KM',
      countryName: 'Comoros',
      stateList: [
        {
          stateName: 'KM-Comoros',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'CG',
      countryName: 'Congo',
      stateList: [
        {
          stateName: 'CG-Congo',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'CK',
      countryName: 'Cook Islands',
      stateList: [
        {
          stateName: 'CK-Cook Islands',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'CI',
      countryName: 'Cote d Ivoire',
      stateList: [
        {
          stateName: 'CI-Cote d Ivoire',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'HR',
      countryName: 'Croatia',
      stateList: [
        {
          stateName: 'HR-Croatia',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'CU',
      countryName: 'Cuba',
      stateList: [
        {
          stateName: 'CU-Cuba',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'CY',
      countryName: 'Cyprus',
      stateList: [
        {
          stateName: 'CY-Cyprus',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'CZ',
      countryName: 'Czech Republic',
      stateList: [
        {
          stateName: 'CZ-Czech Republic',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'KP',
      countryName: 'Democratic Peoples Republic of Korea',
      stateList: [
        {
          stateName: 'KP-Democratic Peoples Republic of Korea',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'DK',
      countryName: 'Denmark',
      stateList: [
        {
          stateName: 'DK-Denmark',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'DJ',
      countryName: 'Djibouti',
      stateList: [
        {
          stateName: 'DJ-Djibouti',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'EG',
      countryName: 'Egypt',
      stateList: [
        {
          stateName: 'EG-Egypt',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'GQ',
      countryName: 'Equatorial Guinea',
      stateList: [
        {
          stateName: 'GQ-Equatorial Guinea',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'ER',
      countryName: 'Eritrea',
      stateList: [
        {
          stateName: 'ER-Eritrea',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'EE',
      countryName: 'Estonia',
      stateList: [
        {
          stateName: 'EE-Estonia',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'ET',
      countryName: 'Ethiopia',
      stateList: [
        {
          stateName: 'ET-Ethiopia',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'FK',
      countryName: 'Falkland Islands (Malvinas)',
      stateList: [
        {
          stateName: 'FK-Falkland Islands (Malvinas)',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'FO',
      countryName: 'Faroe Islands',
      stateList: [
        {
          stateName: 'FO-Faroe Islands',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'FM',
      countryName: 'Federated States of Micronesia',
      stateList: [
        {
          stateName: 'FM-Federated States of Micronesia',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'FJ',
      countryName: 'Fiji',
      stateList: [
        {
          stateName: 'FJ-Fiji',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'FI',
      countryName: 'Finland',
      stateList: [
        {
          stateName: 'FI-Finland',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'FR',
      countryName: 'France',
      stateList: [
        {
          stateName: 'FR-France',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'PF',
      countryName: 'French Polynesia',
      stateList: [
        {
          stateName: 'PF-French Polynesia',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'GA',
      countryName: 'Gabon',
      stateList: [
        {
          stateName: 'GA-Gabon',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'GM',
      countryName: 'Gambia',
      stateList: [
        {
          stateName: 'GM-Gambia',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'GE',
      countryName: 'Georgia',
      stateList: [
        {
          stateName: 'GE-Georgia',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'GH',
      countryName: 'Ghana',
      stateList: [
        {
          stateName: 'GH-Ghana',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'GI',
      countryName: 'Gibraltar',
      stateList: [
        {
          stateName: 'GI-Gibraltar',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'GR',
      countryName: 'Greece',
      stateList: [
        {
          stateName: 'GR-Greece',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'GL',
      countryName: 'Greenland',
      stateList: [
        {
          stateName: 'GL-Greenland',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'GU',
      countryName: 'Guam',
      stateList: [
        {
          stateName: 'GU-Guam',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'GG',
      countryName: 'Guernsey',
      stateList: [
        {
          stateName: 'GG-Guernsey',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'GN',
      countryName: 'Guinea',
      stateList: [
        {
          stateName: 'GN-Guinea',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'GW',
      countryName: 'Guinea-Bissau',
      stateList: [
        {
          stateName: 'GW-Guinea-Bissau',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'VA',
      countryName: 'Holy See (Vatican City State)',
      stateList: [
        {
          stateName: 'VA-Holy See (Vatican City State)',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'HK',
      countryName: 'Hong Kong',
      stateList: [
        {
          stateName: 'HK-Hong Kong',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'HU',
      countryName: 'Hungary',
      stateList: [
        {
          stateName: 'HU-Hungary',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'IS',
      countryName: 'Iceland',
      stateList: [
        {
          stateName: 'IS-Iceland',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'ID',
      countryName: 'Indonesia',
      stateList: [
        {
          stateName: 'ID-Indonesia',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'IQ',
      countryName: 'Iraq',
      stateList: [
        {
          stateName: 'IQ-Iraq',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'IE',
      countryName: 'Ireland',
      stateList: [
        {
          stateName: 'IE-Ireland',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'IR',
      countryName: 'Islamic Republic of Iran',
      stateList: [
        {
          stateName: 'IR-Islamic Republic of Iran',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'IM',
      countryName: 'Isle of Man',
      stateList: [
        {
          stateName: 'IM-Isle of Man',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'IL',
      countryName: 'Israel',
      stateList: [
        {
          stateName: 'IL-Israel',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'IT',
      countryName: 'Italy',
      stateList: [
        {
          stateName: 'IT-Italy',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'JP',
      countryName: '日本',
      stateList: [
        {
          stateName: 'JP-日本',
        },
        {
          stateName: 'DF-Default',
        },
        {
          stateName: '100-北海道',
        },
        {
          stateName: '210-青森県',
        },
        {
          stateName: '220-秋田県',
        },
        {
          stateName: '230-山形県',
        },
        {
          stateName: '240-新潟県',
        },
        {
          stateName: '310-岩手県',
        },
        {
          stateName: '320-宮城県',
        },
        {
          stateName: '330-福島県',
        },
        {
          stateName: '410-群馬県',
        },
        {
          stateName: '420-栃木県',
        },
        {
          stateName: '430-埼玉県',
        },
        {
          stateName: '440-茨城県',
        },
        {
          stateName: '510-千葉県',
        },
        {
          stateName: '520-東京都',
        },
        {
          stateName: '530-神奈川県',
        },
        {
          stateName: '610-岐阜県',
        },
        {
          stateName: '620-長野県',
        },
        {
          stateName: '630-山梨県',
        },
        {
          stateName: '640-静岡県',
        },
        {
          stateName: '650-愛知県',
        },
        {
          stateName: '660-三重県',
        },
        {
          stateName: '710-富山県',
        },
        {
          stateName: '720-石川県',
        },
        {
          stateName: '730-福井県',
        },
        {
          stateName: '810-兵庫県',
        },
        {
          stateName: '820-京都府',
        },
        {
          stateName: '830-滋賀県',
        },
        {
          stateName: '840-大阪府',
        },
        {
          stateName: '850-奈良県',
        },
        {
          stateName: '860-和歌山県',
        },
        {
          stateName: '910-鳥取県',
        },
        {
          stateName: '920-岡山県',
        },
        {
          stateName: '930-広島県',
        },
        {
          stateName: '940-島根県',
        },
        {
          stateName: '950-山口県',
        },
        {
          stateName: '1010-香川県',
        },
        {
          stateName: '1020-徳島県',
        },
        {
          stateName: '1030-愛媛県',
        },
        {
          stateName: '1040-高知県',
        },
        {
          stateName: '1110-福岡県',
        },
        {
          stateName: '1120-佐賀県',
        },
        {
          stateName: '1130-長崎県',
        },
        {
          stateName: '1140-熊本県',
        },
        {
          stateName: '1150-大分県',
        },
        {
          stateName: '1160-宮崎県',
        },
        {
          stateName: '1170-鹿児島県',
        },
        {
          stateName: '1200-沖縄県',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'JE',
      countryName: 'Jersey',
      stateList: [
        {
          stateName: 'JE-Jersey',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'JO',
      countryName: 'Jordan',
      stateList: [
        {
          stateName: 'JO-Jordan',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'KZ',
      countryName: 'Kazakhstan',
      stateList: [
        {
          stateName: 'KZ-Kazakhstan',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'KE',
      countryName: 'Kenya',
      stateList: [
        {
          stateName: 'KE-Kenya',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'KI',
      countryName: 'Kiribati',
      stateList: [
        {
          stateName: 'KI-Kiribati',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'KW',
      countryName: 'Kuwait',
      stateList: [
        {
          stateName: 'KW-Kuwait',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'KG',
      countryName: 'Kyrgyzstan',
      stateList: [
        {
          stateName: 'KG-Kyrgyzstan',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'LA',
      countryName: 'Lao Peoples Democratic Republic',
      stateList: [
        {
          stateName: 'LA-Lao Peoples Democratic Republic',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'LV',
      countryName: 'Latvia',
      stateList: [
        {
          stateName: 'LV-Latvia',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'LB',
      countryName: 'Lebanon',
      stateList: [
        {
          stateName: 'LB-Lebanon',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'LS',
      countryName: 'Lesotho',
      stateList: [
        {
          stateName: 'LS-Lesotho',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'LR',
      countryName: 'Liberia',
      stateList: [
        {
          stateName: 'LR-Liberia',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'LY',
      countryName: 'Libyan Arab Jamahiriya',
      stateList: [
        {
          stateName: 'LY-Libyan Arab Jamahiriya',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'LI',
      countryName: 'Liechtenstein',
      stateList: [
        {
          stateName: 'LI-Liechtenstein',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'LT',
      countryName: 'Lithuania',
      stateList: [
        {
          stateName: 'LT-Lithuania',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'LU',
      countryName: 'Luxembourg',
      stateList: [
        {
          stateName: 'LU-Luxembourg',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'MO',
      countryName: 'Macao',
      stateList: [
        {
          stateName: 'MO-Macao',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'MG',
      countryName: 'Madagascar',
      stateList: [
        {
          stateName: 'MG-Madagascar',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'MW',
      countryName: 'Malawi',
      stateList: [
        {
          stateName: 'MW-Malawi',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'MV',
      countryName: 'Maldives',
      stateList: [
        {
          stateName: 'MV-Maldives',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'ML',
      countryName: 'Mali',
      stateList: [
        {
          stateName: 'ML-Mali',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'MT',
      countryName: 'Malta',
      stateList: [
        {
          stateName: 'MT-Malta',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'MH',
      countryName: 'Marshall Islands',
      stateList: [
        {
          stateName: 'MH-Marshall Islands',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'MR',
      countryName: 'Mauritania',
      stateList: [
        {
          stateName: 'MR-Mauritania',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'MU',
      countryName: 'Mauritius',
      stateList: [
        {
          stateName: 'MU-Mauritius',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'YT',
      countryName: 'Mayotte',
      stateList: [
        {
          stateName: 'YT-Mayotte',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'MC',
      countryName: 'Monaco',
      stateList: [
        {
          stateName: 'MC-Monaco',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'MN',
      countryName: 'Mongolia',
      stateList: [
        {
          stateName: 'MN-Mongolia',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'ME',
      countryName: 'Montenegro',
      stateList: [
        {
          stateName: 'ME-Montenegro',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'MA',
      countryName: 'Morocco',
      stateList: [
        {
          stateName: 'MA-Morocco',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'MZ',
      countryName: 'Mozambique',
      stateList: [
        {
          stateName: 'MZ-Mozambique',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'MM',
      countryName: 'Myanmar',
      stateList: [
        {
          stateName: 'MM-Myanmar',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'NA',
      countryName: 'Namibia',
      stateList: [
        {
          stateName: 'NA-Namibia',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Africa',
      countryCode: 'NR',
      countryName: 'Nauru',
      stateList: [
        {
          stateName: 'NR-Nauru',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Africa',
      countryCode: 'NP',
      countryName: 'Nepal',
      stateList: [
        {
          stateName: 'NP-Nepal',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Africa',
      countryCode: 'NL',
      countryName: 'Netherlands',
      stateList: [
        {
          stateName: 'NL-Netherlands',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'NC',
      countryName: 'New Caledonia',
      stateList: [
        {
          stateName: 'NC-New Caledonia',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'NZ',
      countryName: 'New Zealand',
      stateList: [
        {
          stateName: 'NZ-New Zealand',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'NE',
      countryName: 'Niger',
      stateList: [
        {
          stateName: 'NE-Niger',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'NG',
      countryName: 'Nigeria',
      stateList: [
        {
          stateName: 'NG-Nigeria',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'NU',
      countryName: 'Niue',
      stateList: [
        {
          stateName: 'NU-Niue',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'NF',
      countryName: 'Norfolk Island',
      stateList: [
        {
          stateName: 'NF-Norfolk Island',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'MP',
      countryName: 'Northern Mariana Islands',
      stateList: [
        {
          stateName: 'MP-Northern Mariana Islands',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'NO',
      countryName: 'Norway',
      stateList: [
        {
          stateName: 'NO-Norway',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'PS',
      countryName: 'Occupied Palestinian Territory',
      stateList: [
        {
          stateName: 'PS-Occupied Palestinian Territory',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'OM',
      countryName: 'Oman',
      stateList: [
        {
          stateName: 'OM-Oman',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'PK',
      countryName: 'Pakistan',
      stateList: [
        {
          stateName: 'PK-Pakistan',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'PW',
      countryName: 'Palau',
      stateList: [
        {
          stateName: 'PW-Palau',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'PG',
      countryName: 'Papua New Guinea',
      stateList: [
        {
          stateName: 'PG-Papua New Guinea',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'PH',
      countryName: 'Philippines',
      stateList: [
        {
          stateName: 'AB-Abra',
        },
        {
          stateName: 'AG-Agusan',
        },
        {
          stateName: 'DN-del Norte',
        },
        {
          stateName: 'DS-del Sur',
        },
        {
          stateName: 'AK-Aklan',
        },
        {
          stateName: 'AL-Albay',
        },
        {
          stateName: 'AN-Antique',
        },
        {
          stateName: 'AP-Apayao',
        },
        {
          stateName: 'AU-Aurora',
        },
        {
          stateName: 'BA-Basilan',
        },
        {
          stateName: 'BT-Bataan',
        },
        {
          stateName: 'BN-Batanes',
        },
        {
          stateName: 'BE-Batangas',
        },
        {
          stateName: 'BG-Benguet',
        },
        {
          stateName: 'BI-Biliran',
        },
        {
          stateName: 'BO-Bohol',
        },
        {
          stateName: 'BU-Bukidnon',
        },
        {
          stateName: 'BC-Bulacan',
        },
        {
          stateName: 'CA-Cagayan',
        },
        {
          stateName: 'CM-Camarines',
        },
        {
          stateName: 'NR-Norte',
        },
        {
          stateName: 'SR-Sur',
        },
        {
          stateName: 'CI-Camiguin',
        },
        {
          stateName: 'CZ-Capiz',
        },
        {
          stateName: 'CN-Catanduanes',
        },
        {
          stateName: 'CV-Cavite',
        },
        {
          stateName: 'CB-Cebu',
        },
        {
          stateName: 'CO-Compostela Valley',
        },
        {
          stateName: 'CT-Cotabato',
        },
        {
          stateName: 'DA-Davao',
        },
        {
          stateName: 'OC-Occidental',
        },
        {
          stateName: 'OR-Oriental',
        },
        {
          stateName: 'DI-Dinagat Islands',
        },
        {
          stateName: 'EA-Eastern Samar',
        },
        {
          stateName: 'GU-Guimaras',
        },
        {
          stateName: 'IF-Ifugao',
        },
        {
          stateName: 'IL-Ilocos',
        },
        {
          stateName: 'IO-Iloilo',
        },
        {
          stateName: 'IS-Isabela',
        },
        {
          stateName: 'KA-Kalinga',
        },
        {
          stateName: 'LA-La Union',
        },
        {
          stateName: 'LG-Laguna',
        },
        {
          stateName: 'LN-Lanao',
        },
        {
          stateName: 'LE-Leyte',
        },
        {
          stateName: 'MA-Maguindanao',
        },
        {
          stateName: 'MQ-Marinduque',
        },
        {
          stateName: 'MB-Masbate',
        },
        {
          stateName: 'MI-Misamis',
        },
        {
          stateName: 'MO-Mountain',
        },
        {
          stateName: 'PR-Province',
        },
        {
          stateName: 'NG-Negros',
        },
        {
          stateName: 'NO-Northern Samar',
        },
        {
          stateName: 'NE-Nueva Ecija',
        },
        {
          stateName: 'NV-Nueva Vizcaya',
        },
        {
          stateName: 'MR-Mindoro',
        },
        {
          stateName: 'PA-Palawan',
        },
        {
          stateName: 'PM-Pampanga',
        },
        {
          stateName: 'PG-Pangasinan',
        },
        {
          stateName: 'QU-Quezon',
        },
        {
          stateName: 'QI-Quirino',
        },
        {
          stateName: 'RI-Rizal',
        },
        {
          stateName: 'RO-Romblon',
        },
        {
          stateName: 'SA-Samar',
        },
        {
          stateName: 'SN-Sarangani',
        },
        {
          stateName: 'SQ-Siquijor',
        },
        {
          stateName: 'SO-Sorsogon',
        },
        {
          stateName: 'SC-South Cotabato',
        },
        {
          stateName: 'ST-Southern Leyte',
        },
        {
          stateName: 'SK-Sultan Kudarat',
        },
        {
          stateName: 'SL-Sulu',
        },
        {
          stateName: 'SU-Surigao',
        },
        {
          stateName: 'TA-Tarlac',
        },
        {
          stateName: 'TT-Tawi-Tawi',
        },
        {
          stateName: 'ZA-Zambales',
        },
        {
          stateName: 'ZM-Zamboanga',
        },
        {
          stateName: 'SI-Sibugay',
        },
        {
          stateName: 'ME-Metro Manila',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'PN',
      countryName: 'Pitcairn',
      stateList: [
        {
          stateName: 'PN-Pitcairn',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'PL',
      countryName: 'Poland',
      stateList: [
        {
          stateName: 'PL-Poland',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'PT',
      countryName: 'Portugal',
      stateList: [
        {
          stateName: 'PT-Portugal',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'PR',
      countryName: 'Puerto Rico',
      stateList: [
        {
          stateName: 'PR-Puerto Rico',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'QA',
      countryName: 'Qatar',
      stateList: [
        {
          stateName: 'QA-Qatar',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'KR',
      countryName: 'Republic of Korea',
      stateList: [
        {
          stateName: 'KR-Republic of Korea',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'MD',
      countryName: 'Republic of Moldova',
      stateList: [
        {
          stateName: 'MD-Republic of Moldova',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'RE',
      countryName: 'Réunion',
      stateList: [
        {
          stateName: 'RE-Réunion',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'RO',
      countryName: 'Romania',
      stateList: [
        {
          stateName: 'RO-Romania',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'RU',
      countryName: 'Russia',
      stateList: [
        {
          stateName: 'RU-Russia',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'RW',
      countryName: 'Rwanda',
      stateList: [
        {
          stateName: 'RW-Rwanda',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'BL',
      countryName: 'Saint Barthélemy',
      stateList: [
        {
          stateName: 'BL-Saint Barthélemy',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'PM',
      countryName: 'Saint Pierre and Miquelon',
      stateList: [
        {
          stateName: 'PM-Saint Pierre and Miquelon',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'WS',
      countryName: 'Samoa',
      stateList: [
        {
          stateName: 'WS-Samoa',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'SM',
      countryName: 'San Marino',
      stateList: [
        {
          stateName: 'SM-San Marino',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'ST',
      countryName: 'Sao Tome and Principe',
      stateList: [
        {
          stateName: 'ST-Sao Tome and Principe',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'SN',
      countryName: 'Senegal',
      stateList: [
        {
          stateName: 'SN-Senegal',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'RS',
      countryName: 'Serbia',
      stateList: [
        {
          stateName: 'RS-Serbia',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'SC',
      countryName: 'Seychelles',
      stateList: [
        {
          stateName: 'SC-Seychelles',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'SL',
      countryName: 'Sierra Leone',
      stateList: [
        {
          stateName: 'SL-Sierra Leone',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'SG',
      countryName: 'Singapore',
      stateList: [
        {
          stateName: 'SG-Singapore',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'SK',
      countryName: 'Slovakia',
      stateList: [
        {
          stateName: 'SK-Slovakia',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'SI',
      countryName: 'Slovenia',
      stateList: [
        {
          stateName: 'SI-Slovenia',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'SB',
      countryName: 'Solomon Islands',
      stateList: [
        {
          stateName: 'SB-Solomon Islands',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'SO',
      countryName: 'Somalia',
      stateList: [
        {
          stateName: 'SO-Somalia',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'ZA',
      countryName: 'South Africa',
      stateList: [
        {
          stateName: 'ZA-South Africa',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'GS',
      countryName: 'South Georgia and the South Sandwich Isl',
      stateList: [
        {
          stateName: 'GS-South Georgia and the South Sandwich Isl',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'ES',
      countryName: 'Spain',
      stateList: [
        {
          stateName: 'ES-Spain',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'LK',
      countryName: 'Sri Lanka',
      stateList: [
        {
          stateName: 'LK-Sri Lanka',
        },
        {
          stateName: 'DF-Default',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'SD',
      countryName: 'Sudan',
      stateList: [
        {
          stateName: 'SD-Sudan',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'SJ',
      countryName: 'Svalbard and Jan Mayen',
      stateList: [
        {
          stateName: 'SJ-Svalbard and Jan Mayen',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'SZ',
      countryName: 'Swaziland',
      stateList: [
        {
          stateName: 'SZ-Swaziland',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'SE',
      countryName: 'Sweden',
      stateList: [
        {
          stateName: 'SE-Sweden',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'CH',
      countryName: 'Switzerland',
      stateList: [
        {
          stateName: 'CH-Switzerland',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'SY',
      countryName: 'Syrian Arab Republic',
      stateList: [
        {
          stateName: 'SY-Syrian Arab Republic',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'TW',
      countryName: 'Taiwan',
      stateList: [
        {
          stateName: 'TP-Taipai',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'TJ',
      countryName: 'Tajikistan',
      stateList: [
        {
          stateName: 'TJ-Tajikistan',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Southern Ocean',
      countryCode: 'TH',
      countryName: 'Thailand',
      stateList: [
        {
          stateName: 'TH-Thailand',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'CD',
      countryName: 'The Democratic Republic of the Congo',
      stateList: [
        {
          stateName: 'CD-The Democratic Republic of the Congo',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'MK',
      countryName: 'The Former Yugoslav Republic of Macedoni',
      stateList: [
        {
          stateName: 'MK-The Former Yugoslav Republic of Macedoni',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'TL',
      countryName: 'Timor-Leste',
      stateList: [
        {
          stateName: 'TL-Timor-Leste',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'TG',
      countryName: 'Togo',
      stateList: [
        {
          stateName: 'TG-Togo',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'North America',
      countryCode: 'TK',
      countryName: 'Tokelau',
      stateList: [
        {
          stateName: 'TK-Tokelau',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'TO',
      countryName: 'Tonga',
      stateList: [
        {
          stateName: 'TO-Tonga',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Africa',
      countryCode: 'TN',
      countryName: 'Tunisia',
      stateList: [
        {
          stateName: 'TN-Tunisia',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'TR',
      countryName: 'Turkey',
      stateList: [
        {
          stateName: 'TR-Turkey',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'TM',
      countryName: 'Turkmenistan',
      stateList: [
        {
          stateName: 'TM-Turkmenistan',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'TV',
      countryName: 'Tuvalu',
      stateList: [
        {
          stateName: 'TV-Tuvalu',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'UG',
      countryName: 'Uganda',
      stateList: [
        {
          stateName: 'UG-Uganda',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'UA',
      countryName: 'Ukraine',
      stateList: [
        {
          stateName: 'UA-Ukraine',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'TZ',
      countryName: 'United Republic of Tanzania',
      stateList: [
        {
          stateName: 'TZ-United Republic of Tanzania',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'UZ',
      countryName: 'Uzbekistan',
      stateList: [
        {
          stateName: 'UZ-Uzbekistan',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'VU',
      countryName: 'Vanuatu',
      stateList: [
        {
          stateName: 'VU-Vanuatu',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'VN',
      countryName: 'Viet Nam',
      stateList: [
        {
          stateName: 'VN-Viet Nam',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'VI',
      countryName: 'Virgin Islands (USA)',
      stateList: [
        {
          stateName: 'VI-Virgin Islands (USA)',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'BQ',
      countryName: 'Bonaire, Sint Eustatius and Saba',
      stateList: [
        {
          stateName: 'BQ-Bonaire State',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'South America',
      countryCode: 'AE',
      countryName: 'United Arab Emirates',
      stateList: [
        {
          stateName: 'TR-Gilan',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'SH',
      countryName: 'Saint Helena, Ascension and Tristan',
      stateList: [
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'GB',
      countryName: 'United Kingdom',
      stateList: [
        {
          stateName: 'Eng-England',
        },
        {
          stateName: 'Wl-Wales',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Central America',
      countryCode: 'AFG',
      countryName: 'Afghanistan',
      stateList: [
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'LK',
      countryName: 'Sri Lanka',
      stateList: [
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'DE',
      countryName: 'Germany',
      stateList: [
        {
          stateName: 'BR-Berlin',
        },
        {
          stateName: 'SR-Saarland',
        },
        {
          stateName: 'DF-Default',
        },
      ],
    },
    {
      region: 'Asia',
      countryCode: 'VZ',
      countryName: 'Venezuela',
      stateList: [
        {
          stateName: 'VAMA-Amazonas',
        },
        {
          stateName: 'VANZ-Anzoátegui',
        },
        {
          stateName: 'VAPU-Apure',
        },
        {
          stateName: 'VARA-Aragua',
        },
        {
          stateName: 'VBAR-Barinas',
        },
        {
          stateName: 'VBOL-Bolívar',
        },
        {
          stateName: 'VCAR-Carabobo',
        },
        {
          stateName: 'VCOJ-Cojedes',
        },
        {
          stateName: 'VDEL-Delta Amacuro',
        },
        {
          stateName: 'VDEP-Dependencias Federales',
        },
        {
          stateName: 'VCAP-Distrito Capital',
        },
        {
          stateName: 'VFAL-Falcón',
        },
        {
          stateName: 'VGUA-Guárico',
        },
        {
          stateName: 'VLAR-Lara',
        },
        {
          stateName: 'VMAD-Madrid',
        },
        {
          stateName: 'VMER-Mérida',
        },
        {
          stateName: 'VMIR-Miranda',
        },
        {
          stateName: 'VMON-Monagas',
        },
        {
          stateName: 'VNUE-Nueva Esparta',
        },
        {
          stateName: 'VPOR-Portuguesa',
        },
        {
          stateName: 'VSUC-Sucre',
        },
        {
          stateName: 'VTAC-Táchira',
        },
        {
          stateName: 'VTRU-Trujillo',
        },
        {
          stateName: 'VVAR-Vargas',
        },
        {
          stateName: 'VYAR-Yaracuy',
        },
        {
          stateName: 'VZUL-Zulia',
        },
      ],
    },
  ],
  identityList: [
    'Driving License',
    'Passport',
    'Venezuelan',
    'Foreigner',
    'Legal',
    'Government',
  ],
  acctContactTypes: [
    'VIP',
    'Commercial',
    'Courtesy',
    'Student',
    'Government',
    'Kid',
    'Non Kid',
  ],
  reasonCodeCategories: [
    'Account Status Change',
    'Refunds',
    'Product Removal',
    'Credit Adjustment',
    'Debit Adjustment',
    'OP Discount',
    'Journal',
    'Package Item Weightage Discount',
    'Offers',
  ],
  productAttributes: ['Commitment Period', 'IP', 'E-Mail'],
  accountRoles: [
    'Super User',
    'Admin User',
    'Regular User',
    'Test User',
    'Employee User',
    'IP-MIG',
  ],
  eventCategories: [
    'Bill Dispute',
    'Collection',
    'Sales',
    'Service',
    'CSR Note',
    'Inquiry',
    'Activation',
    'Trouble',
    'Speed',
    'Update Account',
    'Complaint',
    'Deactivation',
    'Request',
    'Other',
    'Service Change',
    'Address Change',
    'One Time Payment',
    'Payment Method Change',
    'VOD Purchase Limit Change',
    'CC Charging Threshold Change',
    'Account Info Change',
    'Account Creation',
    'Add Order',
    'Add CPE',
    'Remove CPE',
    'Activate STB',
    'Payment Failure',
    'Adjustment',
    'Account Status Change',
    'Refund',
    'Credit Card Expiry Notification',
    'Pending Suspension',
    'Involuntary Suspension',
    'Voluntary Suspension',
    'Account Cancellation',
    'Account Reactivation',
    'Payment Success',
    'Subscription Reminder',
    'Ticket Information',
    'Activity Message',
    'New Account Creation',
    'Cash Credit Issue',
    'Line Item Credit Issue',
    'Reset Contact Password',
    'Subscription Renewal Reminder',
    'Renewal Confirmation',
    'Reset CSR Password',
    'Add TVOD Order',
    'Reset Contact Pin',
    'Coupon Redemption',
    'One-Time Product Renewal',
    'Coupon',
    'Modify Validity End Date',
    'Account Verification Email Reminder',
    'Trial Expiry Reminder Event',
    'Customer Login',
    'Verify Account',
    'Account State Change',
    'Subscription Expired Email',
    'Remove Service',
    'Remove Device',
    'Buy Ticket',
    'Renewal Retry Payment Failure',
    'Invoice Charged Notification',
    'Suspension Reminder',
    'Suspend Product',
    'Suspend Package',
    'Subscription Reactivate',
    'Suspend Notification',
    'Add Order - FREE TRAIL',
    'Parental Controls',
    'Add Order - TVOD',
    'Add Order - SVOD',
    'Parental Controls Activated',
    'Parental Controls Updated',
    'Contact Password Change',
    'Add Order - SVOD Renew',
    'Service Renewal Reminder',
    'Invalid Parental Control PIN',
    'Content Expiry Daily Reminder Event',
    'Add Order - FireTV',
    'Date of Birth Change',
    'Capture Renewal Consent',
    'Add Order - TVOD_Coupon',
    'Update Contact Password',
    'Trail Expiry Reminder Event',
    'Add Order - CCDC',
    'Add Order - Stores',
    'Renewal Payment Failure',
    'ReSubscription - CCDC',
    'Refund Success',
    'Remove Order',
    'Parental Controls Disabled',
    'Email Change',
    'ReSubscription - Stores',
    'AntelCDSFailureEvent',
    'AntelWebstoreFailureEvent',
    'Create OTP',
    'Add Order - CHT',
    'Add Order - GLOBE',
    'Add Order - BANDOTT',
    'ReSubscription - COUPON',
    'Add Order - COUPON',
    'Voucher Expiry First Reminder',
    'Voucher Expiry Second Reminder',
    'Voucher Expiry Third Reminder',
    'Wallet Subscription Expiry Reminder',
    'CC Subscription Expiry Reminder',
    'Add Order - DPWALLET',
    'Add Order - DPCOUPON',
    'ReSubscription - DPWALLET',
    'ReSubscription - DPCOUPON',
    'Voucher_redeemed_Spark_Downgrade',
    'Voucher_redeemed_SVOD_Upgrade',
    'Voucher_redeemed_SVOD_Downgrade',
    'Resume',
    'Downgrade NonSpark',
    'Upgrade NonSpark',
    'Downgrade Spark',
    'Upgrade Spark',
    'Renewal Failure Payment Retry#4',
    'Renewal Failure Payment Retry#2',
    'Renewal Payment Failure',
    'Upgrade',
    'downgrade',
    'Voucher_redeemed_Spark_Upgrade',
    'CC Service Change',
    'Resub - Bundle - COUPON',
    'Add Order - Bundle - COUPON',
    'Resub - Bundle - CCDC',
    'Add Order - Bundle - CCDC',
    'CC Service Change - COUPON',
    'Service Change - COUPON',
    'Coupon with Trial Expiry Reminder Event',
    'Remove Service - CC',
    'Remove Service - Stores',
    'CC Service Change - Trial - COUPON',
    'CC Service Change - Trial',
    'Service Change - Trial',
    'QueryString Verification',
    'AntelExecuteChargeFailureEvent',
    'Bundles Service Expiry Reminder Event',
    'Cancellation On Demand Plus',
    'Subscription Cancellation',
    'Subscription Renewal - Prepaid',
    'Subscription Renewal - CreditCard',
    'Voucher Redemption - TVOD',
    'VOD and One-Off Purchase',
    'Voucher Redemption - Linear',
    'Voucher Redemption - SVOD',
    'Account Creation',
    'Subscription Prepaid',
    'Subscription TV Package (Linear)',
    'VOD purchase (TVOD)',
    'Subscription On Demand Plus (SVOD)',
    'Cancellation TV Package (Linear)',
    'Cancellation On Demand Plus (SVOD)',
    'Insufficient BaLance-Subscription Prepaid',
    'VOD and One-Off Purchase',
    'Voucher Redemption - TVOD',
    'Voucher Redemption - SVOD',
    'Voucher Redemption - Linear',
    'Subscription Renewal - CreditCard',
    'Subscription Renewal - Prepaid',
    'Monthly PH Customers Service Change Event',
    'Monthly TW Customers Service Change Event',
    'Bundled Customers With Refund Service Change Event',
    'Bundled Customers Without Refund Service Change Event',
    'Monthly PH Customers Service Reminder Event',
    'Monthly TW Customers Service Reminder Event',
    'Bundled Customers Service Reminder Event',
    'Account Creation-EN',
    'Account Creation-AR',
    'Reset Contact Password-EN',
    'Reset Contact Password-AR',
    'Verify Account-EN',
    'Verify Account-AR',
    'Add TVOD Order-EN',
    'Add TVOD Order-AR',
    'Add Order-EN',
    'Add Order-AR',
    'Create OTP-EN',
    'Create OTP-AR',
    'VOD purchase (TVOD)-EN',
    'VOD purchase (TVOD)-AR',
    'Voucher Redemption - TVOD-EN',
    'Voucher Redemption - TVOD-AR',
    'Voucher Redemption - Linear-EN',
    'Voucher Redemption - Linear-AR',
    'Voucher Redemption - SVOD-EN',
    'Voucher Redemption - SVOD-AR',
    'Subscription On Demand Plus (SVOD)-EN',
    'Subscription On Demand Plus (SVOD)-AR',
    'Subscription TV Package (Linear)-EN',
    'Subscription TV Package (Linear)-AR',
    'VOD and One-Off Purchase-EN',
    'VOD and One-Off Purchase-AR',
    'Cancellation On Demand Plus (SVOD)-EN',
    'Cancellation On Demand Plus (SVOD)-AR',
    'Cancellation TV Package (Linear)-EN',
    'Cancellation TV Package (Linear)-AR',
    'Subscription Renewal - CreditCard-EN',
    'Subscription Renewal - CreditCard-AR',
    'Subscription Renewal - Prepaid-EN',
    'Subscription Renewal - Prepaid-AR',
    'Insufficient BaLance-Subscription Prepaid-EN',
    'Insufficient BaLance-Subscription Prepaid-AR',
    'Subscription Renewal-Prorate-EN',
    'Subscription Renewal-Prorate-AR',
    'B2C TW customers Service Reminder Event',
    'Customer Logout',
    'Myntra_Gratification_Coupon',
    'Subscription-MicroCharging-EN',
    'Subscription-MicroCharging-AR',
    'Insufficient BaLance-Subscription - EN',
    'Insufficient BaLance-Subscription - AR',
    'Forgot Password Create OTP',
    'Migrate Account',
    'Wallet Topup',
    'ToDailyUsageTransfer',
    'FromDailyUsageTransfer',
    'FromCurrentBalanceTransfer',
    'ToCurrentBalanceTransfer',
    'Journal Adjustment Received',
    'Journal Adjustment Transferred',
    'Reactivate Order',
    'Account Expiration',
    'Subscription-Free Trial-EN',
    'Subscription-Free Trial-AR',
    'Edit-OrderedProduct',
    'Edit-Promotion',
    'Billing - Upgrade Subscription',
    'Billing - Downgrade Subscription',
    'Add Order - COUPON_V2',
    'Add Order - SVOD Renew_V2',
    'Add Order - SVOD_V2',
    'Add Order - SVOD Renew_ChangeService',
    'Add Order - SVOD_ChangeService',
    'Payment Update',
    'Add Order Welcome',
    'Remove Service GoodBye',
    'Subscription Expired Email_V2',
    'New Account Creation_V2',
    'Renewal Payment Success',
    'New_Device_Login_V2',
    'Forgot_Password_Reset_PIN_V2',
    'Remove_Device_V2',
    'Override_Old_Device_V2',
    'Reset_Parental_Control_PIN_V2',
    'Order Failure',
    'Link Account',
    'Account Blocked',
    'Payment Method Blocked',
    'Card Blocked',
    'WOM Subsciption Expiry One Day',
    'WOM Subsciption Expiry Three Day',
    'WOM Subscription Suspension Four Day',
    'CSR Password Creation',
    'CCBUser Forgot Password',
    'Generate Account',
    'Assign WorkOrder',
    'Service Pause',
  ],
  serviceCategories: [
    'broadband',
    'video',
    'mobile',
    'wireline',
    'packages',
    'EdgeComputing',
    'PAYTV',
  ],
  dupAcctCheckAttributes: [
    'Primary Contact Name',
    'Primary Contact Phone',
    'Primary Contact E-mail',
    'Service Address',
    'Billing Address',
    'Basic Service',
    'Contact User Name',
    'CPCustomerID',
    'Tax ID',
  ],
  bscsCategories: [
    {
      description: 'SERVICE DESK',
      subCategory: [
        {
          description: 'POST VENTA',
          subCategory2: [
            {
              description: 'CERRADO',
            },
            {
              description: 'PROCESO CONTACTACION',
            },
            {
              description: 'REASIGNADO NO SOLUCIONADO',
            },
          ],
        },
      ],
    },
  ],
  acctEventTypes: [
    'Inbound Call',
    'Outbound Call',
    'System',
    'Inbound Email',
    'Outbound Email',
  ],
  deviceTypes: ['Samsung', 'Chrome', 'Mozilla'],
  additionalInfos: ['AutoRenew', 'CouponEligibility', 'FreeTrial'],
  gracePeriods: ['No Of Hours', 'No Of Days', 'No Of Months'],
  videoFormats: ['HD', 'SD'],
  releaseWindows: ['New Release', 'Library'],
  commercialModels: ['Rental', 'EST', 'Both'],
};
