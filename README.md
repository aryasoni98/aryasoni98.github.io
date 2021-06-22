![image](./public/aryasoni98.png)

<p align="center">
  <a href="https://aryasoni98.github.io/">
    <h2 align="center">Arya Soni</h2>
  </a>
</p>
<p align="center">Contributing to open source can be a rewarding way to learn, teach, and build experience in just about any skill you can imagine.</p>

# 💻 Building locally

```shell
# Clone the repo
git clone https://github.com/aryasoni98/aryasoni98.github.io.git

cd aryasoni98.github.io

# Install deps
yarn

OR

npm install

# Create a .env file from .env.example

REACT_APP_GITHUB_TOKEN = <TOKEN>
GITHUB_USERNAME = <GITHUB_USERNAME>
USE_GITHUB_DATA = "true"

# Start Next.js development server
yarn dev

OR

npm run dev
```

# 🚀 Building for production

```shell
# Clone the repo
git clone https://github.com/aryasoni98/aryasoni98.github.io.git

cd aryasoni98.github.io

# Install deps
yarn

OR

npm install

# Create a .env file from .env.example

REACT_APP_GITHUB_TOKEN = <TOKEN>
GITHUB_USERNAME = <GITHUB_USERNAME>
USE_GITHUB_DATA = "true"

# Build HTML files
yarn build

OR

npm run build
```

# 📂 What's inside?

Take a quick look at this project's folder structure:

```
.
├── components
│   ├── About
│   │   ├── About.style.ts
│   │   └── About.tsx
│   ├── Contact
│   │   ├── Contact.style.ts
│   │   └── Contact.tsx
│   ├── Cursor.tsx
│   ├── Footer
│   │   ├── Footer.style.ts
│   │   └── Footer.tsx
│   ├── Head.tsx
│   ├── Home
│   │   ├── Home.style.ts
│   │   └── Home.tsx
│   ├── Navbar
│   │   ├── Navbar.style.ts
│   │   └── Navbar.tsx
│   ├── Projects
│   │   ├── Projects.style.ts
│   │   └── Projects.tsx
│   └── Work
│       ├── Work.style.ts
│       └── Work.tsx
├── hooks
│   └── useForm.ts
├── next.config.js
├── next-env.d.ts
├── package.json
├── pages
│   ├── _document.tsx
│   └── index.tsx
├── stitches.config.ts
├── styles
│   ├── global.style.ts
│   └── theme.config.ts
├── tsconfig.json
└── yarn.lock
```

# Deploy Github Page
The step below is important!

#### Step 1: Add homepage to package.json
Open your `package.json` and add a `homepage` field for your project:

  ```"homepage": "https://myusername.github.io/",```

#### Step 2: Install `gh-pages` and add `deploy` to `scripts` in package.json

Now, whenever you run npm run build, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

```
npm install --save gh-pages
```

Alternatively you may use `yarn`:

```
yarn add gh-pages
```

Add the following scripts in your `package.json`:

```
"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "next build && next export && git add out/ && git commit -m \"Deploy gh-pages\" && git subtree push --prefix out origin gh-pages",
  "start": "react-scripts start",
  "build": "react-scripts build",
```

#### Step 3: Deploy the site by running npm run deploy
```
npm run deploy
```

#### Step 4: For a project page, ensure your project’s settings use gh-pages

Finally, make sure GitHub Pages option in your GitHub project settings is set to use the `gh-pages branch`

# 🎨 Colour palette

| Color          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| London Grey    | ![#6B7C95](https://via.placeholder.com/10/6B7C95?text=+) `#6B7C95` |
| Light Grey     | ![#8696AD](https://via.placeholder.com/10/8696AD?text=+) `#8696AD` |
| Mild dark      | ![#37393E](https://via.placeholder.com/10/37393E?text=+) `#37393E` |
| Jet Black      | ![#000000](https://via.placeholder.com/10/000000?text=+) `#000000` |
| Light          | ![#F4F4F5](https://via.placeholder.com/10/F4F4F5?text=+) `#F4F4F5` |

## ❤️ Project Admin

<table>
	<tr>
		<td align="center">
			<a href="https://github.com/aryasoni98">
				<img src="./public/aryasoni.jpeg" width="100px" alt="" />
				<br /> <sub><b>Arya Soni</b></sub>
			</a>
			<br /> <a href="https://github.com/aryasoni98">
		👑 Admin
	    </a>
		</td>
	</tr>
</table>

## Contributors ✨

<table>
	 <tr>
		 <td>
       <a href="https://github.com/aryasoni98/aryasoni98.github.io/graphs/contributors">
      <img src="https://contrib.rocks/image?repo=aryasoni98/aryasoni98.github.io" />
      </a>
      </a>
		</td>
  </tr>
</table>
