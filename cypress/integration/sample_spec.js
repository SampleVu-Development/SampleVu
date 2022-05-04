describe('Pages Load', () => {
  it('Main Project Dashboard Loads', () => {
    cy.visit('http://localhost:3000/main-projects-dashboard')
  })
  it('Project Dashboard Loads', () => {
    cy.visit('http://localhost:3000/project-dashboard')
  })
  it('Manage Samples Loads', () => {
    cy.visit('http://localhost:3000/manage-samples')
  })
  it('Results Loads', () => {
    cy.visit('http://localhost:3000/results')
  })
  it('Survey Demo Loads', () => {
    cy.visit('http://localhost:3000/survey-demo')
  })
  it('Add Sample Loads', () => {
    cy.visit('http://localhost:3000/create-sample')
  })
})

describe('Clicks Work', () => {
  it('Main Project Dashboard Clicks To Project Dashboard', () => {
    cy.visit('http://localhost:3000/main-projects-dashboard')
      .wait(500)
      .get(
        '#__next > section > section > section > div:nth-child(2) > div > div > div:nth-child(1) > a > div'
      )
      .click()
  })
  it('Project Dashboard Clicks to Survey Demo', () => {
    cy.visit('http://localhost:3000/project-dashboard')
      .wait(500)
      .get(
        '#__next > section > section > section > div:nth-child(2) > div > div > div:nth-child(2) > div.ant-row > div:nth-child(1) > div > div.ant-card-body > div > button'
      )
      .click()
  })
  it('Project Dashboard Clicks to Collaborators', () => {
    cy.visit('http://localhost:3000/project-dashboard')
      .wait(500)
      .get(
        '#__next > section > section > section > div:nth-child(2) > div > div > div:nth-child(2) > div.ant-row > div:nth-child(2) > div > div.ant-card-body > div > button'
      )
      .click()
  })
  it('Project Dashboard Clicks to Manage Samples', () => {
    cy.visit('http://localhost:3000/project-dashboard')
      .wait(500)
      .get(
        '#__next > section > section > section > div:nth-child(2) > div > div > div:nth-child(2) > div.ant-col > div > div.ant-card-head > div > div.ant-card-extra > div > div:nth-child(2) > a > button'
      )
      .click()
  })
  it('Project Dashboard Clicks to Results', () => {
    cy.visit('http://localhost:3000/project-dashboard')
      .wait(500)
      .get(
        '#__next > section > section > section > div:nth-child(2) > div > div > div:nth-child(2) > div.ant-col > div > div.ant-card-head > div > div.ant-card-extra > div > div:nth-child(3) > a > button'
      )
      .click()
  })
  it('Project Dashboard Clicks to Create Samples', () => {
    cy.visit('http://localhost:3000/project-dashboard')
      .wait(500)
      .get(
        '#__next > section > section > section > div:nth-child(2) > div > div > div:nth-child(2) > div.ant-col > div > div.ant-card-head > div > div.ant-card-extra > div > div:nth-child(1) > a > button'
      )
      .click()
  })
})
