import * as Sentry from '@sentry/tanstackstart-react'

// Only initialize Sentry if DSN is provided
const sentryDsn = process.env.VITE_SENTRY_DSN

if (sentryDsn) {
  Sentry.init({
    dsn: sentryDsn,
    // Adds request headers and IP for users, for more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/tanstackstart-react/configuration/options/#sendDefaultPii
    sendDefaultPii: true,
  })
} else {
  console.log('Sentry DSN not configured. Error tracking disabled.')
}
