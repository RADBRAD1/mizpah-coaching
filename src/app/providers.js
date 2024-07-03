// app/providers.js

//initialize PostHog with your project API key and instance address and export a provider component.

'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

export function PHProvider({ children }) {
    if (typeof window !== 'undefined') {
      posthog.init('phc_hYdoskFGznZUlf60wvZ267QwXZyBPbbMKeg7d90Seql', {
        api_host: 'https://us.i.posthog.com'
      })
    }

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}


//capture events for posthog
import "./globals.css";
import { PHProvider } from './providers'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PHProvider>
        <body>{children}</body>
      </PHProvider>
    </html>
  );
}