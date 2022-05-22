import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "~/styles/app.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css",
    },
    { rel: "stylesheet", href: styles },
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Barnwell Family Tree",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-300">
          <Outlet />
          <ScrollRestoration />      
          <Scripts />
          <LiveReload />       
      </body>
    </html>
  );
}
