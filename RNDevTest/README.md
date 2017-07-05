# React Native Developer test

## Important setup notice
Some configuration variables are fetched from `.env` file that should be located in project root folder (RNDevTest). This file is not checked in to repository because it can contain sensitive keys.

### To build the project proprtly create `.env` with contents:

```
BASE_API_URL=https://test.inploi.me/
IMAGE_CDN_BASE_ADDRESS=https://res.cloudinary.com/chris-mackie/image/upload
APP_NAME=inploi
```

#### Additionally: for testing (this will populate login form to avoid inputting the credentials each time when developing):
`TEST_ACCOUNT_EMAIL`

`TEST_ACCOUNT_PASSWORD`
