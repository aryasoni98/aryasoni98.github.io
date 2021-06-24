exports.id = 612;
exports.ids = [612];
exports.modules = {

/***/ 174:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(184);





const CursorDot = (0,_styles_theme_config__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)('div', {
  pointerEvents: 'none',
  position: 'absolute',
  top: '50%',
  left: '50%',
  borderRadius: '50%',
  opacity: 0,
  transform: 'translate(-50%, -50%)',
  transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
  width: 8,
  height: 8,
  backgroundColor: '#ffffff',
  zIndex: 99999,
  '@media only screen and (max-width: 1024px)': {
    display: 'none'
  }
});
const CursorDotOutline = (0,_styles_theme_config__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)('div', {
  pointerEvents: 'none',
  position: 'absolute',
  top: '50%',
  left: '50%',
  borderRadius: '50%',
  opacity: 0,
  transform: 'translate(-50%, -50%)',
  transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
  width: 60,
  height: 60,
  backgroundColor: 'transparent',
  border: '2px solid #fff',
  zIndex: 99999,
  '@media only screen and (max-width: 1024px)': {
    display: 'none'
  }
});

const Cursor = () => {
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    var cursor = {
      delay: 8,
      _x: 0,
      _y: 0,
      endX: window.innerWidth / 2,
      endY: window.innerHeight / 2,
      cursorVisible: true,
      cursorEnlarged: false,
      $dot: document.querySelector('.cursor-dot'),
      $outline: document.querySelector('.cursor-dot-outline'),
      init: function () {
        // @ts-ignore
        this.dotSize = this.$dot.offsetWidth; // @ts-ignore

        this.outlineSize = this.$outline.offsetWidth;
        this.setupEventListeners();
        this.animateDotOutline();
      },
      setupEventListeners: function () {
        var self = this;
        document.querySelectorAll('a').forEach(function (el) {
          el.addEventListener('mouseover', function () {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
          });
          el.addEventListener('mouseout', function () {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
          });
        });
        document.querySelectorAll('button').forEach(function (el) {
          el.addEventListener('mouseover', function () {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
          });
          el.addEventListener('mouseout', function () {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
          });
        });
        document.addEventListener('mousedown', function () {
          self.cursorEnlarged = true;
          self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function () {
          self.cursorEnlarged = false;
          self.toggleCursorSize();
        });
        document.addEventListener('mousemove', function (e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.endX = e.pageX;
          self.endY = e.pageY;
          self.$dot.style.top = self.endY + 'px';
          self.$dot.style.left = self.endX + 'px';
        });
        document.addEventListener('mouseenter', function (e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
        });
        document.addEventListener('mouseleave', function (e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
        });
      },
      animateDotOutline: function () {
        var self = this;
        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';
        requestAnimationFrame(this.animateDotOutline.bind(self));
      },
      toggleCursorSize: function () {
        var self = this;

        if (self.cursorEnlarged) {
          self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
          self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
          self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
          self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
      },
      toggleCursorVisibility: function () {
        var self = this;

        if (self.cursorVisible) {
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
        } else {
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
        }
      }
    };
    cursor.init();
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CursorDotOutline, {
      className: "cursor-dot-outline"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CursorDot, {
      className: "cursor-dot"
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Cursor);

/***/ }),

/***/ 165:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Footer_Footer; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./styles/theme.config.ts
var theme_config = __webpack_require__(184);
;// CONCATENATED MODULE: ./components/Footer/Footer.style.ts

const FooterBox = (0,theme_config/* styled */.zo)('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 999,
  '@media only screen and (min-width: 1024px)': {
    margin: 100
  },
  '@media only screen and (max-width: 1024px)': {
    flexDirection: 'column',
    justifyContent: 'center'
  }
});
const FooterInfoContainer = (0,theme_config/* styled */.zo)('div', {
  display: 'flex',
  alignItems: 'center',
  '@media only screen and (max-width: 1024px)': {
    margin: '10px 0'
  }
});
const MainText = (0,theme_config/* styled */.zo)('p', {
  display: 'flex',
  alignItems: 'center',
  color: '$main',
  fontSize: '$4',
  fontFamily: '$primary',
  marginRight: 20,
  svg: {
    margin: '0 10px'
  },
  '@media only screen and (max-width: 1024px)': {
    fontSize: '$2'
  }
});
const FooterLink = (0,theme_config/* styled */.zo)('a', {
  textDecoration: 'none',
  color: '$main',
  transition: '0.1s linear',
  margin: '0 10px',
  '&:hover': {
    color: '$white',
    transform: 'scale(1.1, 1.1)'
  }
});
const FooterTextLink = (0,theme_config/* styled */.zo)('a', {
  textDecoration: 'none',
  color: '$main',
  margin: '0 5px',
  '&:hover': {
    color: '$white'
  }
});
// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__(337);
;// CONCATENATED MODULE: ./components/Footer/Footer.tsx






const Footer = () => {
  const [year, setYear] = external_react_default().useState(null);
  external_react_default().useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(FooterBox, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(FooterInfoContainer, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainText, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_feather_.Code, {}), " with ", /*#__PURE__*/jsx_runtime_.jsx(external_react_feather_.Heart, {}), " and", ' ', /*#__PURE__*/jsx_runtime_.jsx(FooterTextLink, {
          href: "https://nextjs.org/",
          target: "_blank",
          children: "Next.js"
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FooterInfoContainer, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(MainText, {
        children: ["\xA9 ", year, " Arya Soni"]
      }), /*#__PURE__*/jsx_runtime_.jsx(FooterLink, {
        href: "https://github.com/aryasoni98",
        target: "_blank",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_feather_.GitHub, {})
      }), /*#__PURE__*/jsx_runtime_.jsx(FooterLink, {
        href: "https://twitter.com/aryasoni98",
        target: "_blank",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_feather_.Twitter, {})
      }), /*#__PURE__*/jsx_runtime_.jsx(FooterLink, {
        href: "https://www.linkedin.com/in/aryasoni/",
        target: "_blank",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_feather_.Linkedin, {})
      })]
    })]
  });
};

/* harmony default export */ var Footer_Footer = (Footer);

/***/ }),

/***/ 346:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);





const Header = ({
  title
}) => {
  const description = "👋 I'm Arya Soni, I have passion for inventing stuff, designing solutions and learning new things.";
  const link = 'https://aryasoni98.github.io/';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
      children: ["Arya Soni - ", title]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:title",
      content: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "twitter:title",
      content: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "description",
      content: description
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:type",
      content: "website"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:url",
      content: link
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:description",
      content: description
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "twitter:url",
      content: link
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "twitter:description",
      content: description
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      "http-equiv": "X-UA-Compatible",
      content: "ie=edge"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "theme-color",
      content: "#0da7ee"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
      rel: "icon",
      href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>\uD83D\uDC4B</text></svg>"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Barlow:wght@500&family=Inter:wght@600&family=JetBrains+Mono:wght@400&display=swap",
      rel: "stylesheet"
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Header);

/***/ }),

/***/ 55:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Navbar_Navbar; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./styles/theme.config.ts
var theme_config = __webpack_require__(184);
;// CONCATENATED MODULE: ./components/Navbar/Navbar.style.ts

const Nav = (0,theme_config/* styled */.zo)('nav', {
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  zIndex: 999,
  top: 0,
  left: 0,
  right: 0,
  background: '$dark',
  alignItems: 'center',
  height: 100,
  width: '100vw'
});
const NavContainer = (0,theme_config/* styled */.zo)('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '70%',
  '@media only screen and (max-width: 600px)': {
    width: '85%',
    justifyContent: 'space-around !important'
  },
  '@media only screen and (max-width: 1024px)': {
    width: '100vw',
    justifyContent: 'center'
  }
});
const TerminalText = (0,theme_config/* styled */.zo)('p', {
  fontFamily: '$mono',
  fontSize: '$3',
  color: '$main',
  '@media only screen and (max-width: 600px)': {
    fontSize: '$2',
    display: 'flex !important'
  },
  '@media only screen and (max-width: 320px)': {
    fontSize: '$1'
  },
  '@media only screen and (max-width: 1024px)': {
    display: 'none'
  }
});
const Navbar_style_NavLinks = (0,theme_config/* styled */.zo)('div', {
  display: 'flex',
  '@media only screen and (max-width: 600px)': {
    display: 'none'
  }
});
const NavLink = (0,theme_config/* styled */.zo)('a', {
  color: '$main',
  fontSize: '$3',
  textDecoration: 'none',
  margin: '0 10px',
  fontFamily: '$main',
  '&:hover': {
    color: '$white'
  }
});
const Toggle = (0,theme_config/* styled */.zo)('button', {
  background: 'none',
  outline: 'none',
  border: 'none',
  color: '$white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@media only screen and (min-width: 600px)': {
    display: 'none'
  }
});
const NavMenuContainer = (0,theme_config/* styled */.zo)('div', {
  zIndex: 999999,
  position: 'fixed',
  height: '100vh',
  width: '100vw',
  background: '#2A2A2A90',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});
const NavMenu = (0,theme_config/* styled */.zo)('div', {
  width: 280,
  height: 300,
  background: '$primary',
  zIndex: 9999999,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
});
const NavMenuLinks = (0,theme_config/* styled */.zo)('a', {
  textDecoration: 'none',
  color: '$white',
  fontSize: '$3',
  fontFamily: '$primary',
  margin: '0 0 10px 30px'
});
// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__(337);
;// CONCATENATED MODULE: ./components/Navbar/Navbar.tsx







const Navbar = ({
  location
}) => {
  const [nav, setNav] = external_react_default().useState(false);

  const ToggleNav = () => {
    setNav(prevState => !prevState);
  };

  const NavLinks = [{
    link: '/#home',
    title: 'Home'
  }, {
    link: '/#about',
    title: 'About'
  }, {
    link: '/#projects',
    title: 'Projects'
  }, {
    link: '/#contact',
    title: 'Contact'
  }, {
    link: 'https://www.buymeacoffee.com/aryasoni98',
    title: 'BuyMeACoffee'
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(NavMenuContainer, {
      className: nav ? '' : 'disabled',
      onClick: ToggleNav,
      children: /*#__PURE__*/jsx_runtime_.jsx(NavMenu, {
        children: NavLinks.map((link, index) => /*#__PURE__*/jsx_runtime_.jsx(NavMenuLinks, {
          href: link.link,
          onClick: ToggleNav,
          children: link.title
        }, index))
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Nav, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(NavContainer, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(TerminalText, {
          children: ["~/aryasoni/", location]
        }), /*#__PURE__*/jsx_runtime_.jsx(Navbar_style_NavLinks, {
          children: NavLinks.map((link, index) => /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
            href: link.link,
            children: link.title
          }, index))
        }), /*#__PURE__*/jsx_runtime_.jsx(Toggle, {
          onClick: ToggleNav,
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_feather_.Menu, {})
        })]
      })
    })]
  });
};

/* harmony default export */ var Navbar_Navbar = (Navbar);

/***/ }),

/***/ 233:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const SmoothScroll = () => {
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    let script = document.createElement('script');
    script.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js');
    script.setAttribute('crossorigin', 'anonymous');
    document.querySelector('body').appendChild(script);
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
};

/* harmony default export */ __webpack_exports__["Z"] = (SmoothScroll);

/***/ }),

/***/ 366:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _theme_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);

const globalStyle = (0,_theme_config__WEBPACK_IMPORTED_MODULE_0__/* .global */ .CO)({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    cursor: 'none !important',
    scrollBehavior: 'smooth'
  },
  html: {
    overflowX: 'hidden'
  },
  body: {
    background: '$dark',
    overflowX: 'hidden'
  },
  '::selection': {
    background: '#4560F060'
  },
  img: {
    userSelect: 'none'
  },
  'body::-webkit-scrollbar': {
    width: 10
  },
  h1: {
    fontFamily: '$main'
  },
  'body::-webkit-scrollbar-track': {
    background: '$primary'
  },
  'body::-webkit-scrollbar-thumb': {
    background: '$main'
  },
  'body::-webkit-scrollbar-thumb:hover': {
    background: '$main2'
  },
  'code, pre': {
    fontFamily: '$mono'
  },
  '.invalid': {
    color: '#F16D6D !important'
  },
  '.disabled': {
    display: 'none !important'
  }
});
/* harmony default export */ __webpack_exports__["Z"] = (globalStyle);

/***/ }),

/***/ 184:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zo": function() { return /* binding */ styled; },
/* harmony export */   "CO": function() { return /* binding */ global; },
/* harmony export */   "vs": function() { return /* binding */ ContentWrapper; }
/* harmony export */ });
/* unused harmony exports css, getCssString, keyframes */
/* harmony import */ var _stitches_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(459);
/* harmony import */ var _stitches_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stitches_react__WEBPACK_IMPORTED_MODULE_0__);

const {
  css,
  styled,
  global,
  getCssString,
  keyframes
} = (0,_stitches_react__WEBPACK_IMPORTED_MODULE_0__.createCss)({
  theme: {
    colors: {
      main: '#6B7C95',
      main2: '#8696AD',
      primary: '#37393E',
      dark: '#191919',
      white: '#F4F4F5',
      gradient: 'linear-gradient(93.05deg, #EF9797 3.98%, rgba(206, 126, 199, 0.801616) 35.29%, #A364D6 68.78%, #A1D0F9 97.44%)'
    },
    fontSizes: {
      1: '14px',
      2: '18px',
      3: '20px',
      4: '24px',
      5: '36px',
      6: '48px'
    },
    fonts: {
      main: 'Inter, sans-serif',
      primary: 'Barlow, sans-serif',
      mono: 'JetBrains Mono, monospace'
    }
  }
});
const ContentWrapper = styled('div', {
  position: 'relative',
  overflow: 'hidden'
});

/***/ })

};
;