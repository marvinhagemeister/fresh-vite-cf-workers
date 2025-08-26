import { PageProps } from "@fresh/core";

export default function App(props: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Fresh CF workers</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <props.Component />
      </body>
    </html>
  );
}
