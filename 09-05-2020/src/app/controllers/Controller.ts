import { Init } from '../interfaces';
import { WindowSmooth } from '../models/WindowSmooth';
import { TabMenu } from '../models/TabMenu';
import { Accordion } from '../models/Accordion';
import { SmoothScroll } from '../models/SmoothScroll';

export class Controller implements Init<Controller> {


  constructor() { }

  initWindowSmooth(): WindowSmooth {
    return new WindowSmooth().init()
  }

  initTabMenu(): TabMenu {
    return new TabMenu().init()
  }

  iniAccordion() {
    return new Accordion().init()
  }

  initSmoothScroll() {
    return new SmoothScroll().init()
  }

  init(): this {
    console.log(this)
    return this
  }

}