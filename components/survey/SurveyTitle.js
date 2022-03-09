import styles from './ReOrderBlock.module.css'

export default function SurveyTitle({text}) {
  return (
    <div className={styles.surveyTitle}>
      {text}
    </div>
  )
}
