const moment = require('moment')

module.exports = {
  employed: true,

  name  : 'Allen McIntosh II',
  age   : moment('1995-12-03').fromNow(true),
  title : 'Full Stack Engineer',
  email : 'allen.mcintoshii@gmail.com',
  phone : {
    text: '(242) 441-3229',
    link: 'tel:12424413229'
  },
  
  address: {
    street  : '18A Marathon Rd.',
    city    : 'Nassau',
    country : 'Bahamas'
  },
  
  social: {
    GitHub: {
      username : 'amci1203',
      link     : 'https:github.com/amci1203'
    },
    CodePen: {
      username : 'amci1203',
      link     : 'https://codepen.io/amci1203/'
    }
  }
}
