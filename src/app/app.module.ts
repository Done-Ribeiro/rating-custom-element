import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { RatingComponent } from './rating.component';

@NgModule({
  declarations: [
    RatingComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  entryComponents: [RatingComponent]/*o que o entryComponents faz por traz dos panos eh ==>
                        dizer pro angular carregar este componente... embora eu nao tenha uma tag pra ele
                        pois em algum ponto da aplicacao eu irei carrega-lo via script dinamicamente
                        ... por esta razao... nao remova o codigo deste componente... via tree shaking
                        [tree shaking --> apaga os componentes nao utilizados]*/
})
export class AppModule {
  constructor(private injector: Injector) {
    //atravez desta funcao eh que valor realmente criar nosso componente personalizado
    const component = createCustomElement(RatingComponent, { injector })//aqui estamos de posse do RatingComponent
    //agora precisamos registrar este componente com um custom elements
    /*define() --> eh o que define um componente
      1º parametro => espera o nome do elemento que vamos registrar
      2º parametro => passa uma referencia pro componente que acabamos de criar*/
    customElements.define('mt-rating', component)//customElements fica disponibilizado como um objeto global
  }
  ngDoBootstrap() { }
}
