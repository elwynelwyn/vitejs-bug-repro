Repro of a bug I am getting when porting code into a Vite build.

In this example I have used a yarn workspace to simulate our private npm package, "external-package-example".
This is built with babel, rollup and published to private npm - the "dist" folder shows the built+published code.

```
error during build:
Error: Transform failed with 1 error:
src.e2eeede1.js:12:152: error: Expected ";" but found ":"
```

esbuild seems to be generating invalid code, like:

```
var ModalSize={SMALL:"small",MEDIUM:"medium",LARGE:"large",AUTO:"autoWidth"};cn.bind(styles$7);{"data-testid":PropTypes.string,isOpen:PropTypes.bool,title:PropTypes.string,onClose:PropTypes.func,children:PropTypes.node,buttons:PropTypes.node,isClosedOnOverlayClick:PropTypes.bool,size:PropTypes.oneOf([ModalSize.SMALL,ModalSize.MEDIUM,ModalSize.LARGE,ModalSize.AUTO]),hideFooter:PropTypes.bool// eslint-disable-line react/boolean-prop-naming
},{"data-testid":"tui-modal",isOpen:!1,title:null,size:ModalSize.MEDIUM,isClosedOnOverlayClick:!1};
```
(floating objects, not assigned to a variable or to the "Modal" component)