import {Component} from 'react'

import TabItem from './components/TabItem'
import ProjectItem from './components/ProjectItem'
import Header from './components/Header'

import './App.css'

const tabsList = [
  {tabId: 'STATIC', displayText: 'Static'},
  {tabId: 'RESPONSIVE', displayText: 'Responsive'},
  {tabId: 'DYNAMIC', displayText: 'Dynamic'},
  {tabId: 'REACTJS', displayText: 'ReactJs'},
]

const projectsList = [
  {
    projectId: 0,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
    title: 'Music Page',
    link: '#',
    description:
      'The music page enables the users to browse through the images of all-time favorite music albums.',
  },
  {
    projectId: 1,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    title: 'Tourism Website',
    link: '#',
    description:
      'A tourism website enables the user to browse through the images of popular destinations.',
  },
  {
    projectId: 2,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s1-img.png',
    title: 'Advanced Technologies',
    link: '#',
    description:
      'A website that gives you a basic understanding of Advanced Technologies.',
  },
  {
    projectId: 4,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
    title: 'VR Website',
    link: '#',
    description:
      'VR Website enables users to explore AR and VR Products and Industry happenings.',
  },
  {
    projectId: 5,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    title: 'Food Munch',
    link: '#',
    description: 'Food Much Website is a user-centric food tech website.',
  },
  {
    projectId: 6,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
    title: 'Portfolio',
    link: '#',
    description:
      'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
  },

  {
    projectId: 8,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: 'Speed Typing Test',
    link: '#',
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
  },
  {
    projectId: 9,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: 'Random Joke Page',
    link: '#',
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
  },
  {
    projectId: 10,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
    title: 'Sizing An Image',
    link: '#',
    description:
      'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
  },
  {
    projectId: 11,
    category: 'REACTJS',
    imageURL:
      'https://res.cloudinary.com/dd5n3kmqc/image/upload/v1668221134/emoji-game-lg_igpoup.png',
    title: 'Emoji Game',
    link: 'https://emojigamebysony.ccbp.tech/',
    description: 'This is a reactjs game web application.',
  },
  {
    projectId: 12,
    category: 'REACTJS',
    imageURL:
      'https://res.cloudinary.com/dd5n3kmqc/image/upload/v1668221135/money-manager_ggzafa.png',
    title: 'Money Manager',
    link: 'https://inexmangerbyso.ccbp.tech/',
    description:
      'This is a reactjs web application.Money manager is used to manage your expenses,income and balance amount you have.',
  },
  {
    projectId: 13,
    category: 'REACTJS',
    imageURL:
      'https://res.cloudinary.com/dd5n3kmqc/image/upload/v1668222010/app-store-lg-output-v2_kvxlxd.png',
    title: 'App Store',
    link: 'https://appstorepage8.ccbp.tech/',
    description:
      'This is a responsive reactjs web application.App store page which filters the section you have selected.',
  },
  {
    projectId: 14,
    category: 'REACTJS',
    imageURL:
      'https://res.cloudinary.com/dd5n3kmqc/image/upload/v1668221134/googlesearch_uhqgdu.png',
    title: 'Google Search Page',
    link: 'https://sonygoogle.ccbp.tech/',
    description:
      'This is a responsive reactjs web application.Google Search which searches the browse text and insert the text inside it.',
  },
  {
    projectId: 15,
    category: 'REACTJS',
    imageURL:
      'https://res.cloudinary.com/dd5n3kmqc/image/upload/v1668221133/browser-history-lg-output_bawhfx.png',
    title: 'Browser History Clone',
    link: 'https://browserhistory8.ccbp.tech/',
    description:
      'This is a responsive reactjs web application.Browser History mini project design and functionality with search and delete functionality using ReactJS.',
  },
  {
    projectId: 16,
    category: 'REACTJS',
    imageURL:
      'https://res.cloudinary.com/dd5n3kmqc/image/upload/v1668221134/comments-app-lg_pshgkw.png',
    title: 'Comments Page',
    link: 'https://commentpage.ccbp.tech/',
    description:
      'This is a responsive reactjs web application.you can comment here.',
  },
  {
    projectId: 17,
    category: 'REACTJS',
    imageURL:
      'https://res.cloudinary.com/dd5n3kmqc/image/upload/v1668221134/appointments-app_k30ovo.png',
    title: 'Add Appointment',
    link: 'https://appointmentbyso.ccbp.tech/',
    description:
      'This is a responsive reactjs web application.you can add appointment and also if important you can give a star.',
  },
  {
    projectId: 18,
    category: 'REACTJS',
    imageURL:
      'https://res.cloudinary.com/dd5n3kmqc/image/upload/v1668221134/gallery-lg-output_hsxhb0.png',
    title: 'Gallery Page',
    link: 'https://galleryview.ccbp.tech/',
    description:
      'This is a responsive reactjs web application.You can view the photos.',
  },
  //   {
  //     projectId: 19,
  //     category: 'REACTJS',
  //     imageURL: '',
  //     title: '',
  //     link: '',
  //     description: 'This is a responsive reactjs web application..',
  //   },
  //   {
  //     projectId: 1,
  //     category: 'REACTJS',
  //     imageURL: '',
  //     title: '',
  //     link: '',
  //     description: 'This is a responsive reactjs web application..',
  //   },
]

class App extends Component {
  state = {activeTabId: tabsList[0].tabId}

  onTabChange = tabId => {
    this.setState({activeTabId: tabId})
  }

  getFilteredProjectsList = () => {
    const {activeTabId} = this.state
    const filteredProjects = projectsList.filter(
      eachitem => eachitem.category === activeTabId,
    )
    return filteredProjects
  }

  render() {
    const filteredProjects = this.getFilteredProjectsList()
    const {activeTabId} = this.state
    return (
      <div className="app-container">
        <Header />
        <h1 className="title">Projects</h1>
        <p className="description">
          Your skills and achievements showcase your strengths and abilities.
          Speak about any new skills or software you learnt to perform the
          project responsibilities.
        </p>

        <ul className="tabs-container">
          {tabsList.map(tabDetails => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              onTabChange={this.onTabChange}
              isActive={activeTabId === tabDetails.tabId}
            />
          ))}
        </ul>

        <ul className="project-list-container">
          {filteredProjects.map(projectDetails => (
            <ProjectItem
              key={projectDetails.projectId}
              projectDetails={projectDetails}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
