import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { aviableLocales, LocalService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe, UpperCasePipe, TitleCasePipe,
    DatePipe,
  ],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {

  localeService = inject(LocalService);
  currentLocale = this.localeService.getLocale();

  nameLower = signal('Gonzalo')
  nameUpper = signal('GONZALO')
  fullName = signal('GoNzAlO LaVaDo')

  customDate = signal( new Date() )

  tickDateEffect = effect( (onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date())
    }, 1000)

    onCleanup(() => {
      clearInterval(interval)
      this.tickDateEffect.destroy()
    })

  })

  changeLocale(locale: aviableLocales) {
    this.localeService.changeLocale(locale);
  }

}
