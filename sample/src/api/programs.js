export const getPrograms = lastId => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        count: 10,
        data: [{
          id: 1,
          vendor: 'Cloudinary',
          description: 'Cloud image & video upload, storage, management & CDN',
          point: '$3,000',
          reword: 'Up to $5,000',
          managed: true,
        }, {
          id: 2,
          vendor: 'Vonage',
          description: 'Business Phone Service and Business VOIP Provider',
          point: 'Points',
          reword: null,
          managed: true,
        }, {
          id: 3,
          vendor: 'Boozt Fashion',
          description: 'Boozt Fashion',
          point: '$125 - $3,000',
          reword: null,
          managed: true,
        }, {
          id: 4,
          vendor: 'Lime',
          description: 'Help secure Lime',
          point: '$100 - $2,500',
          reword: null,
          managed: true,
        }, {
          id: 5,
          vendor: 'BitDiscovery',
          description: 'Vulnerability Disclosure Program - Powered by Bugcrowd',
          point: 'Points',
          reword: null,
          managed: true,
        }, {
          id: 6,
          vendor: 'Blend',
          description: 'Better lending, for all',
          point: 'Points',
          reword: null,
          managed: true,
        }, {
          id: 7,
          vendor: 'Simple',
          description: 'Better Banking',
          point: '$100 - $3,000+',
          reword: null,
          managed: true,
        }, {
          id: 8,
          vendor: 'Gusto',
          description: `It's time to tame the chaos of payroll, benefits, and HR.`,
          point: '$25 - $3,000',
          reword: null,
          managed: true,
        }, {
          id: 9,
          vendor: 'Convertkit Vulnerability Disclosure Program',
          description: 'Email marketing software the way it shoud be.',
          point: 'Points',
          reword: null,
          managed: true,
        }, {
          id: 10,
          vendor: 'Zilliqa',
          description: 'The scalable and secure blockchain platform for hosting decen...',
          point: '$150 - $5,000',
          reword: null,
          managed: true,
        }],
      });
    }, 500);
  });
};