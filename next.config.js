require("dotenv").config();

module.exports = {
    env: {
        NEXT_PUBLIC_CONTENT: process.env.NEXT_PUBLIC_CONTENT,
        STORYBLOK: process.env.NEXT_PUBLIC_STORYBLOK
    },
  }