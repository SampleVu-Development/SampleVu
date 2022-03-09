import RequiredQuestion from "./RequiredQuestion"
import MultipleQuestion from "./MultipleQuestion"
import CreateQuestion from "./CreateQuestion"

export default function SurveyCard({title, questionID, type, callback, data}) {
  // data is for multiple choice questions, an array, which stores all the options for multiple choice


  if (type == "required") {
    return (
      <RequiredQuestion questionID={questionID} title={title} callback={callback} />
    ) 
  }

  if (type == "multiple") {
    return (
      <MultipleQuestion questionID={questionID} title={title} data={data} callback={callback} />
    )
  }

  if (type == "create") {
    return (
      <CreateQuestion callback={callback} />
    )
  }


  return (
    <p>default</p>
  )
}
