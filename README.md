# Three.js Vite Template

A modern Three.js template using Vite as the build tool. This template provides a solid foundation for building 3D web applications with Three.js.

## Features

- 🚀 **Vite** for lightning-fast development and building
- 🎮 **Three.js** for 3D graphics
- 📦 **Optimized Build** with Terser minification
- 🔍 **Source Maps** for better debugging
- 📱 **Responsive** canvas that adjusts to window size
- 🎨 **Static Assets** management with public directory

## Project Structure

```
├── public/              # Static assets
│   ├── textures/       # Texture files
│   └── models/         # 3D model files
├── src/                # Source code
│   └── main.js         # Main application file
├── index.html          # Entry point
├── vite.config.js      # Vite configuration
└── package.json        # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <your-project-name>
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

### Development

Start the development server:
```bash
npm run dev
# or
yarn dev
```

This will:
- Start the development server at `http://localhost:3000`
- Automatically open your browser
- Enable hot module replacement (HMR)

### Building for Production

Create a production build:
```bash
npm run build
# or
yarn build
```

Preview the production build:
```bash
npm run preview
# or
yarn preview
```

## Adding Assets

### Static Assets

Place your static assets in the `public` directory:
- Put texture files in `public/textures/`
- Put 3D model files in `public/models/`

These files will be served as-is and can be accessed directly in your code.

### Example Usage

```javascript
// Loading a texture
const texture = new THREE.TextureLoader().load('/textures/your-texture.jpg');

// Loading a 3D model
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
const loader = new GLTFLoader();
loader.load('/models/your-model.glb', (gltf) => {
  scene.add(gltf.scene);
});
```

## Customization

### Vite Configuration

The `vite.config.js` file contains the build configuration. You can modify:
- Server settings (port, auto-open)
- Build options (output directory, minification)
- Dependency optimization

### Three.js Scene

The main scene is set up in `src/main.js`. You can:
- Add more 3D objects
- Implement custom animations
- Add lighting and materials
- Implement controls and interactions

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details. 