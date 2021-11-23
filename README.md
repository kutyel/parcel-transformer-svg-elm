# parcel-transformer-svg-elm

A Parcel 2 plugin to turn automatically SVGs into `elm/svg` ✨

## Usage

```
// .parcelrc
{
  "extends": "@parcel/config-default",
  "resolvers": ["@parcel/resolver-glob", "..."],
  "transformers": {
    "Icons/*.svg": ["parcel-transformer-svg-elm"]
  }
}

```

And then in your `main.css` file:

```css
/* ... */
@import '../Icons/*.svg';
```
