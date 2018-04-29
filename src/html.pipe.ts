import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'html',
  pure: false
})
export class HtmlPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) {
  }

  transform(value: string, args?: any): any {
    console.log(value);
    return this._sanitizer.bypassSecurityTrustHtml(value);
  }

}
