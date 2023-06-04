# image-convert-base64

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/image-convert-base64.svg)](https://www.npmjs.com/package/image-convert-base64) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save image-convert-base64
```

## Usage

```tsx
import { convertBase64 } from "image-convert-base64";
<div style={{ padding: 100 }}>

    <input type="file" onChange={ async (e: any) => {
        const base64 = await convertBase64(e.target.files[0]);
        console.log(base64)
        if(base64){
            setB(base64);
        }
        }} accept="image/*" />
    
    <p>file: {b ?? 'null'}</p>
    
</div>
```

## License

MIT © [reimibeta](https://github.com/reimibeta)
