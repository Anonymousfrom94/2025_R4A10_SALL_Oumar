import { Injectable } from '@angular/core';
import { Travel } from '../type/TravelType';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  travels: Array<Travel> = [];

  idList: Array<number> = [0];

  DESTINATIONS: string[] = [
    'Bali, Indonésie',
    'Kyoto, Japon',
    'Santorin, Grèce',
    'Reykjavik, Islande',
    'Marrakech, Maroc',
    'Venise, Italie',
    'Rio de Janeiro, Brésil',
    'Phuket, Thaïlande',
    'New York, États-Unis',
    'Le Cap, Afrique du Sud',
    'Sydney, Australie',
    'Hanoï, Vietnam',
    'Toronto, Canada',
    'Bangkok, Thaïlande',
    'Dubaï, Émirats Arabes Unis',
    'Londres, Royaume-Uni',
    'Buenos Aires, Argentine',
    'Copenhague, Danemark',
    'Amsterdam, Pays-Bas',
    'Lisbonne, Portugal',
  ];
  
  DESCRIPTIONS: string[] = [
    'Découvrez une destination inoubliable où aventure et détente se mêlent harmonieusement.',
    "Laissez-vous séduire par les paysages à couper le souffle et l'hospitalité locale.",
    'Une expérience unique entre culture ancestrale et modernité vibrante.',
    'Plongez dans une ambiance magique et laissez-vous surprendre par chaque recoin de cette ville fascinante.',
    'Entre traditions et innovations, cette destination vous réserve bien des surprises.',
    'Savourez la cuisine locale, explorez les lieux emblématiques et créez des souvenirs mémorables.',
    "Un havre de paix où la nature et l'architecture forment une harmonie parfaite.",
    'Vivez une immersion totale dans une ville aux mille contrastes et aux paysages enchanteurs.',
    "Profitez de plages paradisiaques, d'activités inoubliables et d'une culture envoûtante.",
    'Admirez les merveilles naturelles et architecturales qui font la renommée de cette destination.',
    "Laissez-vous porter par l'énergie de la ville et partez à la rencontre des habitants chaleureux.",
    "Un lieu idéal pour les amateurs d'aventure et de découverte, entre montagnes et océans.",
    'Baladez-vous à travers les ruelles animées et découvrez des trésors cachés à chaque coin de rue.',
    'Un mélange parfait entre traditions séculaires et modernité effervescente.',
    "Destination idéale pour les amoureux de la nature et les passionnés d'histoire.",
    'Découvrez une ville au charme intemporel et aux panoramas spectaculaires.',
    'Laissez-vous charmer par la diversité culturelle et la richesse historique de cette ville.',
    'Savourez des instants magiques dans une atmosphère unique et inspirante.',
    'Explorez un univers fascinant où chaque instant est une nouvelle découverte.',
    'Un voyage qui promet émerveillement, détente et découvertes inoubliables.',
  ];
  
  PRIX: number[] = [
    799, 899, 999, 1099, 1199, 1299, 1399, 1499, 1599, 1699, 1799, 1899, 1999, 2099, 2199, 2299, 2399, 2499, 2599, 2699,
  ];
  
  constructor() { }

  public insertTravel(destination: string, description: string, prix: number, imageUrl: string){
    let travel: Travel = {
      id: this.generateId(),
      imageUrl: imageUrl,
      destination: destination,
      description: description,
      prix: prix
    };
    this.travels.push(travel);
  }

  findById(id: number): Travel | undefined{
    return this.travels.find((t) => t.id === id);
  }

  public deleteById(id: number){
    for(let travel of this.travels){
      if(travel.id == id){
        this.travels.splice(this.travels.indexOf(travel), 1);
      }
    }
  }

  generateId(){
    let random: number = 0;
    while(this.idList.includes(random)){
      random = Math.trunc(Math.random() * 1500000);
    }
    return random;
  }
}
