# INSTALLATION

Powerful rich text editor framework with a modular architecture, modern integrations, and features like collaborative editing.

Download the files from [Online Builder](https://ckeditor.com/ckeditor-5/online-builder/) and unzip them into the ckeditor5 folder. However, exclude the [Watchdog](https://ckeditor.com/docs/ckeditor5/latest/installation/integrations/react.html#using-the-ckeditor-5-online-builder) feature.

And run the script below:

```shell
npm install file:./ckeditor5
npm install @ckeditor/ckeditor5-react@6.2.0
```

Upgrade ckeditor5-custom-build.

```shell
cd ./ckeditor5 && npx npm-check-updates -u
cd .. && npm install file:./ckeditor5
```

- [Integrating CKEditor 5 into a React app using the online builder](https://ckeditor.com/blog/react-text-input-field/)
- [Integrate CKEditor 5 with Next.js](https://ckeditor.com/docs/ckeditor5/latest/installation/integrations/next-js.html)
