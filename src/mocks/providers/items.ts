import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "ATIVADA ITA – Imunoterápico injetável",
    "profilePic": "assets/img/produtos/ita2.png",
    "about": "O Imunoestimulante Terapêutico Ativado – ITA  é um potente imunomodulador formulado com os consagrados agentes modificadores da resposta imune β-glucana e a β-glucuronidase, associados aos princípios ativos dos antígenos purificados em baixas concentrações. Atua na supressão (ou anergia) das reações alérgicas, imunológicas e na modulação das células apresentadoras de antígenos da resposta imune natural e adaptativa humoral (células B) para formação de células T tolerantes (T regs), progressivamente a partir da primeira aplicação. Seus adjuvantes com ação imunoestimulante e imunomoduladora combinados aos antígenos em baixas concentrações conferem a propriedade de atuar de forma fisiológica na resposta imune agindo no equilíbrio da resposta de Th2 para Th1.",
  };

  constructor(public http: Http) {
    let items = [
      {
        "name": "ATIVADA ITA – Imunoterápico injetável",
        "profilePic": "assets/img/produtos/ita2.png",
        "about": "O Imunoestimulante Terapêutico Ativado – ITA  é um potente imunomodulador formulado com os consagrados agentes modificadores da resposta imune β-glucana e a β-glucuronidase, associados aos princípios ativos dos antígenos purificados em baixas concentrações. Atua na supressão (ou anergia) das reações alérgicas, imunológicas e na modulação das células apresentadoras de antígenos da resposta imune natural e adaptativa humoral (células B) para formação de células T tolerantes (T regs), progressivamente a partir da primeira aplicação. Seus adjuvantes com ação imunoestimulante e imunomoduladora combinados aos antígenos em baixas concentrações conferem a propriedade de atuar de forma fisiológica na resposta imune agindo no equilíbrio da resposta de Th2 para Th1.",
   
      },
      {
        "name": "ALPRÉ DEPOT +",
        "profilePic": "assets/img/produtos/alpre2.png",
        "about": "Tradicional tratamento imunoterápico. Apresenta-se em 3 séries de diluições e concentrações progressivas. São preparados em suspensão de gel de hidróxido de alumínio. Tem a finalidade de promover uma absorção lenta e contínua do antígeno. O conservante utilizado é o fenol. Consiste na administração de doses regulares crescentes com intervalos semanais na fase de indução e quinzenais e posteriormente mensais na fase de manutenção."
      },
      {
        "name": "ALGINATO",
        "profilePic": "assets/img/produtos/alginato.png",
        "about": "Imunoterapia clássica com alérgenos utilizada há décadas no Brasil. Apresenta-se em concentrações de potência única, definidas de acordo com a sensibilidade, constituição e faixa etária do paciente. Tem a finalidade de promover uma absorção lenta e contínua do antígeno. O conservante utilizado é o fenol. Consiste na administração de doses regulares crescentes com intervalos semanais na fase de indução e quinzenais e posteriormente mensais na fase de manutenção."
      },
      {
        "name": "SUBLINGUAL ITOL",
        "profilePic": "assets/img/produtos/itol1.png",
        "about": "São preparados em solução salina glicerinada a 0,3%. O conservante utilizado é a glicerina. Deve ser administrado de preferência pela manhã e em jejum. A técnica e intervalos de aplicação depende da experiência do médico e sensibilidade de cada paciente."
      },
      
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
