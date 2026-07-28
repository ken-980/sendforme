import { HSAccordion, IStaticMethods } from "flyonui/flyonui";

declare global {
  interface Window {
    _: any;
    $: any;
    jQuery: any;
    DataTable: any;
    Dropzone: any;
    noUiSlider: any;
    HSStaticMethods: IStaticMethods;
    //HSAccodion: typeof HSAccordion;
  }
}

export {};
