require('dotenv').config()
module.exports = {
    env: {
        content: `${process.env.NEXT_PUBLIC_CONTENT}`,
    },
  }