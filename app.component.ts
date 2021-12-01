import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  ProgressBar,
  ILoadedEventArgs,
  ProgressTheme,
  AnimationModel,
} from '@syncfusion/ej2-progressbar';

/**
 * RTl sample
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public type: string = 'Circular';
  public height: string = '170';
  public width: string = '170';
  public min: number = 0;
  public max: number = 100;
  public value: number = 20;
  public thickness: number = 18;
  public segmentcount: number = 15;
  public animation: AnimationModel = { enable: true, duration: 1000, delay: 0 };
  @ViewChild('donut')
  public donut: ProgressBar;
  public onClick = () => {
    this.donut.refresh();
  };

  public load(args: ILoadedEventArgs): void {
    let div: HTMLCollection = document.getElementsByClassName(
      'progress-text-align'
    );
    // let selectedTheme: string = location.hash.split('/')[1];
    // selectedTheme = selectedTheme ? selectedTheme : 'Material';
    // args.progressBar.theme = <ProgressTheme>(
    //   (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
    //     .replace(/-dark/i, 'Dark')
    //     .replace(/contrast/i, 'Contrast')
    // );
    // if (
    //   args.progressBar.theme === 'HighContrast' ||
    //   args.progressBar.theme === 'Bootstrap5Dark' ||
    //   args.progressBar.theme === 'BootstrapDark' ||
    //   args.progressBar.theme === 'FabricDark' ||
    //   args.progressBar.theme === 'TailwindDark' ||
    //   args.progressBar.theme === 'MaterialDark'
    // ) {
    //   for (let i = 0; i < div.length; i++) {
    //     div[i].setAttribute('style', 'color:white');
    //   }
    // }
  }
}
