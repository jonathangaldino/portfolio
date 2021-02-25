import { Props as Links } from '../Project/Links';

export interface IProject {
  title: string;
  description: string;
  imageSrc: string;
  links: Links
}

const projects: IProject[] = [
  {
    title: 'Taiyo Sushi - Mobile App',
    description: `An app to order japanese food from Taiyo\'s store. The users of the app will be able to see the
    menu of the restaurant, book a table and exchange Taiyo\'s 
    premium points in items like t-shirts and hats. This app was created using
    React Native, Typescript and Redux.`,
    imageSrc: '/Taiyosushi.webp',
    links: {
      google: "https://play.google.com/store/apps/details?id=com.tayoapp&hl=pt_BR",
      apple: "https://apps.apple.com/br/app/taiyo-sushi/id1475164127"
    }
  }
]

export default projects;