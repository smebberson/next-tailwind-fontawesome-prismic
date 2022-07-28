# next-tailwind-fontawesome-prismic

An example setup using Next.js, Tailwind CSS, Font Awesome and Prismic for content.

## Template

This repository can be used as a template. If doing so, you'll need to provide an `sm.json` file which contains Prismic configuration information. Use this code as a starting point:

```
{
    "_latest": "0.3.0",
    "apiEndpoint": "{apiEndpoint}",
    "framework": "previousNext",
    "libraries": ["@/slices"],
    "localSliceSimulatorURL": "http://localhost:3000/slice-simulator"
}
```

You can retrieve the `{apiEndpoint}` value by visiting your Prismic repository and navigating to Settings > API & Security > API endpoint.

## Developing

To continue developing, clone your repository and follow these steps.

Setup dependencies:

```shell
yarn
```

Start the website:

```shell
yarn dev
```

In a new terminal, start SliceMachine:

```shell
yarn slicemachine
```

## Slice machine

To use the Slice machine to develop custom types and slices:

```
yarn slicemachine
```
