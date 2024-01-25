import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import Header from '../Header'

import ProjectItem from '../ProjectItem'

import Contacts from '../Contacts'

import './index.css'

const ProjectList = [
  {
    id: uuidv4(),
    projectName: 'Project Name',
    projectLink:
      'https://res.cloudinary.com/dl1iui8u1/image/upload/v1706116322/yoga-poster_h9b9hv.png',
    description:
      'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example',
  },
  {
    id: uuidv4(),
    projectName: 'Project Name',
    projectLink:
      'https://res.cloudinary.com/dl1iui8u1/image/upload/v1706116348/calender_vi3lhk.png',
    description:
      'What was your role, your deliverables, if the project was personal, freelancing',
  },
  {
    id: uuidv4(),
    projectName: 'Project Name',
    projectLink:
      'https://res.cloudinary.com/dl1iui8u1/image/upload/v1706116356/cup_fkwfom.png',
    description:
      'You can also add in the description the type of the project, if it was for web, mobile, electron.',
  },
]

class PersonalProjects extends Component {
  state = {
    projectName: '',
    projectLink: '',
    description: '',
    renderProjectList: ProjectList,
  }

  addNewProjectItemToList = projectDetails => {
    console.log(projectDetails)
    this.setState(prevState => ({
      renderProjectList: [...prevState.renderProjectList, projectDetails],
    }))
  }

  addProjectForm = event => {
    event.preventDefault()
    const {projectName, projectLink, description} = this.state
    const projectDetails = {id: uuidv4(), projectName, projectLink, description}
    // console.log(projectDetails)
    this.addNewProjectItemToList(projectDetails)
  }

  onChangeProjectName = event => {
    this.setState({projectName: event.target.value})
  }

  onChangeProjectLink = event => {
    this.setState({projectLink: event.target.value})
  }

  onChangeDescription = event => {
    this.setState({description: event.target.value})
  }

  viewProjectMethod = id => {
    console.log(id)
  }

  render() {
    const {
      projectId: projectName,
      projectLink,
      description,
      renderProjectList,
    } = this.state
    // console.log(projectName, projectLink, description)
    // console.log(ProjectList)
    // console.log(renderProjectList)

    return (
      <>
        <div className="main-container">
          <Header />

          <div className="content-container">
            <p className="job-title">UI/UX DESIGNER</p>
            <h1 className="person-name">Hello, my name is Madelyn Torff</h1>
            <p className="personal-description">
              Short text with details about you, what you do or your
              professional career. You can add more information on the about
              page.
            </p>
            <div className="buttons-container">
              <button className="projects-button" type="button">
                Projects
              </button>
              <button className="linkedin-button" type="button">
                Linkedin
              </button>
            </div>
          </div>
          <div className="form-container">
            <form
              className="add-project-form-container"
              onSubmit={this.addProjectForm}
            >
              <h1 className="add-project">Add Project</h1>
              <label className="label-element" htmlFor="projectName">
                Project Name
              </label>
              <input
                className="input-element"
                type="text"
                id="projectName"
                value={projectName}
                onChange={this.onChangeProjectName}
              />
              <label className="label-element" htmlFor="projectLink">
                Project Link
              </label>
              <input
                className="input-element"
                type="text"
                id="projectLink"
                value={projectLink}
                onChange={this.onChangeProjectLink}
              />
              <label className="label-element" htmlFor="description">
                Description
              </label>
              <textarea
                className="input-element-textarea"
                type="textarea"
                id="description"
                rows="10"
                cols="50"
                value={description}
                onChange={this.onChangeDescription}
              >
                {description}
              </textarea>
              <button className="add-button" type="submit">
                Add
              </button>
            </form>

            <img
              src="https://res.cloudinary.com/dl1iui8u1/image/upload/v1706168623/bg-footer-image_xegx5x.png"
              alt="footer-img"
              className="footer-img"
            />
          </div>
          <div className="projects-container">
            <h1 className="projects-heading">Projects</h1>
            {renderProjectList.map(eachProject => (
              <ProjectItem
                key={eachProject.id}
                projectDetails={eachProject}
                viewProjectMethod={this.viewProjectMethod}
              />
            ))}
            <Contacts />

            <img
              src="https://res.cloudinary.com/dl1iui8u1/image/upload/v1706168623/bg-footer-image_xegx5x.png"
              alt="footer-img"
              className="footer-img"
            />
          </div>
        </div>
      </>
    )
  }
}

export default PersonalProjects
