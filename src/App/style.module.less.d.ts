declare namespace StyleModuleLessNamespace {
  export interface IStyleModuleLess {
    container: string;
  }
}

declare const StyleModuleLessModule: StyleModuleLessNamespace.IStyleModuleLess & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleModuleLessNamespace.IStyleModuleLess;
};

export = StyleModuleLessModule;
