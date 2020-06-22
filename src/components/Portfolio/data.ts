export interface IProject {
  title: string;
  description: string;
  imageSrc: string;
}

const projects: IProject[] = [
  {
    title: 'Taiyo Sushi - Mobile App',
    description: 'An app to order japanese food from Taiyo\'s store',
    imageSrc: '/Taiyosushi.jpg'
  },
  {
    title: 'Fumasil - Backend',
    description: 'A motivation app to help users to quit smoking',
    imageSrc: 'fumasil.jpg'
  }
]

export default projects;