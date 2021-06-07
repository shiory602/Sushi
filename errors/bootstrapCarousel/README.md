# 概要

カルーセルが動かない

# 想定手順

1. トップページを開く
2. カルーセルが表示される
3. 一定時間ごとにカルーセルが流れる

# 課題

3の時点でカルーセルが動かない。添付画像参照
![img](./img.png)

# 環境

- macOS
- High Sierra
- `main` ブランチ最新版 `d359011b5dc4798ad8aec98dcb07adf4ec76241b`

# エラーなど

画面でのエラー表示なし。

コンソールには以下。

```
src/components/Cart/Cart.jsx
  Line 14:7:   React Hook useEffect has a missing dependency: 'props'. Either include it or remove the dependency array. However, 'props' will change when *any* prop changes, so the preferred fix is to destructure the 'props' object outside of the useEffect call and refer to those specific props inside useEffect  react-hooks/exhaustive-deps
  Line 36:40:  Expected '===' and instead saw '==' eqeqeq
  Line 37:15:  Expected '===' and instead saw '==' eqeqeq
  Line 51:28:  Expected '===' and instead saw '==' eqeqeq
  Line 66:21:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop jsx-a11y/img-redundant-alt
  Line 77:21:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
```

```
src/components/Checkout/Checkout.jsx
  Line 1:27:  'useEffect' is defined but never used  no-unused-vars
```

```
src/components/Checkout/CheckoutMain/CheckoutInformation.jsx
  Line 54:77:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
```

```
src/components/Checkout/CheckoutSide/CheckoutSide.jsx
  Line 6:21:  'setShipping' is assigned a value but never used no-unused-vars
  Line 13:7:  React Hook useEffect has a missing dependency: 'props.products'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
```

```
src/components/Header.jsx
  Line 1:18:   'useState' is defined but never used no-unused-vars
  Line 1:28:   'useEffect' is defined but never used no-unused-vars
  Line 26:29:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
```

```
src/components/Products/BagModal/BagModal.jsx
  Line 1:17:   'useRef' is defined but never used no-unused-vars
  Line 1:35:   'useEffect' is defined but never used no-unused-vars
  Line 8:15:   Expected '===' and instead saw '==' eqeqeq
  Line 25:17:  Headings must have content and the content must be accessible by a screen reader heading-has-content
  Line 44:21:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop  jsx-a11y/img-redundant-alt
```

```
src/components/Products/ProductDetails/ProductDetails.jsx
  Line 1:27:   'useEffect' is defined but never used no-unused-vars
  Line 45:21:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop  jsx-a11y/img-redundant-alt
  Line 47:25:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop  jsx-a11y/img-redundant-alt
  Line 48:25:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop  jsx-a11y/img-redundant-alt
  Line 49:25:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop  jsx-a11y/img-redundant-alt
  Line 50:25:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop  jsx-a11y/img-redundant-alt
overrideMethod @ react_devtools_backend.js:2560
printWarnings @ webpackHotDevClient.js:138
handleWarnings @ webpackHotDevClient.js:143
push../node_modules/react-dev-utils/webpackHotDevClient.js.connection.onmessage @ webpackHotDevClient.js:210
webpackHotDevClient.js:76
```
