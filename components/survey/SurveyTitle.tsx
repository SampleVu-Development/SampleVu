import { GetServerSideProps } from 'next'
import { Card } from 'antd'
/*
  TODO: Survey Title Card
  Contains title of survey, along with survey description(?)
  i.e., there are two text boxes, one large and one small

  Title card, along with Main StarRating Card, should be immovable

  Like Google forms, may contain custom styling

  Whether it's editable should be based on user session (to be handled later
  via useSession or custom Hook or state management like Recoil atom)
 */

// @ts-ignore
// props to be passed through SurveyPage in ServerSideProps? To be decided
const SurveyTitle = ({ title, description, editable }) => {
  // should manage editable state, possibly passed through props?
  // should communicate project title and sample title? if on taster survey
  // maybe split into EditableSurveyTitle and just SurveyTitle

  return (
    <div className="flex justify-center p-2.5 text-center">
      <Card className="w-5/6 max-w-xl rounded-xl border-gray-300">
        <h1 className="font-bold">{title}</h1>
        <p>{description}</p>
      </Card>
    </div>
  )
}

export default SurveyTitle
