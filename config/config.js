const whiteList = ['https://reqbin.com',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'https://www.test-cors.org',
  'https://extendsclass.com'
]

const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by cors'))
    }
  },
  optionsSuccessStatus: 200
}


module.exports = corsOptions